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
const key1 = "p"; // the key that plays the example note
const note1 = "A3"; // the note it plays

// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.
let melody = ["A4", "C5", "A5", "E5"];
let vibrato = 0.0;

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth);
let vibratoEffect = new Tone.Vibrato(3, vibrato);
synth.chain(vibratoEffect, Tone.Destination);

// can play several notes at once
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
  // Example: replace this with your own instrument.
  Tone.start();

  if (event.repeat === false) {
    console.log("Key down:", event.key);

    if (event.key === key1) {
      synth.triggerAttack(note1, Tone.now());
    }
    if (event.key === "d") {
      vibratoEffect.depth.value = 0.5;
    }
  }
  // calls melody
  if (event.key === "m") {
    playMelody();
  }
}

// Runs every time a key comes up.

function keyup(event) {
  console.log("key up:", event.key);

  if (event.key === key1) {
    synth.triggerRelease(note1, Tone.now());
  }
  if (event.key === "d") {
    vibrato = 0.0;
    vibratoEffect.depth.value = 0;
    console.log("vibrato stops");
  }
}
// Melody function
function playMelody() {
  let now = Tone.now();
  for (let i = 0; i < melody.length; i++) {
    synth.triggerAttackRelease(melody[i], "8n", now + i * 0.4);
  }
}
// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop

  use(); // start the use loop

  // Put your event listener code here
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyup);
}

setup(); // Always remember to call setup()!
