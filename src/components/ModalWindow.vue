<template>
  <transition>
  <!-- overlay「薄暗い背景」をおしても閉じるようにする-->
  <div id="overlay" v-on:click="clickEvent">
      <!-- stopEventでメッセージ部分についてはクリックしても閉じないようにしている-->    
      <div id="content" v-on:click="stopEvent">
          <p><slot></slot></p>
          
          <!-- <button v-on:click="clickEvent">close</button> -->

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
              <p class="p-offer__detail__company__text u-margin--bottom10">「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。</p>
              <p class="p-offer__detail__company__text">職種：通信業<br>雇用形態：正社員</p>
            </div>
            <div class="p-offer__detail__details">
              <p class="p-offer__detail__details__item">初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです初めまして。テキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーですテキストダミーです</p>
            </div>
            <br>
            <button v-on:click="clickEvent">close</button>
            </div>
          </div>
          <!--/job-->
          
      </div>
      
  </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
   
    }
  },
  methods :{
    clickEvent: function(){
      this.$emit('from-child')
     },
     stopEvent: function(event){
      event.stopPropagation()
    }
  }
}

</script>

<style scoped>

#overlay{
    /*要素を重ねた時の順番*/
    z-index:1;

    /*画面全体を覆う設定*/
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    /*画面の中央に要素を表示させる設定*/
    display: flex;
    align-items: center;
    justify-content: center;

}

#content{
    z-index:2;
    width:80%;
    padding: 1em;
    background:#fff;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
