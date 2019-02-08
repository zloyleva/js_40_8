import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const a = getHtmlObject("a");
const ul = getHtmlObject("ul");
const li = getHtmlObject("li");

const menuLinks = [
    {name: "Home", href: "/"},
    {name: "Catalog", href: "#"},
    {name: "Cart", href: "#"},
];

const navItems = menuLinks.map(el => li.createHtmlElement(
	"nav-item",
	null,
	[
		a.createHtmlElement(
			"nav-link",
			[{name:"href", value:el.href}],
			el.name
		)
	]
));

const navbarNav = ul.createHtmlElement("navbar-nav",null,navItems);
const navbarCollapse = div.createHtmlElement(
    "collapse navbar-collapse justify-content-end",
    [{name:"id", value:"navbarSupportedContent"}],
    [navbarNav]
);

export default navbarCollapse;