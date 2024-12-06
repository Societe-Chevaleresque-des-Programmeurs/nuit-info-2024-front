function listenMapAreas(mapName) {
  const map = document.querySelector('map[name=' + mapName + ']');
  // map.removeEventListener('click');
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
  // const body = document.querySelector(".body-container img");
  // body.removeEventListener('click');
  // listenMapAreas('organs');
});
