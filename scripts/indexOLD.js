// ENGLISH ONLY SYTLING FINISHED

// --------------------------------
// TOP IMAGE
// --------------------------------


//jQuery is required to run this code
$( document ).ready(function() {
    
    scaleVideoContainer();
    
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    
});

function scaleVideoContainer() {
    
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
    
}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
    
}

function scaleBannerVideoSize(element){
    
    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;
    
    // console.log(windowHeight);
    
    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');
        
        $(this).width(windowWidth);
        
        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
            
            $(this).width(videoWidth).height(videoHeight);
        }
        
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        
    });
}
 
// --------------------------------
// LANGUAGE SETTINGS
// --------------------------------
let langButton = document.getElementById('lang-button');
let currentLang = 0; // default is 0 / japanese

langButton.addEventListener('click', () => {
    currentLang = (currentLang === 0) ? 1 : 0;
});






// --------------------------------
// NAVIGATION and PAGES
// --------------------------------

let topImage = document.getElementById('topImageContainer');
let navbarTop = document.getElementById('navbar-top');
// navbar links
let aboutLink = document.getElementById('about-link');
let servicesLink = document.getElementById('services-link');
let productsLink = document.getElementById('products-link');
let accessLink = document.getElementById('access-link');
let teamLink = document.getElementById('team-link')


// ---------- JAPANESE -------------

let aboutPage = document.getElementById('about-jp');
let servicesPage = document.getElementById('services');
let productsPage = document.getElementById('products');
let accessPage = document.getElementById('access');
let teamPage = document.getElementById('team');


// ---------- ENGLISH -------------

let aboutPageEn = document.getElementById('about-en');
let servicesPageEn = document.getElementById('services');
let productsPageEn = document.getElementById('products');
let accessPageEn = document.getElementById('access');
let teamPageEn = document.getElementById('team');




let currentPage;


topImage.addEventListener('click', () => { 
    if(navbarTop.classList.contains('is-paused')) {
        navbarTop.classList.remove('is-paused');
    }
});

teamLink.addEventListener('click', () => {
    
    // Remove display:none;
    teamPage.removeAttribute('style');

    
    if (!teamPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
        currentPage = teamPage;
        currentPage.classList.remove('slide-page-out');
        currentPage.classList.add('slide-page-in');
        currentPage.classList.add('is-visible');
        currentPage = teamPage;
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;

    }

 
});

aboutLink.addEventListener('click', () => {
    if (currentLang === 0) {
        aboutPage.removeAttribute('style');
    
        if (!aboutPage.classList.contains('is-visible')) {
            if(currentPage) {
                currentPage.classList.remove('slide-page-in');
                currentPage.classList.remove('is-visible');
                currentPage.classList.add('slide-page-out');
                currentPage = null;
            }
            currentPage = aboutPage;
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
            currentPage = aboutPage;
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
    
        }
    } else {
        aboutPageEn.removeAttribute('style');    
        if (!aboutPageEn.classList.contains('is-visible')) {
            if(currentPage) {
                currentPage.classList.remove('slide-page-in');
                currentPage.classList.remove('is-visible');
                currentPage.classList.add('slide-page-out');
                currentPage = null;
            }
            currentPage = aboutPageEn;
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
            currentPage = aboutPageEn;
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
    
        }
    }
});

servicesLink.addEventListener('click', () => {
    servicesPage.removeAttribute('style');

    if (!servicesPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
        currentPage = servicesPage;
        currentPage.classList.remove('slide-page-out');
        currentPage.classList.add('slide-page-in');
        currentPage.classList.add('is-visible');
        currentPage = servicesPage;
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;

    }
});

productsLink.addEventListener('click', () => {
    productsPage.removeAttribute('style');

    if (!productsPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
        currentPage = productsPage;
        currentPage.classList.remove('slide-page-out');
        currentPage.classList.add('slide-page-in');
        currentPage.classList.add('is-visible');
        currentPage = productsPage;
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;

    }
});

accessLink.addEventListener('click', () => {
    accessPage.removeAttribute('style');

    if (!accessPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
        currentPage = accessPage;
        currentPage.classList.remove('slide-page-out');
        currentPage.classList.add('slide-page-in');
        currentPage.classList.add('is-visible');
        currentPage = accessPage;
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;

    }
});
