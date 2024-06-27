
function changeAboutMeText(){
    const aboutMeTexts = ["an Engineering Student","a Web Developer","a Tech Enthusiast", "a Quick Learner", "a Coder", "a Team Player."];
    const typingSpeed = 100;//millisec per char
    const eraseSpeed = 50;//millisec per char during erasing
    const pausetime = 1500;//millisec to pause each text change
const aboutMeElement = document.querySelector('.about-me');

let testIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){
    const currentText = aboutMeTexts[testIndex];
    /*typing*/
    if(!isDeleting && charIndex < currentText.length){
        aboutMeElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(type, typingSpeed);
    }
    /*Erasing*/
    else if (isDeleting && charIndex > 0){
        aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, eraseSpeed);
    }
    /*Switching the deleting or typing process*/
    else{
        isDeleting = !isDeleting;
        if(!isDeleting){
            testIndex = (testIndex + 1) % aboutMeTexts.length;
        }
        setTimeout(type, pausetime);
    }
}
type();
}

changeAboutMeText();


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;

                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated');
            } else {
                const progressBar = entry.target.querySelector('.progress-bar');
                progressBar.classList.remove('animated');
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
      darkModeToggle.querySelector('i').classList.toggle('fa-sun');
      darkModeToggle.querySelector('i').classList.toggle('fa-moon');
      darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
  
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  });

  // Get the "Contact Me" link and the contact form section
const contactLink = document.querySelector('.nav-menu a[href="#contact-form"]');
const contactSection = document.getElementById('contact-form', 'contact-me');
// Add a click event listener to the "Contact Me" link
contactLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Smooth scroll to the contact form section
  contactSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  });