<template>
<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="step">
					<!--section-->
					<div class="l-main__section">
            
						<!--contents-->
						<!-- <div class="l-main__contents l-main__contents--full">
							<ul class="p-form__step p-form__step--step1 u-fbox">
								<li class="p-form__step__item">写真</li>
								<li class="p-form__step__item">募集概要</li>
								<li class="p-form__step__item">募集詳細</li>
								<li class="p-form__step__item">内容確認</li>
							</ul>
						</div> -->
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="regForm">
          
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
              <router-link :to="{ name: 'JobOfferDetail' }" class="p-offertitle p-offertitle--good">写真編集</router-link>
							<div class="p-form__registration">
								<h1 class="p-form__registration__title">募集する職業のお写真を編集してください。</h1>
								<div class="u-margin--bottom10"><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></div>
								<ul class="p-profile__photo u-fbox u-fbox--alstart u-fbox--bxstart">
									<li class="p-profile__photo__item"><a href="" class="p-profile__photo__item__add"></a></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
								</ul>
								<form action="">
								<div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
									<a class="c-btn__next" @click="next">登録</a>
								</div>
								
							</form>
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

</template>

<script>

export default {
  name: 'EditJobOffer1',
  data () {
    return {
       
		}
  },
  props: {
    
  },
  mounted: function() {
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods : {
    back(){
      this.$router.push('/jobofferdetail')
    },
    next(){     
      this.$router.push('/jobofferdetail')   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.disabled{
    pointer-events: none;
}
</style>
