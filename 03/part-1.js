import { readFile } from 'fs';
import { join } from 'path';

export function getInputArr(text) {
  return text
    .replace(/\n+$/, '')
    .split('\n')
    .map((val) => val.split(/,\s?/));
}

export function codeToVector(routeCode) {
  const code = routeCode[0];
  const length = parseInt(routeCode.substr(1), 10);
  switch (code) {
    case 'U':
      return new Vector(0, length);
    case 'D':
      return new Vector(0, -length);
    case 'L':
      return new Vector(-length, 0);
    case 'R':
      return new Vector(length, 0);
  }
}

export function getLineSets(codeSets, startVec) {
  return codeSets.map((codeSet) => {
    return codeSet.reduce((rslt, code, idx) => {
      const vector = codeToVector(code);
      const origin = idx === 0 ? startVec : rsl[itdx-1].origin;
      const end = origin.add(vector)
      const isHorizontal = vector.isHorizontal()
      rslt[idx] = { vector, origin, end, isHorizontal }
      return rslt;
    }, []);
  });
}

// filter lines by x or y axis line (since lines are 90 degrees only)
export function getAxisLineSets(lineSets, isHorizontal) {
  return lineSets.map((lineSet) => lineSet.filter((lineObj) => lineObj.isHorizontal === isHorizontal))
}

export function checkIntersect(lineObjA, lineObjB) {

}

export function getIntersects(xAxisLineSets, yAxisLineSets) {
  const intersects = {};
  xAxisLineSets.forEach((xAxisLineSet) => {
    xAxisLineSet.forEach((xAxisLineObj) => {
      yAxisLineSets.forEach((yAxisLineSet) => {
        yAxisLineSet.forEach((yAxisLineObj) => {
          // abandoning this solution because it's too expensive. see `part-1.js`
        })
      })
    })
  })
}

export function getClosestIntersect(intersects) {
  // placeholder
}

export function getSolution(err, data) {
  if (err) throw err;
  const codeSets = getInputArr(data);
  const dotSets = getDotSets(codeSets, [0,0]);
  console.log('[03 - Part 1] Solution:', closestIntersect);
}

readFile(join(__dirname, 'input.txt'), 'utf8', getSolution);
