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
    }
});

///////////////////////////////меню сайта//////////////////////////////////////
const buttonNav = document.getElementById('buttonNav');
const hiddenNav = document.getElementById('hidden__nav');
console.log(buttonNav);
console.log(hiddenNav);
buttonNav.addEventListener('click', () => {
    hiddenNav.classList.toggle('open');
});
buttonNav.addEventListener('mouseover', () => {
    buttonNav.style.color = '#9D097C';
});
buttonNav.addEventListener('mouseout', () => {
    buttonNav.style.color = 'black';
});

////////////////////////////////slider////////////////////////////////////////
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const sliderItems = document.querySelectorAll('.slider-item');
const paginationDots = document.querySelectorAll('.slider-pagination button');
let currentIndex = 0;

function showSlide(index) {
    if (index >= sliderItems.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = sliderItems.length - 1;
    }

    const offset = -currentIndex * 100;
    sliderItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });

    // Обновляем активную точку
    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[currentIndex].classList.add('active');
}

// Обработчики кнопок для слайдов
prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Инициализируем первый слайд
showSlide(currentIndex);

// Обработчики для точек пагинации
paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});