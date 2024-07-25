interface QueryParams {
  material: string | undefined;
  season: string | undefined;
}

interface queryDataObject {
  materialsArray: string[];
  seasonsArray: string[];
}

function processQueryParams(params: QueryParams): queryDataObject {
  const parseQueryParam = (param: string | undefined) => {
    return param ? param.split(".") : [];
  };
  return {
    materialsArray: parseQueryParam(params.material),
    seasonsArray: parseQueryParam(params.season),
  };
}

export {processQueryParams};
