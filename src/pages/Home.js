import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    return (
        <main className={styles.pagina}>
            <section className={styles.banner}>
                <h1>Bem-vindo ao CineCesupa</h1>

                <h2>Filmes e Séries que a família do Manoel gosta</h2>

                <p>
                    Explore nosso catálogo e descubra sua próxima produção favorita.
                </p>

                <div className={styles.botoes}>
                    <Link to="/filmes" className={styles.botao}>
                        Explorar filmes
                    </Link>

                    <Link to="/series" className={styles.botaoSecundario}>
                        Explorar séries
                    </Link>
                </div>
            </section>

            <h2 className={styles.subtitulo}>
                O que você encontra aqui?
            </h2>

            <section className={styles.categorias}>
                <article>
                    <h3>Filmes</h3>
                    <p>Grandes histórias do cinema.</p>
                </article>

                <article>
                    <h3>Séries</h3>
                    <p>Produções para maratonar.</p>
                </article>

                <article>
                    <h3>Recomendações</h3>
                    <p>Descubra novos títulos.</p>
                </article>
            </section>
        </main>
    );
}

export default Home;