import React, { useState } from "react";
import Collapsible from "react-collapsible";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import { faultType } from "../../../types/siteTypes";
import { useTranslation } from "react-i18next";
import { dateToString } from "../../../helpers/dateTime";
import { withStyles } from "@material-ui/core/styles";
import { Collapse } from "react-collapse";

import RotateLeftIcon from "@material-ui/icons/RotateLeft";

import * as colors from "@material-ui/core/colors";

const MyAccordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(Accordion);

const MyAccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(AccordionSummary);

const MyAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(AccordionDetails);

function renderText(t, site, fault) {
  const style = {
    fontWeight: "bold",
    color:
      new Date(fault.obviatedOn).getFullYear() < 1000
        ? colors.red[500]
        : colors.amber[500],
  };
  let text;

  switch (fault.type) {
    case faultType.Hv:
      text = "HV";
      break;
    case faultType.Lv:
      text = "LV";
      break;
    case faultType.Input1:
      text = site.inputs[0].name;
      break;
    case faultType.Input2:
      text = site.inputs[1].name;
      break;
    case faultType.Power:
      text = t("fault.power");
      break;
    case faultType.Tamper:
      text = t("fault.tamper");
      break;
  }

  return (
    <span key={fault.Id} style={style}>
      {t("faultList.type") + ": " + text}
    </span>
  );
}

export default function FaultList({ site }) {
  const [t, i18n] = useTranslation();
  const [toggled, setToggled] = useState(false);

  const faults = site.faults.map((fault) => {
    let data = { Id: fault.id, ...fault };
    delete data.id;
    return data;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggled((oldState) => !oldState);
  };

  return (
    <>
      <form key={"b" + site.id} onSubmit={handleSubmit}>
        <Button
          type="submit"
          variant="text"
          style={{ fontSize: "10px", fontWeight: "bold", marginTop: "10px" }}
        >
          {t("faultList.faults") + " (" + faults.length + ")"}
        </Button>
      </form>
      <Collapse isOpened={toggled} theme={{ collapse: "foo", content: "bar" }}>
        <List style={{ overflow: "auto", paddingLeft: "-10px" }}>
          {faults.map((fault) => {
            return (
              <Box key={fault.Id} border={1} borderColor={colors.blue[100]}>
                <ListItem>
                  <div className="container">
                    <div className="row">
                      <div className="column">
                        <div className="row-1">
                          {renderText(t, site, fault)}
                        </div>
                        <div className="row-1">
                          <span style={{ color: colors.amber[500] }}>
                            {t("faultList.oc") +
                              ": " +
                              dateToString(fault.occuredOn)}
                          </span>
                        </div>
                        <div className="row-1">
                          <span
                            style={{
                              color:
                                fault.obviatedOn > 0
                                  ? colors.amber[500]
                                  : colors.red[500],
                            }}
                          >
                            {t("faultList.ob") +
                              ": " +
                              (fault.obviatedOn > 0
                                ? dateToString(fault.obviatedOn)
                                : " - ")}
                          </span>
                        </div>
                      </div>
                      <div>
                        <IconButton
                          variant="contained"
                          size="medium"
                          color="primary"
                        >
                          <RotateLeftIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </ListItem>
              </Box>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
