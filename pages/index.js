import Mobile from '../layout/mobile';
import Head from 'next/head'

const Main = () => {
  return(
    <>
      
      <Head>
        <title>Pemilo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Mobile></Mobile>

    </>
  );
}

export default Main;