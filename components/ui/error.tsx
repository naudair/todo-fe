import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const Error = ({ error }: { error: any }) => {
  return (
    <Stack sx={{ width: "100%", padding: "18px 10px" }} spacing={2}>
      <Alert variant="filled" severity="error">
        ERROR: {error}.
      </Alert>
    </Stack>
  );
};
