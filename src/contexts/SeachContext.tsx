import { createContext, ReactNode, useEffect, useState } from "react";

export type SearchContextDataProps = {
  handleSeachAll: (searhAll: string) => Promise<void>;
  stateSearchAll: string;
  handlePage: (page: number) => Promise<void>;
  page: number;
}


type SearchContextProviderProps = {
  children: ReactNode;
}

export const SearchContext = createContext<SearchContextDataProps>({} as SearchContextDataProps);

export function SearchContextProvider({ children }: SearchContextProviderProps)  {
    const [stateSearchAll, setStateSearchAll] = useState(""); 
    const [page, setPage] = useState(1); 

    const handleSeachAll = async (searhAll : string) => {
      setStateSearchAll(searhAll)
    }

    const handlePage = async (pag: number) => {
      setPage(pag);
    }


     return (
        <SearchContext.Provider value={{ 
            handleSeachAll, 
            stateSearchAll,
            page,
            handlePage,
        }}>
        {children}
        </SearchContext.Provider>
  )

}