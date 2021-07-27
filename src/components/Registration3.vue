<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">あなた(担当者)のことを教えてください。</h1>
          <dl>
            <dt class="p-form__registration__stitle">自己紹介</dt>
              <dd class="p-form__registration__item">
                <input type="text" name="your-name" placeholder="はじめまして、皆様からのいいね♪お待ちしております。">
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
      page : 3,
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
