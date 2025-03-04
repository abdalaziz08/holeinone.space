let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // حساب الفهرس التالي للصور
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const carousel = document.querySelector('.carousel');
    
    // تحريك الكاروسيل إلى الصورة الحالية باستخدام translateX
    carousel.style.transition = 'transform 0.5s ease-in-out'; // تأكيد إضافة التأثير عند التحريك
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// عند تحميل الصفحة، سيتم عرض الصورة الأولى
window.onload = function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const carousel = document.querySelector('.carousel');
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// تنقل تلقائي بين الصور
setInterval(() => {
    moveSlide(1); // تتحرك الصور تلقائيًا
}, 3000); // كل 3 ثوانٍ
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".form-container");
    const registerForm = document.getElementById("registerForm");
    const toggleRegister = document.getElementById("toggleRegister");
    const toggleLogin = document.getElementById("toggleLogin");

    toggleRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    toggleLogin.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
});




