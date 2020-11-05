import React, { useState } from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import * as siteActions from "../../../../redux/actions/siteActions";

import "./site.css";

function SiteGrid({ removeSite, ...props }) {
  const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  function handleEdit(siteData) {
    history.push({
      pathname: "/siteList/siteEdit/" + siteData,
      state: { id: siteData },
    });
  }

  function handleDelete() {
    setOpen(true);
  }

  function handleAccept(siteId) {
    removeSite(siteId);
    setOpen(false);
  }

  function handleDecline() {
    setOpen(false);
  }

  return (
    <Grid className="list-grid" data={props.sites} resizable>
      <Column field="name" title={t("common.name")} width="70" locked />
      <Column field="siteId" title={t("site.siteId")} width="70" locked />
      <Column field="serialNo" title={t("site.serialNo")} width="100" />
      <Column field="phoneNumber" title={t("site.phoneNumber")} width="100" />
      <Column
        field="ipAddress"
        title="IP"
        width="130"
        cell={(props) => <td>{props.dataItem.status.ipAddress}</td>}
      />
      <Column field="interval" title={t("site.interval")} width="50" />
      <Column
        title={t("common.location")}
        width="160"
        cell={(props) => (
          <td>
            <span className="location-span">
              {parseFloat(props.dataItem.latitude).toFixed(4)}
            </span>
            &nbsp;,&nbsp;{" "}
            <span className="location-span">
              {parseFloat(props.dataItem.longitude).toFixed(4)}
            </span>
          </td>
        )}
      ></Column>
      <Column
        title="HV"
        width="30"
        cell={(props) => <td>{props.dataItem.hvEnabled ? "On" : "Off"}</td>}
      />
      <Column
        title="LV"
        width="30"
        cell={(props) => <td>{props.dataItem.lvEnabled ? "On" : "Off"}</td>}
      />
      <Column
        title={t("site.input")}
        width="100"
        cell={(props) => (
          <td>
            <span className="io-span">
              {props.dataItem.inputs[0].enabled ? "On" : "Off"}
            </span>
            &nbsp;|&nbsp;{" "}
            <span className="io-span">
              {props.dataItem.inputs[1].enabled ? "On" : "Off"}
            </span>
          </td>
        )}
      />
      <Column
        title={t("site.output")}
        width="100"
        cell={(props) => (
          <td>
            <span className="io-span">
              {props.dataItem.outputs[0].enabled ? "On" : "Off"}
            </span>
            &nbsp;|&nbsp;{" "}
            <span className="io-span">
              {props.dataItem.outputs[1].enabled ? "On" : "Off"}
            </span>
          </td>
        )}
      />

      {props.permission && (
        <Column
          title={t("common.actions")}
          width="125"
          locked
          locked
          cell={(props) => (
            <td className={props.className} style={props.style}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  aria-label="addSite"
                  size="medium"
                  color="primary"
                  onClick={() => {
                    handleEdit(props.dataItem.id);
                  }}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>

                <>
                  <IconButton
                    aria-label="removeSite"
                    size="medium"
                    style={{ color: red[500] }}
                    onClick={handleDelete}
                  >
                    <DeleteForeverIcon fontSize="inherit" />
                  </IconButton>

                  <Dialog
                    open={open}
                    onClose={handleDecline}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {t("dialog.title")}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        {t("dialog.message")}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button color="primary" onClick={handleDecline}>
                        {t("dialog.disagree")}
                      </Button>
                      <Button
                        onClick={() => {
                          handleAccept(props.dataItem.id);
                        }}
                        color="primary"
                        autoFocus
                      >
                        {t("dialog.agree")}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              </div>
            </td>
          )}
        />
      )}
    </Grid>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
  removeSite: PropType.array.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  removeSite: siteActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteGrid);
