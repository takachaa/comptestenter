<template>
  <div class="l-main">
    <!--article-->
    <article>
      <section id="login">
        <!--section-->
        <div class="l-main__section">
          <!--contents-->
          <div class="l-main__contents">
            <div class="p-form__login u-fbox u-fbox--alcenter">
              <div class="p-form__login__logo"><img src="../img/logo.png" alt="meetus"></div>
              <div class="p-form__login__form">
                <form action="" @submit.prevent="LoginSubmit">
                  <input type="text" name="mail" placeholder="メールアドレス" class="">
                  <input type="password" name="password" placeholder="パスワード">
                  <input type="submit" value="ログイン" class="c-btn__login">
                </form>
                <a class="p-form__login__form__foget">パスワードがわからない場合</a>
              </div>
              <router-link to="/signup" class="c-btn__registration">アカウント登録はこちら</router-link>
              <!-- <a class="c-btn__registration">アカウント登録はこちら</a> -->
            </div>
          </div>
          <!--/contents-->
        </div>
        <!--/section-->
      </section>

    </article>
    <!--/article-->
  </div>	
</template>

<script>

export default {
  name: 'Login',
  methods:{
    LoginSubmit(){
       this.$router.push('/top2')
    }
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':false,'isFooterActive':false}) 
  }
}
</script>