import { createClient } from "@supabase/supabase-js";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

const connection = createClient(supabaseUrl, supabaseAnonKey);
export default connection;