import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";

export default function SiteConfig() {
  return (
    <>
      <div>Icons place</div>
      <table>
        <tbody>
          <tr>
            <td>Number</td>
            <td>
              <Input
                name="number"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
                required
              />
            </td>
          </tr>

          <tr>
            <td>Side ID</td>
            <td>
              <Input
                name="siteId"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
                required
              />
            </td>
          </tr>

          <tr>
            <td>Serial Number</td>
            <td>
              <Input
                name="serialNumber"
                style={{ width: "100%" }}
                pattern={"[A-Za-z0-9]+"}
                minLength={2}
                required
              />
            </td>
          </tr>

          <tr>
            <td>Phone Number</td>
            <td>
              <Input
                name="phoneNumber"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
                required
              />
            </td>
          </tr>

          <tr>
            <td>Location</td>
            <td>
              <Input
                name="location"
                style={{ width: "100%" }}
                pattern={"[0-9]+"}
                minLength={2}
                required
              />
            </td>
            <td>
              <Checkbox label={"Auto"} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
