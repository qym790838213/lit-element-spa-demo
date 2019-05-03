export const queryParams = ()=>{
    let obj = {};
    if (window.location.search.split('?')[1]){
        let paramsStrArray = window.location.search.split('?')[1].split("&");
        for (let i in paramsStrArray) {
            let item = paramsStrArray[i]
            obj[item.split("=")[0]] = item.split("=")[1];
        }
    }
    return obj;
}