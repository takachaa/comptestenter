<template>
<section id="regForm">
  <!--section-->
  <div class="l-main__section">
    <!--contents-->
    <div class="l-main__contents">
      <div class="p-form__registration">
        <h1 class="p-form__registration__title">以下の内容で登録します。</h1>
        <form action="">
        <dl>
          <dt class="p-form__registration__stitle">募集する職業のお写真</dt>
          <dd class="p-form__registration__item">
            <div class="u-margin--bottom10"><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></div>
            <ul class="p-profile__photo u-fbox u-fbox--alstart u-fbox--bxstart u-margin--bottom0">
              <li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
              <li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
              <li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
            </ul>
          </dd>
          <dt class="p-form__registration__stitle">お仕事概要（タイトル）</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">お仕事概要</dd>
          <dt class="p-form__registration__stitle">募集する職種</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">ネットワークエンジニア</dd>
          <dt class="p-form__registration__stitle">会社名称</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">株式会社Meetus</dd>
          <dt class="p-form__registration__stitle">ホームページURL</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">https://www.xxx.com</dd>
          <dt class="p-form__registration__stitle">お仕事概要</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">お仕事概要</dd>
          <dt class="p-form__registration__stitle">勤務地</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">福岡市中央区</dd>
          <dt class="p-form__registration__stitle">会社名（勤務地）</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">SHINRAI GROUP</dd>
          <dt class="p-form__registration__stitle">給与</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">月給17万円〜22万円</dd>
          <dt class="p-form__registration__stitle">雇用形態</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">正社員</dd>
          <dt class="p-form__registration__stitle">職種</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">技術職</dd>
          <dt class="p-form__registration__stitle">勤務時間</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">16:00〜17:30</dd>
          <dt class="p-form__registration__stitle">休日</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">完全週休二日制</dd>
          <dt class="p-form__registration__stitle">資格</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">TOEIC800点以上</dd>
          <dt class="p-form__registration__stitle">技術</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">Webシステム経験3年以上</dd>
          <dt class="p-form__registration__stitle">その他</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">お仕事概要</dd>
          <dt class="p-form__registration__stitle">こんな会社です！</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">年収アップ,通勤時間の短縮,勤務時間の明確化</dd>
          <dt class="p-form__registration__stitle">こんな人を探しています！</dt>
          <dd class="p-form__registration__item p-form__registration__item--confirm">時間に正確,集中力が高い,メモはしっかり取る,相手の話に耳を傾ける,相手を立てる,計画的な残業OK</dd>
        </dl>
        
        <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="next">登録</a>
        </div>
        
      </form>
      </div>
      
    </div>
    <!--/contents-->
  </div>
  <!--/section-->
</section>
</template>

<script>
export default {
  name: 'Registration4',
  data () {
    return {
        page : 5,
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
  methods : {
    back(){     
      this.$emit('click', this.page -1)
    },
    next(){    
      this.$router.push('/managejoboffer')  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
