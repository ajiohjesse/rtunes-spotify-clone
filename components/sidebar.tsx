'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiMusic, BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from './box';
import SidebarItem from './sidebar-item';
import Library from './library';
import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <div
      className={twMerge(
        'h-full flex',
        player.activeId && 'h-[calc(100%-80px)]'
      )}
    >
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <div className="">
              <p className="text-green-500 flex items-center gap-2 font-bold uppercase text-2xl">
                <BiMusic className="inline" />
                R-Tunes
              </p>
              <p className="text-sm text-neutral-400">Feel the music...</p>
            </div>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
