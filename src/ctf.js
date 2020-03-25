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