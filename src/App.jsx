import { useState } from 'react';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Auteurs from './pages/Auteurs';
import Auteur from './pages/Auteur';

export default function App() {
  const [favoris, setFavoris] = useState([]);
  const [articleId, setArticleId] = useState(1);
  const [auteurId, setAuteurId] = useState(1);

  function basculerFavori(id) {
    setFavoris((precedents) =>
      precedents.includes(id)
        ? precedents.filter((item) => item !== id)
        : [...precedents, id]
    );
  }

  return (
    <div className="app">
      <p>Nombre de favoris : {favoris.length}</p>

      <section>
        <h2>Test page Article (ID actuel : {articleId})</h2>
        <button
          type="button"
          onClick={() => setArticleId((id) => (id > 1 ? id - 1 : 1))}
        >
          Article précédent
        </button>
        <button
          type="button"
          onClick={() => setArticleId((id) => id + 1)}
        >
          Article suivant
        </button>
        <Article articleId={articleId} />
      </section>

      <hr />

      <section>
        <h2>Test page Auteur (ID actuel : {auteurId})</h2>
        <button
          type="button"
          onClick={() => setAuteurId((id) => (id > 1 ? id - 1 : 1))}
        >
          Auteur précédent
        </button>
        <button
          type="button"
          onClick={() => setAuteurId((id) => (id < 10 ? id + 1 : 1))}
        >
          Auteur suivant
        </button>
        <Auteur
          auteurId={auteurId}
          favoris={favoris}
          onBasculerFavori={basculerFavori}
        />
      </section>

      <hr />

      <Auteurs onSelectionnerAuteur={setAuteurId} />

      <hr />

      <Articles favoris={favoris} onBasculerFavori={basculerFavori} />
    </div>
  );
}