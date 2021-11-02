import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import {useHistory} from 'react-router';

const Orders = () => {

    const history = useHistory();
    const {user} = useAuth()
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res =>{
            if(res.status === 200){
                res.json();
            }
            else if(res.status === 401){
                history.push('/login');
            }

            
        } )
        .then(data => setOrders(data))
    },[])


    return (
        <div>
            <h2>You Have placed: {orders.length} Orders</h2>
        </div>
    );
};

export default Orders;