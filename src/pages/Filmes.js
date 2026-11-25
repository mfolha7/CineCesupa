import CardFilme from '../components/CardFilme';
import interestelar from '../assets/imagens/interestelar.jpg';
import batman from '../assets/imagens/batman.jpg';
import origem from '../assets/imagens/origem.jpg';
import styles from './Catalogo.module.css';

function Filmes() {
    return (
        <main className={styles.pagina}>
            <h1>Filmes</h1>
            <p>Confira nossas recomendações de filmes.</p>

            <div className={styles.catalogo}>
            <CardFilme
                titulo="Interestelar"
                genero="Ficção científica"
                ano="2014"
                imagem={interestelar}
                sinopse="Um grupo de astronautas viaja pelo espaço em busca de um novo lar para a humanidade."
            />

            <CardFilme
                titulo="Batman"
                genero="Ação"
                ano="2022"
                imagem={batman}
                sinopse="Batman investiga uma série de crimes e descobre uma rede de corrupção em Gotham."
            />

            <CardFilme
                titulo="A Origem"
                genero="Ficção científica"
                ano="2010"
                imagem={origem}
                sinopse="Um especialista em invadir sonhos recebe a missão de implantar uma ideia na mente de outra pessoa."
            />
            </div>
        </main>
    );
}

export default Filmes;