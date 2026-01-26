import {
    Map,
    MapGeoJSON,
    MapMarker,
    MapPopup,
    MapTileLayer,
    MapZoomControl,
    MapLayers,
    MapLayersControl,
    MapLayerGroup,
} from "@/components/ui/map";
import json_Kommuner1947_WGS84_1 from "../../public/data/kommuner-1947.json";
import json_Kommuner2019_forenklet_2_2 from "../../public/data/kommuner-2019.json";
import json_Kommuner2020_forenklet_2_3 from "../../public/data/kommuner-2020.json";
import { GeoJsonObject } from "geojson";

export default function KommuneMap() {
    return (
        <Map center={[43.6532, -79.3832]} className="h-[80vh] my-10">
            <MapLayers
                defaultTileLayer="National Geographic"
                defaultLayerGroups={[
                    "Kommuner 1947",
                    "Kommuner 2019",
                    "Kommuner 2020",
                ]}>
                <MapLayersControl />
                <MapTileLayer />
                <MapTileLayer
                    name="National Geographic"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
                />
                <MapTileLayer
                    name="Satellite"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                />
                <MapLayerGroup name="Kommuner 1947">
                    <MapGeoJSON
                        attribution="&copy; credits due..."
                        data={json_Kommuner1947_WGS84_1 as GeoJsonObject}
                        fitBounds
                        selectable
                        popupTitleField="Kommune"
                        popupFields={["Fylke", "KNR", "Opprettet", "Opphør"]}
                        style={{
                            color: "#2563eb",
                            weight: 2,
                            fillColor: "#60a5fa",
                            fillOpacity: 0.25,
                        }}
                        pathOptions={{
                            color: "#2563eb",
                            weight: 2,
                            fillColor: "#60a5fa",
                            fillOpacity: 0.25,
                        }}
                        defaultStyle={{
                            color: "#2563eb",
                            weight: 2,
                            fillColor: "#60a5fa",
                            fillOpacity: 0.25,
                        }}
                        selectedStyle={{
                            color: "#f59e0b",
                            weight: 2,
                            fillColor: "#f59e0b",
                            fillOpacity: 0.35,
                        }}
                    />
                </MapLayerGroup>
                <MapLayerGroup name="Kommuner 2019">
                    <MapGeoJSON
                        attribution="&copy; credits due..."
                        data={json_Kommuner2019_forenklet_2_2 as GeoJsonObject}
                        selectable
                        popupTitleField="navn"
                        popupFields={["Fylke", "KNR", "Opprettet", "Opphør"]}
                        style={{
                            color: "#22c55e",
                            weight: 2,
                            fillColor: "#22c55e",
                            fillOpacity: 0.2,
                        }}
                        pathOptions={{
                            color: "#22c55e",
                            weight: 2,
                            fillColor: "#22c55e",
                            fillOpacity: 0.2,
                        }}
                        defaultStyle={{
                            color: "#22c55e",
                            weight: 2,
                            fillColor: "#22c55e",
                            fillOpacity: 0.2,
                        }}
                        selectedStyle={{
                            color: "#f59e0b",
                            weight: 2,
                            fillColor: "#f59e0b",
                            fillOpacity: 0.35,
                        }}
                    />
                </MapLayerGroup>
                <MapLayerGroup name="Kommuner 2020">
                    <MapGeoJSON
                        attribution="&copy; credits due..."
                        data={json_Kommuner2020_forenklet_2_3 as GeoJsonObject}
                        selectable
                        popupTitleField="navn"
                        popupFields={["Fylke", "KNR", "Opprettet", "Opphør"]}
                        style={{
                            color: "#a855f7",
                            weight: 2,
                            fillColor: "#a855f7",
                            fillOpacity: 0.2,
                        }}
                        pathOptions={{
                            color: "#a855f7",
                            weight: 2,
                            fillColor: "#a855f7",
                            fillOpacity: 0.2,
                        }}
                        defaultStyle={{
                            color: "#a855f7",
                            weight: 2,
                            fillColor: "#a855f7",
                            fillOpacity: 0.2,
                        }}
                        selectedStyle={{
                            color: "#f59e0b",
                            weight: 2,
                            fillColor: "#f59e0b",
                            fillOpacity: 0.35,
                        }}
                    />
                </MapLayerGroup>
            </MapLayers>
            <MapZoomControl />
        </Map>
    );
}