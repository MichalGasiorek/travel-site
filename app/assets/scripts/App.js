import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();

const features = document.querySelectorAll('.feature-item');
const revealFeatures = new RevealOnScroll(features, "85%");

const testimonials = document.querySelectorAll('.testimonial')
const revealTestimonials = new RevealOnScroll(testimonials, "60%");