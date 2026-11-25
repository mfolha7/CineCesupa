import styles from './CardFilme.module.css';

function CardFilme({ titulo, genero, ano, imagem, sinopse }) {
    return (
        <article className={styles.card}>
            <img
                className={styles.imagem}
                src={imagem}
                alt={titulo}
            />

            <h2 className={styles.titulo}>{titulo}</h2>

            <p className={styles.informacao}>Gênero: {genero}</p>
            <p className={styles.informacao}>Ano: {ano}</p>

            <p className={styles.sinopse}>{sinopse}</p>
        </article>
    );
}

export default CardFilme;