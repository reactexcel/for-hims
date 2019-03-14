import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

const conditon = role => role === ROLES.DOCTOR;
/**Higher Order Component for authorization of only Doctor */
const requireDoctor = requireAuthorization(conditon);

export default requireDoctor;
