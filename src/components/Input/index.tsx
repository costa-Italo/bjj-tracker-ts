import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";

const InputName = () => {
    return (
        <div className="flex justify-center items-center">
            <Input placeholder="Digite o nome de um aluno" className="m-4 w-80 border-none outline-none cursor-pointer"/>
            <Button className="font-bold">Cadastrar Aluno</Button>
        </div> 
    )
}

export default InputName;