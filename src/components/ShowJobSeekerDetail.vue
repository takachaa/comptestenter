<template>
<div>
  <!-- <div style="text-align:center; font-size:20px">{{msg}}</div> -->
  <!-- <h1 class="p-offer__title">{{msg}}</h1> -->
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
        <swiper-slide v-for="Slide in Slides" :key="Slide.index" >
          <img :src="Slide[1]" alt="" class="p-offer__thumbnail__img" v-if="Slide[0] == 'img'">
         
          <!-- <video width="384" height="141" controls :src="Slide[1]" v-else-if="Slide[0] == 'video'"></video>				 -->
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperThumbsOptions" ref="swiperThumbs" class="swiperThumbs">
        <swiper-slide v-for="Slide in Slides" :key="Slide.index">
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
      <!-- <span class="p-offer__thumbnail__iconbox p-offer__thumbnail__iconbox--detail u-fbox u-fbox--alstart u-fbox--wauto">
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
      <h1 class="p-offer__title__title u-fbox u-fbox--wauto">
        <span class="p-offer__title--name">H・O</span>
        <span class="p-offer__title--age">32歳</span>
        <span else class="p-offer__title--gender--women"></span>
      </h1>
      <span class="p-offer__title__place">福岡県福岡市</span>
    </div>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail p-offer__detail--details">
      <div class="p-offer__detail__details">
        <p class="p-offer__detail__details__item">「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。</p>
        <p class="p-offer__detail__details__item">
          職種：通信業<br>
          雇用形態：正社員</p>
      </div>
      <h2 class="p-offer__detail__details__title">求職する目的や希望条件</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">しっかり固まった業務内容</li>
        <li class="p-offer__detail__details__list__item">シフト制</li>
        <li class="p-offer__detail__details__list__item">技術力・営業力</li>
        <li class="p-offer__detail__details__list__item">教育が充実</li>
      </ul>
      <h2 class="p-offer__detail__details__title">性格・仕事への姿勢</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">やる気と勢い</li>
        <li class="p-offer__detail__details__list__item">「まず、やってみよう」の精神</li>
        <li class="p-offer__detail__details__list__item">フットワークが軽い</li>
        <li class="p-offer__detail__details__list__item">新しいことが好き</li>
        <li class="p-offer__detail__details__list__item">突発残業OK</li>
      </ul>
      <h2 class="p-offer__detail__details__title">学歴</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">福岡大学</li>
        <li class="p-offer__detail__details__list__item">福岡高校</li>
      </ul>
      <h2 class="p-offer__detail__details__title">職歴</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">○○株式会社</li>
        <li class="p-offer__detail__details__list__item">○○株式会社</li>
      </ul>
      <h2 class="p-offer__detail__details__title">言語</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">日本語</li>
        <li class="p-offer__detail__details__list__item">英語</li>
      </ul>
      <h2 class="p-offer__detail__details__title">スキル</h2>
      <ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
        <li class="p-offer__detail__details__list__item">プログラム</li>
        <li class="p-offer__detail__details__list__item">インフラエンジニア</li>
      </ul>
    </div>
  </div>
  <!--/job-->

</div>
</template>

<script>
export default {
  name: 'ShowJobOfferDetail',
  data(){
	return {
    
		jobId : '',
		// Slides: ["/img/img_company01.png","/img/img_company01.png","/img/img_company01.png","/img/img_company01.png"],
		Slides:[
			['img', require('@/img/img_member01.png')],
			['img', require('@/img/img_member02.png')],
			['img', require('@/img/img_member03.png')],
			// ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],

		],			
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
  props: {
    jobOfferId  : Number
  },
  computed:{
  },
  mounted(){
    let that = this

    that.$nextTick(() => {
      const swiperTop = that.$refs.swiperTop.$swiper
      const swiperThumbs = that.$refs.swiperThumbs.$swiper

      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop

      // swiperTop.forEach((e, i) => {
      // 	e.controller.control = this.Slides[i];
      // });

      // swiperThumbs.forEach((e, i) => {
      // 	e.controller.control = this.Slides[i];
      // });
    })

    
  },
  methods: {
    closeModal: function () {
      this.$FModal.hide();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
