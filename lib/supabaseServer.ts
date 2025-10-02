import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL ?? 'https://bodpqqoqrwzlscziflzt.supabase.co';
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZHBxcW9xcnd6bHNjemlmbHp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODgwMzQ0NiwiZXhwIjoyMDc0Mzc5NDQ2fQ.PaVkQsOvsHUJuv9DAQw6bme_YX82mTxoZVUc0En2COQ';
let supabaseClient: SupabaseClient | null = null;

export function createSupabaseServerClient() {
  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL est manquant. Ajoutez-le à vos variables d\'environnement.');
  }

  if (!supabaseServiceRoleKey) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY est manquant. Ajoutez la clé de service Supabase à vos variables d\'environnement.'
    );
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  return supabaseClient;
}
