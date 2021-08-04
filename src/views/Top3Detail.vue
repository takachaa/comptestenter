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
						<div class="l-main__contents">	

                            <!-- <div class="u-fixed u-fixed--title">
								<router-link :to="{ name: 'Top2', params: { value: jobId }}"  class="p-offertitle p-offertitle--good">プロフィール詳細</router-link >
							</div> -->
							
							<a @click="$router.go(-1)" class="p-offertitle">プロフィール詳細 {{ $route.params.jobOfferId }}</a>
                            <!-- <router-link :to="{ name: 'Top2', params: { jobOfferId: $route.params.jobOfferId }}" class="p-offertitle">プロフィール詳細 {{ $route.params.jobOfferId }}</router-link >		 -->
							<!-- <a class="p-offertitle" @click="backTop()">こんな職場です！{{ jobId }} </a> -->
							
							<!--job-->
							<div class="p-offer p-offer--detail">
								<div class="p-offer__thumbnail">
									<!-- <swiper :options="swiperOption" ref="mySwiper1"> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><video width="384" height="141" controls src="https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4"></video></swiper-slide>
										<div class="swiper-pagination"  slot="pagination"></div>
										<div class="swiper-button-prev" slot="button-prev"></div>
										<div class="swiper-button-next" slot="button-next"></div> 
									</swiper>  -->


									<swiper :options="swiperTopOptions" ref="swiperTop" class="swiperTop">
										<swiper-slide v-for="Slide in item.slides" :key="Slide.index" >
											<img :src="Slide[1]" alt="" class="p-offer__thumbnail__img" v-if="Slide[0] == 'img'">
											<!-- <video width="384" height="141" controls :src="Slide[1]" v-else-if="Slide[0] == 'video'"></video>				 -->
										</swiper-slide>
										<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
										<!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
										<div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
									</swiper>
									<!-- swiper2 Thumbs -->
									<swiper :options="swiperThumbsOptions" ref="swiperThumbs" class="swiperThumbs">
										<swiper-slide v-for="Slide in item.slides" :key="Slide.index">
											<img :src="Slide[1]" alt="" class="p-offer__thumbnail__img" v-if="Slide[0] == 'img'">
											<!-- <img :src="Slide[2]" alt="" class="p-offer__thumbnail__img" v-else-if="Slide[0] == 'video'"> -->
											<!-- <video width="96" height="25" controls :src="Slide[1]" v-else-if="Slide[0] == 'video'"></video>	 -->
										</swiper-slide>
									</swiper>
									<!-- <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"> -->
									<!-- <div class="p-offer__gallery u-fbox u-fbox--alcenter u-fbox--bxstart">
										<div class="p-offer__gallery__img is-active"><img src="../img/thumb_1.png" alt=""></div>
										<div class="p-offer__gallery__img"><img src="../img/thumb_2.png" alt=""></div>
										<div class="p-offer__gallery__img"><img src="../img/thumb_3.png" alt=""></div>
									</div> -->
									<span class="p-offer__thumbnail__iconbox p-offer__thumbnail__iconbox--detail u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good" v-bind:class="{ 'is-active': item.isGoodActive }"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite" v-bind:class="{ 'is-active': item.isStarActive }"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span v-for="icon in item.icons" :key="icon.index" class="p-offer__cat__icon">{{icon}}</span>
								</div>
								<div class="p-offer__title p-offer__title--member u-fbox u-fbox--alcenter">
									<h1 class="p-offer__title__title u-fbox u-fbox--wauto">
										<span class="p-offer__title--name">{{item.name}}</span>
										<span class="p-offer__title--age">{{item.age}}</span>
										<span v-if="item.gender == 'men'" class="p-offer__title--gender--men"></span>
										<span v-if="item.gender == 'women'" class="p-offer__title--gender--women"></span>
									</h1>
									<span class="p-offer__title__place">{{item.place}}</span>
								</div>
								<p class="p-offer__desc">{{item.desc}}</p>
								<div class="p-offer__detail p-offer__detail--details">
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">{{item.detailText}}</p>
										<p class="p-offer__detail__details__item">
											希望職種：<span>{{item.workCategory}}</span><br>
                                            希望雇用形態：<span>{{item.workType}}</span></p>
									</div>
									<h2 class="p-offer__detail__details__title">求職する目的や希望条件</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.purposeAndConditions" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">しっかり固まった業務内容</li>
										<li class="p-offer__detail__details__list__item">シフト制</li>
										<li class="p-offer__detail__details__list__item">技術力・営業力</li>
										<li class="p-offer__detail__details__list__item">教育が充実</li> -->
									</ul>
									<h2 class="p-offer__detail__details__title">性格・仕事への姿勢</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.personalityAndAttitude" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">やる気と勢い</li>
										<li class="p-offer__detail__details__list__item">「まず、やってみよう」の精神</li>
										<li class="p-offer__detail__details__list__item">フットワークが軽い</li>
										<li class="p-offer__detail__details__list__item">新しいことが好き</li>
										<li class="p-offer__detail__details__list__item">突発残業OK</li> -->
									</ul>
									<h2 class="p-offer__detail__details__title">学歴</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.educationalHistory" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">福岡大学</li>
										<li class="p-offer__detail__details__list__item">福岡高校</li> -->
									</ul>
									<h2 class="p-offer__detail__details__title">職歴</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.workHistory" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">○○株式会社</li>
										<li class="p-offer__detail__details__list__item">○○株式会社</li> -->
									</ul>
									<h2 class="p-offer__detail__details__title">言語</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.languages" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">日本語</li>
										<li class="p-offer__detail__details__list__item">英語</li> -->
									</ul>
									<h2 class="p-offer__detail__details__title">スキル</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li v-for="element in item.skills" :key="element.index" class="p-offer__detail__details__list__item">{{element}}</li>
										<!-- <li class="p-offer__detail__details__list__item">プログラム</li>
										<li class="p-offer__detail__details__list__item">インフラエンジニア</li> -->
									</ul>
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
import $ from 'jquery'
import SelectJobOffer from '../components/SelectJobOffer'

export default {
  name: 'Top3Detail',
  data(){
	return {
		jobId : '',
		// Slides: ["/img/img_company01.png","/img/img_company01.png","/img/img_company01.png","/img/img_company01.png"],
		// Slides:[
		// 	['img', require('@/img/img_member01.png')],
		// 	['img', require('@/img/img_member01.png')],
		// 	['img', require('@/img/img_member01.png')],
		// 	// ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],

		// ],			
		swiperTopOptions: {
			effect: 'fade',
			loop: true,
			loopedSlides:3, //loopedSlidesは同じ値にする
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		},
		swiperThumbsOptions: {
			loop: true,
			loopedSlides: 3, //loopedSlidesは同じ値にする
			slidesPerView: 3,
			slideToClickedSlide: true
		}
		
	}
  },
  computed:{
    item(){
        return this.$store.state.items.find(item => item.jobOfferId == this.$route.params.jobOfferId)
    },
	// itemIndex(){
	// 	return this.$store.state.items.findIndex(item => item.jobOfferId == this.$route.params.jobOfferId)
    // }
  },
  created(){
	
  },
  mounted() {
	
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 

	this.$nextTick(() => {
		const swiperTop = this.$refs.swiperTop.$swiper
		const swiperThumbs = this.$refs.swiperThumbs.$swiper

		swiperTop.controller.control = swiperThumbs
		swiperThumbs.controller.control = swiperTop

		// swiperTop.forEach((e, i) => {
		// 	e.controller.control = this.Slides[i];
		// });

		// swiperThumbs.forEach((e, i) => {
		// 	e.controller.control = this.Slides[i];
		// });
	})

	//画面遷移時に前のページのスクロール位置に引きずられてしまうので、スクロールをTOPにリセット
	window.scrollTo(0,0);

	const that = this;

	//以下大石追加分
	$('.p-offer__thumbnail__iconbox__icon--good').on('click', function(){
		
		if ($(this).hasClass('is-active')) {
			// that.toast('「いいね！」を解除しました。');
			// $(this).removeClass('is-active');
		} else {
			// that.showSelectJobOffer('good');
			// $(this).addClass('is-active');
			// that.toast('「いいね！」を登録しました。');
			that.showSelectJobOffer();
		}		
	});

	$('.p-offer__thumbnail__iconbox__icon--favorite').on('click', function(){
		if ($(this).hasClass('is-active')) {
			// $(this).removeClass('is-active');
			// that.$store.dispatch("updateStarActiveinItems", { index: that.itemIndex, value: false })
			that.$store.dispatch("updateStarActiveinItems", { jobOfferId: that.$route.params.jobOfferId, value: false })
			that.$store.dispatch("removeFarvoriteItems", that.$route.params.jobOfferId)

			that.toast('「お気に入り」を解除しました。');
		} else {
			// that.showSelectJobOffer('star');
			// $(this).addClass('is-active');

			// that.$store.dispatch("updateStarActiveinItems", { index: that.itemIndex, value: true })
			that.$store.dispatch("updateStarActiveinItems", { jobOfferId: that.$route.params.jobOfferId, value: true })
			that.$store.dispatch("addFarvoriteItems", that.item)
			that.toast('「お気に入り」を登録しました。');
		}		
	});

	
  },
  methods : {
    toast(message){
		// this.$toast(message,{duration:1000, horizontalPosition:'center', verticalPosition:'center', transition: 'fade',}, )
		this.$toasted.show(message, { theme: "toasted-primary", 
			position: "bottom-center", 
			duration : 1000, 
			fullWidth:true,
			fitToScreen:true,
			className: ['toasting']
			}
		)
	},
	showSelectJobOffer() {

		this.$FModal.show(
			{ component: SelectJobOffer },
			{
				jobOfferId : this.$route.params.jobOfferId
			}
		)
	}
  }
}
</script>

<style>
.toasting {
  color: white !important;
  background-color: #41c1eb !important;
  /* margin-bottom:10% !important; */
  /* vertical-align: middle !important; */
  /* display:table-cell !important;;
  vertical-align:middle !important; */
}


/* .swiperTop {
  background-color: rgb(173, 215, 233);
} */
.swiperThumbs {
  background-color:white;
}
.swiperTop .swiper-slide {
  text-align: center;
  /* padding: 150px 0; */
}

.swiperThumbs .swiper-slide {
  text-align: center;
  /* dpadding: 50px 0; */
  border: 2px solid white;
}

/* .swiperThumbs .swiper-slide:hover {
  cursor: pointer;
} */

/* .swiper-slide-active {
  background-color: rgb(173, 215, 233);
} */

.swiperThumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiperThumbs .swiper-slide-active {
  opacity: 1;
}

</style>