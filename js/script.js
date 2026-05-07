const tags = document.querySelectorAll('.tag');
const listings = document.querySelectorAll('.listings article');

if (tags.length > 0) {
  tags.forEach(function(tag) {
    tag.addEventListener('click', function() {

      tags.forEach(function(t) {
        t.classList.remove('active');
      });
      tag.classList.add('active');

      const selected = tag.getAttribute('data-category');

      listings.forEach(function(article) {
        if (selected === 'all' || article.getAttribute('data-category') === selected) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });

    });
  });
}

const facts = [
  'White House Subs has been feeding Atlantic City since 1932, their bread is baked fresh across the street every single day.',
  'Dock\'s Oyster House opened in 1897, making it one of the oldest continuously operating restaurants in New Jersey.',
  'Chef Vola\'s has no sign on the door and has been run by the same family since 1921. You have to know someone to find it.',
  'Atlantic City\'s food scene reflects its community, a majority-Black city with deep roots in Southern cooking and soul food tradition.',
  'Setaara is one of the only Afghan-French fusion restaurants on the entire East Coast, and it\'s right here in AC.',
  'Kelsey & Kim\'s Southern Comfort Kitchen is entirely family-owned and has become one of the most beloved spots in the city.'
];

const factDisplay = document.querySelector('#food-fact');
const factBtn = document.querySelector('#fact-btn');

if (factDisplay && factBtn) {
  let factIndex = 0;
  factDisplay.textContent = facts[factIndex];

  factBtn.addEventListener('click', function() {
    factIndex = (factIndex + 1) % facts.length;
    factDisplay.textContent = facts[factIndex];
  });
}

const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function() {
    const confirmation = document.querySelector('.form-confirmation');
    confirmation.textContent = 'Thanks for your suggestion! We will look into it.';
    confirmation.style.display = 'block';
  });
}