import { IDevice } from './device';
export declare const enum EPlatformCategory {
    BACKPACK = "BACKPACK",
    ROVER = "ROVER",
    TROLLY = "TROLLY"
}
export interface IPlatform {
    platform_id: string;
    devices: IDevice[];
    category?: EPlatformCategory;
}
