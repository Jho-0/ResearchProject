import React, { useState } from "react";

export default function AddAppointmentModal({ isOpen, onClose, onSubmit }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        middleInitial: "",
        age: "",
        address: "",
        contactNumber: "",
        purpose: "",
        department: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(form);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Visitor Pre-Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="w-1/2 border rounded px-3 py-2 text-sm"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="w-1/2 border rounded px-3 py-2 text-sm"
                            required
                        />
                        <input
                            type="text"
                            name="middleInitial"
                            value={form.middleInitial}
                            onChange={handleChange}
                            placeholder="M.I."
                            className="w-16 border rounded px-3 py-2 text-sm"
                            maxLength={2}
                        />
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            placeholder="Age"
                            className="w-1/3 border rounded px-3 py-2 text-sm"
                            min={0}
                            required
                        />
                        <input
                            type="text"
                            name="contactNumber"
                            value={form.contactNumber}
                            onChange={handleChange}
                            placeholder="Contact Number (PH)"
                            className="w-2/3 border rounded px-3 py-2 text-sm"
                            pattern="09[0-9]{9}"
                            title="Enter a valid PH mobile number (e.g. 09XXXXXXXXX)"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Address (Barangay, Municipality/City, Province)"
                        className="w-full border rounded px-3 py-2 text-sm"
                        required
                    />
                    <input
                        type="text"
                        name="purpose"
                        value={form.purpose}
                        onChange={handleChange}
                        placeholder="Purpose of Visit"
                        className="w-full border rounded px-3 py-2 text-sm"
                        required
                    />
                    <input
                        type="text"
                        name="department"
                        value={form.department}
                        onChange={handleChange}
                        placeholder="Department to Visit"
                        className="w-full border rounded px-3 py-2 text-sm"
                        required
                    />
                    <div className="flex gap-2">
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-1/2 border rounded px-3 py-2 text-sm"
                            min={new Date().toISOString().split("T")[0]}
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="w-1/2 border rounded px-3 py-2 text-sm"
                            required
                        />
                    </div>
                    <div className="flex gap-2 mt-6">
                        <button
                            type="submit"
                            className="w-1/3 bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition-colors"
                        >
                            Submit Appointment
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({
                                firstName: "",
                                lastName: "",
                                middleInitial: "",
                                age: "",
                                address: "",
                                contactNumber: "",
                                purpose: "",
                                department: "",
                                date: "",
                                time: "",
                            })}
                            className="w-1/3 bg-gray-200 text-gray-700 py-2 rounded font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-1/3 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition-colors"
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
