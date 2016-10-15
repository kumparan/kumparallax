'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var findMention = function findMention(character) {
  var entityKey = character.getEntity();
  return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'mention';
};

var findMentionEntities = function findMentionEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(findMention, callback);
};

exports.default = findMentionEntities;