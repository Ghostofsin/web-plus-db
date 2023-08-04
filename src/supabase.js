import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nuxlfhwlldytqsjrqngc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51eGxmaHdsbGR5dHFzanJxbmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NzYzMDksImV4cCI6MjAwMTU1MjMwOX0.eOhcx7lv1y2zi5-RSf7qYXHGnNnbnZ7uUAbnjw9aDE0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
