<template>
  <section id="regForm">
  <!--section-->
  <div class="l-main__section">
    <!--contents-->
    <div class="l-main__contents">
      <div class="p-form__registration">
        <h1 class="p-form__registration__title">募集詳細２を入力してください。</h1>
          <dl>
            <dt class="p-form__registration__stitle u-margin--bottom10">こんな人を探しています！<span>（複数選択可能）</span></dt>
            <dd class="p-form__registration__item">
              <div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
                <label><input type="checkbox" name="personality" value="やる気と勢い"><span>やる気と勢い</span></label>
                <label><input type="checkbox" name="personality" value="緻密・正確な作業"><span>緻密・正確な作業</span></label>
                <label><input type="checkbox" name="personality" value="ミスが少ない"><span>ミスが少ない</span></label>
                <label><input type="checkbox" name="personality" value="状況に柔軟に対応"><span>状況に柔軟に対応</span></label>
                <label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="「まず、やってみよう」の精神"><span>「まず、やってみよう」の精神</span></label>
                <label><input type="checkbox" name="personality" value="時間に正確"><span>時間に正確</span></label>
                <label><input type="checkbox" name="personality" value="集中力が高い"><span>集中力が高い</span></label>
                <label><input type="checkbox" name="personality" value="フットワークが軽い"><span>フットワークが軽い</span></label>
                <label><input type="checkbox" name="personality" value="会社・上司を尊重"><span>会社・上司を尊重</span></label>
                <label><input type="checkbox" name="personality" value="部下の面倒見が良い"><span>部下の面倒見が良い</span></label>
                <label><input type="checkbox" name="personality" value="チームワークが得意"><span>チームワークが得意</span></label>
                <label><input type="checkbox" name="personality" value="新しいことが好き"><span>新しいことが好き</span></label>
                <label><input type="checkbox" name="personality" value="覚えた作業は着実にこなす"><span>覚えた作業は着実にこなす</span></label>
                <label><input type="checkbox" name="personality" value="何でも調べる"><span>何でも調べる</span></label>
                <label><input type="checkbox" name="personality" value="メモはしっかり取る"><span>メモはしっかり取る</span></label>
                <label><input type="checkbox" name="personality" value="自分の意見をはっきり言う"><span>自分の意見をはっきり言う</span></label>
                <label><input type="checkbox" name="personality" value="相手の話に耳を傾ける"><span>相手の話に耳を傾ける</span></label>
                <label><input type="checkbox" name="personality" value="進むべき方向に向かって全力"><span>進むべき方向に向かって全力</span></label>
                <label><input type="checkbox" name="personality" value="相手を立てる"><span>相手を立てる</span></label>
                <label><input type="checkbox" name="personality" value="突発残業OK"><span>突発残業OK</span></label>
                <label><input type="checkbox" name="personality" value="計画的な残業OK"><span>計画的な残業OK</span></label>
                <label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="仕事は時間内にしっかりこなす"><span>仕事は時間内にしっかりこなす</span></label>
              </div>
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
  name: 'Registration3',
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
