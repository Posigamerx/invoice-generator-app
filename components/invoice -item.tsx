import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import type { InvoiceItem as InvoiceItemType } from '@/types/invoice'
import { useInvoice } from '@/context/invoice-context'

interface InvoiceItemProps {
  item: InvoiceItemType ;
  index: number;
  canRemove:boolean;
}
export default function InvoiceItem({
  item, index, canRemove}: InvoiceItemProps
) {
  const {removeItem, updateItem } = useInvoice();

  const handleQuantityChange = (value: string) => {
    if (value === "") {
      updateItem(index, 'quantity', "");

    }else {
      const numValue = Number.parseInt(value);
      if (!isNaN(numValue) && numValue>= 0) { 
        updateItem(index, 'quantity', numValue)
    }
  } 
};
  const handleQuantityBlur =()=> {
    if (item.quantity === "" || item.quantity === 0) {
      updateItem(index, "quantity", 1)
    }
  }

  const handleRateChange = (value : string) => {

    if (value === "") {
      updateItem(index, "rate","");

    }else {
      const numValue = Number.parseInt(value);
      if(!isNaN(numValue) && numValue >= 0) {
        updateItem(index, "rate", numValue)
      }
    }
  };


  const handleRateBlur = () => {
    if (item.rate === "") {
      updateItem(index, "rate", 0) 
    }
  }

 
  return(
    <div className='grid grid-cols-12 gap-4 p-4 border rounded-lg'>
      <div className='col-span-5 '>
        <Label className='mb-2'>Description</Label>
        <Input 
        placeholder='Item Description'
          value={item.description}
        onChange={(e) => updateItem(index, "description", e.target.value)}
        />
      </div>
      <div className='col-span-2  '>
        <Label className='mb-2'>Quantity</Label>
        <Input type='number' min='1'
        value={item.quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
        onBlur={handleQuantityBlur}
        />
      </div>
      <div className='col-span-2'>
        <Label className='mb-2'>Rate ($)</Label>
        <Input type='number' min='0' step='0.01'
        value={item.rate}
        onChange={(e) => handleRateChange(e.target.value)}
        onBlur={handleRateBlur}
        />
      </div>
      <div className='col-span-2'>
        <Label className='mb-2'>Amount</Label>
        <div className='h-10 px-3 bg-gray-50 border rounded-md flex items-center'>
           ${typeof item.amount === "number" ? item.amount.toFixed(2) : "0.00"}
        </div>
      </div>
      <div className='col-span-1 mt-5 flex items-center '>
        <Button 
        variant={'outline'}
        size={'icon'}
        className='cursor-pointer'
        onClick={() => removeItem(index)}
        disabled={!canRemove}
        >
            <Trash2 className='w-4 h-4' /> 
        </Button>
      </div>
    </div>
  )
  
}
