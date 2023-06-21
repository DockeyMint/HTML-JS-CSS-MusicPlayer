
window.addEventListener('load', function() {
    
    var m_text=document.querySelector('.m-text');
    var play= document.querySelector('.m-play');
    var m_mp3= document.querySelector('.m-mp3');
    var flag=false;//默认为歌曲未播放，true为播放
    var close=true;
	var index=0;
    var lis=document.querySelectorAll('li');
    
	//点击图片后旋转并播放相应音乐，更改相应信息以及背景
	$(".banner ul li").click(function(){
		index=$(this).index();//获取到序列号
        changebg(index+1);//更改背景的函数
        show();//图片旋转播放相应音乐并改变相应参数的函数

	});
    function changebg(index){//更改背景的函数
        document.body.style.background="url(images/bg"+index+".jpg)no-repeat";
    }
    function show(){//图片旋转播放相应音乐并改变相应参数的函数
        $(".banner ul li").eq(index).addClass("img-rotate").siblings('li').removeClass("img-rotate");//旋转图片
        //改变播放按钮的图片和title
        play.className='m-pause';
        play.title='暂停';
            //更改背景
           changebg(index+1);
           var banner_img=$(".banner ul li").eq(index).find("img").attr("src");
           $(".m-img").find("img").attr("src",banner_img);
           //播放音乐
           var m_src=$(".banner ul li").eq(index).attr("dataSrc");
           $(m_mp3).attr("src",m_src);
           $(m_mp3).get(0).play();
           //更改歌曲名
           var text=$(".banner ul li").eq(index).attr("title");
           m_text.textContent=text;
           flag=true;//当前为播放状态
    }
    //点击播放按钮进行播放或暂停
    $(play).click(function(){
        if(flag){
            $(m_mp3).get(0).pause();
            $(".banner ul li").removeClass("img-rotate");
            play.className='m-play';
            play.title='播放';
            flag=false;
        }
        else{
            $(m_mp3).get(0).play();
            $(".banner ul li").eq(index).addClass("img-rotate").siblings('li').removeClass("img-rotate");
            play.className='m-pause';
            play.title='暂停';
            flag=true;
            changebg(index+1);
        }
    })
    //点击上一首下一首切换歌曲
    $(".m-pre").click(function(){
        index--;
        if(0>index){index=lis.length-1;}
        show();
    })
    $(".m-next").click(function(){
        index++;
        if(lis.length-1<index){index=0;}
        show();
    })
    //
    $(".m-close").click(function(){
        if(close){
           document.getElementById('m_close').style.background="url(images/展开.png)no-repeat";
            $(".music").animate({"left":"-520px"},1000);
            close=false;
        }
        else{
            document.getElementById('m_close').style.background="url(images/收缩.png)no-repeat";
             $(".music").animate({"left":"0px"},1000);
             close=true;
         }
       
    })
 
})