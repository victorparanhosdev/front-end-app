import { Input } from "../components/Input";
import { IoMdSearch } from "react-icons/io";

import React, { useState } from "react";
import { MdCircle } from "react-icons/md";
import { TableData } from "../components/Table";



export function Home() {

  const [filterData, setFilterData] = useState<string>('')

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterData(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="grid my-6 md:flex gap-6 w-full items-center justify-between md:my-8">
        <h1 className="text-h1 text-black font-helvetica">Funcionários</h1>
        <Input iconRight={IoMdSearch} onChange={handleSearch} />
      </div>
      <table className="w-full overflow-hidden border-separate border-spacing-y-1" aria-label="Lista de funcionários">
        <thead className="bg-blue-primary text-white w-full h-full">
          <tr >
            <th className="py-[14px] px-[14.5px] md:pl-8 uppercase whitespace-nowrap text-start rounded-tl-lg">
              Foto
            </th>
            <th className="py-[14px] uppercase  whitespace-nowrap text-start ">
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
          <TableData getFilterData={filterData} />
        </tbody>
      </table>
    </React.Fragment>

  );
}
