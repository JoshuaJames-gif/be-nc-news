exports.formatDates = list => {
  if(list.length === 0){
    return []
  }
  const changeToDate = new Date(list[0].created_at).toLocaleDateString("en-UK")
  const changeToTime = new Date(list[0].created_at).toLocaleTimeString("en-UK")
  console.log(`${changeToDate} @ ${changeToTime}`)

  list[0].created_at = `${changeToDate} @ ${changeToTime}`

  return list
};

exports.makeRefObj = list => { };

exports.formatComments = (comments, articleRef) => { };
