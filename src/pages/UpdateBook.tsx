import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetBookByIdQuery, useUpdateBookMutation } from '@/redux/api/baseApi';
import { useForm, type FieldValues, type SubmitHandler, } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';



const UpdateBook = () => {
    const { id } = useParams<{ id: string }>();
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();
    const {data: book, isLoading} = useGetBookByIdQuery(id || "");
    const form = useForm();

    if(isLoading){
        return <Loading />
    }

    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log("Form submitted with data:", data);

       const updated = await updateBook({ id: book.data._id, ...data });

        if (updated.error) {
            toast.error("Failed to update book.", { id: "form-error" });
        } else if (updated.data?.success) {
            toast.success("Book updated successfully!", { id: "form-success" });
            navigate("/manage-books");
        }
        form.reset();
    }

    return (
        <div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto mt-10 h-screen">
            <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
            <Form {...form} >
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input  {...field} value={field.value || book.data.title} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input  {...field} value={field.value || book.data.author} />
                                </FormControl>

                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input  {...field} value={field.value || book.data.description} />
                                </FormControl>

                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel >Genre</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value || book.data.genre}>
                                    <FormControl>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Select a Genre" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="FICTION">FICTION</SelectItem>
                                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                                    </SelectContent>
                                </Select>

                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input  {...field} value={field.value || book.data.isbn} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} value={field.value || book.data.copies} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    
                    <Button type="submit">Add Book</Button>
                </form>
            </Form>
        </div>
    );
};

export default UpdateBook;