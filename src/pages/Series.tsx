import Aside from "../components/Aside"
import tailwind from "../styles/tailwind"
import data from "../../data.json"
import Search from "../components/Search"
import { useContext } from "react"
import { Context } from "../layouts/Layout"
import RenderFilms from "../components/RenderFilms"

export default function Series() {

    const { H1 } = tailwind()
    const { search, startSearch, setStartSearch, isTablet } = useContext(Context)

    const filteredData = data.filter((e) => e.category === "TV Series")

    const filteredFilms = filteredData.filter((e) => {
        if (search && startSearch) {
            if (!search) {
                setStartSearch(false)
            }
            return e.title.toLowerCase().includes(search.toLowerCase())
        } else {
            return true
        }
    })

    return (
        <div className="flex">
            {
                !isTablet ? <div className="flex items-left">
                    <Aside />
                </div> : undefined
            }
            <div className="flex flex-col">
                {
                    isTablet ? <div className="flex items-left">
                        <Aside />
                    </div> : undefined
                }
                <Search placeholder="Search for TV series" />
                <div>
                    {!search || !startSearch ? <h1 className={`${H1} m-[48px_0_24px_0]`}>TV Series</h1> : <h1 className={`${H1} m-[48px_0_24px_0]`}>Found {filteredFilms.length} results for ‘{search}’</h1>}
                    <div>
                        <RenderFilms filteredFilms={filteredFilms} />
                    </div>
                </div>
            </div>
        </div>
    )
}
