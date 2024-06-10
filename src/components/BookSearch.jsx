import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const BookSearch = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { toast } = useToast();
  useEffect(() => {
    const fetchBooks = async () => {
      if (query.length > 2) {
        const data = await fetch(
          `https://openlibrary.org/search.json?title=${query}&limit=10&page=1`
        );

        const { docs } = await data.json();
        setResults(docs);
      } else {
        setResults([]);
      }
    };
    fetchBooks();
  }, [query]);

  return (
    <div>
      <h1 className=' text-center font-bold text-2xl'>Search your favourate books</h1>
      <div className="flex items-center justify-center space-x-2 m-2">
        <Input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {results.map((book) => (
          <Card key={book.key} className=" m-2">
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{book.author_name?.join(", ")}</CardDescription>
            </CardContent>
            <CardFooter className=" justify-center">
              {bookshelf.includes(book) ? (
                <Button onClick={() => addToBookshelf(book)}>
                  Already added to bookshelf
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    addToBookshelf(book);
                    toast({
                      title: "Succesfully added to bookshelf",
                      description: `${book.title} has been added to your bookshelf`,
                    });
                  }}
                >
                  Add to Bookshelf
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
