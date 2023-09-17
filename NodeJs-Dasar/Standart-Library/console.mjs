import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello World");
log.error("Error");

const person = {
  firstName: "Aditya",
  lastName: "Pratama",
};

log.table(person);
