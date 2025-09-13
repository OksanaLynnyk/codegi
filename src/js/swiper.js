import { Swiper } from 'swiper';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

document.querySelectorAll('.btn-prev, .btn-next').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.currentTarget.blur();
  });
});


let swiperGalleryInstance = null;

const initGallerySwiper = () => {
  const container = document.querySelector('.swiper-gallery');
  if (!container) return;

  const isMobile = window.innerWidth < 1442;

  if (isMobile && !swiperGalleryInstance) {
    swiperGalleryInstance = new Swiper(container, {
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
      },

      loop: true,
      spaceBetween: 16,
      speed: 800,
      slidesPerView: 'auto',


    });
  } else if (!isMobile && swiperGalleryInstance) {
    swiperGalleryInstance.destroy(true, true);
    swiperGalleryInstance = null;
  }
};

window.addEventListener('resize', () => {
  initGallerySwiper();
});

window.addEventListener('load', initGallerySwiper);


let swiperTestInstance = null;

const initTestSwiper = () => {
  const container = document.querySelector('.swiper-test');
  if (!container) return;

  swiperTestInstance = new Swiper(container, {
    modules: [Navigation],
    navigation: {
      prevEl: '.test-prev',
      nextEl: '.test-next'
    },

    loop: true,
    spaceBetween: 16,
    speed: 800,
    slidesPerView: 'auto',
    breakpoints: {
      1442: {
        spaceBetween: 40,
      }
    }
  });
}

initTestSwiper();


let swiperBlogInstance = null;

const initBlogSwiper = () => {
  const container = document.querySelector('.swiper-blog');
  if (!container) return;

  const isMobile = window.innerWidth < 1442;

  if (isMobile && !swiperBlogInstance) {
    swiperBlogInstance = new Swiper(container, {
      modules: [Navigation],
    navigation: {
      prevEl: '.blog-prev',
      nextEl: '.blog-next'
    },

      loop: true,
      spaceBetween: 14,
      speed: 800,
      slidesPerView: 'auto',
    });
  } else if (!isMobile && swiperBlogInstance) {
    swiperBlogInstance.destroy(true, true);
    swiperBlogInstance = null;
  }
};

window.addEventListener('resize', () => {
  initBlogSwiper();
});

window.addEventListener('load', initBlogSwiper);



