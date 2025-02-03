export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectCamperById = (state) => state.campers.currentCamper;
export const selectIsError = (state) => state.campers.isError;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsErrorMessage = (state) => state.campers.errorMessage;
export const selectPage = (state) => state.campers.page;
