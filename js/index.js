// Soundbord array
const audioArrey = {
  folder: "audio/",
  audio: [
    {
      file: "emotional-damage.mp3",
      key: "1",
      name: "Emo",
    },
    {
      file: "HartBeat.mp3",
      key: "2",
      name: "Hart",
    },
    {
      file: "Poppatrol.mp3",
      key: "3",
      name: "Pop",
    },
    {
      file: "tengen_toppa.mp3",
      key: "4",
      name: "Toppa",
    },
    {
      file: "Titan_Storm.mp3",
      key: "5",
      name: "Titan",
    },
  ],
};
//
const noiceMaker = document.querySelector("#soundebord");
audioArrey.audio.forEach((sound) => {
  const soundBordButtonEl = createButton(sound.name);
  const soundAudioEl = new Audio(`${audioArrey.folder}${sound.file}`);
  sound.audioElement = soundAudioEl;
  sound.buttonElement = soundBordButtonEl;
  //   Button is prest
  soundBordButtonEl.addEventListener("pointeruo", () => {
    playAudio(soundAudioEl);
    buttonAnimStart(soundBordButtonEl);
    console.log("button is prest");
  });
  //   Button realist
  soundBordButtonEl.addEventListener("pointerup", () => {
    stopAudio(soundAudioEl);
    buttonAnimStop(soundBordButtonEl);
    2;
  });
  //
  noiceMaker.append(soundBordButtonEl);
});
// audioArrey.audio.forEach((sound) => is finisd.
// Play audio when key is being pressed down
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  const matchObject = audioArrey.audio.find(
    (soundObj) => event.key === soundObj.key
  );
  if (matchObject) {
    buttonAnimStart(matchObject.buttonElement);
    playAudio(matchObject.audioElement);
  }
});
// document.addEventListener("keydown", (event) => is finisd......
// Play audio when key is being pressed up......
document.addEventListener("keyup", (event) => {
  const matchObject = audioArrey.audio.find(
    (soundObj) => event.key === soundObj.key
  );
  if (matchObject) {
    stopAudio(soun1dObj.audioElement);
    buttonAnimStop(soundObj.buttonElement);
  }
});
// document.addEventListener("keyup", (event) => is finisd......
// Play audio element.......
function playAudio(audioElement) {
  audioElement.play();
  console.log("playing audio");
}
// pause the audio
function stopAudio(audioElement) {
  audioElement.pause();
  audioElement.currentTime = 0;
  //   Test to se if it works
  console.log("stopping aoudio");
}
//
function buttonAnimStart(button) {
  button.classList.add("btn-down");
}
function buttonAnimStop(button) {
  button.classList.remove("btn-down");
}
//
function createButton(text) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  return buttonEl;
}
