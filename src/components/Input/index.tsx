import { TextInput } from "./styles"

type InputTextDTO = {
    text: string;
    handleText: any;
    placeholder: string;
}

export const InputText = ({ text, handleText, placeholder }: InputTextDTO) => {
    return (
        <TextInput placeholder={placeholder} value={text} onChange={(e) => handleText(String(e.target.value))} />
    )
}