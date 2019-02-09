// <div class="modal" tabindex="-1" role="dialog">
//     <div class="modal-dialog" role="document">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title">Modal title</h5>
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div class="modal-body">
//                 <p>Modal body text goes here.</p>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//         </div>
//     </div>
// </div>

import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const button = getHtmlObject("button");
const p = getHtmlObject("p");
const h5 = getHtmlObject("h5");
const span = getHtmlObject("span");

const spanClose = span.createHtmlElement(
    null,
    [{name:"aria-hidden", value:"true"}],
    "&times;"
);

const buttonCloseX = button.createHtmlElement(
    "close",
    [
            {name:"type", value:"button"},
            {name:"data-dismiss", value:"modal"},
            {name:"aria-label", value:"Close"},
        ],
    [spanClose]
);

const modalTitle = h5.createHtmlElement(
    "modal-title",
    null,
    "Modal title"
);

const modalHeader = div.createHtmlElement(
    "modal-header",
    null,
    [modalTitle,buttonCloseX]
);


const modalContentSection = div.createHtmlElement(
    "modal-content-section",
    null,
    ""
);

const modalBody = div.createHtmlElement(
    "modal-body",
    null,
    [modalContentSection]
);

//3 buttons

const buttonCreateOrder = button.createHtmlElement(
    "btn btn-primary",
    [
        {name:"type", value:"button"},
    ],
    "Create order"
);

const buttonClearCart = button.createHtmlElement(
    "btn btn-danger",
    [
        {name:"type", value:"button"},
    ],
    "Clear Cart"
);

const buttonClose = button.createHtmlElement(
    "btn btn-secondary",
    [
        {name:"type", value:"button"},
        {name:"data-dismiss", value:"modal"},
    ],
    "Close"
);
const modalFooter = div.createHtmlElement(
    "modal-footer",
    null,
    [buttonCreateOrder, buttonClearCart, buttonClose]
);

const modalContent = div.createHtmlElement(
    "modal-content",
    null,
    [modalHeader,modalBody,modalFooter]
);

const modalDialog = div.createHtmlElement(
    "modal-dialog",
    [{name:"role", value:"document"}],
    [modalContent]
);

const modal = div.createHtmlElement(
    "modal",
    [
            {name:"id", value:"modalCart"},
            {name:"tabindex", value:"-1"},
            {name:"role", value:"dialog"},
        ],
    [modalDialog]
);

export default modal;