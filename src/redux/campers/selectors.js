export const selectCampers = (state) => state.campers.items.items;
export const selectTotal = (state) => state.campers.items.total;
export const selectCamperById = (state) => state.campers.currentCamper;
export const selectIsError = (state) => state.campers.isError;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsErrorMessage = (state) => state.campers.errorMessage;
