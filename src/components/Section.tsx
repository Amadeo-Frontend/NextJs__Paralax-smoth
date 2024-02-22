import { motion, useScroll, useTransform } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useRef } from 'react';

const Section: React.FC<{
    image: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({ image, tag, title, description }) => {
const sectionRef = useRef(null);
const {scrollYProgress} = useScroll({
  target: sectionRef,
  offset:['start end', 'end start'],
})
const y = useTransform(scrollYProgress, [0,1], ['-20%','10%'])
  return (
    <section ref={sectionRef} className='relative h-screen overflow-hidden'>
      <motion.div className='absolute w-full h-[120%] -z-10' style={{top:y}}>
        <div className='absolute inset-0 bg-black/30 z-10'/>
          <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </motion.div>
        <div className='flex flex-col gap-4 p-24'>
            <span  className='text-xs uppercase'>{tag}</span>
            <h1 className='font-serif text-4xl max-w-[25ch]'>{title}</h1>
            <p className='max-w-[50ch]'>{description}</p>
        </div>
    </section>
  );
};

export default Section;

