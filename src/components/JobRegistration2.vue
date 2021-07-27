<template>
<section id="regForm">
  <!--section-->
  <div class="l-main__section">
    <!--contents-->
    <div class="l-main__contents">
      <div class="p-form__registration">
        <h1 class="p-form__registration__title">募集概要を入力してください。</h1>
        <dl>
          <dt class="p-form__registration__stitle">募集特徴タグの選択<span>（複数選択可能）</span></dt>
          <dd class="p-form__registration__item">										
            <div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
              <label><input type="checkbox" name="purpose" value="未経験OK"><span>未経験OK</span></label>
              <label><input type="checkbox" name="purpose" value="正社員"><span>正社員</span></label>
              <label><input type="checkbox" name="purpose" value="アルバイト"><span>アルバイト</span></label>
            </div>
          </dd>
          <dt class="p-form__registration__stitle">お仕事概要（タイトル）</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="">
          </dd>
          <dt class="p-form__registration__stitle">募集する職種</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="ネットワークエンジニア、プログラマ">
          </dd>
          <dt class="p-form__registration__stitle">会社名称</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="株式会社Meetus">
          </dd>
          <dt class="p-form__registration__stitle">ホームページURL</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="https://www.xxx.com">
          </dd>
          <dt class="p-form__registration__stitle">お仕事概要</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="">
          </dd>
          <dt class="p-form__registration__stitle">勤務地</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="福岡市中央区">
          </dd>
          <dt class="p-form__registration__stitle">会社名（勤務地）</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="SHINRAI GROUP">
          </dd>
          <dt class="p-form__registration__stitle">給与</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="月給17万円〜22万円">
          </dd>
          <dt class="p-form__registration__stitle">雇用形態</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="正社員">
          </dd>
          <dt class="p-form__registration__stitle">職種</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="技術職">
          </dd>
          <dt class="p-form__registration__stitle">勤務時間</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="16:00〜17:30">
          </dd>
          <dt class="p-form__registration__stitle">休日</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="完全週休二日制">
          </dd>
          <dt class="p-form__registration__stitle">資格</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="TOEIC800点以上">
          </dd>
          <dt class="p-form__registration__stitle">技術</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="Webシステム経験3年以上">
          </dd>
          <dt class="p-form__registration__stitle">その他</dt>
          <dd class="p-form__registration__item">
            <input type="text" name="your-name" placeholder="お仕事概要">
          </dd>
        </dl>
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
export default {
  name: 'JobRegistration2',
  data () {
    return {
        page : 2,
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
      this.$emit('click', this.page - 1)
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
