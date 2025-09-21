// server/src/infrastructure/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Use environment variables (configure these in Render)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Create the Supabase client with the service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default supabase;
