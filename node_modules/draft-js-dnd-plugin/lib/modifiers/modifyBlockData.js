'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState, key, data) {
  var currentContentState = editorState.getCurrentContent();

  var block = currentContentState.getBlockForKey(key);
  var entityKey = block.getEntityAt(0);
  _draftJs.Entity.mergeData(entityKey, data);

  return _draftJs.EditorState.forceSelection(editorState, editorState.getCurrentContent().getSelectionAfter());
};

var _draftJs = require('draft-js');