import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

const conditon = role => role === ROLES.ADMIN;
const requireAdmin = requireAuthorization(conditon);

export default requireAdmin;
