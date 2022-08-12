window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
        document.getElementById('navbar-to').style.backgroundColor = "#FFFF";
        document.getElementById('link-1').style.color = "#C80048";
        document.getElementById('link-2').style.color = "#C80048";
        document.getElementById('link-3').style.color = "#C80048";
        document.getElementById('link-4').style.color = "#C80048";
        document.getElementById('link-5').style.color = "#C80048";
		  document.getElementById('img-logo').src = '../assets/images/svg/logo-black.svg';
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
		  document.getElementById('navbar-to').style.backgroundColor = "#FFFF";
      document.getElementById('link-1').style.color = "#FFFF";
        document.getElementById('link-2').style.color = "#FFFF";
        document.getElementById('link-3').style.color = "#FFFF";
        document.getElementById('link-4').style.color = "#FFFF";
        document.getElementById('link-5').style.color = "#FFFF";
		  document.getElementById('img-logo').src = '../assets/images/svg/logo-white.svg';
    }
}

// AOS
AOS.init({
    duration: 800,
});

/*---------------------------------
[Master Javascript]

Project: Music

-------------------------------------------------------------------*/

/* let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
    document.getElementById('img-logo').src = '../images/svg/logo-dark.svg';
  } else {
    document.querySelector('.header').classList.remove('active');
    document.getElementById('img-logo').src = '../images/svg/logo-white.svg';
  }
} */

$('.home_slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	singleItem:true,
	autoplay:true,
	autoplayTimeout:6000,
	autoplaySpeed:1000,
	smartSpeed:1500,
	dots:false,
	nav:false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1        
		},
		600:{
			items:1
		},
		768:{
			items:1
		},
		1000:{
			items:1
		}
	},
	animateIn:'slideup',
	animateOut:'slidedown',
	touchDrag:false,
	mouseDrag:false,
});

popupWhatsApp = () => {

   let btnClosePopup = document.querySelector('.closePopup');
   let btnOpenPopup = document.querySelector('.whatsapp-button');
   let popup = document.querySelector('.popup-whatsapp');
   let sendBtn = document.getElementById('send-btn');

   btnClosePopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
   })

   btnOpenPopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
   })

   sendBtn.addEventListener("click", () => {
      let msg = document.getElementById('whats-in').value;
      let relmsg = msg.replace(/ /g, "%20");
      //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
      window.open('https://wa.me/573203528598?text=' + relmsg, '_blank');

   });

   /* Open pop-up in 15 seconds */
   /* setTimeout(() => {
     popup.classList.toggle('is-active-whatsapp-popup');
   }, 8000); */

}

popupWhatsApp();