export default function search(object, properties, query, isCaseSensitive) {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number") {
      if (isCaseSensitive) {
        return value.toString().includes(query);
      } else {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
    }

    return false;
  });
}
