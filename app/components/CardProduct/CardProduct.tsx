import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/app/types';

interface Props {
  product: Product;
}

const CardProduct = (props: Props) => {
  const { product } = props;
  // Accede a la URL de la imagen
  /*  const imageUrl = product.image.data[0].attributes.url;
   const urlImg = "http://localhost:1337"+imageUrl */
  const { id, title, price } = product

  return (
    <div className="flex flex-col bg-gray-200">
      <Link href={`/products/${id}/${title}`}>
        <div className="flex flex-col items-center space-x-4 w-full">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt="Product Image"
            className="w-full"
          />
          <div className="flex flex-col h-full p-4">
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-sm opacity-50">${product.price}</p>
          </div>
        </div>
      </Link>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto md:w-48">
        Add to Cart
      </button>
    </div>
  )
}

export default CardProduct