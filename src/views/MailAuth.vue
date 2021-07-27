<template>
<div>	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="regForm">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<div class="p-form__login u-fbox u-fbox--alcenter">
								<p class="u-align--center u-margin--bottom30 u-block--w100">ご登録のメールアドレス<br>[ ○○@○○○○.○○○ ]<br>宛に「確認コード」を送信しました。<br>メール本文に記載の「確認コード」を<br>入力してください。</p>
								<div class="p-form__login__form">
									<form action="" @submit.prevent="authSubmit">
										<input type="text" name="auth" placeholder="" class="">
										<input type="submit" value="認証" class="c-btn__login">
									</form>
									<a class="p-form__login__form__foget" @click="resendEmail">確認メールを再送信する</a>
								</div>
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
</div>
</template>

<script>

export default {
  name: 'MailAuth',
  mounted(){
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods:{
    authSubmit(){
      this.$router.push('/plan')
    },
    resendEmail(){
      alert('resendEmail')
    }
  }
}
</script>

<style scoped>
input[type="text"][name="auth"]{
	text-align: center;
}
</style>
