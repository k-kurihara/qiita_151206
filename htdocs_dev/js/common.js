var COMMON = window.COMMON || {};

COMMON.Util = function () {
	this.$win = $(window);
};


COMMON.CheckNuber = function ($base) {
	this.$base = $base;
	this.$input = this.$base.find('input');
	this.$trigger = this.$base.find('.jsc-check-number-count-trigger');
	this.$target = this.$base.find('.jsc-check-number-count-target');
};
COMMON.CheckNuber.prototype = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		var _this = this;

		this.$input.click( function () {
			var value = $(this).val()
			alert(value + 'のinputがclickされました')
			_this.lengthConsole($(this));
		});

		this.$trigger.click( function () {
			var count = 0;
			_this.$input.each( function (){
				if($(this).prop('checked')) {
					count += 1;
				}
			});
			_this.outputText(count);
		});

	},
	lengthConsole: function ($target) {
		var index = this.$input.index($target);
		console.log(index + 1 + '番目のinputがclickされました');
	},
	outputText: function (count) {
		if(count === 0 ){
			this.$target.text('checkはされていません')
		}else{
			this.$target.text(count + '個がcheckされています')
		}
	}
}


$(function () {
	$('.jsc-check-number').each(function () {
		new COMMON.CheckNuber($(this)).init();
	});
});