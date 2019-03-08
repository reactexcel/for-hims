import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

/**Higher Order Component for authorization of only Doctor */
const conditon = role => role === ROLES.DOCTOR;
const requireDoctor = requireAuthorization(conditon);

export default requireDoctor;
