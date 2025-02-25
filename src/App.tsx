import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import {
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
  Paper,
} from "@mui/material";

function App() {
  const [matrix, setMatrix] = useState([
    [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
    [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
    [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
    [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
  ]);

  const [index, setIndex] = useState<null | { row: number; col: number; }>(null);

  const hoverHandler = (rowIndex: number, colIndex: number) => {
    setIndex({
      row: rowIndex,
      col: colIndex,
    });
  };

  const isSelected = (rowIndex:number, colIndex:number) =>
    index && rowIndex === index?.row && colIndex === index?.col;

  const clear = () => setIndex(null);

  const parseList = (list: number[]) => "[ " + list.join(", ") + " ]";

  return (
    <div className="App">
      <div
        className="title"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <CodeIcon />
        <h2>Care-i treaba cu matricea?</h2>
      </div>
      <p className="secondary-text">
        Selectează orice element al matricei de mai jos pentru a afla informații
        despre el.
      </p>

      <div className="table-ctn">
        <table>
          {matrix.map((row, rowIndex) => (
            <>
              {rowIndex === 0 ? (
                <>
                  {" "}
                  <td className="idx"></td>
                  {row.map((col, colIndex) => (
                    <td className="idx" key={colIndex}>
                      {colIndex}
                    </td>
                  ))}{" "}
                </>
              ) : (
                <></>
              )}
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <>
                    {colIndex === 0 ? (
                      <td className="idx" key={colIndex}>
                        {rowIndex}
                      </td>
                    ) : (
                      <></>
                    )}
                    <td
                      key={colIndex}
                      className={
                        isSelected(rowIndex, colIndex) ? "selected" : ""
                      }
                      onClick={() => hoverHandler(rowIndex, colIndex)}
                    >
                      {col}
                    </td>
                  </>
                ))}
              </tr>
            </>
          ))}
        </table>
      </div>

      {index ? (
        <>
          <div className="header-ctn">
            <p className="secondary-text">Informații despre selecție</p>
            <Button variant="outlined" onClick={() => clear()}>
              Curăță selecția 🧹
            </Button>
          </div>
          <TableContainer component={Paper} className="table-body">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>valoare element</TableCell>
                  <TableCell align="left">rand</TableCell>
                  <TableCell align="left">coloana</TableCell>
                  <TableCell align="left">lista[rand]</TableCell>
                  <TableCell align="left">len(lista[rand])</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={"row-1"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" style={{ width: "20%" }}>
                    lista[{index.row}][{index.col}] ={" "}
                    <span className="list-val">
                      {matrix[index.row][index.col]}
                    </span>
                  </TableCell>
                  <TableCell align="left" style={{ width: "15%" }}>
                    i = <span className="list-val">{index.row}</span>
                  </TableCell>
                  <TableCell align="left" style={{ width: "15%" }}>
                    j =<span className="list-val">{index.col}</span>
                  </TableCell>
                  <TableCell align="left">
                    lista[{index.row}] ={" "}
                    <span className="list-val">
                      {parseList(matrix[index.row])}
                    </span>
                  </TableCell>
                  <TableCell align="left" style={{ width: "25%" }}>
                    len(lista[{index.row}]) ={" "}
                    <span className="list-val">{matrix[index.row].length}</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <p>Niciun element selectat 😛</p>
        </>
      )}
    </div>
  );
}

export default App;
