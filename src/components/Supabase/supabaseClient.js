import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://slniqbrezydmnbcuksfz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbmlxYnJlenlkbW5iY3Vrc2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzUyMjEsImV4cCI6MjA2MDkxMTIyMX0.Drs3NrRRCd-vtPq_3AUVmOL8LOs_fCbaqXWLEbuPZr0";

export const supabase = createClient(supabaseUrl, supabaseKey);
