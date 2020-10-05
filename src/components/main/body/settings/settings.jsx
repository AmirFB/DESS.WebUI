import React from "react";
import { useTranslation } from "react-i18next";

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
              <td>Interval</td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td>Username</td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td>Change password</td>
              <td>
                <input type="text" /> current
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="text" /> new
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="text" /> new
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
