import React from "react";

const AppContext = React.createContext({ IsLoggedIn: false, user: {} });

export default AppContext;
