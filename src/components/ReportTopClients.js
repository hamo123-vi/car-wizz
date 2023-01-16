import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const ReportTopClients = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Top klijenti</Title>
        </HeadProvider>

        <Layout>
            TOP KLIJENTI
        </Layout>
        </>
    )
}

export default ReportTopClients;