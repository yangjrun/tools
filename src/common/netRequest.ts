const { net } = require('electron').remote
const objectUtil = require('@/utils/objectUtil')
const httpUtil = require('@/utils/httpUtil')

interface ClientRequestConstructorOptions {
    // 默认请求地址
    baseURL: string
}

interface ClientRequestMethods<T> {
    get(opetion: ClientGetRequestOptions): Promise<T>;
    post(): Promise<T>;
    delete(): Promise<T>;
    put(): Promise<T>;
}

interface ClientGetRequestOptions {
    url: string,
    params?: Object | string
}

class netRequest<T> implements ClientRequestConstructorOptions, ClientRequestMethods<T> {
    // 请求地址
    baseURL: string;
    constructor(options: ClientRequestConstructorOptions) {
        this.baseURL = options.baseURL
    };
    get(opetions: ClientGetRequestOptions) {
        return new Promise<T>((resolve) => {
            let _requestUrl = this.baseURL + opetions.url
            if (objectUtil.isType('Object')) {
                _requestUrl = _requestUrl + httpUtil.objectToGetParam(opetions.params)
            } else if (objectUtil.isType('String')) {
                _requestUrl = _requestUrl + opetions.params
            }
            const _request = net.request(_requestUrl);
            _request.on('response', (response) => {
                response.on("data", (chunk) => {
                    console.log("接收到数据：", chunk.toString());
                    resolve(JSON.parse(chunk.toString()))
                })
            })
            _request.end()
        })
    }
    post() {
        return new Promise<T>(() => { })
    }
    put() {
        return new Promise<T>(() => { })
    }
    delete() {
        return new Promise<T>(() => { })
    }
}

const douyuHttp = new netRequest({
    baseURL: 'https://www.douyu.com'
});

export {
    douyuHttp
}


// https://www.douyu.com/lapi/live/getH5Play/71415?
// v=220120221206&did=d39022e1d5aace2879d79ee100041601&tt=1670293991
// &sign=7b6fa704d2339c41b7d943661c44a51a
// &cdn=&rate=-1&ver=Douyu_222082905&iar=1&ive=0&hevc=0&fa=0
// function netRequest(opetion: ClientRequestConstructorOptions) {
//     const request = net.request(opetion.url);
//     request.on('response', (response) => {
//         console.log(`**statusCode:${response.statusCode}`);
//         console.log(`**header:${JSON.stringify(response.headers)}`);
//         response.on("data", (chunk) => {
//             console.log("接收到数据：", chunk.toString());
//         })
//         response.on('end', () => {
//             console.log("数据接收完成");
//         })
//     });
//     request.end();
// }