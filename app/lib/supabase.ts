import { createClient } from '@supabase/supabase-js'

// Menggunakan process.env.NEXT_PUBLIC_SUPABASE_URL dan process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Log untuk debugging (hanya di development)
if (process.env.NODE_ENV === 'development') {
  console.log('=== Supabase Configuration Check (Server-side) ===')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'UNDEFINED')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'UNDEFINED')
  console.log('=================================================')
}

// Validasi environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables!')
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env.local file')
  
  // Fallback untuk development - pastikan untuk mengisi dengan nilai yang benar
  throw new Error(
    'Supabase environment variables are missing. Please create a .env.local file with:\n' +
    'NEXT_PUBLIC_SUPABASE_URL=your_supabase_url\n' +
    'NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key'
  )
}

// Validasi format URL dan key
if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
  console.warn('NEXT_PUBLIC_SUPABASE_URL format mungkin tidak valid')
}

if (supabaseAnonKey.length < 100) {
  console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY format mungkin tidak valid')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})