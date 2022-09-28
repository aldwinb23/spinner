
const spinnerArray = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\n"];
let delay = 500;

for (let spinner of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, delay)
  delay += 500;
}
