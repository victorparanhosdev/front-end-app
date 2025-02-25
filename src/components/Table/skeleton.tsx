import { HTMLAttributes } from "react"
import { Skeleton } from "../Skeleton"
import { twMerge } from 'tailwind-merge'

interface SkeletonTableProps extends HTMLAttributes<HTMLTableRowElement> {}

export const SkeletonTable = ({className, ...props}: SkeletonTableProps) => {
    return (
        <tr className={twMerge('bg-white', className)} {...props}>
            <td className="py-2 px-8 text-left">
                <Skeleton className="w-[34px] h-[34px] rounded-full" />
            </td>
            <td className="py-2 px-8 text-left whitespace-nowrap">
                <Skeleton className="h-4 w-24" />
            </td>
            <td className="py-2 px-8 text-left whitespace-nowrap">
                <Skeleton className="h-4 w-20" />
            </td>
            <td className="py-2 px-8 text-left whitespace-nowrap">
                <Skeleton className="h-4 w-16" />
            </td>
            <td className="py-2 px-8 text-left whitespace-nowrap">
                <Skeleton className="h-4 w-20" />
            </td>
        </tr>
    )
}