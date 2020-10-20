import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { Input, Switch } from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";

import * as siteActions from "../../../../redux/actions/siteActions";

import "./site.css";
const MyCustomSwitch = (props) => {
  const {
    validationMessage,
    touched,
    visited,
    modified,
    valid,
    value,
    onChange,
    ...others
  } = props;

  const onValueChange = React.useCallback(() => {
    // onChange callback expects argument with 'value' property
    onChange({ value: !value });
  }, [onChange, value]);

  return (
    <Switch
      className="switch"
      onChange={onValueChange}
      checked={value}
      id={others.id}
    />
  );
};

function SiteConfig({ siteReducer, saveSite, ...props }) {
  const [t, i18n] = useTranslation();

  const id = props.location.state.id;
  const site = siteReducer.sites.find((s) => s.id === id);

  const handleSubmit = (data) => {
    console.log(data);
    saveSite(data);
  };

  return (
    <Form
      className="site-config"
      onSubmit={handleSubmit}
      initialValues={site}
      render={(formRenderProps) => (
        <FormElement>
          <fieldset className="k-form-fieldset">
            <legend className={"k-form-legend"}>Basic Information</legend>

            <fieldset className="k-form-fieldset config-column">
              <Field
                name={"name"}
                label={t("common.name")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"siteId"}
                label={t("site.siteId")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"serialNo"}
                label={t("site.serialNo")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"phoneNumber"}
                label={t("site.phoneNumber")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
            </fieldset>
            <fieldset className="k-form-fieldset config-column">
              <div>
                <legend>Location</legend>
                <Field
                  name="autoLocation"
                  label={t("editSite.auto")}
                  component={Switch}
                  className="switch"
                />
              </div>

              <Field
                name={"latitude"}
                label={t("common.latitude")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />

              <Field
                name={"longitude"}
                label={t("common.longitude")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
            </fieldset>
          </fieldset>

          <fieldset className="k-form-fieldset">
            <legend className={"k-form-legend"}>Operational Parmeters</legend>

            <fieldset className="k-form-fieldset">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <legend>HV Protection</legend>
                <Field
                  name={"hvEnabled"}
                  label={t("editSite.hvProtection")}
                  component={MyCustomSwitch}
                  className="switch"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <legend>LV Protection</legend>
                <Field
                  name={"lvEnabled"}
                  label={t("editSite.lvProtection")}
                  component={MyCustomSwitch}
                  className="switch"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <legend>Box Tamper</legend>
                <Field
                  name={"boxTamper"}
                  label={t("editSite.boxTamper")}
                  component={Switch}
                  className="switch"
                />
              </div>
            </fieldset>

            <fieldset className="k-form-fieldset config-column">
              <Field
                name={"hvPower"}
                label={t("site.power")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"hvThreshold"}
                label={t("site.hvThreshold")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"hvRepeat"}
                label={t("site.repeat")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"interval"}
                label={t("site.interval")}
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
            </fieldset>
          </fieldset>

          <fieldset className="k-form-fieldset config-column">
            <div>
              <legend>Temperature</legend>
              <Field
                name={"tamper"}
                label={t("common.temperature")}
                component={Switch}
                onLabel={"I"}
                offLabel={"O"}
                className="switch"
              />
            </div>
            <Field
              name={"temperatureMin"}
              label={t("common.min")}
              component={Input}
              style={{ width: "150px", margin: "0px 15px" }}
            />
            <Field
              name={"temperatureMax"}
              label={t("common.max")}
              component={Input}
              style={{ width: "150px", margin: "0px 15px" }}
            />
          </fieldset>

          <fieldset className="k-form-fieldset config-column">
            <div>
              <legend>Battery</legend>
              <Field
                name={"battery"}
                label={t("editSite.battery")}
                component={Switch}
                className="switch"
              />
            </div>
            <Field
              name={"batteryMin"}
              label={t("common.min")}
              component={Input}
              style={{ width: "150px", margin: "0px 15px" }}
            />
            <Field
              name={"batteryMax"}
              label={t("common.max")}
              component={Input}
              style={{ width: "150px", margin: "0px 15px" }}
            />
          </fieldset>

          <fieldset className="k-form-fieldset">
            <legend className={"k-form-legend"}>IOs</legend>
            <div style={{ display: "flex", flexDirection: "coloumn" }}>
              <Field
                name={"input1"}
                label="name"
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"ios[0].enabled"}
                component={MyCustomSwitch}
                className="switch"
              />
              <Field
                name={"ios[0].type"}
                component={MyCustomSwitch}
                className="switch"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "coloumn" }}>
              <Field
                name={"input2"}
                label="name"
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"ios[1].enabled"}
                component={MyCustomSwitch}
                className="switch"
              />
              <Field
                name={"ios[1].type"}
                component={MyCustomSwitch}
                className="switch"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "coloumn" }}>
              <Field
                name={"output1"}
                label="name"
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"ios[2].enabled"}
                component={MyCustomSwitch}
                className="switch"
              />
              <Field
                name={"ios[2].type"}
                component={MyCustomSwitch}
                className="switch"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "coloumn" }}>
              <Field
                name={"otput2"}
                label="name"
                component={Input}
                style={{ width: "150px", margin: "0px 15px" }}
              />
              <Field
                name={"ios[3].enabled"}
                component={MyCustomSwitch}
                className="switch"
              />
              <Field
                name={"ios[3].type"}
                component={MyCustomSwitch}
                className="switch"
              />
            </div>
          </fieldset>
          <button>submit</button>
        </FormElement>
      )}
    />
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
