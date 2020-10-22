import React, { useState, useEffect } from "react";
import PropTypes, { number } from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import defaultSite from "../../../../assets/defaultData/defaultSite.json";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { triggerTypes } from "../../../../types/siteTypes";

import * as siteActions from "../../../../redux/actions/siteActions";

import "./site.css";

const useStyles = makeStyles((theme) => {
  return {
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
    submit: { color: theme.palette.primary.main },
  };
});

function SiteConfig({ siteReducer, saveSite, ...props }) {
  const [t, i18n] = useTranslation();
  const [site, setSite] = useState({ ...defaultSite });
  const [locatonDisabled, setLocatonDisabled] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    if (props.location.state) {
      let data = siteReducer.sites.find(
        (s) => s.id === props.location.state.id
      );
      data = {
        ...data,
        input1: data.inputs[0],
        input2: data.inputs[1],
        output1: data.outputs[0],
        output2: data.outputs[1],
      };
      delete data.inputs;
      delete data.outputs;
      setSite(data);
      setLocatonDisabled(data.autoLocation);
    } else setSite({ ...defaultSite });
    setLocatonDisabled(defaultSite.autoLocation);
  }, [siteReducer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...site,
      inputs: [site.input1, site.input2],
      outputs: [site.output1, site.output2],
      latitude: site.latitude.toString(),
      longitude: site.longitude.toString(),
    };

    delete data.input1;
    delete data.input2;
    delete data.output1;
    delete data.output2;
    console.log(data);

    saveSite(data);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const num = parseInt(value);
    setSite((prevSite) => ({
      ...prevSite,
      [name]: value ? (!isNaN(num) ? num : value) : checked,
    }));

    if (name === "autoLocation") setLocatonDisabled(e.target.checked);
  };

  const handleInput1Change = (e) => {
    const { name, value, checked } = e.target;
    setSite((prevSite) => ({
      ...prevSite,
      input1: {
        ...prevSite.input1,
        [name]:
          value !== undefined && value !== null && value !== ""
            ? value
            : checked,
      },
    }));
  };

  const handleInput2Change = (e) => {
    const { name, value, checked } = e.target;
    setSite((prevSite) => ({
      ...prevSite,
      input2: {
        ...prevSite.input2,
        [name]:
          value !== undefined && value !== null && value !== ""
            ? value
            : checked,
      },
    }));
  };

  const handleOutput1Change = (e) => {
    const { name, value, checked } = e.target;
    setSite((prevSite) => ({
      ...prevSite,
      output1: {
        ...prevSite.output1,
        [name]:
          value !== undefined && value !== null && value !== ""
            ? value
            : checked,
      },
    }));
  };

  const handleOutput2Change = (e) => {
    const { name, value, checked } = e.target;
    setSite((prevSite) => ({
      ...prevSite,
      output2: {
        ...prevSite.output2,
        [name]:
          value !== undefined && value !== null && value !== ""
            ? value
            : checked,
      },
    }));
  };

  const handleTriggerChange = (e) => {
    const { name, value } = e.target;
    setSite((prevSite) => ({
      ...prevSite,
      [name]: {
        ...prevSite[name],
        triggers: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container style={{ width: "900px" }}>
        {/* Basic Information */}
        <Grid container direction="column" justify="flex-start">
          <Grid item>
            <FormLabel className={classes.title}>
              {t("site.basicInformation")}
            </FormLabel>
          </Grid>
          <Grid
            container
            item
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
        {/* Operational Parameteres */}
        <Grid
          container
          item
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid container direction="row" justify="flex-start">
            <Grid item>
              <FormLabel className={classes.title}>
                {t("site.operationalParameters")}
              </FormLabel>
            </Grid>
          </Grid>
          <Grid
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
                type="number"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name={"hvThreshold"}
                value={site.hvThreshold}
                label={t("editSite.threshold")}
                onChange={handleChange}
                type="Number"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name={"hvRepeat"}
                value={site.hvRepeat}
                label={t("site.repeat")}
                onChange={handleChange}
                type="number"
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
                type="number"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name={"temperatureMax"}
                value={site.temperatureMax}
                label={t("common.max")}
                onChange={handleChange}
                type="number"
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
                type="number"
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
                name={"interval"}
                value={site.interval}
                label={t("site.interval")}
                onChange={handleChange}
                type="number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        {/* IOs */}
        <Grid container item direction="column" justify="flex-start">
          <Grid item>
            <FormLabel
              className={classes.title}
              style={{ marginTop: "5px", marginBottom: "15px" }}
            >
              {t("editSite.ios")}
            </FormLabel>
          </Grid>

          <Grid
            container
            item
            direction="column"
            justify="flex-start"
            spacing={5}
          >
            {/* Input 1 */}
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={1}>
                <FormLabel>{t("editSite.input1")}</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  label={t("common.enabled")}
                  control={
                    <Checkbox
                      name="enabled"
                      checked={site.input1.enabled}
                      onChange={handleInput1Change}
                    />
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <InputLabel id="label">{t("editSite.type")}</InputLabel>
                <Select
                  labelId="label"
                  name="type"
                  value={site.input1.type}
                  onChange={handleInput1Change}
                >
                  <MenuItem value={0}>NO</MenuItem>
                  <MenuItem value={1}>NC</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="name"
                  value={site.input1.name}
                  label={t("common.name")}
                  onChange={handleInput1Change}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="timer"
                  type="number"
                  value={site.input1.timer}
                  label={t("editSite.timer")}
                  onChange={handleInput1Change}
                />
              </Grid>
            </Grid>
            {/* Input 2 */}
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={1}>
                <FormLabel>{t("editSite.input2")}</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  label={t("common.enabled")}
                  control={
                    <Checkbox
                      name="enabled"
                      checked={site.input2.enabled}
                      onChange={handleInput2Change}
                    />
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <InputLabel id="label">{t("editSite.type")}</InputLabel>
                <Select
                  labelId="label"
                  name="type"
                  value={site.input2.type}
                  onChange={handleInput2Change}
                >
                  <MenuItem value={0}>NO</MenuItem>
                  <MenuItem value={1}>NC</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="name"
                  value={site.input2.name}
                  label={t("common.name")}
                  onChange={handleInput2Change}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="timer"
                  type="number"
                  value={site.input2.timer}
                  label={t("editSite.timer")}
                  onChange={handleInput2Change}
                />
              </Grid>
            </Grid>
            {/* Output 1 */}
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={1}>
                <FormLabel>{t("editSite.output1")}</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  label={t("common.enabled")}
                  control={
                    <Checkbox
                      name="enabled"
                      checked={site.output1.enabled}
                      onChange={handleOutput1Change}
                    />
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <InputLabel id="label">{t("editSite.type")}</InputLabel>
                <Select
                  labelId="label"
                  name="type"
                  value={site.output1.type}
                  onChange={handleOutput1Change}
                >
                  <MenuItem value={0}>NO</MenuItem>
                  <MenuItem value={1}>NC</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="name"
                  value={site.output1.name}
                  label={t("common.name")}
                  onChange={handleInput1Change}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="autoReset"
                  type="number"
                  value={site.output1.autoReset}
                  label={t("editSite.autoReset")}
                  onChange={handleInput1Change}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="label">{t("editSite.triggers")}</InputLabel>
                  <Select
                    labelId="label"
                    width="80px"
                    my={5}
                    multiple
                    name="output1"
                    value={site.output1.triggers}
                    renderValue={(value) =>
                      value
                        .sort()
                        .map(
                          (v, index) =>
                            t("editSite." + triggerTypes[v].title) +
                            (index < value.length - 1 ? ", " : "")
                        )
                    }
                    onChange={handleTriggerChange}
                    input={<Input />}
                  >
                    {triggerTypes.map((type, index) => (
                      <MenuItem key={type.value} value={type.value}>
                        <Checkbox
                          checked={
                            site.output1.triggers.indexOf(type.value) >= 0
                          }
                        />
                        <ListItemText primary={type.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* Output 2 */}
            <Grid
              container
              item
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={1}>
                <FormLabel>{t("editSite.output2")}</FormLabel>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  label={t("common.enabled")}
                  control={
                    <Checkbox
                      name="enabled"
                      checked={site.output2.enabled}
                      onChange={handleOutput2Change}
                    />
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <InputLabel id="label">{t("editSite.type")}</InputLabel>
                <Select
                  labelId="label"
                  name="type"
                  value={site.output2.type}
                  onChange={handleOutput2Change}
                >
                  <MenuItem value={0}>NO</MenuItem>
                  <MenuItem value={1}>NC</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="name"
                  value={site.output2.name}
                  label={t("common.name")}
                  onChange={handleInput2Change}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="autoReset"
                  type="number"
                  value={site.output2.autoReset}
                  label={t("editSite.autoReset")}
                  onChange={handleInput2Change}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="label">{t("editSite.triggers")}</InputLabel>
                  <Select
                    labelId="label"
                    width="80px"
                    my={5}
                    multiple
                    name="output2"
                    value={site.output2.triggers}
                    renderValue={(value) =>
                      value
                        .sort()
                        .map(
                          (v, index) =>
                            t("editSite." + triggerTypes[v].title) +
                            (index < value.length - 1 ? ", " : "")
                        )
                    }
                    onChange={handleTriggerChange}
                    input={<Input />}
                  >
                    {triggerTypes.map((type, index) => (
                      <MenuItem key={type.value} value={type.value}>
                        <Checkbox
                          checked={
                            site.output2.triggers.indexOf(type.value) >= 0
                          }
                        />
                        <ListItemText primary={type.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs>
          <Button type="submit" variant="contained" color="primary">
            {t("common.save")}
          </Button>
        </Grid>
      </Container>
    </form>
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
