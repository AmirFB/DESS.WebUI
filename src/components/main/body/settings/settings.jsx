import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";

export default function Settings() {
  const [t, i18n] = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div>Icons place</div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Language</td>
              <td>
                <button onClick={() => changeLanguage("en")}>English</button>
              </td>
              <td>
                <button onClick={() => changeLanguage("fa")}>Farsi</button>
              </td>
            </tr>

            <tr>
              <td>
                <Label>Interval</Label>
              </td>
              <td>
                <Input
                  name="Interval"
                  style={{ width: "100%" }}
                  pattern={"[A-Za-z]+"}
                  minLength={2}
                  required={true}
                />
              </td>
            </tr>

            <tr>
              <td>
                <Label>Username</Label>
              </td>
              <td>
                <Input
                  name="Username"
                  style={{ width: "100%" }}
                  pattern={"[A-Za-z]+"}
                  minLength={2}
                  required={true}
                />
              </td>
            </tr>

            <tr>
              <td>
                <Label>Change Password</Label>
              </td>
              <td>
                <Input
                  name="CurrentPass"
                  style={{ width: "100%" }}
                  pattern={"[A-Za-z]+"}
                  minLength={2}
                  required={true}
                />{" "}
                <Label>current</Label>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <Input
                  name="NewPass1"
                  style={{ width: "100%" }}
                  pattern={"[A-Za-z]+"}
                  minLength={4}
                  required={true}
                />{" "}
                <Label>new</Label>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <Input
                  name="NewPass2"
                  style={{ width: "100%" }}
                  pattern={"[A-Za-z]+"}
                  minLength={4}
                  required={true}
                />{" "}
                <Label>new</Label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
