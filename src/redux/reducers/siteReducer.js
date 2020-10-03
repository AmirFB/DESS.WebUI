export default function siteReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SITE":
      return [...state, { ...action.site }];

    default:
      return state;
  }
}
