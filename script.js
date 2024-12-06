function openOrgan(organ) {
  const section = document.querySelector('.ocean-organs');
  const image = section.querySelector('img');
  image.src = 'ocean-organs/' + organ + '.webp';
  image.alt = 'Une image symbolisant le(s) ' + organ + ' de l’océan';
  image.style.display = 'block';
}

function listenMapAreas(mapName) {
  const map = document.querySelector('map[name=' + mapName + ']');
  const areas = map.querySelectorAll('area');
  areas.forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault()
      const title = event.target.getAttribute('title');
      console.log('Opening organ: ' + title);
      openOrgan(title);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  listenMapAreas('organs');
});
