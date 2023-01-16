import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Vehicles = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Vozila</Title>
        </HeadProvider>

        <Layout>
            VOZILA
        </Layout>
        </>
    )
}

export default Vehicles;