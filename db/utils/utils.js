exports.formatDates = list => {
  if (list.length === 0) {
    return [];
  };

  const newList = list.map((object) => {
    const changeToDate = new Date(object.created_at);

    object.created_at = changeToDate
    return object;
  });

  return newList;
};

exports.makeRefObj = (table, oldKey, newValue) => {
  const refObject = {}
  table.forEach((item) => {
    return refObject[item[oldKey]] = item[newValue]
  })
  return refObject
};


exports.formatComments = ({comments}, articleRef) => {
  console.log(comments, articleRef)

  return comments.map(({ belongs_to, created_at, created_by, ...rest }) => {
    return { 'author': created_by, 'article_id': articleRef[belongs_to], 'created_at': new Date(created_at), ...rest };

  })
};
