import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { IoMdSearch } from "react-icons/io";
import { Table } from "../components/Table";


export function Home() {

  return (
    <main className="bg-gray-00 min-h-screen">
      <Header />

      <section className="max-w-screen-lg px-5 min-mobile:px-8 mx-auto pb-20">
        <div className="grid my-6 md:flex gap-6 w-full items-center justify-between md:my-8">
          <h1 className="text-h1 text-blackzz">Funcionários</h1>
          <Input iconRight={IoMdSearch} />
        </div>
        <Table />
      </section>
    </main>
  );
}
