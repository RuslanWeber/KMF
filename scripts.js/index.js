const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const headMenu = document.getElementById('header__menu');


burger.addEventListener('click', () => {
    headMenu.classList.toggle('open');
    burger.classList.toggle('open');
    // if (headMenu.style.display === "none" || headMenu.style.display === "") {
    //     headMenu.style.display = "flex";
    // } else {
    //     headMenu.style.display = "none";
    // }
});

// Список доступных языков
const languages = ["Рус", "Каз"];
// Получаем элементы
const dropdown = document.getElementById('dropdown');
const toggleButton = document.getElementById('toggleButton');
const altLangLink = document.getElementById('altLangLink');

// Индекс текущего языка
let currentLanguageIndex = 0;

// Обработчик клика на кнопку
toggleButton.addEventListener('click', () => {
    dropdown.classList.toggle('open');
    dropdown.style.color = '#F7EEE8';
});

// Обработчик клика на ссылку
altLangLink.addEventListener('click', (event) => {
    event.preventDefault();

    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    const selectedLang = languages[currentLanguageIndex];
    const alternativeLang = languages[(currentLanguageIndex + 1) % languages.length];

    // Обновляем текст кнопки и альтернативного языка
    toggleButton.firstChild.textContent = selectedLang;
    altLangLink.textContent = alternativeLang;

    // Закрываем список
    dropdown.classList.remove('open');
});

// Закрытие при клике вне списка
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        dropdown.style.color = '#F6EEE8';
    }
});

/////////////////////////////меню сайта//////////////////////////////////////
const buttonNav = document.getElementById('buttonNav');
const hiddenNav = document.getElementById('hidden__nav');
console.log(buttonNav);
console.log(hiddenNav);
buttonNav.addEventListener('click', () => {
    buttonNav.classList.toggle('open');
    hiddenNav.classList.toggle('open');
});
buttonNav.addEventListener('mouseover', () => {
    buttonNav.style.color = '#9D097C';
});
buttonNav.addEventListener('mouseout', () => {
    buttonNav.style.color = 'black';
});

// ////////////////////////////////slider////////////////////////////////////////
// const prevButton = document.querySelector('.slider-prev');
// const nextButton = document.querySelector('.slider-next');
// const sliderItems = document.querySelectorAll('.slider-item');
// const paginationDots = document.querySelectorAll('.slider-pagination button');
// let currentIndex = 0;

// function showSlide(index) {
//     if (index >= sliderItems.length) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = sliderItems.length - 1;
//     }

//     const offset = -currentIndex * 100;
//     sliderItems.forEach(item => {
//         item.style.transform = `translateX(${offset}%)`;
//         item.style.borderRadius = `40px`;
//     });

//     // Обновляем активную точку
//     paginationDots.forEach(dot => { 
//         dot.classList.remove('active');
//         dot.classList.add('dot');
//     });
//     paginationDots[currentIndex].classList.add('active');
// }

// // Обработчики кнопок для слайдов
// prevButton.addEventListener('click', (evt) => {
//     currentIndex--;
//     showSlide(currentIndex);
//     console.log(evt.target.closest('section'));
// });

// nextButton.addEventListener('click', () => {
//     currentIndex++;
//     showSlide(currentIndex);
// });

// // Инициализируем первый слайд
// showSlide(currentIndex);

// // Обработчики для точек пагинации
// paginationDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         showSlide(currentIndex);
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     // Функция для работы со слайдами в конкретной секции
//     function showSlide(section) {
//         const sliderItems = section.querySelectorAll('.slider-item, .business__slide');
//         const paginationDots = section.querySelectorAll('.slider-pagination button');

//         if (!sliderItems.length) return;

//         if (section.currentIndex >= sliderItems.length) {
//             section.currentIndex = 0;
//         } else if (section.currentIndex < 0) {
//             section.currentIndex = sliderItems.length - 1;
//         }

//         const offset = -section.currentIndex * 100;
//         sliderItems.forEach(item => {
//             item.style.transform = `translateX(${offset}%)`;
//         });

//         // Обновляем активную точку пагинации
//         paginationDots.forEach(dot => {
//             dot.classList.remove('active');
//             dot.classList.add('dot');
//         });

//         if (paginationDots.length) {
//             paginationDots[section.currentIndex].classList.add('active');
//         }
//     }

//     // Инициализация слайдеров для всех секций
//     document.querySelectorAll('section').forEach(section => {
//         section.currentIndex = 0;  // Устанавливаем индекс для каждой секции отдельно
//         showSlide(section);         // Инициализируем слайдер для каждой секции
//     });

//     // Обработчик кликов для кнопок "назад", "вперед" и точек пагинации
//     document.addEventListener('click', (evt) => {
//         // Находим родительскую секцию, на которой был клик
//         const section = evt.target.closest('section');
//         if (!section) return;

//         const sliderItems = section.querySelectorAll('.slider-item, .business__slide');

//         if (!sliderItems.length) return;

//         // Если кликнули по кнопке "назад" или "вперед"
//         const button = evt.target.closest('.slider-prev, .slider-next, .slider-pagination button');
//         if (button) {
//             // Если кликнули по кнопке "назад"
//             if (button.classList.contains('slider-prev')) {
//                 section.currentIndex--;
//             } 
//             // Если кликнули по кнопке "вперед"
//             else if (button.classList.contains('slider-next')) {
//                 section.currentIndex++;
//             } 
//             // Если кликнули по точке пагинации
//             else if (button.closest('.slider-pagination')) {
//                 const paginationDots = Array.from(section.querySelectorAll('.slider-pagination button'));
//                 section.currentIndex = paginationDots.indexOf(button);
//             }

//             showSlide(section);  // Обновляем слайдер для конкретной секции
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const MAX_VISIBLE_DOTS = 4; // Максимальное число видимых кнопок

    function createPagination(section, totalSlides) {
        const paginationContainer = section.querySelector('.slider-pagination');
        if (!paginationContainer) return;

        let dotsWrapper = paginationContainer.querySelector('.dots-wrapper');
        if (!dotsWrapper) {
            dotsWrapper = document.createElement('div');
            dotsWrapper.classList.add('dots-wrapper');
            paginationContainer.appendChild(dotsWrapper);
        }

        dotsWrapper.innerHTML = ''; // Очищаем старые кнопки

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dotsWrapper.appendChild(dot);
        }
    }

    function updatePaginationDots(section) {
        const dotsWrapper = section.querySelector('.dots-wrapper');
        const paginationDots = Array.from(dotsWrapper.children);
        if (!paginationDots.length) return;

        let currentIndex = section.currentIndex;

        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showSlide(section) {
        const slider = section.querySelector('.slider, .business__slider');
        const sliderItems = section.querySelectorAll('.slider-item, .business__slide');
        if (!slider || !sliderItems.length) return;
    
        // Зацикливание слайдера
        if (section.currentIndex >= sliderItems.length) {
            section.currentIndex = 0; // Возвращаемся в начало
        } else if (section.currentIndex < 0) {
            section.currentIndex = sliderItems.length - 1; // Переход к последнему слайду
        }
    
        const offset = section.currentIndex * sliderItems[0].offsetWidth;
        slider.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    
        updatePaginationDots(section);
    }

    function enableSwipe(section) {
        const slider = section.querySelector('.slider');
        if (!slider) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        slider.addEventListener('pointerdown', (e) => {
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.scrollBehavior = 'auto'; // Убираем плавный скролл во время перетаскивания
        });

        slider.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // Скорость прокрутки
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('pointerup', () => {
            isDragging = false;
            slider.style.scrollBehavior = 'smooth'; // Включаем обратно плавный скролл
            section.currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
            showSlide(section);
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    }

    document.querySelectorAll('section').forEach(section => {
        section.currentIndex = 0;
        const sliderItems = section.querySelectorAll('.slider-item, .business__slide');

        if (sliderItems.length > 0) {
            createPagination(section, sliderItems.length);
            enableSwipe(section);
            showSlide(section);
        }
    });

    document.addEventListener('click', (evt) => {
        const section = evt.target.closest('section');
        if (!section) return;

        const button = evt.target.closest('.slider-prev, .slider-next, .slider-pagination button');
        if (!button) return;

        if (button.classList.contains('slider-prev')) {
            section.currentIndex--;
        } else if (button.classList.contains('slider-next')) {
            section.currentIndex++;
        } else if (button.closest('.slider-pagination')) {
            section.currentIndex = Number(button.dataset.index);
        }

        showSlide(section);
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//     const slider = document.querySelector('.slider');
//     const prevButton = document.querySelector('.slider-prev');
//     const nextButton = document.querySelector('.slider-next');

//     if (slider && prevButton && nextButton) {
//         const slideWidth = slider.querySelector('.slider-item').offsetWidth;
//         const gap = 10;

//         prevButton.addEventListener('click', () => {
//             slider.scrollBy({
//                 left: -(slideWidth + gap),
//                 behavior: 'smooth'
//             });
//         });

//         nextButton.addEventListener('click', () => {
//             slider.scrollBy({
//                 left: slideWidth + gap,
//                 behavior: 'smooth'
//             });
//         });
//     }
// });


// const slides = document.querySelector('.slides');
// const slide = document.querySelectorAll('.slide');
// let index = 0;

// document.getElementById('slider-next').addEventListener('click', () => {
//     index = (index + 1) % slide.length;
//     updateSlider();
// });

// document.getElementById('slider-prev').addEventListener('click', () => {
//     index = (index - 1 + slide.length) % slide.length;
//     updateSlider();
// });

// function updateSlider() {
//     slides.style.transform = `translateX(-${index * 100}%)`;
// }


/////////////////////////ye;yj/////////////////////////////tghrtgrtgrtgrtertbertbrtbrtbrtgrgrtgrtgrtgrt
// document.addEventListener("DOMContentLoaded", function () {
//     function initSlider(sliderSelector, prevBtnSelector, nextBtnSelector, slidesToShow = 1) {
//         const slider = document.querySelector(sliderSelector);
//         const prevBtn = document.querySelector(prevBtnSelector);
//         const nextBtn = document.querySelector(nextBtnSelector);
//         const paginationDots = slider.querySelectorAll('.slider-pagination button');
//         const slides = Array.from(slider.children);
//         const totalSlides = slides.length;
//         let currentIndex = 0;
        
//         function updateSlider() {
//             const offset = -(currentIndex * (100 / slidesToShow));
//             slider.style.transform = `translateX(${offset}%)`;
//         }
        
//         nextBtn.addEventListener("click", function () {
//             if (currentIndex < totalSlides - slidesToShow) {
//                 currentIndex += slidesToShow;
//             } else {
//                 currentIndex = 0;
//             }
//             updateSlider();
//         });
        
//         prevBtn.addEventListener("click", function () {
//             if (currentIndex > 0) {
//                 currentIndex -= slidesToShow;
//             } else {
//                 currentIndex = totalSlides - slidesToShow;
//             }
//             updateSlider();
//         });

//          // Обновляем активную точку пагинации
//         paginationDots.forEach(dot => {
//             dot.classList.remove('active');
//             dot.classList.add('dot');
//         });

//         if (paginationDots.length) {
//             paginationDots[section.currentIndex].classList.add('active');
//         }
// //     
//     }

//     // Инициализация первого слайдера (по одному слайду)
//     initSlider(".slider", ".intro .slider-prev", ".intro .slider-next", 1);
    
//     // Инициализация второго слайдера (по три слайда сразу)
//     initSlider(".business__slider", ".business .slider-prev", ".business .slider-next", 3);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     function initSlider(sliderSelector, prevSelector, nextSelector, itemsToScroll) {
//         const slider = document.querySelector(sliderSelector);
//         const prevButton = document.querySelector(prevSelector);
//         const nextButton = document.querySelector(nextSelector);
//         let currentIndex = 0;
//         const slides = slider.children;
//         const totalSlides = slides.length;
        
//         function updateSlider() {
//             slider.style.transform = `translateX(-${currentIndex * (100 / itemsToScroll)}%)`;
//         }
        
//         nextButton.addEventListener("click", () => {
//             if (currentIndex < totalSlides - itemsToScroll) {
//                 currentIndex += itemsToScroll;
//             } else {
//                 currentIndex = 0;
//             }
//             updateSlider();
//         });
        
//         prevButton.addEventListener("click", () => {
//             if (currentIndex > 0) {
//                 currentIndex -= itemsToScroll;
//             } else {
//                 currentIndex = totalSlides - itemsToScroll;
//             }
//             updateSlider();
//         });
//     }

//     document.addEventListener("click", (evt) => {
//         const target = evt.target;
//         const section = target.closest(".business__slider") ? ".business__slider" : target.closest(".intro") ? ".intro .slider" : null;
//         if (section) {
//             const prevSelector = section.includes("business") ? ".business .slider-prev" : ".intro .slider-prev";
//             const nextSelector = section.includes("business") ? ".business .slider-next" : ".intro .slider-next";
//             const itemsToScroll = section.includes("business") ? 3 : 1;
//             initSlider(section, prevSelector, nextSelector, itemsToScroll);
//         }
//     });
// });

// Переключение слайдов в секции "Intro"
// const introPrevButton = document.querySelector('.intro .slider-prev');
// const introNextButton = document.querySelector('.intro .slider-next');
// const introSliderItems = document.querySelectorAll('.intro .slider-item');
// const introPaginationDots = document.querySelectorAll('.intro .slider-pagination button');
// let introCurrentIndex = 0;

// function showIntroSlide(index) {
//     if (index >= introSliderItems.length) {
//         introCurrentIndex = 0;
//     } else if (index < 0) {
//         introCurrentIndex = introSliderItems.length - 1;
//     }

//     const offset = -introCurrentIndex * 100;
//     introSliderItems.forEach(item => {
//         item.style.transform = `translateX(${offset}%)`;
//     });

//     introPaginationDots.forEach(dot => {
//         dot.classList.remove('active');
//     });
//     introPaginationDots[introCurrentIndex].classList.add('active');
// }

// introPrevButton.addEventListener('click', () => {
//     introCurrentIndex--;
//     showIntroSlide(introCurrentIndex);
// });

// introNextButton.addEventListener('click', () => {
//     introCurrentIndex++;
//     showIntroSlide(introCurrentIndex);
// });

// introPaginationDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         introCurrentIndex = index;
//         showIntroSlide(introCurrentIndex);
//     });
// });

// showIntroSlide(introCurrentIndex);

// const businessPrevButton = document.querySelector('.business .slider-prev');
// const businessNextButton = document.querySelector('.business .slider-next');
// const businessSliderItems = document.querySelectorAll('.business .business__slide');
// const businessPaginationDots = document.querySelectorAll('.business .slider-pagination button');
// let businessCurrentIndex = 0;

// function showBusinessSlide(index) {
//     const totalSlides = businessSliderItems.length;
//     const slidesToShow = 3; // Количество карточек, которые нужно показывать за раз

//     if (index >= totalSlides - slidesToShow + 1) {
//         businessCurrentIndex = 0;
//     } else if (index < 0) {
//         businessCurrentIndex = totalSlides - slidesToShow;
//     } else {
//         businessCurrentIndex = index;
//     }

//     const offset = -businessCurrentIndex * (100 / slidesToShow); // Сдвигаем на 100% для трех карточек
//     document.querySelector('.business__slider').style.transform = `translateX(${offset}%)`;

//     businessPaginationDots.forEach(dot => {
//         dot.classList.remove('active');
//     });
//     businessPaginationDots[businessCurrentIndex].classList.add('active');
// }

// businessPrevButton.addEventListener('click', () => {
//     businessCurrentIndex -= 3; // Пролистываем на три карточки назад
//     showBusinessSlide(businessCurrentIndex);
// });

// businessNextButton.addEventListener('click', () => {
//     businessCurrentIndex += 3; // Пролистываем на три карточки вперед
//     showBusinessSlide(businessCurrentIndex);
// });

// businessPaginationDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         businessCurrentIndex = index * 3; // Переход к соответствующему набору из трех карточек
//         showBusinessSlide(businessCurrentIndex);
//     });
// });

// showBusinessSlide(businessCurrentIndex);