const InitialState = {
    currencyData: [],
    search: "",
    loading: true,
    changeMainValute: false,
    converter: []
};

const UpdateConverter = (converter= [], payload) => {
    if (payload.position === 'left') {
        return [
            {
                Position: 'left',
                CharCode: payload.item.CharCode,
                Name: payload.item.Name,
                Value: payload.item.Value,
            },
            converter[1]
        ]
    }

    if (payload.position === 'right') {
        return [
            converter[0],
            {
                Position: 'right',
                CharCode: payload.item.CharCode,
                Name: payload.item.Name,
                Value: payload.item.Value,
            }
        ]
    }

}

const SwitchConvert = (converter) => {
    const left = converter[0];
    const right = converter[1];
    left.Position = 'right';
    right.Position = 'left';
    return [
        right,
        left
    ]
}


const reducer = (state = InitialState, action) => {
    switch (action.type) {

        case 'GET_DATA':
            return {
                ...state,
                currencyData: action.payload,
                loading: false,
                converter: action.temp
            };

        case 'SEARCH_DATA':
            return {
                ...state,
                search: action.payload,
            };

        case 'CHANGE_MAIN_VALUTE':
            return {
                ...state,
                changeMainValute: action.payload
            }

        case 'CHANGE_CONVERTER':
            return {
                ...state,
                converter: UpdateConverter(state.converter, action.payload)
            }

        case 'SWITCH_CONVERTER':
            return {
                ...state,
                converter: SwitchConvert(state.converter)
            }

        default:
            return state
    }
};

export default reducer;