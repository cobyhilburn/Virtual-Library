
type DashboardHeaderProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const DashboardHeader = ({ onClick }: DashboardHeaderProps) => {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 grid-cols-8 grid text-center font-semibold items-center justify-between">
                <h2>Cover</h2>
                <h2>Title</h2>
                <h2>Author</h2>
                <h2>Genre</h2>
                <h2>Pages</h2>
                <h2>ISBN</h2>
                <h2>Status</h2>
                <button onClick={onClick} className="bg-green-600 rounded-lg py-2 text-white px-4">Add Book</button>
            </div>
        </div>
    )
}

export default DashboardHeader
