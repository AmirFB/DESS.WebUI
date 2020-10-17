import React from "react";
import PropType from "prop-types";

import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";
import { Button } from "@progress/kendo-react-buttons";
import { useHistory } from "react-router-dom";

import "./site.css";

export default function SiteGrid(props) {
  const [t, i18n] = useTranslation();
  const history = useHistory();

  function handleEdit(siteData) {
    history.push({
      pathname: "/siteList/siteEdit/" + siteData,
      state: { id: siteData },
    });
  }

  return (
    <Grid className="list-grid" data={props.sites} resizable>
      <Column field="name" title={t("common.name")} width="80" locked />
      <Column field="siteId" title={t("site.siteId")} width="90" locked />
      <Column field="serialNo" title={t("site.serialNo")} width="80" />
      <Column field="phoneNumber" title={t("site.phoneNumber")} width="80" />
      <Column field="ipAddress" title="IP" width="130" />
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
              {props.dataItem.input1.enabled ? "On" : "Off"}
            </span>
            &nbsp;|&nbsp;{" "}
            <span className="io-span">
              {props.dataItem.input2.enabled ? "On" : "Off"}
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
              {props.dataItem.output1.enabled ? "On" : "Off"}
            </span>
            &nbsp;|&nbsp;{" "}
            <span className="io-span">
              {props.dataItem.output2.enabled ? "On" : "Off"}
            </span>
          </td>
        )}
      />

      <Column
        title={t("common.actions")}
        width="100"
        locked
        locked
        cell={(props) => (
          <td className={props.className} style={props.style}>
            <Button
              className="action-button"
              primary
              look="flat"
              icon="delete"
            />
            <Button
              className="action-button"
              primary
              look="flat"
              icon="edit"
              onClick={() => {
                handleEdit(props.dataItem.id);
              }}
            />
          </td>
        )}
      />
    </Grid>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
};
