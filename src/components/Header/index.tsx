import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
interface HeaderProps extends ComponentProps<'header'> {}


export const Header = ({className, ...props}: HeaderProps) => {
    return(
        <header {...props} className={twMerge('flex items-center h-[60px] w-full shadow-small px-5 md:px-8 bg-white', className)}>
            <img src="/logo.svg" alt="logo da aplicação" />
        </header>
    )
}