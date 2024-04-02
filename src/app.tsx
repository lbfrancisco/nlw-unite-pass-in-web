import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="max-w-7xl m-auto my-5 space-y-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
