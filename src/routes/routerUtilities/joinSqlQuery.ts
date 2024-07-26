/**
 * Object represents all filters that need to be appended into base sql with logic: AND(filter1 OR filter2 OR filter3...)
 */
interface toAppendSqlQuery {
  /**
   * Array of strings, that represents unique filter.
   * For example ["red", "white", "black"] will result in triple append: AND (filter.para = $7 OR filter.para = $8 OR filter.para = $9).
   * ["red", "white", "black"] will be pushed into sql parameters array.
   */
  filterArray: string[];

  /**
   * Sql query parameter string, that will be pushed into query parameter array.
   * For example ["filter1", "filter2", "filter3"] will result in triple append of 'products.color': AND (products.color = $7 OR products.color = $8 OR products.color = $9).
   */
  filterParameter: string;
}

/**
 * Joins sql query
 * @param baseSqlQuery - Sql query string that should be treated as "to be modified".
 * for example:
 * `
 *     SELECT
 *       products.*,
 *       product_stock.size,
 *       product_stock.count,
 *       product_images.image_url
 *     FROM
 *       products
 *     LEFT JOIN
 *       product_stock ON products.id = product_stock.product_id
 *     LEFT JOIN
 *       product_images ON products.id = product_images.product_id
 *       WHERE products.id IN (
 *       SELECT DISTINCT products.id
 *       FROM products
 *       LEFT JOIN product_stock ON products.id = product_stock.product_id
 *       WHERE 1=1 AND products.gender = $1 AND products.category = $2`
 * @param baseParameters - Array of sql predefined query parameters that should be treated as "to be modified". It will dictate further parameter sql index $7, $8, $9 etc.
 * for example: ["gender", "category"]
 * @param toAppendSqlArray - Array of objects that need to be appended to original sql
 * @returns
 */

interface SqlQueryInput {
  query: string;
  queryParams: string[];
}

function joinSqlQuery(
  baseSqlQuery: string,
  baseParameters: string[],
  toAppendSqlArray: toAppendSqlQuery[]
): SqlQueryInput {
  let query = baseSqlQuery;

  const queryParams = [...baseParameters];
  let paramIndex = baseParameters.length + 1;

  const joinVariants = (queryArray: string[], queryTitle: string) => {
    //FIXME - NOT PURE FUNCTION
    let subQuery = "";
    queryArray.forEach((q, i) => {
      if (i === 0) {
        subQuery += ` AND (${queryTitle} = $${paramIndex++}`;
        queryParams.push(q);
      } else {
        subQuery += ` OR ${queryTitle} = $${paramIndex++}`;
        queryParams.push(q);
      }
    });
    if (subQuery.length !== 0) {
      subQuery += ")";
    }
    query += subQuery;
  };

  toAppendSqlArray.forEach((el) => {
    joinVariants(el.filterArray, el.filterParameter);
  });

  query += ")";

  return {query, queryParams};
}

export {joinSqlQuery, SqlQueryInput};
