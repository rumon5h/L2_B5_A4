import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const BorrowBookModal = () => {
    const [open, setOpen] = useState(false);
    const form = useForm();


    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data)

    }
    

  
    return (
         <Dialog onOpenChange={setOpen} open={open}>

      <DialogTrigger asChild>
        <Button variant="outline">Add New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Borrow this book</DialogDescription>
        <DialogHeader>
          <DialogTitle>Borrow The Book</DialogTitle>
        </DialogHeader>

        <Form {...form}>

          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input  {...field} value={field.value || ""} />
                  </FormControl>

                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>

        </Form>
      </DialogContent>
    </Dialog>
    );
};

export default BorrowBookModal;