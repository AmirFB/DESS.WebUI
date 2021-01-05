import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Label } from "@progress/kendo-react-labels";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SiteGroupConfig({ siteReducer, ...props }) {
  const [t, i18n] = useTranslation();
  const groupData = siteReducer.groups.find(
    (id) => id.id == props.location.state.id
  );
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "right";

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/siteGroups/",
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid container>
          <Grid item>
            <TextField
              name="name"
              value={groupData.name}
              label={t("users.groupName")}
              //onChange={handleChange}
            />
          </Grid>
          <Grid item style={{ marginLeft: "50px" }}>
            <TextField
              name="province"
              value={groupData.province}
              label={t("site.provinceName")}
              //onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Label>Sites :&nbsp;</Label>
            <Label>{groupData.siteIds}</Label>
          </Grid>
          <Grid item style={{ marginLeft: "50px" }}>
            {" "}
            <Label>Users :&nbsp;</Label>
            <Label>{groupData.userIds}</Label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              {t("common.save")}
            </Button>

            <Button
              variant="contained"
              style={{ margin: "5px 30px" }}
              onClick={() => {
                history.push({
                  pathname: "/siteGroups/",
                });
              }}
            >
              {t("common.cancel")}
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical, horizontal }}
            >
              <Alert onClose={handleClose} severity="error">
                {t("error.saveError")}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

SiteGroupConfig.propTypes = {
  siteReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SiteGroupConfig);
