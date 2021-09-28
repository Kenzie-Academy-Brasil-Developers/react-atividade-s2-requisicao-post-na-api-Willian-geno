import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState, useEffect} from 'react';
import axios from 'axios';
import "./Login.css"

const Login = () =>{
    const [respostaApi, setRespostaApi] = useState(false);
    const [date, setDate] = useState({});

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

   /*  const formShema = yup.object().shape({
        username: yup.string(),
        password: yup.string()
    }); */

/*     const {register, handleSubmit, formState: {errors}} =useForm({
        resolver: yupResolver(formShema)
    }) */

    useEffect(() => {
        setDate({ username: username, password: password})
    }, [username, password])

    const hendleform = () => {
            
        axios.post("https://kenzieshop.herokuapp.com/sessions/", date)
        .then((response)=>{
            setRespostaApi("Requisição Completa")
            /* setDate(date) */
            })
            .catch((err) => { 
                setRespostaApi("Requisição Falhou")
            });
    };
    

    return <div className = "divInput" >
            <div /*  onSubmit = {handleSubmit(hendleform)} */>
                <input type="text" value = {username} onChange = {(event) => setUsername(event.target.value)} placeholder = "username" /* {...register("username") }*//>
                <input type="text" valeu = {password} onChange = {(event) => setPassword(event.target.value)} placeholder = "password" /* {...register("password")} */ />
                <button  onClick = {hendleform} >enviar</button>
            </div>
            <h1>{respostaApi}</h1>
        </div> 
}
export default Login;