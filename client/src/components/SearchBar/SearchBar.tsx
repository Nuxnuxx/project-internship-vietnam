import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import fetchProductsByCategory from './fetchProductsByCategory'
import { useState } from 'react'
import { all } from '../ProductList/productDataSlice'
import fetchProductsBySemantic from './FetchProductsBySemantic'

const SearchBar = () => {
  const dispatch = useDispatch()
  const categories: CATEGORY[] = [
    'CATEGORY1',
    'CATEGORY2',
    'CATEGORY3',
    'CATEGORY4',
  ]

  const [selectedCategory, setSelectedCategory] = useState<CATEGORY>()
  const [shouldFetch, setShouldFetch] = useState(true)
  const [input, setInput] = useState("")
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

  const inputResult = useQuery(['semantic', input], fetchProductsBySemantic, {
    enabled: !!input,
    onSuccess: (data) => {
      setdata(data.saucisse)
    }
  })

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
      <input onChange={(e) => setInput(e.target.value)}/>
      {data.map((value, index) => (
        <div key={index}>
          <h1> {value.name}</h1>
          <p> {value.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchBar
