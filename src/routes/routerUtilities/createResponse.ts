/**
 * Creates a standardized response object.
 *
 * This function generates a response object used to standardize the structure
 * of responses throughout the application. It includes a success flag,
 * a message, and optionally a payload containing additional data.
 *
 * @param success - A boolean indicating whether the operation was successful.
 * @param message - A string containing a message about the operation's result.
 * @param payload - An optional array containing the response payload, which can be either ProductBasicDataResponse or ProductExtraDataResponse objects.
 * @returns An object containing the success status, message, and optionally the payload.
 */
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
