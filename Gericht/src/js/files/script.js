// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

/* Календарь */
// https://github.com/qodesmith/datepicker#installation
import datepicker from "js-datepicker";

window.addEventListener("load", function (e) {
	const bg = document.querySelectorAll('[data-bg]');
	if (bg.length) {
		bg.forEach(bgItem => {
			bgItem.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`);
		});
	}

	const picker = datepicker('[data-calendar]', {
		//customDays: ['天', '一', '二', '三', '四', '五', '六']
	});
});