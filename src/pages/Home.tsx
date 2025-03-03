import { Input } from "../components/Input";
import { IoMdSearch } from "react-icons/io";
import { Table } from "../components/Table";
import React from "react";



export function Home() {

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="grid my-6 md:flex gap-6 w-full items-center justify-between md:my-8">
        <h1 className="text-h1 text-blackzz">Funcionários</h1>
        <Input iconRight={IoMdSearch} onChange={handleSearch}/>
      </div>
      <Table />
    </React.Fragment>

  );
}
