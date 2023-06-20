import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import updateProductQuantityInCart from './fetchUpdateQuantity'
import { useAppSelector } from '../../utils/hooks'

const AdminUpdateQuantity = ({ id }: { id: string }) => {
  const [quantity, setQuantity] = useState('')

  const { token } = useAppSelector((state) => state.userToken.value)
  const mutation = useMutation((newQuantity: number) =>
    updateProductQuantityInCart({ productId: id, quantity: newQuantity, token: token as unknown as string }),

  )

  const handleUpdate = () => {
    // Converting quantity string to number before sending it to the server
    mutation.mutate(Number(quantity))
    console.log(quantity)
  }

  if (mutation.isLoading) {
    return <span>Updating...</span>
  }

  if (mutation.isSuccess) {
    return <span>Update successful!</span>
  }

  return (
    <div className='update'>
      <input
        placeholder='new quantity'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default AdminUpdateQuantity
