import { supabase } from '../infrastructure/supabaseClient';

const createProfilesTable = async () => {
  try {
    const { error } = await supabase.rpc('create_profiles_table');

    if (error) {
      console.error('Error creating profiles table:', error);
      return;
    }

    console.log('Profiles table created successfully');
  } catch (error) {
    console.error('Error in createProfilesTable:', error);
  }
};

// Run the function
createProfilesTable(); 