import { EmployeesProps } from "../@types/Employees";
import { api } from "../lib/axios";

export async function getEmployees(): Promise<EmployeesProps[]> {
    const response = await api.get<EmployeesProps[]>('/employees')
    return response.data
}