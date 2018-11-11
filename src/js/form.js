var validation = {
	phone: /^\+\d\(\d{3}\)\d{3}\-\d{4}$/,
	email: /^\w+@mail\.ru$|^(\w+\.\w+)@mail\.ru$|^(\w+\-\w+)@mail\.ru$/,
};

window.onload = function () {

	document.getElementById('submit').addEventListener('click', function(event) {
		$('.dialog').remove();
		Object.keys(validation).forEach(function(rule) {
			var fields = document.querySelectorAll('[data-validation-rule="' + rule + '"]');
			fields.forEach(function(field) {
				if (validation[rule].test(field.value)){
					field.classList.remove('invalid');
				} else {
					field.classList.add('invalid');
				}
			});
		});

		$('body').append('<div class="dialog" style="display: none">"' + $('.invalid').parent().text().split('(^|\$') + '"</div>');

 		if($('.invalid').length != 0){
			$('.dialog').dialog({
				title: 'Ошибка валидации'
			});
		};

		$('.invalid').effect( 'shake',{distance: 12, times: 1.3} ); // Эффект для невадлидного поля

		event.preventDefault();
	});

	$('#dateBirth').datepicker({
		changeYear:true,
		yearRange: '1950:2018',
		dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
		firstDay:1,
		monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
		dateFormat:"dd/mm/yy"
	});

	var $city = document.getElementById('city');
	/*$('#submit').on('click',function () {*/
		 $.ajax({
			 url: 'http://localhost:3000/list',
			 type: 'GET',
			 success: function(citieslist) {
				 var $select = $('<select />');  // создаю переменную для тега <select />

				 Object.keys(citieslist).forEach(function(rule){
				 	 $city.value = citieslist[rule].city + ' ';
					 /*console.log(citieslist[rule].city);*/


					 var $option = $('<option />',{ // создаю переменную для тега <select /> тег $option через перебор forEach
						 value: citieslist[rule].city,
						 text: citieslist[rule].city
					 });
					  $select.append($option);
				 });
				$('#city').append($select);
			 }
		 });
/*	})*/



};

