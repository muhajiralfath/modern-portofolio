import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8  items-center text-center">
        2023 &copy; <span className="underline">Muhammad Muhajir Al Fath</span>{" "}
        . All Rights Reserved.
      </Layout>
    </footer>
  );
};

export default Footer;
