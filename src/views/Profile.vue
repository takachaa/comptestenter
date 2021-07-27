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
								<router-link :to="{ name: 'Menu' }" class="p-offertitle p-offertitle--good">プロフィール</router-link>
							</div>
							<div class="p-menu u-margin--bottom30">
								<div class="p-menu__user u-fbox u-fbox--alcenter">
									<div class="p-menu__user__img"><img src="../img/user.jpg" alt=""></div>
									<p class="p-menu__user__name">担当者太郎</p>
								</div>
							</div>
							
							<div class="p-profile">
								<h1 class="p-profile__title">マイフォト</h1>
								<ul class="p-profile__photo u-fbox u-fbox--alstart u-fbox--bxstart">
									<li class="p-profile__photo__item"><a href="" class="p-profile__photo__item__add"></a></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
								</ul>
								<h1 class="p-profile__title">
									<a href="" class="p-profile__edit">自己紹介</a>
								</h1>
								<div class="p-profile__msg">
									<p>「今日は二度とやってこない」という言葉を胸に、日々を全力で生きています。一生懸命なあなたとお会いできるのを楽しみにしています</p>
								</div>
								<h1 class="p-profile__title">
									<a href="" class="p-profile__edit">こんな性格です！</a>
								</h1>
								<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
									<li class="p-offer__detail__details__list__item">穏やか</li>
									<li class="p-offer__detail__details__list__item">誰とでも打ち解ける</li>
									<li class="p-offer__detail__details__list__item">人の話を聞く</li>
								</ul>
								<h1 class="p-profile__title">
									<a href="" class="p-profile__edit">休日の過ごし方♪</a>
								</h1>
								<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
									<li class="p-offer__detail__details__list__item">NETFLIX</li>
									<li class="p-offer__detail__details__list__item">ドライブ</li>
									<li class="p-offer__detail__details__list__item">音楽鑑賞</li>
									<li class="p-offer__detail__details__list__item">お笑い番組</li>
								</ul>
								
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

export default {
  name: 'Profile',
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
