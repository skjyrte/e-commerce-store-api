const createQueryArray = (queryToDivide: unknown) => {
  if (typeof queryToDivide === "string") {
    const queryArray: string[] = [];
    queryToDivide.split(".").forEach((q) => {
      if (q !== "") {
        queryArray.push(q);
      }
    });
    return [...queryArray];
  } else return [];
};
export default createQueryArray;
