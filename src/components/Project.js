import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ tittle, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl " />

      <Link
        href={link}
        className="w-full cursor-pointer rounded-lg overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={tittle}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-ful text-left text-3xl dark:text-light font-bold">
            {tittle}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
