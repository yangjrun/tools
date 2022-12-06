const isType = function (type: string) {
    return function (data: any) {
        return Object.prototype.toString.call(data) === '[object ' + type + ']';
    }
}

export {
    isType
}