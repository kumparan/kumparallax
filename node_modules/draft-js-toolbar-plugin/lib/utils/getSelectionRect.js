"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSelectionRect;
// Get selection text's client rectangle
function getSelectionRect(selected) {
  if (!selected || !selected.rangeCount || selected.isCollapsed) return null;

  var _rect = selected.getRangeAt(0).getBoundingClientRect();
  var rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0]; // selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }

  return rect;
}