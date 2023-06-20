import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import fetchProductsByCategory from './fetchProductsByCategory'
import { useEffect, useState } from 'react'
import { all } from '../ProductList/productDataSlice'
import fetchProductsBySemantic from './FetchProductsBySemantic'
import SemanticSearchCard from '../SemanticSearchCard/SemanticSearchCard'
import ChatBot from '../ChatBot/ChatBot'

const SearchBar = () => {
  const dispatch = useDispatch()
  const categories: CATEGORY[] = [
    'HIKING',
    'BASKETBALL',
    'BOXING',
    'RUNNING',
    'TENNIS',
    'CAMPING',
    'SWIMMING',
  ]
  const [selectedCategory, setSelectedCategory] = useState<CATEGORY>()
  const [shouldFetch, setShouldFetch] = useState(true)
  const [input, setInput] = useState('')
  const [data, setdata] = useState([])

  const result = useQuery(
    ['productsByCategory', selectedCategory],
    fetchProductsByCategory,
    {
      enabled: shouldFetch,
      onSuccess: (data) => {
        dispatch(all(data.products))
        setShouldFetch(false)
      },
    },
  )

  const [debouncedInput, setDebouncedInput] = useState({
    value: '',
    hasBeenDebounced: false,
  })

  const inputResult = useQuery(
    ['semantic', debouncedInput.value],
    fetchProductsBySemantic,
    {
      enabled: !!debouncedInput.value && debouncedInput.hasBeenDebounced,
      onSuccess: (data) => {
        setdata(data.saucisse)
      },
      refetchOnWindowFocus: false,
    },
  )

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput((prevInput) => ({
        ...prevInput,
        value: input,
        hasBeenDebounced: true,
      }))
    }, 900)

    return () => {
      clearTimeout(handler)
    }
  }, [input])

  return (
    <div className='search-bar'>
      <div className='checkbox-list'>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category)
              setShouldFetch(true)
              result.remove()
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='semantic'>
        <input
          placeholder='What do you search'
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='semantic-list'>
          {input &&
            data.map((value, index) => {
              return <SemanticSearchCard key={index} id={value.id} />
            })}
        </div>
      </div>
      <ChatBot/>
    </div>
  )
}

export default SearchBar
