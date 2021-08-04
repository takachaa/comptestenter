<template>
<div>
  <br>
  <div style="text-align:center; font-size:20px">「いいね」する案件を選択してください。</div>
  <br>
  <!-- <h1 class="p-offer__title">{{msg}}</h1> -->
  <!--job-->
  <div class="p-offer">
    <div class="p-offer__thumbnail">
      <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
    </div>
    <div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
      <span class="p-offer__cat__icon">正社員</span>
      <span class="p-offer__cat__icon">未経験OK</span>
    </div>
    <h1 class="p-offer__title">(LikeFrom)100%自社開発！北九州で腰を据えて働こう</h1>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail">
      <dl class="p-offer__detail__company u-padding--bottom0 u-fbox u-fbox--alstart">
        <dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
        <dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
        <dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
      </dl>
    </div>
    <div class="p-offer__btn u-fbox u-fbox--alcenter">
      <a class="c-btn__good" @click="closeModal" >いいね</a>
    </div>
  </div>
  <!--/job-->
 <!--job-->
  <div class="p-offer">
    <div class="p-offer__thumbnail">
      <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
    </div>
    <div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
      <span class="p-offer__cat__icon">正社員</span>
      <span class="p-offer__cat__icon">未経験OK</span>
    </div>
    <h1 class="p-offer__title">(LikeFrom)100%自社開発！北九州で腰を据えて働こう</h1>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail">
      <dl class="p-offer__detail__company u-padding--bottom0 u-fbox u-fbox--alstart">
        <dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
        <dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
        <dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
      </dl>
    </div>
    <div class="p-offer__btn u-fbox u-fbox--alcenter">
      <a class="c-btn__good" @click="closeModal">いいね</a>
    </div>
  </div>
  <!--/job-->
  <!--job-->
  <div class="p-offer">
    <div class="p-offer__thumbnail">
      <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
    </div>
    <div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
      <span class="p-offer__cat__icon">正社員</span>
      <span class="p-offer__cat__icon">未経験OK</span>
    </div>
    <h1 class="p-offer__title">(LikeFrom)100%自社開発！北九州で腰を据えて働こう</h1>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail">
      <dl class="p-offer__detail__company u-padding--bottom0 u-fbox u-fbox--alstart">
        <dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
        <dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
        <dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
      </dl>
    </div>
    <div class="p-offer__btn u-fbox u-fbox--alcenter">
      <a class="c-btn__good" @click="closeModal">いいね</a>    
    </div>
  </div>
  <!--/job-->

</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'SelectJobOffer',
  props: {
    jobOfferId  : Number
  },
  computed:{
    items(){
        return this.$store.state.items
    }
  },
  mounted(){
    let that = this
    //以下大石追加分
    $('.c-btn__good').on('click', function(){

      $(this).addClass('is-active');
      
      console.log("click good 0 ")
      that.$store.dispatch("updateGoodActiveinItems", { jobOfferId: that.jobOfferId, value: true })
      console.log("click good 1")

      that.$store.dispatch("addLikeToItems", that.items.find(item => item.jobOfferId == that.jobOfferId))
      console.log("click good 2")

      that.toast('「いいね！」を登録しました。');
      console.log("click good 3")
      // if ($(this).hasClass('is-active')) {

      //   $(this).removeClass('is-active');
      // } else {
        
      //   $(this).addClass('is-active');
        
      // }		
    });
  },
  methods: {
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
    closeModal: function () {
      this.$FModal.hide();
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
