import CardFilme from '../components/CardFilme';

import breakingbad from '../assets/imagens/breakingbad.jpg';
import strangerthings from '../assets/imagens/strangerthings.jpg';
import walkingdead from '../assets/imagens/walkingdead.jpg';
import styles from './Catalogo.module.css';

function Series() {
  return (
    <main className={styles.pagina}>
      <h1>Séries</h1>
      <p>Confira nossas recomendações de séries.</p>

      <div className={styles.catalogo}>
      <CardFilme
        titulo="Breaking Bad"
        genero="Drama"
        ano="2008"
        imagem={breakingbad}
        sinopse="Um professor de química passa a produzir drogas após descobrir que possui câncer."
      />

      <CardFilme
        titulo="Stranger Things"
        genero="Ficção científica"
        ano="2016"
        imagem={strangerthings}
        sinopse="Um grupo de amigos investiga acontecimentos sobrenaturais após o desaparecimento de um garoto."
      />

      <CardFilme
        titulo="The Walking Dead"
        genero="Terror"
        ano="2010"
        imagem={walkingdead}
        sinopse="Um grupo de sobreviventes luta pela vida em um mundo dominado por zumbis."
      />
      </div>
    </main>
  );
}

export default Series;