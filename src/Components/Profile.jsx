import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { FaSignOutAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./Profile.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState("");
    const [userHistory, setUserHistory] = useState([]);
    const [accountType, setAccountType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const photoURL = currentUser.photoURL
                    ? encodeURI(currentUser.photoURL)
                    : `https://api.dicebear.com/9.x/initials/svg?seed=${currentUser.displayName || "User"}`;

                setProfilePic(photoURL);
                setUser(currentUser);

                try {
                    const userRef = doc(db, "users", currentUser.uid);
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setUserHistory(data.History || []);
                        setAccountType(data.AccountType || "basic");
                    }
                } catch (error) {
                    console.error("Error fetching Firestore user data:", error);
                }
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully!");
            navigate("/");
            setUser(null);
        } catch (error) {
            toast.error("Logout failed");
            console.error(error);
        }
    };

    return (
        <div className="profile-container">
            {user ? (
                <>
                    <div className="profile-card">
                        <Toaster />
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="profile-img"
                            onError={() =>
                                setProfilePic(
                                    `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.displayName}`
                                )
                            }
                        />
                        <h2 className="profile-name">{user.displayName || "Anonymous User"}</h2>
                        <p className="profile-email">{user.email || "No Email Provided"}</p>

                        <div className="info-box">
                            <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
                            <p><strong>Phone Number:</strong> {user.phoneNumber || "Not Available"}</p>
                            <p><strong>Provider:</strong> {user.providerData[0]?.providerId || "Unknown"}</p>
                            <p><strong>Account Created:</strong> {user.metadata.creationTime || "N/A"}</p>
                            <p><strong>Last Login:</strong> {user.metadata.lastSignInTime || "N/A"}</p>
                            <p><strong>Account Type:</strong> {accountType}</p>

                            {accountType === "basic" && (
                                <div className="upgrade-box">
                                    <p className="text-warning mt-2">
                                        You are on a basic account. <a href="/pricing">Switch to Premium</a> for more features!
                                    </p>
                                </div>
                            )}
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
                                    <li key={index} className="history-item">{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-history">
                                No activity found. <a href="/onlinebillpage">Generate Invoice</a>
                            </p>
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
