import { TableBody } from "./body"
import { TableHeader } from "./header"


export const Table = () => {
  return (
    <table className="w-full overflow-hidden border-separate border-spacing-y-1">
      <thead className="bg-blue-primary text-white w-full h-full">
        <TableHeader />
      </thead>

      <tbody>
        <TableBody />
      </tbody>
    </table>
  )
}