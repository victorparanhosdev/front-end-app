import { useQuery } from "@tanstack/react-query";
import { EmployeesProps } from "../../@types/Employees";
import { getEmployees } from "../../getEmployees";
import { formartDate } from "../../utils/formatDate";
import { SkeletonTable } from "./skeleton";


export const Table = ()=> {

      const { data: employees, isLoading } = useQuery<EmployeesProps[]>({
        queryKey: ["users"],
        queryFn: getEmployees,
      });
    

    return(
      
        <table className="w-full overflow-hidden border-separate border-spacing-y-1">
        <thead className="bg-blue-primary text-white w-full h-full  ">
          <tr >
            <th className="py-[14px] px-8 uppercase whitespace-nowrap text-start rounded-tl-lg">
              Foto
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start">
              Nome
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start">
              Cargo
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start">
              Data de Admissão
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start rounded-tr-lg">
              Telefone
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeletonTable key={index}/>
              ))
            : employees?.map((employee) => (
                <tr key={employee.id} className="shadow-01 bg-white">
                  <td className="py-2 px-8 ">
                    <img
                      className="min-w-[34px] max-w-[34px] h-[34px] rounded-full object-cover "
                      src={employee.image}
                      alt={employee.name}
                    />
                  </td>
                  <td className="py-2 px-8 whitespace-nowrap">
                    {employee.name}
                  </td>
                  <td className="py-2 px-8 whitespace-nowrap">
                    {employee.job}
                  </td>
                  <td className="py-2 px-8 whitespace-nowrap">
                    {formartDate(employee.admission_date)}
                  </td>
                  <td className="py-2 px-8 whitespace-nowrap">
                    {employee.phone}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    )
}