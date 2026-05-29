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
- `npm run dev:demo`: modo demonstracao sem Supabase na porta `4174`
- `npm run preview:test`: abre o build de producao localmente na porta `4173`

## Teste rapido sem deploy

Se quiser validar como ficara publicado:

1. Rode `npm run build`
2. Rode `npm run preview:test`
3. Abra [http://127.0.0.1:4173](http://127.0.0.1:4173)

## Quando o Supabase bloquear o teste

Se quiser testar apenas o visual e a navegacao local sem depender do banco:

1. Rode `npm run dev:demo`
2. Abra [http://127.0.0.1:4174](http://127.0.0.1:4174)
