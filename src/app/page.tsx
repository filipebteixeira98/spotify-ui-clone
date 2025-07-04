import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                priority
                src="/wasting-light-album.jpg"
                alt="Cover of the album Wasting Light by the band Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/thriller-album.png"
                alt="Cover of the album Thriller by the band Michael Jackson"
              />
              <strong>Thriller</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/abbey-road-album.jpg"
                alt="Cover of the album Abbey Road by the band The Beatles"
              />
              <strong>Abbey Road</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/nevermind-album.jpg"
                alt="Cover of the album Nevermind by the band Nirvana"
              />
              <strong>Nevermind</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/rumours-album.png"
                alt="Cover of the album Rumours by the band Fleetwood Mac"
              />
              <strong>Rumours</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/whats-going-on-album.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong>What&apos;s Going On</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made For You</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-1.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                James Blunt, Bruno Mars, Justin Timberlake and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-2.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">
                Rich the Kid, ASAP Rocky, Snoop Dogg and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-3.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">
                Eminem, 50 Cent, Jay-Z and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-4.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-5.jpeg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-sm text-zinc-400">
                Avicii, Rihanna, Kendrick Lamar and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/daily-mix-6.jpg"
                alt="Cover of the album What's Going On by the band Marvin Gaye"
              />
              <strong className="font-semibold">Daily Mix 6</strong>
              <span className="text-sm text-zinc-400">
                Drake, Coldplay, Red Hot Chili Peppers and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
