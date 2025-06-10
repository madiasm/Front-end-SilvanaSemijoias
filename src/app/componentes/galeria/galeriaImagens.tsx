import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
};

type GaleriaProps = {
  images: ImageProps[];
};

export default function GaleriaImagens({ images }: GaleriaProps) {
  return (
    // Este é o container da nossa galeria em grid
    <div className="grid grid-cols-2 gap-0 md:grid-cols-6">
      {/* .map para criar um card para cada imagem da lista */}
      {images.map((image, index) => (
        <div key={index} className="group relative aspect-[calc(1*3+1)/3] rounded-lg shadow-sm">
          {/* O componente Image do Next.js para otimização */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}