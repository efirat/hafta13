import { useState } from "react"

function IsEkleForm({vekilFonksiyon}) {
    const [yeniIsAdi, yeniIsAdiGuncelle] = useState("")

    function formGonder(olay){
        olay.preventDefault()

        // vekil fonksiyonla bir aksiyon tetiklenecek...
        //EKLE
        vekilFonksiyon({ type: "EKLE", title: yeniIsAdi });

        yeniIsAdiGuncelle("");
    }

    return (
        <>
            <form className="input-group mb-3" onSubmit={formGonder}>
                <input value={yeniIsAdi} onChange={(olay) => yeniIsAdiGuncelle(olay.target.value)} className="form-control form-control-sm" type="text" placeholder="İş adı yaz.." />
                <button type="submit" className="btn btn-success btn-sm"> <i className="bi bi-plus-circle-dotted"></i> Ekle </button>
            </form>
        </>
    )
}

export default IsEkleForm