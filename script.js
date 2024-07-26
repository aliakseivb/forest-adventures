(function () {

  /** смена карточек отзывов*/
  const reviewsData = [
    {
      user: 'Mikhail A',
      text: 'Fascinating, develops courage and dexterity. Opportunity to test yourself',
    },
    {
      user: 'Kim Chi',
      text: 'We were completely delighted! We recommend it to everyone who wants to test their courage and get a dose of adrenaline!',
    },
    {
      user: 'Alex Uni',
      text: 'Three difficulty levels, four tracks, 20 stages. Reliable insurance',
    },
    {
      user: 'Sam Samych',
      text: 'It was about an incredible adventure for our children. Everyone is very happy',
    },
    {
      user: 'Elena K',
      text: 'My son\'s birthday turned out to be incredible! So many positive emotions...',
    },
    {
      user: 'Leon',
      text: 'A great weekend. Looking forward to the next ones ))',
    }
  ]

  const revItems = document.querySelectorAll('.reviews__item');
  let flag = false;
  setInterval(function () {
    for (let i = 0; i < 3; i++) {
      if (!flag) {
        revItems[i].innerHTML = `<div class="user">${reviewsData[i].user}</div><div class="reviews__text">${reviewsData[i].text}</div>`
      } else {
        revItems[i].innerHTML = `<div class="user">${reviewsData[i + 3].user}</div><div class="reviews__text">${reviewsData[i + 3].text}</div>`
      }
    }
    flag = !flag
  }, 10000);


  /** бургер меню и меню навигации*/
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
    body.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('show') && e.target === nav) {
      nav.classList.remove('show');
      burger.classList.remove('active');
    }
    if (e.target.classList.contains('nav__link')) {
      nav.classList.remove('show');
      burger.classList.remove('active');
      body.classList.remove('hidden');
    }
  });

}());
