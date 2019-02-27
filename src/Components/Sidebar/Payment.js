import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import ErrorText from "../Generic/ErrorText";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading: false,
      showAddPayment: false
    };
  }
  static defaultProps = {
    renderNext: () => {}
  };

  componentDidUpdate(prevProps) {
    const { data } = this.props.payment.card;
    if (
      this.props.payment.card.isSuccess &&
      prevProps.payment.card.isSuccess !== this.props.payment.card.isSuccess
    ) {
      if (data.cardList && data.cardList.length) this.props.closePayment();
    } else {
      this.props.renderNext();
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  submit = async e => {
    this.setState({ loading: true });
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    if (token) {
      this.props.onAddNewPayment({
        token
      });
      this.setState({ loading: false });
      this.stripeRef.clear();
    }
    this.setState({ loading: false });
  };

  validateCard = e => {
    const errors = {};
    if (e.elementType === "card" && e.error !== undefined) {
      errors.message = e.error.message;
      this.setState({ errors });
    } else if (e.error === undefined) {
      this.setState({ errors: {} });
    }
  };
  onOpenAddPayment = () => this.setState({ showAddPayment: true });
  onCloseAddPayment = () => this.setState({ showAddPayment: false });

  render() {
    const { errors, showAddPayment,loading } = this.state;
    const {
      isError,
      message,
      isLoading,
      isSuccess,
      data
    } = this.props.payment.card;
    return (
      <>
        {loading || isLoading ? (
          <div className="login-loader">
            <div>Saving Payment Information...</div>
            <div>Hang tight</div>
            <div className="loader" />
          </div>
        ) : (
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
                <h5>Please enter your payment information</h5>
                <form className="payment_form">
                  <>
                    {data.cardList && data.cardList.length ? (
                      !showAddPayment ? (
                        <>
                          <div className="card_details-block">
                            {data.cardList &&
                              data.cardList.map((card, cardIndex) => (
                                <div
                                  className={`card_detail ${
                                    this.props.cardIndex === cardIndex
                                      ? "selected-card"
                                      : ""
                                  }`}
                                  key={card.id}
                                  onClick={() =>
                                    this.props.selectPayment(cardIndex)
                                  }
                                >
                                  <div>{card.brand}</div>
                                  <div> •••• •••• •••• {card.last4}</div>
                                </div>
                              ))}
                          </div>
                          <button
                            className="add-payment"
                            onClick={this.onOpenAddPayment}
                          >
                            Add New Payment Method
                          </button>
                        </>
                      ) : (
                        <>
                          <CardElement
                            onChange={this.validateCard}
                            onReady={element => (this.stripeRef = element)}
                          />
                          {errors.message && (
                            <ErrorText text={errors.message} />
                          )}
                          {isError && message && (
                            <div className="server_error">{message}</div>
                          )}
                          <button
                            className="payment-cancel"
                            onClick={this.onCloseAddPayment}
                          >
                            Select an Existing Payment
                          </button>
                        </>
                      )
                    ) : (
                      <>
                        {" "}
                        <CardElement
                          onChange={this.validateCard}
                          onReady={element => (this.stripeRef = element)}
                        />
                        {errors.message && <ErrorText text={errors.message} />}
                        {isError && message && (
                          <div className="server_error">{message}</div>
                        )}
                        <div className="clearfix" />
                        <h5>
                          {" "}
                          Your order will be processed immediately and products
                          will be shipped after medical review.
                        </h5>
                      </>
                    )}
                  </>
                </form>
              </div>
            </div>
            <button
              tabIndex="0"
              type="button"
              className="login_btn"
              onClick={
                data.cardList && data.cardList.length && !showAddPayment
                  ? this.props.closePayment
                  : this.submit
              }
            >
              {data.cardList && data.cardList.length && !showAddPayment
                ? "Next"
                : "Add New Payment Method"}
            </button>
          </div>
        )}
      </>
    );
  }
}

export default injectStripe(Payment);
