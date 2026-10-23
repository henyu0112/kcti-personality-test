// Structure only. Names, meanings and descriptions live in src/locales/<lang>/personalities.js.
// `code` is the personality's letter in the final 4-letter type (unique within its group).
// `emoji` is used on result cards, the share image and the side stickers; `icon` (a name from
// src/shared/icons.js) is used where emoji would feel repetitive, such as the All types page.
export const personalities = [
  // K - Kacau Level
  { id: 'hin', category: 'kacau', code: 'H', emoji: '🌀', icon: 'help-circle' },
  { id: 'zenmeban', category: 'kacau', code: 'Z', emoji: '😱', icon: 'alert-triangle' },
  { id: 'gai', category: 'kacau', code: 'G', emoji: '💥', icon: 'zap' },
  { id: 'bird', category: 'kacau', code: 'B', emoji: '🐦', icon: 'message-dots' },
  { id: 'nihenkeai', category: 'kacau', code: 'N', emoji: '🙃', icon: 'smirk' },

  // C - Cara Hidup
  { id: 'chill', category: 'cara', code: 'C', emoji: '🛋️', icon: 'coffee' },
  { id: 'kiasu', category: 'cara', code: 'K', emoji: '🏃', icon: 'tag' },
  { id: 'paiseh', category: 'cara', code: 'P', emoji: '🙈', icon: 'blush' },
  { id: 'syok', category: 'cara', code: 'S', emoji: '🕺', icon: 'headphones' },
  { id: 'steady', category: 'cara', code: 'T', emoji: '👍', icon: 'shield-check' },

  // T - Tengah Loading
  { id: 'hmmm', category: 'tengah', code: 'M', emoji: '🤔', icon: 'lightbulb' },
  { id: 'errrr', category: 'tengah', code: 'R', emoji: '😬', icon: 'ellipsis' },
  { id: 'ehhhhh', category: 'tengah', code: 'E', emoji: '🤨', icon: 'eye' },
  { id: 'ahhhhhh', category: 'tengah', code: 'A', emoji: '😤', icon: 'frown-angry' },
  { id: 'harrrrr', category: 'tengah', code: 'H', emoji: '👂', icon: 'ear' },

  // I - Impossible Level
  { id: 'hiao', category: 'impossible', code: 'H', emoji: '🚀', icon: 'trending-up' },
  { id: 'liao', category: 'impossible', code: 'L', emoji: '⏳', icon: 'clock' },
  { id: 'siao', category: 'impossible', code: 'S', emoji: '🤪', icon: 'star' },
  { id: 'biao', category: 'impossible', code: 'B', emoji: '🙅', icon: 'ban' },
  { id: 'behhiao', category: 'impossible', code: 'X', emoji: '🤷', icon: 'lock' },
];
