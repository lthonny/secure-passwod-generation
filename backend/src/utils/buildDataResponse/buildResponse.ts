const buildResponse = <T>(statusCode: number, message: string, result: T) => ({
    message,
    statusCode,
    result,
  });
  export const successResponce = <T>(result: T) => buildResponse(200, "Success", result);
  export default buildResponse;
  