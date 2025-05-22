#!/bin/bash

# Load environment variables from the correct path
export $(grep -v '^#' .env | xargs)

# Set the email and password
EMAIL="admin@milehighdnatesting.com"
PASSWORD="Admin123!"

# Extract the project reference from the URL
PROJECT_REF=$(echo $VITE_SUPABASE_URL | cut -d'/' -f3 | cut -d'.' -f1)

# Create the user using Supabase REST API
curl -X POST "https://$PROJECT_REF.supabase.co/auth/v1/admin/users" \
  -H "apikey: $VITE_SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $VITE_SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"$EMAIL\",
    \"password\": \"$PASSWORD\",
    \"email_confirm\": true,
    \"user_metadata\": {
      \"role\": \"admin\"
    }
  }"

echo -e "\n✅ Admin user created successfully!"
echo "Email: $EMAIL"
echo "Password: $PASSWORD"
echo "Please change the password after first login." 