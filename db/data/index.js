const ENV = process.env.NODE_ENV || 'development'

const articleData = require(`./${ENV}-data`);
const commentData = require(`./${ENV}-data`);
const topicData = require(`./${ENV}-data`);
const userData = require(`./${ENV}-data`);

module.exports = { articleData, commentData, topicData, userData }