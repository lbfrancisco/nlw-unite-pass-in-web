import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-medium">Participantes</h1>

        <div className="px-3 py-1.5 h-9 w-60 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-orange-200" />
          <input
            type="text"
            className="bg-transparent flex-1 outline-none border-0 p-0 focus:ring-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 16 }}
                className="py-3 px-4 font-semibold text-sm text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 border-white/10 rounded focus-visible:outline-offset-0 focus-visible:outline-none focus:text-orange-400 focus:ring-0 focus:ring-offset-0"
                />
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-left">
                Código
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-left">
                Participante
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 80 }}
                className="py-3 px-4 font-semibold text-sm text-left"
              ></th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <tr key={i} className="border-b border-white/10">
                  <td className="py-3 px-4 text-sm text-left">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 border-white/10 rounded focus-visible:outline-offset-0 focus-visible:outline-none focus:text-orange-400 focus:ring-0 focus:ring-offset-0"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-left">0000{i}</td>
                  <td className="py-3 px-4 text-sm text-left">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-zinc-50">Lucas</span>
                      <span>lucas@mail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-left">7 dias atrás</td>
                  <td className="py-3 px-4 text-sm text-left">3 dias atrás</td>
                  <td className="py-3 px-4 text-sm text-left">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td
              className="py-3 px-4 text-sm text-zinc-300 text-right"
              colSpan={3}
            >
              <div className="flex items-center justify-end gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <button className="bg-white/20 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className="bg-white/20 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="bg-white/20 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="bg-white/20 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
