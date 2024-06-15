
import { Configuration, OpenAIApi } from 'openai';
require('dotenv').config();

console.log(process.env.OPENAI_API_KEY);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateVariableNames = async(description: string): Promise<string[]> => {
  console.log(process.env.OPENAI_API_KEY);

  const model = 'gpt-4';  // 最新のモデルを使用
  const prompt = `提案された変数名を日本語の説明に基づいて生成してください: ${description}`;

  try {
    const response = await openai.createChatCompletion({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 50,
      temperature: 0.7,
    });

    return response.data.choices.map((choice: any) => choice.message.content.trim());
  } catch (error: any) {
    console.error("Error generating variable names: ", error.response ? error.response.data : error.message);
    throw error;
  }
}

