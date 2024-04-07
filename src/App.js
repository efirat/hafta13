import { useReducer } from "react";
import {
  ilkYapilacaklarListesi,
  isKucultucu,
} from "./kucultuculer/isKucultucu";
import IsListe from "./IsListe";
import IsEkleForm from "./IsEkleForm"

function App() {
  const [yapilacaklar, vekilFonksiyon] = useReducer(
    isKucultucu,
    ilkYapilacaklarListesi
  );

  // const tamamlananSayisi = yapilacaklar.veri.filter( is => is.complete === true).length
  const tamamlananSayisi = yapilacaklar.veri.filter( is => is.complete === true).length

  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h1 className="h3">Yapılacaklar Listesi</h1>

            <IsEkleForm vekilFonksiyon={vekilFonksiyon} />
            <IsListe yapilacaklar={yapilacaklar} vekilFonksiyon={vekilFonksiyon} />

            <div className="mt-3">
              Toplam : {tamamlananSayisi} / {yapilacaklar.veri.length}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
