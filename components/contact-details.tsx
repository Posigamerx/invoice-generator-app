import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useInvoice } from "@/context/invoice-context";

export default function ContactDetails() {

    const { invoice, updateInvoice } = useInvoice();

  

  return (
      <Card>
  <CardHeader>
    <CardTitle>From & To</CardTitle>
  </CardHeader>
  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
   <div className="space-y-4">
        <h3 className="font-medium">From (your Details)</h3>
        <div>
            <Label htmlFor="fromName" className="mb-2">Name</Label>
            <Input id="fromName" placeholder="Your Name or Company"
            value={invoice.fromName}
            onChange={(e) => updateInvoice({fromName: e.target.value})}
            />
        </div>
        <div>
            <Label htmlFor="fromEmail" className="mb-2">Email</Label>
            <Input id="fromEmail" placeholder="your@email.com" type="email" 
            value={invoice.fromEmail}
            onChange={(e) => updateInvoice({fromEmail: e.target.value})}
            />
        </div>
   </div>
   <div className="space-y-4">
        <h3 className="font-medium">To (Client Details)</h3>
        <div>
            <Label htmlFor="toName" className="mb-2">Name</Label>
            <Input id="toName" placeholder="Client Name or Company" 
              value={invoice.toName}
            onChange={(e) => updateInvoice({toName: e.target.value})}
            />
        </div>
        <div>
            <Label htmlFor="toEmail" className="mb-2">Email</Label>
            <Input id="toEmail" placeholder="client@email.com" type="email" 
              value={invoice.toEmail}
            onChange={(e) => updateInvoice({toEmail: e.target.value})}
            
            />
        </div>
   </div>
  </CardContent>
</Card>
  )
}
