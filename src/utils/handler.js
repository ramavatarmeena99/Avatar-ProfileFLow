import axios from "axios";
import { get, set } from "./helper";

const session_trace_id = get("session_device_id");
const isFromWebView = get("isFromWebView");

// TODO::THIS API FUNCTION WILL IN USE ALL OVER CODE :::::: TODO: ::::: IMPORTANT ::::TODO: ::::
export const api2 = (method, data, url) => {
  // axios.defaults.baseURL = process.env.REACT_APP_NODE_BASE_API_URL;
  axios.defaults.baseURL = 'https://kgdevnode.khelgully.com/'

  const Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDE2MzY0LCJ1c2VyZGF0YSI6eyJpZCI6NDE2MzY0LCJ1c2VybmFtZSI6ImNRTFkzcW9lenUiLCJpc3VzZXJ2ZXJpZnkiOjB9LCJhdXRob3J1cmkiOiJraGVsZ3VsbHkuY29tIiwiZXhwIjoxNjc4NTMzOTc4OC41OCwiaWF0IjoxNjYyOTgxOTc4fQ.g0uTRidZW1SFaj5dleuMjqIfEOnHw5OdtDVlZAfeSt4`;
  const user_id = get("user_id");

  const isLogoutFromDashboard = get("canLogout");
  if (isLogoutFromDashboard) {
    set("logout", true);
    // set('canLogout', false); FORGOT WHY I M USING
    window.location.reload();
  }

  return new Promise((resolve) => {
    axios({
      method,
      url,
      data,
      headers: {
        Authorization,
        session_trace_id,
        device: isFromWebView ? "android" : "web",
        user_id,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // agr koi backend me kuchh fatta hain to: by akshat
        resolve(err.response);
      alert(err.response.data.error.message);
        
      });
  });
};
