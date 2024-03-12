import { ChangeEvent, KeyboardEvent, useState } from "react";

import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";

interface InputNameProps {
    onAddStudent: (name: string) => void;
}

const InputName: React.FC<InputNameProps> = ({ onAddStudent }) => {
    const [name, setName] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        onAddStudent(name)
        setName("")
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onAddStudent(name);
            setName("");
        }
    }
    return (
        <div className="flex justify-center items-center">
            <Input 
                type="text"
                placeholder="Digite o nome de um aluno" 
                value={name}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="m-4 w-80 border-none outline-none cursor-pointer"/>
            <Button onClick={handleClick} className="font-bold">Cadastrar Aluno</Button>
        </div> 
    )
}

export default InputName;