<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="plan">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<div class="p-plan">
								<h1 class="p-plan__title">プラン選択</h1>
								<p class="p-plan__text">プランを選択してください。<br>ご利用にはクレジット決済が必要となります。</p>
								<div class="p-plan__slider slide-container">
									<div class="swiper-wrapper">
										<div class="swiper-slide slide1 u-fbox u-fbox--alcenter u-fbox--bxcenter"><span>12ヶ月プラン</span></div>
										<div class="swiper-slide slide2 u-fbox u-fbox--alcenter u-fbox--bxcenter"><span>6ヶ月プラン</span></div>
										<div class="swiper-slide slide3 u-fbox u-fbox--alcenter u-fbox--bxcenter"><span>3ヶ月プラン</span></div>
									</div>
									<div class="swiper-pagination"></div>
									<!--div class="swiper-button-next swnext"></div>
									<div class="swiper-button-prev swprev"></div-->
								</div>
								<div class="p-plan__plan">
									<router-link :to="{ name: 'InputCard' }" class="p-plan__plan__item u-fbox u-fbox--alcenter">
										<span class="p-plan__plan__item__title"><span  class="p-plan__plan__item__title__month">12</span>ヶ月プラン</span>
										<span class="p-plan__plan__item__price">¥99,999/年<span class="p-plan__plan__item__price__month">¥999/月</span></span>
									</router-link>
									<router-link :to="{ name: 'InputCard' }" class="p-plan__plan__item u-fbox u-fbox--alcenter">
										<span class="p-plan__plan__item__title"><span  class="p-plan__plan__item__title__month">6</span>ヶ月プラン<span class="p-plan__plan__item__title__msg">¥999円お得</span></span>
										<span class="p-plan__plan__item__price">¥99,999/年<span class="p-plan__plan__item__price__month">¥999/月</span></span>
									</router-link>
									<router-link :to="{ name: 'InputCard' }" class="p-plan__plan__item u-fbox u-fbox--alcenter">
										<span class="p-plan__plan__item__title"><span  class="p-plan__plan__item__title__month">3</span>ヶ月プラン</span>
										<span class="p-plan__plan__item__price">¥99,999/年<span class="p-plan__plan__item__price__month">¥999/月</span></span>
									</router-link>
								</div>
								<div class="p-plan__msg">
									<h2 class="p-plan__msg__title">有料会員の注意事項</h2>
									<ul class="p-plan__msg__text">
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
									</ul>
									<h2 class="p-plan__msg__title">お支払いについて</h2>
									<ul class="p-plan__msg__text">
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
									</ul>
									<div class="p-plan__msg__msgbox">
									<h2 class="p-plan__msg__msgbox__title">お支払いについて</h2>
										<p class="p-plan__msg__msgbox__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</p>
										<p class="p-plan__msg__msgbox__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</p>
										<p class="p-plan__msg__msgbox__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</p>
									</div>
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
	</main>
	<!--/main-->
</div>
</template>



<script>
// import $ from 'jquery'

export default {
  name: 'Plan',
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
