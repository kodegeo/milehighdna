# Admin Dashboard Setup

## Overview
The admin dashboard now includes four main tabs:
1. **Upload Results** - Upload DNA test results for existing customers
2. **Customer Overview** - View all customers and their results status
3. **Add Customer** - Add new customers to the database
4. **ID Verification** - Complete ID verification forms for customers

## Database Setup

### Required Table: `id_verifications`

Run the following SQL in your Supabase SQL editor to create the ID verifications table:

```sql
-- Create id_verifications table for storing ID verification data
CREATE TABLE IF NOT EXISTS id_verifications (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customerdb(id) ON DELETE CASCADE,
    id_type VARCHAR(50) NOT NULL,
    id_number VARCHAR(100) NOT NULL,
    id_issuer VARCHAR(100),
    id_expiry DATE,
    verification_date DATE NOT NULL,
    verified_by VARCHAR(100) NOT NULL,
    verification_notes TEXT,
    id_photo_uploaded BOOLEAN DEFAULT FALSE,
    signature_obtained BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_id_verifications_customer_id ON id_verifications(customer_id);
```

## Features

### 1. Upload Results Tab
- Select existing customers from dropdown
- Upload PDF test results
- Automatic file naming with customer info and date
- View uploaded PDFs directly

### 2. Customer Overview Tab
- Search customers by name or customer code
- View all customer information
- See which customers have results uploaded
- Direct links to view uploaded PDFs

### 3. Add Customer Tab
- Comprehensive customer information form
- Auto-generates customer codes if not provided
- Includes contact info, test type, address, and notes
- Form validation and success/error feedback

### 4. ID Verification Tab
- Select customer from dropdown
- Complete ID verification form with:
  - ID type and number
  - Issuer and expiry information
  - Verification date and admin name
  - Checkboxes for photo upload and signature
  - Notes field for additional information
- Updates existing verifications or creates new ones

## Usage

1. **Access the admin dashboard** at `/admin-uploader` (requires admin authentication)
2. **Navigate between tabs** using the tab navigation at the top
3. **Add new customers** using the "Add Customer" tab
4. **Complete ID verification** for customers using the "ID Verification" tab
5. **Upload results** for existing customers using the "Upload Results" tab
6. **View all customer data** using the "Customer Overview" tab

## Notes

- Customer codes are auto-generated in format: `MH{timestamp}{random}`
- ID verification data is linked to customers via foreign key
- All forms include proper validation and error handling
- The interface is responsive and works on mobile devices 