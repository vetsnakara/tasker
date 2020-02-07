import axios from "axios";

const API_BASE_URL = "http://localhost:3333";

export const CALL_API = "CALL_API";

const makeCall = ({ endpoint, method = "GET", body }) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const params = {
    method,
    url,
    data: body,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return axios(params);
};

const apiMiddleware = store => next => action => {
  const callApi = action[CALL_API];

  if (callApi === undefined) {
    return next(action);
  }

  const [
    requestStartedType,
    requestSucceededType,
    requestFailedType
  ] = callApi.types;

  next({ type: requestStartedType });

  makeCall(callApi)
    .then(response =>
      next({ type: requestSucceededType, payload: response.data })
    )
    .catch(error => next({ type: requestFailedType, error: error.message }));
};

export default apiMiddleware;
