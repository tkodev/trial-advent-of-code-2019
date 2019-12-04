import { readFile } from 'fs';
import { join } from 'path';

function getInputArr(text) {
  return text.replace(/\n+$/, '').split(/,\s?/).map((str) => parseInt(str, 10))
}

function restoreSavedValues(arr){
  const rslt = [...arr];
  rslt[1] = 12;
  rslt[2] = 2;
  return rslt;
}

function computeProgram(arr){
  const rslt = [...arr];
  let idx = 0;
  while (idx < rslt.length) {
    const [op, pos1, pos2, pos3] = [rslt[idx], rslt[idx+1], rslt[idx+1], rslt[idx+3]]
    if (op === 1) {
      rslt[pos3] = rslt[pos1] + rslt[pos2]
    } else if (op === 2) {
      rslt[pos3] = rslt[pos1] * rslt[pos2]
    } else if (op === 99) {
      break;
    }
    idx += 4;
  }
  return rslt;
}

readFile(join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  const arr = getInputArr(data);
  const arrSavedValues = restoreSavedValues(arr);
  const rslt = computeProgram(arrSavedValues);
  console.log('[2.1] Solution:', rslt[0]);
});
