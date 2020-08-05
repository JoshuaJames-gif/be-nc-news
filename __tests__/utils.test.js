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

describe('makeRefObj', () => {
  test('returns an object', () => {
    expect(makeRefObj([])).toEqual({})
  });
  test('works for a single element', () => {
    const input = [{
      article_id: 1,
      title: 'UNCOVERED: catspiracy to bring down democracy',
      topic: 'cats',
      author: 'rogersop',
      body: 'Bastet walks amongst us, and the cats are taking arms!',
      created_at: '11/19/2002 @ 12:21:54 PM',
    }]
    const output = {
      'UNCOVERED: catspiracy to bring down democracy': 1
    }
    const key = 'title'
    const value = 'article_id'
    expect(makeRefObj(input, key, value)).toEqual(output)
  })
  test('works for multiple elements', () => {
    const input = [{
      article_id: 1,
      title: 'UNCOVERED: catspiracy to bring down democracy',
      topic: 'cats',
      author: 'rogersop',
      body: 'Bastet walks amongst us, and the cats are taking arms!',
      created_at: '11/19/2002 @ 12:21:54 PM',
    }, {
      article_id: 2,
      title: 'A',
      topic: 'mitch',
      author: 'icellusedkars',
      body: 'Delicious tin of cat food',
      created_at: 'Friday, 11/20/1998 @ 12:21:54'
    }]
    const output = {
      'UNCOVERED: catspiracy to bring down democracy': 1,
      'A': 2
    }
    const key = 'title'
    const value = 'article_id'
    expect(makeRefObj(input, key, value)).toEqual(output)
  });
});

describe('formatComments', () => {
  test('returns an array when passed an array', () => {
    expect(formatComments([])).toEqual([])
  });
  test('works for a single comment', () => {
    const comment = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: "butter_bridge",
      votes: 16,
      created_at: 1511354163389,
    }];
    const articleRef = { "They're not exactly dogs, are they?": 1 };
    const formattedComment = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      article_id: 1,
      author: "butter_bridge",
      votes: 16,
      created_at: new Date(1511354163389),
    }];
    expect(formatComments(comment, articleRef)).toEqual(formattedComment);
  });
  test('works for multiple comments', () => {
    const comments = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: "butter_bridge",
      votes: 16,
      created_at: 1511354163389,
    }, {
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'butter_bridge',
      votes: 14,
      created_at: 1479818163389,
    }];
    const articleRef = { "They're not exactly dogs, are they?": 1, "Living in the shadow of a great man": 2 };
    const formattedComment = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      article_id: 1,
      author: "butter_bridge",
      votes: 16,
      created_at: new Date(1511354163389),
    }, {
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      article_id: 2,
      author: 'butter_bridge',
      votes: 14,
      created_at: new Date(1479818163389),
    }];
    expect(formatComments(comments, articleRef)).toEqual(formattedComment)
  });
  
});
