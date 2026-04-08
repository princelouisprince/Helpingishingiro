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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function VolunteerDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const subject = encodeURIComponent("Volunteer Signup Approval Request");
    const body = encodeURIComponent(
      `Volunteer signup request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nHow they can help:\n${message}\n\nPlease review and approve this signup.`
    );

    const mailto = `mailto:ishingiroinitiative@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast.success("An approval email has been prepared for ishingiroinitiative@gmail.com.");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Volunteer With Us</DialogTitle>
          <DialogDescription>
            Join our dedicated team. Fill out the form below and we will get back to you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="v-name">Full Name</Label>
            <Input id="v-name" name="name" placeholder="E.g. Sarah Smith" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="v-email">Email Address</Label>
            <Input id="v-email" name="email" type="email" placeholder="sarah@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="v-tel">Phone</Label>
            <Input id="v-tel" name="phone" type="tel" placeholder="07XXXXXXXX" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="v-message">How would you like to help?</Label>
            <Textarea id="v-message" name="message" placeholder="Mentoring, Teaching, etc..." className="resize-none" rows={3} required />
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Sign Up Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
