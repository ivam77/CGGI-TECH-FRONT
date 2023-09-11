import React from 'react'
import GoogleLogin from 'react-google-login';
import { Link, useNavigate } from "react-router-dom";
import { api, apiUrl, endpoints } from '../utils/api.js';
import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setToken, setUser, setPhoto } from '../redux/actions/user.js';
import { LS } from '../utils/localStorageUtils.js';

export default function Register() {
    let inputEmail = useRef("");
    let inputPassword = useRef("");
    let navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleFormSubmit(e) {
        e.preventDefault();

        let dato = {
            email: inputEmail.current.value,
            password: inputPassword.current.value
        }

        try {
            let { data } = await axios.post("http://localhost:8082/api/user/signin", dato);
            const token = data.response?.token;
            localStorage.setItem("token", data.response?.token);
            localStorage.setItem("user", JSON.stringify(data.response?.user));

            Swal.fire({
                icon: "success",
                title: "Logged In!",
            });
            navigate("/");
            console.log(token);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error,
            });
        }
    }

    const responseSuccess = (res) => {
        let data = {
          email: res.profileObj.email,
          password: res.profileObj.googleId
        }
    
        const signInWithGoogle = async () => {
          try {
            const response = await api.post(apiUrl + endpoints.login, data);
            console.log(response);
            if (response.data.success) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User signed in!',
                showConfirmButton: false,
                timer: 1500,
              });
      
              const { user, token } = response.data.response;

              LS.add('token', token)
              LS.add('user', user)
              dispatch(setUser(user));
              dispatch(setPhoto(user.photo));
      
              navigate('/');
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Authentication failed!',
              });
            }
          } catch (error) {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Authentication failed!',
            });
          }
        };
      
        signInWithGoogle();
      }

      const responseGoogle = (res) => {
        if(res?.tokenId){
          responseSuccess(res)
        }
        if (res.error === "popup_closed_by_user") {
          // Mostrar una notificación o mensaje al usuario informando que el inicio de sesión fue cancelado.
          Swal.fire({
            icon: "info",
            title: "Login canceled",
            text: "The login process with Google was canceled by the user.",
          });
        } else {
          console.log("Failed to sign in with Google:", res.error);
        }
      }

    return (
        <div className= /*bg-[#333] */"flex flex-col justify-between min-h-screen ">
            <div className= /*bg-[aqua]*/'p-[1rem] flex justify-center items-center min-h-[10vh] w-fullmax-sx:flex'>
                <img src="/L4.png" alt="logo" className='w-[6rem] max-sx:w-[4.5rem]' />
                <h1 className='text-[#448cdf] text-[2.5rem] font-bold max-sx:text-[1.3rem]'>CGGI TECH</h1>
            </div>

            <div className= /*bg-[#a6de5d]*/ ' py-[1rem] grow flex flex-col items-center '>
                <article className=" rounded-lg p-[1rem] flex flex-col items-center gap-[.5rem] border-[#448cdf] border-2 max-ms:border-hidden">
                    <h2 className="text-[2rem] text-[#448cdf]  font-bold ">Welcome!</h2>
                    <p className=' max-sx:px-8 text-center text-[1rem]  font-bold px-8'>To your most reliable store..</p>

                    <p className=' max-sx:px-8 text-center text-[1rem]  text-[#448cdf] px-8'>  Enter your details to continue..</p>
                    <form  onSubmit={(e) => handleFormSubmit(e)} className=/*  bg-[#7456] */' flex-col px-8 w-96 flex justify-center max-sx:w-[85%]'>

                        <legend className="text-sm pt-[1.5rem] font-bold">Email</legend>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="p-3 mb-1 border-2  border-[#448cdf] h-[2.4rem]  rounded-lg"
                            name="email"
                            ref={inputEmail}
                        />
                        <legend className="text-sm pt-[1.5rem] font-bold">Password</legend>
                        <input
                            type="password"
                            placeholder="6 characters"
                            className="p-3 mb-1 border-2 border-[#448cdf] h-[2.4rem] rounded-lg"
                            name="password"
                            ref={inputPassword}
                        />

                        <label className='text-center p-[.5rem] '>
                            <input type="checkbox" id="miCheckbox" /> Send notification to my email
                        </label>

                        <div className='flex justify-center'>
                            <input
                                type="submit"
                                value="Log in"
                                className="mt-2 w-[15rem] max-sx:w-[11rem] h-[3.5rem] rounded-lg bg-gradient-to-r from-[#448cdf] to-[#1970d4] text-white font-bold text-lg "
                            />
                        </div>

                    </form>
                    <GoogleLogin
                    className='w-[70%] md:w-[60%] flex justify-center'
                    clientId="393235807340-092f45s1qiasssao75ceoq4br58rgkpr.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseSuccess}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                    <div className='max-sx:flex max-sx:flex-col flex flex-col justify-center items-center'>
                        <Link to="/Register" className="">
                            Already have an account? <span className="text-blue-500">Sign up</span>
                        </Link>

                        <Link to="/" className="mt-3">
                            Go back to <span className="text-blue-500">home</span>
                        </Link>
                    </div>
                    <img src="/L3.png" alt="logo" className='w-[3rem] max-sx:w-[4.5rem]' />
                    <h4>CGGI TECH</h4>
                </article>
            </div>
        </div>
    )
}