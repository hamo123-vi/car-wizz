import React from 'react';
import { HeadProvider, Title } from 'react-head';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from '../AuthLayout';

const ResetPassword = () => {

    const np = useSelector(state => state.password);
    const npr = useSelector(state => state.reppassword);
    const { register, handleSubmit } = useForm({defaultValues: {np, npr}})
    const navigate = useNavigate();

    const url = window.location.href;
    const urlArray = url.split('/');
    const token = urlArray.slice(-1);

    const onSubmit = (data) => {
    if(data.password === data.reppassword) {

        document.getElementById('b-reset').disabled = true;

        const formData = {
            password: data.password
        }

        axios.put(`${process.env.REACT_APP_API_URL}/auth/resetpassword/${token}`, formData).then(() => {
            toast.success("Lozinka je uspješno promijenjena", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            document.getElementById('b-reset').disabled = false;
            navigate('/')
        }).catch(() => {
            toast.error("Greška, pokušajte kasnije", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            document.getElementById('b-reset').disabled = false;
        });

    } else {
        toast.error("Lozinke se moraju podudarati", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
        
    }

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Postavi lozinku</Title>
        </HeadProvider>
            
        <AuthLayout>
            <h4 className='auth_form_title'>
                POSTAVI NOVU LOZINKU
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className='auth_form'>
                <input {...register('password')} className='auth_form_control' name='password' type='password' placeholder='Nova lozinka' />
                <input {...register('reppassword')} className='auth_form_control' name='reppassword' type='password' placeholder='Ponovi novu lozinku' />
                <button id='b-reset' type='submit' className='auth_form_button'>Postavi lozinku</button>
                <a className='auth_form_link' href='/'>Prijava</a>
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

export default ResetPassword;