// /server/config/products.js

export const products = [
    {
      id: "peace-of-mind-dna-kit",
      name: "Non-Legal Paternity Test",
      description: "At-home DNA testing for personal knowledge. Fast, private, and accurate.",
      category: "DNA Tests",
      price: 199,
      image: "/assets/peace-of-mind-kit.jpg",
      available: true,
      stripeProductId: "prod_SE7Kx9FIrmhpF6",  // Replace with your Stripe Product ID
      stripePriceId: "price_1RJf6IK2515KuCq2JBnXBDgO",   // Replace with your Stripe Price ID
    },
    {
      id: "siblingship-dna-kit",
      name: "Non Legal Siblingship Test",
      description: "This test helps determine whether two individuals are full or half siblings, or unrelated. It is designed for personal knowledge and peace of mind only. Samples are collected using a simple at-home cheek swab kit. Results are confidential and not admissible in court or for legal purposes.",
      category: "DNA Tests",
      price: 349,
      image: "/assets/peace-of-mind-kit.jpg",
      available: true,
      stripeProductId: "prod_SE7PiwVToKiXAx",
      stripePriceId: "price_1RJfAYK2515KuCq2o3E9ToM5Y",
    },
    {
        id: "grandparentage-dna-kit",
        name: "Non Legal Grandparentage Test",
        description: "A DNA test used to determine a biological relationship between a child and one or both alleged grandparents. This test is often used when the alleged father is unavailable.",
        category: "DNA Tests",
        price: 349,
        image: "/assets/peace-of-mind-kit.jpg",
        available: true,
        stripeProductId: "prod_SE7MrNGyNJH759",
        stripePriceId: "price_1RJf87K2515KuCq24feeajxY",
      },  
    {
      id: "mile-high-tshirt",
      name: "Mile High DNA T-Shirt",
      description: "Soft cotton T-shirt with Mile High DNA logo. Show your pride!",
      category: "Apparel",
      price: 29,
      image: "/assets/milehigh-tshirt.jpg",
      available: true,
      stripeProductId: "prod_live_ZZZZZZZZZZZZ",
      stripePriceId: "price_live_ZZZZZZZZZZZZ",
    },
  ];
  