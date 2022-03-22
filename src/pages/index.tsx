import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Container } from 'src/components/templates/Container';

require('@solana/wallet-adapter-react-ui/styles.css');

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BIDDI</title>
      </Head>
      <Container>
        <div>homepage</div>
      </Container>
    </>
  );
};

export default Home;
