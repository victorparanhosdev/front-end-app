import { useQuery } from "@tanstack/react-query";
import { EmployeesProps } from "../../@types/Employees";
import { getEmployees } from "../../services/getEmployees";
import { formartDate } from "../../utils/formatDate";
import { SkeletonTable } from "./skeleton";
import { IoChevronDownSharp } from "react-icons/io5";

export const TableBody = () => {

    const { data: employees, isLoading } = useQuery<EmployeesProps[]>({
        queryKey: ["users"],
        queryFn: getEmployees,
    });


    return ( 
        <>
            {isLoading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <SkeletonTable key={index} />
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
                        <td className="py-2 px-8 whitespace-nowrap max-[845px]:hidden">
                            {employee.job}
                        </td>
                        <td className="py-2 px-8 whitespace-nowrap max-[845px]:hidden">
                            {formartDate(employee.admission_date)}
                        </td>
                        <td className="py-2 px-8 whitespace-nowrap max-[845px]:hidden">
                            {employee.phone}
                        </td>
                         <td className="py-2 px-8 min-[845px]:hidden flex items-center justify-center"><IoChevronDownSharp size={32} className="text-blue-primary"/></td>
                    </tr>
                ))}
        </>
    )
}