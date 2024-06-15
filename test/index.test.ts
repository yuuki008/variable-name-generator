import { prompt } from 'inquirer';
import dotenv from 'dotenv';
import { main } from "../src/index";

dotenv.config();

describe("Hello World", () => {
  it ("call main", () => {
    const res = main();

    expect(res).toBe("Hello World");
  });
});
