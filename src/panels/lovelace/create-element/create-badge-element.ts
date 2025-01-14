import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import "../badges/hui-entity-badge";
import "../badges/hui-state-label-badge";
import {
  createLovelaceElement,
  getLovelaceElementClass,
  tryCreateLovelaceElement,
} from "./create-element-base";

const ALWAYS_LOADED_TYPES = new Set(["error", "state-label", "entity"]);
const LAZY_LOAD_TYPES = {
  "entity-filter": () => import("../badges/hui-entity-filter-badge"),
};

// This will not return an error card but will throw the error
export const tryCreateBadgeElement = (config: LovelaceBadgeConfig) =>
  tryCreateLovelaceElement(
    "badge",
    config,
    ALWAYS_LOADED_TYPES,
    LAZY_LOAD_TYPES,
    undefined,
    undefined
  );

export const createBadgeElement = (config: LovelaceBadgeConfig) =>
  createLovelaceElement(
    "badge",
    config,
    ALWAYS_LOADED_TYPES,
    LAZY_LOAD_TYPES,
    undefined,
    "entity"
  );

export const getBadgeElementClass = (type: string) =>
  getLovelaceElementClass(type, "badge", ALWAYS_LOADED_TYPES, LAZY_LOAD_TYPES);
