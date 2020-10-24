export const statusType = {
  Clear: 0,
  Warning: 1,
  Fault: 2,
  Null: 3,
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

export function getState(site) {
  if (
    !site.status ||
    !site.status.state ||
    site.status.state == statusType.Null
  )
    return statusType.Null;
  return site.status.state;
}
