import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

const Section: React.FC<{
    image: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({ image, tag, title, description }) => {
  return (
    <section className='relative h-screen overflow-hidden'>
      <div className='absolute w-full h-[120%] -z-10'>
        <div className='absolute inset-0 bg-black/30 z-10'/>
          <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
        <div className='flex flex-col gap-4 p-24'>
            <span  className='text-xs uppercase'>{tag}</span>
            <h1 className='font-serif text-4xl max-w-[25ch]'>{title}</h1>
            <p className='max-w-[50ch]'>{description}</p>
        </div>
    </section>
  );
};

export default Section;

