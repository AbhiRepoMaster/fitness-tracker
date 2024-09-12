import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Profile.css'; // Add styles for Profile component

function Profile() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Profile Card */}
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Profile</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={user.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        name="age"
                                        value={user.age}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
