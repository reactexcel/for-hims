import React, { Component } from "react";

class Payment extends Component {
  state={
    cardNumber:"",
    cvc:"" 
  }
  static defaultProps = {
    renderNext: () => {}
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {    
    return (
      <div id="mySidenav6">
        <div className="symbols">
          <div className="symbols-title">Payment</div>
          <ul>
            <li className="symbols1"> </li>
            <li className="symbols2"> </li>
            <li className="symbols3"> </li>
            <li className="symbols4 active"> </li>
            <li className="symbols5"> </li>
          </ul>
        </div>

        <div className="login_form">
          <div className="register_box">
            <h3>Payment information</h3>
            <h5>Please enter your paymennt information</h5>
            <form>
              <input
                type="text"
                className="card"
                name="cardNumber"
                value={this.state.cardNumber}
                autoComplete="true"
                placeholder="Card number"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="cvc"
                name="cvc"
                value={this.state.cvc}
                autoComplete="true"
                placeholder="MM / YY / CVC"
                onChange={this.handleChange}
              />
              <div className="clearfix" />
              <h5>
                {" "}
                Your order will be processed immediately and products will be
                shipped after medical review.
              </h5>
            </form>
          </div>
        </div>
        <button
          tabIndex="0"
          type="button"
          className="login_btn"
          onClick={this.props.renderNext}
        >
          Add New Payment Method
        </button>
      </div>
    );
  }
}

export default Payment;
