import React, { PureComponent } from "react"
import ReactNumeric from "react-numeric"
import PropTypes from "prop-types"

export default class Numeric extends PureComponent {
  render () {
    return (
      <ReactNumeric style={{ textAlign: "right" }} { ...this.props } />
    )
  }
}

Numeric.propTypes = {
  value: PropTypes.number,
  allowDecimalPadding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["floats"])
  ]),
  decimalPlaces: PropTypes.number,
  digitGroupSeparator: PropTypes.oneOf([",", ""]),
  formatOnPageLoad: PropTypes.bool,
  historySize: PropTypes.number,
  isCancellable: PropTypes.bool,
  leadingZero: PropTypes.oneOf(["allow", "deny", "keep"]),
  maximumValue: PropTypes.string,
  minimumValue: PropTypes.string,
  modifyValueOnWheel: PropTypes.bool,
  overrideMinMaxLimits: PropTypes.oneOf(["ceiling", "floor", "ignore"]),
  readOnly: PropTypes.bool,
  saveValueToSessionStorage: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  showOnlyNumbersOnFocus: PropTypes.bool,
  showPositiveSign: PropTypes.bool,
  unformatOnHover: PropTypes.bool,
  unformatOnSubmit: PropTypes.bool,
  wheelOn: PropTypes.oneOf(["focus", "hover"]),
  wheelStep: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["progressive"])
  ]),
  style: PropTypes.object
}

Numeric.defaultProps = {
  value: null,
  allowDecimalPadding: true,
  decimalPlaces: 2,
  digitGroupSeparator: ",",
  formatOnPageLoad: true,
  historySize: 20,
  isCancellable: true,
  leadingZero: "deny",
  maximumValue: "10000000000000",
  minimumValue: "-10000000000000",
  modifyValueOnWheel: true,
  overrideMinMaxLimits: null,
  readOnly: false,
  saveValueToSessionStorage: false,
  selectOnFocus: false,
  showOnlyNumbersOnFocus: false,
  showPositiveSign: false,
  unformatOnHover: true,
  unformatOnSubmit: false,
  wheelOn: "focus",
  wheelStep: "progressive",
  style: null
}