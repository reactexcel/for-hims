import React, { Component } from "react";

export default class MessageSideList extends Component {

  render() {
    const { user,onCustomerClick } = this.props;    
    return (
      <div className="message-list-user" onClick={()=>onCustomerClick(user)}>
        <div>
          {user.firstName ? user.firstName + " " + user.lastName : user.email}
        </div>
        {/* <div>last message send</div> */}
      </div>
    );
  }
}
