export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-10">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold">Mon J — site online ✅</h1>
        <p className="text-lg opacity-80">
          Première victoire. Prochaine étape: une landing qui vend.
        </p>

        <div className="flex gap-3">
          <a
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold"
            href="#"
          >
            Bouton 1
          </a>
          <a
            className="px-4 py-2 rounded-xl border border-white/20"
            href="#"
          >
            Bouton 2
          </a>
        </div>
      </div>
    </main>
  );
}
