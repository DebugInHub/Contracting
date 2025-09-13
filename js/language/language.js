import translations from "./translation.js";

const team_text = document.querySelectorAll(".team-text");
const testimonial_item = document.querySelectorAll(".testimonial-item");
const owl_nav = document.querySelectorAll(".owl-nav");
const floating_label = document.querySelectorAll(".form-floating>label");
const end_0 = document.querySelectorAll(".end-0");

document.addEventListener("DOMContentLoaded", function() {

    const radioButtons = document.querySelectorAll('input[name="lang"]');

    let storedLang = localStorage.getItem("lang");
    if (storedLang === null) {
        storedLang = "ar";
        localStorage.setItem("lang", storedLang);
    }

    const updateRadioButtons = () => {
        radioButtons.forEach((radioButton) => {
            radioButton.checked = radioButton.value === storedLang;
        });
    };
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", (event) => {
            const newLang = event.target.value;
            localStorage.setItem("lang", newLang);
            setLanguage(newLang);
            window.location.reload();
        });
    });

    updateRadioButtons();
    setLanguage(storedLang);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-lang');
        element.textContent = translations[language][translationKey];
    });

    if (language === "ar") {
        document.dir = "rtl";
        team_text.forEach((text) => {
            text.classList.add('right_0');
            text.classList.remove('left_0');
        });
        testimonial_item.forEach((item) => {
            item.classList.add('testimonial-item_right');
            item.classList.remove('testimonial-item_left');
        });
        owl_nav.forEach((item) => {
            item.classList.add('justify_content_start');
            item.classList.remove('justify_content_end');
        });
        floating_label.forEach((label) => {
            label.classList.remove('left_0');
            label.classList.add('right_0');
        });
        
        end_0.forEach((label) => {
            label.classList.remove('end-0');
            label.classList.add('start-0');
        });

    } else if (language === "en") {
        document.dir = "ltr";
        team_text.forEach((text) => {
            text.classList.add('left_0');
            text.classList.remove('right_0');
        });
        testimonial_item.forEach((item) => {
            item.classList.add('testimonial-item_left');
            item.classList.remove('testimonial-item_right');
        });
        owl_nav.forEach((item) => {
            item.classList.add('justify_content_end');
            item.classList.remove('justify_content_start');
        });
        floating_label.forEach((label) => {
            label.classList.add('left_0');
            label.classList.remove('right_0');
        });

        end_0.forEach((label) => {
            label.classList.add('end-0');
            label.classList.remove('start-0');
        });
    }
    
};
