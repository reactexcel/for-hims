import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

const conditon = role => role === ROLES.ADMIN || ROLES.DOCTOR;
/**Higher Order Component for authorization of both Doctor and Admin */
const requireNotCustomer = requireAuthorization(conditon);

export default requireNotCustomer;
