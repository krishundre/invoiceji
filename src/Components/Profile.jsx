import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Profile.css";
import { FaSignOutAlt } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const googlePhotoURL = currentUser.photoURL
                    ? encodeURI(currentUser.photoURL)  // Encoding the URL
                    : `https://api.dicebear.com/9.x/initials/svg?seed=${currentUser.displayName || "User"}`;

                setProfilePic(googlePhotoURL);
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const [userHistory, setUserHistory] = useState([]);

    // Fetch user history from Firestore
    useEffect(() => {
        const fetchUserHistory = async () => {
            if (user) {
                try {
                    const userRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setUserHistory(data.History || []);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user history:", error);
                }
            }
        };

        fetchUserHistory();
    }, [user]);

    return (
        <div className="profile-container">
            {user ? (
                <>
                    <div className="profile-card">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="profile-img"
                            onError={() => setProfilePic(`https://api.dicebear.com/9.x/lorelei/svg?seed=${user.displayName}`)}
                        />
                        <h2 className="profile-name">{user.displayName || "Anonymous User"}</h2>
                        <p className="profile-email">{user.email || "No Email Provided"}</p>

                        <div className="info-box">
                            <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
                            <p><strong>Phone Number:</strong> {user.phoneNumber || "Not Available"}</p>
                            <p><strong>Provider:</strong> {user.providerData[0]?.providerId || "Unknown"}</p>
                            <p><strong>Account Created:</strong> {user.metadata.creationTime || "N/A"}</p>
                            <p><strong>Last Login:</strong> {user.metadata.lastSignInTime || "N/A"}</p>
                        </div>

                        <button className="logout-btn" onClick={handleLogout}>
                            Logout <FaSignOutAlt className="ms-2" />
                        </button>
                    </div>
                    <div className="history-section">
                        <h3 className="history-heading">Your Activity</h3>
                        {userHistory.length > 0 ? (
                            <ul className="history-list">
                                {userHistory.map((item, index) => (
                                    <li key={index} className="history-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-history">No activity found. <a href="/onlinebillpage">Generate Invoice</a></p>
                        )}
                    </div>

                </>
            ) : (
                <p className="not-logged-in">You are not logged in.</p>
            )}
        </div>
    );
};

export default Profile;
