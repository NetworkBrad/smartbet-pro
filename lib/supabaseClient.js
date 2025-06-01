import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbdyarltzijeesvomzdd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZHlhcmx0emlqZWVzdm9temRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3Nzg4MjMsImV4cCI6MjA2NDM1NDgyM30._-giZzrQjGPRecDB9Q0qnn5y3hSjYyDTKLsVsi7PQxk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
