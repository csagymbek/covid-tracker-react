import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "../styles/InfoBox.css";

export default function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* title  */}
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        {/* number of cases  */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* total  */}
        <Typography color="textSecondary" className="infoBox__total">
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
}
