import getHtmlObject from '../../lib/FactoryHtml';
import element from '../Card';

export default function main() {
    const div = getHtmlObject("div");



    const row = div.createHtmlElement(
        "row",
        null,
        [element]
    );

    return div.createHtmlElement(
        "container",
        null,
        [row]
    );
}
