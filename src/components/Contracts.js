import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Contracts = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Rezervacije</Title>
        </HeadProvider>

        <Layout>
            UGOVORI
        </Layout>
        </>
    )
}

export default Contracts;