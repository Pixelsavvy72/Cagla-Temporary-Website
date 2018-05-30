'use strict';

// ENGLISH ONLY SYTLING FINISHED

// --------------------------------
// TOP IMAGE
// --------------------------------


//jQuery is required to run this code
$(document).ready(function () {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
}

// --------------------------------
// NAVIGATION and PAGES
// --------------------------------
var currentPage = void 0;

var topImage = document.getElementById('topImageContainer');
var navbarTop = document.getElementById('navbar-top');
// navbar links
var aboutLink = document.getElementById('about-link');
var servicesLink = document.getElementById('services-link');
var productsLink = document.getElementById('products-link');
var accessLink = document.getElementById('access-link');
var teamLink = document.getElementById('team-link');
// Current link is for language button redirect.
var currentLink = void 0;

// ---------- JAPANESE -------------

var aboutPage = document.getElementById('about-jp');
var servicesPage = document.getElementById('services-jp');
var productsPage = document.getElementById('products');
var accessPage = document.getElementById('access-jp');
var teamPage = document.getElementById('team-jp');

// ---------- ENGLISH -------------

var aboutPageEn = document.getElementById('about-en');
var servicesPageEn = document.getElementById('services-en');
var productsPageEn = document.getElementById('products');
var accessPageEn = document.getElementById('access-en');
var teamPageEn = document.getElementById('team-en');

// --------------------------------
// LANGUAGE SETTINGS
// --------------------------------
var langButton = document.getElementById('lang-button');
var currentLang = 0; // default is 0 / japanese

var langButtonText = document.getElementById('button-text');
langButtonText.textContent = "日本語 / English";
langButton.addEventListener('click', function () {
    currentLang === 0 ? langButtonText.textContent = "English" : langButtonText.textContent = "日本語";

    if (currentPage) {

        console.log(currentPage);
        currentPage.classList.remove(removeSlideClasses());
        currentPage.classList.remove('is-visible');
        currentPage.classList.add(getRandomDirection());
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

topImage.addEventListener('click', function () {
    if (navbarTop.classList.contains('is-paused')) {
        navbarTop.classList.remove('is-paused');
    }
});

// teamLink.addEventListener('click', () => {
//     currentLink = teamLink;
//     // If a page is open, close it.
//     if(currentPage) {
//         currentPage.classList.remove('slide-page-in');
//         currentPage.classList.remove('is-visible');
//         currentPage.classList.add('slide-page-out');
//         currentPage = null;
//     }

//     // If the language is not Japanese, add the language    
//     if (document.documentElement.lang != "jp") {
//         aboutPage.classList.add('en-us');
//         currentPage = teamPageEn;
//     } else {
//         // Otherwise set to default (jp);
//         aboutPage.classList.remove(document.documentElement.lang);
//         currentPage = teamPage;
//     }

//     currentPage.removeAttribute('style');

//     if (!currentPage.classList.contains('is-visible')) {
//         if(currentPage) {
//             currentPage.classList.remove('slide-page-out');
//             currentPage.classList.add('slide-page-in');
//             currentPage.classList.add('is-visible');
//         } else {
//             currentPage.classList.remove('slide-page-in');
//             currentPage.classList.remove('is-visible');
//             currentPage.classList.add('slide-page-out');
//             currentPage = null;
//         }
//     } else {
//         currentPage.classList.remove('slide-page-in');
//         currentPage.classList.remove('is-visible');
//         currentPage.classList.add('slide-page-out');
//         currentPage = null;
//     }
// });

// Adjustments can be made to the following two RANDOM functions to control direction and
// flow of the pages.

var getRandomDirectionIN = function getRandomDirectionIN() {
    var randomNumber = Math.random() * 10 + 1;
    if (randomNumber >= 0 && randomNumber <= 2.5) {
        console.log('sliding page right in');
        return 'slide-page-right-in';
    } else if (randomNumber > 2.5 && randomNumber <= 5) {
        console.log('sliding page down in');
        return 'slide-page-down-in';
    } else if (randomNumber > 5 && randomNumber <= 7.5) {
        console.log('sliding page left in');
        return 'slide-page-left-in';
    } else {
        console.log('sliding page up in');
        return 'slide-page-up-in';
    }
};

var getRandomDirectionOUT = function getRandomDirectionOUT() {
    var randomNumber = Math.random() * 10 + 1;
    if (randomNumber >= 0 && randomNumber <= 2.5) {
        console.log('sliding page right out');
        return 'slide-page-right-out';
    } else if (randomNumber > 2.5 && randomNumber <= 5) {
        console.log('sliding page down out');
        return 'slide-page-down-out';
    } else if (randomNumber > 5 && randomNumber <= 7.5) {
        console.log('sliding page left out');
        return 'slide-page-left-out';
    } else {
        console.log('sliding page up out');
        return 'slide-page-up-out';
    }
};

var removeSlideClasses = function removeSlideClasses(pageName) {
    if (pageName.classList.contains('slide-page-in')) {
        pageName.classList.remove('slide-page-in');
    } else if (pageName.classList.contains('slide-page-out')) {
        pageName.classList.remove('slide-page-out');
    } else if (pageName.classList.contains('slide-page-up-in')) {
        pageName.classList.remove('slide-page-up-in');
    } else if (pageName.classList.contains('slide-page-down-in')) {
        pageName.classList.remove('slide-page-down-in');
    } else if (pageName.classList.contains('slide-page-left-in')) {
        pageName.classList.remove('slide-page-left-in');
    } else if (pageName.classList.contains('slide-page-right-in')) {
        pageName.classList.remove('slide-page-right-in');
    } else if (pageName.classList.contains('slide-page-up-out')) {
        pageName.classList.remove('slide-page-up-out');
    } else if (pageName.classList.contains('slide-page-down-out')) {
        pageName.classList.remove('slide-page-down-out');
    } else if (pageName.classList.contains('slide-page-left-out')) {
        pageName.classList.remove('slide-page-left-out');
    } else if (pageName.classList.contains('slide-page-right-out')) {
        pageName.classList.remove('slide-page-right-out');
    }
};

aboutLink.addEventListener('click', function () {
    currentLink = aboutLink;
    // If a page is open, close it by removing slide classes and set no current page.
    if (currentPage) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage.classList.remove('is-visible');
        currentPage = null;
    }

    // If the language is not Japanese, add the language 
    // SET THIS PAGE AS CURRENT PAGE HERE   
    if (document.documentElement.lang != "jp") {
        aboutPage.classList.add('en-us');
        currentPage = aboutPageEn;
    } else {
        // Otherwise set to default (jp);
        aboutPage.classList.remove(document.documentElement.lang);
        currentPage = aboutPage;
    }

    // Make page visible
    currentPage.removeAttribute('style');

    // If the page isn't visible, remove any slide classes, make it visible, and slide it in.
    if (!currentPage.classList.contains('is-visible')) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionIN());
        currentPage.classList.add('is-visible');
    } else {
        removeSlideClasses();
        currentPage.classList.remove('is-visible');
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage = null;
    }
});

servicesLink.addEventListener('click', function () {
    currentLink = servicesLink;
    // If a page is open, close it.
    if (currentPage) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage.classList.remove('is-visible');
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

    // Make page visible
    currentPage.removeAttribute('style');

    // If the page isn't visible, remove any slide classes, make it visible, and slide it in.
    if (!currentPage.classList.contains('is-visible')) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionIN());
        currentPage.classList.add('is-visible');
    } else {
        removeSlideClasses();
        currentPage.classList.remove('is-visible');
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage = null;
    }
});

accessLink.addEventListener('click', function () {
    currentLink = accessLink;
    // If a page is open, close it by removing slide classes and set no current page.
    if (currentPage) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage.classList.remove('is-visible');
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

    // Make page visible
    currentPage.removeAttribute('style');

    // If the page isn't visible, remove any slide classes, make it visible, and slide it in.
    if (!currentPage.classList.contains('is-visible')) {
        removeSlideClasses(currentPage);
        currentPage.classList.add(getRandomDirectionIN());
        currentPage.classList.add('is-visible');
    } else {
        removeSlideClasses();
        currentPage.classList.remove('is-visible');
        currentPage.classList.add(getRandomDirectionOUT());
        currentPage = null;
    }
});

// productsLink.addEventListener('click', () => {
//     currentLink = productsLink;
//     productsPage.removeAttribute('style');

//     if (!productsPage.classList.contains('is-visible')) {
//         if(currentPage) {
//             currentPage.classList.remove('slide-page-in');
//             currentPage.classList.remove('is-visible');
//             currentPage.classList.add('slide-page-out');
//             currentPage = null;
//         }
//         currentPage = productsPage;
//         currentPage.classList.remove('slide-page-out');
//         currentPage.classList.add('slide-page-in');
//         currentPage.classList.add('is-visible');
//         currentPage = productsPage;
//     } else {
//         currentPage.classList.remove('slide-page-in');
//         currentPage.classList.remove('is-visible');
//         currentPage.classList.add('slide-page-out');
//         currentPage = null;

//     }
// });