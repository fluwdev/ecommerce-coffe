'use client'

import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const dataCaroucel = [
  {
    id: 1,
    title: 'Envio las 24/7 a tu domicilio',
    description:
      'Recibe tus pedidos de café en tu domicilio, sin importar dónde estés. Tus pedidos se enviarán a tu domicilio en 24 horas, lo cual te da la oportunidad de disfrutar de tu café en tu casa.',
    link: '#',
  },
  {
    id: 2,
    title: 'Disfruta de tu café en línea',
    description: 'Disfruta de tu café en línea sin tener que salir de tu casa.',
    link: '#',
  },
  {
    id: 3,
    title: 'Devoluciones y envíos gratuitos',
    description:
      'Como cliente, puedes devolver tus productos sin costo alguno. Como vendedor, puedes recibir tus pedidos sin costo alguno.',
    link: '#',
  },
]

export default function CaroucelTextBanner() {
  return (
    <div className='bg-gray-400/30 dark:bg-primary'>
      <Carousel
        opts={{ align: 'start' }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className='w-full max-w-4xl mx-auto'
      >
        <CarouselContent>
          {dataCaroucel.map((item) => (
            <CarouselItem key={item.id}>
              <div>
                <Card className='shadow-none border-none bg-transparent '>
                  <CardContent className='flex flex-col justify-center p-2 items-center text-center'>
                    <p className='sm:text-lg text-wrap dark:text-secondary'>
                      {item.title}
                    </p>
                    <p className='sm:text-sm text-xs text-wrap dark:text-secondary'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
