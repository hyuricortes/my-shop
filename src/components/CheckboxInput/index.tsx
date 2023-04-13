import React, {useState} from 'react';
import { HiddenCheckbox, SpanCheckbox, Text } from './styles';


interface Props {
    label: string;
    name: string;
    setCategoria: any;
    categoria: [];
    value: string;
}

export const CheckBoxInput = ({ label, name, setCategoria, categoria, value }: Props) => {
   const [isChecked, setIsChecked] = useState(false);

   const handleCheck = (e: any) => {
      setIsChecked((prev) => !prev)
      setCategoria([...categoria, e.target.value])
   }


    return (
       <div className="checkbox-wrapper">
        <Text>
            <HiddenCheckbox type="checkbox" name={name} color={isChecked ? '#6237BF' : '#fff'} checked={isChecked} value={value} onChange={(e) => handleCheck(e)}  />
            <SpanCheckbox>{label}</SpanCheckbox>
        </Text>
        </div>
    )
}