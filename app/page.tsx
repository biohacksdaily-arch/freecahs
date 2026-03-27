"use client";

import { useState } from "react";
import { Check, Download, Lock } from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState<"initial" | "confirmed">("initial");

  console.log("[v0] Current step:", step);

  if (step === "confirmed") {
    return <ConfirmedStep />;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center px-4 py-12">
      {/* Logo Section */}
      <div className="mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8wq0BI746YmlyM0h9KiqSOF9GUz2w.png"
          alt="FreeCash Logo"
          width={80}
          height={80}
          className="rounded-2xl"
        />
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-black text-center mb-4 leading-tight">
        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Verdien Geld
        </span>
        <br />
        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          met Gamen
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-gray-400 text-center max-w-xs mb-10 leading-relaxed">
        Sluit je aan bij duizenden die dagelijks verdienen door games te spelen,
        taken uit te voeren en direct uit te betalen.
      </p>

      {/* Bonus Banner */}
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-5 mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">🎁</span>
          <span className="text-green-400 font-bold text-xl">€20 Aanmeldbonus</span>
        </div>
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Gratis bij download vandaag
        </p>
      </div>

      {/* CTA Buttons */}
      <button
        onClick={() => setStep("confirmed")}
        className="w-full max-w-md bg-green-500 hover:bg-green-400 text-black font-bold py-5 px-6 rounded-2xl transition-all duration-200 mb-3 shadow-lg shadow-green-500/30"
      >
        <span className="text-lg">Ik ben 18 of ouder</span>
        <br />
        <span className="text-sm font-normal opacity-80">
          Directe Uitbetalingen: PayPal, Bankoverschrijving &amp; Crypto
        </span>
      </button>

      <button
        onClick={() => setStep("confirmed")}
        className="w-full max-w-md bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-200"
      >
        <span className="text-lg">Ik ben jonger dan 18</span>
        <br />
        <span className="text-sm font-normal text-green-400">
          Beperkte Uitbetalingen: Alleen Bankoverschrijving
        </span>
      </button>
    </main>
  );
}

function ConfirmedStep() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center px-4 py-12">
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8wq0BI746YmlyM0h9KiqSOF9GUz2w.png"
          alt="FreeCash Logo"
          width={64}
          height={64}
          className="rounded-2xl"
        />
      </div>

      {/* Success Message */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="w-6 h-6 text-black" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-green-400">
          Je bent binnen!
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-center max-w-xs mb-8 leading-relaxed">
        Je account is vooraf gekwalificeerd voor hogere uitbetalingen.
        Download de app om je{" "}
        <span className="text-green-400 font-bold">€20 bonus</span> en volledige
        toegang te activeren.
      </p>

      {/* Download Button */}
      <button className="w-full max-w-md bg-green-500 hover:bg-green-400 text-black font-bold py-5 px-6 rounded-2xl transition-all duration-200 mb-3 flex items-center justify-center gap-3 shadow-lg shadow-green-500/30">
        <Download className="w-6 h-6" />
        <span className="text-lg">DOWNLOAD NU — CLAIM €20 BONUS</span>
      </button>

      <p className="text-gray-600 text-sm mb-10">
        Typische gebruikers verdienen €50 na een paar deals
      </p>

      {/* Journey Section */}
      <div className="w-full max-w-md">
        <p className="text-gray-500 text-sm uppercase tracking-widest text-center mb-6">
          Jouw Verdientraject
        </p>

        {/* Steps */}
        <div className="space-y-6">
          <StepItem
            number={1}
            title="Download &amp; Ontvang Je €20 Bonus"
            description="Beschikbaar op iOS &amp; Android – Duurt minder dan 60 seconden"
          />
          <StepItem
            number={2}
            title="Voltooi Dagelijkse Opdrachten"
            description="Speel games, test apps, vul enquêtes in of bekijk video's!"
          />
          <StepItem
            number={3}
            title="Laat Je Verdiensten Uitbetalen"
            description="Directe Uitbetalingen: PayPal, Bankoverschrijving &amp; Crypto"
          />
        </div>

        {/* Activation Notice */}
        <div className="mt-8 bg-[#111] border border-red-900/50 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-white">Activatie Vereist</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                  BELANGRIJK
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Nieuwe gebruikers: Voltooi{" "}
                <span className="text-white font-bold">2 snelle aanbiedingen</span>{" "}
                om volledige toegang te ontgrendelen en te beginnen met verdienen.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <p className="text-gray-600 text-sm text-center mt-8">
          Vertrouwd door meer dan 500.000 gebruikers die dagelijks geld verdienen
        </p>
      </div>
    </main>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center flex-shrink-0">
        <span className="text-green-400 font-bold">{number}</span>
      </div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
