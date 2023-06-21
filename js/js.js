window.addEventListener('load', function() {

    var banner = document.querySelector('.banner');
    var music = document.querySelector('.music');
    var touxiang=document.querySelector('.touxiang');
    var text=document.querySelector('.m-text');
    var btn= document.querySelector('.m-btn');
    var pre= document.querySelector('.m-pre');
    var play= document.querySelector('.m-play');
    var tu1 = document.querySelector('.tu1'); 
    var tu2 = document.querySelector('.tu2'); 
    var tu3 = document.querySelector('.tu3'); 
    var tu4 = document.querySelector('.tu4'); 
    var tu5 = document.querySelector('.tu5'); 
    var ul= document.querySelector('.ul')
   //   for (var i = 0; i < lis.length; i++) {
    //    lis[i].addEventListener('click', function() {
            //document.body.style.backgroundImage="url(images/bg'+i+'.jpg)";
   //         document.body.style.backgroundImage="url(images/'+i+'bg.jpg)";
    //    });
   //    }

   //点击li更改背景图片，更改头像与文本，图片旋转
    tu1.addEventListener('click', function() {
        document.body.style.background="url(images/bg1.jpg)no-repeat";
        touxiang.src='images/1.jpg';
        text.textContent=this.title;
        change_btn();
        clear_rotate();
        this.classList.add("img-rotate");
        
        
    });
    tu2.addEventListener('click', function() {
        document.body.style.background="url(images/bg2.jpg)no-repeat";
       touxiang.src='images/2.jpg';
       text.textContent=this.title;
       change_btn();
       clear_rotate();
       this.classList.add("img-rotate");
       
    });
    tu3.addEventListener('click', function() {
        document.body.style.background="url(images/bg3.jpg)no-repeat";
        touxiang.src='images/3.jpg';
        text.textContent=this.title;
        change_btn();
        clear_rotate();
       this.classList.add("img-rotate");
    });
    tu4.addEventListener('click', function() {
        document.body.style.background="url(images/bg4.jpg)no-repeat";
        touxiang.src='images/4.jpeg';
        text.textContent=this.title;
        change_btn();
        clear_rotate();
       this.classList.add("img-rotate");
    });
    tu5.addEventListener('click', function() {
        document.body.style.background="url(images/bg5.jpg)no-repeat";
        touxiang.src='images/5.jpeg';
        text.textContent=this.title;
        change_btn();
        clear_rotate();
       this.classList.add("img-rotate");
    });

     //暂停与播放按钮切换的函数
    function change_btn(){
     play.className='m-pause';
      play.title='暂停';
    }

  //图片旋转的函数
  function clear_rotate(){
      tu1.classList.remove("img-rotate");
      tu2.classList.remove("img-rotate");
      tu3.classList.remove("img-rotate");
      tu4.classList.remove("img-rotate");
      tu5.classList.remove("img-rotate");
   }
  



})



