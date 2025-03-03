import { format } from "date-fns";

export function formatDate(date: string) {
    const formattedDate = format(new Date(date), 'dd/MM/yyyy');
    return formattedDate
}