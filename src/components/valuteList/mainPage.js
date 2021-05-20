import React from 'react';
import SearchLine from "./searchLine";
import SearchResult from "./searchResult";
import './find.css';

const MainPage = () => {
    return(
        <div className="findBox">
            <SearchLine/>
            <SearchResult />
        </div>
    )
}

export default MainPage;