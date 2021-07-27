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
            <dt class="p-form__registration__stitle">会社名</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">株式会社Meetus</dd>
            <dt class="p-form__registration__stitle">会社ホームページURL</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">https://aaa.co.jp</dd>
            <dt class="p-form__registration__stitle">会社電話番号</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">0120-1111-2222</dd>
            <dt class="p-form__registration__stitle">会社住所（都道府県）</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">福岡県</dd>
            <dt class="p-form__registration__stitle">会社住所（市区町村）</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">福岡市中央区</dd>

            <dt class="p-form__registration__stitle">担当者名</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">担当者名</dd>
             <dt class="p-form__registration__stitle">性別</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">男性</dd>
            <dt class="p-form__registration__stitle">メールアドレス</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">○○@○○○○.○○○</dd>
    

            <dt class="p-form__registration__stitle">自己紹介</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">はじめまして、皆様からのいいね♪お待ちしております。</dd>
            <dt class="p-form__registration__stitle">あなたの性格は？</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">のんびり、マイペース、聞き上手</dd>
            <dt class="p-form__registration__stitle">休日の過ごし方は？</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">動画鑑賞、ドライブ、インドア</dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="next">次へ</a>
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
      this.$router.push('/mailauth')  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
