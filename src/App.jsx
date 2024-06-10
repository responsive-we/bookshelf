// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookSearch from "@/components/BookSearch";
import BookShelf from "@/components/BookShelf";
import { Toaster } from "@/components/ui/toaster"

import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter((b) => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  }
  return (
    <Router>
      <div>
        <Tabs defaultValue="search">
          <TabsList className="grid w-full grid-cols-2 h-full">
            <TabsTrigger value="search" className="p-2">Search a book</TabsTrigger>
            <TabsTrigger value="bookshelf" className="p-2">My book shelf</TabsTrigger>
          </TabsList>
          <TabsContent value="search">
            <BookSearch addToBookshelf={addToBookshelf} bookshelf={bookshelf}/>
          </TabsContent>
          <TabsContent value="bookshelf">
            <BookShelf bookshelf={bookshelf} removeFromBookshelf={removeFromBookshelf} />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
