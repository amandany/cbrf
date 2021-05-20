const Recalculate = (item, position, callback) => {
        const obj = {
            item: item,
            position: position
        };
        callback(obj)
}

export default Recalculate;