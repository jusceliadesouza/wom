import { CalendarDays, Heart, MessageCircleMore } from 'lucide-react'

export default function Home () {
  return (
    <div className='px-4 py-8 h-screen'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <img
            src='https://images.unsplash.com/photo-1439402702863-6434b61e6392'
            className='rounded-full w-16 h-16 bg-cover border-success-500 border-4 '
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
        
      </main>
    </div>
  )
}
