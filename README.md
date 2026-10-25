# Pokédex

Página web simples que consulta um Pokémon pelo nome ou número e exibe seus dados básicos, a imagem normal e a versão *shiny*.

Os dados vêm da [PokeAPI](https://pokeapi.co/) e as imagens são os sprites oficiais do repositório [PokeAPI/sprites](https://github.com/PokeAPI/sprites).

## Funcionalidades

- Busca por nome ou número na Pokédex nacional. A entrada é normalizada: maiúsculas, acentos, pontos, apóstrofos e espaços são tratados antes da consulta (ex.: `Mr. Mime` vira `mr-mime`).
- Exibe nome, tipo principal, pontos de vida, ataque, defesa e velocidade.
- Mostra o sprite normal e o sprite *shiny* lado a lado.
- Mensagens no campo de busca para sucesso, Pokémon não encontrado e erro de conexão ou do servidor.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro, sem frameworks e sem etapa de build

## Estrutura do projeto

```
Pokedex/
├── index.html    # Estrutura da página
├── style.css     # Estilos e layout
├── script.js     # Busca na PokeAPI e preenchimento da tela
├── pngs/         # Imagens da interface (pokébola e fundo)
├── LICENSE
└── README.md
```

## Como usar

1. Digite o nome ou o número de um Pokémon no campo de busca.
2. Clique em **Encontrar**.
3. Os dados e as imagens aparecem na tela. Se o Pokémon não existir, o campo mostra `❌Pokemon não encontrado`.

## Limitações conhecidas

- Apenas o **primeiro tipo** do Pokémon é exibido, mesmo quando ele tem dois.
- Nomes com símbolos, como `Nidoran♀`, não são reconhecidos pela normalização. Use o número ou o nome com hífen (ex.: `nidoran-f`).
- Só são exibidos 4 dos 6 status base da API (ataque especial e defesa especial ficam de fora).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
