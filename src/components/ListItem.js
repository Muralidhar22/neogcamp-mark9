export default function ListItem({ item }) {
    return (
      <div className="movie-item">
        <h2>Movie: <span>{item.title}</span></h2>
        <h3>Year: <span>{item.year}</span></h3>
        <h4>{item.releaseState}</h4>
        {item.imDbRating && <span className="rating">Rating: {item.imDbRating}</span> }
      </div>
    );
  }
  