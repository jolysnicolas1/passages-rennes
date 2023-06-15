import Image from "next/image";

const ImageCol = ({images}: {images: string[]}) => {
  return <>{images.map(image => <div           key={image}
    ><Image
    
              className=""
              src={image}
              width={300}
              height={1000}
              alt=""
              quality={100}
            /></div>)}</>
}

const images = ["/portfolio10.jpg", "/portfolio11.jpg", "/portfolio12.jpg", "/portfolio13.jpg", "/portfolio10.jpg", "/portfolio11.jpg"]

export default function Gallery() {
  return (
    <div className="mx-auto max-w-4xl flex space-x-4 m-5 mb-12">

      <div className='flex flex-col space-y-4'>
        <ImageCol images={images} />
      </div>

      <div className='flex flex-col space-y-4'>
        <ImageCol images={images} />
      </div>
      
      <div className='flex flex-col space-y-4'>
        <ImageCol images={images} />
      </div>

    </div>
  )
}