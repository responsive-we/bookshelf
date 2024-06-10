import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
const BookShelf = ({ bookshelf,removeFromBookshelf }) => {
  const {toast} = useToast();
  return (
    <div>
      <h1 className=' text-center font-bold text-2xl'>My Bookshelf</h1>
      <div>
        {bookshelf.map(book => (
           <Card key={book.key} className=" m-2">
           <CardHeader>
             <CardTitle>{book.title}</CardTitle>
           </CardHeader>
           <CardContent>
             <CardDescription>{book.author_name?.join(", ")}</CardDescription>
           </CardContent>
           <CardFooter className=" justify-center">
               <Button
                 onClick={() => {
                  removeFromBookshelf(book);
                   toast({
                     title: "Succesfully removed from bookshelf",
                     description: `${book.title} has been succesfully removed from your bookshelf`,
                   });
                 }}
               >
                 Remove from bookshelf
               </Button>
           </CardFooter>
         </Card>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;