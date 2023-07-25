import AnimatedText from "@/components/AnimatedText";
import CertificateCard from "@/components/CertificateCard";
import Layout from "@/components/Layout";
import Head from "next/head";
import certifData from "@/data/dataCertif";

const certificate = () => {
  return (
    <>
      <Head>
        <title>Certificate | Alfath.dev</title>
        <meta name="dercription" content="Certificate in Programming" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-6">
          <AnimatedText text="Certificate" className="mb-16 " />
          <ul className="grid grid-cols-4 gap-12">
            {certifData.map((data) => (
              <CertificateCard
                key={data.id}
                tittle={data.tittle}
                img={data.img}
                summary={data.summary}
                link={data.link}
                platform={data.platform}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificate;
