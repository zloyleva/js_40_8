
export default () => {
    $('#modalCart')
        .on('hidden.bs.modal', function (e) {
            console.log("hidden.bs.modal");

            $('#modal-content-section')
                .html("");

        });
}