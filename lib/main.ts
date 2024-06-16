#!/usr/bin/env node

import inquirer from 'inquirer';
import { generateVariableNames } from './openai.js';
import dotenv from 'dotenv';
import clipboard from 'clipboardy';

dotenv.config();

const descriptionValidate = async (input: string) => {
    if (!input) return "入力してください";
    return true;
};

const main = async () => {
    const { description } = await inquirer.prompt({
        type: "input",
        name: "description",
        message: "説明",
        validate: descriptionValidate
    });

    const res = await generateVariableNames(description);
    if (!res.success) return console.log(res.message);

    const { chosenName } = await inquirer.prompt({
        type: 'list',
        name: 'chosenName',
        message: '候補',
        choices: res.variables
    });

    clipboard.writeSync(chosenName);
    console.log(`${chosenName}をコピーしました。`);
};

main();

