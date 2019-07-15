import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
export default class MessageReply extends Component {
  state = {
    replyMessage: ""
  };
  handleReply = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {    
    const { message, selectedCustomerMessage,replyMessage ,doctorClass,customerClass,activeCustomer} = this.props;
    return (
      <div>
        {message.isAPICalled ? (
          <>
            <div className="message-header">{activeCustomer.email}</div>
            <div className="message-input">
              <div className="doctor-customer-message-container">
                {selectedCustomerMessage ? (
                  selectedCustomerMessage.map(element => (
                    <div className="doctor-customer-message">
                      {element.exists
                        ? element.data().messageDoctor && <div className={doctorClass}><span>{element.data().messageDoctor}</span></div>
                        : element && <div className={doctorClass}><span>{element.messageDoctor}</span></div>
                        }
                         {element.exists
                        ? element.data().messageCustomer && <div className={customerClass}><span>{element.data().messageCustomer}</span></div>
                        : element && <div className={customerClass}><span>{element.messageCustomer}</span></div>
                        }
                    </div>
                  ))
                ) : (
                  <Spinner animation="border" variant="info" />
                )}
              </div>
            </div>
            <div className="reply-input">
              <input
                type="text"
                name="replyMessage"
                value={this.props.replyMessage}
                onChange={this.props.onMessageReply}
                onKeyUp={this.props.onSendClick}
              />
              <button onClick={this.props.onSendClick}>Send Message</button>
            </div>
          </>
        ) : (
          "click on user to see message"
        )}
      </div>
    );
  }
}
