import Aside from "../components/Aside"
import tailwind from "../styles/tailwind"
import data from "../../data.json"
import Search from "../components/Search"
import { useContext } from "react"
import { Context } from "../layouts/Layout"
import RenderFilms from "../components/RenderFilms"

export default function Bookmarked() {

    const { H1 } = tailwind()
    const { search, startSearch, setStartSearch } = useContext(Context)

    const filteredDataS = data.filter((e) => e.isBookmarked && e.category === "TV Series")
    const filteredDataF = data.filter((e) => e.isBookmarked && e.category === "Movie")


    const filteredFilms = filteredDataF.filter((e) => {
        if (search && startSearch) {
            if (!search) {
                setStartSearch(false)
            }
            return e.title.toLowerCase().includes(search.toLowerCase())
        } else {
            return true
        }
    })

    const filteredSeries = filteredDataS.filter((e) => {
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
            <div className="flex items-left">
                <Aside />
            </div>
            <div className="flex flex-col">
                <Search placeholder="Search for bookmarked shows" />
                <div>
                    {!search || !startSearch ? <h1 className={`${H1} m-[48px_0_24px_0]`}>Bookmarked Movies</h1> : <h1 className={`${H1} m-[48px_0_24px_0]`}>Found {filteredFilms.length} results for ‘{search}’</h1>}
                    <div className="flex gap-[40px] pr-[166px] mb-[50px] items-center justify-center flex-wrap">
                        <RenderFilms filteredFilms={filteredFilms} />
                    </div>
                </div>
                <div>
                    {!search || !startSearch ? <h1 className={`${H1} m-[48px_0_24px_0]`}>Bookmarked TV Series</h1> : undefined}
                    <div className="flex gap-[40px] pr-[166px] mb-[50px] items-center justify-center flex-wrap">
                        <RenderFilms filteredFilms={filteredSeries} />
                    </div>
                </div>
            </div>
        </div>
    )
}
