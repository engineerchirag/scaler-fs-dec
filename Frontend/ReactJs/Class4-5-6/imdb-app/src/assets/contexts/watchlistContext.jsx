import { createContext, useState } from "react";

export const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState({});
    return (
        <WatchListContext.Provider value={{watchlist, setWatchlist}}>
            {children}
        </WatchListContext.Provider>
    )
}

export default WatchListProvider;