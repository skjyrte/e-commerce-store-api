function createResponse(
  success: boolean,
  message: string,
  payload?: ProductBasicDataResponse[] | ProductExtraDataResponse[]
) {
  if (payload === undefined) {
    return {success: success, message: message};
  } else {
    return {success: success, message: message, payload: payload};
  }
}
export default createResponse;
