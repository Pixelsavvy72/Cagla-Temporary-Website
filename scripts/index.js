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
// NAVIGATION and PAGES
// --------------------------------
let currentPage;

let topImage = document.getElementById('topImageContainer');
let navbarTop = document.getElementById('navbar-top');
// navbar links
let aboutLink = document.getElementById('about-link');
let servicesLink = document.getElementById('services-link');
let productsLink = document.getElementById('products-link');
let accessLink = document.getElementById('access-link');
let teamLink = document.getElementById('team-link')
// Current link is for language button redirect.
let currentLink;

// ---------- JAPANESE -------------

let aboutPage = document.getElementById('about-jp');
let servicesPage = document.getElementById('services-jp');
let productsPage = document.getElementById('products');
let accessPage = document.getElementById('access-jp');
let teamPage = document.getElementById('team-jp');


// ---------- ENGLISH -------------

let aboutPageEn = document.getElementById('about-en');
let servicesPageEn = document.getElementById('services-en');
let productsPageEn = document.getElementById('products');
let accessPageEn = document.getElementById('access-en');
let teamPageEn = document.getElementById('team-en');




    // --------------------------------
    // LANGUAGE SETTINGS
    // --------------------------------
let langButton = document.getElementById('lang-button');
let currentLang = 0; // default is 0 / japanese

let langButtonText = document.getElementById('button-text');
langButtonText.textContent = "日本語 / English";
langButton.addEventListener('click', () => {
    currentLang === 0 ? langButtonText.textContent = "English" : langButtonText.textContent = "Japanese";

    if(currentPage) {
        
        console.log(currentPage);
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }

    if (currentLang === 0) {
        currentLang = 1;
        document.documentElement.lang = "en-us";
        
    } else {
        currentLang = 0;
        document.documentElement.lang = "jp";
    }
    console.log(currentLang);
    console.log(document.documentElement.lang);

    // Change to update programatically later.
    currentLink.click();
});



topImage.addEventListener('click', () => { 
    if(navbarTop.classList.contains('is-paused')) {
        navbarTop.classList.remove('is-paused');
    }
});

teamLink.addEventListener('click', () => {
    currentLink = teamLink;
    // If a page is open, close it.
    if(currentPage) {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }

    // If the language is not Japanese, add the language    
    if (document.documentElement.lang != "jp") {
        aboutPage.classList.add('en-us');
        currentPage = teamPageEn;
    } else {
        // Otherwise set to default (jp);
        aboutPage.classList.remove(document.documentElement.lang);
        currentPage = teamPage;
    }

    currentPage.removeAttribute('style');

    if (!currentPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }
});

aboutLink.addEventListener('click', () => {
    currentLink = aboutLink;
    // If a page is open, close it.
    if(currentPage) {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }

    // If the language is not Japanese, add the language    
    if (document.documentElement.lang != "jp") {
        aboutPage.classList.add('en-us');
        currentPage = aboutPageEn;
    } else {
        // Otherwise set to default (jp);
        aboutPage.classList.remove(document.documentElement.lang);
        currentPage = aboutPage;
    }

    currentPage.removeAttribute('style');

    if (!currentPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }
});

servicesLink.addEventListener('click', () => {
    currentLink = servicesLink;
    // If a page is open, close it.
    if(currentPage) {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }

    // If the language is not Japanese, add the language    
    if (document.documentElement.lang != "jp") {
        aboutPage.classList.add('en-us');
        currentPage = servicesPageEn;
    } else {
        // Otherwise set to default (jp);
        aboutPage.classList.remove(document.documentElement.lang);
        currentPage = servicesPage;
    }

    currentPage.removeAttribute('style');

    if (!currentPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }
});

productsLink.addEventListener('click', () => {
    currentLink = productsLink;
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
    currentLink = accessLink;
    // If a page is open, close it.
    if(currentPage) {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }

    // If the language is not Japanese, add the language    
    if (document.documentElement.lang != "jp") {
        aboutPage.classList.add('en-us');
        currentPage = accessPageEn;
    } else {
        // Otherwise set to default (jp);
        aboutPage.classList.remove(document.documentElement.lang);
        currentPage = accessPage;
    }

    currentPage.removeAttribute('style');

    if (!currentPage.classList.contains('is-visible')) {
        if(currentPage) {
            currentPage.classList.remove('slide-page-out');
            currentPage.classList.add('slide-page-in');
            currentPage.classList.add('is-visible');
        } else {
            currentPage.classList.remove('slide-page-in');
            currentPage.classList.remove('is-visible');
            currentPage.classList.add('slide-page-out');
            currentPage = null;
        }
    } else {
        currentPage.classList.remove('slide-page-in');
        currentPage.classList.remove('is-visible');
        currentPage.classList.add('slide-page-out');
        currentPage = null;
    }
});
