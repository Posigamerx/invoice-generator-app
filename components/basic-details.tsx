
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useInvoice } from "@/context/invoice-context"


export default function BasicDetails() {

  const { invoice, updateInvoice } = useInvoice();
  return (
   <Card>
  <CardHeader>
    <CardTitle>Invoice Details</CardTitle>
  </CardHeader>
  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <Label htmlFor="invoiceNumber" className="mb-2">Invoice Number</Label>
        <Input id="invoiceNumber" value={invoice.invoiceNumber}
        onChange={(e) => updateInvoice({invoiceNumber: e.target.value})}        />
    </div>
    <div>
        <Label htmlFor="date" className="mb-2">Date</Label>
        <Input id="date" type="Date" value={invoice.date}
        onChange={(e) => updateInvoice({date: e.target.value})}

        />

    </div>
  </CardContent>
</Card>
 
  )
}
