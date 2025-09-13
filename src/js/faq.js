document.querySelectorAll('.accordion-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const question = wrapper.querySelector('.accordion-question');
    const answer = wrapper.querySelector('.accordion-answer');


    question.classList.toggle('active');
    answer.classList.toggle('open');
    wrapper.classList.toggle('open');

    if (answer.classList.contains('open')) {
      if (window.innerWidth >= 1442) {
        answer.style.maxHeight = '140px';
      } else {
        answer.style.maxHeight = 194 + 'px';
      }
    } else {
      answer.style.maxHeight = '0';
    }
  });
});


function updateAccordionIcon() {
  const svgUses = document.querySelectorAll('.arrow-accordion use');

  if (!svgUses.length) return;

  const isMobile = window.innerWidth < 1442;

  svgUses.forEach(use => {
    use.setAttribute(
      'href',
      isMobile
        ? '/img/sprite.svg#icon-faq-arrow-mb'
        : '/img/sprite.svg#icon-faq-arrow'
    );
  });
}

window.addEventListener('DOMContentLoaded', updateAccordionIcon);
window.addEventListener('resize', updateAccordionIcon);
