import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const C2B = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | C2B</Title>
        </HeadProvider>

        <Layout>
            C2B
        </Layout>
        </>
    )
}

export default C2B;