import { createPendingSelector } from 'modusbox-ui-components/dist/redux-fetch';

export const getMonetaryZones = state => state.monetaryZones.monetaryZones;
export const getMonetaryZonesError = state => state.monetaryZones.monetaryZonesError;
