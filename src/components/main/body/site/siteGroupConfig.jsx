import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Label } from "@progress/kendo-react-labels";

import { useTranslation } from "react-i18next";

function SiteGroupConfig({ siteReducer, ...props }) {
  const [t, i18n] = useTranslation();
  const groupData = siteReducer.groups.find(
    (id) => id.id == props.location.state.id
  );

  return (
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
