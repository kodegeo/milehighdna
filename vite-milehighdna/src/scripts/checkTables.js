import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file (2 levels up from scripts folder)
const envPath = join(__dirname, '../../.env');
console.log('Looking for .env file at:', envPath);

try {
  const envConfig = dotenv.parse(readFileSync(envPath));

  // Create Supabase client
  const supabase = createClient(
    envConfig.VITE_SUPABASE_URL,
    envConfig.VITE_SUPABASE_ANON_KEY
  );

  const checkTables = async () => {
    try {
      console.log('Attempting to connect to Supabase...');
      
      // Check if profiles table exists
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .limit(1);

      if (profilesError) {
        console.log('Error accessing profiles table:', profilesError.message);
      } else {
        console.log('✅ Profiles table exists and is accessible');
        console.log('Sample data:', profiles);
      }
    } catch (error) {
      console.error('Error in checkTables:', error);
    }
  };

  // Run the function
  checkTables();
} catch (error) {
  console.error('Error loading .env file:', error);
} 