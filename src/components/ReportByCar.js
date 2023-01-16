import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const ReportByCar = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Izvještaj po vozilu</Title>
        </HeadProvider>

        <Layout>
            IZVJEŠTAJ PO VOZILU
        </Layout>
        </>
    )
}

export default ReportByCar;