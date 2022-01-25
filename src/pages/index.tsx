import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

// Components
import { Button } from '@chakra-ui/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" content="Helios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <>
          Signed in as {session.user.name} <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          Not signed in <br />
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
    </div>
  );
}
