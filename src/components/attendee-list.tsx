import { ChangeEvent, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { IconButton } from './icon-button'
import * as Table from './table'
import { attendees } from '../data/attendees'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputValueChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToPreviousPage() {
    if (page <= 1) return

    setPage(page - 1)
  }

  function goToNextPage() {
    if (page >= totalPages) return

    setPage(page + 1)
  }

  function goToLastPage() {
    const lastPage = totalPages
    setPage(lastPage)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-medium">Participantes</h1>

        <div className="px-3 py-1.5 h-9 w-60 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-orange-200" />
          <input
            type="text"
            value={search}
            onChange={onSearchInputValueChanged}
            className="bg-transparent flex-1 outline-none border-0 p-0 focus:ring-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Header style={{ width: 16 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 border-white/10 rounded focus-visible:outline-offset-0 focus-visible:outline-none focus:text-orange-400 focus:ring-0 focus:ring-offset-0 checked:text-orange-400"
              />
            </Table.Header>
            <Table.Header>Código</Table.Header>
            <Table.Header>Participante</Table.Header>
            <Table.Header>Data de inscrição</Table.Header>
            <Table.Header>Data do check-in</Table.Header>
            <Table.Header style={{ width: 80 }}></Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 border-white/10 rounded focus-visible:outline-offset-0 focus-visible:outline-none focus:text-orange-400 focus:ring-0 focus:ring-offset-0 checked:text-orange-400"
                  />
                </Table.Cell>
                <Table.Cell>{attendee.id}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-zinc-50">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {formatDistanceToNow(attendee.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </Table.Cell>
                <Table.Cell>
                  {formatDistanceToNow(attendee.checkedInAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </Table.Cell>
                <Table.Cell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
        <Table.Foot>
          <Table.Cell colSpan={3}>
            Mostrando 10 de {attendees.length} itens
          </Table.Cell>
          <Table.Cell
            className="py-3 px-4 text-sm text-zinc-300 text-right"
            colSpan={3}
          >
            <div className="flex items-center justify-end gap-8">
              <span>
                Página {page} de {totalPages}
              </span>
              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToLastPage}
                  disabled={page === totalPages}
                >
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </Table.Cell>
        </Table.Foot>
      </Table.Root>
    </div>
  )
}
