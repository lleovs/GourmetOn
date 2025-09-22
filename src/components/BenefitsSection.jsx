export default function BenefitsSection() {
    const benefits = [
      {
        title: "Entrega rápida",
        description: "Receba suas refeições em tempo recorde, direto na sua porta.",
      },
      {
        title: "Preços competitivos",
        description: "Oferecemos os melhores preços do mercado para você economizar.",
      },
      {
        title: "Pagamento fácil e seguro",
        description: "Finalize seu pedido em poucos cliques com total segurança.",
      },
      {
        title: "Variedade de restaurantes",
        description: "Escolha entre centenas de restaurantes e estilos culinários.",
      },
    ];
  
    return (
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-rose-700 sm:text-4xl">
            Benefícios do GourmetON
          </h2>
          <p className="mt-4 text-rose-600 max-w-2xl mx-auto">
            Descubra porque nosso aplicativo é a melhor escolha para pedidos de comida online.
          </p>
  
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-rose-700">{benefit.title}</h3>
                <p className="mt-2 text-rose-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  