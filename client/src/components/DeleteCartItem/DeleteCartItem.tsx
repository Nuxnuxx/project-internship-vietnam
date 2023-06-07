import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteProductById from './DeleteProductById'
import { useAppSelector } from '../../utils/hooks'


const DeleteCartItem = ({id}:{id: string}) => {

  const { token } = useAppSelector((state) => state.userToken.value)
  const query = useQueryClient()

  const obj = {
    token: token as unknown as string,
    id: id
  }

  const mutation = useMutation({
    mutationFn: () => {
      return deleteProductById(['deleteProduct', obj])
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['cart']})
    }
  })

  return (
    <button className='button-delete-item' onClick={() => mutation.mutate()} />
  )
}

export default DeleteCartItem
