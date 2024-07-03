# My Blue Challenge

## Configuração

1. Instale as dependências:
    ```bash
    pnpm install
    ```

2. Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

3. Inicie o Json Server:
    ```bash
    pnpm run json-server
    ```

## Testes

Para rodar os testes, use:
```bash
pnpm run test
```

## Estrutura do Projeto

lib/: Contém a configuração de instâncias e hooks para fetching de dados.

pages/: Contém as páginas do Next.js.

context/: Contém os stores Zustand.

styles/: Contém os estilos globais.

db.json: Mock API para uso com Json Server.

## Tecnologias Utilizadas
Next.js
TypeScript
Tailwind CSS
Zustand
TanStack React Query
Recharts
Zod
Jest
Shadcn
next-themes
Json Server
Ky
