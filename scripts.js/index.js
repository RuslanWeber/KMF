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


document.addEventListener("DOMContentLoaded", () => {
    const businessData = [
        {
            image: "/images/e91426642a367c17d83b2515e2b5f8f8.png",
            title: "Услуги для автомобилей \"Lux-service\"",
            location: "Тараз, Абая 291",
            description: "Ателье для автомобилей \"Lux-service\" предоставляют пошив чехлов, перетяжку салона, EVA полики и шумоизоляцию."
        },
        {
            image: "/images/7cdc76771be2393abb9f357f2c9ee3eb.png",
            title: "Агробизнес – животноводство, пчеловодство",
            location: "с. Лепси, Алматинская область",
            description: "Смешанное сельское хозяйство – бизнес, который занимается выращиванием растений (растениеводство) и разведением животных."
        },
        {
            image: "/images/d0aa5c02a47ec53c9909aaeb1c84ccdd.png",
            title: "Семейная столовая \"Мерей\"",
            location: "Сарканд, Толе би 15/2",
            description: "В столовой \"Мерей\" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовл..."
        },
        {
            image: "/images/e91426642a367c17d83b2515e2b5f8f8.png",
            title: "Услуги для автомобилей \"Lux-service\"",
            location: "Тараз, Абая 291",
            description: "Ателье для автомобилей \"Lux-service\" предоставляют пошив чехлов, перетяжку салона, EVA полики и шумоизоляцию."
        },
        {
            image: "/images/7cdc76771be2393abb9f357f2c9ee3eb.png",
            title: "Агробизнес – животноводство, пчеловодство",
            location: "с. Лепси, Алматинская область",
            description: "Смешанное сельское хозяйство – бизнес, который занимается выращиванием растений (растениеводство) и разведением животных."
        },
        {
            image: "/images/d0aa5c02a47ec53c9909aaeb1c84ccdd.png",
            title: "Семейная столовая \"Мерей\"",
            location: "Сарканд, Толе би 15/2",
            description: "В столовой \"Мерей\" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовл..."
        }
    ];

    function createBusinessCard(data) {
        const slide = document.createElement("div");
        slide.classList.add("business__slide");

        slide.innerHTML = `
            <div class="business-card">
                <button class="card">
                    <img class="business-card__image" src="${data.image}" alt="${data.title}">
                </button>
                <div class="card-text">
                    <h3 class="business-card__title">${data.title}</h3>
                    <p class="business-card__location">${data.location}</p>
                    <p class="business-card__description">${data.description}</p>
                </div>
            </div>
        `;

        return slide;
    }

    function renderBusinessCards() {
        const sliderContainer = document.querySelector(".business__slider");
        if (!sliderContainer) return;

        businessData.forEach((item) => {
            const cardElement = createBusinessCard(item);
            sliderContainer.appendChild(cardElement);
        });
    }

    renderBusinessCards();
});




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
