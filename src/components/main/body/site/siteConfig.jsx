import React from "react";
import { useTranslation } from "react-i18next";
import { Input, Switch, Checkbox } from "@progress/kendo-react-inputs";
import "./site.css";

export default function SiteConfig() {
  const [t, i18n] = useTranslation();

  return (
    <div className="site-config">
      <table>
        <tbody>
          <tr>
            <td>{t("common.name")}</td>
            <td>
              <Input
                name="name"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("common.number")}</td>
            <td>
              <Input
                name="number"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.siteId")}</td>
            <td>
              <Input
                name="siteId"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.serialNo")}</td>
            <td>
              <Input
                name="serialNumber"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.phoneNumber")}</td>
            <td>
              <Input
                name="phoneNumber"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("common.location")}</td>
            <td>
              <Input
                name="location"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Checkbox label={t("editSite.auto")} />
            </td>
            <td>
              <Input
                name="latitude"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Input
                name="longitude"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("editSite.hvProtection")}</td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td>{t("editSite.lvProtection")}</td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td>{t("editSite.boxTamper")}</td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td>{t("site.power")}</td>
            <td>
              <Input
                name="power"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.alarmLevel")}</td>
            <td>
              <Input
                name="alarmLevel"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Checkbox label={t("common.temperature")} />
            </td>
            <td>
              <Checkbox label={t("editSite.battery")} />
            </td>
          </tr>

          <tr>
            <td>{t("site.repeat")}</td>
            <td>
              <Input
                name="repeat"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.dataInterval")}</td>
            <td>
              <Input
                name="dataInterval"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
          </tr>

          <tr>
            <td>{t("site.input")}</td>
            <td>
              <Input
                name="input1"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Switch />
            </td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <Input
                name="input2"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Switch />
            </td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td>{t("site.output")}</td>
            <td>
              <Input
                name="output1"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Switch />
            </td>
            <td>
              <Switch />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <Input
                name="output2"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
              />
            </td>
            <td>
              <Switch />
            </td>
            <td>
              <Switch />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
