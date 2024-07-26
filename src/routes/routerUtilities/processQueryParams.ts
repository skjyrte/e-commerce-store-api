interface QueryParams {
  material: string | undefined;
  season: string | undefined;
}

interface queryDataObject {
  materialsArray: string[];
  seasonsArray: string[];
}

const parseQueryParam = (param: string | undefined) => {
  return param ? param.split(".") : [];
};

/**
 * Processes the query parameters for material and season filters, converting them from
 * a dot-separated string format into arrays of strings.
 *
 * @param {QueryParams} params - An object containing the query parameters:
 *   - `material`: A dot-separated string or undefined.
 *   - `season`: A dot-separated string or undefined.
 * @returns {QueryDataObject} An object containing the processed query parameters:
 *   - `materialsArray`: An array of strings derived from the `material` query parameter.
 *   - `seasonsArray`: An array of strings derived from the `season` query parameter.
 *
 * @example
 * ```typescript
 * const params: QueryParams = { material: 'leather.canvas', season: 'winter.spring' };
 * const result = processQueryParams(params);
 * console.log(result);
 * // Output: { materialsArray: ['leather', 'canvas'], seasonsArray: ['winter', 'spring'] }
 * ```
 */
function processQueryParams(params: QueryParams): queryDataObject {
  return {
    materialsArray: parseQueryParam(params.material),
    seasonsArray: parseQueryParam(params.season),
  };
}

export default processQueryParams;
