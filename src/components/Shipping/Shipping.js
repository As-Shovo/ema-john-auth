import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth(); 
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.insertedId){
                alert('Order Placed Successfully');
                reset();
                clearTheCart();

            }
        })


        console.log(data)
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
               
                <input defaultValue={user.displayName} {...register("name")} />
                <input placeholder="E-mail" defaultValue={user.email} {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
                <input defaultValue="" placeholder="Address" {...register("address")} />
                <input defaultValue="" placeholder="City" {...register("city")} />
                <input defaultValue="" placeholder="Phone" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;