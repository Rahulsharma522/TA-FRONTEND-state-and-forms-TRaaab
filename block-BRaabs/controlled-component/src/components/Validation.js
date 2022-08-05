import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      error: {
        address: "",
      },
      isSame: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    let error = this.state.error;

    switch (name) {
      case "username":
        error.username = value.length > 8 ? "" : "You need to enter at-least 8";
        break;
      default:
        break;
    }

    this.setState((state) => ({
      shipping: { ...state.error, ...state.shipping, [name]: value },
    }));
  };

  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };

  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;
    let { address } = this.state.error;
    return (
      <>
        <form className="flex">
          <div className="column">
            <h2>Shipping Address</h2>
            <div>
              <label>Address</label>
              <div>
                <input
                  name="address"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g New Delhi Vasnat Vihar"
                  className={address && "error"}
                />
                <span>{address}</span>
              </div>
            </div>
            <div>
              <label>ZIP/Postal Code</label>
              <div>
                <input
                  name="zip"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g. 176057"
                />
              </div>
            </div>
            <div>
              <label>City</label>
              <div>
                <input
                  name="city"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g New Delhi"
                />
              </div>
            </div>
            <div>
              <label>Country</label>
              <div>
                <input
                  name="country"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g India"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div>
              <h2>Billing Address</h2>
              <div>
                <label className="checkbox">
                  <input onChange={this.handleCheckbox} type="checkbox" />
                  <h3>Same as the Shipping Address?</h3>
                </label>
              </div>
            </div>
            <div>
              <label>Address</label>
              <div>
                <input
                  value={billingData.address}
                  type="text"
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
              </div>
            </div>

            <div>
              <label>ZIP/Postal Code</label>
              <div>
                <input
                  value={billingData.zip}
                  type="text"
                  placeholder="e.g. 176057"
                />
              </div>
            </div>
            <div>
              <label>City</label>
              <div>
                <input
                  value={billingData.city}
                  type="text"
                  placeholder="e.g New Delhi"
                />
              </div>
            </div>
            <div>
              <label>Country</label>
              <div>
                <input
                  value={billingData.country}
                  type="text"
                  placeholder="e.g India"
                />
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Validation;