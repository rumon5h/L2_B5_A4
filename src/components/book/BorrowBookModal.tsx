import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useCreateBorrowBookMutation } from "@/redux/api/baseApi";
import toast from "react-hot-toast";

interface BorrowBookModalProps {
    id: string;
}

const BorrowBookModal = ({ id }: BorrowBookModalProps) => {
    console.log(id)
    const [open, setOpen] = useState(false);
    const form = useForm();
    type BorrowBookResponse = { success: boolean; [key: string]: any };
    const [createBorrow] = useCreateBorrowBookMutation<BorrowBookResponse>(undefined);



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)

        if (id && data?.quantity && data?.dueDate) {
            const borrowBook = {
                book: id,
                quantity: data?.quantity,
                dueDate: data?.dueDate
            }
            const borrowed = await createBorrow(borrowBook);

            if (borrowed?.data?.success) {
                toast.success("Successfully borrowed the book", { id: "success-form" });
                form.reset();
                setOpen(false)
            } else {
                toast.error("Failed to borrow the book", { id: "error-form" })
            }
        } else {
            toast.error("Please fill the form.")
        }

    }



    return (
        <Dialog onOpenChange={setOpen} open={open}>

            <DialogTrigger asChild>
                <Button variant="outline">Add New Book</Button>
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
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input type="number"  {...field} value={field.value || ""} />
                                    </FormControl>

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col ">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[100%] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick the date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>

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