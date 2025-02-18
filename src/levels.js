const levels = [
  {
    main_word: {
      hint: "Fruta amarela",
      word: ["b", "a", "n", "a", "n", "a"],
    },
    words: [
      { hint: "É redonda", word: ["b", "o", "l", "a"] },
      { hint: "Nome Feminino", word: ["a", "n", "a"] },
      { hint: "Um legume", word: ["n", "a", "b", "o"] },
      { hint: "Usado no dedo", word: ["a", "n", "e", "l"] },
      {
        hint: "Boneca de filme de terror",
        word: ["a", "n", "a", "b", "e", "l", "e"],
      },
    ],
  },
  {
    main_word: {
      hint: "Animal marinho famoso por suas acrobacias",
      word: ["g", "o", "l", "f", "i", "n", "h", "o"],
    },
    words: [
      { hint: "Parte do corpo", word: ["o", "l", "h", "o"] },
      { hint: "Peixe comum", word: ["b", "a", "g", "r", "e"] },
      { hint: "Caminha na praia", word: ["g", "a", "l", "h", "o"] },
      { hint: "Som feito ao rir", word: ["g", "o", "l"] },
      { hint: "Estação do ano", word: ["i", "n", "v", "e", "r", "n", "o"] },
    ],
  },
  {
    main_word: {
      hint: "Objeto usado para iluminar",
      word: ["l", "a", "m", "p", "a", "d", "a"],
    },
    words: [
      { hint: "Pequeno recipiente de azeite", word: ["l", "a", "m", "p", "a"] },
      { hint: "Peça de metal", word: ["p", "a", "m", "p", "a"] },
      {
        hint: "Usado para prender cabelo",
        word: ["p", "i", "n", "c", "h", "e"],
      },
      { hint: "Parte do corpo humano", word: ["m", "a", "o"] },
      {
        hint: "Habitat de alguns animais",
        word: ["p", "a", "n", "t", "a", "n", "a"],
      },
    ],
  },
  {
    main_word: {
      hint: "Elemento essencial para a vida",
      word: ["a", "g", "u", "a"],
    },
    words: [
      { hint: "Metal valioso", word: ["o", "u", "r", "o"] },
      { hint: "Fonte de calor", word: ["f", "o", "g", "o"] },
      { hint: "Faz parte do mar", word: ["o", "n", "d", "a"] },
      { hint: "Gelo derretido", word: ["l", "a", "g", "o"] },
      { hint: "Pode ser doce ou salgada", word: ["m", "a", "r", "e"] },
    ],
  },
  {
    main_word: {
      hint: "Instrumento musical de cordas",
      word: ["v", "i", "o", "l", "a", "o"],
    },
    words: [
      { hint: "Pássaro pequeno", word: ["a", "n", "a", "o"] },
      { hint: "Parte de um jogo", word: ["r", "o", "d", "a"] },
      { hint: "Som emitido por alguém", word: ["v", "o", "z"] },
      {
        hint: "Objeto de madeira usado em esportes",
        word: ["t", "a", "c", "o"],
      },
      { hint: "Elemento da natureza", word: ["a", "r"] },
    ],
  },
  {
    main_word: {
      hint: "Planeta onde vivemos",
      word: ["t", "e", "r", "r", "a"],
    },
    words: [
      { hint: "Parte do corpo humano", word: ["o", "r", "e", "l", "h", "a"] },
      { hint: "Fruto muito comum", word: ["p", "e", "r", "a"] },
      {
        hint: "Pode ser preta ou branca",
        word: ["p", "a", "r", "e", "d", "e"],
      },
      { hint: "Fonte de vida", word: ["a", "r"] },
      {
        hint: "Relevo da natureza",
        word: ["m", "o", "n", "t", "a", "n", "h", "a"],
      },
    ],
  },
  {
    main_word: {
      hint: "Objeto que indica as horas",
      word: ["r", "e", "l", "o", "g", "i", "o"],
    },
    words: [
      { hint: "Som de um sino", word: ["g", "o", "n", "g"] },
      { hint: "Elemento do tempo", word: ["n", "e", "v", "e"] },
      { hint: "Fruto roxo", word: ["u", "v", "a"] },
      { hint: "Parte de um animal", word: ["o", "r", "g", "a", "o"] },
      { hint: "Movimento rápido", word: ["r", "u", "g", "i", "d", "o"] },
    ],
  },
  {
    main_word: {
      hint: "Construção para morar",
      word: ["c", "a", "s", "a"],
    },
    words: [
      { hint: "Pedaço pequeno", word: ["a", "s", "a"] },
      { hint: "Parte de um livro", word: ["c", "a", "p", "a"] },
      { hint: "Usado para cozinhar", word: ["p", "a", "n", "e", "l", "a"] },
      { hint: "Relativo ao campo", word: ["r", "o", "c", "a"] },
      { hint: "Fruta amarela", word: ["b", "a", "n", "a", "n", "a"] },
    ],
  },
  {
    main_word: {
      hint: "Veículo de duas rodas",
      word: ["b", "i", "c", "i", "c", "l", "e", "t", "a"],
    },
    words: [
      { hint: "Caminho para seguir", word: ["t", "r", "i", "l", "h", "a"] },
      { hint: "Sinal de trânsito", word: ["p", "a", "r", "e"] },
      { hint: "Movimento rápido", word: ["c", "o", "r", "r", "i", "d", "a"] },
      { hint: "Parte do corpo usada para pedalar", word: ["p", "e"] },
      { hint: "Arma antiga", word: ["l", "a", "n", "c", "a"] },
    ],
  },
  {
    main_word: {
      hint: "Planeta mais próximo do sol",
      word: ["m", "e", "r", "c", "u", "r", "i", "o"],
    },
    words: [
      { hint: "Elemento químico", word: ["m", "e", "t", "a", "l"] },
      { hint: "Nome de Deus romano", word: ["m", "a", "r", "t", "e"] },
      {
        hint: "Objeto brilhante no céu",
        word: ["e", "s", "t", "r", "e", "l", "a"],
      },
      {
        hint: "Pode ser quente ou fria",
        word: ["t", "e", "m", "p", "e", "r", "a", "t", "u", "r", "a"],
      },
      {
        hint: "Parte do sistema solar",
        word: ["p", "l", "a", "n", "e", "t", "a"],
      },
    ],
  },
    {
        main_word: {
            hint: 'Fenômeno natural que causa chuva',
            word: ['t', 'e', 'm', 'p', 'e', 's', 't', 'a', 'd', 'e']
        },
        words: [
            { hint: 'Movimento do vento', word: ['t', 'e', 'm', 'p', 'o'] },
            { hint: 'Pequeno animal do jardim', word: ['t', 'a', 't', 'u'] },
            { hint: 'Estado emocional', word: ['t', 'e', 'n', 's', 'o'] },
            { hint: 'Pode ser doce ou salgada', word: ['p', 'a', 's', 't', 'a'] },
            { hint: 'Onda grande no mar', word: ['t', 's', 'u', 'n', 'a', 'm', 'i'] }
        ]
    },
    {
        main_word: {
            hint: 'Principal estrela do sistema solar',
            word: ['s', 'o', 'l']
        },
        words: [
            { hint: 'Pode ser feito de gelo', word: ['l', 'o', 'l', 'i'] },
            { hint: 'Parte da árvore', word: ['t', 'r', 'o', 'n', 'c', 'o'] },
            { hint: 'Símbolo da sabedoria', word: ['s', 'o', 'f', 'i', 'a'] },
            { hint: 'Nome masculino', word: ['l', 'u', 'c', 'a', 's'] },
            { hint: 'O maior planeta', word: ['j', 'u', 'p', 'i', 't', 'e', 'r'] }
        ]
    },
    {
        main_word: {
            hint: 'Componente essencial para a respiração',
            word: ['o', 'x', 'i', 'g', 'e', 'n', 'i', 'o']
        },
        words: [
            { hint: 'Elemento químico', word: ['n', 'e', 'o', 'n'] },
            { hint: 'Parte do corpo humano', word: ['o', 'r', 'g', 'a', 'o'] },
            { hint: 'Cientista famoso', word: ['n', 'e', 'w', 't', 'o', 'n'] },
            { hint: 'Movimento de girar', word: ['g', 'i', 'r', 'o'] },
            { hint: 'Instrumento óptico', word: ['l', 'u', 'p', 'a'] }
        ]
    },
    {
        main_word: {
            hint: 'Rei dos animais',
            word: ['l', 'e', 'a', 'o']
        },
        words: [
            { hint: 'Animal da floresta', word: ['l', 'o', 'b', 'o'] },
            { hint: 'Algo brilhante', word: ['o', 'u', 'r', 'o'] },
            { hint: 'Parte de uma planta', word: ['f', 'l', 'o', 'r'] },
            { hint: 'Objeto de defesa', word: ['e', 's', 'c', 'u', 'd', 'o'] },
            { hint: 'Relevo montanhoso', word: ['c', 'o', 'r', 'd', 'i', 'l', 'h', 'e', 'i', 'r', 'a'] }
        ]
    },
    {
        main_word: {
            hint: 'Camada que protege o planeta',
            word: ['a', 't', 'm', 'o', 's', 'f', 'e', 'r', 'a']
        },
        words: [
            { hint: 'Parte do carro', word: ['r', 'o', 'd', 'a'] },
            { hint: 'Peça de roupa', word: ['s', 'a', 'i', 'a'] },
            { hint: 'Lugar de estudo', word: ['e', 's', 'c', 'o', 'l', 'a'] },
            { hint: 'Objeto de medição', word: ['r', 'e', 'g', 'u', 'a'] },
            { hint: 'Peixe conhecido', word: ['m', 'a', 'r', 'l', 'i', 'm'] }
        ]
    },
    {
        main_word: {
            hint: 'Órgão do corpo que bombeia sangue',
            word: ['c', 'o', 'r', 'a', 'c', 'a', 'o']
        },
        words: [
            { hint: 'Elemento químico', word: ['c', 'a', 'r', 'b', 'o', 'n', 'o'] },
            { hint: 'País europeu', word: ['p', 'o', 'r', 't', 'u', 'g', 'a', 'l'] },
            { hint: 'Lugar para dormir', word: ['c', 'a', 'm', 'a'] },
            { hint: 'Material de escrita', word: ['c', 'a', 'n', 'e', 't', 'a'] },
            { hint: 'Componente de um computador', word: ['p', 'r', 'o', 'c', 'e', 's', 's', 'a', 'd', 'o', 'r'] }
        ]
    },
    {
        main_word: {
            hint: 'Continente mais frio do mundo',
            word: ['a', 'n', 't', 'a', 'r', 't', 'i', 'd', 'a']
        },
        words: [
            { hint: 'Cidade famosa da Itália', word: ['r', 'o', 'm', 'a'] },
            { hint: 'Objeto de papel', word: ['c', 'a', 'r', 't', 'a'] },
            { hint: 'Parte de um carro', word: ['r', 'o', 'd', 'a'] },
            { hint: 'Astro luminoso', word: ['e', 's', 't', 'r', 'e', 'l', 'a'] },
            { hint: 'Animal que vive no frio', word: ['p', 'i', 'n', 'g', 'u', 'i', 'm'] }
        ]
    },
    {
        main_word: {
            hint: 'Cientista que formulou a teoria da relatividade',
            word: ['e', 'i', 'n', 's', 't', 'e', 'i', 'n']
        },
        words: [
            { hint: 'Unidade de medida de tempo', word: ['s', 'e', 'g', 'u', 'n', 'd', 'o'] },
            { hint: 'Parte de um avião', word: ['a', 's', 'a'] },
            { hint: 'Instrumento de escrita', word: ['c', 'a', 'n', 'e', 't', 'a'] },
            { hint: 'Movimento rápido', word: ['v', 'e', 'l', 'o', 'c', 'i', 'd', 'a', 'd', 'e'] },
            { hint: 'Forma de energia', word: ['e', 'l', 'e', 't', 'r', 'i', 'c', 'i', 'd', 'a', 'd', 'e'] }
        ]
    },
    {
        main_word: {
            hint: 'Maior oceano do mundo',
            word: ['p', 'a', 'c', 'i', 'f', 'i', 'c', 'o']
        },
        words: [
            { hint: 'Corpo celeste', word: ['s', 'o', 'l'] },
            { hint: 'Movimento do mar', word: ['o', 'n', 'd', 'a'] },
            { hint: 'Estado de calma', word: ['p', 'a', 'z'] },
            { hint: 'Pequeno barco', word: ['n', 'a', 'v', 'i', 'o'] },
            { hint: 'Temperatura baixa', word: ['f', 'r', 'i', 'o'] }
        ]
    }
];

export default levels;
