function printAfter1sec(sentence: string) {
  setTimeout(() => {
    console.log(sentence);
  }, 1000);
}
printAfter1sec("print after sec");
