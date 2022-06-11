window.myAfterSendedFunction = function ($form) {
	/* $form - jQuery объект ссылающийся на форму */

	/* номер заявки (Lead ID) */
	var formresult = $form.data('tildaformresult');
	var leadid = formresult.tranid;

	/* все поля заявки */
	var formArr = $form.serializeArray();

	console.log('Params List: ', formArr);

	var tarif_name = $('.t706__product-title').html();
	tarif_name=strip_tags(tarif_name);
	if(typeof tarif_name === 'undefined' || tarif_name === '' ) var tarif_name = 'Новый заказ с тильда';


	var formArr2 = {'name':'positions','value':tarif_name};
	formArr.push(formArr2);

	var tarif_summ = $('.t706__cartwin-prodamount').html();
	tarif_summ = tarif_summ.replace(/\D/g,'');
	tarif_summ=toint(tarif_summ, 10);
	if(typeof tarif_summ === 'undefined' || tarif_summ === '' || tarif_summ == 0) var tarif_summ = 100;

	formArr2 = {'name':'costMoney','value':tarif_summ};
	formArr.push(formArr2);

	formArr2 = {'name':'leftCostMoney','value':tarif_summ};
	formArr.push(formArr2);


	formArr2 = {'name':'payedMoney','value':0};
	formArr.push(formArr2);

	console.log( 'Params11 List: ', formArr );
	/* Отправляем данные POST-запросом */
	$.ajax({
		url: basket_url,
		type: "POST",
		data: formArr,
		//async: false,
		success: function (response) {
			if (response) {
				/* Какие-то действия, если данные дошли успешно */
			}
		}
	});
	/* здесь нужно написать код отправки данных в нужное место, например в свой скрипт или добавление данных в cookie */
}
function toint(x, base) {
	var find = ' ';
	var re = new RegExp(find, 'g');
	x = x.replace(re, '');
	const parsed = parseInt(x, base);
	if (isNaN(parsed)) { return 0; }
	return parsed ;
}
function strip_tags(str) {
	str = str.toString();
	return str.replace(/<\/?[^>]+>/gi, "");
}

$(document).ready(function () {
	$('.t706 form').each(function () {
		$(this).data('formsended-callback', 'window.myAfterSendedFunction');
	});
});

function t706_onSuccessCallback($form){
	window.myAfterSendedFunction($form);
}

