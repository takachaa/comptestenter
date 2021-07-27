<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">あなたの性格は？<span>（複数選択可能）</span></h1>       
            <div class="p-form__jobsearch__item">
              <div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
                <label><input type="checkbox" name="purpose" value="のんびり" v-model="objects.dataObject3.purposeAndConditions"><span>のんびり</span></label>
                <label><input type="checkbox" name="purpose" value="マイペース" v-model="objects.dataObject3.purposeAndConditions"><span>マイペース</span></label>
                <label><input type="checkbox" name="purpose" value="聞き上手" v-model="objects.dataObject3.purposeAndConditions"><span>聞き上手</span></label>
                <label><input type="checkbox" name="purpose" value="熱血漢" v-model="objects.dataObject3.purposeAndConditions"><span>熱血漢</span></label>
                <label><input type="checkbox" name="purpose" value="よく笑う" v-model="objects.dataObject3.purposeAndConditions"><span>よく笑う</span></label>
                <label><input type="checkbox" name="purpose" value="引っ込み思案" v-model="objects.dataObject3.purposeAndConditions"><span>引っ込み思案</span></label>
                <label><input type="checkbox" name="purpose" value="嘘がつけない性格" v-model="objects.dataObject3.purposeAndConditions"><span>嘘がつけない性格</span></label>
                <label><input type="checkbox" name="purpose" value="サバサバしている" v-model="objects.dataObject3.purposeAndConditions"><span>サバサバしている</span></label>
                <label><input type="checkbox" name="purpose" value="穏やかな性格" v-model="objects.dataObject3.purposeAndConditions"><span>穏やかな性格</span></label>
                <label><input type="checkbox" name="purpose" value="器が大きい" v-model="objects.dataObject3.purposeAndConditions"><span>器が大きい</span></label>
                <label><input type="checkbox" name="purpose" value="気が強い" v-model="objects.dataObject3.purposeAndConditions"><span>気が強い</span></label>
                <label><input type="checkbox" name="purpose" value="気が弱い" v-model="objects.dataObject3.purposeAndConditions"><span>気が弱い</span></label>
                <label><input type="checkbox" name="purpose" value="軽くみられる" v-model="objects.dataObject3.purposeAndConditions"><span>軽くみられる</span></label>
              </div>
            </div>
        </div>
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">休日の過ごし方は？<span>（複数選択可能）</span></h1>       
            <div class="p-form__jobsearch__item">
              <div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
                <label><input type="checkbox" name="purpose" value="動画鑑賞" v-model="objects.dataObject3.purposeAndConditions"><span>動画鑑賞</span></label>
                <label><input type="checkbox" name="purpose" value="ドライブ" v-model="objects.dataObject3.purposeAndConditions"><span>ドライブ</span></label>
                <label><input type="checkbox" name="purpose" value="インドア" v-model="objects.dataObject3.purposeAndConditions"><span>インドア</span></label>
                <label><input type="checkbox" name="purpose" value="アウトドア" v-model="objects.dataObject3.purposeAndConditions"><span>アウトドア</span></label>
                <label><input type="checkbox" name="purpose" value="漫画" v-model="objects.dataObject3.purposeAndConditions"><span>漫画</span></label>
                <label><input type="checkbox" name="purpose" value="アニメ" v-model="objects.dataObject3.purposeAndConditions"><span>アニメ</span></label>
                <label><input type="checkbox" name="purpose" value="ゲーム" v-model="objects.dataObject3.purposeAndConditions"><span>ゲーム</span></label>
                <label><input type="checkbox" name="purpose" value="キャンプ" v-model="objects.dataObject3.purposeAndConditions"><span>キャンプ</span></label>
                <label><input type="checkbox" name="purpose" value="スポーツ" v-model="objects.dataObject3.purposeAndConditions"><span>スポーツ</span></label>
              </div>
            </div>
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
  name: 'Registration4',
  data () {
    return {
        page : 4,
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
      this.$emit('click', this.page + 1)     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
