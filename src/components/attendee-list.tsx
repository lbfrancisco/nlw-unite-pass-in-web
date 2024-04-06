import { ChangeEvent, useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { api } from '../service/api'

import { IconButton } from './icon-button'
import * as Table from './table'

interface Attendee {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? ''
    }

    return ''
  })
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })

  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([])

  useEffect(() => {
    async function getAttendees() {
      try {
        const response = await api.get(
          `/events/c61449b7-ef18-4f31-9cc6-892a8e3e592a/attendees?pageIndex=${page - 1}&query=${search}`,
        )

        setAttendees(response.data.attendees)
        setTotal(response.data.total)
      } catch (error) {}
    }

    getAttendees()
  }, [page, search])

  const totalPages = Math.ceil(total / 10)

  function onSearchInputValueChanged(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value)
    setCurrentPage(1)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToPreviousPage() {
    if (page <= 1) return

    setCurrentPage(page - 1)
  }

  function goToNextPage() {
    if (page >= totalPages) return

    setCurrentPage(page + 1)
  }

  function goToLastPage() {
    const lastPage = totalPages
    setCurrentPage(lastPage)
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())
    url.searchParams.set('page', String(page))

    setPage(page)

    window.history.pushState({}, '', url)
  }

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())
    url.searchParams.set('search', search)

    setSearch(search)

    window.history.pushState({}, '', url)
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
          {attendees.map((attendee, i) => {
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
                  {!attendee.checkedInAt ? (
                    <span className="text-zinc-400">
                      Check-in não realizado
                    </span>
                  ) : (
                    formatDistanceToNow(attendee.checkedInAt, {
                      locale: ptBR,
                      addSuffix: true,
                    })
                  )}
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
          <Table.Row>
            <Table.Cell colSpan={3}>
              Mostrando {attendees.length} de {total} itens
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
          </Table.Row>
        </Table.Foot>
      </Table.Root>
    </div>
  )
}
