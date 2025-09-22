'use client'

export default function HeroSection() {
  return (
    <section className="bg-rose-300 w-full">
      <div className="relative px-6 pt-32 pb-20 lg:px-8 text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-rose-700 sm:text-6xl">
          GourmetON
        </h1>

        
        <p className="mt-6 text-lg leading-8 text-rose-600 max-w-2xl mx-auto">
          O maior marketplace de culinária da América Latina. Venha empreender de uma forma
          jamais vista antes.
        </p>

        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-rose-600 transition"
          >
            Começar agora
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-rose-700 hover:text-rose-900 transition"
          >
            Saiba mais →
          </a>
        </div>
      </div>
    </section>
  )
}
