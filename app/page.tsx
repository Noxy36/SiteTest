export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-10">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-5xl font-bold">LP — site online ✅</h1>
        <p className="text-lg opacity-80">
          Première vraie page. Prochaine étape : une landing qui vend.
        </p>

        <div className="flex justify-center gap-3">
          <a
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold"
            href="https://discord.gg/TON_INVITE"
            target="_blank"
            rel="noreferrer"
          >
            Rejoindre le Discord
          </a>
          <a className="px-4 py-2 rounded-xl border border-white/20" href="#features">
            Voir les features
          </a>
        </div>
      </div>
    </main>
  );
}
