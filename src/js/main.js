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
function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("progress-wrap").style.visibility = "hidden";        
  }
function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("progress-wrap").style.visibility = "visible";        
  }
  document.querySelector('.overlay').addEventListener('wheel', function(event) {
    event.preventDefault();
  }, { passive: false });

// Theme Items - Switch  
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
// Store the mode in local storage
function store(value) {
  localStorage.setItem('lightmod', value);
}
// Load the stored mode
function load() {
  const darkmode = localStorage.getItem('darkmode');

  // Default to light mode if no preference is stored
  if (!darkmode) {
    store(false);
    icon.classList.add('fa-sun');
  } else if (darkmode === 'true') {
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.add('fa-sun');
  }
}
// Change the CSS Variables based on the mode
function toggleMode() {
  const isDarkMode = body.classList.contains('darkmode');
  
  if (isDarkMode) {
    // Set dark mode variables
    document.documentElement.style.setProperty('--bg-color', '#0d3642');
    document.documentElement.style.setProperty('--bg-color-2nd', '#145564');
    document.documentElement.style.setProperty('--alternate-color', '#b7cf81');
    document.documentElement.style.setProperty('--light-bg', '#000');
    document.documentElement.style.setProperty('--dark-bg', '#fff');
    document.documentElement.style.setProperty('--icon-color', '#FFDE59');
    document.documentElement.style.setProperty('--nav-hover', 'rgba(255,255,255, 0.6)');
    document.documentElement.style.setProperty('--content-container', '#5A5E5EFF');
  } else {
    // Set light mode variables
    document.documentElement.style.setProperty('--bg-color', '#0d3642');
    document.documentElement.style.setProperty('--bg-color-2nd', '#145564');
    document.documentElement.style.setProperty('--alternate-color', '#b7cf81');
    document.documentElement.style.setProperty('--light-bg', '#fff');
    document.documentElement.style.setProperty('--dark-bg', '#000');
    document.documentElement.style.setProperty('--icon-color', '#FFDE59');
    document.documentElement.style.setProperty('--nav-hover', 'rgba(0,0,0, 0.6)');
    document.documentElement.style.setProperty('--content-container', '#E7EEEF');
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
