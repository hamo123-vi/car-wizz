import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { HeadProvider, Title } from 'react-head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from '../AuthLayout';
import { cursorLoaderOn, cursorLoaderOff } from '../js/cursorLoading';

const Forgot = () => {

    var email = useSelector(state => state.email);
    const { register, handleSubmit } = useForm({ defaultValues: { email }})

    const toastSuccess = () => toast.success("Link za poništenje lozinke poslan je na Vaš email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const toastError = () => toast.error("Greška, pokušajte kasnije", {
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

        document.getElementById('b-forgot').disabled = true;
        cursorLoaderOn();

        const formData = {
            email: data.email
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/forgotpassword`, formData).then((res) => {
            toastSuccess();
            document.getElementById('b-forgot').disabled = false;
            cursorLoaderOff();
        }).catch(() => {
            toastError();
            document.getElementById('b-forgot').disabled = false;
            cursorLoaderOff();
        });
    }

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Zaboravljena lozinka</Title>
        </HeadProvider>

        <AuthLayout>
            <h4 className='auth_form_title'>
                ZABORAVIO/LA SAM LOZINKU
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className='auth_form'>
                <input {...register('email')} className='auth_form_control' name='email' type='email' placeholder='Email' />
                <button id='b-forgot' type='submit' className='auth_form_button'>Poništi lozinku</button>
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

export default Forgot;