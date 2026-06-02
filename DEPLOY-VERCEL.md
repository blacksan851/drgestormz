# Pacote pronto para Vercel

Esta pasta foi separada para subir no GitHub e ligar direto na Vercel.

## O que usar na Vercel

- Build Command: `npm run build:vercel`
- Output Directory: `dist`

## Ficheiros importantes

- `package.json`
- `vercel.json`
- `.vercelignore`
- `.env.example`
- `src`
- `public`
- `supabase`

## Variáveis de ambiente que precisas colocar na Vercel

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SITE_BASE`
- `VITE_PUBLIC_APP_URL`
- `VITE_PAYSUITE_CHECKOUT_URL_BASIC_300`
- `VITE_PAYSUITE_CHECKOUT_URL_PRO_500`
- `VITE_APP_NAME`
- `VITE_LEGAL_NAME`
- `VITE_VERTICAL_LABEL`
- `VITE_TAGLINE`
- `VITE_HERO_TITLE`
- `VITE_HERO_DESCRIPTION`
- `VITE_SUPPORT_EMAIL`
- `VITE_SUPPORT_PHONE`
- `VITE_SUPPORT_WHATSAPP`
- `VITE_LOGIN_SUBTITLE`

## Antes do deploy

1. Subir esta pasta para um repositório GitHub.
2. Importar o repositório na Vercel.
3. Colar as variáveis de ambiente.
4. Confirmar no Supabase:
   - `Site URL`
   - `Redirect URLs`
   - SQL principal executado
   - Edge Functions de billing publicadas, se a cobrança real estiver ativa
