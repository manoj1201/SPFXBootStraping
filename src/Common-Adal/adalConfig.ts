import { AuthenticationContext } from "react-adal";
import { CONSTANTS } from "../Common-Constants/constants";
export const adalConfig = {
  clientId: "",
  tenant: "",
  endpoints: {
    addContentPage: "" + "/api/Admin",
  },

  cacheLocation: "localStorage",
};

export const authContext = new AuthenticationContext(adalConfig);
