import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Departures = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | B2B Odlasci</Title>
        </HeadProvider>

        <Layout>
            B2B ODLASCI
        </Layout>
        </>
    )
}

export default Departures;