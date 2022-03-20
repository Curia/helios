import Head from 'next/head';

// Components
import { Header } from '@/components/Header';
import { ProfileHeader } from '@/components/ProfileHeader';

// Chakra
import { Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" content="Helios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxW={`7xl`} p="12">
        <ProfileHeader />
      </Container>
    </div>
  );
}
