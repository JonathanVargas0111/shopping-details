import React from 'react'
import Image from 'next/image'
import { Product } from '@/app/types'

interface Props {
    product: Product
}

const DetailProduct = (props: Props) => {
    const { product } = props;
    return (
        <article className='container p-12'>
            <div className="flex flex-col md:flex-row">
                <div className='md:w-1/2'>
                    <Image
                        src={product.image}
                        width={200}
                        height={200}
                        alt="Product Image"
                        className="m-auto"
                    />
                </div>
                <div className="grid text-left my-8 md:w-1/2 md:my-0">
                    <h2 className="text-2xl my-2">{product.title}</h2>
                    <p className="text-xl my-2">${product.price}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:w-48">
                        Add to Cart
                    </button>
                    <p className="text-md my-2">{`Category: ${product.category}`}</p>
                </div>
            </div>
            <div className='md:mt-20'>
                <h3 className="text-lg">Description</h3>
                <p className="text-sm">{product.description}</p>

            </div>
        </article>
    )
}

export default DetailProduct