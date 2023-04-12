import { useState } from "react";
import { OrderFiltro } from "./styles";



export const SelectOrderFiltro = () => {

    const [value, setValue] = useState("b");

    function logValue() {
        console.log(value);
    }

    return (
        <OrderFiltro
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              <option value="a">A-Z</option>
              <option value="b">Z-A</option>
              <option value="c">Menor Preço</option>
              <option value="d">Maior Preço</option>
      </OrderFiltro> 
    )
}