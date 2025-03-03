import { InputHTMLAttributes } from "react"
import { type IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconRight?: IconType | undefined
}

export const Input = ({iconRight: IconRight, type = 'text', ...props}: InputProps) => {

    return(
        <div className="relative rounded-lg border border-gray-10 overflow-hidden">
            <input type={type} {...props} className="outline-none border-none py-3 pl-4 pr-9 w-full text-h3 placeholder:font-helvetica" placeholder="Pesquisar"/>
            {IconRight ? <IconRight size={24} className="absolute right-2 top-2/4 -translate-y-2/4 text-gray-10"/> : undefined}
        </div>
    )
}