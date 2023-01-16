import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const ReportAllVehicles = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Izvještaj za sva vozila</Title>
        </HeadProvider>

        <Layout>
            IZVJEŠTAJ ZA SVA VOZILA
        </Layout>
        </>
    )
}

export default ReportAllVehicles;