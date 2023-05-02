import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";

import Home from "../pages/Home";
import PlayerRankings from "../components/PlayerRankings";
import profilePicTest from "../images/blankProfilePic.png";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [tournamentResults, setTournamentResults] = useState([]);

  const navigate = useNavigate();
  const tournaments = [
    {
      id: 1,
      name: "Nothing yet",
      results: [
        { playerId: 1, score: 10 },
        { playerId: 2, score: 20 },
        { playerId: 3, score: 30 },
      ],
    }
  ];

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      const infoQ = query(
        collection(db, "playerInfo"),
        where("uid", "==", user?.uid)
      );
      setName(data.name);
      setRating(data.rating);
      setTournamentResults(data.results);
    } catch (err) {
      return <Home />;
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserData();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__header__title">
        <div className="dashboard__title">
          <h1> Player Dashboard</h1>
          
        </div>
        <h5 className="small-text">  Logged in as: {name} ({user?.email})</h5>
      </div>
      <div className="dashboard__content">
        <div className="horizontal__divider">
          <div className="dashboard__section">
            <img className="profile-picture" src= {profilePicTest} />
            <h2>Your Profile</h2>
              <h4>
                Name: {name}
              </h4>
              <h4>
                Email: {user?.email}
              </h4>
              <h4>
                Skill Level: {user?.experience}
              </h4>
          </div>
          <PlayerRankings thin={true}/>
        </div>
        <div className="horizontal__divider">
          <div className="dashboard__your__tournaments">
            <h2>Your Tournaments</h2>
            {tournaments.map((tournament) => (
              <div key={tournament.id}>
                <h4>{tournament.name}</h4>
                {/* display tournament results here */}
              </div>
            ))}
          </div>
        </div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

