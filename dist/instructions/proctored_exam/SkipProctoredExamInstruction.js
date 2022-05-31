"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

var _context = _interopRequireDefault(require("../../context"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SkipProctoredExamInstruction = function SkipProctoredExamInstruction(_ref) {
  var cancelSkipProctoredExam = _ref.cancelSkipProctoredExam;
  var state = (0, _react.useContext)(_context.default);
  var skipProctoringExam = state.skipProctoringExam;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react.default.createElement("p", {
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.skipProctoredExamInstructions.text1",
    defaultMessage: "Are you sure you want to take this exam without proctoring?"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.skipProctoredExamInstructions.text1",
    defaultMessage: 'If you take this exam without proctoring, you will not be eligible for ' + 'course credit or the MicroMasters credential if either applies to this course.'
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "skip-confirm-exam-button",
    variant: "primary",
    className: "mr-3 mb-2",
    onClick: skipProctoringExam
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.entranceExamInstructions.skipConfirmExamButtonText1",
    defaultMessage: "Continue Exam Without Proctoring"
  })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "skip-cancel-exam-button",
    variant: "secondary",
    className: "mb-2",
    onClick: cancelSkipProctoredExam
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.entranceExamInstructions.skipCancelExamButtonText",
    defaultMessage: "Go Back"
  })))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

SkipProctoredExamInstruction.propTypes = {
  cancelSkipProctoredExam: _propTypes.default.func.isRequired
};
var _default = SkipProctoredExamInstruction;
exports.default = _default;
//# sourceMappingURL=SkipProctoredExamInstruction.js.map