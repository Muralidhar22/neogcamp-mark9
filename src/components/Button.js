export default function Button(props) {
    const styles = {
      padding: ".75rem",
      fontSize: "1rem",
      cursor: "pointer",
      display: "inline-block",
      border: "none",
      margin: "1rem",
      backgroundColor: "#D3D3D3",
      borderRadius: "1rem",
      fontFamily: "Courgette, cursive"
    };
    return (
      <button style={styles} data-key={props.keyWord} onClick={props.handleClick}>
        {props.name}
      </button>
    );
  }
  