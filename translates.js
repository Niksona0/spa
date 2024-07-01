const translations = {
  en: {
    hometext: "Home",
    about: "About",
    service: "Service",
    masseuse: "masseuse",
    contact: "Contact",
  },
  el: {
    hometext: "Σπίτι",
    about: "σχετικά με",
    service: "Υπηρεσίες",
    masseuse: "μασέρ",
    contact: "Επικοινωνία",
  }
};

const switchLanguage = (lang) => {
  console.log(`Switching to language: ${lang}`);
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
};

const changeLanguage = (event) => {
  const selectedLanguage = event.target.getAttribute('data-lang')
  switchLanguage(selectedLanguage);
};

const flagsContainer = document.querySelector('.flags');
flagsContainer.addEventListener('click', changeLanguage);

window.onload = () => {
  console.log('Setting default language to English');
  switchLanguage('en');
};

