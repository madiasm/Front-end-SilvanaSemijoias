export default function AdminDashboardPage() {
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Dashboard do Admin</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-500 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total de Joias</h3>
          <p className="text-2xl">128</p>
        </div>

        <div className="bg-gray-500 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pedidos Pendentes</h3>
          <p className="text-2xl">12</p>
        </div>

        <div className="bg-gray-500 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Clientes Ativos</h3>
          <p className="text-2xl">45</p>
        </div>

        <div className="bg-gray-500 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Promoções Ativas</h3>
          <p className="text-2xl">3</p>
        </div>
      </div>
    </main>
  );
}
