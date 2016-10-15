'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();

  var targetRange = new _draftJs.SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 1
  });

  // change the blocktype and remove the characterList entry with the block
  content = _draftJs.Modifier.setBlockType(content, targetRange, newType);

  // force to new selection
  var newState = _draftJs.EditorState.push(editorState, content, 'modify-block');
  return _draftJs.EditorState.forceSelection(newState, editorState.getSelection());
};

var _draftJs = require('draft-js');