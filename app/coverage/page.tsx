import React from 'react';

interface CoverageGroup {
    name: string;
    map: string;
    price: number;
}

const page = () => {
    const coverageGroups: CoverageGroup[] = [
        {
            name: 'Bogota',
            map: 'Map A',
            price: 100,
        },
        {
            name: 'Funza',
            map: 'Map B',
            price: 150,
        },
        {
            name: 'Mozquera',
            map: 'Map C',
            price: 200,
        },
        {
            name: 'Siberia',
            map: 'Map D',
            price: 250,
        },
    ];

    return (
        <section className="mx-auto p-4 md:px-40">
            <h2 className="text-4xl font-semibold mb-4 text-center">Cobertura Domicilios</h2>
            <div className='grid grid-cols-2'>
                {coverageGroups.map((group, index) => (
                    <div key={index} className="p-4 text-center">
                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{group.name}</h3>
                        <p className="text-lg font-semibold">${group.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default page;
