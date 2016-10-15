'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var _getSearchText2 = require('../utils/getSearchText');

var _getSearchText3 = _interopRequireDefault(_getSearchText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMention = function addMention(editorState, mention, entityMutability) {
  var entityKey = _draftJs.Entity.create('mention', entityMutability, { mention: mention });

  var currentSelectionState = editorState.getSelection();

  var _getSearchText = (0, _getSearchText3.default)(editorState, currentSelectionState);

  var begin = _getSearchText.begin;
  var end = _getSearchText.end;

  // get selection of the @mention search text

  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });

  var mentionReplacedContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), mentionTextSelection, mention.get('name'), null, // no inline style needed
  entityKey);

  // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    mentionReplacedContent = _draftJs.Modifier.insertText(mentionReplacedContent, mentionReplacedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = _draftJs.EditorState.push(editorState, mentionReplacedContent, 'insert-mention');
  return _draftJs.EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

exports.default = addMention;