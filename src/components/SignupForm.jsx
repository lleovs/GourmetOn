import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Por favor preencha nome e email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor insira um email válido.");
      return;
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      savedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem("gourmeton_signup", JSON.stringify(payload));
      setSaved(true);
      setName("");
      setEmail("");
      setTimeout(() => setSaved(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Erro ao salvar. Verifique o armazenamento do navegador.");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Insira seus Dados</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@exemplo.com"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Enviar
          </button>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {saved && <p className="text-green-600 text-sm">Obrigado! Seus dados foram salvos.</p>}
      </form>
    </div>
  );
}