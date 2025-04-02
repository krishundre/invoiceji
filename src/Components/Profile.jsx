import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Profile.css";
import { FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
    const [user, setUser] = useState(null);

    // Fetch user details when authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    // console.log(user.phoneNumber);

    // Logout function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="profile-container">
            {user ? (
                <div className="profile-card">
                    <img src={user.photoURL} alt="Profile" className="profile-img" />
                    <h2 className="profile-name">{user.displayName}</h2>
                    <p className="profile-email">{user.email}</p>

                    <div className="info-box">
                        {/* <p><strong>UID:</strong> {user.uid}</p> */}
                        <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
                        <p><strong>Phone Number:</strong> {user.phoneNumber || "Not Available"}</p>
                        <p><strong>Provider:</strong> {user.providerData[0].providerId}</p>
                        <p><strong>Account Created:</strong> {user.metadata.creationTime}</p>
                        <p><strong>Last Login:</strong> {user.metadata.lastSignInTime}</p>
                    </div>

                    <button className="logout-btn" onClick={handleLogout}>Logout <FaSignOutAlt className="ms-2" /> </button>
                </div>
            ) : (
                <p className="not-logged-in">You are not logged in.  </p>
            )}
        </div>
    );
};

export default Profile;
