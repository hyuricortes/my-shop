import { useState } from "react";
import { OrderFiltro } from "./styles";


type OrderFiltro = {
  order: string;
  setOrder: any;
}

export const SelectOrderFiltro = ({ order, setOrder }: OrderFiltro) => {

    

    return (
        <OrderFiltro
              value={order}
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
      </OrderFiltro> 
    )
}