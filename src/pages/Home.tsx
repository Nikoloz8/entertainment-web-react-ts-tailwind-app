import Aside from "../components/Aside"
import tailwind from "../styles/tailwind"
import data from "../../data.json"
import Search from "../components/Search"
import { useContext } from "react"
import { Context } from "../layouts/Layout"
import RenderFilms from "../components/RenderFilms"
import RenderTrendingFilms from "../components/Home/RenderTrendingFilms"

export default function Home() {
    const { H1 } = tailwind()
    const { search, startSearch, setStartSearch, isTablet } = useContext(Context)

    const trendingFilms = data.filter((e) => e.thumbnail.hasOwnProperty("trending"))
    const filteredFilms = data.filter((e) => {
        if (search && startSearch) {
            if (!search) {
                setStartSearch(false)
            }
            return e.title.toLowerCase().includes(search.toLowerCase())
        } else {
            return e.isTrending === false
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

                <div className="max-sm:p-[24px]!">
                    <Search placeholder="Search for movies or TV series" />
                    <div>
                        {!search || !startSearch ? <div className="flex flex-col items-left w-[100%]">
                            <h1 className={`${H1} w-[100%] text-left m-[16px_0_24px_0]`}>Trending</h1>
                            <div className="flex gap-[32px] w-[100vw] scroll-hidden overflow-x-auto p-[0_16px_0_16px]">
                                <RenderTrendingFilms trendingFilms={trendingFilms} />
                            </div>
                        </div> : undefined}
                        {!search || !startSearch ? <h1 className={`${H1} m-[48px_0_24px_0]`}>Recommended for you</h1> : <h1 className={`${H1} m-[48px_0_24px_0]`}>Found {filteredFilms.length} results for ‘{search}’</h1>}
                        <div className="pr-[166px] max-md:pr-[50px]">
                            <RenderFilms filteredFilms={filteredFilms} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
