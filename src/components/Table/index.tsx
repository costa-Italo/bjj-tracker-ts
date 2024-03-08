    import {
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from "@/components/ui/table"
    
    const TableStudents = () => {
        return (
            <Table className="mx-auto text-center text-white">
                <TableCaption></TableCaption>
            <TableHeader className="text-center">
                <TableRow className="text-center text-white"> 
                    <TableHead className="text-center">Ranking</TableHead>
                    <TableHead className="text-center">Nome</TableHead>
                    <TableHead className="text-center">Aulas</TableHead>
                    <TableHead className="text-center">Aproveitamento</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
    <TableBody>
        <TableRow className="text-center">
            <TableCell className="font-medium">1º</TableCell>
            <TableCell className="text-center">Italo</TableCell>
            <TableCell className="text-center">45</TableCell>
            <TableCell className="text-center">100%</TableCell>
            <TableCell className="text-center">Apto</TableCell>
            <TableCell className="text-center">+ - x</TableCell>    
        </TableRow>
        <TableRow className="text-center">
            <TableCell className="font-medium">2º</TableCell>
            <TableCell className="text-center">Lucas Vieira</TableCell>
            <TableCell className="text-center">45</TableCell>
            <TableCell className="text-center">100%</TableCell>
            <TableCell className="text-center">Apto</TableCell>
            <TableCell className="text-center">+ - x</TableCell>    
        </TableRow>
        <TableRow className="text-center">
            <TableCell className="font-medium">3º</TableCell>
            <TableCell className="text-center">Gustavo</TableCell>
            <TableCell className="text-center">45</TableCell>
            <TableCell className="text-center">100%</TableCell>
            <TableCell className="text-center">Apto</TableCell>
            <TableCell className="text-center">+ - x</TableCell>    
        </TableRow>
    </TableBody>
    </Table>

        )
    }

    export default TableStudents;