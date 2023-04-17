import { Roboto, Chivo_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <header className="flex fade-in-header items-center justify-end absolute w-full h-14 mt-7 py-3 px-10">
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
            className="mobile-menu hidden flex-col gap-12 absolute top-16 right-16 p-5 bg-white border border-gray-400 rounded-md sm:bg-transparent sm:p-0 sm:border-0 sm:mr-36 sm:flex sm:flex-row sm:static"
            id="navbar-default"
          >
            <li className="mb-2">
              <Link className="text-black sm:text-white" href="/">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link className="text-black sm:text-white" href="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-black sm:text-white" href="/">
                Portifolio
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <main className="h-screen pt-14 px-6 flex flex-col justify-center bg-[#29364d] items-center sm:px-12 lg:px-48 lg:flex-row-reverse">
          <div className="fade-in-photo flex items-center justify-center w-2/3 mb-24">
            <Image
              className="rounded-full"
              src={perfilImg}
              alt="Yvan Brito"
              width={500}
            />
          </div>
          <div className="flex flex-col 2xl:w-2/3">
            <span className={`${chivo.className} fade-in-1 text-gray-200 mb-8`}>
              Hi, my name is
            </span>
            <h1
              className={`${roboto.className} fade-in-2 text-[#c6d2e7] text-7xl font-bold lg:text-7xl`}
            >
              Yvan Brito.
            </h1>
            <span
              className={`${roboto.className} fade-in-3 mb-8 text-[#c6d2e7] text-2xl lg:text-3xl`}
            >
              Building awesome applications since 2018.
            </span>
            <span
              className={`${chivo.className} fade-in-4 text-[#c6d2e7] 2xl:w-4/5`}
            >
              I&apos;m a Frontend Developer specialized in developing awesome
              digital experience. I&apos;m currently working for{" "}
              <a
                href="https://pagseguro.uol.com.br/"
                target="_blank"
                className="text-[#799434] hover:underline hover:text-[#B4E043]"
              >
                Pagbank PagSeguro
              </a>{" "}
              building services for backoffice and advisory systems.
            </span>
          </div>
        </main>
      </section>
      {/* <section className="h-screen bg-[#29364d]"></section> */}
      <footer></footer>
    </main>
  );
}
