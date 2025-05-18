import React, { useState } from "react";
import toast from 'react-hot-toast';

export default function AddUserModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        status: "",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        console.log("Form is valid. Ready to send to backend:", formData);
        toast.success("User data is valid");

        onClose();
        handleClear();
    };

    const handleClear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            status: "",
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white p-6 rounded-md shadow-lg w-[600px] border border-green-200" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold text-green-900 mb-4">Adding User</h2>
                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First name" className="border p-2 rounded-md" value={formData.firstName} onChange={handleChange} required />
                    <select name="role" className="border p-2 rounded-md" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                    <input type="text" name="lastName" placeholder="Last name" className="border p-2 rounded-md" value={formData.lastName} onChange={handleChange} required />
                    <input type="text" name="username" placeholder="Username" className="border p-2 rounded-md" value={formData.username} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="border p-2 rounded-md col-span-2" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="border p-2 rounded-md" value={formData.password} onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border p-2 rounded-md" value={formData.confirmPassword} onChange={handleChange} required />
                    <select name="status" className="border p-2 rounded-md col-span-2" value={formData.status} onChange={handleChange} required>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>

                    <div className="col-span-2 flex justify-end gap-2 mt-2">
                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Submit</button>
                        <button type="button" onClick={handleClear} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Clear All</button>
                        <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}