import React from 'react';
import data from '../../data';
import { useState } from 'react';
import './Users.css'
import Pro from '../pro/Pro';
import Cart from '../cart/Cart';

const Users = () => {
    const first10 = data.slice(0, 15);
    const [users, setUsers] = useState(first10)
    const [cart, setCart] = useState([]);

    const handleAddUser = (pro) =>{
        console.log("Added",pro);
        const newCart = [...cart, pro];
        setCart(newCart);
    }

    return (
        <div className="users-container">
            <div className="user-container">
                {
                    users.map(user => <Pro
                        handleAddUser = {handleAddUser}
                        pro={user}>
                        </Pro>)
                }
            </div>
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
        </div>
    );
};

export default Users;