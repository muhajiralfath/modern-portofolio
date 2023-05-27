import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const CertificateCard = ({ img, tittle, platform, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-ligh border border-solid border-dark rounded-2xl border-r-8 border-b-8">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg mb-3"
      >
        <FramerImage
          src={img}
          alt={tittle}
          width={500}
          height={500}
          className="w-full max-h-52"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <hr class="border border-solid border-dark border-opacity-50 mb-2" />

      <span className="text-primary font-medium">{platform}</span>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-lg font-bold my-2 hover:underline">
          {tittle}
        </h2>
      </Link>
    </li>
  );
};

export default CertificateCard;
