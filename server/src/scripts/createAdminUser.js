import { supabase } from '../infrastructure/supabaseClient';

const createAdminUser = async () => {
  try {
    // First, sign up the user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: 'admin@milehighdnatesting.com',
      password: 'Admin@123', // You should change this password after first login
      options: {
        data: {
          role: 'admin',
          full_name: 'Admin User'
        }
      }
    });

    if (signUpError) {
      console.error('Error creating admin user:', signUpError);
      return;
    }

    console.log('Admin user created successfully:', signUpData);

    // Then, update the user's role in the database
    const { error: updateError } = await supabase
      .from('profiles')
      .upsert({
        id: signUpData.user.id,
        email: 'admin@milehighdnatesting.com',
        role: 'admin',
        full_name: 'Admin User',
        updated_at: new Date().toISOString()
      });

    if (updateError) {
      console.error('Error updating user role:', updateError);
      return;
    }

    console.log('Admin role assigned successfully');
  } catch (error) {
    console.error('Error in createAdminUser:', error);
  }
};

// Run the function
createAdminUser(); 