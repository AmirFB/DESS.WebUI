import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { Input, Switch, Checkbox } from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";

import * as siteActions from "../../../../redux/actions/siteActions";

import "./site.css";

export default function SiteConfig({ siteReducer, getSites, ...props }) {
  const [t, i18n] = useTranslation();

  const id = props.location.state.id;

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      className="site-config"
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <fieldset className="k-form-fieldset config-column">
            <legend className={"k-form-legend"}>Basic Information</legend>
            <Field
              name={"name"}
              label="Name"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"siteId"}
              label="Site ID"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"serialNo"}
              label="Serial Number"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"phoneNo"}
              label="Phone Number"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"location"}
              label="Location"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
          </fieldset>

          <fieldset className="k-form-fieldset config-column">
            <legend>Operational Parmeters</legend>
            <Field
              name={"hvProtection"}
              label="HV Protection"
              component={Switch}
            />
            <Field
              name={"lvProtection"}
              label="LV Protection"
              component={Switch}
            />
            <Field name={"boxTamper"} label="Box Tamper" component={Switch} />
            <Field
              name={"power"}
              label="Power"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"voltage"}
              label="Voltage"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"tamper"} label="Tamper" component={Checkbox} />
            <Field
              name={"tamperMin"}
              label="min"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"tamperMax"}
              label="max"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"battery"} label="Battery" component={Checkbox} />
            <Field
              name={"batteryMin"}
              label="min"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"batteryMax"}
              label="max"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"repeat"}
              label="Repeat"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field
              name={"dataInterval"}
              label="Data Interval"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
          </fieldset>

          <fieldset className="k-form-fieldset config-column">
            <legend>IOs</legend>
            <Field
              name={"input1"}
              label="Input 1"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"ios[0].enabled"} component={Switch} />
            <Field name={"ios[1].enabled"} component={Switch} />

            <Field
              name={"input2"}
              label="Input 2"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"ios[2].enabled"} component={Switch} />
            <Field name={"ios[3].enabled"} component={Switch} />

            <Field
              name={"output1"}
              label="Output 1"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"ios[4].enabled"} component={Switch} />
            <Field name={"ios[5].enabled"} component={Switch} />

            <Field
              name={"otput2"}
              label="Output 2"
              component={Input}
              style={{ width: "150px", margin: "15px" }}
            />
            <Field name={"ios[6].enabled"} component={Switch} />
            <Field name={"ios[7].enabled"} component={Switch} />
          </fieldset>
          <button>submit</button>
        </FormElement>
      )}
    />
  );
}
{
  /* <div className="config-column">
         {t("common.name")} <button></button>
       </div>
       <div className="config-column">
         {t("common.number")} <button></button>
       </div>
       <div className="config-column">
         {t("site.siteId")} <button></button>
       </div>
       <div className="config-column">
         {t("site.serialNo")} <button></button>
       </div>
       <div className="config-column">
         {t("site.phoneNumber")} <button></button>
       </div>
       <div className="config-column">
         {t("common.location")} <button></button>
       </div>
       <div className="config-column">
         {t("editSite.hvProtection")} <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div>
       <div className="config-column">
         <button></button> <button></button>
       </div> */
}

// SiteConfig.propTypes = {
//   siteReducer: PropTypes.object.isRequired,
//   getSites: PropTypes.func.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     siteReducer: state.siteReducer,
//   };
// }

// const mapDispatchToProps = {
//   saveSite: siteActions.save,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SiteConfig);
