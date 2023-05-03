import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const StudentDetail = (props) => {
  const { state } = useLocation();
  const { studentData } = state;
  console.log(studentData);
  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ color: "primary", flex: 0, textTransform: "uppercase", mb: 2 }}
      >
        Student Detail
      </Typography>
      <Card
        elevation={4}
        className="bg-ligth border"
        sx={{
          flex: 1,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-between",
          p: 3,
          my: 2,
          paddingX: 3,
        }}
      >
        <Typography variant="body1">
          <Typography
            variant="span"
            sx={{ fontSize: ["1rem", "1.3rem"], fontWeight: 700 }}
          >
            Name
          </Typography>
          : {studentData.name}
        </Typography>
        <Typography variant="body1">
          <Typography
            variant="span"
            sx={{ fontSize: ["1rem", "1.3rem"], fontWeight: 700 }}
          >
            Current Grade
          </Typography>
          : {studentData.grade}
        </Typography>
        <Typography variant="body1">
          <Typography
            variant="span"
            sx={{ fontSize: ["1rem", "1.3rem"], fontWeight: 700 }}
          >
            Roll No
          </Typography>
          : {studentData.roll}
        </Typography>
      </Card>
      <Card sx={{ flex: 2 }}>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Grade</th>
              <th>Percentage</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {studentData.prevGrades.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{index + 1}</td>
                <td>{val.percent}</td>
                <td>{val.remark}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Box>
  );
};

export default StudentDetail;
