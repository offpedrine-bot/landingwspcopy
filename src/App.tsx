import React, { useMemo } from "react";

/* ========= CONTENIDO EDITABLE ========= */
const WHATSAPP_PHONE = "16162071727"; // sólo números
const HERO_IMAGE_URL = "/hero-placeholder.jpg"; // reemplazá por tu imagen
const TRUST_TITLE = "✅ PLATAFORMA VERIFICADA ✅";
const SUBTITLE_GREEN = "C@sin0 De Confianza";
const PROMO_TEXT = "🎁 B0n0 20% Activo, Pedilo Via WhatsApp";
const CTA_TEXT = "Ir a WhatsApp Ahora";
const SOCIAL_TEXT = "+10.000 CLIENTES GANANDO TODOS LOS DÍAS";
const REVIEW_TEXT = "“Excelente” ⭐⭐⭐⭐⭐ clasificación 5 en Trustpilot";
/* ===================================== */

function WhatsAppLogo() {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Ícono */}
      <svg viewBox="0 0 448 512" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          fill="#25D366"
          d="M380.9 97.1C339-3.2 225.9-30 135.4 30.7 89.7 61.6 60.9 110.7 56.4 166.9c-6.7 82.2 31.5 146.1 106.5 184.7l-11.2 65.4c-1.5 8.5 7.4 15 15.3 11.1l58.7-29.6c84.2 17.6 156.9-12.5 196.6-86.3 44.7-82.8 14.1-184.8-41.4-214.1zM224.6 355.5c-28.8 0-56.8-8.4-81-24.2l-5.8-3.8-34.6 17.4 7-41.1-5.3-3.7c-30.7-21.4-49.1-53.1-52.4-90.5-6.1-73.2 49.2-135.9 122.5-142 73.3-6.1 135.9 49.2 142 122.5 6.1 73.3-49.2 135.9-122.4 142-3.4.3-6.9.4-10.2.4z"
        />
      </svg>
      {/* Texto WhatsApp */}
      <span className="text-[#25D366] font-extrabold text-[28px] leading-none">
        WhatsApp
      </span>
    </div>
  );
}

export default function App() {
  const waLink = useMemo(() => {
    const msg = encodeURIComponent("Hola, quiero más info.");
    return `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-[#0f172a]">
      <div className="mx-auto max-w-[420px] px-5 pb-16">
        {/* Logo */}
        <div className="pt-6 pb-3 flex justify-center">
          <WhatsAppLogo />
        </div>

        {/* Imagen principal */}
        <div className="w-full flex justify-center mt-2">
          <img
            src={HERO_IMAGE_URL}
            alt="Persona"
            className="w-[64%] max-w-[260px] object-cover rounded-[24px]"
          />
        </div>

        {/* Título confianza */}
        <h1 className="mt-6 text-center font-extrabold text-[28px] sm:text-[30px] leading-tight tracking-tight text-[#0b1220]">
          {TRUST_TITLE}
        </h1>

        {/* Subtítulo verde */}
        <p className="mt-3 text-center font-extrabold text-[24px] sm:text-[26px] text-[#25D366]">
          {SUBTITLE_GREEN}
        </p>

        {/* Promo pill */}
        <div className="mt-5 flex justify-center">
          <div className="w-full rounded-[22px] bg-[#e8f8ee] border border-[#25D366]/20 px-5 py-4">
            <p className="text-center text-[18px] sm:text-[19px] font-semibold text-emerald-800">
              {PROMO_TEXT}
            </p>
          </div>
        </div>

        {/* CTA gigante */}
        <div className="mt-6 flex justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-[28px] bg-[#25D366] px-6 py-4 text-white font-extrabold text-[20px] shadow-[0_10px_30px_rgba(37,211,102,.25)] hover:brightness-105 active:scale-[0.99] transition"
          >
            {CTA_TEXT}
          </a>
        </div>

        {/* Tira social */}
        <div className="mt-6 flex items-center gap-3 rounded-[28px] bg-gradient-to-r from-[#25D366] to-emerald-400 text-white px-3 py-2">
          <div className="flex -space-x-2">
            <img
              src="/avatar-1.jpg"
              className="w-9 h-9 rounded-full ring-2 ring-white/60 object-cover"
            />
            <img
              src="/avatar-2.jpg"
              className="w-9 h-9 rounded-full ring-2 ring-white/60 object-cover"
            />
            <img
              src="/avatar-3.jpg"
              className="w-9 h-9 rounded-full ring-2 ring-white/60 object-cover"
            />
          </div>
          <span className="font-semibold text-[14px] leading-snug">
            {SOCIAL_TEXT}
          </span>
        </div>

        {/* Trustpilot-like box */}
        <div className="mt-6 rounded-[22px] border-2 border-dashed border-emerald-200 bg-emerald-50 px-4 py-4 text-center">
          <p className="text-[15px] text-emerald-900 font-medium">{REVIEW_TEXT}</p>
        </div>
      </div>
    </main>
  );
}
