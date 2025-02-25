import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { IoMdSearch } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { EmployeesProps } from "../../@types/Employees";
import { getEmployees } from "../../getEmployees";
import { formartDate } from "../../utils/formatDate";
import { formatPhoneNumberWithCountry } from "../../utils/formatPhone";


export function Home() {
  
  const { data: employees, isLoading } = useQuery<EmployeesProps[]>({
    queryKey: ["users"],
    queryFn: getEmployees,
  });



  return (
    <main className="bg-gray-00 min-h-screen">
      <Header />

      <section className="max-w-screen-lg px-8 mx-auto pb-20">
        <div className="flex w-full items-center justify-between my-8">
          <h1 className="text-h1 text-black">Funcionarios</h1>

          <Input iconRight={IoMdSearch} />
        </div>

        <table className="w-full overflow-hidden rounded-tr-lg rounded-tl-lg border-collapse">
          <thead className="bg-blue-primary text-white w-full">
            <tr>
              <th className="py-[14px] px-8 text-left uppercase whitespace-nowrap">
                Foto
              </th>
              <th className="py-[14px] px-8 text-left uppercase  whitespace-nowrap">
                Nome
              </th>
              <th className="py-[14px] px-8 text-left uppercase  whitespace-nowrap">
                Cargo
              </th>
              <th className="py-[14px] px-8 text-left uppercase  whitespace-nowrap">
                Data de Admissão
              </th>
              <th className="py-[14px] px-8 text-left uppercase  whitespace-nowrap">
                Telefone
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <tr key={index} className="bg-white animate-pulse">
                    <td className="py-1 px-8 text-left">
                      <div className="w-[34px] h-[34px] rounded-full bg-gray-10"></div>
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      <div className="h-4 bg-gray-10 rounded w-24"></div>
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      <div className="h-4 bg-gray-10 rounded w-20"></div>
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      <div className="h-4 bg-gray-10 rounded w-16"></div>
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      <div className="h-4 bg-gray-10 rounded w-20"></div>
                    </td>
                  </tr>
                ))
              : employees?.map((employee) => (
                  <tr key={employee.id} className="shadow-01 bg-white">
                    <td className="py-1 px-8 text-left ">
                      <img
                        className="w-[34px] h-[34px] rounded-full"
                        src={employee.image}
                        alt={employee.name}
                      />
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      {employee.job}
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      {formartDate(employee.admission_date)}
                    </td>
                    <td className="py-1 px-8 text-left whitespace-nowrap">
                      {formatPhoneNumberWithCountry(employee.phone)}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
