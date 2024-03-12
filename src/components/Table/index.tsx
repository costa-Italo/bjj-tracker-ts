import React, { useState } from "react";
import InputName from "../Input";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const TableStudents = () => {
    const [students, setStudents] = useState<string[]>([]);

    const handleAddStudents = (name: string) => {
        setStudents([...students, name]);
    };

    return (
        <div>
            <InputName onAddStudent={handleAddStudents} />
        <Table>
            <TableCaption></TableCaption>
            <TableHeader className="text-center"></TableHeader>
            <TableBody className="text-xs text-gray-400 text-center">
                {students.map((student, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}º</TableCell>
                        <TableCell className="text-center">{student}</TableCell>
                        <TableCell className="text-center">45</TableCell>
                        <TableCell className="text-center">100%</TableCell>
                        <TableCell className="text-center">Apto</TableCell>
                        <TableCell className="text-center">+ - x</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    );
};

export default TableStudents;
