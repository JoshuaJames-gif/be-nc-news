exports.formatDates = list => {
  let i = 0

  if (list.length === 0) {
    return []
  }

  // list.forEach((object) => {
    
  //   const changeToDate = new Date(object.created_at).toLocaleDateString("en-UK")
  //   const changeToTime = new Date(object.created_at).toLocaleTimeString("en-UK")
  //   // const changeToDate = new Date(object.created_at).toDateString()
  //   // console.log(changeToDate, changeToTime)
  //   newList.push(object)
  //   newList[i]['created_at'] = `${changeToDate} @ ${changeToTime}`
  //   i += 1
  // })
  const newList = list.map((object) => {
    const changeToDate = new Date(object.created_at).toLocaleDateString("en-UK")
    const changeToTime = new Date(object.created_at).toLocaleTimeString("en-UK")
  //   // const changeToDate = new Date(object.created_at).toDateString()
  //   // console.log(changeToDate, changeToTime)
  //   newList.push(object)
     object['created_at'] = `${changeToDate} @ ${changeToTime}`
     return object
  })

return newList
};

exports.makeRefObj = list => { };

exports.formatComments = (comments, articleRef) => { };
