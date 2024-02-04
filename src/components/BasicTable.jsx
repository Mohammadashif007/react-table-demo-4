import useData from "../hooks/useData";
import "./BasicTable.css";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

const BasicTable = () => {
    const data = useData();
    const columns = [
        {
            header: "Id",
            accessorKey: "id",
        },
        {
            header: "First Name",
            accessorKey: "first_name",
        },
        {
            header: "Last Name",
            accessorKey: "last_name",
        },
        {
            header: "Email",
            accessorKey: "email",
        },
        {
            header: "Gender",
            accessorKey: "gender",
        },
        {
            header: "DOB",
            accessorKey: "dob",
        },
        {
            header: "Image",
            accessorKey: "image",
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <table>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {/* {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )} */}
                                    {cell.column.columnDef.accessorKey ===
                                    "image" ? (
                                        <img
                                            src={row.original.image}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                            }}
                                        ></img>
                                    ) : (
                                        
                                             flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )
                                        
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasicTable;
