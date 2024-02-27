
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '../PrimaryButton';



interface AddBookModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    books: any;
}

const AddBookModal = ({ showModal, setShowModal, books }: AddBookModalProps) => {
    return (
        <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
        >
            <div className="p-6 bg-white rounded-lg sm:rounded-lg">
                <h2 className="text-gray-900 text-lg font-semibold">Add Book</h2>
                <p className="text-gray-600 text-sm mt-2">Add a new book to your collection.</p>

                <div className="mt-3 flex justify-between">
                    <TextInput className="w-1/4" placeholder='Title' />
                    <TextInput className="w-1/4" placeholder='Author' />
                    <TextInput className="w-1/4" placeholder='ISBN' />
                    <PrimaryButton>Search</PrimaryButton>
                </div>
            </div>
            {/* Results */}
            <div className="p-6 flex flex-col gap-4 bg-white rounded-lg sm:rounded-lg">
                {/* Dummy data to display for placeholders */}
                {books.map((book: any) => (
                    <div key={book.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={book.thumbnail
                                ? book.thumbnail
                                : 'https://via.placeholder.com/150'}
                                alt={book.title}
                                className="w-10 h-10 rounded-full" />
                            <div className="ml-3">
                                <p className="text-gray-900 font-semibold">{book.title}</p>
                                <p className="text-gray-600 text-sm">{book.author}</p>

                            </div>
                        </div>
                        <PrimaryButton>Add</PrimaryButton>
                    </div>
                ))}
            </div>
        </Modal>


    )
}

export default AddBookModal