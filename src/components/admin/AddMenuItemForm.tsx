
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useMenu } from '@/contexts/MenuContext';
import { MenuItem } from '@/types';
import { toast } from '@/components/ui/use-toast';

const menuItemSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.preprocess(
    (val) => parseFloat(z.string().parse(val)),
    z.number().positive('Price must be a positive number')
  ),
  imageUrl: z.string().url('Must be a valid URL'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
});

type MenuItemFormData = z.infer<typeof menuItemSchema>;

interface AddMenuItemFormProps {
  onFormSubmit?: () => void; // Optional: To close a dialog, for example
}

const AddMenuItemForm: React.FC<AddMenuItemFormProps> = ({ onFormSubmit }) => {
  const { addMenuItem } = useMenu();
  const form = useForm<MenuItemFormData>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
    },
  });

  const onSubmit = (data: MenuItemFormData) => {
    addMenuItem(data as Omit<MenuItem, 'id'>); // Type assertion as ID is generated in context
    toast({
      title: 'Menu Item Added',
      description: `${data.name} has been added to the menu.`,
    });
    form.reset();
    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Samosa Chaat" {...field} />
              </FormControl>
              <FormMessage />
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
                <Textarea placeholder="Describe the item..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="e.g., 9.99" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Appetizer, Main Course" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Add Item</Button>
      </form>
    </Form>
  );
};

export default AddMenuItemForm;

