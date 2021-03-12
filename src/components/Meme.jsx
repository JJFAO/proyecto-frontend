export default function Meme({ meme }) {
    const { creador, createdAt, imagen, titulo } = meme;
    const fecha = new Date(createdAt);

    return (
        <div>
            <h3>{titulo}</h3>
            <img src={imagen} alt="meme" />
            <span className="text-muted">{fecha.toLocaleString()}</span>
            <p>{creador.nombre}</p>
        </div>
    );
}
