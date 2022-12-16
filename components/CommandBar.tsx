'use client'

import { useState, useEffect, Fragment } from 'react'
import { Combobox, Dialog, Transition} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

type Page = {
  id: number,
  name: string,
  href: string
}

export default function CommandBar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', onKeydown)
      return () => {
        window.removeEventListener('keydown', onKeydown)
      }
  }, [isOpen])

  const pages = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blog' },
    { id: 3, name: 'Uses', href: '/uses' },
    { id: 4, name: 'Books', href: '/books' },
    { id: 4, name: 'Account', href: '/Account' },
  ]

  const filteredPages = query ? pages.filter((page) => page.name.toLowerCase().includes(query.toLowerCase())) : []

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
    <Dialog onClose={setIsOpen} className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]">
      <Transition.Child
        enter="duration-300 ease-out"
        enterFrom='opacity-0'
        enterTo='opactiy-100'
        leave='duration-200 ease-in'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <Dialog.Overlay className="fixed inset-0 bg-gray-500/75"/>
      </Transition.Child>

      <Transition.Child
        enter="duration-300 ease-out"
        enterFrom='opacity-0 scale-95'
        enterTo='opactiy-100 scale-100'
        leave='duration-200 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Combobox 
          onChange={(page: Page) => {
            setIsOpen(false)
            router.push(`./${page.href}`)
          }}
          as="div" 
          className="mx-auto max-w-xl relative rounded-xl text-black bg-white shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden">

          <div className="flex items-center px-4">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          <Combobox.Input 
            className="w-full bg-transparent bg-white border-0 focus:outline-none focus:ring-0 text-sm h-12 px-2" 
            placeholder="Search ..."
            onChange={(event) => {
              setQuery(event.target.value)
            }}
            />
          </div>
          {filteredPages.length > 0 && (            
            <Combobox.Options static className="py-4 text-sm max-h-96 overflow-y-auto">
              {filteredPages.map((page) => (
                <Combobox.Option key={page.id} value={page}>
                  {({ active }) => (
                  <div className={`space-x-1 px-4 py-2 ${active ? 'bg-purple-500' : 'bg-white'}`}>
                    <span className={`font-medium ${active ? 'text-white' : 'text-gray-900 '}`}>{page.name}</span>
                    <span>{page.id}</span>
                  </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
          {
            query && filteredPages.length === 0 && (
              <p className='p-4 text-sm text-gray-500'>No pages found.</p>
            )
          }
        </Combobox>
        </Transition.Child>

    </Dialog>
    </Transition.Root>
  )
}