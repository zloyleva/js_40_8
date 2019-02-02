import getHtmlObject from '../../lib/FactoryHtml';


export default function main() {
    const div = getHtmlObject("div");

    return div.createHtmlElement(
        "container"
    );
}
