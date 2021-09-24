import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from 'react';
import axios from 'axios';
import "./Login.css"

const Login = () =>{
    const [respostaApi, setRespostaApi] = useState();
    const [date, setDate] = useState();

    const formShema = yup.object().shape({
        username: yup.string(),
        password: yup.string()
    });

    const {register, handleSubmit, formState: {errors}} =useForm({
        resolver: yupResolver(formShema)
    })

    const hendleform = (date) => setDate(date);
    

    axios.post("https://kenzieshop.herokuapp.com/sessions/", date)
        .then((response)=>{
            setRespostaApi("Requisição Completa")
        })
        .catch((err) => { 
            setRespostaApi("Requisição Falhou")
        });


    return <div className = "divInput" >
            <form onSubmit = {handleSubmit(hendleform)}>
                <input type="text" placeholder = "username" {...register("username")}/>
                <input type="text" placeholder = "password" {...register("password")} />
                <button type = "subimt">enviar</button>
            </form>
            <h1>{respostaApi}</h1>
        </div> 
}
export default Login;