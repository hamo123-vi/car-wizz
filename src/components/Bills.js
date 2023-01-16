import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Bills = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Računi</Title>
        </HeadProvider>

        <Layout>
            RAČUNI
        </Layout>
        </>
    )
}

export default Bills;