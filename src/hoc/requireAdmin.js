import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

const conditon = role => role === ROLES.ADMIN;
/**Higher Order Component for authorization of only Admin */
const requireAdmin = requireAuthorization(conditon);

export default requireAdmin;
