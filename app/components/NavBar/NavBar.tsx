import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 justify-end">
        <div className="flex space-x-4">
          <Link href="/" className='text-white hover:text-gray-300'>
            Home
          </Link>
          <Link href="/products" className='text-white hover:text-gray-300'>
            Productos
          </Link>
          <Link href="/coverage" className='text-white hover:text-gray-300'>
            Domicilios
          </Link>
          <Link href="/contact" className='text-white hover:text-gray-300'>
            Contáctenos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
