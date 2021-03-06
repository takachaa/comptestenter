// JavaScript Document

$(function() {
/*
	$('a[href^="#"],a[href*="#"]').on('click',function() {

		var mrg = $("#head").outerHeight() + 10;

		var href = $(this).attr("href");
		var hrefs=href.substring(href.indexOf("#")+1,href.length);
		href = "#"+hrefs;

		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - mrg;
		$('body,html').animate({scrollTop:position}, 500, 'swing');
		return false;

   });
*/
	$('.p-form__detailopen').on('click',function(e) {
		e.preventDefault();
		$('.p-form__jobsearch').addClass('is-active');
		$('body').addClass('is-active');
	});
	$('.p-form__jobsearch__close').on('click',function() {
		$('.p-form__jobsearch').removeClass('is-active');
		$('.p-form__jobsearch__title').removeClass('is-active');
		$('body').removeClass('is-active');
		$('.p-form__jobsearch__title + .p-form__jobsearch__item').removeAttr('style');
	});
	
	$('.p-offer__detail__arrow--down').on('click',function() {
		$(this).next('.p-offer__detail__details').slideToggle(300);
		$(this).toggleClass('is-active');
	});
	
	$('.p-offer__detail .c-btn__modalclose').on('click',function() {
		$(this).parents('.p-offer__detail').find('.p-offer__detail__details').slideToggle(300);
		$(this).parents('.p-offer__detail').find('.p-offer__detail__arrow--down').toggleClass('is-active');
	});
	
	$('.p-form__jobsearch__title').on('click',function() {
		$(this).toggleClass('is-active');
		$(this).next('.p-form__jobsearch__item').slideToggle(300);
	});

	$('.p-form__registration__item__icon').on('click',function() {
		$(this).toggleClass('is-active');
		var _type = $('.p-form__registration__item__password').attr('type');
		if(_type=='password'){
			$('.p-form__registration__item__password').attr('type','text');
		}else{
			$('.p-form__registration__item__password').attr('type','password');
		}
	});
	
	/**talk入力部分の文字量に合わせた入力卵サイズ調整**/
	$('.p-form__search__input--talk').attr('rows', 1).on('input', function() {
		$(this).height(0).innerHeight(this.scrollHeight);
		timeline_height(0);
	});
	/**talk送信**/
	$('.p-form__search__submit--talk').on('click',function(){
		$(this).val('');
		timeline_height(1);			  
	});
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		
		timeline_height(1);
		
	}
	
	
	/**メニューアクションサンプル**/
	$('.p-footer__menu__icon').on('click',function(e){
		e.preventDefault();
		$('.p-footer__menu__icon').removeClass('router-link-active');
		$(this).addClass('router-link-active');
	});
	
	
	/**スライダ**/
	if($('.swiper-wrapper').length){
		var swiper = new Swiper('.slide-container', {
		slidesPerView: 1,
		loop: true,
		//effect: 'fade',
		spaceBetween: 20,
		speed: 1000,
		/*
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		*/
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		});
	}
	
	/**popupサンプル**/
	$('.is-match').on('click', function(){
		Swal.fire({
			title: '<div class="matching"></div>',
			text: 'おめでとう！',
			//showConfirmButton: false,
			confirmButtonText:'とじる',
		})
	});
	
});
	
	
$(window).on('load',function(){
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		
		timeline_height(1);
		
	}

});

$(window).on('resize',function () {
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		
		timeline_height(1);
		
	}
});

$(window).on('scroll',function () {
	
});

$(window).on('orientationchange', function(){
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		
		timeline_height(1);
		
	}
});

function timeline_height(flg){

	var partsh = $('.p-header').outerHeight() + $('.p-talk__user').outerHeight() + $('.p-form__search').outerHeight();// + $('.p-footer').outerHeight();
	var bh = $('.p-talk--timeline').outerHeight() - $('.p-talk--timeline').innerHeight();//タイムライン のマージン等
	var ch = 50;//外枠のマージン等
	var wh = $(window).innerHeight() - partsh - bh - ch;

	$('.p-talk--timeline').css({'min-height':wh+'px','max-height':wh+'px'});
	if(flg==1){
		$('.p-talk--timeline').scrollTop($(window).outerHeight());
	}
}