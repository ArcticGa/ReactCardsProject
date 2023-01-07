import { ErrorMessage } from '../components/Error'
import { CreateProduct } from '../components/CreateProduct'
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal'
import { Product } from '../components/Product'
import { useProducts } from '../hooks/useProducts'
import { useContext } from 'react'
import { IProduct } from '../models'
import { ModalContext } from '../context/modal.context'

export function ProductPage() {
  const { products, loading, error, addProduct } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  function createHandler(product: IProduct) {
    close()
    addProduct(product)
  }
  return (
    <div className="container flex flex-wrap mx-auto pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal onClose={() => close()} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  )
}
