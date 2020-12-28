import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { useTranslation } from "react-i18next";

function SiteGroupConfig({ siteReducer, ...props }) {
  const [t, i18n] = useTranslation();
  const a = siteReducer.groups.find((id) => id.id == props.location.state.id);
  a.siteIds = 1;

  console.log(a);

  return (
    <Grid container direction="column">
      <Grid container>
        <Grid item>
          <TextField
            name="name"
            value={a.name}
            label={t("users.groupName")}
            //onChange={handleChange}
          />
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <TextField
            name="province"
            value={a.province}
            label={t("site.provinceName")}
            //onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <TextField
            name="siteIds"
            value={a.siteIds}
            label="siteIds"
            //onChange={handleChange}
          />
          <Select
            name="siteIds"
            style={{ margin: "10px 0px", width: 100 }}
            value={a.siteIds}
            //nChange={handleChange}
          >
            {a.siteIds.map((group) => (
              <MenuItem value={group}></MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <TextField
            name="userIds"
            value={a.userIds}
            label="userIds"
            //onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
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
