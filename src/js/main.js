//Swipe Up Btn
(function($) { "use strict";

    $(document).ready(function(){"use strict";
    
            //Scroll back to top
    
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
    
    
        });
    
    })(jQuery);

// Navigation - Overlay
let isNavOpen = false;

function toggleNav() {
    const nav = document.getElementById("myNav");
    const toggleButton = document.getElementById("toggle-button");

    if (isNavOpen) {
        // Close the navigation
        nav.style.height = "0%";
        toggleButton.classList.remove("open");
        document.body.style.overflow = 'auto';
        document.body.style.touchAction = 'auto';
    } else {
        // Open the navigation
        nav.style.height = "calc(100% - 7.5px)";
        toggleButton.classList.add("open");
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    isNavOpen = !isNavOpen; // Toggle the state
}

// Theme Items - Switch  
  const body = document.querySelector('body');
  const btn = document.querySelector('.btn');
  const icon = document.querySelector('.btn__icon');
// Store the mode in local storage
  function store(value) {
    localStorage.setItem('darkmode', value);
  }
// Load the stored mode or fallback to system preference
function load() {
  const darkmode = localStorage.getItem('darkmode');
  if (darkmode === null) {
    // فحص إعدادات الجهاز
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      body.classList.add('darkmode');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.add('fa-sun');
    } store(prefersDark);
    } else if (darkmode === 'true') {
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    } else {
    icon.classList.add('fa-sun');
    }
    toggleMode();
  }
// Change the CSS Variables based on the mode
  function toggleMode() {
    const isDarkMode = body.classList.contains('darkmode');

    if (isDarkMode) {
      // Set dark mode variables
      document.documentElement.style.setProperty('--bg-color', '#0d3642');
      document.documentElement.style.setProperty('--bg-color-2nd', '#145564');
      document.documentElement.style.setProperty('--alternate-color', '#b7cf81');
      document.documentElement.style.setProperty('--light-bg', '#202020');
      document.documentElement.style.setProperty('--dark-bg', '#fff');
      document.documentElement.style.setProperty('--icon-color', '#FFDE59');
      document.documentElement.style.setProperty('--nav-hover', 'rgba(255,255,255, 0.6)');
      document.documentElement.style.setProperty('--content-container', '#3B3B3B');
      document.documentElement.style.setProperty('--carousel-bg', '#939FA7');
      document.documentElement.style.setProperty('--carousel-header', '#ddd');
      document.documentElement.style.setProperty('--carousel-content', '#eee');
    } else {
      // Set light mode variables
      document.documentElement.style.setProperty('--bg-color', '#0d3642');
      document.documentElement.style.setProperty('--bg-color-2nd', '#145564');
      document.documentElement.style.setProperty('--alternate-color', '#b7cf81');
      document.documentElement.style.setProperty('--light-bg', '#fff');
      document.documentElement.style.setProperty('--dark-bg', '#202020');
      document.documentElement.style.setProperty('--icon-color', '#FFDE59');
      document.documentElement.style.setProperty('--nav-hover', 'rgba(0,0,0, 0.6)');
      document.documentElement.style.setProperty('--content-container', '#E7EEEF');
      document.documentElement.style.setProperty('--carousel-bg', '#fff');
      document.documentElement.style.setProperty('--carousel-header', '#333');
      document.documentElement.style.setProperty('--carousel-content', '#666');
    }
  }
  load();
  btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    // Save the current mode
    store(body.classList.contains('darkmode'));

    // Toggle the mode and update the icon
    toggleMode();

    if (body.classList.contains('darkmode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }

    // Remove animation after 500ms
    setTimeout(() => {
      icon.classList.remove('animated');
    }, 500);
  });

  // Load the mode when the page loads
  window.onload = function() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        
        document.body.style.overflow = 'auto';
        document.body.style.touchAction = 'auto';
    }, 2000);
};

// Animaton for Items
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".content-style-preview");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - 75 && rect.bottom > 200;
    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

