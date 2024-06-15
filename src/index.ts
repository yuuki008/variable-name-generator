import { prompt } from 'inquirer';
import { generateVariableNames } from './openai';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config();

const descriptionValidate = async(input: string) => {
  if (!input) return "入力してください"

  return true
};

export const main = async() => {
  const { description } = await prompt<{ description: string }>({
    type: "input",
    name: "description",
    message: "変数の説明: ",
    validate: descriptionValidate
  });

  const res = await generateVariableNames(description);

  if (!res.success) return console.log(res.message);

  const { chosenName } = await prompt<{ chosenName: string }>({
    type: 'list',
    name: 'chosenName',
    message: '変数名: ',
    choices: res.variables
  });

  execSync(`echo "${chosenName}" | clipboard`);
  console.log(`${chosenName}をコピーしました。`)
};

main()
