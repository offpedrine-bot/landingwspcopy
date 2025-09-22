import React, { useMemo } from "react";

/* ======================
   EDITABLE CONTENT
====================== */
const WHATSAPP_PHONE = "16162071727"; // sólo números
const HERO_IMAGE_URL = "/hero-placeholder.jpg"; 
const TRUST_TITLE = "✅ PLATAFORMA VERIFICADA ✅";
const SUBTITLE_GREEN = "C@sin0 De Confianza";
const PROMO_TEXT = "🎁 B0n0 20% Activo, Pedilo Via WhatsApp";
const CTA_TEXT = "Ir a WhatsApp Ahora";
const SOCIAL_TEXT = "+10.000 CLIENTES GANANDO TODOS LOS DÍAS";
const REVIEW_TEXT = "“Excelente” ⭐⭐⭐⭐⭐ clasificación 5 en Trustpilot";
/* ====================== */

function WhatsAppLogo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-9 h-9" />
      <span className="text-wsp font-extrabold text-3xl leading-none">WhatsApp</span>
    </div>
  );
}

export default function App() {
  const waLink = useMemo(() => {
    const message = encodeURIComponent("Hola, quiero más info.");
    return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <div className="mx-auto max-w-md px-5 pb-16">
        {/* Logo */}
        <div className="pt-8 pb-6 flex justify-center">
          <WhatsAppLogo />
        </div>

        {/* Imagen principal */}
        <div className="w-full flex justify-center">
          <img
            src={HERO_IMAGE_URL}
            alt="Persona"
            className="w-[72%] max-w-xs object-cover rounded-[1.5rem]"
          />
        </div>

        {/* Título confianza */}
        <h1 className="mt-8 text-2xl sm:text-[26px] leading-tight font-extrabold text-center">
          {TRUST_TITLE}
        </h1>

        {/* Subtítulo verde */}
        <p className="mt-3 text-wsp font-extrabold text-2xl text-center">
          {SUBTITLE_GREEN}
        </p>

        {/* Promo box */}
        <div className="mt-5 bg-lightGreen border border-wsp/20 rounded-xl2 px-5 py-4 text-center">
          <p className="text-[18px] font-semibold text-emerald-800">{PROMO_TEXT}</p>
        </div>

        {/* Botón grande */}
        <div className="mt-6 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl2 bg-wsp px-6 py-4 text-white font-extrabold text-[20px] shadow-soft hover:bg-wspDark active:scale-[0.99] transition"
          >
            {CTA_TEXT}
          </a>
        </div>

        {/* Social strip */}
        <div className="mt-6 rounded-full bg-gradient-to-r from-wsp to-emerald-400 text-white px-3 py-2 flex items-center gap-3">
          <div className="flex -space-x-2">
            <img src="/avatar-1.jpg" className="w-8 h-8 rounded-full ring-2 ring-white/50 object-cover" />
            <img src="/avatar-2.jpg" className="w-8 h-8 rounded-full ring-2 ring-white/50 object-cover" />
            <img src="/avatar-3.jpg" className="w-8 h-8 rounded-full ring-2 ring-white/50 object-cover" />
          </div>
          <span className="font-semibold text-[14px] tracking-wide">{SOCIAL_TEXT}</span>
        </div>

        {/* Trustpilot-like box */}
        <div className="mt-6 rounded-xl2 border-2 border-dashed border-emerald-200 bg-emerald-50 px-4 py-4 text-center">
          <p className="text-[15px] text-emerald-900 font-medium">{REVIEW_TEXT}</p>
        </div>
      </div>
    </main>
  );
}