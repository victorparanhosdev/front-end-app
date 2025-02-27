import { TableBody } from "./body"
import { MdCircle } from "react-icons/md";

export const Table = () => {
  return (
    <table className="w-full overflow-hidden border-separate border-spacing-y-1" aria-label="Lista de funcionários">
      <thead className="bg-blue-primary text-white w-full h-full">
        <tr >
          <th className="py-[14px] px-[14.5px] md:pl-8 uppercase whitespace-nowrap text-start rounded-tl-lg">
            Foto
          </th>
          <th className="py-[14px] uppercase  whitespace-nowrap text-start">
            Nome
          </th>
          <th className="py-[14px] uppercase  whitespace-nowrap text-start hidden md:table-cell">
            Cargo
          </th>
          <th className="py-[14px] uppercase  whitespace-nowrap text-start hidden md:table-cell">
            Data de Admissão
          </th>
          <th className="py-[14px] pr-8 uppercase  whitespace-nowrap rounded-tr-lg text-start hidden md:table-cell">
            Telefone
          </th>
          <th className="py-[14px] px-[14.5px] md:pr-8 rounded-tr-lg md:hidden"><div className="flex justify-center"><MdCircle size={8} className="text-white" /></div></th>
        </tr>
      </thead>

      <tbody>
        <TableBody />
      </tbody>
    </table>
  )
}