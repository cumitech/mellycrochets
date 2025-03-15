"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";
import { BASE_URL } from "../../constants/api-url";
// import { TOKEN_KEY, USER_DATA } from "../../constants/constant";

export const dataProvider = dataProviderSimpleRest(BASE_URL);
