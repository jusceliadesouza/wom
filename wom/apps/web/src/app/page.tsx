import {
  Bell,
  CalendarDays,
  Heart,
  Home as HomeIcon,
  MessageCircleMore,
  PlusSquare,
  Search,
  UserRound
} from 'lucide-react'

import Capa from '../assets/capa.jpg'
import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-4 px-4 py-8'>
        <header className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <img
              src='https://images.unsplash.com/photo-1439402702863-6434b61e6392'
              className='rounded-full w-16 h-16 bg-cover border-success-400 border-4 '
              alt='profile image'
            />

            <CalendarDays size={32} className='text-primary-300' />
          </div>

          <div className='flex space-x-8'>
            <Heart size={32} className='text-primary-300' />

            <MessageCircleMore size={32} className='text-primary-300' />
          </div>
        </header>

        <main>
          <div className='flex justify-start'>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-4'>
                  <div className='flex space-x-2 items-center'>
                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='rounded-full w-[1.625rem] h-[1.625rem] border-success-400 border-2'
                    />

                    <span className='text-caption font-semibold'>
                      Isabela Souza
                    </span>
                  </div>

                  <div className='flex w-[8.75rem] h-[11.25rem] border-primary-400 rounded-lg'>
                    <Image
                      src={Capa}
                      alt='Capa'
                      className='w-full bg-cover rounded-lg'
                    />

                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='absolute mt-[8.25rem] ml-3 rounded-full w-[2.25rem] h-[2.25rem] border-success-400 border-2'
                    />
                  </div>
              </div>

              <div className='flex flex-col gap-4'>
                  <div className='flex space-x-2 items-center'>
                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='rounded-full w-[1.625rem] h-[1.625rem] border-success-400 border-2'
                    />

                    <span className='text-caption font-semibold'>
                      Isabela Souza
                    </span>
                  </div>

                  <div className='flex w-[8.75rem] h-[11.25rem]'>
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt='Capa'
                      width={140}
                      height={180}
                      className='bg-cover rounded-lg'
                    />

                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='absolute mt-[8.25rem] ml-3 rounded-full w-[2.25rem] h-[2.25rem] border-success-400 border-2'
                    />
                  </div>
              </div>
              
              <div className='flex flex-col gap-4'>
                  <div className='flex space-x-2 items-center'>
                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='rounded-full w-[1.625rem] h-[1.625rem] border-success-400 border-2'
                    />

                    <span className='text-caption font-semibold'>
                      Isabela Souza
                    </span>
                  </div>

                  <div className='flex w-[8.75rem] h-[11.25rem] border-primary-400 rounded-lg'>
                    <Image
                      src={Capa}
                      alt='Capa'
                      className='w-full bg-cover rounded-lg'
                    />

                    <img
                      src='https://github.com/jusceliadesouza.png'
                      className='absolute mt-[8.25rem] ml-3 rounded-full w-[2.25rem] h-[2.25rem] border-success-400 border-2'
                    />
                  </div>
              </div>              
            </div>
          </div>
        </main>
      </div>

      <footer className='flex items-center justify-between w-full px-4 py-5 bg-primary-200'>
        <HomeIcon size={24} className='text-primary-300' />
        <Search size={24} className='text-primary-300' />
        <PlusSquare size={24} className='text-primary-300' />
        <Bell size={24} className='text-primary-300' />
        <UserRound size={24} className='text-primary-300' />
      </footer>
    </div>
  )
}
