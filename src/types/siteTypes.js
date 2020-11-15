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

export function getState(site) {
  if ((!site.status || !site.status.state) && site.status.state !== 0)
    return statusType.Null;
  return site.status.state;
}
