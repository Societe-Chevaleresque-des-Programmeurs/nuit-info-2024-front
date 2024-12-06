let fishCooker = {
  increment: 0,
  width: 0,
  intervalId: null,
  running: false,
  cooking: -1,
}

function showBone(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Le corail, le "squelette" de l’océan'
  const image = document.createElement('img')
  image.src = 'ocean-organs/bone.webp'
  image.alt = 'Récif coralien'

  section.appendChild(title)
  section.appendChild(image)
}

function startProgress() {
  if (fishCooker.running) return stopProgress()
  fishCooker.running = true
  fishCooker.width = 0; // Réinitialise la barre si elle est pleine
  fishCooker.progressBar.style.width = '0%';
  fishCooker.fish.src = 'clicker/fish.webp';
  fishCooker.fish.classList = 'fish';
  fishCooker.progressBar.style.background = "linear-gradient(to right, #4caf50, #81c784)";
  const speed = Math.random() * (80 - 10) + 10; // Vitesse aléatoire (10 ms à 50 ms)
  fishCooker.intervalId = setInterval(() => {
    fishCooker.width += 1; // Augmente la largeur de 1%
    fishCooker.progressBar.style.width = fishCooker.width + '%';
    if (fishCooker.width > 110) {
      fishCooker.progressBar.style.background = "linear-gradient(to right, #4caf50, red)";
    }
  }, speed);
}

function stopProgress() {
  clearInterval(fishCooker.intervalId); // Arrête l'animation
  fishCooker.running = false
  if (fishCooker.width < 90) {
    fishCooker.cooking = -1;
  } else if (fishCooker.width > 110) {
    fishCooker.cooking = 1;
    fishCooker.fish.src = 'clicker/coal.webp';
  } else {
    fishCooker.increment++;
    fishCooker.fish.src = 'clicker/fried.webp';
    fishCooker.fish.alt = 'Poisson pané';
    fishCooker.cooking = 0;
  }
  fishCooker.fish.classList = '';
}

function showBelly(section) { // Cookie clicker captcha
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Prouvez que vous êtes humain en le faisant frire la bonne durée'
  const fish = document.createElement('img')
  fish.src = 'clicker/fish.webp'
  fish.alt = 'Un poisson cru'
  fish.id = 'fish'
  const fryer = document.createElement('img')
  fryer.src = 'clicker/fryer.webp'
  fryer.alt = 'Gulf stream'
  const progressContain = document.createElement('div')
  progressContain.id = 'progress-container'
  const progressBar = document.createElement('div')
  progressBar.id = 'progress-bar'

  section.appendChild(title)
  section.appendChild(fish)
  section.appendChild(fryer)
  section.appendChild(progressContain)
  progressContain.appendChild(progressBar)

  fishCooker.fish = fish
  fishCooker.progressBar = progressBar

  progressContain.addEventListener('click', startProgress);
}

function showHeart(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Les courants, le "cœur" de l’océan'
  const image = document.createElement('img')
  image.src = 'ocean-organs/heart.webp'
  image.alt = 'Gulf stream'

  section.appendChild(title)
  section.appendChild(image)
}

function showKidneys(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Les poissons nettoyeurs, les "reins" de l’océan'
  const image = document.createElement('img')
  image.src = 'ocean-organs/kidneys.webp'
  image.alt = 'Poisson nettoyeur'

  section.appendChild(title)
  section.appendChild(image)
}

function showLungs(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Les phytoplanctons, les "poumons" des océans'
  const image = document.createElement('img')
  image.src = 'ocean-organs/lungs.webp'
  image.alt = 'Phytoplanctons'

  section.appendChild(title)
  section.appendChild(image)
}

function showTumor(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Le continent plastique, la tumeur de l’océan'
  const image = document.createElement('img')
  image.src = 'ocean-organs/tumor.webp'
  image.alt = 'Continent plastique'

  section.appendChild(title)
  section.appendChild(image)
}

function showReproductive(section) {
  section.innerHTML = '' // Clear the current content

  const title = document.createElement('h3')
  title.textContent = 'Comme les tortues, de nombreuses espèces ont du mal à se reproduire'
  const image = document.createElement('img')
  image.src = 'ocean-organs/reproductive.webp'
  image.alt = 'Bébés tortues'

  section.appendChild(title)
  section.appendChild(image)
}

function listenMapAreas(mapName) {
  const map = document.querySelector('map[name=' + mapName + ']')
  const areas = map.querySelectorAll('area')
  areas.forEach(a => {
    a.addEventListener('click', event => {
      // event.preventDefault()
      const title = event.target.getAttribute('title')
      console.log('Opening organ: ' + title)
      const organSection = document.querySelector('.ocean-organs')
      switch (title) {
        case 'bone':
          showBone(organSection)
          break
        case 'heart':
          showHeart(organSection)
          break
        case 'kidneys':
          showKidneys(organSection)
          break
        case 'lungs':
          showLungs(organSection)
          break
        case 'lungs':
          showLungs(organSection)
          break
        case 'belly':
          showBelly(organSection)
          break
        case 'tumor':
          showTumor(organSection)
          break
        case 'reproductive':
          showReproductive(organSection)
          break
      }
    })
  })
}
