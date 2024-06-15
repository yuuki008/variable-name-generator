import { prompt } from 'inquirer';

export const main = async(): Promise<string> => {
  const { description } = await prompt<{ description: string }>({
    type: "input",
    name: "description",
    message: "変数の説明を入力してください"
  });

  return description;
};
