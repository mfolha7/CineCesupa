import styles from './Sobre.module.css';

function Sobre() {
    return (
        <main className={styles.pagina}>
            <h1>Sobre o CineCesupa</h1>

            <section className={styles.conteudo}>
                <h2>Nosso projeto</h2>
                <p>
                    O CineCesupa é um catálogo de filmes e séries
                    desenvolvido como trabalho acadêmico da
                    disciplina de Desenvolvimento Web.
                </p>

                <h2>Objetivo</h2>
                <p>
                    Apresentar recomendações de filmes e séries
                    em uma plataforma simples, organizada e intuitiva.
                </p>

                <h2>Desenvolvedor</h2>
                <p>Manoel F. Neto</p>
                <p>CC2MA - SUB B</p>
            </section>
        </main>
    );
}

export default Sobre;