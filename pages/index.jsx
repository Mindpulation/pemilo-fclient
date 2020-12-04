import Head from 'next/head'
import { testingUse } from '../api/index';

const Main = () => {

  const atClick = async () => {
    console.log(await testingUse());
  }

  return(
    <>
      <Head>
        <title>Pemilo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/pemilo.svg" />
      </Head>

      <div>
        <button onClick={atClick}>Try testing function sss</button>
      </div>

    </>
  );
}

export default Main;
