import { createSelector } from "reselect";

const featuresSelector = (state) => state.featuresReducer.features_data;

export const featuresSelectorAsArray = createSelector(
  [featuresSelector],
  (features) => Object.keys(features).map((key) => features[key])
);
