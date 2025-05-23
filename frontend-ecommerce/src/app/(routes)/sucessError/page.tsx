'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const PageSuccess = () => {
  const router = useRouter()

  return (
    <div className='max-w-5xl p-4 mx-auto sm:py-16 sm:px-24'>
      <div className='flex flex-col-reverse gap-2 sm:flex-row'>
        <div>
          <h1 className='text-3xl'>☹️¡Error en la compra!</h1>
          <p className='my-3'>
            Lamentamos informarte que ha habido un error en tu compra. No te
            preocupes, estamos aquí para ayudarte a resolverlo.
          </p>
          <p className='my-3'>
            Por favor, verifica tu correo electrónico para obtener más
            información sobre el estado de tu pedido y los pasos a seguir.
          </p>
          <p className='my-3'>¡Disfruta de tus productos!</p>

          <Button onClick={() => router.push('/')}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  )
}

export default PageSuccess
