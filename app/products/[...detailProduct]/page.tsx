import { Product } from '@/app/types';
import DetailProduct from '@/app/components/DetailProduct/DetailProduct'

async function getProductById(idProduct: string): Promise<Product | null> {
    try {
        const response = await fetch('https://fakestoreapi.com/products/' + idProduct);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

export default async function Page({ params }: { params: { detailProduct: string } }) {
    const productId = params.detailProduct[0];
    const product = await getProductById(productId);
    if (!product) {
        return <div>Error: Product not found</div>;
    }else{
        return (<DetailProduct product={product} />)
    }
}

