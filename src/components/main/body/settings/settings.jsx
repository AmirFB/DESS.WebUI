import React from "react";

export default function Settings() {
  return (
    <div>
      <div>Icons place</div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Language</td>
              <td>
                <button>English</button>
              </td>
              <td>
                <button>Farsi</button>
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
