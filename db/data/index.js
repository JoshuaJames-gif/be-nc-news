const ENV = process.env.NODE_ENV || 'development'


const { articleData, commentData, topicData, userData } = require(`./${ENV}-data`);


module.exports = { articleData, commentData, topicData, userData }