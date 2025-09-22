 
export default function RecipeFooter() {
  return (
    <footer id="contato" className="text-rose-600 font-medium text-center w-screen">
  <div className="bg-fuchsia-100">
    <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
    <nav className="mt-2">
      <ul className="flex flex-wrap justify-center gap-4">
        <li>
          <a href="/sobre" className="hover:text-rose-300">Sobre Nós</a>
        </li>
        <li>
          <a href="/privacidade" className="hover:text-rose-300">Política de Privacidade</a>
        </li>
        <li>
          <a href="/contato" className="hover:text-rose-300">Contacto</a>
        </li>
      </ul>
    </nav>
  </div>
</footer>
  );
}