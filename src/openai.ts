import { Configuration, OpenAIApi } from 'openai';

console.log(process.env.OPENAI_API_KEY);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateVariableNames = async(description: string): Promise<string[]> => {
  console.log(process.env.OPENAI_API_KEY);

  const model = 'gpt-4';
  const prompt = `提案された変数名を日本語の説明に基づいて生成してください: ${description}`;


  try {
    const response = await openai.createCompletion({
      model,
      prompt,
      max_tokens: 50,
      n: 5,
      stop: null,
      temperature: 0.7,
    });

    return response.data.choices.map((choice: any) => choice.text.trim());
  } catch (error: any) {
    console.error("Error generating variable names: ",  error.response ? error.response.data : error.message);
    throw error;
  };
}

