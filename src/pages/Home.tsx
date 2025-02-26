import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { IoMdSearch } from "react-icons/io";
import { Table } from "../components/Table";


export function Home() {


  return (
    <main className="bg-gray-00 min-h-screen">
      <Header />

      <section className="max-w-screen-lg px-5 mx-auto pb-20">
        <div className="flex w-full items-center justify-between my-8">
          <h1 className="text-h1 text-blackzz">Funcionários</h1>

          <Input iconRight={IoMdSearch} />
        </div>

        <Table />
      </section>
    </main>
  );
}
