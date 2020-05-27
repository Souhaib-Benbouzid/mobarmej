import { createSelector } from "reselect";

const selectNav = (state) => state.nav;

export const navStateSelector = createSelector(
  [selectNav],
  (nav) => nav.isOpen
);
