import { Roboto, Chivo_Mono } from 'next/font/google'
import Image from 'next/image'
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs'

import perfilImg from '@/assets/perfil.png'
import { Posts } from '@/components'
import { Suspense } from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})
const chivo = Chivo_Mono({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {
  return (
    <main>
      <div className="lg:w-4/5 mx-auto">
        <section className="flex flex-col items-center lg:h-screen">
          <div className="h-[70dvh] pt-12 lg:pt-24 px-6 lg:px-0 flex flex-col justify-center items-center sm:flex-row-reverse">
            <div
              style={{ animationDelay: '3s' }}
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
                style={{ animationDelay: '1s' }}
                className={`${chivo.className} fade-in-bottom-top text-gray-200 lg:mb-8`}
              >
                Olá, meu nome é
              </span>
              <h1
                style={{ animationDelay: '1.5s' }}
                className={`${roboto.className} fade-in-bottom-top text-[#c6d2e7] text-6xl font-bold lg:text-7xl`}
              >
                Yvan Brito.
              </h1>
              <span
                style={{ animationDelay: '2s' }}
                className={`${roboto.className} fade-in-bottom-top lg:mb-8 text-[#c6d2e7] text-2xl lg:text-3xl`}
              >
                Desenvolvendo aplicações incríveis desde 2018.
              </span>
              <span
                style={{ animationDelay: '2.5s' }}
                className={`${chivo.className} fade-in-bottom-top text-[#c6d2e7] 2xl:w-4/5`}
              >
                Sou um desenvolvedor Frontend{' '}
                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="text-[#799434] hover:underline hover:text-[#B4E043]"
                >
                  React.js
                </a>{' '}
                especializado em desenvolver experiências digitais incríveis.
                Atualmente estou trabalhando na{' '}
                <a
                  href="https://pagseguro.uol.com.br/"
                  target="_blank"
                  className="text-[#799434] hover:underline hover:text-[#B4E043]"
                >
                  Pagbank
                </a>{' '}
                desenvolvendo serviços para backoffice e sistemas de
                consultoria.
              </span>
              <div className="text-[#c6d2e7] flex gap-6 mt-5">
                <a target="_blank" href="https://github.com/YvanBrito">
                  <BsGithub
                    className="fade-in-bottom-top w-8 h-8"
                    style={{ animationDelay: '3.2s' }}
                  />
                </a>{' '}
                <a
                  target="_blank"
                  href="https://www.instagram.com/yvanpsbrito/"
                >
                  <BsInstagram
                    className="fade-in-bottom-top w-8 h-8"
                    style={{ animationDelay: '3.4s' }}
                  />
                </a>{' '}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yvan-brito-70342ba5/"
                >
                  <BsLinkedin
                    className="fade-in-bottom-top w-8 h-8"
                    style={{ animationDelay: '3.6s' }}
                  />
                </a>{' '}
                <a target="_blank" href="https://twitter.com/yvanpsbrito">
                  <BsTwitter
                    className="fade-in-bottom-top w-8 h-8"
                    style={{ animationDelay: '3.8s' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <BsFillArrowDownCircleFill className="w-8 h-8 mt-24 animate-bounce text-[#c6d2e7]" />
        </section>
        <section className="mt-16 sm:mt-0 flex flex-col items-center">
          <h2 className="mb-16 text-4xl">Postagens mais recentes</h2>
          <Suspense fallback={<div>Carregando...</div>}>
            <Posts lang="pt" quantity={4} />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
