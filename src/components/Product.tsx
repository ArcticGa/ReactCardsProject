import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div className="w-80 m-3 py-2 px-4 shadow-xl flex flex-col items-center mb-2">
      <img
        src={product.image}
        width="150px"
        height="150px"
        alt={product.title}
      />
      <p className="flex-1 mt-3">{product.title}</p>
      <p>{product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && (
        <div>
          <p> {product.description} </p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  )
}
