export const normalizeLocation = (location) => {
  return location ? location.split(",")[0].trim() : "";
};

export const formatQueryParams = (filters) => {
  const queryParams = [];

  if (filters.location) {
    queryParams.push(`location=${normalizeLocation(filters.location)}`);
  }

  filters.features?.forEach((feature) => {
    queryParams.push(`${feature}=${true}`);
  });

  if (filters.form) {
    queryParams.push(`form=${filters.form}`);
  }

  return queryParams.join("&");
};
