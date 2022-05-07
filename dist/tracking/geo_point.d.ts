/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Types } from "mongoose";
export declare class IGeoPoint {
    _id?: Types.ObjectId;
    latitude_deg?: number;
    longitute_deg?: number;
    altitude_deg?: number;
}
export declare const GeoPointModel: import("mongoose").Model<IGeoPoint, {}, {}, {}>;
