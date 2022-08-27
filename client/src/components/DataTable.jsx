import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/material';

const DataTable = ({ data }) => {

    const columns = [
        {
            field: "id",
            headerName: "ID",

        },

        {
            field: "name",
            headerName: "Name",
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 30,
        },
        {
            field: "phone",
            headerName: "Phone",
            width: 140
        },

        {
            field: "date",
            headerName: "Date",
            description: "Date of appointment",
            width: 200
        }
    ];


    return (
        <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </Box>
    )
}

export default DataTable