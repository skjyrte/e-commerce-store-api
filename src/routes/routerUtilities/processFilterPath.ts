interface filterDataObject {
  brandsArray: string[];
  colorsArray: string[];
  sizesArray: string[];
}

interface filterPath {
  path: string | null;
}

const validateVariants = (filterPath: string): filterPath => {
  //NOTE - Validation contains only basic cases.
  //TODO - Data passed into brand, color, size arrays should be validated in recieving function.
  try {
    const path = filterPath === "" ? null : filterPath;

    if ((filterPath.match(/__size-/g) || []).length) {
      if ((filterPath.match(/__size-/g) || []).length > 1) {
        throw new Error(
          "Invalid input: Contains more than one '__size-' delimiter."
        );
      } else if ((filterPath.match(/_/g) || []).length > 3) {
        throw new Error("Invalid input: Contains more than one '_' delimiter.");
      }
    } else {
      if ((filterPath.match(/_/g) || []).length > 1) {
        throw new Error("Invalid input: Contains more than one '_' delimiter.");
      }
    }

    if (/\.\.+/.test(filterPath)) {
      throw new Error("Invalid input: Contains consecutive dots.");
    }
    return {
      path: path,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    return {path: null};
  }
};

const processPath = (path: string) => {
  const brandsRegex = /^(.*?)(?:_|$)/;
  const colorsRegex = /_([^_]+?)(?:__size|$)/;
  const sizesRegex = /__size[-]?(.+)/;

  const brandsMatch = path.match(brandsRegex);
  const colorsMatch = path.match(colorsRegex);
  const sizesMatch = path.match(sizesRegex);

  //NOTE - aray[0] is the entire matched string.
  //NOTE - array[1], array[2], ..., array[n] are the matched strings from the corresponding capturing groups.
  const brands = brandsMatch ? brandsMatch[1].split(".").filter(Boolean) : [];
  const colors = colorsMatch ? colorsMatch[1].split(".").filter(Boolean) : [];
  const sizes = sizesMatch ? sizesMatch[1].split(".").filter(Boolean) : [];

  return {
    brandsArray: brands,
    colorsArray: colors,
    sizesArray: sizes,
  };
};

/**
 * Processes variants from a query string.
 *
 * This function takes a query string parameter `variants` with the syntax
 * "brand1.brand2.brand3_color1.color2.color3__size-size1.size2.size3" and processes it accordingly.
 * There is no limitation on number of filters applied, the filters can be used in conjunction or separately.
 *
 * @param {string} filterPath - The query string containing the variants.
 * @returns {any} - The processed result (you can replace 'any' with the actual return type).
 */

/* interface ExpectedQuery {
  material?: string;
  season?: string;
} */

function processFilterPath(
  filterPath: string
  /*   expectedQuery: string */
): filterDataObject | null {
  try {
    //TODO - query processing
    const {path} = validateVariants(filterPath);

    if (path !== null) return processPath(path);
    else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default processFilterPath;
