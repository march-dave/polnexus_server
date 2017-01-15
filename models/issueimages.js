'use strict';

var mongoose = require('mongoose');

var IssueImage = mongoose.model('issueImageDB', {
  imageurl: String,
  like: String,
  dislike: String
});

module.exports = IssueImage;
