// Words that build the final type's nickname and summary. Which word a personality
// supplies is set by its group's `role` in src/data/categories.js:
//   adjective (K) + noun (C)  ->  "The {adjective} {noun}"
//   thinking (T), facing (I)  ->  "You {thinking}, and you {facing}."
export default {
  // K: adjective
  hin: { adjective: 'Confused' },
  zenmeban: { adjective: 'Panicking' },
  gai: { adjective: 'Doomed' },
  bird: { adjective: 'Rambling' },
  nihenkeai: { adjective: 'Sarcastic' },

  // C: noun
  chill: { noun: 'Lepak Champion' },
  kiasu: { noun: 'Deal Hunter' },
  paiseh: { noun: 'Apologiser' },
  syok: { noun: 'Main Character' },
  steady: { noun: 'Pillar' },

  // T: thinking (a verb phrase: "You ...")
  hmmm: { thinking: 'ponder everything before you speak' },
  errrr: { thinking: 'hesitate before every other word' },
  ehhhhh: { thinking: 'doubt everything you hear' },
  ahhhhhh: { thinking: 'groan at the smallest hassle' },
  harrrrr: { thinking: 'need everything said twice' },

  // I: facing (a verb phrase: "and you ...")
  hiao: { facing: 'charge at the impossible anyway' },
  liao: { facing: 'give up when it is too late' },
  siao: { facing: 'go wild with zero shame' },
  biao: { facing: 'say no before anyone finishes asking' },
  behhiao: { facing: 'admit when it is out of your hands' },
};
