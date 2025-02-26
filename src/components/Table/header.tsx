import { MdCircle } from "react-icons/md";

export const TableHeader = () => {
    return (
        <tr >
            <th className="py-[14px] px-8 uppercase whitespace-nowrap text-start rounded-tl-lg">
                Foto
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start">
                Nome
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start max-[845px]:hidden">
                Cargo
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap text-start max-[845px]:hidden">
                Data de Admissão
            </th>
            <th className="py-[14px] px-8 uppercase  whitespace-nowrap rounded-tr-lg text-start max-[845px]:hidden">
                Telefone
            </th>
            <th className="py-[14px] px-8 max-[845px]:rounded-tr-lg min-[845px]:hidden"><MdCircle size={8} className="text-white"/></th>
        </tr>
    )
}