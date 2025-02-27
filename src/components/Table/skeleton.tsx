import { HTMLAttributes } from "react"
import { Skeleton } from "../Skeleton"
import { twMerge } from 'tailwind-merge'

interface SkeletonTableProps extends HTMLAttributes<HTMLTableRowElement> {}

export const SkeletonTable = ({className, ...props}: SkeletonTableProps) => {
    return (
        <tr className={twMerge('bg-white', className)} {...props}>
              <td className="py-[13px] md:py-2 px-4 md:pl-8">
                <Skeleton className="w-[34px] h-[34px] rounded-full" />
            </td>
            <td className="py-[13px] md:py-2 whitespace-nowrap">
                <Skeleton className="h-4 w-24" />
            </td>
            <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                <Skeleton className="h-4 w-20" />
            </td>
            <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                <Skeleton className="h-4 w-40" />
            </td>
            <td className="py-[13px] md:py-2 whitespace-nowrap hidden md:table-cell">
                <Skeleton className="h-4 w-28" />
            </td>
            <td className="py-[13px] md:py-2 px-4 md:pr-8 md:hidden flex justify-center">
                <Skeleton className="w-8 h-8"/>
            </td>
        </tr>
    )
}