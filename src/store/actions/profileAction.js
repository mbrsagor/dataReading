import Axios from "axios";
import { BASE_URL } from '../../urls';
import * as Types from "./types";

export const activeUser = () => (dispatch) => {
  Axios.get(`${BASE_URL}/user/current-user`)
    .then((res) => {
        console.log(res);
        dispatch({
            type: Types.ACTIVE_USER,
            payload: {}
        })
    })
    .catch((error) => {
      console.log(error);
    });
};
