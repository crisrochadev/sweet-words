export default function useLetters() {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "á",
    "ã",
    "â",
    "é",
    "ê",
    "í",
    "ó",
    "õ",
    "ô",
    "ú",
  ];

  const emojis = [
    "🍎",
    "🐝",
    "🐱",
    "🐶",
    "🥚",
    "🐟",
    "🦍",
    "🏠",
    "🍦",
    "🤹",
    "🔑",
    "🦁",
    "🐵",
    "🌙",
    "🐙",
    "🍕",
    "👑",
    "🐰",
    "🐍",
    "🌲",
    "☂️",
    "🎻",
    "🌊",
    "❌",
    "🍋",
    "🦓",
    "⚡",
    "🐑",
    "🏹",
    "📧",
    "🎭",
    "🛤️",
    "🔴",
    "🥄",
    "🎩",
    "🚦",
  ];

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const shuffledEmojis = shuffleArray([...emojis]); // Copia o array antes de embaralhar
  const shuffleEmojis = {};

  letters.forEach((letter, index) => {
    shuffleEmojis[letter] = shuffledEmojis[index]; // Adiciona a letra como chave e o emoji como valor
  });

  // Exemplo de uso:
  return { shuffleEmojis };
}
