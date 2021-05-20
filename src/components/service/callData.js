import React from "react";
import {useEffect} from "react";

const CallData = ({getData}) => {
    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(res => {
                getData(res);
            })
            .catch((e) => {
                console.error(e)
            });

    }, [getData]);
    return(
        <div><h1>Загрузка данных с сервера...</h1></div>
    )
}


export default CallData;