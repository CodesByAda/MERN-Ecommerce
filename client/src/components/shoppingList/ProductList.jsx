import ProductCard from './ProductCard'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/productServices';
import LoadingScreeen from '../LoadingScreen'
import InternalServerError from '../InternalServerError';

const ProductList = ({ handleFilterMenu }) => {
    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    return (
        <div className='h-screen overflow-x-scroll border-1 border-gray-200 grow shadow-md w-64 mb-3'>
            <div className='border-b-1 p-4 border-b-gray-200 bg-white flex items-center justify-between'>
                <h2 className='text-xl font-bold'>Products</h2>
                <i className='fas fa-filter text-xl' onClick={() => window.innerWidth <= 1024 && handleFilterMenu()}></i>
            </div>
            {
                isLoading ? (<LoadingScreeen />) : isError ? <InternalServerError error={error}/> : (
                    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            products.map(product => (
                                <ProductCard key={product._id} productId={product._id} name={product.name} image={product.thumbnail} category={product.category} price={product.price} />
                            ))
                        }

                    </div>
                )
            }

        </div>
    )
}

export default ProductList