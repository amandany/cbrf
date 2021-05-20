import React from 'react';
import './searchResult.css';
import {connect} from "react-redux";
import {getData} from "../../redux/action";
import Card from "./card";
import SortData from "./sortData";
import CallData from "../service/callData";

const SearchResult = ({getData, currencyData, loading, search, changeMainValute}) => {

    if (loading) {
        return (
                <CallData getData={getData} />
            )
    }

    if(search.length > 0) {
        return (
            <SortData />
        )
    }
    return (
        <ul className="listValute">
            {
                Object.values(currencyData.Valute).map((item) => {
                    return (
                        <Card key={item.ID} item={item} changeMainValute={changeMainValute}/>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({currencyData, loading, search, changeMainValute}) => {
    return {currencyData, loading, search, changeMainValute}
}

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
