<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents u-padding--top60">
							<div class="u-fixed u-fixed--title">
								<!-- <a href="top_login.html" class="p-offertitle p-offertitle--good">足あと</a> -->
								<router-link :to="{ name: 'Menu' }" class="p-offertitle p-offertitle--good">足あと</router-link>
							</div>
							
							<!--job-->
							<div class="p-offer">
								<div class="p-offer__thumbnail">
								<img src="../img/img_member01.png" alt="" class="p-offer__thumbnail__img">
								<!-- <span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
								</span> -->
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
								<span class="p-offer__cat__icon">未経験</span>
								<span class="p-offer__cat__icon">若手</span>
								<span class="p-offer__cat__icon">中堅</span>
								<span class="p-offer__cat__icon">熟練</span>
								</div>
								<div class="p-offer__title p-offer__title--member u-fbox u-fbox--alcenter">
								<h1 class="p-offer__title__title">H・O 32歳（女性）</h1>
								<span class="p-offer__title__place">福岡県福岡市</span>
								</div>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
												<div class="p-offer__detail">
								<div class="p-offer__detail__company p-offer__detail__company--open">
									<p class="p-offer__detail__company__text u-margin--bottom10">初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです</p>
									<p class="p-offer__detail__company__text">職種：通信業<br>雇用形態：正社員</p>
								</div>
								<div class="p-offer__detail__details">
									<p class="p-offer__detail__details__item">初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです</p>
								</div>
								<br>
								<div class="p-offer__btn u-fbox u-fbox--alcenter">
									<a class="c-btn__good">いいね</a>
									<a class="c-btn__star">お気に入り</a>
								</div>
								</div>
							</div>
							<!--/job-->
							
							<!--job-->
							<div class="p-offer">
								<div class="p-offer__thumbnail">
								<img src="../img/img_member01.png" alt="" class="p-offer__thumbnail__img">
								<!-- <span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
								</span> -->
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
								<span class="p-offer__cat__icon">未経験</span>
								<span class="p-offer__cat__icon">若手</span>
								<span class="p-offer__cat__icon">中堅</span>
								<span class="p-offer__cat__icon">熟練</span>
								</div>
								<div class="p-offer__title p-offer__title--member u-fbox u-fbox--alcenter">
								<h1 class="p-offer__title__title">H・O 32歳（女性）</h1>
								<span class="p-offer__title__place">福岡県福岡市</span>
								</div>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
												<div class="p-offer__detail">
								<div class="p-offer__detail__company p-offer__detail__company--open">
									<p class="p-offer__detail__company__text u-margin--bottom10">初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです</p>
									<p class="p-offer__detail__company__text">職種：通信業<br>雇用形態：正社員</p>
								</div>
								<div class="p-offer__detail__details">
									<p class="p-offer__detail__details__item">初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです</p>
								</div>
								<br>
								<div class="p-offer__btn u-fbox u-fbox--alcenter">
									<a class="c-btn__good">いいね</a>
									<a class="c-btn__star">お気に入り</a>
								</div>
								</div>
							</div>
							<!--/job-->
							
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

export default {
  name: 'Footprints',
  data(){
	return {
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
  },
  methods:{
  }
}
</script>
