import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BmiPagePresenterInterface } from "../../../config/Interfaces";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 10,
};

function createData(name: string, calories: number) {
  return { name, calories };
}

const rows = [createData("Frozen yoghurt", 159)];

export default function BasicModal({ prop }: BmiPagePresenterInterface) {
  return (
    <div>
      <Modal
        open={true}
        onClose={prop.handleBmiModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card variant="outlined" style={style}>
          <Stack spacing={5}>
            <Typography textAlign="center" variant="h4" component="h2">
              Your BMI
            </Typography>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">BMI</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={prop.handleBmiModal}
              variant="contained"
              sx={{ minWidth: "100%" }}
            >
              close
            </Button>
          </Stack>
        </Card>
      </Modal>
    </div>
  );
}
