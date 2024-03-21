import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import closeIcon from "../assets/icons/close.svg";
import editIcon from "../assets/icons/edit.svg";

const TodoList = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex start"
        spacing={2}
      >
        <Divider>
          <Typography variant="h5" component="h5">
            Todo List
          </Typography>
        </Divider>

        <Stack direction="row" justifyContent="space-between">
          <Button color="primary" display="block">
            Complete All Task
          </Button>
          <Button color="primary" display="block">
            Clear All Task
          </Button>
        </Stack>

        <Container sx={{ backgroundColor: "#FAF9F6" }} maxWidth="lg">
          <Table sx={{ minWidth: 850 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  ID
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Todo Task
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Task Status
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">math problem solved</TableCell>
                <TableCell align="center">
                  <Button>completed</Button>
                  <Button color="error">incomplete</Button>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button color="primary">
                      <img
                        height={25}
                        width={25}
                        src={editIcon}
                        alt="edit_icon"
                      />
                    </Button>
                    <Button color="error">
                      <img
                        height={25}
                        width={25}
                        src={closeIcon}
                        alt="close_icon"
                      />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Stack>
    </>
  );
};

export default TodoList;
