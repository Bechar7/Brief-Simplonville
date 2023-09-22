import { createSlice } from "@reduxjs/toolkit";

export const incidentDataSlice = createSlice({
    name: "incident",
    initialState: {
        incident: [],
    },
    reducers: {
        addIncident: (state, action) => {
            const newIncident =  action.payload;
            const index = state.incident.findIndex(incident => incident === newIncident);
            if (index === -1) {
                state.incident.push(newIncident);
            }
            // state.incident.push(action.payload)
        },
        removeIncident: (state, action) => {
            state.incident = []
        },
    },
})

export default incidentDataSlice.reducer;
export const { addIncident, removeIncident } = incidentDataSlice.actions;