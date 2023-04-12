import React, {useState} from 'react';
import { HiddenCheckbox, SpanCheckbox, Text } from './styles';


interface Props {
    label: string;
    name: string;
}

export const CheckBoxInput = ({ label, name }: Props) => {
   const [isChecked, setIsChecked] = useState(false);

    return (
       <div className="checkbox-wrapper">
        <Text>
            <HiddenCheckbox type="checkbox" name={name} color={isChecked ? '#6237BF' : '#fff'} checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}  />
            <SpanCheckbox>{label}</SpanCheckbox>
        </Text>
        </div>
    )
}