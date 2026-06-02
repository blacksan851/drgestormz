<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Dr Gestor MZ

## Testar localmente

**Prerequisites:** Node.js

1. Instale as dependencias:
   `npm install`
2. Confirme as variaveis em [.env.local](/C:/Users/Black%20Agency/Downloads/untitled/.env.local)
3. Para abrir o site localmente:
   `npm run dev:test`
4. Abra no navegador:
   [http://127.0.0.1:4173](http://127.0.0.1:4173)

## Modos uteis

- `npm run dev`: desenvolvimento normal na porta `3000`
- `npm run dev:test`: teste local fixo na porta `4173`
- `npm run build`: build padrao para cloud e Vercel
- `npm run build:hostinger`: build + pacote final da Hostinger
- `npm run build:vercel`: build direto para Vercel
- `npm run preview:test`: abre o build de producao localmente na porta `4173`

## Teste rapido sem deploy

Se quiser validar como ficara publicado:

1. Rode `npm run build`
2. Rode `npm run preview:test`
3. Abra [http://127.0.0.1:4173](http://127.0.0.1:4173)

## Deploy na Vercel

O projeto ja esta preparado para a Vercel.

- configuracao: [vercel.json](/C:/Users/Black%20Agency/Downloads/untitled/vercel.json)
- guia rapido: [docs/VERCEL-DEPLOY.md](/C:/Users/Black%20Agency/Downloads/untitled/docs/VERCEL-DEPLOY.md)
