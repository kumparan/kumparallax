'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocksWhereEntityData = getBlocksWhereEntityData;

var _draftJs = require('draft-js');

// Filter editorState's blockMap
function getBlocksWhereEntityData(editorState, filter) {
  return editorState.getCurrentContent().get('blockMap').filter(function (block) {
    var entityData = block.getEntityAt(0) ? _draftJs.Entity.get(block.getEntityAt(0)).getData() : null;
    return entityData && filter(entityData);
  });
}