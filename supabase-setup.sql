-- Nobilis RH — Supabase setup for job applications (Recherche d'emploi)
-- Run in Supabase Dashboard → SQL Editor

-- 1. Applications table
create table if not exists public.candidatures (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  prenom text not null,
  nom text not null,
  email text not null,
  telephone text,
  lettre_motivation text,
  poste text not null,
  localisation text,
  type_contrat text,
  email_offre text,
  cv_filename text not null,
  cv_storage_path text,
  cv_url text,
  consentement boolean not null default true
);

alter table public.candidatures enable row level security;

drop policy if exists "Allow anonymous insert candidatures" on public.candidatures;
create policy "Allow anonymous insert candidatures"
  on public.candidatures
  for insert
  to anon
  with check (true);

-- 2. Storage bucket for CV files (private)
insert into storage.buckets (id, name, public)
values ('cvs', 'cvs', false)
on conflict (id) do update set public = false;

drop policy if exists "Allow anonymous upload cvs" on storage.objects;
create policy "Allow anonymous upload cvs"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'cvs');

-- Optional: allow reading uploaded files in Supabase Dashboard (service role bypasses RLS)
-- Anonymous users do NOT need SELECT — the site uploads only, Formspree receives the CV file.
