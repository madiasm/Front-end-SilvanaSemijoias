import Image from 'next/image';

type Product = {
  id: number;
  imageUrl: string;
  description: string;
  price: number;
};

type VitrineProps = {
  products: Product[];
};

export default function VitrineProdutos({ products }: VitrineProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="overflow-hidden rounded-md aspect-square bg-gray-100">
            <div className="relative h-full w-full">
              <Image
                src={product.imageUrl}
                alt={product.description}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="mt-2 text-center font-serif">
            <p className="truncate text-sm text-[#aa8c38]">{product.description}</p>
            <p className="mt-1 text-base text-[#aa8c38]">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}