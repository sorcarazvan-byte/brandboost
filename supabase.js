
import { createClient } from '@supabase/supabase-js';

// Provide default values for development to prevent initialization errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:3000';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'anonymous';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
