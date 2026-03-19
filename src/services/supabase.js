import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://anbwkecnlprjkiokzmiy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYndrZWNubHByamtpb2t6bWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MDUwMzMsImV4cCI6MjA4ODI4MTAzM30.UV2Y3vv1TA9VQ7Gm8yBb16eFWoqMwREr2iS0liJbcFQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
