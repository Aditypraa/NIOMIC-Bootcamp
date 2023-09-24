import chalk from "chalk";

console.log(chalk.red("Hello Wolrd"));
console.log(" ");
console.log(chalk.italic("Hello Wolrd"));
console.log(" ");
console.log(chalk.green.bgRed("Hello Wolrd"));
console.log(" ");

const pesan = "Mencoba Warna";
console.log(chalk.bgGray.blue.bold(pesan));
