$(document).ready(function(){$(window).scroll(function(){if(this.scrollY>20){$('.navbar').addClass("sticky");}else{$('.navbar').removeClass("sticky");}
if(this.scrollY>500){$('.scroll-up-btn').addClass("show");}else{$('.scroll-up-btn').removeClass("show");}});$('.scroll-up-btn').click(function(){$('html').animate({scrollTop:0});$('html').css("scrollBehavior","auto");});$('.navbar .menu li a').click(function(){$('html').css("scrollBehavior","smooth");});$('.menu-btn').click(function(){$('.navbar .menu').toggleClass("active");$('.menu-btn i').toggleClass("active");});var typed=new Typed(".typing",{strings:["an Electrical Engineering Undergraduate @GITM.","exploring Full Stack Web Developement.","an Automation Engineer.","a Constant Learner."],typeSpeed:40,backSpeed:25,loop:true});var typed=new Typed(".typing-2",{strings:["YouTuber","Developer","Blogger","Designer","Freelancer"],typeSpeed:100,backSpeed:60,loop:true});$('.carousel').owlCarousel({margin:20,loop:true,autoplay:true,autoplayTimeOut:2000,autoplayHoverPause:true,responsive:{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:3,nav:false}}});});const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');const header=document.querySelector('.header.container');hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');mobile_menu.classList.toggle('active');});document.addEventListener('scroll',()=>{var scroll_position=window.scrollY;if(scroll_position>250){header.style.backgroundColor='#29323c';}else{header.style.backgroundColor='transparent';}});menu_item.forEach((item)=>{item.addEventListener('click',()=>{hamburger.classList.toggle('active');mobile_menu.classList.toggle('active');});});var TxtRotate=function(el,toRotate,period){this.toRotate=toRotate;this.el=el;this.loopNum=0;this.period=parseInt(period,10)||2000;this.txt='';this.tick();this.isDeleting=false;};TxtRotate.prototype.tick=function(){var i=this.loopNum%this.toRotate.length;var fullTxt=this.toRotate[i];if(this.isDeleting){this.txt=fullTxt.substring(0,this.txt.length-1);}else{this.txt=fullTxt.substring(0,this.txt.length+1);}
this.el.innerHTML='<span class="wrap">'+this.txt+'</span>';var that=this;var delta=100-Math.random()*100;if(this.isDeleting){delta/=2;}
if(!this.isDeleting&&this.txt===fullTxt){delta=this.period;this.isDeleting=true;}else if(this.isDeleting&&this.txt===''){this.isDeleting=false;this.loopNum++;delta=300;}
setTimeout(function(){that.tick();},delta);};window.onload=function(){var elements=document.getElementsByClassName('txt-rotate');for(var i=0;i<elements.length;i++){var toRotate=elements[i].getAttribute('data-rotate');var period=elements[i].getAttribute('data-period');if(toRotate){new TxtRotate(elements[i],JSON.parse(toRotate),period);}}
var css=document.createElement("style");css.type="text/css";css.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }";document.body.appendChild(css);};