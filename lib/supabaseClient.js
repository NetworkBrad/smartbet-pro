import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbdyarltzijeesvomzdd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Replace with full key if trimmed

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
