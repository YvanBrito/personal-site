import { Roboto, Chivo_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

import perfilImg from "../assets/perfil.png";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const chivo = Chivo_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Head>
        <title>Yvan Brito - Frontend Developer</title>
      </Head>
      <header className="flex items-center justify-end absolute w-full h-14 lg:mt-7 py-3 px-10">
        <nav className="inline-flex">
          <button
            onClick={() => {
              const menu = document.querySelector(".mobile-menu");
              menu && menu.classList.toggle("hidden");
              menu && menu.classList.toggle("block");
            }}
            type="button"
          >
            <GiHamburgerMenu className="inline w-8 h-8 rounded-sm hover:bg-gray-400 sm:hidden" />
          </button>
          <ul
            className="mobile-menu hidden z-10 flex-col gap-12 absolute top-16 right-16 p-5 bg-white border border-gray-400 rounded-md sm:bg-transparent sm:p-0 sm:border-0 lg:mr-36 sm:flex sm:flex-row sm:static"
            id="navbar-default"
          >
            <li
              style={{ animationDelay: "3s" }}
              className="fade-in-top-bottom mb-2"
            >
              <Link className="text-black sm:text-white" href="/">
                Home
              </Link>
            </li>
            <li
              style={{ animationDelay: "3.2s" }}
              className="fade-in-top-bottom mb-2"
            >
              <Link className="text-black sm:text-white" href="/">
                Blog
              </Link>
            </li>
            <li
              style={{ animationDelay: "3.4s" }}
              className="fade-in-top-bottom"
            >
              <Link className="text-black sm:text-white" href="/">
                Portifolio
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col items-center sm:px-12 lg:px-36 lg:h-screen">
        <div className="h-[90dvh] pt-12 lg:pt-24 px-6 lg:px-0 flex flex-col justify-center items-center sm:flex-row-reverse">
          <div
            style={{ animationDelay: "3s" }}
            className="fade-in-right-left flex items-center justify-center w-2/3 mb-10"
          >
            <Image
              className="w-32 rounded-full -z-10 lg:w-80"
              src={perfilImg}
              alt="Yvan Brito"
            />
          </div>
          <div className="flex flex-col 2xl:w-2/3">
            <span
              style={{ animationDelay: "1s" }}
              className={`${chivo.className} fade-in-bottom-top text-gray-200 lg:mb-8`}
            >
              Hi, my name is
            </span>
            <h1
              style={{ animationDelay: "1.5s" }}
              className={`${roboto.className} fade-in-bottom-top text-[#c6d2e7] text-6xl font-bold lg:text-7xl`}
            >
              Yvan Brito.
            </h1>
            <span
              style={{ animationDelay: "2s" }}
              className={`${roboto.className} fade-in-bottom-top lg:mb-8 text-[#c6d2e7] text-2xl lg:text-3xl`}
            >
              Building awesome applications since 2018.
            </span>
            <span
              style={{ animationDelay: "2.5s" }}
              className={`${chivo.className} fade-in-bottom-top text-[#c6d2e7] 2xl:w-4/5`}
            >
              I&apos;m a Frontend{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-[#799434] hover:underline hover:text-[#B4E043]"
              >
                React.js
              </a>{" "}
              Developer specialized in developing awesome digital experience.
              I&apos;m currently working for{" "}
              <a
                href="https://pagseguro.uol.com.br/"
                target="_blank"
                className="text-[#799434] hover:underline hover:text-[#B4E043]"
              >
                Pagbank PagSeguro
              </a>{" "}
              building services for backoffice and advisory systems.
            </span>
            <div className="text-[#c6d2e7] flex gap-6 mt-5">
              <BsGithub
                className="fade-in-bottom-top w-8 h-8"
                style={{ animationDelay: "3.2s" }}
              />{" "}
              <BsInstagram
                className="fade-in-bottom-top w-8 h-8"
                style={{ animationDelay: "3.4s" }}
              />{" "}
              <BsLinkedin
                className="fade-in-bottom-top w-8 h-8"
                style={{ animationDelay: "3.6s" }}
              />{" "}
              <BsTwitter
                className="fade-in-bottom-top w-8 h-8"
                style={{ animationDelay: "3.8s" }}
              />
            </div>
          </div>
        </div>
        <BsFillArrowDownCircleFill className="w-8 h-8 animate-bounce text-[#c6d2e7]" />
      </section>
      <section className="mt-16">
        <h2>Most Recent Posts</h2>
      </section>
      <footer></footer>
    </main>
  );
}
