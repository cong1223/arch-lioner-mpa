// import PageRangeKeys from '../constants/PageRangeConstants';
//
// function dealUrl(url, params: Record<string, any>) {
//   let [path, queryParams] = parseUrl(url);
//   if (queryParams && Object.keys(queryParams).length > 0 && params && Object.keys(params).length > 0) {
//     console.warn('url包含queryString的同时又单独传了请求参数，优先使用queryString', queryParams, params)
//     params = queryParams
//   }
//   params._t = Date.now()
//   let queryArr = []
//   for (let i in params) {
//     if (params[i] instanceof Object) {
//       params[i] = JSON.stringify(params[i]);
//     }
//     queryArr.push(i + '=' + params[i]);
//   }
//   url = path + '?' + queryArr.join('&')
//   return url
// }
//
// function parseUrl(url: string) {
//   let [search, hash] = url.split('#');
//   let [path, paramsStr] = search.split('?');
//   let query: Record<string, any> = {};
//   if (paramsStr) {
//     let queries = paramsStr.split('&');
//     queries.forEach((item) => {
//       let [key, value] = item.split('=');
//       value = value ? value.replace('#/', '') : "";
//       query[key] = decodeURIComponent(value);
//     });
//   }
//   return [path, query];
// }
//
// export function goto(path: PageRangeKeys, params: any, ) {
//   if (path.indexOf('TabIndex') !== -1) {
//     Taro.switchTab({
//       url: path
//     })
//   }
// }
