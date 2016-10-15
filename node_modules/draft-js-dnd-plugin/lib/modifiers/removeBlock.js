'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState, blockKey) {
  var content = editorState.getCurrentContent();
  var newSelection = new _draftJs.SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0
  });

  var afterKey = content.getKeyAfter(blockKey);
  var afterBlock = content.getBlockForKey(afterKey);
  var targetRange = void 0;

  // Only if the following block the last with no text then the whole block
  // should be removed. Otherwise the block should be reduced to an unstyled block
  // without any characters.
  if (afterBlock && afterBlock.getType() === 'unstyled' && afterBlock.getLength() === 0 && afterBlock === content.getBlockMap().last()) {
    targetRange = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: afterKey,
      focusOffset: 0
    });
  } else {
    targetRange = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1
    });
  }

  // change the blocktype and remove the characterList entry with the block
  content = _draftJs.Modifier.setBlockType(content, targetRange, 'unstyled');
  content = _draftJs.Modifier.removeRange(content, targetRange, 'backward');

  // force to new selection
  var newState = _draftJs.EditorState.push(editorState, content, 'remove-block');
  return _draftJs.EditorState.forceSelection(newState, newSelection);
};

var _draftJs = require('draft-js');