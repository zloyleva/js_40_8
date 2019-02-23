
const isPageNumberInQueryValid = (pageData) => pageData.length > 6 && pageData.indexOf("?") >= 0;

const getCurrentPageNumber = (pageData) => {
    if( isPageNumberInQueryValid(pageData) ){
        const parseQuerySearch = pageData.substr(1).split("=");
        console.log();

        if(parseQuerySearch[0] === "page" && Number.isInteger(parseInt(parseQuerySearch[1]))){
            return parseInt(parseQuerySearch[1]);
        }
    }
    return 1;
};

export default (pageData) => {

    console.log(pageData);

    return fetch("https://zloyleva.github.io/js_40_8/src/js/products.json")
        .then((res) => {
            return res.json()
        })
        .then(data => {
            const {products} = data;

            return {
                products: products,
                currentPage: getCurrentPageNumber(pageData)
            }
        })
}