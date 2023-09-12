import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://peyckltlcawfocyxxkiw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleWNrbHRsY2F3Zm9jeXh4a2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5OTk4NjQsImV4cCI6MjAwODU3NTg2NH0.VhoFfl57fzlUt8vLTSd49ZUEDtE1aae8oekbr09G7e0";

export const supabase = createClient(supabaseUrl, supabaseKey);
