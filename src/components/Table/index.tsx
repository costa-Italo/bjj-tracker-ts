    import {
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHeader,
        TableRow,
    } from "@/components/ui/table"
    
    const TableStudents = () => {
        return (
            <Table className="">
                <TableCaption></TableCaption>
            <TableHeader className="text-center">
                
            </TableHeader> 
    <TableBody className="text-xs text-gray-400 text-center">
        <TableRow>
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