import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Phone } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function DonateDialog({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<1 | 2>(1);
  const { t } = useTranslation();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <Dialog onOpenChange={(open) => !open && setTimeout(() => setStep(1), 300)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>Make a Donation</DialogTitle>
              <DialogDescription>
                Fill out the details below to support our children. Your contribution matters.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleContinue} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (RWF)</Label>
                <Input id="amount" type="number" placeholder="5000" min="100" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (MoMo)</Label>
                <Input id="phone" type="tel" placeholder="07XXXXXXXX" required />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full">Continue</Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Donation</DialogTitle>
              <DialogDescription>
                Follow these instructions to send your donation via Mobile Money.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 pt-4">
              <div className="bg-muted p-4 rounded-lg text-center space-y-2 border border-border">
                <p className="text-sm font-medium text-muted-foreground">Dial this code</p>
                <p className="text-3xl font-heading tracking-wider flex items-center justify-center gap-2">
                  *182#
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard("*182#")} className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                  </Button>
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-medium">Recipient Details:</p>
                <div className="flex items-center gap-3 bg-secondary/10 p-3 rounded-md">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">0796688646</p>
                    <p className="text-xs text-muted-foreground">Hirwa Franklin</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard("0796688646")}>
                    Copy
                  </Button>
                </div>
              </div>

              <div className="text-xs text-center text-muted-foreground">
                Once the payment is completed on your phone, we will receive it instantly. Thank you!
              </div>

              <Button variant="secondary" className="w-full" onClick={() => setStep(1)}>Back</Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
