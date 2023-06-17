import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import fetchChatBot from './fetchChatBot'
import { useDispatch } from 'react-redux'
import { add } from './chatMessageSlice.ts'

const ChatBot = () => {
  const dispatch = useDispatch()
  const [userRequest, setUserRequest] = useState('')
  const { token } = useAppSelector((state) => state.userToken.value)
  const messages = useAppSelector((state) => state.discussion.value)

  const response = useQuery(['request', userRequest], fetchChatBot, {
    onSuccess: (data) => {
      console.log(data.message[0].answer)
      dispatch(add({origin: "bot", text: data.message[0].answer}))
    },
  })

  return (
    <>
      <div className='chatbot'>
        <div className='chatbot-header'>
          <img src='../assets/img/message-bot.png' />
        </div>
        {!token ? (
          <div className='chatbot-notlogin'>
            Login to access to the chatbot
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        ) : (
          <>
            <div className='chatbot-body'>
              {messages.map((message, index) => {
                if (message.origin == 'bot') {
                  return (
                    <div className='message bot-message' key={index}>
                      {message.text}
                    </div>
                  )
                } else {
                  return (
                    <div className='message user-message' key={index}>
                      {message.text}
                    </div> 
                  )
                }
              })}
            </div>
            <div className='chatbot-searchbar'>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  let form = new FormData(event.currentTarget)
                  let request = form.get('request')?.toString()
                  if (request) {
                    setUserRequest(request)
                    dispatch(add({origin: 'user', text: request}))
                  }
                }}
              >
                <input name='request' placeholder='ask Fred' />
                <button>Click</button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ChatBot
