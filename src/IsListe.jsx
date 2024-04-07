function IsListe({ yapilacaklar, vekilFonksiyon }) {

    const tamamlandiYap = (is) => {
        vekilFonksiyon({ type: "TAMAMLANDI", id: is.id });
    };

    const isSil = (is,olay) => {
        olay.preventDefault();
        vekilFonksiyon({ type: "SİL", id: is.id });
    };

      
  return (
    <>
      {yapilacaklar.veri.map((is) => (
        <div key={is.id} className="d-flex justify-content-between">
          <label className="d-flex gap-2">
            <input
              type="checkbox"
              checked={is.complete}
              onChange={() => tamamlandiYap(is)}
            />
            {is.title}
          </label>
          <a href="#" onClick={(olay) => isSil(is, olay)} className="text-danger">
            <i className="bi bi-trash"></i>
          </a>
        </div>
      ))}
    </>
  );
}

export default IsListe;
