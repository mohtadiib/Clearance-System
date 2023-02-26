import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

export default function SearchField() {
    return (
        <Box
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200,height:40, border: 1, borderRadius: 3,borderColor: "lightGray" }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, fontSize:12 }}
                placeholder="ابحث عن اي شي"
            />
            <SearchIcon />
        </Box>
    );
}
