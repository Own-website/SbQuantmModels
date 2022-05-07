import { Schema, model } from "mongoose";
export class IGeoPoint {
    _id;
    latitude_deg;
    longitute_deg;
    altitude_deg;
}
const GeoPointSchema = new Schema({
    latitude_deg: {
        type: Number
    },
    longitute_deg: {
        type: Number
    },
    altitude_deg: {
        type: Number
    },
}, { timestamps: true });
export const GeoPointModel = model('geopoint', GeoPointSchema);
//# sourceMappingURL=geo_point.js.map