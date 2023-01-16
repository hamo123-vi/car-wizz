import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Arrivals = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | B2B Dolasci</Title>
        </HeadProvider>

        <Layout>
            B2B DOLASCI
        </Layout>
        </>
    )
}

export default Arrivals;