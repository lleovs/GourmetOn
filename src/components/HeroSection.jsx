'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Quem Somos', href: '#quemsomos' },
  { name: 'Nossos Produtos', href: '#culinaria' },
  { name: 'O Que Falam de Nós', href: '#testemunhos' },
  { name: 'Contato', href: '#contato' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-rose-300 w-full">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <span className="text-rose-600 font-bold text-xl">GourmetON</span>
          </div>

          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-rose-600 hover:bg-rose-200 transition"
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-rose-700 hover:text-rose-900 transition">
                {item.name}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-rose-600 hover:text-rose-800 transition">
              Entrar →
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/40" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-rose-50 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-rose-600 font-bold text-xl">GourmetON</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-rose-600 hover:bg-rose-200 transition"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 divide-y divide-rose-200">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-rose-700 hover:bg-rose-200 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-rose-600 hover:bg-rose-200 transition"
                >
                  Entrar
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero content */}
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
          <a href="#" className="text-sm font-semibold text-rose-700 hover:text-rose-900 transition">
            Saiba mais →
          </a>
        </div>
      </div>
    </div>
  )
}
