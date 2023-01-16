import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Layout from '../Layout';

const Settings = () => {

    return(
        <>
        <HeadProvider>
            <Title>Carwiz | Postavke</Title>
        </HeadProvider>

        <Layout>
            POSTAVKE
        </Layout>
        </>
    )
}

export default Settings;