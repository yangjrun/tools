

/**
 * 对象转get参数
 * @param param 参数对象
 */
const objectToGetParam = (param: any) => {
    return JSON.stringify(param).replace(/:/g, '=').replace(/,/g, '&').replace(/{/g, '?').replace(/}/g, '').replace(/"/g, '');
}

export {
    objectToGetParam
}
