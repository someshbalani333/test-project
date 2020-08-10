import React from "react";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gst: null
    };
  }

  radioChange = e => {
    let value = true;
    if (typeof e.currentTarget.value === "string") {
      e.currentTarget.value === "true" ? (value = true) : (value = false);
    }
    this.setState({ gst: value });
  };

  render() {
    return (
      <div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gst"
              value="true"
              onChange={this.radioChange}
            />
            Included
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gst"
              value="false"
              onChange={this.radioChange}
            />
            Not Included
          </label>
        </div>
      </div>
    );
  }
}

export default RadioButton;
