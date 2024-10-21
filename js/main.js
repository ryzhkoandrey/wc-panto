// HEADER UI

const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();

        // Скрываем все подсказки
        for (let hint of infoHints) {
            hint.classList.add('none');
        }

        // Показываем текущую подсказку
        this.parentNode.querySelector('.info-hint').classList.remove('none');
    });
}

// Закрываем подсказки при клике но странице
document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
});

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}

// SLIDER

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 42,

    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },
});

// SLIDER TABS

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', function () {

        // Убираем активные классы у всех кнопок
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        // Добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');

        // Отображаем нужные товары и скрываем не нужные
        for (let product of tabsProducts) {

            // Проверка на отображение всех товаров
            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }
        }

        // Обновляем слайдер
        swiper.update();

    });
}

// MOBILE NAV

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}