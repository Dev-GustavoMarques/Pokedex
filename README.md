# Pokedex

Pokédex

Página web simples que consulta um Pokémon pelo nome e exibe seus dados básicos, a imagem normal e a versão shiny.

Os dados vêm da PokeAPI e as imagens dos sprites oficiais hospedados no repositório PokeAPI/sprites.

Funcionalidades
Busca de Pokémon pelo nome ou pelo número na Pokédex nacional.
Exibe nome, tipo principal, pontos de vida, ataque, defesa e velocidade.
Mostra o sprite normal e o sprite shiny lado a lado.
Feedback no campo de busca e no botão durante o carregamento e em caso de erro.
Tecnologias
HTML5
CSS3
JavaScript puro (sem frameworks e sem etapa de build)
Estrutura do projeto
Pokedex/
├── index.html    # Estrutura da página
├── style.css     # Estilos e layout
├── script.js     # Lógica de busca e consumo da PokeAPI
├── pngs/         # Imagens usadas na interface (pokébola e fundo)
├── LICENSE
└── README.md

É necessária conexão com a internet, porque os dados e as imagens são carregados da PokeAPI e do GitHub.

Como usar
Digite o nome ou o número de um Pokémon no campo de busca.
Clique em Encontrar.
Os dados e as imagens aparecem na tela. Se o Pokémon não existir, o campo mostra a mensagem ❌Pokemon não encontrado.
Limitações conhecidas
Apenas o primeiro tipo do Pokémon é exibido, mesmo quando ele tem dois.
A busca depende do formato que a PokeAPI aceita (nomes em minúsculas, sem acentos). Nomes com espaços, pontuação ou maiúsculas podem não ser encontrados.
Os atributos exibidos são apenas alguns dos seis status base disponíveis na API.
Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.
