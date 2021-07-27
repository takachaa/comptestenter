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
								<h1 class="p-plan__title">クレジットカード決済・情報登録</h1>
								<form action="">
								<dl>
									<dt class="p-form__registration__stitle">ご利用サイト名</dt>
									<dd class="p-form__registration__item">
										<input type="text" name="your-name" placeholder="ご利用サイト名" value="meetus" class="p-form__registration__item__readonly">
									</dd>
									<dt class="p-form__registration__stitle">カード番号</dt>
									<dd class="p-form__registration__item">
										<input type="text" name="your-name" placeholder="カード番号">
									</dd>
									<dt class="p-form__registration__stitle">カード有効期限</dt>
									<dd class="p-form__registration__item u-fbox u-fbox--bxstart u-fbox--alcenter">										
										<select name="manth" class="p-form__registration__item__short">
											<option value="" selected></option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>
										<span class="p-form__registration__item__text">月／</span>										
										<select name="year" class="p-form__registration__item__short">
											<option value="" selected></option>
											<option value="2021">2021</option>
											<option value="2022">2022</option>
											<option value="2023">2023</option>
											<option value="2024">2024</option>
											<option value="2025">2025</option>
											<option value="2026">2026</option>
											<option value="2027">2027</option>
											<option value="2028">2028</option>
											<option value="2029">2029</option>
											<option value="2030">2030</option>
										</select>
										<span class="p-form__registration__item__text">年</span>
									</dd>
									<dt class="p-form__registration__stitle">請求金額</dt>
									<dd class="p-form__registration__item">
										<input type="text" name="your-name" placeholder="請求金額" value="¥99,999" class="p-form__registration__item__readonly">
									</dd>
									<dt class="p-form__registration__stitle">カード名義</dt>
									<dd class="p-form__registration__item"><input type="text" name="your-name" placeholder="TARO YAMADA"></dd>
									<dt class="p-form__registration__stitle">電話番号</dt>
									<dd class="p-form__registration__item"><input type="text" name="your-name" placeholder="000-0000-0000"></dd>
									<dt class="p-form__registration__stitle">年齢</dt>
									<dd class="p-form__registration__item"><input type="text" name="your-name" placeholder="20" class="p-form__registration__item__short"></dd>
									<dt class="p-form__registration__stitle">メールアドレス</dt>
									<dd class="p-form__registration__item"><input type="email" name="your-email" placeholder="○○@○○○○.○○○"></dd>
									<dt class="p-form__registration__stitle">メールアドレス（確認）</dt>
									<dd class="p-form__registration__item"><input type="email" name="your-email" placeholder="○○@○○○○.○○○"></dd>
								</dl>
								<p class="p-form__registration__msg">下記ご案内と、個人情報の取り扱いに同意いただける場合は「確認画面へ」ボタンを押してください。</p>
								<div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
									<!-- <a href="plan.html" class="c-btn__back"></a> -->
                                    <router-link :to="{ name: 'Plan' }" class="c-btn__back">戻る</router-link>							
									<!-- <a href="card2.html" class="c-btn__next">確認画面へ</a> -->
									<router-link :to="{ name: 'ConfirmCard' }" class="c-btn__back">確認画面へ</router-link>
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
									<h2 class="p-plan__msg__title">ご案内</h2>
									<ul class="p-plan__msg__text">
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
									</ul>
									<h2 class="p-plan__msg__title">個人情報の取り扱いについて</h2>
									<ul class="p-plan__msg__text">
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
										<li class="p-plan__msg__text__item">テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。テキストダミーです。</li>
									</ul>
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
	</main>
	<!--/main-->
</div>
</template>



<script>
// import $ from 'jquery'

export default {
  name: 'InputCard',
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
