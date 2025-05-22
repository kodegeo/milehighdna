const { supabase } = require('../infrastructure/supabaseClient');

describe('Supabase Connection Tests', () => {
  test('should connect to Supabase and retrieve data from customerdb', async () => {
    try {
      const { data, error } = await supabase
        .from('customerdb')
        .select('*')
        .limit(1);

      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      console.log('customerdb data:', data);
    } catch (err) {
      console.error('Error testing customerdb connection:', err);
      throw err;
    }
  });

  test('should connect to Supabase and retrieve data from resultsdb', async () => {
    try {
      const { data, error } = await supabase
        .from('resultsdb')
        .select('*')
        .limit(1);

      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      console.log('resultsdb data:', data);
    } catch (err) {
      console.error('Error testing resultsdb connection:', err);
      throw err;
    }
  });

  test('should verify relationship between customerdb and resultsdb', async () => {
    try {
      // First get a customer
      const { data: customers, error: customerError } = await supabase
        .from('customerdb')
        .select('id')
        .limit(1);

      expect(customerError).toBeNull();
      expect(customers).toBeDefined();
      expect(customers.length).toBeGreaterThan(0);

      const customerId = customers[0].id;

      // Then get results for that customer
      const { data: results, error: resultsError } = await supabase
        .from('resultsdb')
        .select('*')
        .eq('customer_id', customerId);

      expect(resultsError).toBeNull();
      expect(results).toBeDefined();
      console.log('Results for customer:', results);
    } catch (err) {
      console.error('Error testing relationship:', err);
      throw err;
    }
  });
}); 