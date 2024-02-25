export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Book {
    author: string;
    created_at: string;
    deleted_at: string | null;
    description: string;
    genre: string;
    id: number;
    isbn: string;
    page_count: number;
    print_type: string;
    published_date: string;
    status: string;
    thumbnail: string;
    title: string;
    updated_at: string;
    user_id: number;
}
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    books: Book[];
};
