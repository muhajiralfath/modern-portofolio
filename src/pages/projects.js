import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { FeaturedProject } from "@/components/FeaturedProject";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Alfath.dev</title>
        <meta name="description" content="Project description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-6">
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                tittle="Crypto Screener Aplication"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency."
                link="/projects"
                github="/projects"
                type="FeaturedProject"
              />
            </div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
