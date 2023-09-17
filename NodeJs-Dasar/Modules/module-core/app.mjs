import fs from "fs";
import { json } from "node:stream/consumers";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Nama Anda : ", (nama) => {
  rl.question("Masukan Nomor Hp : ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("./data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
    console.log("Terimah Kasih Sudah Memasukan Data");
    rl.close();
  });
});
