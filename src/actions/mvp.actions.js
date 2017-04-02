//action types
export const REQUEST_PROVIDER_CHANGE = "REQUEST_PROVIDER_CHANGE";
export const CHANGE_PROVIDER = "CHANGE_PROVIDER";
export const CONNECT_TO_PROVIDER = "CONNECT_TO_PROVIDER";

//actions generators
export const requestProviderChange = provider => ({ type: REQUEST_PROVIDER_CHANGE, payload: provider });

export const changeProvider = provider => ({ type: CHANGE_PROVIDER, payload: provider });

export const connectToProvider = provider => ({ type: CONNECT_TO_PROVIDER, provider });

