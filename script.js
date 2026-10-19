/*
 * IDB Programming: A1 Modelling — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — applies the state to make sound every 100ms, if necessary
 *   controls — what happens when a key goes down or comes up
 *   setup    — starts everything
 *
 * There is no loop in this assignment. Nothing happens until the player presses
 * a key, and every key event follows the same two steps:
 *   1. update: change the state, based on which key it was
 *   2. use:    make sound from the state
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which key does what, which notes you can play, the tempo.
const exampleKey = "p";
// the key that plays the example note
const exampleNote = "A3"; // the note it plays
let duration = "8n";
//const exampleKey = document.getElementById("O");
let melody2 = ["A3", "G3", "D3", "A3"];
const start = 0;
//let time = start + i*0.5;
//const tempo = 200;
// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  // Example: replace this with your own instrument.

  setTimeout(update, 100); // call update() again in 100 milliseconds
}

// ---------- Use ----------
// Use the state to make sound. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time a key goes down.
function keyDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something
  if (event.key === "b"); {
    playmelody2();
  }
  // Holding a key down sends keydown again and again. Only react to the first one.
  if (event.repeat === false) {
    console.log("Key down:", event.key);

    // Example: replace this with your own instrument.
    if (event.key === exampleKey) {
      synth.triggerAttack(playmelody, Tone.now()); // keeps sounding until triggerRelease
    }
  }
}

function playmelody2() {
  for (let i = 0; i < melody2.length; i++) {
  synth.triggerAttackRelease(melody2[i], "8n", Tone.now() + i * 0.4);
  }
}

function noteFor(key) {
  if (key === "p") {
    return playmelody2;
  } else if (exampleKey !== keyDown) {
    return false;
  }

  // Runs every time a key comes up.
  function keyUp(event) {
    console.log("Key up:", event.key);

    // Example: replace this with your own instrument.
    if (event.key === exampleKey) {
      synth.triggerRelease(melody2, Tone.now());
    }
  }
}

 console.log()


function song(start) {
  playRiff(start);
}

if (exampleKey === keyDown) {
  playRiff(start);
  playRiff===true;
  console.log(playRiff);
}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Put your event listener code here
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", melody2);
  {
    if (keyDown === "p") {
      playmelody2();
    }
  }
  
}
// Always remember to call setup()!
setup();
