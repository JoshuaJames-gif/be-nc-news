const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  test('returns an array when passed an array', () => {
    expect(formatDates([])).toEqual([])
  })
  test('works for a single object', () => {
    const input = [{
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100
    }]
    const output = [{
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: "11/15/2018 @ 12:21:54 PM",
      votes: 100
    }]

    expect(formatDates(input)).toEqual(output)
  })
});

describe('makeRefObj', () => {});

describe('formatComments', () => {});
