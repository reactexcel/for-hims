import requireAuthorization from "./requireAuthorization";
import * as ROLES from "../constants/roles";

const conditon = role => role === ROLES.DOCTOR;
const requireDoctor = requireAuthorization(conditon);

export default requireDoctor;
