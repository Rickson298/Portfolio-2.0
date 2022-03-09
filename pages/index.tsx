import type { NextPage } from "next";
import Head from "next/head";
import { Introduction } from "../components/Introduction/Introduction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rickson Oliveira | Portfólio</title>
        <meta name="description" content="Portfólio Front end " />
        <meta
          name="keywords"
          content="sites, web, desenvolvimento, programador, Rickson, front-end, designer, ui,freelancer, freela, website, front-end, Desenvolvedor, Porfólio, Portfólio Front end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Introduction />
      </body>
    </>
  );
};

export default Home;
