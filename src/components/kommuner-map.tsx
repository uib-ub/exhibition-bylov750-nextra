"use client"

import { useEffect, useState } from "react"
import type { GeoJsonObject } from "geojson"
import {
    Map,
    MapGeoJSON,
    MapLayerGroup,
    MapLayers,
    MapLayersControl,
    MapTileLayer,
    MapZoomControl,
} from "@/components/ui/map"

type GeoJsonState = {
    kommuner1947: GeoJsonObject | null
    kommuner2019: GeoJsonObject | null
    kommuner2020: GeoJsonObject | null
}

const EMPTY: GeoJsonState = {
    kommuner1947: null,
    kommuner2019: null,
    kommuner2020: null,
}

export function KommunerMap() {
    const [data, setData] = useState<GeoJsonState>(EMPTY)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController()

        async function load() {
            try {
                const [k1947, k2019, k2020] = await Promise.all(
                    [
                        "/data/kommuner-1947.json",
                        "/data/kommuner-2019.json",
                        "/data/kommuner-2020.json",
                    ].map(async (url) => {
                        const res = await fetch(url, {
                            signal: controller.signal,
                        })
                        if (!res.ok) {
                            throw new Error(`Failed to load ${url}`)
                        }
                        return res.json()
                    })
                )

                setData({
                    kommuner1947: k1947,
                    kommuner2019: k2019,
                    kommuner2020: k2020,
                })
            } catch (err) {
                if ((err as Error).name === "AbortError") return
                setError("Failed to load map data.")
            }
        }

        load()
        return () => controller.abort()
    }, [])

    return (
        <Map center={[65.38215970500428, 12.796135827352643]} zoom={5} className="h-[80vh] my-10">
            <MapLayers
                defaultTileLayer="National Geographic"
                defaultLayerGroups={["Kommuner 2020"]}>
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
                    {data.kommuner1947 && (
                        <MapGeoJSON
                            attribution="&copy; credits due..."
                            data={data.kommuner1947}
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
                    )}
                </MapLayerGroup>
                <MapLayerGroup name="Kommuner 2019">
                    {data.kommuner2019 && (
                        <MapGeoJSON
                            attribution="&copy; credits due..."
                            data={data.kommuner2019}
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
                    )}
                </MapLayerGroup>
                <MapLayerGroup name="Kommuner 2020">
                    {data.kommuner2020 && (
                        <MapGeoJSON
                            attribution="&copy; credits due..."
                            data={data.kommuner2020}
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
                    )}
                </MapLayerGroup>
            </MapLayers>

            <MapZoomControl />

            {error ? (
                <div className="absolute bottom-2 left-2 z-1000 rounded-md bg-destructive px-3 py-2 text-sm text-destructive-foreground">
                    {error}
                </div>
            ) : null}
        </Map>
    )
}
