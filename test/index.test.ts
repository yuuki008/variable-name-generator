import { prompt } from 'inquirer';
import { main } from "../src/index";

jest.mock('inquirer');

const mockedPrompt = prompt as jest.MockedFunction<typeof prompt>;

describe("CLI", () => {
  const description = "hogehoge";
  const chosenName = "foofoo"

  beforeEach(() => {
    mockedPrompt.mockClear();
    mockedPrompt.mockResolvedValueOnce({ description })
                // .mockResolvedValueOnce({ chosenName });
  });

  it ("入力した description が返ること", async () => {
    const res = await main();

    expect(res).toBe(description);
  });
});
