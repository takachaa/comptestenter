<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="regForm">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<div class="p-form__registration">
								<h1 class="p-form__registration__title">クレジットカード決済・情報登録</h1>
								<form action="">
								<dl>
									<dt class="p-form__registration__stitle">ご利用サイト名</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">meetus</dd>
									<dt class="p-form__registration__stitle">カード番号</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">0000-0000-0000-0000</dd>
									<dt class="p-form__registration__stitle">カード有効期限</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">00年00月</dd>
									<dt class="p-form__registration__stitle">請求金額</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">¥99,999</dd>
									<dt class="p-form__registration__stitle">カード名義</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">TARO YAMADA</dd>
									<dt class="p-form__registration__stitle">電話番号</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">000-0000-0000</dd>
									<dt class="p-form__registration__stitle">年齢</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">20</dd>
									<dt class="p-form__registration__stitle">メールアドレス</dt>
									<dd class="p-form__registration__item p-form__registration__item--confirm">○○@○○○○.○○○</dd>
								</dl>
								<p class="p-form__registration__msg">上記内容でよろしければ「申し込む」ボタンを押してください。<br>※「申し込む」ボタンを1度だけ押してください。10秒前後でページが更新されます。</p>
								<div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
									<router-link :to="{ name: 'InputCard' }" class="c-btn__back">戻る</router-link>
									<router-link :to="{ name: 'CompleteCard' }" class="c-btn__next">申し込む</router-link>
								</div>							
							</form>
							</div>
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="msg">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<div class="p-plan">
								<div class="p-plan__msg">
									<div class="p-plan__msg__msgbox">
										<p class="p-plan__msg__msgbox__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</p>									
									</div>
									<h2 class="p-plan__msg__title">お問合せ</h2>
									<p class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。</p>
									<p class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。</p>
									<p class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。</p>
								</div>
							</div>
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				
				
				

			</article>
			<!--/article-->
		</div>	
	</main>	<!--/main-->
</div>
</template>



<script>
// import $ from 'jquery'

export default {
  name: 'ConfirmCard',
  data(){
	return {
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false})

    // /**スライダ**/
	// if($('.swiper-wrapper').length){
	// 	var swiper = new Swiper('.slide-container', {
	// 	slidesPerView: 1,
	// 	loop: true,
	// 	//effect: 'fade',
	// 	spaceBetween: 20,
	// 	speed: 1000,
	// 	/*
	// 	autoplay: {
	// 		delay: 4000,
	// 		disableOnInteraction: false,
	// 	},
	// 	*/
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// 	});
	// }
  },
  methods:{
  }
}
</script>
