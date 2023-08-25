import { Product } from '../types'
import CardProduct from '../components/CardProduct/CardProduct'


async function getListProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

const page = async () => {
  const listProducts = await getListProducts()
  return (
    <>
      <section className='conatiner w-5/6 p-12 mx-auto'>
        <h2 className='text-4xl my-12'>Nuestros Productos</h2>
        
        <div className='grid grid-flow-col-1 md:grid-cols-4 gap-4'>
          {listProducts.map((product: Product) => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

    </>
  )
}

export default page