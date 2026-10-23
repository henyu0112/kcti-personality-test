// How long one test is.
//
// The questions in data/questions.js are a pool. Each test draws, for every personality in a
// group, one random question that leaves that personality out. With 5 personalities per
// group that is 5 questions per group (20 in all), and every personality is shown in 4 of
// its group's 5 questions, so none is easier to land on than another.
//
// Lower the number for a shorter test (some personalities will then be shown a little less
// often, which the scoring allows for). It can't be higher than the personalities per group.
export const questionsPerCategory = 5;
