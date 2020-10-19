import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SiteCatalogBody({ site, ...props }) {
  const [t, i18n] = useTranslation();

  const statusText = (state) =>
    state ? (
      <span style={{ color: "red" }}>{t("catalog.fault")}</span>
    ) : (
      <span style={{ color: "green" }}>{t("catalog.ok")}</span>
    );

  return (
    <Container className="site-catalog-body">
      <Row>
        <Col>
          HV:&nbsp;
          {statusText(site.status.hvAlarm)}
        </Col>
        <Col>
          LV:&nbsp;
          {statusText(site.status.lvAlarm)}
        </Col>
        <Col>
          Tamper:&nbsp;
          {statusText(site.status.tamperAlarm)}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {t("catalog.power")}:&nbsp;
          <span style={{ color: "blue" }}>{site.hvPower}%</span>
        </Col>
        <Col>
          {t("catalog.voltage")}:&nbsp;
          <span style={{ color: "blue" }}>{site.status.hvVoltage}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          {t("catalog.mainPower")}:&nbsp;
          {statusText(site.status.mainPowerFault)}
        </Col>
        <Col>
          {t("catalog.hvCharge")}:&nbsp;{statusText(site.status.hvChargeFault)}
        </Col>
      </Row>
      <Row>
        <Col>
          {t("catalog.hvPower")}:&nbsp;{statusText(site.status.hvPowerFault)}
        </Col>
        <Col>
          {t("catalog.hvDischarge")}:&nbsp;
          {statusText(site.status.hvDischargeFault)}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {t("catalog.power")}:&nbsp;
          <span style={{ color: "blue" }}>{site.hvPower}%</span>
        </Col>
        <Col>
          {t("catalog.voltage")}:&nbsp;
          <span style={{ color: "blue" }}>{site.status.hvVoltage}</span>
        </Col>
      </Row>
    </Container>
  );
}
