import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm, type FieldValues, type SubmitHandler, } from 'react-hook-form';


const book = {
    "_id": "685684ffae705cec1192253c",
    "title": "The Theory of Everything 3",
    "author": "Stephen Hawking 2",
    "genre": "SCIENCE",
    "isbn": "978055338016323",
    "description": "An overview of cosmology and black holes. 2",
    "copies": 5,
    "available": true,
}

const AddBook = () => {
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form submitted with data:", data);


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
                                    <Input  {...field} value={field.value || ""} />
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
                                    <Input  {...field} value={field.value || ""} />
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
                                    <Input  {...field} value={field.value || ""} />
                                </FormControl>

                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <FormControl>
                                    <Input  {...field} value={field.value || ""} />
                                </FormControl>

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
                                    <Input  {...field} value={field.value || ""} />
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
                                    <Input type="number" {...field} value={field.value || ""} />
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

export default AddBook;