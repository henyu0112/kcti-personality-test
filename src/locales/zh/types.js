// Words that build the final type's nickname and summary. Which word a personality
// supplies is set by its group's `role` in src/data/categories.js:
//   adjective (K) + noun (C)  ->  "{adjective}的{noun}"
//   thinking (T), facing (I)  ->  "你{thinking}，而且{facing}。"
export default {
  // K: adjective
  hin: { adjective: '一头雾水' },
  zenmeban: { adjective: '惊慌失措' },
  gai: { adjective: '倒霉透顶' },
  bird: { adjective: '语无伦次' },
  nihenkeai: { adjective: '阴阳怪气' },

  // C: noun
  chill: { noun: 'Lepak 大王' },
  kiasu: { noun: '抢优惠达人' },
  paiseh: { noun: '道歉专家' },
  syok: { noun: '自嗨主角' },
  steady: { noun: '靠谱担当' },

  // T: thinking
  hmmm: { thinking: '开口前什么都要想一想' },
  errrr: { thinking: '每说几个字就要犹豫一下' },
  ehhhhh: { thinking: '听到什么都要怀疑一下' },
  ahhhhhh: { thinking: '遇到一点麻烦就长叹一声' },
  harrrrr: { thinking: '什么都要别人说两遍' },

  // I: facing
  hiao: { facing: '明知不可能还是照样冲' },
  liao: { facing: '来不及了就直接放弃' },
  siao: { facing: '疯起来一点也不怕丢脸' },
  biao: { facing: '别人还没问完就先说不要' },
  behhiao: { facing: '遇到无能为力的事就坦白承认' },
};
