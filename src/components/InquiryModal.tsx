
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InquiryForm from "./InquiryForm";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const InquiryModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          Send Inquiry
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Send Your Inquiry</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] p-4">
          <InquiryForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
