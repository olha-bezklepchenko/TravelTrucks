import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectCamperById = (state) => state.campers.currentCamper;
export const selectIsError = (state) => state.campers.isError;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsErrorMessage = (state) => state.campers.errorMessage;

export const selectAvailableLocations = createSelector(
  [selectCampers],
  (campers) => {
    const uniqueLocations = new Set(campers.map((camper) => camper.location));
    return Array.from(uniqueLocations);
  }
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (contacts, filter) => {
    return contacts
      .filter(
        (camper) =>
          camper.location.includes(filter) || camper.form.includes(filter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
