import { Box, Button, Stack, TextField } from "@mui/material";

// const Responsive = styled("Box")(({ theme }) => ({
//   [theme.breakpoints.up("mobile")]: {
//     width: "20ch",
//   },
//   [theme.breakpoints.up("tablet")]: {
//     width: "35ch",
//   },
//   [theme.breakpoints.up("desktop")]: {},
// }));

const Input = () => {
  return (
    <>
      {/* <Responsive> */}
      <Stack sx={{ paddingLeft: "12rem" }} spacing={4} direction="row">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        <Box height={100} width={200} sx={{ p: 2.5 }}>
          <Button sx={{ width: "14ch" }} variant="contained">
            Add
          </Button>
        </Box>
      </Stack>
      {/* </Responsive> */}
    </>
  );
};

export default Input;
