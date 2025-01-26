import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useProductsField } from '@/hooks/use-products-field'

export default function FilterOrigin() {
  const { data, isLoading } = useProductsField()
  return (
    <div className='my-5'>
      <p className='mb-3 font-bold'>Origen</p>
      {isLoading && <p>Cargando origen...</p>}
      <RadioGroup>
        {!isLoading &&
          data !== null &&
          data.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className='flex items-center space-x-2'>
              <RadioGroupItem id={origin} value={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  )
}
