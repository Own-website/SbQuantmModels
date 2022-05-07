import { GeojsonCordinateType, IGeometry } from './geometry';
declare type GeoJSONType = 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection' | 'Feature' | 'FeatureCollection';
export interface IGeoJSON<P extends GeojsonCordinateType> {
    type: GeoJSONType;
    geometry: IGeometry<P>;
}
export {};
