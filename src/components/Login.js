import React, { useEffect } from 'react';
import { HeadProvider, Title } from 'react-head';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../AuthLayout';
import { cursorLoaderOn, cursorLoaderOff } from '../js/cursorLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { enterMe, enterOffices, enterOfficeId, enterOfficeName } from '../rootSlice';

const Login =() => {
    
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var email = useSelector(state => state.email);
    var password = useSelector(state => state.password);
    var { register, handleSubmit} = useForm({defaultValues:{email, password}});

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/pocetna');
        }
    })

    const toastError = () => toast.error("Email ili lozinka su netačni", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const onSubmit = (data) => {

        const formData = {
            email: data.email,
            password: data.password
        }

        document.getElementById('b-login').disabled = true;
        cursorLoaderOn();

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData, { headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
            localStorage.setItem("token", res.data.token);

            axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, { headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                }}).then((res) => {
                    const me = res.data.data;
                    dispatch(enterMe(me));
                    axios.get(`${process.env.REACT_APP_API_URL}/offices/company/${me.company_id}`, { headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                        }}).then((res) => {
                            const offices = res.data.data;
                            dispatch(enterOffices(offices));
                            dispatch(enterOfficeId(offices[0]._id));
                            dispatch(enterOfficeName(offices[0].office_name));
                        }).catch(() => { 
                            alert("Error");
                        })
                }).catch(() => { 
                    alert("Error");
                })
            document.getElementById('b-login').disabled = false;
            cursorLoaderOff();
            navigate('/pocetna');
        }).catch(() => {
            toastError();
            document.getElementById('b-login').disabled = false;
            cursorLoaderOff();
        })
    }

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Prijava</Title>
        </HeadProvider>

        <AuthLayout>
            <h4 className='auth_form_title'>
                PRIJAVA
            </h4>
            <form className='auth_form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email')} className='auth_form_control' name='email' type='email' placeholder='Email' />
                <input {...register('password')} className='auth_form_control' name='password' type='password' placeholder='Lozinka' />
                <button id='b-login' type='submit' className='auth_form_button'>Prijava</button>
                <a className='auth_form_link' href='/ponisti-lozinku'>Zaboravio/la sam lozinku</a>
            </form>
        </AuthLayout>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />

        </>
    )
}

export default Login;