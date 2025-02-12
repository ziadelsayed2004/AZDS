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
// Switch Vars
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
      document.documentElement.style.setProperty('--content-container', '#939FA7');
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
    }, 2500);
};

// Animaton For Items
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
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".div-l-style-preview");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - 25 && rect.bottom > 150;
    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".div-r-style-preview");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - 25 && rect.bottom > 150;
    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".section-title");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - 50 && rect.bottom > 165;
    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".whatsapp-float").classList.add("show");
  } else {
    document.querySelector(".whatsapp-float").classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const elements = document.querySelectorAll(".about-l-style-preview");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight - 25 && rect.bottom > 150;
    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  }, 2750);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const elements = document.querySelectorAll(".about-r-style-preview");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight - 25 && rect.bottom > 150;
      if (isVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }, 2750);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const elements = document.querySelectorAll(".about-title");

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight - 50 && rect.bottom > 165;
      if (isVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }, 2750);
});


// Dynamic VH
function calculateDynamicVH() {
  const visualViewport = window.visualViewport;
  if (visualViewport) {
    return visualViewport.height / window.innerHeight * 100;
  }
  return 100; 
}
function updateVHUnit() {
  const dynamicVH = calculateDynamicVH();
  document.documentElement.style.setProperty('--vh', `${dynamicVH}vh`);
}
updateVHUnit();
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', updateVHUnit);
} else {
  window.addEventListener('resize', updateVHUnit);
}

// Quick Btn
function getAdjustedScrollOffset(targetElement) {
  const visualViewport = window.visualViewport;
  const visualHeight = visualViewport ? visualViewport.height : window.innerHeight;
  const topOffset = document.querySelector('header')?.offsetHeight || 0;
  const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
  return elementTop - topOffset;
}
function scrollToSection(targetId) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  const visualViewport = window.visualViewport;
  const scrollHandler = () => {
    const newOffset = getAdjustedScrollOffset(targetElement);
    window.scrollTo({
      top: newOffset,
      behavior: 'smooth',
    });
  };
  scrollHandler();
  if (visualViewport) {
    visualViewport.addEventListener('resize', scrollHandler, { once: true });
  }
}

// Contact Form
$(function () {
  "use strict";

  // Validation flags
  var userError = true;
  var emailError = true;
  var phoneError = true;
  var messageError = true;

  // Show alert box and add red border to the input field
  function showAlert(element) {
      element.siblings(".alert-box").fadeIn(200); // Show alert
      element.css("border", "2px solid #f00"); // Add red border to the input field
  }

  // Hide alert box and reset border of the input field
  function hideAlert(element) {
      element.siblings(".alert-box").fadeOut(200); // Hide alert
      element.css("border", "2px solid #080"); // Add green border to the input field
  }

  // Username validation
  $('input[name="username"]').blur(function () {
      if ($(this).val().length < 3) {
          showAlert($(this));
          userError = true;
      } else {
          hideAlert($(this));
          userError = false;
      }
  });

  // Email validation
  $('input[name="email"]').blur(function () {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test($(this).val())) {
          showAlert($(this));
          emailError = true;
      } else {
          hideAlert($(this));
          emailError = false;
      }
  });

  // Phone validation
  $('input[name="phone"]').blur(function () {
      var phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test($(this).val())) {
          showAlert($(this));
          phoneError = true;
      } else {
          hideAlert($(this));
          phoneError = false;
      }
  });

  // Message validation
  $('textarea[name="Message"]').blur(function () {
      if ($(this).val().length < 10) {
          showAlert($(this));
          messageError = true;
      } else {
          hideAlert($(this));
          messageError = false;
      }
  });

  // Close alert on "X" click
  $(".close-alert").click(function () {
      $(this).parent(".alert-box").fadeOut(200);
      $(this).closest(".alert-box").siblings("input, textarea").css("border", "1px solid #ccc"); // Reset border to default
  });

  // Form submission validation
  $(".contact-form").submit(function (e) {
      if (userError || emailError || phoneError || messageError) {
          e.preventDefault();
          $('input, textarea').blur(); // Trigger blur events for validation
      }
  });
});