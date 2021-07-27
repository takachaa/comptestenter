<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="msg">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<div class="p-plan">
								<h1 class="p-plan__title">有料会員登録</h1>
								<div class="p-plan__msg">
									<h2 class="p-plan__msg__title">有料会員登録が完了しました</h2>
									<p class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</p>
									<div class="p-plan__msg__box">
										<h2 class="p-plan__msg__title">決済内容</h2>
										<p class="p-plan__msg__text__item">有料会員12ヶ月プラン</p>
										<h2 class="p-plan__msg__title">金額</h2>
										<p class="p-plan__msg__text__item">99,999円（1ヶ月あたり999円）</p>
										<h2 class="p-plan__msg__title">期限</h2>
										<p class="p-plan__msg__text__item">12ヶ月ごとに自動更新</p>
										<h2 class="p-plan__msg__title">次回更新日</h2>
										<p class="p-plan__msg__text__item">2022年7月15日</p>
									</div>
									<div class="p-form__registration__btn p-form__registration__btn--full">
										<router-link :to="{ name: 'Top2' }" class="c-btn__next">求職者を探す</router-link>
										<!-- <a href="searchmember.html" class="c-btn__next">求職者を探す</a> -->
										<!-- <a href="recruit_list.html" class="c-btn__next">募集を作成する</a> -->
										<router-link :to="{ name: 'ManageJobOffer' }" class="c-btn__next">募集を作成する</router-link>
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
  name: 'CompleteCard',
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
