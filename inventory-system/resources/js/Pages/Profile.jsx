import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("/api/user").then((response) => {
            setUser(response.data);
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">User Profile</h1>
            {user ? (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            ) : (
                <p>Loading user info...</p>
            )}
        </div>
    );
}
