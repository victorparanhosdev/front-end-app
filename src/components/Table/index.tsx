import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { EmployeesProps } from "../../@types/Employees";
import { getEmployees } from "../../services/getEmployees";
import { formatDate } from "../../utils/formatDate";
import { SkeletonTable } from "./skeleton";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { formatPhoneCustom } from "../../utils/formatPhone";

export const TableData = ({ getFilterData }: { getFilterData: string }) => {
  const { data: employees, isLoading } = useQuery<EmployeesProps[]>({
    queryKey: ["users"],
    queryFn: getEmployees,
    staleTime: Infinity
  });

  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [filterEmployees, setFilterEmployees] = useState<EmployeesProps[] | undefined>(employees);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  useEffect(() => {
    if (employees) {
      if (getFilterData.trim() === "") {
        setFilterEmployees(employees);
      } else {
        const filterText = getFilterData.toLowerCase();
        const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(filterText) ||
            employee.job.toLowerCase().includes(filterText) ||
            employee.phone.toLowerCase().includes(filterText)
          );
        setFilterEmployees(filtered);
      }
    }
  }, [getFilterData, employees]);

  return (
    <>
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => <SkeletonTable key={index} />)
        : filterEmployees?.map((employee) => (
            <React.Fragment key={employee.id}>
              <tr
                className="shadow-01 bg-white cursor-pointer md:pointer-events-none md:cursor-default"
                onClick={() => toggleRow(employee.id)}
              >
                <td className="py-[13px] md:py-2 px-4 md:pl-8">
                  <img
                    className="min-w-[34px] max-w-[34px] h-[34px] rounded-full object-cover"
                    src={employee.image}
                    alt={employee.name}
                  />
                </td>
                <td className="py-[13px] md:py-2 whitespace-nowrap ">{employee.name}</td>
                <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                  {employee.job}
                </td>
                <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                  {formatDate(employee.admission_date)}
                </td>
                <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                  {formatPhoneCustom(employee.phone)}
                </td>
                <td className="py-[13px] md:py-2 px-4 md:pr-8 md:hidden">
                  <div className="flex items-center justify-center">
                    <BsChevronDown
                      data-state={expandedRow === employee.id}
                      size={24}
                      className="text-blue-primary transition-transform duration-300 data-[state=true]:rotate-180 ease-in-out"
                    />
                  </div>
                </td>
              </tr>
              {expandedRow === employee.id && (
                <tr className="md:hidden md:invisible md:pointer-events-none">
                  <td colSpan={6} className="text-black">
                    <div
                      className="w-full grid gap-4 py-8 bg-white shadow-sm data-[state=true]:animate-expandRow overflow-hidden"
                      data-state={expandedRow === employee.id}
                    >
                      <div className="flex justify-between px-4 relative after:block after:w-[calc(100%-2rem)] after:h-1 after:absolute after:bottom-0 after:left-4 after:border-b after:border-gray-10 after:border-dashed">
                        <h2 className="text-h2 font-helvetica">Cargo</h2>
                        <h3 className="text-h3 font-helvetica">{employee.job}</h3>
                      </div>

                      <div className="flex justify-between px-4 relative after:block after:w-[calc(100%-2rem)] after:h-1 after:absolute after:bottom-0 after:left-4 after:border-b after:border-gray-10 after:border-dashed">
                        <h2 className="text-h2 font-helvetica">Data de admissão</h2>
                        <h3 className="text-h3 font-helvetica">{formatDate(employee.admission_date)}</h3>
                      </div>

                      <div className="flex justify-between px-4 relative after:block after:w-[calc(100%-2rem)] after:h-1 after:absolute after:bottom-0 after:left-4 after:border-b after:border-gray-10 after:border-dashed">
                        <h2 className="text-h2 font-helvetica">Telefone</h2>
                        <h3 className="text-h3 font-helvetica">{formatPhoneCustom(employee.phone)}</h3>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
    </>
  );
};
