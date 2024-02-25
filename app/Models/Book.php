<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use SoftDeletes;

    protected $connection = 'sqlite';

    protected $table = 'books';
    protected $fillable = ['title', 'author', 'genre', 'thumbnail', 'page_count', 'print_type', 'published_date', 'isbn', 'description', 'status'];

    protected $primaryKey = 'id';

    public $timestamps = true;

}