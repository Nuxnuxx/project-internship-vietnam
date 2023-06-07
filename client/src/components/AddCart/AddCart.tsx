import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import mutateCart from "./mutateCart"
import { useAppSelector } from "../../utils/hooks"

const AddCart = ({productId}:{productId:string}) => {
  const [quantity, setQuantity] = useState(1)
  
  const { token } = useAppSelector((state)=> state.userToken.value);

  const obj = {
    productId: productId,
    quantity: quantity,
    token: token
  }
  const addMutation = useMutation({
    mutationFn: () => {
      return mutateCart(['itemInfo', obj])
    },
    onSuccess:(data) => {
    }
  })

  return (
    <>
      <input 
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        min="1"
      />
      <button onClick={() => addMutation.mutate()} disabled={addMutation.isLoading}>
        {addMutation.isLoading ? 'Adding to cart...' : 'Add to Cart'}
      </button>
    </>
  )
}
export default AddCart
