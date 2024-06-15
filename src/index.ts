import { prompt } from 'inquirer';
import { generateVariableNames } from './openai';
import dotenv from 'dotenv';

dotenv.config();

export const main = async() => {
  const { description } = await prompt<{ description: string }>({
    type: "input",
    name: "description",
    message: "変数の説明を入力してください"
  });

  const variableNames = await generateVariableNames(description);

  const { chosenName } = await prompt<{ chosenName: string }>({
    type: 'list',
    name: 'chosenName',
    message: '適切な変数名を選択してください:',
    choices: variableNames
  });

  console.log(`選択された変数名: ${chosenName}`)
};

main()
