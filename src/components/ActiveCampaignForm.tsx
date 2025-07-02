import React, { useState } from "react";

const ActiveCampaignForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://digitalresultsadm.activehosted.com/proc.php", {
        method: "POST",
        body: data,
        mode: "no-cors"
      });
      setSubmitted(true);
    } catch (err) {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-vanguardia-blue mb-2 font-funnel">Obrigado!</h2>
        <p className="text-vanguardia-gray font-redhat">Cadastro realizado com sucesso.</p>
      </div>
    );
  }

  const faturamentoOptions = [
    "até R$ 15.000,00",
    "R$ 15.000,00 a R$ 30.000,00",
    "R$ 30.000,00 a R$ 50.000,00",
    "R$ 50.000,00 a R$ 100.000,00",
    "R$ 100.000,00 a R$ 250.000,00",
    "acima de R$ 250.000,00"
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-vanguardia-gray/20 shadow-lg">
      <h2 className="text-2xl font-bold text-vanguardia-blue mb-4 font-funnel text-center">Cadastre-se para assistir a aula aberta da Vanguardia</h2>
      <p className="italic text-sm text-gray-700 mb-6 text-center">Seja bem vindo a Vanguardia.</p>
      <div className="mb-4">
        <label htmlFor="fullname" className="block font-bold mb-1 text-gray-900">Nome completo <span className="text-red-500">*</span></label>
        <input type="text" id="fullname" name="fullname" required placeholder="Digite seu nome" className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-1 text-gray-900">Email <span className="text-red-500">*</span></label>
        <input type="email" id="email" name="email" required placeholder="Digite seu email" className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-bold mb-1 text-gray-900">Telefone <span className="text-red-500">*</span></label>
        <input type="text" id="phone" name="phone" required placeholder="Digite seu telefone" className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-500" />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1 text-gray-900">Faturamento mensal <span className="text-red-500">*</span></label>
        <div className="space-y-2">
          {faturamentoOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-gray-900">
              <input type="radio" name="field[12]" value={option} required className="accent-vanguardia-blue" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Hidden fields obrigatórios do ActiveCampaign */}
      <input type="hidden" name="u" value="6" />
      <input type="hidden" name="f" value="6" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="4a129370b68bf474593b3ce43849a1db" />
      {error && <div className="text-red-600 text-center mb-2">{error}</div>}
      <button type="submit" className="w-full bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-2" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default ActiveCampaignForm;
