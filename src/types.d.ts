type TFunctionsArgs = Partial<{
    credentials: {
        password: string,
        emailAddress: string
    }
}>


type TContext = {
    setStartSearch: React.Dispatch<React.SetStateAction<boolean>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
    startSearch: boolean
    setIsTablet: React.Dispatch<React.SetStateAction<boolean>>
    isTablet: boolean
}

type TFilm = {
    title: string
    thumbnail: {
        regular: {
            small: string
            medium: string
            large: string
        }
        trending?: {
            small: string
            large: string
        }
    }
    year: number
    category: string
    rating: string
    isBookmarked: boolean
    isTrending: boolean
}
