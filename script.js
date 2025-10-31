// ---------- SELECCIONES DE ELEMENTOS ----------
const treasureX = document.getElementById('treasureX');
const bgMusic = document.getElementById('bgMusic');
const luffy = document.getElementById('luffyContainer');
const chopper = document.getElementById('ChopperContainer');
const brook = document.getElementById('BrookContainer');
const musicChoice = document.getElementById('bgMusicChoice');

// ---------- AJUSTE VOLUMEN MÚSICA ----------
if (bgMusic) bgMusic.volume = 0.3;

// ---------- DESMUTE MÚSICA ----------
function unmuteMusic() {
  if (bgMusic) {
    bgMusic.muted = false;
    bgMusic.play().catch(err => console.warn('No se pudo reproducir automáticamente', err));
  }
}

// ---------- CAMBIAR MÚSICA ----------
if (musicChoice) {
  musicChoice.addEventListener('change', () => {
    const selectedSong = musicChoice.value;
    if (bgMusic) {
      bgMusic.src = selectedSong;
      bgMusic.play().catch(err => console.warn('No se pudo reproducir la música:', err));
    }
  });
}

// ---------- TESORO ----------
if (treasureX) {
  treasureX.addEventListener('click', () => {
    treasureX.remove();
    const shovel = document.createElement('img');
    shovel.src = 'pala.png';
    shovel.classList.add('shovel');
    document.body.appendChild(shovel);

    setTimeout(() => {
      shovel.remove();
      const treasure = document.createElement('div');
      treasure.id = 'treasure';
      treasure.innerHTML = '🎁';
      treasure.style.position = 'absolute';
      treasure.style.bottom = '720px';
      treasure.style.left = '91%';
      treasure.style.transform = 'translateX(-50%)';
      treasure.style.fontSize = '3em';
      treasure.style.cursor = 'pointer';
      treasure.style.animation = 'float 2s infinite';
      document.body.appendChild(treasure);

      treasure.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.85)';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '9999';
        document.body.appendChild(overlay);

        if (bgMusic) {
          let vol = bgMusic.volume;
          const fadeOut = setInterval(() => {
            vol -= 0.02;
            if (vol <= 0.05) {
              vol = 0.05;
              clearInterval(fadeOut);
            }
            bgMusic.volume = vol;
          }, 100);
        }

        const message = document.createElement('h2');
        message.innerText = '🎉 ¡FELIZ CUMPLEAÑOS, ADRIANA! 🎉\nHas encontrado tu regalo especial ';
        message.style.color = 'white';
        message.style.textAlign = 'center';
        message.style.marginBottom = '20px';
        message.style.whiteSpace = 'pre-line';
        overlay.appendChild(message);

        const video = document.createElement('video');
        video.src = 'feliz op1.mp4';
        video.controls = false;
        video.autoplay = true;
        video.style.width = '80%';
        video.style.borderRadius = '20px';
        video.style.boxShadow = '0 0 20px gold';
        overlay.appendChild(video);

        const restoreMusic = () => {
          if (!bgMusic) return;
          let vol = bgMusic.volume;
          const fadeIn = setInterval(() => {
            vol += 0.02;
            if (vol >= 0.3) {
              vol = 0.3;
              clearInterval(fadeIn);
            }
            bgMusic.volume = vol;
          }, 100);
        };

        const closeOverlay = () => {
          overlay.remove();
          restoreMusic();
        };

        overlay.addEventListener('click', closeOverlay);
        video.addEventListener('ended', closeOverlay);
      });
    }, 2000);
  });
}

// ---------- LUFFY ----------
if (luffy) {
  let revertTimeout;
  luffy.addEventListener('click', () => {
    const luffyImg = luffy.querySelector('img');
    if (!luffyImg) return;

    const originalSrc = luffyImg.getAttribute('data-original') || luffyImg.getAttribute('src');
    luffyImg.setAttribute('data-original', originalSrc);

    clearTimeout(revertTimeout);

    const bubble = document.createElement('div');
    bubble.classList.add('speech-bubble');
    bubble.innerText = '¡Yeah!';
    luffy.appendChild(bubble);

    luffyImg.src = `gear5.gif?t=${Date.now()}`;
    luffyImg.classList.add('gear5-effect');
    setTimeout(() => bubble.remove(), 1000);

    revertTimeout = setTimeout(() => {
      luffyImg.src = `${originalSrc}?t=${Date.now()}`;
      luffyImg.classList.remove('gear5-effect');
    }, 3000);
  });
}

// ---------- CHOPPER ----------
if (chopper) {
  chopper.addEventListener('click', () => {
    chopper.classList.add('jump');
    setTimeout(() => chopper.classList.remove('jump'), 1000);
  });
}

// ---------- BROOK ----------
if (brook) {
  brook.addEventListener('click', () => {
    const brookImg = brook.querySelector('img');
    if (!brookImg) return;

    const originalSrc = brookImg.src;
    brookImg.src = 'brook2.gif';

    const brookMusic = document.getElementById('brookMusic');
    if (brookMusic) {
      brookMusic.volume = 0.1;
      brookMusic.currentTime = 165;
      brookMusic.play().catch(err => console.warn('No se pudo reproducir brookMusic:', err));
      setTimeout(() => {
        brookMusic.pause();
        brookMusic.currentTime = 0;
      }, 5000);
    }

    function createNote() {
      const note = document.createElement('div');
      note.classList.add('musical-notes');
      note.innerText = '🎵🎶';
      note.style.left = `${Math.random() * 120}px`;
      brook.appendChild(note);
      setTimeout(() => note.remove(), 1500);
    }

    const interval = setInterval(createNote, 300);
    setTimeout(() => {
      clearInterval(interval);
      brookImg.src = originalSrc;
    }, 5000);
  });
}

// ---------- ROBIN (BOTÓN "VER") ----------
robinButton.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.85)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  overlay.style.padding = "20px";
  overlay.style.textAlign = "center";
  overlay.style.overflowY = "auto";
  document.body.appendChild(overlay);

  // Mensaje inicial
  const message1 = document.createElement("h2");
  message1.innerText = "No salió ni un episodio del anime ni del manga";
  message1.style.color = "white";
  message1.style.marginBottom = "20px";
  overlay.appendChild(message1);

  // GIF debajo
  const gif = document.createElement("img");
  gif.src = "gato.gif"; // tu GIF
  gif.style.width = "250px";
  gif.style.marginBottom = "20px";
  gif.style.borderRadius = "15px";
  gif.style.boxShadow = "0 0 20px gold";
  overlay.appendChild(gif);

  // Mensaje del episodio cercano
  const message2 = document.createElement("p");
  message2.innerHTML = `Quieres ver el más cercano a la fecha de tu cumpleaños:<br><br>
  <strong>Episodio 424 — "El poder de los Warlords. El ejército de Jinbe el Caballero del Mar"</strong><br>
  📅 Emitido el 1 de noviembre de 2009 (Japón)<br>
  📍 Saga: Impel Down<br>
  🔹 En este episodio, Luffy entra más profundo en Impel Down y se encuentra con Jinbe, uno de los Siete Guerreros del Mar .`;
  message2.style.color = "white";
  message2.style.maxWidth = "600px";
  message2.style.background = "rgba(0,0,0,0.6)";
  message2.style.padding = "15px";
  message2.style.borderRadius = "10px";
  message2.style.lineHeight = "1.5em";
  message2.style.marginBottom = "20px";
  overlay.appendChild(message2);

  // FOTO DEL EPISODIO debajo del mensaje
  const episodeImg = document.createElement("img");
  episodeImg.src = "ep424.webp"; // aquí la foto del episodio
  episodeImg.style.width = "400px";
  episodeImg.style.borderRadius = "10px";
  episodeImg.style.boxShadow = "0 0 20px gold";
  overlay.appendChild(episodeImg);

  // Cerrar overlay al hacer click
  overlay.addEventListener("click", () => overlay.remove());
});
