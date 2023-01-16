import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const ReportByCustomer = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Izvještaj po klijentu</Title>
        </HeadProvider>

        <Layout>
            IZVJEŠTAJ PO KLIJENTU
        </Layout>
        </>
    )
}

export default ReportByCustomer;