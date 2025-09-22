// Testimony.jsx
import React from "react";

export default function Testimony() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Cliente Fiel",
      comment:
        "Adorei a qualidade dos produtos e o atendimento foi excepcional! Fiquei muito satisfeito com a minha compra.",
    },
    {
      name: "Carlos Pereira",
      role: "Cliente Satisfeito",
      comment:
        "A comida é incrível e sempre fresca! Recomendo a todos que procuram qualidade e sabor.",
    },
  ];

  return (
    <section className="bg-fuchsia-100 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          O Que Nossos Clientes Dizem
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 md:p-10"
          >
            <p className="text-rose-600 font-medium text-center mb-4">
              "{t.comment}"
            </p>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
