<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    protected $model = Book::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'user_id' => 1, // Remove the quotes around 1
            'title' => $this->faker->title(), // Use $this->faker->title() instead of fake()->title()
            'author' => $this->faker->name(), // Use $this->faker->name() instead of fake()->name()
            'genre' => $this->faker->word(), // Use $this->faker->word() instead of fake()->word()
            'thumbnail' => $this->faker->imageUrl(),
            'page_count' => $this->faker->numberBetween(100, 500), // Use $this->faker->numberBetween() instead of fake()->numberBetween()
            'print_type' => $this->faker->word(), // Use $this->faker->word() instead of fake()->word()
            'published_date' => $this->faker->date(), // Use $this->faker->date() instead of fake()->date()
            'isbn' => $this->faker->isbn13(), // Use $this->faker->isbn13() instead of fake()->isbn13()
            'description' => $this->faker->sentence(), // Use $this->faker->sentence() instead of fake()->sentence()
            'status' => 'Available',
        ];
    }
}
