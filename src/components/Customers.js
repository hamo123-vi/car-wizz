import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Customers = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Klijenti</Title>
        </HeadProvider>

        <Layout>
            Klijenti
        </Layout>
        </>
    )
}

export default Customers;