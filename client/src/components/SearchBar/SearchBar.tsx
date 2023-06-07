import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import fetchProductsByCategory from './fetchProductsByCategory'
import { useState } from 'react'
import { all } from '../ProductList/productDataSlice'

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
    </div>
  )
}

export default SearchBar
