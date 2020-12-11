export const statusType = {
  Null: 0,
  Clear: 1,
  Warning: 2,
  Fault: 3,
};

export const ioType = {
  NO: 0,
  NC: 1,
};

export const batteryStatusType = {
  Full: 0,
  InUse: 1,
  Charging: 2,
  Low: 3,
  Fault: 4,
};

export const triggerTypes = [
  {
    title: "Fault",
    value: 0,
  },
  {
    title: "Input1",
    value: 1,
  },
  {
    title: "Input2",
    value: 2,
  },
  {
    title: "Power",
    value: 3,
  },
];

export const faultType = {
  Input1: 0,
  Input2: 1,
  Hv: 2,
  Lv: 3,
  Tamper: 4,
  Power: 5,
};

export const filterFaultType = [
  { label: "Input1", value: 0 },
  { label: "Input2", value: 1 },
  { label: "Hv", value: 2 },
  { label: "Lv", value: 3 },
  { label: "Tamper", value: 4 },
  { label: "Power", value: 5 },
];

export const reportType = {
  NotObviated: 0,
  Obviated: 1,
  NotReseted: 2,
  Reseted: 3,
  All: 4,
};

export const filterReportType = [
  { label: "NotObviated", value: 0 },
  { label: "Obviated", value: 1 },
  { label: "NotReseted", value: 2 },
  { label: "Reseted", value: 3 },
  { label: "All", value: 4 },
];

export function getState(site) {
  if ((!site.status || !site.status.state) && site.status.state !== 0)
    return statusType.Null;
  return site.status.state;
}
