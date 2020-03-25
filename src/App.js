import React, { useState } from 'react';
import './App.css';

const VERSION = process.env.REACT_APP_GIT_COMMIT_HASH || 'dev';

//This is terrible in more than one way.
const iv = "\x31\x32\x33\x34\x35\x36\x37\x38\x62\x30\x7a\x32\x33\x34\x35\x6e";

const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder();

export default function App() {
  const [input, setInput] = useState("YkreP8qCxamCD+tB8OF9nA==");
  const [key, setKey] = useState("Top Secret");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <textarea rows="8" cols="80" placeholder="Input" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div id="buttons"><input id="key" type="text" placeholder="Key" maxLength="32" value={key} onChange={(e) => setKey(e.target.value)}/><button onClick={() => encrypt(key, input, setOutput, setError)}>Encrypt</button><button onClick={() => decrypt(key, input, setOutput, setError)}>Decrypt</button></div>
      <div id="errors">{error}</div>
      <textarea rows="8" cols="80" placeholder="Output" value={output} readOnly/>
      <footer><a rel="author" href="https://twitter.com/nearwood">@nearwood</a> <a href="https://github.com/nearwood/dumbaes">GitHub</a> <span title="version">{VERSION.substring(0, 7)}</span></footer>
    </div>
  );
}

async function encrypt(keyString, plaintext, setOutput, setError) {
  try {
    const key = await importKey(keyString);
    const ciphertext = await encryptMessage(key, plaintext);
    setError(null);
    setOutput(ciphertext);
  } catch (e) {
    console.error(e);
    setError("Error: Could not encrypt.");
  }
}

async function decrypt(keyString, ciphertext, setOutput, setError) {
  try {
    const key = await importKey(keyString);
    const plaintext = await decryptMessage(key, ciphertext);
    setError(null);
    setOutput(plaintext);
  } catch (e) {
    console.error(e);
    setError("Error: Could not decrypt.");
  }
}

async function encryptMessage(key, plaintext) {
  return arrayBufferToBase64(await window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv: utf8Encoder.encode(iv)
    },
    key,
    utf8Encoder.encode(plaintext)
  ));
}

async function decryptMessage(key, ciphertext) {
  return utf8Decoder.decode(await window.crypto.subtle.decrypt(
    {
      name: "AES-CBC",
      iv: utf8Encoder.encode(iv)
    },
    key,
    base64ToArrayBuffer(ciphertext)
  ));
}

async function importKey(rawKey) {
  return await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(rawKey.padEnd(32, '\0')),
    {
      name: "AES-CBC",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
}

function base64ToArrayBuffer(b64) {
  var byteString = window.atob(b64);
  var byteArray = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  return byteArray;
}

function arrayBufferToBase64(buffer) {
  let s = '';
  let bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; ++i) {
    s += String.fromCharCode(bytes[i]);
  }

  return window.btoa(s);
}
