import Link from 'next/link';

export default function ProductsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>  
        {children}
      </section>
    )
  }