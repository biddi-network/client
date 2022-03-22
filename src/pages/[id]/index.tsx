import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'src/components/templates/Container';

const ConfirmTrade: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Confirm swap</title>
      </Head>
      <Container>
        <div>{router.asPath.substring(1)}</div>
      </Container>
    </>
  );
};

export default ConfirmTrade;
