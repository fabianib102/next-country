import Head from "next/head";

export default function HeadPage({ continentName }) {
    return (
        <Head>
            <title>{continentName}</title>
            <meta name="description" content="Countries APP" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}