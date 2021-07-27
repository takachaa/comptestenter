<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="talklist">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents u-padding--top80">
							<div class="u-fixed u-fixed--title">
								<router-link :to="{ name: 'Message', params: { value: messageId }}" class="p-talk p-talk--user">
								<!-- <a href="" class="p-talk p-talk--user"> -->
									<div class="p-talk__user u-fbox u-fbox--alcenter">
										<div class="p-talk__user__img"><img src="../img/user.jpg" alt=""></div>
										<dl class="p-talk__user__profile">
											<dt class="p-talk__user__profile__name">求職者AAAAA</dt>
											<dd class="p-talk__user__profile__message"></dd>
										</dl>
									</div>
								<!-- </a> -->
								</router-link >
							</div>
							
							<div class="p-talk p-talk--timeline u-margin--bottom15">
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">はじめまして採用担当の採用太郎です。よろしくお願いします。</dd>
									<dd class="p-tale__comment__meta">2021年6月10日 11:11</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">はじめましてミータス太郎です。「いいね♪」ありがとうございました。</dd>
									<dd class="p-tale__comment__meta">2021年6月10日 11:13</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">こちらこそ「いいね♪」ありがとうございます。</dd>
									<dd class="p-tale__comment__meta">2021年6月10日  11:30</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">早速ですがお仕事の内容等のお話したいので、一回お会いしませんか？</dd>
									<dd class="p-tale__comment__meta">2021年6月10日  11:30</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">ありがとうございます！是非お話聞かせてください。</dd>
									<dd class="p-tale__comment__meta">2021年6月10日 12:00</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">それでは〇〇日に〇〇でお待ち合わせでいかがでしょうか？</dd>
									<dd class="p-tale__comment__meta">2021年6月10日 11:45</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">大丈夫です。よろしくお願いします。</dd>		
									<dd class="p-tale__comment__meta">2021年6月10日 13:00</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">ありがとうございます。気を付けていらしてくださいね。</dd>
									<dd class="p-tale__comment__meta">2021年6月10日 14:00</dd>
								</dl>
							</div>
							
							<form action="">
								<div class="p-form__search p-form__search--talk u-fbox u-fbox--alstart u-margin--bottom10">
									<textarea name="search" placeholder="メッセージ" class="p-form__search__input p-form__search__input--talk"></textarea>
									<input type="submit" value="検索" class="p-form__search__submit p-form__search__submit--plane p-form__search__submit--talk" >
								</div>
							</form>
							
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
import $ from 'jquery'

function timeline_height(flg){
		
	var partsh = $('.p-header').outerHeight() + $('.p-talk__user').outerHeight() + $('.p-form__search').outerHeight();// + $('.p-footer').outerHeight();
	var bh = $('.p-talk--timeline').outerHeight() - $('.p-talk--timeline').innerHeight();//タイムライン のマージン等
	var ch = 50;//外枠のマージン等
	var wh = $(window).innerHeight() - partsh - bh - ch;
	
	$('.p-talk--timeline').css({'min-height':wh+'px','max-height':wh+'px'});
	if(flg==1){
		$('.p-talk--timeline').scrollTop($(window).outerHeight());
	}
}

export default {
  name: 'MessageDetail',
  data(){
	return {
		messageId : this.$route.params.messageId
	}
  },
  beforeCreate(){
	$(window).on('load',function(){
	
		/**talk部分の高さ調整**/
		if($('.p-talk--timeline').length){
			
			timeline_height(1);
			
		}

	});

	$(window).on('resize',function () {
		
		/**talk部分の高さ調整**/
		if($('.p-talk--timeline').length){
			
			timeline_height(1);
			
		}
	});

	$(window).on('scroll',function () {
		
	});

	$(window).on('orientationchange', function(){
		
		/**talk部分の高さ調整**/
		if($('.p-talk--timeline').length){
			
			timeline_height(1);
			
		}
	});


  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false})

	/**talk入力部分の文字量に合わせた入力卵サイズ調整**/
	$('.p-form__search__input--talk').attr('rows', 1).on('input', function() {
		$(this).height(0).innerHeight(this.scrollHeight);
		timeline_height(0);
	});
	/**talk送信**/
	$('.p-form__search__submit--talk').on('click',function(){
		$(this).val('');
		timeline_height(1);			  
	});
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		
		timeline_height(1);
		
	}

	// /**talk入力部分の文字量に合わせた入力卵サイズ調整**/
	// $('.p-form__search__input--talk').attr('rows', 1).on('input', function() {
	// 	$(this).height(0).innerHeight(this.scrollHeight);
	// 	timeline_height();
	// });
	// /**talk送信**/
	// $('.p-form__search__submit--talk').on('click',function(){
	// 	$(this).val('');
	// 	timeline_height();							  
	// });
	
	// /**talk部分の高さ調整**/
	// if($('.p-talk--timeline').length){
	// 	timeline_height();
	// }
	
	// function timeline_height(){
		
	// 	var partsh = $('.p-header').outerHeight() + $('.p-talk__user').outerHeight() + $('.p-form__search').outerHeight() + $('.p-footer').outerHeight();
	// 	var bh = $('.p-talk--timeline').outerHeight() - $('.p-talk--timeline').innerHeight();//タイムライン のマージン等
	// 	var ch = 50;//外枠のマージン等
	// 	var wh = $(window).innerHeight() - partsh - bh - ch;
		
	// 	$('.p-talk--timeline').css({'min-height':wh+'px','max-height':wh+'px'});

	// 	$(".p-talk--timeline").animate({scrollTop:10000}, 1000, 'swing', function() {
	// 		// alert("Finished animating");
	// 	});

	// }

  },
  methods:{
  }
}
</script>
