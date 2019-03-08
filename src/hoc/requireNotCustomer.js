import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

/**Higher Order Component for authorization of both Doctor and Admin */
const conditon = role => role === ROLES.ADMIN || ROLES.DOCTOR;
const requireNotCustomer = requireAuthorization(conditon);

export default requireNotCustomer;
