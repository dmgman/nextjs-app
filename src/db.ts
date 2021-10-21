import { createClient } from "@supabase/supabase-js";

export async function openDB() {

  const supabaseUrl = "https://auxdmhxyvxxiywxnwwvx.supabase.co";
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDgxMDg0MiwiZXhwIjoxOTUwMzg2ODQyfQ.oN2jOIAe4ZgN2PKbLbguvDh0SAjjx7isVsj97Qwnw-Y';
  const supabase = createClient(supabaseUrl, supabaseKey);

  return supabase;
}
