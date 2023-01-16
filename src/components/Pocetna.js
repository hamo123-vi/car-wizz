import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Pocetna = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Početna</Title>
        </HeadProvider>

        <Layout>
            POČETNA
        </Layout>
        </>
    )
}

export default Pocetna;