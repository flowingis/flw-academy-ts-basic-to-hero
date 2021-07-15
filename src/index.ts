const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main: () => Promise<void> = async () => {
  await delay(1000);
  console.log("1s");
  await delay(1000);
  console.log("2s");
  await delay(1000);
  console.log("3s");
};

main();
console.log("Done script but waiting task");
