import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate()

    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login/", data)
            .then(res => {
                localStorage.setItem("token", res.data.data.token)
                navigate("/")
            })
            .catch(error => {
                if(error.response.status === 404){
                    alert("credenciales incorrectas")
                }
            })
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor='name' >
                    Email: 
                </label>
                <input {...register("email")} id="name" type="text" />
                <label htmlFor='password'>
                    Password: 
                </label>
                <input {...register("password")}id="password" type="password" />
                <button type='submit'>
                    login
                </button>
            </form>
        </div>
    );
};

export default Login;