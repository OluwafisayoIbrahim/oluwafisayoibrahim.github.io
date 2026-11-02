import manifest from "../../../public/world/manifest.json";
import nigeria from "../../../public/world/NG.json";
import type { WorldCity, WorldManifest } from "@/types/world";
import { WorldHelloClient } from "./world-hello-client";

export function WorldHello() {
  const lagos = nigeria.find(city => city.id === "2332459") as WorldCity;
  return <WorldHelloClient initialManifest={manifest as WorldManifest} initialCity={lagos} />;
}
