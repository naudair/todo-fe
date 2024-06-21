import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <div className="p-10">
      <LinearProgress color="inherit" />
    </div>
  );
}
