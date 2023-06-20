import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import fetchChatBot from './fetchChatBot'
import { useDispatch } from 'react-redux'
import { add } from './chatMessageSlice.ts'
import Loading from '../Loading/Loading.tsx'
import CloseIcon from '../../assets/img/close.svg'
import RobotIcon from '../../assets/img/robot.svg'

const ChatBot = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const handleBubbleClick = () => {
    setIsOpen(!isOpen)
  }
  const [userRequest, setUserRequest] = useState('')
  const { token } = useAppSelector((state) => state.userToken.value)
  const messages = useAppSelector((state) => state.discussion.value)

  const { isLoading } = useQuery(['request', userRequest], fetchChatBot, {
    onSuccess: (data) => {
      console.log(data.message[0].answer)
      dispatch(add({ origin: 'bot', text: data.message[0].answer }))
    },
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        <div className='chatbot-header'>
          <img src={RobotIcon} alt='img-robot' />
          <img
            src={CloseIcon}
            className='close'
            alt='close'
            onClick={() => setIsOpen(false)}
          />
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
                  const request = form.get('request')?.toString()
                  if (request) {
                    setUserRequest(request)
                    dispatch(add({ origin: 'user', text: request }))
                  }
                }}
              >
                <input name='request' placeholder='ask Fred' />
                <button>Send</button>
              </form>
            </div>
          </>
        )}
      </div>
      {!isOpen ? (
        <div className='bubble' onClick={handleBubbleClick}>
          <img src={RobotIcon} alt='img-robot' />
        </div>
      ) : null }
    </>
  )
}

export default ChatBot
