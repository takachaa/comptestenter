<template>
<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="step">
					<!--section-->
					<div class="l-main__section">
            
						<!--contents-->
						<!-- <div class="l-main__contents l-main__contents--full">
							<ul class="p-form__step p-form__step--step1 u-fbox">
								<li class="p-form__step__item">写真</li>
								<li class="p-form__step__item">募集概要</li>
								<li class="p-form__step__item">募集詳細</li>
								<li class="p-form__step__item">内容確認</li>
							</ul>
						</div> -->
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="regForm">
          
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<router-link :to="{ name: 'JobOfferDetail' }" class="p-offertitle p-offertitle--good">募集詳細編集</router-link>
							<div class="p-form__registration">
								<h1 class="p-form__registration__title">募集詳細を編集してください。</h1>
								<form action="">
									<dl>
										<dt class="p-form__registration__stitle u-margin--bottom10">こんな会社です！<span>（複数選択可能）</span></dt>
										<dd class="p-form__registration__item">
											<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
												<label><input type="checkbox" name="purpose" value="年収アップ"><span>年収アップ</span></label>
												<label><input type="checkbox" name="purpose" value="スキルチェンジ"><span>スキルチェンジ</span></label>
												<label><input type="checkbox" name="purpose" value="自分にあった職場探し"><span>自分にあった職場探し</span></label>
												<label><input type="checkbox" name="purpose" value="Uターン/Iターン"><span>ターン/Iターン</span></label>
												<label><input type="checkbox" name="purpose" value="新しいことにチャレンジ"><span>新しいことにチャレンジ</span></label>
												<label><input type="checkbox" name="purpose" value="通勤時間の短縮"><span>通勤時間の短縮</span></label>
												<label><input type="checkbox" name="purpose" value="環境の良い場所へ移住"><span>環境の良い場所へ移住</span></label>
												<label><input type="checkbox" name="purpose" value="フレックス制度"><span>フレックス制度</span></label>
												<label><input type="checkbox" name="purpose" value="しっかり固まった業務内容"><span>しっかり固まった業務内容</span></label>
												<label><input type="checkbox" name="purpose" value="シフト制"><span>シフト制</span></label>
												<label><input type="checkbox" name="purpose" value="会社全体のやる気・勢い"><span>会社全体のやる気・勢い</span></label>
												<label><input type="checkbox" name="purpose" value="勤務時間の明確化"><span>勤務時間の明確化</span></label>
												<label><input type="checkbox" name="purpose" value="教育が充実"><span>教育が充実</span></label>
												<label><input type="checkbox" name="purpose" value="祝日休業"><span>祝日休業</span></label>
												<label><input type="checkbox" name="purpose" value="技術力・営業力"><span>技術力・営業力</span></label>
												<label><input type="checkbox" name="purpose" value="夏季休暇制度"><span>夏季休暇制度</span></label>
												<label><input type="checkbox" name="purpose" value="安定性"><span>安定性</span></label>
												<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="勤務時間調整がある程度できる"><span>勤務時間調整がある程度できる</span></label>
												<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="仕事について相談できる環境"><span>仕事について相談できる環境</span></label>
											</div>
										</dd>
										<dt class="p-form__registration__stitle u-margin--bottom10">こんな人を探しています！<span>（複数選択可能）</span></dt>
										<dd class="p-form__registration__item">
											<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
												<label><input type="checkbox" name="personality" value="やる気と勢い"><span>やる気と勢い</span></label>
												<label><input type="checkbox" name="personality" value="緻密・正確な作業"><span>緻密・正確な作業</span></label>
												<label><input type="checkbox" name="personality" value="ミスが少ない"><span>ミスが少ない</span></label>
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
												<label><input type="checkbox" name="personality" value="状況に柔軟に対応"><span>状況に柔軟に対応</span></label>
											</div>
										</dd>
									</dl>
									<div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
										<a href="recruit_registration2.html" class="c-btn__back">戻る</a>
										<a href="recruit_confirm.html" class="c-btn__next">次へ</a>
									</div>								
								</form>
							</div>
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>

			</article>
			<!--/article-->
		</div>	
	</main>
	<!--/main-->

</template>

<script>

export default {
  name: 'EditJobOffer2',
  data () {
    return {
       
		}
  },
  props: {
    
  },
  mounted: function() {
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods : {
    back(){
      this.$router.push('/jobofferdetail')
    },
    next(){     
      this.$router.push('/jobofferdetail')   
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
