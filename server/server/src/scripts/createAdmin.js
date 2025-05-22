import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
const envPath = join(__dirname, '../../.env');
const result = config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

// Create Supabase client with service role key
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const createAdminUser = async () => {
  try {
    console.log('Attempting to set up admin user...');
    
    const email = 'admin@milehighdnatesting.com';
    const password = 'Admin123!'; // You should change this after first login

    // First, get the existing profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return;
    }

    if (!profile) {
      console.error('Profile not found');
      return;
    }

    console.log('Found existing profile:', profile);

    // Check if auth user exists
    const { data: authUser, error: authCheckError } = await supabase.auth.admin.getUserByEmail(email);
    
    if (authCheckError && authCheckError.status !== 404) {
      console.error('Error checking auth user:', authCheckError);
      return;
    }

    if (authUser) {
      console.log('Auth user already exists');
      return;
    }

    // Create the auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        role: 'admin'
      }
    });

    if (authError) {
      console.error('Error creating auth user:', authError);
      return;
    }

    console.log('✅ Auth user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Please change the password after first login.');

    // Update the profile with the auth user's ID
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ id: authData.user.id })
      .eq('email', email);

    if (updateError) {
      console.error('Error updating profile:', updateError);
      return;
    }

    console.log('✅ Profile updated with auth user ID');
  } catch (error) {
    console.error('Error in createAdminUser:', error);
  }
};

// Run the function
createAdminUser(); 