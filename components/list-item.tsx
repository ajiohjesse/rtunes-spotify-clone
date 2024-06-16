'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPlay } from 'react-icons/fa';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ href, image, name }) => {
  const router = useRouter();

  const onClick = () => {
    //add authentication before push
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/20 transition pr-4"
    >
      <span className="block relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="image" />
      </span>

      <p className="font-medium truncate py-5">{name}</p>

      <span className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </span>
    </button>
  );
};

export default ListItem;
