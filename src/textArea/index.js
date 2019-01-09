import React, {Component, PropTypes} from 'react';

class TextArea extends Component {
  getStyle() {
    let inputStyle = "roboto-regular gray-02 p-f18 placeholder";
    let containerStyle = "dif flex-column mb2";
    let labelStyle = "pl2 roboto-regular p-f14 gray-02";
    let errorStyle = "roboto-regular h1 p-f14 kitkat-01";
    let subtitleStyle = "roboto-regular h1 p-f14 gray-01";

    if (this.props.disabled) {
      inputStyle = inputStyle.concat(" ", "bg-gray-07 input-border-disabled cursor-disabled").replace("gray-02", "gray-04")
    } else if (this.props.errorText) {
      labelStyle = labelStyle.replace("gray-02", "kitkat-01");
      inputStyle = inputStyle.concat(" ", "input-border-error");
      subtitleStyle = subtitleStyle.replace( "gray-02", "kitkat-01");
    } else {
      inputStyle = inputStyle.concat(" ", "input-border b--gray-05 ")
    }

    if (this.props.inputClassName) {
      inputStyle = inputStyle.concat(" ", this.props.inputClassName)
    }
    if (this.props.containerClassName) {
      containerStyle = containerStyle.concat(" ", this.props.containerClassName)
    }
    if (this.props.labelClassName) {
      labelStyle = labelStyle.concat(" ", this.props.labelClassName)
    }
    if (this.props.errorClassName) {
      errorStyle = errorStyle.concat(" ", this.props.errorClassName)
    }

    return {
      containerStyle: containerStyle,
      inputStyle: inputStyle,
      labelStyle: labelStyle,
      errorStyle: errorStyle,
      subtitleStyle: subtitleStyle,
    };
  }

  handleInputBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleInputChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };

  handleInputFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  render() {
    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: this.props.requiredColor
    };

    const customSize = {
      width: this.props.width
    }

    const { hideLabel, hideSubtitle } = this.props

    const inputProps = {
      disabled: this.props.disabled,
      onBlur: this.handleInputBlur.bind(this),
      onChange: this.handleInputChange.bind(this),
      onFocus: this.handleInputFocus.bind(this),
      value: this.props.value
    };

    const style = this.getStyle();

    return (
      <div style={customSize} className={style.containerStyle}>
    {!hideLabel ? <div className="flex flex-row pv1">
      <span style={bulletStyle}/>
      <span className={style.labelStyle}>{this.props.label}</span>
    </div> : ''}
  <textarea style={{ resize: 'none', padding: '11px 12px 11px 12px' }} rows={this.props.rows} {...inputProps}
    type={this.props.type} className={style.inputStyle} placeholder={this.props.placeholder}/>
    {this.props.errorText ? <span className={style.errorStyle}>{this.props.errorText}</span> : null}
    {!hideSubtitle ? <span className={style.subtitleStyle}>{this.props.subtitle}</span> : null}
  </div>
  );
  }
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  requiredColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  hideLabel: PropTypes.bool,
  subtitle: PropTypes.string,
  hideSubtitle: PropTypes.bool,
};

TextArea.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  requiredColor: "",
  type: 'text',
  rows: 1,
  hideLabel: false,
  hideSubtitle: false,
};

export default TextArea;
