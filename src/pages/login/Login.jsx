import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { login } from "../../redux/apiCalls"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });

    }

    //const userlogin = true;

    return (
        <>


            <div style={{
                height: "100vh",
                display: "flex",
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <input style={{ padding: "10px", marginBottom: 20 }}
                    type="text"
                    placeholder='username'
                    onChange={e => setUsername(e.target.value)} />
                <input style={{ padding: "10px", marginBottom: 20 }}
                    type="password"
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)} />

                <button onClick={handleClick} style={{padding:10, width:"100px"}}>Login</button>
            </div>

        </>
    )
}

export default Login