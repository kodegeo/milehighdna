const fetch = require('node-fetch');

describe('Admin Authentication', () => {
  test('should authenticate with valid admin code', async () => {
    const response = await fetch('http://localhost:3001/api/admin/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adminCode: process.env.ADMIN_SECRET })
    });

    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  test('should reject invalid admin code', async () => {
    const response = await fetch('http://localhost:3001/api/admin/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adminCode: 'invalid-code' })
    });

    const data = await response.json();
    expect(response.status).toBe(401);
    expect(data.success).toBe(false);
  });
}); 