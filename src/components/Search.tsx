import { useContext } from "react"
import tailwind from "../styles/tailwind"
import { Context } from "../layouts/Layout"

export default function Search({ placeholder }: { placeholder: string }) {

    const { H2 } = tailwind()
    const { setSearch, setStartSearch } = useContext(Context)

    return (
        <div className="mt-[24px] w-[85vw] mr-[32px]!">
            <label htmlFor="search" className="flex items-center w-[100%]">
                <img onClick={() => setStartSearch(true)} className="cursor-pointer" src="/icon-search.svg" alt="" />
                <input type="text" className={`ml-[12px] outline-none caret-[#FC4747] focus:border-b-[1px] border-solid border-[#5A698F] mt-[12px] w-[100%] pb-[12px] ${H2}`} placeholder={placeholder} onKeyDown={(e) => {
                    e.key === "Enter" ? setStartSearch(true) : null
                }} onChange={(e) => {
                    setSearch(e.target.value)
                    setStartSearch(false)
                }} id="search" />
            </label>
        </div>)
}
