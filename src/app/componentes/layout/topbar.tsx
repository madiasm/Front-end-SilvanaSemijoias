export function Topbar() {
  return (
    <header className="h-16 bg-orange-300 border-b px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Painel do Administrador</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">admin@semijoias.com</span>
        <button className="text-red-600 hover:underline">Sair</button>
      </div>
    </header>
  );
}
