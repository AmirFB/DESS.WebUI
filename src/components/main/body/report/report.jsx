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
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import DatePicker from "react-datepicker";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Collapse } from "react-collapse";

import "react-datepicker/dist/react-datepicker.css";
import "./report.css";
import FilterIcon from "../../../../assets/images/icon/filter.svg";

import CheckboxList from "./checkboxList";
import RadioList from "./radioList";

import * as siteActions from "../../../../redux/actions/siteActions";
import * as userActions from "../../../../redux/actions/userActions";
import { filterFaultType, filterReportType } from "../../../../types/siteTypes";

function Report({
  siteReducer,
  userReducer,
  getAllLog,
  getUsers,
  getSites,
  getGroups,
  getLog,
  ...props
}) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [seenAll, setSeenAll] = useState(false);
  const [resetedAll, setResetedAll] = useState(false);
  const [allSites, setAllSites] = useState(false);
  const [allGroups, setAllGroups] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedFaultTypes, setSelectedFaultTypes] = useState([]);
  const [selectedSites, setSelectedSites] = useState([]);
  const [selectedSeenBy, setSelectedSeenBy] = useState([]);
  const [selectedResetedBy, setSelectedResetedBy] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filter, setFilter] = useState(true);

  //Get Users
  let users = [];

  useEffect(() => {
    users = [];

    if (userReducer.users.length === 0)
      getUsers().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
  }, [userReducer.users]);

  userReducer.users.map((o) =>
    users.push({ value: o.id, label: o.firstName + " " + o.lastName })
  );

  //Get Sites and Site Groups
  let sites = [];
  let groups = [];

  useEffect(() => {
    sites = [];
    groups = [];

    if (siteReducer.sites.length === 0)
      getSites().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });

    if (siteReducer.groups.length === 0)
      getGroups().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
  }, [siteReducer.sites]);

  siteReducer.sites.map((o) => sites.push({ value: o.id, label: o.name }));
  siteReducer.groups.map((o) => groups.push({ value: o.id, label: o.name }));

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

  function handleToggle(e) {
    setSeenAll(e.target.checked);
  }
  function handleToggle2(e) {
    setResetedAll(e.target.checked);
  }
  function handleToggle3(e) {
    setAllGroups(e.target.checked);
  }
  function handleToggle4(e) {
    setAllSites(e.target.checked);
  }

  const handleSubmit = (e) => {
    let temp = [];
    let filter = {};

    selectedGroups.map((s) => temp.push(s.value));
    filter.siteGroupIds = [...temp];

    temp = [];

    selectedSites.map((s) => temp.push(s.value));
    filter.siteIds = [...temp];

    temp = [];

    filter.type = selectedTypes;

    selectedResetedBy.map((s) => temp.push(s.value));
    filter.resetedBy = [...temp];

    temp = [];

    selectedSeenBy.map((s) => temp.push(s.value));
    filter.seenBy = [...temp];

    temp = [];

    selectedFaultTypes.map((s) => temp.push(s.value));
    filter.faultTypes = [...temp];

    temp = [];

    filter.from = Date.parse(startDate);
    filter.to = Date.parse(endDate);
    filter.seenByAll = seenAll;
    filter.resetedByAll = resetedAll;
    filter.allGroups = allGroups;
    filter.allSites = allSites;

    if (filter.siteIds.length == 0 && filter.allSites == false) {
      alert("Please fill siteIds.");
    }
    if (filter.siteGroupIds == 0 && filter.allGroups == false) {
      alert("Please fill siteGroupIds.");
    }
    if (filter.faultTypes.lenght == 0) {
      alert("Please faultTypes.");
    }
    if (filter.resetedBy.length == 0 && filter.resetedByAll == false) {
      alert("Please fill resetedAll.");
    }
    if (filter.seenBy.length == 0 && filter.seenByAll == false) {
      alert("Please fill seenAll.");
    }
    if (filter.type.length == 0) {
      alert("Please fill type.");
    } else {
      getLog(filter).catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
    }
  };

  function handleFilter(e) {
    setToggled((oldState) => !oldState);
    setFilter(!filter);
  }

  function handlesetGroups(value) {
    setSelectedGroups(value);
  }

  function handlesetTypes(value) {
    setSelectedTypes(value);
  }

  function handlesetSites(value) {
    setSelectedSites(value);
  }

  function handlesetFaultTypes(value) {
    setSelectedFaultTypes(value);
  }

  function handlesetSeenBy(value) {
    setSelectedSeenBy(value);
  }

  function handlesetResetedBy(value) {
    setSelectedResetedBy(value);
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div>
        <IconButton
          aria-label="refresh"
          color="primary"
          size="medium"
          style={{ width: "30px", margin: 2 }}
          onClick={handleRefresh}
        >
          <RefreshIcon fontSize="inherit" />
        </IconButton>

        <img
          src={FilterIcon}
          style={{ width: "26px", margin: 2 }}
          onClick={handleFilter}
        />
        <Button onClick={handleSubmit} disabled={filter}>
          filter
        </Button>
      </div>

      <Collapse isOpened={toggled} theme={{ collapse: "foo", content: "bar" }}>
        <form style={{ margin: 2, width: "96%" }}>
          <div className="row">
            <div className="col-4">
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
                  style={{ marginTop: 5, marginBottom: 5, width: 400 }}
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
                  style={{ marginTop: 5, marginBottom: 5 }}
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
                <div className="col-3">
                  <RadioList
                    header="Types"
                    data={filterReportType}
                    handleChange={handlesetTypes}
                  />
                </div>

                <div className="col-3">
                  <CheckboxList
                    header="Site groups"
                    name="siteGroups"
                    data={groups}
                    disabled={allGroups}
                    handleChange={handlesetGroups}
                  />
                </div>
                <div className="col-3">
                  <CheckboxList
                    header="Sites"
                    data={sites}
                    disabled={allSites}
                    handleChange={handlesetSites}
                  />
                </div>
                <div className="col-3">
                  <CheckboxList
                    header="Fault types"
                    data={filterFaultType}
                    handleChange={handlesetFaultTypes}
                  />
                </div>
                <div className="col-3">
                  <CheckboxList
                    header="Seen by"
                    data={users}
                    disabled={seenAll}
                    handleChange={handlesetSeenBy}
                  />
                </div>
                <div className="col-3">
                  <CheckboxList
                    header="Reseted by"
                    data={users}
                    disabled={resetedAll}
                    handleChange={handlesetResetedBy}
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox
                        color="primary"
                        checked={allGroups}
                        onChange={handleToggle3}
                      />
                    }
                    label="All groups"
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox
                        color="primary"
                        checked={allSites}
                        onChange={handleToggle4}
                      />
                    }
                    label="All sites"
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox
                        color="primary"
                        checked={seenAll}
                        onChange={handleToggle}
                      />
                    }
                    label="Seen by all"
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox
                        color="primary"
                        checked={resetedAll}
                        onChange={handleToggle2}
                      />
                    }
                    label="Reseted by all"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Collapse>

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
  getUsers: PropTypes.func.isRequired,
  siteReducer: PropTypes.object.isRequired,
  getSites: PropTypes.func.isRequired,
  getGroups: PropTypes.func.isRequired,
  getLog: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getAllLog: siteActions.getAllLog,
  getSites: siteActions.getAll,
  getGroups: siteActions.getGroups,
  getLog: siteActions.getLog,
  getUsers: userActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
