
import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum, ChatCompletionRequestMessage } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

interface VariableResponse {
  success: boolean;
  message: string;
  variables: string[];
}

export const generateVariableNames = async (description: string): Promise<VariableResponse> => {
  const model = 'gpt-4';
  const messages: ChatCompletionRequestMessage[] = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: "あなたは優秀なアシスタントです。JSONで結果を出力します。"
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: "今から送る説明に基づいて適切な変数名を生成してください。生成に成功したかどうかをsuccess、候補となる変数名をvariablesというキーとしてください。またsuccessがfalseだった場合は、エラーメッセージをmessageというキーに格納してください。"
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: description
    }
  ];

  try {
    const response: any = await openai.createChatCompletion({
      model,
      messages,
      max_tokens: 150,
      temperature: 0.7,
    });

    const responseContent = response.data.choices[0].message.content.trim();
    const jsonResponse: VariableResponse = JSON.parse(responseContent);

    return jsonResponse;
  } catch (error: any) {
    return {
      success: false,
      message: error.response ? error.response.data.error.message : error.message,
      variables: [],
    };
  }
}

