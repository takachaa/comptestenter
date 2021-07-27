<template>
<section id="regForm">
  <!--section-->
  <div class="l-main__section">
    <!--contents-->
    <div class="l-main__contents">
      <div class="p-form__registration">
        <h1 class="p-form__registration__title">募集する職業のお写真を登録してください。</h1>
        <div class="u-margin--bottom10"><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></div>
        <ul class="p-profile__photo u-fbox u-fbox--alstart u-fbox--bxstart">
          <li class="p-profile__photo__item"><a href="" class="p-profile__photo__item__add"></a></li>
          <li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
          <li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
        </ul>
        <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="next">次へ</a>
        </div>
      </div>
      
    </div>
    <!--/contents-->
  </div>
  <!--/section-->
</section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'JobRegistration1',
  data () {
    return {
        page : 1,
		}
  },
  props: {
    objects :{
			dataObject1:{
				name : "",
        mail : "",
				password : "",
				gender : "",
				yearOfBirth : "",
				address1 :"",
				address2 :""
			},
			dataObject2:{
				occupation : "",
				employmentStatus : "",
			},
			dataObject3:{
				purposeAndConditions : []
			},
			dataObject4:{
				personalityAndPosture : []
			}
		}
  },
  mounted: function() {
    $('.p-form__registration__item__icon').on('click',function() {
      $(this).toggleClass('is-active');
      var _type = $('.p-form__registration__item__password').attr('type');
      if(_type=='password'){
        $('.p-form__registration__item__password').attr('type','text');
      }else{
        $('.p-form__registration__item__password').attr('type','password');
      }
    });  
  },
  methods : {
    back(){
      this.$router.push('/managejoboffer')
    },
    next(){     
      this.$emit('click', this.page + 1)     
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
