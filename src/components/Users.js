import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Users = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Korisnici</Title>
        </HeadProvider>

        <Layout>
            KORISNICI
        </Layout>
        </>
    )
}

export default Users;