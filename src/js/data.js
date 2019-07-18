import uuidv4 from "@bundled-es-modules/uuid/v4.js"

import * as C from './constants'

// drop in something collecting from an API here
export let data = {
  bottles : [
    {
      id     : uuidv4(),
      name   : 'Cabernet Shiraz Merlot',
      colour : C.RED,
      detail : 'Bright Red Bouquet: Red fruits with light savoury notes, nutmeg & chocolate oak character Palate: Sweet ripe plum & berry fruits with a subtle vanilla & choc mint oak character. The wine is medium to full body with soft balanced tannins.'
    },
    {
      id     : uuidv4(),
      name   :'DINO Trebbiano Pinot Grigio',
      colour : C.WHITE,
      detail : 'Crisp and fruity, this wine created from Trebbiano and Pinot Grigio grapes grown in central Italy giving it fresh flavours of citrus and red apple. Serve chilled as an aperitif of with lightly spiced food. Store in a cool, dark place.'
    },
    {
      id     : uuidv4(),
      name   : 'Gallo Family Vineyards Rose Grenache',
      colour : C.OTHER,
      detail : "You can taste the Gallo family's dedication to the art of winemaking, passed down through four generations, in this White Grenache. This delicious rosé highlights vibrant fresh strawberry flavours and delicate floral notes."
    },  
  ]
}
