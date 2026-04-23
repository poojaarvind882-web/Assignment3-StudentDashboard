function StatsCard({ total,avg, pass, fail }) {
  return (
    <div className="stats">
      <div className="card">
        <h3>Total Students</h3>
        <p>{total}</p>
      </div>

      <div className="card">
        <h3>Average</h3>
        <p>{avg}</p>
      </div>

      <div className="card pass-card">
        <h3>Pass</h3>
        <p>{pass}</p>
      </div>

      <div className="card fail-card">
        <h3>Fail</h3>
        <p>{fail}</p>
      </div>
    </div>
  );
}

export default StatsCard;     