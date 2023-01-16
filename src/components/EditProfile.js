import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const EditProfile = () => {
    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Uredi profil</Title>
        </HeadProvider>

        <Layout>
            UREDI PROFIL
        </Layout>
        </>
    )
}

export default EditProfile;