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

const checkAdminUser = async () => {
  try {
    const email = 'admin@milehighdnatesting.com';
    
    console.log('Checking auth user...');
    const { data: authUser, error: authError } = await supabase.auth.admin.getUserByEmail(email);
    
    if (authError) {
      console.error('Error checking auth user:', authError);
      return;
    }

    if (authUser) {
      console.log('✅ Auth user found:', {
        id: authUser.user.id,
        email: authUser.user.email,
        role: authUser.user.user_metadata?.role,
        email_confirmed: authUser.user.email_confirmed_at ? true : false
      });
    } else {
      console.log('❌ Auth user not found');
    }

    console.log('\nChecking profile...');
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (profileError) {
      console.error('Error checking profile:', profileError);
      return;
    }

    if (profile) {
      console.log('✅ Profile found:', profile);
    } else {
      console.log('❌ Profile not found');
    }

    // Check if the IDs match
    if (authUser && profile) {
      if (authUser.user.id === profile.id) {
        console.log('\n✅ Auth user ID matches profile ID');
      } else {
        console.log('\n❌ Auth user ID does not match profile ID');
        console.log('Auth ID:', authUser.user.id);
        console.log('Profile ID:', profile.id);
      }
    }
  } catch (error) {
    console.error('Error in checkAdminUser:', error);
  }
};

// Run the function
checkAdminUser(); 