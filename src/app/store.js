import { configureStore } from "@reduxjs/toolkit";
import incidentDataReducer from "../feature/incidentDataSlice";

export default configureStore ({
    reducer: {
        incidentData: incidentDataReducer,
    },
})