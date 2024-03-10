import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { userContext } from '../App'
import { Toaster,toast } from 'react-hot-toast'

const Login = () => {

    const {user,SetUser}=useContext(userContext)
    const [loading,setLoading]=useState(false)
    const [studentDetails,setStudentDetails]=useState()
    const navigate=useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        console.log("handling login...");
        let form=new FormData(formElement)
        let formData={}
        for(let [key,value] of form.entries())
        {
            formData[key]=value
        }
        console.log(formData);

        setLoading(true)
        axios.post(`http://localhost:8000/auth/student/login`,formData)
        .then((res)=>{
            console.log(res,"called login")
            setLoading(false)
            // const finalData={...res.data.data,type:student}
            // SetUser(finalData);
            console.log(user?.token,"my token")
        })
        .catch((err)=>{
            setLoading(false)
            toast.error(err.response.data.message)
            console.log(err);
        })
    }

  return (
   user && user.token ?  navigate(`/${user.type}/chat`) :
        <div className="container">
            <h1>Login</h1>
            <form id="formElement">
                <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder='Email' />

                <input  id="password"
                        name="password"
                        type="password"
                        placeholder="Password" />
                <div className="recover">
                    <a href="#">Forgot password</a>
                </div>
            </form>
            <button type="submit" onClick={handleSubmit}>
                LogIn
            </button>
            <div className="member">
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
  )
}

export default Login