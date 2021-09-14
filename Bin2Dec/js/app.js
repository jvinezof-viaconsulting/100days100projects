const inputBin = document.querySelector('.input.input--bin');
const inputDec = document.querySelector('.input.input--dec');

const bin2dec = (bin) => {
  const dec = parseInt(bin, 2);

  if (isNaN(dec)) return "";
  return dec;
}

const keyUpHandle = (event) => {
  const value = event.target.value;
  inputBin.value = value.replace(/[^0-1]/g, "");
  inputDec.value = bin2dec(inputBin.value);
}

inputBin.addEventListener("keyup", keyUpHandle);
