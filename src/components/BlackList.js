import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const BlackList = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Crna lista</Title>
        </HeadProvider>

        <Layout>
            CRNA LISTA
        </Layout>
        </>
    )
}

export default BlackList;