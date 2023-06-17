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
      dispatch(add({ origin: 'bot', text: data.message[0].answer }))
    },
  })

  return (
    <>
      <div className='chatbot'>
        <div className='chatbot-header'>
          <div>
            <img src='../src/assets/img/robot.svg' />
            <p className='name'> FredBot</p>
          </div>
          <button className='close'>
            <img src='../src/assets/img/close.svg' />
          </button>
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
                  const form = new FormData(event.currentTarget)
                  if (userRequest) {
                    dispatch(add({ origin: 'user', text: userRequest }))
                  }
                  setUserRequest('')
                }}
              >
                <input
                  value={userRequest}
                  name='request'
                  onChange={(e) => setUserRequest(e.target.value)}
                  placeholder='ask Fred'
                />
                <button>
                  <img
                    src='../../../src/assets/img/play.svg'
                    alt='send-message'
                  />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ChatBot
