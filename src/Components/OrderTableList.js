import React from "react";
import moment from "moment";
export default function OrderTableList({ listData }) {
    console.log(listData,'iiiiiiiiiiiiii');
    
  return (
    <tr>
      <td>{listData.id}</td>
      <td>{listData.doctorName}</td>
      <td>{listData.email}</td>
      <td>{listData.metadata.approvalStatus}</td>
      <td>${listData.amount/100}</td>
      <td>{moment(listData.created *1000).format("LL")}</td>
    </tr>
  );
}
