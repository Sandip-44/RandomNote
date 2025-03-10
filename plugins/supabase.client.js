import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const supabaseUrl = "https://dydnoiitvhlanbqmtrmy.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZG5vaWl0dmhsYW5icW10cm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NDUxOTgsImV4cCI6MjA1MjIyMTE5OH0.D3MLho2ab6vkmzjJwtLpSGIed7qpuLUIZDq8Hd-xkik";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  return {
    provide: {
      supabase,
    },
  };
});
