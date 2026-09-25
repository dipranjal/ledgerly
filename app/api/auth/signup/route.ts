import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (typeof email !== 'string' || typeof password !== 'string' || password.length < 6) {
    return NextResponse.json({ error: 'Enter a valid email and a password with at least 6 characters.' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  )

  const { data, error } = await supabase.auth.admin.createUser({
    email: email.trim().toLowerCase(),
    password,
    email_confirm: true,
  })

  if (error) {
    const duplicate = /already registered|already exists/i.test(error.message)
    return NextResponse.json({ error: duplicate ? 'An account already exists for this email.' : 'Unable to create your account.' }, { status: duplicate ? 409 : 400 })
  }

  return NextResponse.json({ userId: data.user?.id })
}
