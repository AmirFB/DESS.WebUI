import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import "@progress/kendo-theme-material/dist/all.css";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Zoom } from "@progress/kendo-react-animation";
import Loading from "../../../common/loading";
import ReportGrid from "./reportGrid";
import CheckboxList from "./checkboxList";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import DatePicker from "react-datepicker";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import "react-datepicker/dist/react-datepicker.css";
import "./report.css";

import * as siteActions from "../../../../redux/actions/siteActions";

function Report({ siteReducer, getAllLog, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getAllLog().catch((error) => {
      setGetFailed(true);
      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }, [props.log]);

  function handleRefresh() {
    getAllLog().catch((error) => {
      setGetFailed(true);
      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }

  const handleSubmit = (e) => {
    alert("hi");
    e.preventDefault();
  };

  var a = [
    { value: 0, title: "2", checked: true },
    { value: 1, title: "3", checked: false },
    { value: 2, title: "4", checked: true },
  ];

  var b = [
    { title: "a", checked: false },
    { title: "b", checked: true },
    { title: "c", checked: false },
  ];

  return (
    <div className="list-div">
      <IconButton
        aria-label="refresh"
        color="primary"
        size="medium"
        style={{ width: "45px" }}
        onClick={handleRefresh}
      >
        <RefreshIcon fontSize="inherit" />
      </IconButton>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}></AccordionSummary>
        <AccordionDetails style={{ paddingLeft: "4px", paddingRight: "8px" }}>
          <form>
            <div className="row">
              <div className="col-3">
                <div className="col">
                  <InputLabel
                    id="label"
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    From
                  </InputLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    showTimeSelect
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy HH:mm"
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <InputLabel
                    id="label"
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    To
                  </InputLabel>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    showTimeSelect
                    style={{ marginTop: 6, marginBottom: 6 }}
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy HH:mm"
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Type" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Site group ids" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Site ids" data={b} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Fault types" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Seen by" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Reseted by" data={b} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="All groups" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="All sites" data={b} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Seen by all" data={a} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <CheckboxList header="Reseted by all" data={b} />
                  </div>
                  <div
                    className="col-2"
                    style={{ marginTop: 6, marginBottom: 6 }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      style={{ marginTop: 18 }}
                    >
                      Filter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>

      {siteReducer.loading ? (
        <Loading />
      ) : siteReducer.hasError && siteReducer.log.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <ReportGrid log={siteReducer.log} sites={siteReducer.sites} />
      )}

      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <Zoom enter={true} exit={true}>
          {getFailed && (
            <Notification
              type={{ style: "error", icon: true }}
              closable={true}
              onClose={() => setGetFailed(false)}
            >
              <span>{t("site.getReportsFailed")}</span>
            </Notification>
          )}
        </Zoom>
      </NotificationGroup>
    </div>
  );
}

Report.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  getAllLog: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {
  getAllLog: siteActions.getAllLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
