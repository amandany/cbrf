const getData = (currency) => {

    const filteredObj = Object.assign({}, Object.values(currency.Valute)
        .filter((x, i) => {
            return(i<2)
        }));

    const result = [
        {
            Position: 'left',
            CharCode: filteredObj[0].CharCode,
            Name: filteredObj[0].Name,
            Value: filteredObj[0].Value,
            Count: 1
        },
        {
            Position: 'right',
            CharCode: filteredObj[1].CharCode,
            Name: filteredObj[1].Name,
            Value: filteredObj[1].Value,
            Count: 1
        }
    ];

    return {
        type: 'GET_DATA',
        payload: currency,
        temp: result
    };
};

const searchData = (text) => {
    return {
        type: 'SEARCH_DATA',
        payload: text
    }
}

const setNewMainValute = (change) => {
    return {
        type: 'CHANGE_MAIN_VALUTE',
        payload: change
    }
}

const changeConverter = (change) => {
    return {
        type: 'CHANGE_CONVERTER',
        payload: change
    }
}

const switchConverter = () => {
    return {
        type: 'SWITCH_CONVERTER'
    }
}

export {
    getData,
    searchData,
    setNewMainValute,
    changeConverter,
    switchConverter
}