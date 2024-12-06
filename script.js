function showBone(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Le corail, le "squelette" de l’océan';
  const image = document.createElement('img');
  image.src = 'ocean-organs/bone.webp';
  image.alt = 'Récif coralien';

  section.appendChild(title)
  section.appendChild(image)
}

function showBrain(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Poisson pané';
  const image = document.createElement('img');
  image.src = 'ocean-organs/brain.webp';
  image.alt = 'Gulf stream';

  section.appendChild(title)
  section.appendChild(image)
}

function showHeart(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Les courants, le "cœur" de l’océan';
  const image = document.createElement('img');
  image.src = 'ocean-organs/heart.webp';
  image.alt = 'Gulf stream';

  section.appendChild(title)
  section.appendChild(image)
}

function showKidneys(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Les poissons nettoyeurs, les "reins" de l’océan';
  const image = document.createElement('img');
  image.src = 'ocean-organs/kidneys.webp';
  image.alt = 'Poisson nettoyeur';

  section.appendChild(title)
  section.appendChild(image)
}

function showLungs(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Les phytoplanctons, les "poumons" des océans';
  const image = document.createElement('img');
  image.src = 'ocean-organs/lungs.webp';
  image.alt = 'Phytoplanctons';

  section.appendChild(title)
  section.appendChild(image)
}

function showTumor(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Le continent plastique, la tumeur de l’océan';
  const image = document.createElement('img');
  image.src = 'ocean-organs/tumor.webp';
  image.alt = 'Continent plastique';

  section.appendChild(title)
  section.appendChild(image)
}

function showReproductive(section) {
  section.innerHTML = ''; // Clear the current content

  const title = document.createElement('h3');
  title.textContent = 'Comme les tortues, de nombreuses espèces ont du mal à se reproduire';
  const image = document.createElement('img');
  image.src = 'ocean-organs/reproductive.webp';
  image.alt = 'Bébés tortues';

  section.appendChild(title)
  section.appendChild(image)
}

function listenMapAreas(mapName) {
  const map = document.querySelector('map[name=' + mapName + ']');
  const areas = map.querySelectorAll('area');
  areas.forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault()
      const title = event.target.getAttribute('title');
      console.log('Opening organ: ' + title);
      const organSection = document.querySelector('.ocean-organs');
      switch (title) {
        case 'bone':
          showBone(organSection);
          break;
        case 'brain':
          showBrain(organSection);
          break;
        case 'heart':
          showHeart(organSection);
          break;
        case 'kidneys':
          showKidneys(organSection);
          break;
        case 'lungs':
          showLungs(organSection);
          break;
        case 'lungs':
          showLungs(organSection);
          break;
        case 'tumor':
          showTumor(organSection);
          break;
        case 'reproductive':
          showReproductive(organSection);
          break;
      }
    });
  });
}
