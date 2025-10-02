import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

const emailRegex =
  /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:\d{1,3}\.){3}\d{1,3}\])$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'EMAIL_INVALID' }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();

    const { error } = await supabase.from('waiting_list').insert({ email: email.toLowerCase() });

    if (error) {
      console.error('Supabase insert error', error);
      return NextResponse.json({ ok: false, error: 'SUPABASE_ERROR' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error('Waitlist POST error', error);
    return NextResponse.json({ ok: false, error: 'BAD_REQUEST' }, { status: 400 });
  }
}
