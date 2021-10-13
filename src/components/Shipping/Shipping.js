import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth(); 
    const onSubmit = data => console.log(data);
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