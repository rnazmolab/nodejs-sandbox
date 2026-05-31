const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

function composeMaterial(useLowercase, useUppercase, useNumbers, useSymbols) {
  let materialString = "";
  if (useLowercase) {
    materialString += lowercase;
  }
  if (useUppercase) {
    materialString += uppercase;
  }
  if (useNumbers) {
    materialString += numbers;
  }
  if (useSymbols) {
    materialString += symbols;
  }
  return materialString;
}

// 0 <= n <= max の範囲のランダムな整数を返す
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateRandomString(materials, length) {
  // TODO: Validate length if needed

  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += materials[getRandomInt(materials.length - 1)];
  }
  return randomString;
}

function main() {
  let length = 5;
  let useLowercase = true;
  let useUppercase = true;
  let useNumbers = true;
  let useSymbols = true;

  let materials = composeMaterial(
    useLowercase,
    useUppercase,
    useNumbers,
    useSymbols,
  );
  let randomString = generateRandomString(materials, length);

  console.log(randomString);
}

main();
