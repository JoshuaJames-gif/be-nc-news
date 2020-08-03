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
  test('works for multiple objects', () => {
    const input = [{
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100
    }, {
      body: "I am 100% sure that we're not completely sure.",
      belongs_to: 'UNCOVERED: catspiracy to bring down democracy',
      created_by: 'butter_bridge',
      votes: 1,
      created_at: 1069850163389
    }, {
      title: 'Student SUES Mitch!',
      topic: 'mitch',
      author: 'rogersop',
      body:
        'We all love Mitch and his wonderful, unique typing style. However, the volume of his typing has ALLEGEDLY burst another students eardrums, and they are now suing for damages',
      created_at: 1163852514171,
    }]

    const output = [{
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: '11/15/2018 @ 12:21:54 PM',
      votes: 100
    }, {
      body: "I am 100% sure that we're not completely sure.",
      belongs_to: 'UNCOVERED: catspiracy to bring down democracy',
      created_by: 'butter_bridge',
      votes: 1,
      created_at: '11/26/2003 @ 12:36:03 PM'
    }, {
      title: 'Student SUES Mitch!',
      topic: 'mitch',
      author: 'rogersop',
      body:
        'We all love Mitch and his wonderful, unique typing style. However, the volume of his typing has ALLEGEDLY burst another students eardrums, and they are now suing for damages',
      created_at: '11/18/2006 @ 12:21:54 PM',
    }]

    expect(formatDates(input)).toEqual(output)
  });
});

describe('makeRefObj', () => { });

describe('formatComments', () => { });
