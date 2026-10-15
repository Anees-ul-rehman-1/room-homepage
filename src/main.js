import desk1 from '/src/assets/images/desktop-image-hero-1.jpg';
import mob1 from '/src/assets/images/mobile-image-hero-1.jpg';
import desk2 from '/src/assets/images/desktop-image-hero-2.jpg';
import mob2 from '/src/assets/images/mobile-image-hero-2.jpg';
import desk3 from '/src/assets/images/desktop-image-hero-3.jpg';
import mob3 from '/src/assets/images/mobile-image-hero-3.jpg';

const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');
const logo = document.querySelector('#logo');
const heroSection = document.querySelector('#heroSection');
const desktopImgSrc = heroSection.querySelector('#desktopImg');
const mobileImgSrc = heroSection.querySelector('#mobileImg');
const slideTitle = heroSection.querySelector('#heading');
const slideDesc = heroSection.querySelector('#description');
const slideRightBtn = heroSection.querySelector('#rightBtn');
const slideLeftBtn = heroSection.querySelector('#leftBtn');
let ariaIsExpanded = false;
let slideIndex = 0;

const slides = [
    {
        srcset: desk1,
        src: mob1,
        heading: "Discover innovative ways to decorate",
        para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style witho our collection and make your property a reflection of you and what you love."
    },
    {
        srcset: desk2,
        src: mob2,
        heading: "We are available all accross the globbe",
        para: "With stores all over the world, it's easy for you to find furniture for you home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question? Don't hesitate to contact us today.",
    },
    {
        srcset: desk3,
        src: mob3,
        heading: "Manufactured with the best materials",
        para: "Our modern furniture store provide a high level of quality. Our company has invented in advanced technology to ensure that every product is made as perfect and as consitant as possible. With three decodes of experience in this industry, we understand what customers want for their home and office.",
    }
]

const navShow = () => {
    navLinks.classList.toggle('translate-y-0');
    navLinks.classList.toggle('invisible');
    if (!ariaIsExpanded) {
        hamburger.setAttribute('aria-expanded', 'true');
        ariaIsExpanded = true;
    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        ariaIsExpanded = false;
    }

    logo.classList.toggle('hidden');
}

const showSlide = () => {
    const currSlide = slides[slideIndex];
    desktopImgSrc.setAttribute('srcset', currSlide.srcset);
    mobileImgSrc.src = currSlide.src;
    slideTitle.textContent = currSlide.heading;
    slideDesc.textContent = currSlide.para;
}

const nextSlide = () => {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlide();
    }
}

const prevSlide = () => {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide();
    }
}

showSlide();
hamburger.addEventListener('click', navShow);
slideLeftBtn.addEventListener('click', prevSlide);
slideRightBtn.addEventListener('click', nextSlide);