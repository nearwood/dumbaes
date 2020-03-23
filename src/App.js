import React, { useState } from 'react';
import './App.css';

function App() {
  const [cipherText, setCipherText] = useState("6k3teSVVjbc6AxRpghGZ6Zxq2igsO6ZTaw+7tC9y7pSWObcZBydHsuuykMaOtr/xKSD8uA7lVkurGPkv7vK469AOkWkJBS2IuiMU8ploCziWvffkhyiSS2MRUEp9aRlH/9gdGuR5tAfMZEz4zHjqkt0eAfDe6y8yozwYWxIHSMzYHzFe37e5FaA/XXYXBQEz5/i9SKSNJsms002OrJCljVcHl4jCD7m1y3o7hBuaonGKpc9iY3+s3DIdqRJ8nP2Fa5cJx/IkDoiVvsyAVkq/Aue3pd6Fub4uzB5nambt0JVYAIO+GORdRwiLiuDIA4EvrKLZYv6z8CKkHdqjfC8KJmTRFwa+kwm2pLuUwaLIGSI=");
  const [key, setKey] = useState("");

  return (
    <div className="App">
      <textarea rows="8" cols="80" placeholder="ciphertext" value={cipherText} onChange={(e) => setCipherText(e.target.value)}/>
      <input type="text" size="72" placeholder="key" value={key} onChange={(e) => setKey(e.target.value)}/>
      <div id="buttons"><button onClick={() => encrypt(key)}>Encrypt</button> <button onClick={decrypt}>Decrypt</button></div>
      <div id="errors"></div>
      <textarea rows="8" cols="80" placeholder="output"/>
      <pre>{blah()}</pre>
    </div>
  );
}

function encrypt(keyString) {
  initCrypto(keyString, (key) => {
    console.log(key);
  });
}

function decrypt() {

}

function blah() {
  let r = "";
  //var p3 = '186';
  var p3 = '054 056'; //'049 054 056'
  //var p3 = '049 056 054';

  //var p2 = '087 104 101 110 032 116 104 101';
  var p2 = '087 104 110 032 116 104';
  //var p1 = "When the Moon will shed no light With the Equinox close by In the dark a spellware rise Riding on a lightning strike Made of circuit boards and bytes Forged to cross our space and time Thru the storm my soul will guide To the path for glory and might Now just take some of your time While we share this ritual night There's a secret gift that hides But won't come without a fight First you need to get the rhyme When here comes the darkest night Then you take the first 8 bytes Count the pins and normalize Once you got the numbers right Just beware the odds are lies Line them in a row and write That will put the code in sight Now don't stress and take your time Sometimes words can trick your mind For in ASCII code you'll find The solution to these rhymes";
  var p1 = "light by byte rise strike bytes time guide might time night hides fight rhyme night bytes normalize right lies write sight time mind find rhymes";

  p1 = p1.split(' ');

  p1.forEach(word => {
    var code = word.split('').map(c => c.charCodeAt(0) % 2 === 0 ? ('' + c.charCodeAt(0)).padStart(3, '0') : null).join('');
    //var code = word.split('').map(c => ('' + c.charCodeAt(0)).padStart(3, '0')).join('');
    code += p2.split(' ').join('');
    code += p3.split(' ').join('');
    //if (code.length >= 30) {
      //code = code.replace(/[1,3,5,7,9]+/g,'');
      r += `${word} (${code.length}): ` + code + "\n";
    //}
    //r += decryptMessage(code, Uint8Array.from(atob(""), c => c.charCodeAt(0)));
  });

  async function decryptMessage(key, ciphertext) {
    return await window.crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv: "\x31\x32\x33\x34\x35\x36\x37\x38\x62\x30\x7a\x32\x33\x34\x35\x6e"
      },
      key,
      ciphertext
    );
  }

  return r;
}

function initCrypto(rawKey, next) {
  window.crypto.subtle.importKey("raw", stringToArrayBuffer(rawKey.padStart(32, '\0')), { name: "AES-CBC", length: 256 }, true, ["encrypt", "decrypt"])
    .then((key) => {
      next(key);
    });
}

function stringToArrayBuffer(s) {
  var byteArray = new Uint8Array(s.length);
  for (var i = 0; i < s.length; i++) {
    byteArray[i] = s.charCodeAt(i);
  }

  return byteArray;
}

function base64ToArrayBuffer(b64) {
  var byteString = window.atob(b64);
  return stringToArrayBuffer(byteString);
}

export default App;
