import React from "react";
import OrderView from "./OrderView";

export default class Order extends React.Component{

    render(){

    const orderedBooks = this.props.order.map( (order, index) => {
        return <OrderView key = {index} book = {order} removeFromOrder = {this.props.removeFromOrder}/>
    })

        return (
            <div className="order">
                <h1>Order</h1>
                {orderedBooks}
            </div>
        )
    }
}

