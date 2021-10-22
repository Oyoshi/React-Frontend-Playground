import { Typography, Box } from "@mui/material";
import { TITLE } from "./SuccessPage.const";

const SuccessPage = () => (
  <Box sx={{ mt: 5, textAlign: "center" }}>
    <Typography variant="h3">{TITLE}</Typography>
  </Box>
);

export default SuccessPage;
