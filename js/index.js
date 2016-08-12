(function($){
//PC
	if($(document).width()>780){
		//nav
		$('.icon').on('click',function(){
			$('#mylay').show(200);
			$(this).animate({right:'23.6%'},300,function(){
				$('.icon').fadeOut(50);	
			})
			setTimeout(function(){
				$('.close').fadeIn(200);
			},600);
			// 导航栏显示
			$('.nav').show();
			setTimeout(function(){
				$('.home').animate({left:'34.83%'},400,function(){
					$('.lianxi').animate({left:'23.77%'},400,function(){
						$('.guanyu').animate({left:'23.77%'},400);
					});
				});				
			},900);
		});

		// 点击后关闭遮罩层
		$('.close').on('click','img',function(){
			$('.nav ul').find('a').css({left:'100%'});
			$('.nav').hide();
			$('.close').fadeOut();
			$('#mylay').hide();
			$('.icon').show();
			$('.icon').animate({right:'2.6%'},500);
		});	
		//企业文化轮播
		var index=0;
		var pic = $('.culture_pic');
		var cul_cont=$('.jiantou_cont');
		var cont=["111111111111111111111","2222222222222222222222222","3333333333333333333333333","444444444444444","55555555555555555555"];
		function lunbo(){
			timer = setInterval(function(){
			pic.eq(index).stop().hide();
			index==pic.length-1 ? index=0:index++; 	
			pic.eq(index).stop().show();
			cul_cont.html(cont[index]);
			},3000);		
		};lunbo();
		//换需要的文字
		
		var jiantouCont=$('.jiantou_cont');
		//点小按钮
		$('.next_jiantou').click(function(){
			index==pic.length-1 ? index=0:index++;
			pic.hide().eq(index).show();
			jiantouCont.html(cont[index]);
		});
		$('.prev_jiantou').click(function(){
			index==0 ? index=pic.length-1:index--;
			pic.hide().eq(index).show();
			jiantouCont.html(cont[index]);
		});
	}
	//移动端
	if($(document).width()<=780){
		//nav
		(function(){
			//打开
			$('.icon').on('click',function(){
				$('#mylay').show(200);
				$(this).animate({right:'23.6%'},300,function(){
					$('.icon').fadeOut(50);	
				})
				setTimeout(function(){
					$('.close').fadeIn(200);
				},600);
				// 导航栏显示
				$('.nav').show();
				setTimeout(function(){
					$('.home').animate({left:'34.83%'},400,function(){
						$('.lianxi').animate({left:'16.2%'},400,function(){
							$('.guanyu').animate({left:'16.2%'},400);
						});	
					});				
				},900);
			});

			// 点击后关闭遮罩层
			$('.close').on('click','img',function(){
				$('.nav ul').find('a').css({left:'100%'});
				$('.nav').hide();
				$('.close').fadeOut();
				$('#mylay').hide();
				$('.icon').show();
				$('.icon').animate({right:'2.6%'},500);
			});			
		})();
		//企业文化，点击切换图片和文字
		(function(){
			//换需要的文字
			var cont=["111111111111111111111","2222222222222222222222222","3333333333333333333333333","444444444444444","55555555555555555555"];
			var jiantouCont=$('.jiantou_cont');
			//点小按钮
			var index=0;
			var pic = $('.culture_carousel>img');
			$('.next_jiantou').click(function(){
				index==pic.length-1 ? index=0:index++;
				pic.hide().eq(index).show();
				jiantouCont.html(cont[index]);
			});
			$('.prev_jiantou').click(function(){
				index==0 ? index=pic.length-1:index--;
				pic.hide().eq(index).show();
				jiantouCont.html(cont[index]);
			});
		})();
		//news轮播
		var index = 0;
		var newspic = $('.newspic');
		var newsbtn = $('.news_btn');
		var timer;
		newsbtn.eq(index).css({
			background:'#000'
		})
		function lunbo(){
			timer = setInterval(function(){
			newspic.eq(index).stop().fadeOut(2000);
			newsbtn.eq(index).css({
				background:'#fff'
			})
			index==newspic.length-1 ? index=0:index++; 	
			newspic.eq(index).stop().fadeIn(2000);
			newsbtn.eq(index).css({
				background:'#000'
			})
			},3000);		
		};lunbo();
		//点击news按钮跳转对应图片
		$('.newsbtn').on('click','.news_btn',function(){
			clearInterval(timer);
			index = $(this).index();
			newspic.stop().fadeOut(2000);
			newsbtn.css({
				background:'#fff'
			})
			newspic.eq(index).stop().fadeIn(2000);
			newsbtn.eq(index).css({
				background:'#000'
			})
			lunbo();
		});
	}
	// 表单验证
	(function(){
		var check = true;
		$('#tel').blur(function(){
			var value = this.value;
			if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/.test(value)){
				$('.tel_tip').html('请填写有效手机号码');
				check = false;
			}else{
				check = true;
			};
		});
		$('#mail').blur(function(){
			var value = this.value;
			if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)){
				$('.mail_tip').html('邮箱不正确');
				check = false;
			}else{
				check = true;
			};
		});	
		$('#submit').click(function(){
			if(!check){
				return false;
			}
		});
	})();	
})(jQuery)