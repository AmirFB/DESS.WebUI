import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";

import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import * as siteActions from "../../../../redux/actions/siteActions";

import defaultSite from "../../../../assets/defaultData/defaultSite.json";

import "./site.css";

const useStyles = makeStyles((theme) => {
  return {
    row: {},
    title: {
      fontSize: "18px",
    },
    component: {
      padding: theme.spacing(1),
      textAlign: "center",
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
      width: theme.spacing(3),
    },
    fault: {
      color: theme.palette.error.main,
      "&$checked": {
        color: theme.palette.error.main,
      },
    },
    primary: {
      color: theme.palette.primary.main,
      "&$checked": {
        color: theme.palette.primary.main,
      },
    },
    warning: {
      color: theme.palette.warning.war,
      "&$checked": {
        color: theme.palette.warning.main,
      },
    },
    checked: {},
    divider: {
      margin: theme.spacing(2, 0),
    },
  };
});

function SiteConfig({ siteReducer, saveSite, ...props }) {
  const [t, i18n] = useTranslation();
  const [site, setSite] = useState({ ...defaultSite });
  const [locatonDisabled, setLocatonDisabled] = useState(true);
  const classes = useStyles();
  console.log(classes);
  useEffect(() => {
    if (props.location.state)
      setSite(siteReducer.sites.find((s) => s.id === props.location.state.id));
    else setSite({ ...defaultSite });
  }, [siteReducer]);

  const handleSubmit = (data) => saveSite(data);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setSite((prevSite) => ({ ...prevSite, [name]: value ? value : checked }));

    if (name === "autoLocation") setLocatonDisabled(e.target.checked);
  };

  return (
    <div style={{ width: "900px", margin: "auto" }}>
      <Grid container direction="column" justify="flex-start">
        <Grid
          className={classes.row}
          container
          direction="row"
          justify="flex-start"
        >
          <Grid item>
            <FormLabel className={classes.title}>
              {t("site.basicInformation")}
            </FormLabel>
          </Grid>
        </Grid>
        <Grid
          className={classes.row}
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
        >
          <Grid item xs={3}>
            <TextField
              name="name"
              value={site.name}
              label={t("common.name")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"siteId"}
              value={site.siteId}
              label={t("site.siteId")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"serialNo"}
              value={site.serialNo}
              label={t("site.serialNo")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"phoneNumber"}
              value={site.phoneNumber}
              label={t("site.phoneNumber")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              label={t("site.autoLocation")}
              control={
                <Checkbox
                  classes={{
                    root: classes.primary,
                    checked: classes.checked,
                  }}
                  name={"autoLocation"}
                  checked={site.autoLocation}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"latitude"}
              value={site.latitude}
              label={t("common.latitude")}
              onChange={handleChange}
              disabled={locatonDisabled}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"longitude"}
              value={site.longitude}
              label={t("common.longitude")}
              onChange={handleChange}
              disabled={locatonDisabled}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" justify="flex-start">
        <Grid
          className={classes.row}
          container
          direction="row"
          justify="flex-start"
        >
          <Grid item>
            <FormLabel className={classes.title}>
              {t("site.operationalParameters")}
            </FormLabel>
          </Grid>
        </Grid>
        <Grid
          className={classes.row}
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
        >
          <Grid item xs={3}>
            <FormControlLabel
              label={t("editSite.hvProtection")}
              control={
                <Checkbox
                  classes={{
                    root: classes.fault,
                    checked: classes.checked,
                  }}
                  name={"hvEnabled"}
                  checked={site.hvEnabled}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              label={t("editSite.lvProtection")}
              control={
                <Checkbox
                  classes={{
                    root: classes.fault,
                    checked: classes.checked,
                  }}
                  name={"lvEnabled"}
                  checked={site.lvEnabled}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              label={t("editSite.tamper")}
              control={
                <Checkbox
                  classes={{
                    root: classes.fault,
                    checked: classes.checked,
                  }}
                  name={"tamperEnabled"}
                  checked={site.tamperEnabled}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.row}
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
          style={{ marginTop: "5px" }}
        >
          <Grid item xs={3}>
            <TextField
              name={"hvPower"}
              value={site.hvPower}
              label={t("editSite.power")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"hvThreshold"}
              value={site.hvThreshold}
              label={t("editSite.threshold")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"hvRepeat"}
              value={site.hvRepeat}
              label={t("site.repeat")}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={3}>
            <FormControlLabel
              className={classes.component}
              label={t("editSite.temperatureWarning")}
              control={
                <Checkbox
                  classes={{
                    root: classes.warning,
                    checked: classes.checked,
                  }}
                  name={"temperatureWarning"}
                  checked={site.temperatureWarning}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"temperatureMin"}
              value={site.temperatureMin}
              label={t("common.min")}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"temperatureMax"}
              value={site.temperatureMax}
              label={t("common.max")}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={3}>
            <FormControlLabel
              label={t("editSite.batteryWarning")}
              control={
                <Checkbox
                  classes={{
                    root: classes.warning,
                    checked: classes.checked,
                  }}
                  name={"batteryWarning"}
                  checked={site.batteryWarning}
                  onChange={handleChange}
                />
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"batteryMin"}
              value={site.batteryMin}
              label={t("common.min")}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={5}
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={3}>
            <TextField
              name={"intrval"}
              value={site.intrval}
              label={t("site.interval")}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

SiteConfig.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  saveSite: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {
  saveSite: siteActions.save,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteConfig);
