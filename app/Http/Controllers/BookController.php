<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = $this->create();
        print_r($books);

        return Inertia::render('Dashboard', [
            'books' => $books,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        Book::create([
            'title' => 'The Great Gatsby',
            'user_id' => 1, // 'user_id' is a foreign key in the 'books' table, and it references the 'id' column in the 'users' table
            'author' => 'F. Scott Fitzgerald',
            'genre' => 'Fiction',
            'thumbnail' => 'https://via.placeholder.com/150',
            'page_count' => 180,
            'print_type' => 'Paperback',
            'published_date' => '1925-04-10',
            'isbn' => '9780743273565',
            'description' => 'The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
            'status' => 'Available'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
