import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((total, prd) => total + prd.salary, 0);
    return (
        <div>
            <h3>Friend</h3>
            <p>Add Friend: {cart.length}</p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;