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
								<router-link :to="{ name: 'Top2' }" class="p-offertitle p-offertitle--good">お気に入り</router-link>
							</div>


							<!--job-->
							<div class="p-offer" v-for="item in farvoriteItems" :key="item.index" >
								<div class="p-offer__thumbnail">
								<img :src="item.slides[0][1]" alt="" class="p-offer__thumbnail__img">
								<!-- <span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
									<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
								</span> -->
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
								<div class="p-offer__detail">
									<div class="p-offer__detail__company p-offer__detail__company--open">
										<p class="p-offer__detail__company__text u-margin--bottom10">{{item.oneText}}</p>
										<p class="p-offer__detail__company__text">
											希望職種：<span>{{item.workCategory}}</span><br>
                                            希望雇用形態：<span>{{item.workType}}</span>
										</p>
									</div>
									<br>
									<div class="p-offer__btn u-fbox u-fbox--alcenter">
										<a class="c-btn__good" :id="'good_' + item.jobOfferId" v-bind:class="{ 'is-active': item.isGoodActive }">いいね</a>
										<a class="c-btn__star" :id="'star_' + item.jobOfferId" v-bind:class="{ 'is-active': item.isStarActive }">お気に入り</a>
									</div>
									<div class="p-offer__detail__details__btn">
										<!-- <router-link :to="{ name: 'Top3Detail', params: { jobOfferId: item.jobOfferId }}" class="c-btn__detail">さらに詳細を見る</router-link > -->
										<a class="c-btn__detail">さらに詳細を見る</a>
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
import $ from 'jquery'
import SelectJobOffer from '../components/SelectJobOffer'
import ShowJobSeekerDetail from '@/components/ShowJobSeekerDetail'

export default {
  name: 'Favorite',
  computed:{
    farvoriteItems(){
        return this.$store.state.farvoriteItems
    }
  },
  data(){
	return {
	}
  },
  mounted(){
   

	let that = this

	that.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 

	//以下大石追加分
	$('.c-btn__good').on('click', function(){

		let id = $(this).attr('id').replace('good_','');

		if ($(this).hasClass('is-active')) {
			// that.toast('「いいね！」を解除しました。');
			// $(this).removeClass('is-active');
		} else {
			
			that.showSelectJobOffer(id);
			// $(this).addClass('is-active');
			// that.toast('「いいね！」を登録しました。');
		}		
	});

	$('.c-btn__star').on('click', function(){

		let id = $(this).attr('id').replace('star_','');
		// let index = that.items.findIndex(item => item.jobOfferId == id)
		
		if ($(this).hasClass('is-active')) {

			//that.items[index].isStarActive = false

			that.$store.dispatch("updateStarActiveinItems", { jobOfferId: id, value: false })
			that.$store.dispatch("removeFarvoriteItems", id)
			
			// $(this).removeClass('is-active');
			that.toast('「お気に入り」を解除しました。');

		} else {

			//that.items[index].isStarActive = true

			that.$store.dispatch("updateStarActiveinItems", { jobOfferId: id, value: true })
			console.log("okinirii")
			that.$store.dispatch("addFarvoriteItems", that.items.find(item => item.jobOfferId == id))

			// $(this).addClass('is-active');
			that.toast('「お気に入り」を登録しました。');
		}		
	});

	//以下大石追加分
    $('.c-btn__detail').on('click', function(){
        
        that.showJobSeekerDetail(1);
        
    });
  },
  methods:{
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
	showSelectJobOffer(id) {

		console.log(id)

		console.log("detecteItem")
		
		this.$FModal.show(
			{ component: SelectJobOffer },
			{
				jobOfferId : Number(id)
			}
		)
	},
	showJobSeekerDetail(id) {   
      this.$FModal.show(
        { component: ShowJobSeekerDetail },
        {
          jobOfferId : Number(id)
        }
      )
    }

  }
}
</script>
