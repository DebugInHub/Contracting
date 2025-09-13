(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    const customSelect = document.querySelector(".custom-select");
    const selectBtn = document.querySelector(".select-button");
    
    const selectedValue = document.querySelector(".selected-value");
    const optionsList = document.querySelectorAll(".select-dropdown li");
    
    selectBtn.addEventListener("mouseenter", () => {
      customSelect.classList.toggle("active");
      // update the aria-expanded attribute based on the current state
      selectBtn.setAttribute(
        "aria-expanded",
        selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
    });
    

    optionsList.forEach((option) => {
      function handler(e) {
        // Click Events
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
          selectedValue.textContent = this.children[1].textContent;
          customSelect.classList.remove("active");
        }
        // Key Events
        if (e.key === "Enter") {
          selectedValue.textContent = this.textContent;
          customSelect.classList.remove("active");
        }
      }
    
      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    });
    
})(jQuery);

