function listenMapAreas(mapName) {
  const map = document.querySelector('map[name=' + mapName + ']');
  const areas = map.querySelectorAll('area');
  areas.forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault()
      const title = event.target.getAttribute('title');
      console.log('Opening organ: ' + title);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  listenMapAreas('organs');
});
