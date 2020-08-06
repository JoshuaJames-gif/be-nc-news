const { fetchTopics } = require('../models/topics.models')

exports.sendTopics = (req, res) => {
  fetchTopics().then((topics) => {
    res.send({ topics })
  })
}