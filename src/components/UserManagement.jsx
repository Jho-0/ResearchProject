import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import AddUserModal from "../components/AddUserModal"; // adjust the path as needed

const mockData = [];

export default function UserManagement() {
    const [users] = useState(mockData);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Modal */}
            <AddUserModal isOpen={showModal} onClose={() => setShowModal(false)} />

            <div className="flex-grow">
                {/* Top Control Panel */}
                <div className="bg-[#e3f1db] p-4 rounded-t-md flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-green-900">Total Users: {filteredUsers.length}</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search" className="px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="flex items-center gap-1 bg-[#bde5b4] text-green-800 border border-green-600 px-3 py-2 rounded-md text-sm hover:bg-[#a4dba4]"><FaFilter />Filter</button>
                        <button onClick={() => setShowModal(true)} className="flex items-center gap-1 bg-green-800 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700"><MdPersonAddAlt className="text-lg" />Add User</button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow-md rounded-b-md overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="bg-[#e3f1db] text-green-900">
                            <tr>
                                <th className="px-6 py-3">Username</th>
                                <th className="px-6 py-3">Role</th>
                                <th className="px-6 py-3">Date Added</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center py-6 text-gray-500">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="fixed bottom-0 left-64 w-[calc(100%-16rem)] text-center py-3 bg-[#a4d4a0] text-sm text-[#2e2e2e] font-medium">
                Lacsandile Medical Clinic and Diagnostic Center (LMCDDC)
            </footer>
        </div>
    );
}