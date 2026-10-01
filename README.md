# 4 Elos Pescados

Site estático responsivo criado com o catálogo PDF fornecido. HTML, CSS e JavaScript sem dependências ou etapa de compilação.

## Visualizar
Abra `index.html` no navegador. Todos os produtos também aparecem sem JavaScript. O menu compacto e os filtros usam JavaScript.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `4-elos-pescados`.
2. Envie o **conteúdo desta pasta** à raiz do repositório: `index.html`, `style.css`, `script.js`, `.nojekyll`, README e a pasta `assets`. Não envie somente o ZIP.
3. Abra **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, a pasta `/(root)` e clique em **Save**.
6. Aguarde a publicação. O endereço será `https://SEU-USUARIO.github.io/4-elos-pescados/`. Consulte a URL exibida pelo GitHub em Pages.

Os links de assets são relativos e funcionam tanto em uma página de projeto quanto em domínio próprio. Não é necessário npm, framework ou servidor de aplicação.

## Conteúdo e manutenção
- `index.html`: seções, cards, contato e metadados SEO.
- `style.css`: identidade azul, layouts e navegação responsiva.
- `script.js`: menu acessível e filtros por categoria.
- `assets`: recortes do próprio catálogo, logotipo e PDF original.
- `produtos.json`: relação de conferência dos 31 produtos; a página usa HTML estático. Ao editar, atualize ambos para manter a consistência.

Os recortes preservam parte do fundo original do PDF. Não são fotografias novas. A seção Filés mantém os oito itens classificados dessa forma no catálogo, inclusive Pescada Espalmada, sardinhas e Posta de Dourada. Grafias de eviscerado e acentuação foram normalizadas sem alterar as origens. Camarão Venamei mantém a denominação impressa. Não há número de telefone no material: não foi incluído WhatsApp.

Dados de fundação, alcance, embalagem e origens refletem o catálogo, sem verificação externa de atualização. Não foram inventados preços, pesos, disponibilidade ou benefícios das embalagens.

## SEO
Título, descrição, idioma, Open Graph básico e dados estruturados da organização incluídos. Depois de publicar, acrescente a URL final como `link rel="canonical"` e `og:url` e uma URL absoluta para `og:image`. Esses endereços dependem do repositório escolhido.

## Verificar antes de divulgar
Abra no celular e computador, teste menu, filtros, e-mail, mapa e download do PDF. Confirme dados comerciais com a empresa. O link de e-mail abre o aplicativo de e-mail configurado, não envia mensagens automaticamente.
