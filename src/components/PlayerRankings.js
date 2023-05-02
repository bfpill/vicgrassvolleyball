import "./PlayerRankings.css"
const players = [
  { id: 1, name: "Emilit Ma", ranking: 1 },
  { id: 2, name: "Alex Zaskowski", ranking: 2 },
  { id: 3, name: "Jamieson Vail", ranking: 3 },
  { id: 4, name: "Genel Sturgeon", ranking: 4 },
  { id: 5, name: "Tarryn Angermeier", ranking: 5 },
  { id: 6, name: "Ahmed Radwan", ranking: 6 },
  { id: 7, name: "Klaas Mcintosh", ranking: 7 },
  { id: 8, name: "Dave Hammersly", ranking: 8 },
  { id: 9, name: "Zavier McInerney", ranking: 9 },
  { id: 10, name: "Ryan Hutchings", ranking: 10 },
  { id: 11, name: "Kody Taiga", ranking: 11 },
  { id: 12, name: "Fergus Morrison", ranking: 12 },
  { id: 13, name: "Connor McCourt", ranking: 13 },
  { id: 14, name: "Joel Whitley", ranking: 14 },
  { id: 15, name: "Klaas Mcintosh", ranking: 15 },
  { id: 16, name: "James Lycett", ranking: 16 },
  { id: 17, name: "Jeremy Stevenson", ranking: 17 },
  { id: 18, name: "Toby Schnugg", ranking: 18 },
  { id: 19, name: "Murtaza Hussein", ranking: 19 },
  { id: 20, name: "Ali A.", ranking: 20 },
  { id: 21, name: "Abbas A.", ranking: 21 },
  { id: 22, name: "Jazziah Smith", ranking: 22 },
  { id: 23, name: "Mary Nguyen", ranking: 23 },
  { id: 24, name: "Darcy Vreeken", ranking: 24 },
  { id: 25, name: "David Tan", ranking: 25 },
];

function PlayerRankings(thin) {
  if (thin === true) {
    return (
      <div className="dashboard__section__thin">
        <h2 className="player-rankings-header">Current Player Rankings</h2>
        {players.map((player, index) => (
          <div key={player.id}>
            <span className="number-div">{index + 1}. </span>
            <span className="player-name">{player.name}</span>
            {/* display player ranking here */}
          </div>
        ))}
      </div>
    );
  }
  else {
    return (
      <div className="dashboard__section__thick">
        <h2 className="player-rankings-header">Current Player Rankings</h2>
        {players.map((player, index) => (
          <div key={player.id}>
            <span className="number-div">{index + 1}. </span>
            <span className="player-name">{player.name}</span>
            {/* display player ranking here */}
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerRankings;