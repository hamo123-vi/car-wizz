import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Reservations = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Rezervacije</Title>
        </HeadProvider>

        <Layout>
            REZERVACIJE
        </Layout>
        </>
    )
}

export default Reservations;