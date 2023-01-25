import * as React from 'react';
import ProfilesList from "../../../../examples/Lists/ProfilesList";
import Box from "@mui/material/Box";

export default function FileDocs({docs,call}) {
    return (
        <Box sx={{ maxWidth: 450 }} >
            <ProfilesList
                shadow={0}
                profiles={docs}
                call={call}
            />
        </Box>
    );
}
