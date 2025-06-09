import tailwind from "../../styles/tailwind"

export default function RenderTrendingFilms({ trendingFilms }: { trendingFilms: TFilm[] }) {

    const { H4, H2, P1 } = tailwind()

    return (
        <>
            {
                trendingFilms.map((e, index) => {
                    return <div key={index} style={{ backgroundImage: `url(${e.thumbnail.trending?.large})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="min-w-[470px] group h-[230px] flex flex-col justify-between rounded-[8px] p-[24px] mb-[20px] relative ">
                        <div className="absolute group-hover:bg-[rgba(0,0,0,0.5))] w-[100%] h-[100%] top-0 left-0 rounded-[8px] flex items-center justify-center">
                            <div className="w-[117px] h-[48px] hidden group-hover:flex rounded-[28.5px] bg-[rgba(255,255,255,0.25)] p-[8px] cursor-pointer items-center">
                                <img src="/icon-play.svg" alt="" />
                                <h4 className={`${H4} w-[100%] text-center`}>Play</h4>
                            </div>
                        </div>
                        <div className="w-full flex justify-end z-10">
                            <div className="w-[32px] h-[32px] rounded-[100%] flex items-center justify-center bg-[rgba(16,20,30,0.5)]">
                                <img className="cursor-pointer" src={e.isBookmarked ? "/icon-bookmark-full.svg" : "/icon-bookmark-empty.svg"} alt="" />
                            </div>
                        </div>
                        <div className="z-10">
                            <div className={`flex ${P1} gap-[24px] text-[#A1A5AE]!`}>
                                {e.year}
                                <ul className="flex gap-[24px]">
                                    <li className="list-disc pl-[4px]">
                                        <div className="flex items-center gap-[6px]">
                                            {e.category === "Movie" ? <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#A1A5AE" opacity=".75" /></svg> : <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#A1A5AE" opacity=".75" /></svg>}
                                            {e.category}
                                        </div>
                                    </li>
                                    <li className="list-disc pl-[4px]">{e.rating}</li>
                                </ul>
                            </div>
                            <h2 className={`${H2}`}>{e.title}</h2>
                        </div>
                    </div>
                })
            }
        </>
    )
}
