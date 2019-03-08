import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

/**Higher Order Component for authorization of only Admin */
const conditon = role => role === ROLES.ADMIN;
const requireAdmin = requireAuthorization(conditon);

export default requireAdmin;
