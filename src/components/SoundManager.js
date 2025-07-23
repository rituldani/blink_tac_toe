// components/SoundManager.js
export const sounds = {
  place: new Audio("/sounds/place1.mp3"),
  beep: new Audio("/sounds/beep.mp3"),
  error: new Audio("/sounds/error.mp3"),
  win: new Audio("/sounds/win2.mp3"),
  vanish: new Audio("/sounds/vanish.mp3"),
  newGame: new Audio("/sounds/new1.mp3"),
  restart: new Audio("/sounds/new2.mp3")
};

sounds.beep.volume = 0.4;
sounds.win.volume = 0.4;
sounds.newGame.volume = 0.2;

export const playSound = (sound, isMuted) => {
  if (!isMuted) {
    sound.currentTime = 0;
    sound.play();
  }
};
