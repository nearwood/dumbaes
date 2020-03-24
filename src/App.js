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
      <textarea rows="8" cols="80" placeholder="input" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div id="buttons"><input id="key" type="text" placeholder="key" maxLength="32" value={key} onChange={(e) => setKey(e.target.value)}/><button onClick={() => encrypt(key, input, setOutput, setError)}>Encrypt</button><button onClick={() => decrypt(key, input, setOutput, setError)}>Decrypt</button></div>
      <div id="errors">{error}</div>
      <textarea rows="8" cols="80" placeholder="output" value={output} readOnly/>
      {/*<pre>{blah()}</pre>*/}
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

// function blah() {
//   let r = "";
//   //var p3 = '186';
//   var p3 = '054 056'; //'049 054 056'
//   //var p3 = '049 056 054';

//   //var p2 = '087 104 101 110 032 116 104 101';
//   var p2 = '087 104 110 032 116 104';
//   //var p1 = "When the Moon will shed no light With the Equinox close by In the dark a spellware rise Riding on a lightning strike Made of circuit boards and bytes Forged to cross our space and time Thru the storm my soul will guide To the path for glory and might Now just take some of your time While we share this ritual night There's a secret gift that hides But won't come without a fight First you need to get the rhyme When here comes the darkest night Then you take the first 8 bytes Count the pins and normalize Once you got the numbers right Just beware the odds are lies Line them in a row and write That will put the code in sight Now don't stress and take your time Sometimes words can trick your mind For in ASCII code you'll find The solution to these rhymes";
//   var p1 = "light by byte rise strike bytes time guide might time night hides fight rhyme night bytes normalize right lies write sight time mind find rhymes";

//   p1 = p1.split(' ');

//   p1.forEach(word => {
//     var code = word.split('').map(c => c.charCodeAt(0) % 2 === 0 ? ('' + c.charCodeAt(0)).padStart(3, '0') : null).join('');
//     //var code = word.split('').map(c => ('' + c.charCodeAt(0)).padStart(3, '0')).join('');
//     code += p2.split(' ').join('');
//     code += p3.split(' ').join('');
//     //if (code.length >= 30) {
//       //code = code.replace(/[1,3,5,7,9]+/g,'');
//       r += `${word} (${code.length}): ` + code + "\n";
//     //}
//   });

//   return r;
// }

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
