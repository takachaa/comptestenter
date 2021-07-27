<template>
<div>

	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="searchform">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents u-align--center">
							<!-- <a href="recruit_registration1.html" class="c-btn__add">募集案件を作成</a> -->
							<router-link :to="{ name: 'CreateJobOffer' }" class="c-btn__add">募集案件を作成</router-link>
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<!--job-->
							<div class="p-offer">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<!-- <span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span> -->
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail u-align--center">
									<div class="u-fbox u-fbox--alcenter u-fbox--bxcenter u-margin--bottom10">
										<p class="p-offer__detail__details__item u-margin--bottom0 u-margin--right15">ステータス：公開中</p>
										<label class="c-btn__toggle">
											<input type="checkbox" class="c-btn__toggle__input" checked>
											<span class="c-btn__toggle__item"></span>
										</label>
									</div>
									<!-- <a href="recruit_detail.html" class="c-btn__detail">さらに詳細を見る</a> -->
									<router-link :to="{ name: 'JobOfferDetail' }" class="c-btn__detail">さらに詳細を見る</router-link>
								</div>
							</div>
							<!--/job-->
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<!--job-->
							<div class="p-offer">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<!-- <span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span> -->
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail u-align--center">
									<div class="u-fbox u-fbox--alcenter u-fbox--bxcenter u-margin--bottom10">
										<p class="p-offer__detail__details__item u-margin--bottom0 u-margin--right15">ステータス：非公開</p>
										<label class="c-btn__toggle">
											<input type="checkbox" class="c-btn__toggle__input">
											<span class="c-btn__toggle__item"></span>
										</label>
									</div>
									<!-- <a href="recruit_detail.html" class="c-btn__detail">さらに詳細を見る</a> -->
									<router-link :to="{ name: 'JobOfferDetail' }" class="c-btn__detail">さらに詳細を見る</router-link>
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

	<!--footer-->
	
	<!--/footer-->
</div>
</template>

<script>

export default {
  name: 'ManageJobOffer',
  data(){
	return {
		jobId : this.$route.params.value
		// isSearchDetailActive : false,
		// isCompanyDetailActive : false
	}
  },
  mounted: function() {
	
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
	
	
  },
  methods : {
    
  }
}
</script>

<style>
</style>