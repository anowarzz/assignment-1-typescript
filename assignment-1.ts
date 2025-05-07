// problem -1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("gunHfjdkjdfIdfdf")); // Output: "HELLO"
console.log(formatString("anoar hosen", true)); // Output: "HELLO"
console.log(formatString("aFNAODFJDKF", false)); // Output: "hello"


