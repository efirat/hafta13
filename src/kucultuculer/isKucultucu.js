import { v4 as uuid } from "uuid";

const ilkYapilacaklarListesi = {
  veri: [
    {
      id: 1,
      title: "Yumurta alınacak (Organik)",
      complete: false,
    },

    {
      id: 2,
      title: "Ekmek alınacak (2 adet)",
      complete: true,
    },
  ],
  tamamlanan: 0,
};

const isKucultucu = (state, aksiyon) => {
    function tamamlananSayisi(veri){
        return veri.filter((is) => is.complete === true).length;
    }

  switch (aksiyon.type) {
    case "TAMAMLANDI":
      const tamamlandiVeri = state.veri.map((is) => {
        if (is.id === aksiyon.id) {
          return { ...is, complete: !is.complete };
        } else {
          return is;
        }
      });
      const yeniState = { ...state, veri: tamamlandiVeri};
      return {...yeniState, tamamlanan: tamamlananSayisi(yeniState.veri)}

    case "SİL":
      const silindiVeri = state.veri.filter((is) => {
        // Silme isleminde map yerine filter kullanilmali.
        // Eger vekil fonksiyondan gelen id su anki ile esit degilse yeni arraye elemani ekle... FILTRELEME...
        if (is.id !== aksiyon.id) {
          return is;
        }
      });
      return { ...state, veri: silindiVeri };

    case "EKLE":
      /*
            const enBuyukIs = state.reduce((max, is) => {
                    return is.id > max.id ? is : max;
                }, 
                state[0] 
            )

            const yeniIs = {id:enBuyukIs.id + 1, title:aksiyon.title, completed: false}
            */

      /*
            const yeniId = state.reduce((max, is) => Math.max(max, is.id), 0) + 1;
            const yeniIs = {id:yeniId, title:aksiyon.title, completed: false}
            */

      // const yeniId = state.reduce((max, is) => {
      //         return Math.max(max, is.id)
      //     }
      // ,0) + 1;

      const yeniId = uuid();
      const yeniIs = { id: yeniId, title: aksiyon.title, complete: false };
      return { ...state, veri: [...state.veri, yeniIs] };


    default:
      return state.veri;
  }
};

export { ilkYapilacaklarListesi, isKucultucu };
