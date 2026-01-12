'use strict';

$('#submit').click(function () {
    let inputProduct = $('#input_product');
    let inputName = $('#input_name');
    let inputPhone = $('#input_phone');
    let hasError = false;
    let loader = $('.loader');
    let orderTitle = $('.order-title');
    let orderText = $('.order-text');
    let orderForm = $('.order-form');
    let orderSuccess = $('.order-success');

    $('.order-input').css('border-color', '#821328FF');

    $('.error-input').hide();

    if (!inputProduct.val()) {
        inputProduct.next().show();
        hasError = true;
        inputProduct.css('border-color', 'red');
    }
    if (!inputName.val()) {
        inputName.next().show();
        hasError = true;
        inputName.css('border-color', 'red');
    }
    if (!inputPhone.val()) {
        inputPhone.next().show();
        hasError = true;
        inputPhone.css('border-color', 'red');
    }
    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: 'POST',
            url: "https://testologia.ru/checkout",
            data: {
                product: inputProduct.val(),
                name: inputName.val(),
                phone: inputPhone.val(),
                phoneNumber: inputPhone.val()
            }
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    orderTitle.hide();
                    orderText.hide();
                    orderForm.hide();
                    orderSuccess.css('display', 'flex');
                } else {
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                }
            });
    }
})
