import { QueryFunction } from '@tanstack/react-query'

type message = {
  question: string,
  answer: string,
  score: number 
}

type ChatBotResponse = {
  message: message[]
}


const fetchChatBot: QueryFunction<ChatBotResponse, ['request',string]> = async ({ queryKey }) => {
  const request = queryKey[1]
  const response =  await fetch(`http://localhost:8000/api/chatbot/${request}`)
  const data: ChatBotResponse = await response.json() 
  return data
}
export default fetchChatBot
