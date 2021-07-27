<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">あなた(担当者)のことを教えてください。</h1>
          <dl>
            <dt class="p-form__registration__stitle">担当者名</dt>
              <dd class="p-form__registration__item">
                <input type="text" name="your-name" placeholder="担当者名">
              </dd>
              <dt class="p-form__registration__stitle">性別</dt>
              <dd class="p-form__registration__item">
                <div class="p-form__registration__item__radio u-fbox">
                  <label><input type="radio" name="sex" value="男性" v-model="objects.dataObject1.gender"><span>男性</span></label>
                  <label><input type="radio" name="sex" value="女性" v-model="objects.dataObject1.gender"><span>女性</span></label>
                </div>
                <span class="p-form__error">未入力です。</span>
              </dd>
              <dt class="p-form__registration__stitle">メールアドレス</dt>
              <dd class="p-form__registration__item"><input type="email" name="your-email" placeholder="○○@○○○○.○○○"></dd>
              <dt class="p-form__registration__stitle">パスワード</dt>
              <dd class="p-form__registration__item"><input type="password" name="your-password" placeholder="" class="p-form__registration__item__password"><span class="p-form__registration__item__icon"></span></dd>
              <dt class="p-form__registration__stitle">パスワード(確認）</dt>
              <dd class="p-form__registration__item"><input type="password" name="your-password" placeholder="" class="p-form__registration__item__password"><span class="p-form__registration__item__icon"></span></dd>
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
  name: 'Registration2',
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
