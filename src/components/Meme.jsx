export default function Meme({ meme }) {
    const { creador, createdAt, imagen, titulo } = meme;

    return (
        <div>
            <h3>{titulo}</h3>
            <img src={imagen} alt="meme" />
            <span className="text-muted">{createdAt}</span>
            <p>{creador}</p>
        </div>
    );
}
