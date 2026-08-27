import React, { useEffect, useRef } from "react";

/**
 * helmetShim — drop-in replacement for `react-helmet-async`.
 *
 * WHY THIS EXISTS
 * react-helmet-async@2.0.5 is inert in this app: <Helmet> renders but never
 * writes to document.head. Verified by mounting <HelmetProvider><Helmet>
 * in a *fresh, isolated React root* outside the app tree — still nothing.
 * Not StrictMode, not a version regression (2.0.4 behaves identically), not
 * duplicate React/module instances, not canUseDOM (true at runtime), and it
 * throws no error. The result: no route ever set a <title> and the site had
 * no canonical tag anywhere, so every URL looked identical to a crawler.
 *
 * Rather than rewrite the metadata already present in 97 page components,
 * this module reimplements the same API and is aliased over the package in
 * vite.config.js. No page imports change, no copy changes.
 *
 * Supported children: <title>, <meta>, <link>, <script>, <html lang>.
 * Later-mounted instances win for the same tag, matching Helmet's behaviour.
 */

const MARK = "data-mh-seo";
const canUseDOM = typeof document !== "undefined";

const instances = [];
let seq = 0;

/* Elements we created or adopted on the last apply(), so we can undo them. */
let managed = [];
let originalTitle = null;

/* React prop name -> real HTML attribute name. */
const ATTR = {
  charSet: "charset",
  httpEquiv: "http-equiv",
  className: "class",
  itemProp: "itemprop",
};

function collect(children, out = []) {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === React.Fragment) {
      collect(child.props.children, out);
      return;
    }
    if (typeof child.type === "string") out.push(child);
  });
  return out;
}

function textOf(children) {
  if (children == null || typeof children === "boolean") return "";
  if (Array.isArray(children)) return children.map(textOf).join("");
  if (typeof children === "object") return "";
  return String(children);
}

/* Stable identity for a tag, so a later instance can override an earlier one. */
function keyFor(el, instanceId, index) {
  const { type, props } = el;
  if (type === "title") return "title";
  if (type === "html") return "html";
  if (type === "meta") {
    if (props.name) return `meta|name|${props.name}`;
    if (props.property) return `meta|property|${props.property}`;
    if (props.httpEquiv) return `meta|http-equiv|${props.httpEquiv}`;
    if (props.charSet) return "meta|charset";
    return `meta|${instanceId}|${index}`;
  }
  if (type === "link") {
    if (props.rel === "canonical") return "link|canonical";
    if (props.rel === "alternate") return `link|alternate|${props.hrefLang || props.hreflang || ""}`;
    return `link|${props.rel}|${props.href || ""}`;
  }
  // Multiple JSON-LD blocks per page are legitimate — keep them all.
  return `${type}|${instanceId}|${index}`;
}

function selectorFor(el) {
  const { type, props } = el;
  if (type === "meta") {
    if (props.name) return `meta[name="${CSS.escape(props.name)}"]`;
    if (props.property) return `meta[property="${CSS.escape(props.property)}"]`;
    if (props.httpEquiv) return `meta[http-equiv="${CSS.escape(props.httpEquiv)}"]`;
  }
  if (type === "link" && props.rel === "canonical") return 'link[rel="canonical"]';
  return null;
}

function undo() {
  managed.forEach((m) => {
    if (m.created) {
      m.el.remove();
    } else {
      Object.entries(m.prev).forEach(([k, v]) => {
        if (v == null) m.el.removeAttribute(k);
        else m.el.setAttribute(k, v);
      });
    }
  });
  managed = [];
}

function apply() {
  if (!canUseDOM) return;
  if (originalTitle === null) originalTitle = document.title;

  undo();

  /* Merge every mounted instance in mount order; later wins per key. */
  const merged = new Map();
  instances.forEach((inst) => {
    inst.els.forEach((el, i) => merged.set(keyFor(el, inst.id, i), el));
  });

  let title = null;
  const head = document.head;

  merged.forEach((el) => {
    const { type, props } = el;

    if (type === "title") {
      title = textOf(props.children);
      return;
    }

    if (type === "html") {
      Object.entries(props).forEach(([k, v]) => {
        if (k === "children" || v == null) return;
        const attr = ATTR[k] || k.toLowerCase();
        const root = document.documentElement;
        managed.push({ el: root, created: false, prev: { [attr]: root.getAttribute(attr) } });
        root.setAttribute(attr, String(v));
      });
      return;
    }

    /* Adopt a matching static tag from index.html rather than duplicating it. */
    const sel = selectorFor(el);
    const existing = sel ? head.querySelector(`${sel}:not([${MARK}])`) : null;

    if (existing) {
      const prev = {};
      Object.entries(props).forEach(([k, v]) => {
        if (k === "children" || v == null) return;
        const attr = ATTR[k] || k;
        prev[attr] = existing.getAttribute(attr);
        existing.setAttribute(attr, String(v));
      });
      managed.push({ el: existing, created: false, prev });
      return;
    }

    const node = document.createElement(type);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "children" || v == null) return;
      node.setAttribute(ATTR[k] || k, String(v));
    });
    const text = textOf(props.children);
    if (text) node.textContent = text;
    node.setAttribute(MARK, "true");
    head.appendChild(node);
    managed.push({ el: node, created: true });
  });

  document.title = title || originalTitle || document.title;
}

export function Helmet({ children }) {
  const entryRef = useRef(null);
  const idRef = useRef(null);
  if (idRef.current === null) idRef.current = ++seq;

  useEffect(() => {
    const entry = { id: idRef.current, els: [] };
    entryRef.current = entry;
    instances.push(entry);
    return () => {
      const i = instances.indexOf(entry);
      if (i !== -1) instances.splice(i, 1);
      entryRef.current = null;
      apply();
    };
  }, []);

  useEffect(() => {
    if (!entryRef.current) return;
    entryRef.current.els = collect(children);
    apply();
  });

  return null;
}

export function HelmetProvider({ children }) {
  return children;
}
HelmetProvider.canUseDOM = canUseDOM;

export class HelmetData {
  constructor(context = {}) {
    this.context = context;
  }
}

export default Helmet;
