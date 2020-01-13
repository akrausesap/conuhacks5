const fs = require('fs');

const regex = /^[A-F0-9]{4,5}(\.\.[A-F0-9]{4,5})?/g;
const formatted = fs.readFileSync('./emoji-data-selected.txt', 'utf8');

const emojies = formatted.split('\n').reduce((acc, line) => {
  const match = line.match(regex);
  
  if (!match || match.length === 0) {
    return acc;
  }

  const ranges = match[0].split('..');

  if (ranges.length === 1) {
    acc.push(...ranges);
    return acc;
  }

  const until = parseInt(ranges[1], 16);

  for (let index = parseInt(ranges[0], 16); index <= until; index++) {
    acc.push(index.toString(16).toLocaleUpperCase());
  }

  return acc;
}, []);

fs.writeFileSync('emojis.json', JSON.stringify(emojies));