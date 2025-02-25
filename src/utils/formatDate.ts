import { format } from "date-fns";

export function formartDate(date: string) {
    const formattedDate = format(new Date(date), 'dd/MM/yyyy');
    return formattedDate
}