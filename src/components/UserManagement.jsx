//UserManagement.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import AddUserModal from "../components/AddUserModal"; // adjust the path

export default function UserManagement() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("access_token"); // assuming you stored it after login
                const res = await axios.get("http://localhost:8000/api/get-user/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(res.data);
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <AddUserModal isOpen={showModal} onClose={() => setShowModal(false)} />

            <div className="flex-grow">
                {/* Top Control Panel */}
                <div className="bg-[#e3f1db] p-4 rounded-t-md flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-green-900">
                        Total Users: {filteredUsers.length}
                    </h2>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="flex items-center gap-1 bg-[#bde5b4] text-green-800 border border-green-600 px-3 py-2 rounded-md text-sm hover:bg-[#a4dba4]">
                            <FaFilter />Filter
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-1 bg-green-800 text-white px-3 py-2 rounded-md text-sm hover:bg-green-900"
                        >
                            <MdPersonAddAlt />Add User
                        </button>
                    </div>
                </div>

                {/* User Table */}
                <div className="bg-white shadow-md rounded-b-md overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="bg-[#e3f1db] text-green-900">
                            <tr>
                                <th className="px-6 py-3">Username</th>
                                <th className="px-6 py-3">Role</th>
                                <th className="px-6 py-3">Date Added</th>
                                <th className="px-6 py-3 text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-6 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4 capitalize"><span className={`px-2 py-1 rounded-full text-white text-xs font-semibold  ${user.role === "admin" ? "bg-blue-600" : "bg-green-600"}`}
                                        >
                                            {user.role}
                                        </span></td>
                                        <td className="px-6 py-4 capitalize"><span
                                            className={`px-2 py-1 rounded-full text-white text-xs font-semibold 
            ${user.is_active ? "bg-green-500" : "bg-red-500"}`}
                                        >
                                            {user.is_active ? "Active" : "Inactive"}
                                        </span></td>
                                        <td className="px-6 py-4">{user.date_joined ? new Date(user.date_joined).toLocaleDateString() : "—"}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-gray-500 hover:text-gray-800 text-xl">
                                                &#x22EE;
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
