import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY;
console.log(supabaseUrl, supabaseApiKey);

export const supabase = createClient(supabaseUrl, supabaseApiKey);
