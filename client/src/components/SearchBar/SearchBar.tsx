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

  const [selectedCategory, setSelectedCategory] = useState<CATEGORY | null>(
    null,
  )

  const result = useQuery(
    ['productsByCategory', selectedCategory],
    fetchProductsByCategory,
    {
      enabled: selectedCategory !== null,
      onSuccess: (data) => {
        dispatch(all(data))
      },
    },
  )

  return (
    <div className='search-bar'>
      <div className='checkbox-list'>
        {categories.map((category) => (
          <button
            onClick={() => {
              setSelectedCategory(category)
              result.refetch()
            }}
          >
            {' '}
            {category}{' '}
          </button>
        ))}
      </div>
      <button> Search </button>
    </div>
  )
}

export default SearchBar
