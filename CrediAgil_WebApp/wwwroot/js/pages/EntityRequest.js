
$(document).ready(function () {

    $('#btnRequest').click(function () {

        $('.btn-loading').show();
        $('#btnRequest').hide();

        let id = $('.identification-number').val();

        $('.btn-loading').show();
        $('#btnRequest').hide();

        var jqxhr = $.ajax({
            url: "ConsultarCliente",
            type: "POST",
            data: {
                "identificationNumber": id
            }
        });

        jqxhr.done(function (data) {
            if (data.Success)
                location.href = "../Consult/PerfilCliente?id=" + id;
            else
                toastr.warning(data.Message);
        });
        jqxhr.fail(function (data, textStatus) { });
        jqxhr.always(function (data, textStatus, jqXhr) {
            $('.btn-loading').hide();
            $('#btnRequest').show();
        });
    })

});