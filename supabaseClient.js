// Import Supabase client library
import { createClient } from '@supabase/supabase-js';

// Connect to Supabase using environment variables from Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ---------------------------
// Helper functions for auth
// ---------------------------

// Sign up a new user
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

// Sign in an existing user
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Sign out the current user
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Get the currently logged in user session
export function getUser() {
  return supabase.auth.getSession();
    }
