import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xglnuhkuzrmzqluxoerq.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbG51aGt1enJtenFsdXhvZXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNjY1MjMsImV4cCI6MjAyMjk0MjUyM30.aRbAQMnVRQKwHGq9_8VL_aWkDN4z_x0-UqPx2v5PUyQ'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
