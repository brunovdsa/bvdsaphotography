import { useState } from 'react';
import { DataProps } from '../../App';
import { DownloadIcon } from '../Icons';

export function Card(props: DataProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  console.log(isHovering);
  return (
    <div className='relative'>
      <div
        className='flex justify-center items-center transition ease-in-out duration-300  hover:shadow-md'
        key={props.id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img className='h-auto' src={props.src} alt={props.alt} />
        {isHovering && (
          <div className='flex justify-between content-center items-end py-4 px-5 bg-gradient-to-b from-transparent to-zinc-950 h-full w-full absolute'>
            <DownloadIcon />
            <span className='text-zinc-50'>{props.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
