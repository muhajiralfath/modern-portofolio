import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilPictdua from "../../public/images/profile/developer-pic-2.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Alfath.dev</title>
        <meta name="description" content="Fullstack Softfare Engineer" />
      </Head>
      <main className="flex w-full items-center flex-col justify-center dark:text-light">
        <Layout className="pt-14">
          <AnimatedText text="Muhammad Muhajir Al Fath" className="mb-16" />
          <div className="flex flex-col space-y-24 items-center justify-center self-center">
            <div className="h-max round-2xl items-center relative ">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" /> */}
              <Image
                src={profilPictdua}
                width={500}
                height={500}
                alt="Alfath.dev"
                className=" rounded-2xl border-2 border-solid border-dark border-r-[12px] border-b-[12px] bg-light dark:bg-dark dark:border-light p-6"
              />
            </div>
            <div className=" flex flex-col items-start justify-start">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p>
                Hi, Iam Muhammad Muhajir Al Fath, a web developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>

              <p>
                I believe that design is about more than just making things look
                pretty its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p>
                Whether Iam working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>

              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 mt-4">
                Contact
              </h2>
              <ul className="list-disc ml-4">
                <li>
                  Email -{" "}
                  <a
                    href="mailto:muhammadmuhajiralfath@gmail.com"
                    target="_blank"
                    className="underline"
                  >
                    muhammadmuhajiralfath@gmail.com
                  </a>
                </li>
                <li>
                  Facebook -{" "}
                  <a
                    href="https://facebook.com/muhajiralfath"
                    target="_blank"
                    className="underline"
                  >
                    https://facebook.com/alfathjoz
                  </a>{" "}
                </li>
                <li>
                  Twitter -{" "}
                  <a
                    href="https://twitter.com/muhajiralfath"
                    target="_blank"
                    className="underline"
                  >
                    https://twitter.com/muhajiralfath
                  </a>{" "}
                </li>
                <li>
                  Linkedin -{" "}
                  <a
                    href="https://linkedin.com/in/muhajiralfath/"
                    target="_blank"
                    className="underline"
                  >
                    https://linkedin.com/in/muhajiralfath/
                  </a>{" "}
                </li>
                <li>
                  Github -{" "}
                  <a
                    href="https://github.com/muhajiralfath"
                    target="_blank"
                    className="underline"
                  >
                    https://github.com/muhajiralfath
                  </a>{" "}
                </li>
                <li>
                  Medium -{" "}
                  <a
                    href="https://medium.com/muhajiralfath"
                    target="_blank"
                    className="underline"
                  >
                    https://medium.com/muhajiralfath
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
