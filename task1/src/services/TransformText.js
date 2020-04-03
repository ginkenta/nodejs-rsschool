function transform(txt, shift, action) {
  txt = txt.toString();

  if (shift > 26) shift = shift % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const newAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

  let transformedText = '';

  for (let i = 0; i < txt.length; i++) {
    const sing =
      txt[i] === txt[i].toUpperCase() ? txt[i].toLowerCase() : txt[i];
    if (alphabet.includes(sing)) {
      if (action === 'encode') {
        transformedText +=
          txt[i] === txt[i].toUpperCase()
            ? newAlphabet[alphabet.indexOf(sing)].toUpperCase()
            : newAlphabet[alphabet.indexOf(sing)];
      } else {
        transformedText +=
          txt[i] === txt[i].toUpperCase()
            ? alphabet[newAlphabet.indexOf(sing)].toUpperCase()
            : alphabet[newAlphabet.indexOf(sing)];
      }
    } else {
      transformedText += txt[i];
    }
  }

  return transformedText;
}

module.exports = transform;
