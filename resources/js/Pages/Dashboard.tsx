import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Table Header*/}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex font-semibold items-center justify-between">
                            <h2>Cover</h2>
                            <h2>Title</h2>
                            <h2>Author</h2>
                            <h2>Genre</h2>
                            <h2>Pages</h2>
                            <h2>ISBN</h2>
                            <h2>Status</h2>
                            <button className="bg-green-600 rounded-lg py-2 text-white px-4">Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
