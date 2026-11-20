var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../pdfmarkuptool-bimpdf14-s1/node_modules/.pnpm/ajv@8.20.0/node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "../pdfmarkuptool-bimpdf14-s1/node_modules/.pnpm/ajv@8.20.0/node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320)
            pos++;
        }
      }
      return length;
    }
    exports.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// ../pdfmarkuptool-bimpdf14-s1/packages/core/dist/validate.js
var import_ucs2length = __toESM(require_ucs2length(), 1);
var __defProp2 = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var validators_generated_exports = {};
__export(validators_generated_exports, {
  AnnotationsDocument: () => AnnotationsDocument,
  ElementsDocument: () => ElementsDocument,
  LevelsDocument: () => LevelsDocument,
  MarksDocument: () => MarksDocument,
  Model3dDocument: () => Model3dDocument,
  PagesDocument: () => PagesDocument,
  ScalesDocument: () => ScalesDocument,
  SchedulesDocument: () => SchedulesDocument,
  TitleblockDocument: () => TitleblockDocument
});
var ajvRuntime_ucs2length = import_ucs2length.default.default ?? import_ucs2length.default;
var ElementsDocument = validate11;
var pattern0 = new RegExp("^[0-9]+\\.[0-9]+$", "u");
var schema17 = { "type": "object", "required": ["id", "class"], "properties": { "id": { "type": "string", "description": 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.' }, "class": { "$ref": "#/definitions/ElementClass" }, "document_id": { "type": "string", "minLength": 1, "description": "v1.12: the source document this element belongs to -- a pages.json source.document_id. Element identity is the pair (document_id, id). Optional; when absent the element belongs to the package's single source. REQUIRED (package validator) when pages.json lists more than one distinct source.document_id." }, "class_hint": { "type": ["string", "null"], "description": "Producer's native category name. Required when class === 'other'." }, "label": { "type": "string" }, "level": { "type": "string" }, "level_id": { "type": "string", "description": "UUID v5 referencing an entry in levels.json." }, "scheduled_in_view": { "type": "boolean", "description": "False when the producer's view or schedule filters exclude this element from the printed document set, so consumers can reconcile model counts against sheet counts." }, "quantities": { "type": "object", "properties": { "area": { "$ref": "#/definitions/Quantity" }, "volume": { "$ref": "#/definitions/Quantity" }, "length": { "$ref": "#/definitions/Quantity" }, "width": { "$ref": "#/definitions/Quantity" }, "height": { "$ref": "#/definitions/Quantity" }, "perimeter": { "$ref": "#/definitions/Quantity" }, "count": { "$ref": "#/definitions/Quantity" }, "weight": { "$ref": "#/definitions/Quantity" } } }, "properties": { "type": "object", "description": "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')." } }, "allOf": [{ "$comment": "class_hint is required when class is 'other'.", "if": { "properties": { "class": { "const": "other" } } }, "then": { "required": ["class_hint"] } }] };
var schema18 = { "type": "string", "description": "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.", "enum": ["wall", "curtain-wall", "slab", "floor", "column", "beam", "brace", "footing", "roof", "door", "window", "curtain-panel", "curtain-mullion", "ceiling", "room", "stair", "ramp", "furniture", "casework", "equipment", "parcel", "zoning-envelope", "mass", "other"] };
var func2 = ajvRuntime_ucs2length;
function validate12(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs3 = errors;
  let valid1 = true;
  const _errs4 = errors;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.class !== void 0) {
      if ("other" !== data.class) {
        const err0 = {};
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
  }
  var _valid0 = _errs4 === errors;
  errors = _errs3;
  if (vErrors !== null) {
    if (_errs3) {
      vErrors.length = _errs3;
    } else {
      vErrors = null;
    }
  }
  if (_valid0) {
    const _errs6 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
      if (data.class_hint === void 0) {
        const err1 = { instancePath, schemaPath: "#/allOf/0/then/required", keyword: "required", params: { missingProperty: "class_hint" }, message: "must have required property 'class_hint'" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    var _valid0 = _errs6 === errors;
    valid1 = _valid0;
  }
  if (!valid1) {
    const err2 = { instancePath, schemaPath: "#/allOf/0/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.id === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.class === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "class" }, message: "must have required property 'class'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.id !== void 0) {
      if (typeof data.id !== "string") {
        const err5 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.class !== void 0) {
      let data2 = data.class;
      if (typeof data2 !== "string") {
        const err6 = { instancePath: instancePath + "/class", schemaPath: "#/definitions/ElementClass/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
      if (!(data2 === "wall" || data2 === "curtain-wall" || data2 === "slab" || data2 === "floor" || data2 === "column" || data2 === "beam" || data2 === "brace" || data2 === "footing" || data2 === "roof" || data2 === "door" || data2 === "window" || data2 === "curtain-panel" || data2 === "curtain-mullion" || data2 === "ceiling" || data2 === "room" || data2 === "stair" || data2 === "ramp" || data2 === "furniture" || data2 === "casework" || data2 === "equipment" || data2 === "parcel" || data2 === "zoning-envelope" || data2 === "mass" || data2 === "other")) {
        const err7 = { instancePath: instancePath + "/class", schemaPath: "#/definitions/ElementClass/enum", keyword: "enum", params: { allowedValues: schema18.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.document_id !== void 0) {
      let data3 = data.document_id;
      if (typeof data3 === "string") {
        if (func2(data3) < 1) {
          const err8 = { instancePath: instancePath + "/document_id", schemaPath: "#/properties/document_id/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
      } else {
        const err9 = { instancePath: instancePath + "/document_id", schemaPath: "#/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.class_hint !== void 0) {
      let data4 = data.class_hint;
      if (typeof data4 !== "string" && data4 !== null) {
        const err10 = { instancePath: instancePath + "/class_hint", schemaPath: "#/properties/class_hint/type", keyword: "type", params: { type: schema17.properties.class_hint.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.label !== void 0) {
      if (typeof data.label !== "string") {
        const err11 = { instancePath: instancePath + "/label", schemaPath: "#/properties/label/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.level !== void 0) {
      if (typeof data.level !== "string") {
        const err12 = { instancePath: instancePath + "/level", schemaPath: "#/properties/level/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.level_id !== void 0) {
      if (typeof data.level_id !== "string") {
        const err13 = { instancePath: instancePath + "/level_id", schemaPath: "#/properties/level_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    if (data.scheduled_in_view !== void 0) {
      if (typeof data.scheduled_in_view !== "boolean") {
        const err14 = { instancePath: instancePath + "/scheduled_in_view", schemaPath: "#/properties/scheduled_in_view/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.quantities !== void 0) {
      let data9 = data.quantities;
      if (data9 && typeof data9 == "object" && !Array.isArray(data9)) {
        if (data9.area !== void 0) {
          let data10 = data9.area;
          if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
            if (data10.value === void 0) {
              const err15 = { instancePath: instancePath + "/quantities/area", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err15];
              } else {
                vErrors.push(err15);
              }
              errors++;
            }
            if (data10.unit === void 0) {
              const err16 = { instancePath: instancePath + "/quantities/area", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
            if (data10.value !== void 0) {
              if (!(typeof data10.value == "number")) {
                const err17 = { instancePath: instancePath + "/quantities/area/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err17];
                } else {
                  vErrors.push(err17);
                }
                errors++;
              }
            }
            if (data10.unit !== void 0) {
              if (typeof data10.unit !== "string") {
                const err18 = { instancePath: instancePath + "/quantities/area/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err18];
                } else {
                  vErrors.push(err18);
                }
                errors++;
              }
            }
          } else {
            const err19 = { instancePath: instancePath + "/quantities/area", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err19];
            } else {
              vErrors.push(err19);
            }
            errors++;
          }
        }
        if (data9.volume !== void 0) {
          let data13 = data9.volume;
          if (data13 && typeof data13 == "object" && !Array.isArray(data13)) {
            if (data13.value === void 0) {
              const err20 = { instancePath: instancePath + "/quantities/volume", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err20];
              } else {
                vErrors.push(err20);
              }
              errors++;
            }
            if (data13.unit === void 0) {
              const err21 = { instancePath: instancePath + "/quantities/volume", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err21];
              } else {
                vErrors.push(err21);
              }
              errors++;
            }
            if (data13.value !== void 0) {
              if (!(typeof data13.value == "number")) {
                const err22 = { instancePath: instancePath + "/quantities/volume/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
            if (data13.unit !== void 0) {
              if (typeof data13.unit !== "string") {
                const err23 = { instancePath: instancePath + "/quantities/volume/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err23];
                } else {
                  vErrors.push(err23);
                }
                errors++;
              }
            }
          } else {
            const err24 = { instancePath: instancePath + "/quantities/volume", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err24];
            } else {
              vErrors.push(err24);
            }
            errors++;
          }
        }
        if (data9.length !== void 0) {
          let data16 = data9.length;
          if (data16 && typeof data16 == "object" && !Array.isArray(data16)) {
            if (data16.value === void 0) {
              const err25 = { instancePath: instancePath + "/quantities/length", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err25];
              } else {
                vErrors.push(err25);
              }
              errors++;
            }
            if (data16.unit === void 0) {
              const err26 = { instancePath: instancePath + "/quantities/length", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err26];
              } else {
                vErrors.push(err26);
              }
              errors++;
            }
            if (data16.value !== void 0) {
              if (!(typeof data16.value == "number")) {
                const err27 = { instancePath: instancePath + "/quantities/length/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
            }
            if (data16.unit !== void 0) {
              if (typeof data16.unit !== "string") {
                const err28 = { instancePath: instancePath + "/quantities/length/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err28];
                } else {
                  vErrors.push(err28);
                }
                errors++;
              }
            }
          } else {
            const err29 = { instancePath: instancePath + "/quantities/length", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err29];
            } else {
              vErrors.push(err29);
            }
            errors++;
          }
        }
        if (data9.width !== void 0) {
          let data19 = data9.width;
          if (data19 && typeof data19 == "object" && !Array.isArray(data19)) {
            if (data19.value === void 0) {
              const err30 = { instancePath: instancePath + "/quantities/width", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err30];
              } else {
                vErrors.push(err30);
              }
              errors++;
            }
            if (data19.unit === void 0) {
              const err31 = { instancePath: instancePath + "/quantities/width", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            }
            if (data19.value !== void 0) {
              if (!(typeof data19.value == "number")) {
                const err32 = { instancePath: instancePath + "/quantities/width/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err32];
                } else {
                  vErrors.push(err32);
                }
                errors++;
              }
            }
            if (data19.unit !== void 0) {
              if (typeof data19.unit !== "string") {
                const err33 = { instancePath: instancePath + "/quantities/width/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err33];
                } else {
                  vErrors.push(err33);
                }
                errors++;
              }
            }
          } else {
            const err34 = { instancePath: instancePath + "/quantities/width", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err34];
            } else {
              vErrors.push(err34);
            }
            errors++;
          }
        }
        if (data9.height !== void 0) {
          let data22 = data9.height;
          if (data22 && typeof data22 == "object" && !Array.isArray(data22)) {
            if (data22.value === void 0) {
              const err35 = { instancePath: instancePath + "/quantities/height", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err35];
              } else {
                vErrors.push(err35);
              }
              errors++;
            }
            if (data22.unit === void 0) {
              const err36 = { instancePath: instancePath + "/quantities/height", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err36];
              } else {
                vErrors.push(err36);
              }
              errors++;
            }
            if (data22.value !== void 0) {
              if (!(typeof data22.value == "number")) {
                const err37 = { instancePath: instancePath + "/quantities/height/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err37];
                } else {
                  vErrors.push(err37);
                }
                errors++;
              }
            }
            if (data22.unit !== void 0) {
              if (typeof data22.unit !== "string") {
                const err38 = { instancePath: instancePath + "/quantities/height/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err38];
                } else {
                  vErrors.push(err38);
                }
                errors++;
              }
            }
          } else {
            const err39 = { instancePath: instancePath + "/quantities/height", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err39];
            } else {
              vErrors.push(err39);
            }
            errors++;
          }
        }
        if (data9.perimeter !== void 0) {
          let data25 = data9.perimeter;
          if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
            if (data25.value === void 0) {
              const err40 = { instancePath: instancePath + "/quantities/perimeter", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err40];
              } else {
                vErrors.push(err40);
              }
              errors++;
            }
            if (data25.unit === void 0) {
              const err41 = { instancePath: instancePath + "/quantities/perimeter", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err41];
              } else {
                vErrors.push(err41);
              }
              errors++;
            }
            if (data25.value !== void 0) {
              if (!(typeof data25.value == "number")) {
                const err42 = { instancePath: instancePath + "/quantities/perimeter/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err42];
                } else {
                  vErrors.push(err42);
                }
                errors++;
              }
            }
            if (data25.unit !== void 0) {
              if (typeof data25.unit !== "string") {
                const err43 = { instancePath: instancePath + "/quantities/perimeter/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err43];
                } else {
                  vErrors.push(err43);
                }
                errors++;
              }
            }
          } else {
            const err44 = { instancePath: instancePath + "/quantities/perimeter", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err44];
            } else {
              vErrors.push(err44);
            }
            errors++;
          }
        }
        if (data9.count !== void 0) {
          let data28 = data9.count;
          if (data28 && typeof data28 == "object" && !Array.isArray(data28)) {
            if (data28.value === void 0) {
              const err45 = { instancePath: instancePath + "/quantities/count", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err45];
              } else {
                vErrors.push(err45);
              }
              errors++;
            }
            if (data28.unit === void 0) {
              const err46 = { instancePath: instancePath + "/quantities/count", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err46];
              } else {
                vErrors.push(err46);
              }
              errors++;
            }
            if (data28.value !== void 0) {
              if (!(typeof data28.value == "number")) {
                const err47 = { instancePath: instancePath + "/quantities/count/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err47];
                } else {
                  vErrors.push(err47);
                }
                errors++;
              }
            }
            if (data28.unit !== void 0) {
              if (typeof data28.unit !== "string") {
                const err48 = { instancePath: instancePath + "/quantities/count/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err48];
                } else {
                  vErrors.push(err48);
                }
                errors++;
              }
            }
          } else {
            const err49 = { instancePath: instancePath + "/quantities/count", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err49];
            } else {
              vErrors.push(err49);
            }
            errors++;
          }
        }
        if (data9.weight !== void 0) {
          let data31 = data9.weight;
          if (data31 && typeof data31 == "object" && !Array.isArray(data31)) {
            if (data31.value === void 0) {
              const err50 = { instancePath: instancePath + "/quantities/weight", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err50];
              } else {
                vErrors.push(err50);
              }
              errors++;
            }
            if (data31.unit === void 0) {
              const err51 = { instancePath: instancePath + "/quantities/weight", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err51];
              } else {
                vErrors.push(err51);
              }
              errors++;
            }
            if (data31.value !== void 0) {
              if (!(typeof data31.value == "number")) {
                const err52 = { instancePath: instancePath + "/quantities/weight/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err52];
                } else {
                  vErrors.push(err52);
                }
                errors++;
              }
            }
            if (data31.unit !== void 0) {
              if (typeof data31.unit !== "string") {
                const err53 = { instancePath: instancePath + "/quantities/weight/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err53];
                } else {
                  vErrors.push(err53);
                }
                errors++;
              }
            }
          } else {
            const err54 = { instancePath: instancePath + "/quantities/weight", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err54];
            } else {
              vErrors.push(err54);
            }
            errors++;
          }
        }
      } else {
        const err55 = { instancePath: instancePath + "/quantities", schemaPath: "#/properties/quantities/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err55];
        } else {
          vErrors.push(err55);
        }
        errors++;
      }
    }
    if (data.properties !== void 0) {
      let data34 = data.properties;
      if (!(data34 && typeof data34 == "object" && !Array.isArray(data34))) {
        const err56 = { instancePath: instancePath + "/properties", schemaPath: "#/properties/properties/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err56];
        } else {
          vErrors.push(err56);
        }
        errors++;
      }
    }
  } else {
    const err57 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err57];
    } else {
      vErrors.push(err57);
    }
    errors++;
  }
  validate12.errors = vErrors;
  return errors === 0;
}
function validate11(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.meta === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "meta" }, message: "must have required property 'meta'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.source === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "source" }, message: "must have required property 'source'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.class_registry === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "class_registry" }, message: "must have required property 'class_registry'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.elements === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "elements" }, message: "must have required property 'elements'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err5 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
      } else {
        const err6 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data1 = data.meta;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        if (data1.project_id === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data1.document_id === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data1.exported_at === void 0) {
          const err9 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
        if (data1.producer === void 0) {
          const err10 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        }
        if (data1.project_id !== void 0) {
          if (typeof data1.project_id !== "string") {
            const err11 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data1.document_id !== void 0) {
          if (typeof data1.document_id !== "string") {
            const err12 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data1.exported_at !== void 0) {
          if (typeof data1.exported_at !== "string") {
            const err13 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
        if (data1.producer !== void 0) {
          if (typeof data1.producer !== "string") {
            const err14 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err14];
            } else {
              vErrors.push(err14);
            }
            errors++;
          }
        }
        if (data1.authority !== void 0) {
          if (typeof data1.authority !== "string") {
            const err15 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
      } else {
        const err16 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    if (data.source !== void 0) {
      let data7 = data.source;
      if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
        if (data7.format === void 0) {
          const err17 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/BimPdfSource/required", keyword: "required", params: { missingProperty: "format" }, message: "must have required property 'format'" };
          if (vErrors === null) {
            vErrors = [err17];
          } else {
            vErrors.push(err17);
          }
          errors++;
        }
        if (data7.id_strategy === void 0) {
          const err18 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/BimPdfSource/required", keyword: "required", params: { missingProperty: "id_strategy" }, message: "must have required property 'id_strategy'" };
          if (vErrors === null) {
            vErrors = [err18];
          } else {
            vErrors.push(err18);
          }
          errors++;
        }
        if (data7.format !== void 0) {
          if (typeof data7.format !== "string") {
            const err19 = { instancePath: instancePath + "/source/format", schemaPath: "#/definitions/BimPdfSource/properties/format/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err19];
            } else {
              vErrors.push(err19);
            }
            errors++;
          }
        }
        if (data7.version !== void 0) {
          if (typeof data7.version !== "string") {
            const err20 = { instancePath: instancePath + "/source/version", schemaPath: "#/definitions/BimPdfSource/properties/version/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
        if (data7.id_strategy !== void 0) {
          if (typeof data7.id_strategy !== "string") {
            const err21 = { instancePath: instancePath + "/source/id_strategy", schemaPath: "#/definitions/BimPdfSource/properties/id_strategy/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err21];
            } else {
              vErrors.push(err21);
            }
            errors++;
          }
        }
        if (data7.id_stability_notes !== void 0) {
          if (typeof data7.id_stability_notes !== "string") {
            const err22 = { instancePath: instancePath + "/source/id_stability_notes", schemaPath: "#/definitions/BimPdfSource/properties/id_stability_notes/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
      } else {
        const err23 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/BimPdfSource/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err23];
        } else {
          vErrors.push(err23);
        }
        errors++;
      }
    }
    if (data.class_registry !== void 0) {
      let data12 = data.class_registry;
      if (typeof data12 === "string") {
        if (!pattern0.test(data12)) {
          const err24 = { instancePath: instancePath + "/class_registry", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err24];
          } else {
            vErrors.push(err24);
          }
          errors++;
        }
      } else {
        const err25 = { instancePath: instancePath + "/class_registry", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err25];
        } else {
          vErrors.push(err25);
        }
        errors++;
      }
    }
    if (data.elements !== void 0) {
      let data13 = data.elements;
      if (Array.isArray(data13)) {
        const len0 = data13.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate12(data13[i0], { instancePath: instancePath + "/elements/" + i0, parentData: data13, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err26 = { instancePath: instancePath + "/elements", schemaPath: "#/properties/elements/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err26];
        } else {
          vErrors.push(err26);
        }
        errors++;
      }
    }
  } else {
    const err27 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err27];
    } else {
      vErrors.push(err27);
    }
    errors++;
  }
  validate11.errors = vErrors;
  return errors === 0;
}
var MarksDocument = validate14;
function validate15(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.element_id === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "element_id" }, message: "must have required property 'element_id'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.page === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.bbox === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bbox" }, message: "must have required property 'bbox'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.element_id !== void 0) {
      if (typeof data.element_id !== "string") {
        const err3 = { instancePath: instancePath + "/element_id", schemaPath: "#/properties/element_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.page !== void 0) {
      let data1 = data.page;
      if (!(typeof data1 == "number" && (!(data1 % 1) && !isNaN(data1)))) {
        const err4 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      if (typeof data1 == "number") {
        if (data1 < 1 || isNaN(data1)) {
          const err5 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
      }
    }
    if (data.bbox !== void 0) {
      let data2 = data.bbox;
      if (Array.isArray(data2)) {
        if (data2.length > 4) {
          const err6 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data2.length < 4) {
          const err7 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        const len0 = data2.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!(typeof data2[i0] == "number")) {
            const err8 = { instancePath: instancePath + "/bbox/" + i0, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
      } else {
        const err9 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.view_type !== void 0) {
      if (typeof data.view_type !== "string") {
        const err10 = { instancePath: instancePath + "/view_type", schemaPath: "#/properties/view_type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.outline !== void 0) {
      let data5 = data.outline;
      if (Array.isArray(data5)) {
        const len1 = data5.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data6 = data5[i1];
          if (Array.isArray(data6)) {
            const len2 = data6.length;
            for (let i2 = 0; i2 < len2; i2++) {
              let data7 = data6[i2];
              if (Array.isArray(data7)) {
                if (data7.length > 2) {
                  const err11 = { instancePath: instancePath + "/outline/" + i1 + "/" + i2, schemaPath: "#/definitions/Point2D/maxItems", keyword: "maxItems", params: { limit: 2 }, message: "must NOT have more than 2 items" };
                  if (vErrors === null) {
                    vErrors = [err11];
                  } else {
                    vErrors.push(err11);
                  }
                  errors++;
                }
                if (data7.length < 2) {
                  const err12 = { instancePath: instancePath + "/outline/" + i1 + "/" + i2, schemaPath: "#/definitions/Point2D/minItems", keyword: "minItems", params: { limit: 2 }, message: "must NOT have fewer than 2 items" };
                  if (vErrors === null) {
                    vErrors = [err12];
                  } else {
                    vErrors.push(err12);
                  }
                  errors++;
                }
                const len3 = data7.length;
                for (let i3 = 0; i3 < len3; i3++) {
                  if (!(typeof data7[i3] == "number")) {
                    const err13 = { instancePath: instancePath + "/outline/" + i1 + "/" + i2 + "/" + i3, schemaPath: "#/definitions/Point2D/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                    if (vErrors === null) {
                      vErrors = [err13];
                    } else {
                      vErrors.push(err13);
                    }
                    errors++;
                  }
                }
              } else {
                const err14 = { instancePath: instancePath + "/outline/" + i1 + "/" + i2, schemaPath: "#/definitions/Point2D/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
            }
          } else {
            const err15 = { instancePath: instancePath + "/outline/" + i1, schemaPath: "#/properties/outline/items/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
      } else {
        const err16 = { instancePath: instancePath + "/outline", schemaPath: "#/properties/outline/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    if (data.depth !== void 0) {
      if (!(typeof data.depth == "number")) {
        const err17 = { instancePath: instancePath + "/depth", schemaPath: "#/properties/depth/type", keyword: "type", params: { type: "number" }, message: "must be number" };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
    }
    if (data.visibility !== void 0) {
      let data10 = data.visibility;
      if (typeof data10 == "number") {
        if (data10 > 1 || isNaN(data10)) {
          const err18 = { instancePath: instancePath + "/visibility", schemaPath: "#/properties/visibility/maximum", keyword: "maximum", params: { comparison: "<=", limit: 1 }, message: "must be <= 1" };
          if (vErrors === null) {
            vErrors = [err18];
          } else {
            vErrors.push(err18);
          }
          errors++;
        }
        if (data10 < 0 || isNaN(data10)) {
          const err19 = { instancePath: instancePath + "/visibility", schemaPath: "#/properties/visibility/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err19];
          } else {
            vErrors.push(err19);
          }
          errors++;
        }
      } else {
        const err20 = { instancePath: instancePath + "/visibility", schemaPath: "#/properties/visibility/type", keyword: "type", params: { type: "number" }, message: "must be number" };
        if (vErrors === null) {
          vErrors = [err20];
        } else {
          vErrors.push(err20);
        }
        errors++;
      }
    }
    if (data.sheet_number !== void 0) {
      if (typeof data.sheet_number !== "string") {
        const err21 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/properties/sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err21];
        } else {
          vErrors.push(err21);
        }
        errors++;
      }
    }
    if (data.vp !== void 0) {
      let data12 = data.vp;
      if (!(typeof data12 == "number" && (!(data12 % 1) && !isNaN(data12)))) {
        const err22 = { instancePath: instancePath + "/vp", schemaPath: "#/properties/vp/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err22];
        } else {
          vErrors.push(err22);
        }
        errors++;
      }
      if (typeof data12 == "number") {
        if (data12 < 0 || isNaN(data12)) {
          const err23 = { instancePath: instancePath + "/vp", schemaPath: "#/properties/vp/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err23];
          } else {
            vErrors.push(err23);
          }
          errors++;
        }
      }
    }
  } else {
    const err24 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err24];
    } else {
      vErrors.push(err24);
    }
    errors++;
  }
  validate15.errors = vErrors;
  return errors === 0;
}
function validate14(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.requires === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "requires" }, message: "must have required property 'requires'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.coordinate_space === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "coordinate_space" }, message: "must have required property 'coordinate_space'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.marks === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "marks" }, message: "must have required property 'marks'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err4 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err4];
          } else {
            vErrors.push(err4);
          }
          errors++;
        }
      } else {
        const err5 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.requires !== void 0) {
      let data1 = data.requires;
      if (Array.isArray(data1)) {
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (typeof data1[i0] !== "string") {
            const err6 = { instancePath: instancePath + "/requires/" + i0, schemaPath: "#/properties/requires/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        const _errs8 = errors;
        const len1 = data1.length;
        for (let i1 = 0; i1 < len1; i1++) {
          const _errs9 = errors;
          if ("elements.json" !== data1[i1]) {
            const err7 = { instancePath: instancePath + "/requires/" + i1, schemaPath: "#/properties/requires/contains/const", keyword: "const", params: { allowedValue: "elements.json" }, message: "must be equal to constant" };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
          var valid4 = _errs9 === errors;
          if (valid4) {
            break;
          }
        }
        if (!valid4) {
          const err8 = { instancePath: instancePath + "/requires", schemaPath: "#/properties/requires/contains", keyword: "contains", params: { minContains: 1 }, message: "must contain at least 1 valid item(s)" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        } else {
          errors = _errs8;
          if (vErrors !== null) {
            if (_errs8) {
              vErrors.length = _errs8;
            } else {
              vErrors = null;
            }
          }
        }
      } else {
        const err9 = { instancePath: instancePath + "/requires", schemaPath: "#/properties/requires/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.coordinate_space !== void 0) {
      if (typeof data.coordinate_space !== "string") {
        const err10 = { instancePath: instancePath + "/coordinate_space", schemaPath: "#/properties/coordinate_space/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.marks !== void 0) {
      let data5 = data.marks;
      if (Array.isArray(data5)) {
        const len2 = data5.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (!validate15(data5[i2], { instancePath: instancePath + "/marks/" + i2, parentData: data5, parentDataProperty: i2, rootData })) {
            vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err11 = { instancePath: instancePath + "/marks", schemaPath: "#/properties/marks/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data7 = data.meta;
      if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
        if (data7.project_id === void 0) {
          const err12 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err12];
          } else {
            vErrors.push(err12);
          }
          errors++;
        }
        if (data7.document_id === void 0) {
          const err13 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        }
        if (data7.exported_at === void 0) {
          const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
        if (data7.producer === void 0) {
          const err15 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err15];
          } else {
            vErrors.push(err15);
          }
          errors++;
        }
        if (data7.project_id !== void 0) {
          if (typeof data7.project_id !== "string") {
            const err16 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err16];
            } else {
              vErrors.push(err16);
            }
            errors++;
          }
        }
        if (data7.document_id !== void 0) {
          if (typeof data7.document_id !== "string") {
            const err17 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err17];
            } else {
              vErrors.push(err17);
            }
            errors++;
          }
        }
        if (data7.exported_at !== void 0) {
          if (typeof data7.exported_at !== "string") {
            const err18 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
        if (data7.producer !== void 0) {
          if (typeof data7.producer !== "string") {
            const err19 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err19];
            } else {
              vErrors.push(err19);
            }
            errors++;
          }
        }
        if (data7.authority !== void 0) {
          if (typeof data7.authority !== "string") {
            const err20 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
      } else {
        const err21 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err21];
        } else {
          vErrors.push(err21);
        }
        errors++;
      }
    }
  } else {
    const err22 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err22];
    } else {
      vErrors.push(err22);
    }
    errors++;
  }
  validate14.errors = vErrors;
  return errors === 0;
}
var ScalesDocument = validate17;
function validate20(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.type === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "type" }, message: "must have required property 'type'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.p1 === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "p1" }, message: "must have required property 'p1'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.p2 === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "p2" }, message: "must have required property 'p2'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.real_distance === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "real_distance" }, message: "must have required property 'real_distance'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.type !== void 0) {
      if ("calibration" !== data.type) {
        const err4 = { instancePath: instancePath + "/type", schemaPath: "#/properties/type/const", keyword: "const", params: { allowedValue: "calibration" }, message: "must be equal to constant" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.p1 !== void 0) {
      let data1 = data.p1;
      if (Array.isArray(data1)) {
        if (data1.length > 2) {
          const err5 = { instancePath: instancePath + "/p1", schemaPath: "#/definitions/Point2D/maxItems", keyword: "maxItems", params: { limit: 2 }, message: "must NOT have more than 2 items" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data1.length < 2) {
          const err6 = { instancePath: instancePath + "/p1", schemaPath: "#/definitions/Point2D/minItems", keyword: "minItems", params: { limit: 2 }, message: "must NOT have fewer than 2 items" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!(typeof data1[i0] == "number")) {
            const err7 = { instancePath: instancePath + "/p1/" + i0, schemaPath: "#/definitions/Point2D/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
      } else {
        const err8 = { instancePath: instancePath + "/p1", schemaPath: "#/definitions/Point2D/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.p2 !== void 0) {
      let data3 = data.p2;
      if (Array.isArray(data3)) {
        if (data3.length > 2) {
          const err9 = { instancePath: instancePath + "/p2", schemaPath: "#/definitions/Point2D/maxItems", keyword: "maxItems", params: { limit: 2 }, message: "must NOT have more than 2 items" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
        if (data3.length < 2) {
          const err10 = { instancePath: instancePath + "/p2", schemaPath: "#/definitions/Point2D/minItems", keyword: "minItems", params: { limit: 2 }, message: "must NOT have fewer than 2 items" };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        }
        const len1 = data3.length;
        for (let i1 = 0; i1 < len1; i1++) {
          if (!(typeof data3[i1] == "number")) {
            const err11 = { instancePath: instancePath + "/p2/" + i1, schemaPath: "#/definitions/Point2D/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
      } else {
        const err12 = { instancePath: instancePath + "/p2", schemaPath: "#/definitions/Point2D/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.real_distance !== void 0) {
      let data5 = data.real_distance;
      if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
        if (data5.value === void 0) {
          const err13 = { instancePath: instancePath + "/real_distance", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        }
        if (data5.unit === void 0) {
          const err14 = { instancePath: instancePath + "/real_distance", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
        if (data5.value !== void 0) {
          if (!(typeof data5.value == "number")) {
            const err15 = { instancePath: instancePath + "/real_distance/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
        if (data5.unit !== void 0) {
          if (typeof data5.unit !== "string") {
            const err16 = { instancePath: instancePath + "/real_distance/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err16];
            } else {
              vErrors.push(err16);
            }
            errors++;
          }
        }
      } else {
        const err17 = { instancePath: instancePath + "/real_distance", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
    }
  } else {
    const err18 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err18];
    } else {
      vErrors.push(err18);
    }
    errors++;
  }
  validate20.errors = vErrors;
  return errors === 0;
}
function validate19(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.type === void 0) {
      const err0 = { instancePath, schemaPath: "#/definitions/RatioScale/required", keyword: "required", params: { missingProperty: "type" }, message: "must have required property 'type'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.ratio === void 0) {
      const err1 = { instancePath, schemaPath: "#/definitions/RatioScale/required", keyword: "required", params: { missingProperty: "ratio" }, message: "must have required property 'ratio'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.unit === void 0) {
      const err2 = { instancePath, schemaPath: "#/definitions/RatioScale/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.type !== void 0) {
      if ("ratio" !== data.type) {
        const err3 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/RatioScale/properties/type/const", keyword: "const", params: { allowedValue: "ratio" }, message: "must be equal to constant" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.ratio !== void 0) {
      if (!(typeof data.ratio == "number")) {
        const err4 = { instancePath: instancePath + "/ratio", schemaPath: "#/definitions/RatioScale/properties/ratio/type", keyword: "type", params: { type: "number" }, message: "must be number" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.unit !== void 0) {
      if (typeof data.unit !== "string") {
        const err5 = { instancePath: instancePath + "/unit", schemaPath: "#/definitions/RatioScale/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
  } else {
    const err6 = { instancePath, schemaPath: "#/definitions/RatioScale/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs9 = errors;
  if (!validate20(data, { instancePath, parentData, parentDataProperty, rootData })) {
    vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs9 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
  }
  if (!valid0) {
    const err7 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate19.errors = vErrors;
  return errors === 0;
}
var schema43 = { "type": "object", "description": "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.", "required": ["media_box"], "properties": { "media_box": { "$ref": "#/definitions/BBox", "description": "The page /MediaBox: [x0, y0, x1, y1]." }, "crop_box": { "$ref": "#/definitions/BBox", "description": "The page /CropBox when it differs from /MediaBox." }, "rotate": { "enum": [0, 90, 180, 270], "description": "The page /Rotate value (display-only rotation), degrees clockwise." } } };
function validate24(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.media_box === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "media_box" }, message: "must have required property 'media_box'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.media_box !== void 0) {
      let data0 = data.media_box;
      if (Array.isArray(data0)) {
        if (data0.length > 4) {
          const err1 = { instancePath: instancePath + "/media_box", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.length < 4) {
          const err2 = { instancePath: instancePath + "/media_box", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        const len0 = data0.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!(typeof data0[i0] == "number")) {
            const err3 = { instancePath: instancePath + "/media_box/" + i0, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
      } else {
        const err4 = { instancePath: instancePath + "/media_box", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.crop_box !== void 0) {
      let data2 = data.crop_box;
      if (Array.isArray(data2)) {
        if (data2.length > 4) {
          const err5 = { instancePath: instancePath + "/crop_box", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data2.length < 4) {
          const err6 = { instancePath: instancePath + "/crop_box", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        const len1 = data2.length;
        for (let i1 = 0; i1 < len1; i1++) {
          if (!(typeof data2[i1] == "number")) {
            const err7 = { instancePath: instancePath + "/crop_box/" + i1, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
      } else {
        const err8 = { instancePath: instancePath + "/crop_box", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.rotate !== void 0) {
      let data4 = data.rotate;
      if (!(data4 === 0 || data4 === 90 || data4 === 180 || data4 === 270)) {
        const err9 = { instancePath: instancePath + "/rotate", schemaPath: "#/properties/rotate/enum", keyword: "enum", params: { allowedValues: schema43.properties.rotate.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
  } else {
    const err10 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate24.errors = vErrors;
  return errors === 0;
}
var schema49 = { "type": "object", "description": `v1.13: one view-reference head drawn inside a scales viewport (a section, elevation, callout or detail marker) and the view it points at. Navigate by view_id only -- resolve it against the scales viewports of the pages in the current set; target_sheet_number / target_detail_number are the PRINTED label, a lookup hint and the "not in this set" message, never a navigation key. Rects are in the page's raw PDF points, the same convention as ScaleViewport.rect.`, "required": ["marker_id", "kind", "view_id", "view_name", "heads", "bbox"], "properties": { "marker_id": { "type": "string", "minLength": 1, "description": "Producer id of the marker element (Revit: the OST_Viewers element). NOT an elements.json id." }, "kind": { "type": "string", "enum": ["section", "elevation", "callout", "detail"] }, "view_id": { "type": "string", "minLength": 1, "description": "The TARGET view's stable id (Revit UniqueId) -- the same value as the target viewport's view_id (or, for a parent view placed only through dependents, their primary_view_id)." }, "view_name": { "type": "string" }, "target_sheet_number": { "type": "string", "description": "The sheet number printed in the head (a hint only)." }, "target_detail_number": { "type": "string", "description": "The detail number printed in the head (a hint only)." }, "heads": { "type": "array", "description": "The tappable head symbols, each capped at about 2 x its min side; a callout emits its bubble only, never its boundary. May be empty.", "items": { "$ref": "#/definitions/BBox" } }, "bbox": { "$ref": "#/definitions/BBox", "description": "The whole marker (a callout's boundary, a section's cut line)." } } };
function validate29(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.marker_id === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "marker_id" }, message: "must have required property 'marker_id'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.kind === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "kind" }, message: "must have required property 'kind'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.view_id === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "view_id" }, message: "must have required property 'view_id'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.view_name === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "view_name" }, message: "must have required property 'view_name'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.heads === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "heads" }, message: "must have required property 'heads'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.bbox === void 0) {
      const err5 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bbox" }, message: "must have required property 'bbox'" };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.marker_id !== void 0) {
      let data0 = data.marker_id;
      if (typeof data0 === "string") {
        if (func2(data0) < 1) {
          const err6 = { instancePath: instancePath + "/marker_id", schemaPath: "#/properties/marker_id/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
      } else {
        const err7 = { instancePath: instancePath + "/marker_id", schemaPath: "#/properties/marker_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.kind !== void 0) {
      let data1 = data.kind;
      if (typeof data1 !== "string") {
        const err8 = { instancePath: instancePath + "/kind", schemaPath: "#/properties/kind/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
      if (!(data1 === "section" || data1 === "elevation" || data1 === "callout" || data1 === "detail")) {
        const err9 = { instancePath: instancePath + "/kind", schemaPath: "#/properties/kind/enum", keyword: "enum", params: { allowedValues: schema49.properties.kind.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.view_id !== void 0) {
      let data2 = data.view_id;
      if (typeof data2 === "string") {
        if (func2(data2) < 1) {
          const err10 = { instancePath: instancePath + "/view_id", schemaPath: "#/properties/view_id/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        }
      } else {
        const err11 = { instancePath: instancePath + "/view_id", schemaPath: "#/properties/view_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.view_name !== void 0) {
      if (typeof data.view_name !== "string") {
        const err12 = { instancePath: instancePath + "/view_name", schemaPath: "#/properties/view_name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.target_sheet_number !== void 0) {
      if (typeof data.target_sheet_number !== "string") {
        const err13 = { instancePath: instancePath + "/target_sheet_number", schemaPath: "#/properties/target_sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    if (data.target_detail_number !== void 0) {
      if (typeof data.target_detail_number !== "string") {
        const err14 = { instancePath: instancePath + "/target_detail_number", schemaPath: "#/properties/target_detail_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.heads !== void 0) {
      let data6 = data.heads;
      if (Array.isArray(data6)) {
        const len0 = data6.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data7 = data6[i0];
          if (Array.isArray(data7)) {
            if (data7.length > 4) {
              const err15 = { instancePath: instancePath + "/heads/" + i0, schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
              if (vErrors === null) {
                vErrors = [err15];
              } else {
                vErrors.push(err15);
              }
              errors++;
            }
            if (data7.length < 4) {
              const err16 = { instancePath: instancePath + "/heads/" + i0, schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
            const len1 = data7.length;
            for (let i1 = 0; i1 < len1; i1++) {
              if (!(typeof data7[i1] == "number")) {
                const err17 = { instancePath: instancePath + "/heads/" + i0 + "/" + i1, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err17];
                } else {
                  vErrors.push(err17);
                }
                errors++;
              }
            }
          } else {
            const err18 = { instancePath: instancePath + "/heads/" + i0, schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
      } else {
        const err19 = { instancePath: instancePath + "/heads", schemaPath: "#/properties/heads/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.bbox !== void 0) {
      let data9 = data.bbox;
      if (Array.isArray(data9)) {
        if (data9.length > 4) {
          const err20 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err20];
          } else {
            vErrors.push(err20);
          }
          errors++;
        }
        if (data9.length < 4) {
          const err21 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
        }
        const len2 = data9.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (!(typeof data9[i2] == "number")) {
            const err22 = { instancePath: instancePath + "/bbox/" + i2, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
      } else {
        const err23 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err23];
        } else {
          vErrors.push(err23);
        }
        errors++;
      }
    }
  } else {
    const err24 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err24];
    } else {
      vErrors.push(err24);
    }
    errors++;
  }
  validate29.errors = vErrors;
  return errors === 0;
}
function validate27(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.rect === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "rect" }, message: "must have required property 'rect'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.scale === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "scale" }, message: "must have required property 'scale'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.rect !== void 0) {
      let data0 = data.rect;
      if (Array.isArray(data0)) {
        if (data0.length > 4) {
          const err2 = { instancePath: instancePath + "/rect", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        if (data0.length < 4) {
          const err3 = { instancePath: instancePath + "/rect", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
        const len0 = data0.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!(typeof data0[i0] == "number")) {
            const err4 = { instancePath: instancePath + "/rect/" + i0, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      } else {
        const err5 = { instancePath: instancePath + "/rect", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.scale !== void 0) {
      if (!validate19(data.scale, { instancePath: instancePath + "/scale", parentData: data, parentDataProperty: "scale", rootData })) {
        vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== void 0) {
      if (typeof data.name !== "string") {
        const err6 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.view_id !== void 0) {
      if (typeof data.view_id !== "string") {
        const err7 = { instancePath: instancePath + "/view_id", schemaPath: "#/properties/view_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.pdf_from_model !== void 0) {
      let data5 = data.pdf_from_model;
      if (Array.isArray(data5)) {
        if (data5.length > 6) {
          const err8 = { instancePath: instancePath + "/pdf_from_model", schemaPath: "#/definitions/AffineMatrix2D/maxItems", keyword: "maxItems", params: { limit: 6 }, message: "must NOT have more than 6 items" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data5.length < 6) {
          const err9 = { instancePath: instancePath + "/pdf_from_model", schemaPath: "#/definitions/AffineMatrix2D/minItems", keyword: "minItems", params: { limit: 6 }, message: "must NOT have fewer than 6 items" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
        const len1 = data5.length;
        for (let i1 = 0; i1 < len1; i1++) {
          if (!(typeof data5[i1] == "number")) {
            const err10 = { instancePath: instancePath + "/pdf_from_model/" + i1, schemaPath: "#/definitions/AffineMatrix2D/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
      } else {
        const err11 = { instancePath: instancePath + "/pdf_from_model", schemaPath: "#/definitions/AffineMatrix2D/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.model_unit !== void 0) {
      if (typeof data.model_unit !== "string") {
        const err12 = { instancePath: instancePath + "/model_unit", schemaPath: "#/properties/model_unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.refs !== void 0) {
      let data8 = data.refs;
      if (Array.isArray(data8)) {
        const len2 = data8.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (!validate29(data8[i2], { instancePath: instancePath + "/refs/" + i2, parentData: data8, parentDataProperty: i2, rootData })) {
            vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err13 = { instancePath: instancePath + "/refs", schemaPath: "#/properties/refs/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    if (data.primary_view_id !== void 0) {
      let data10 = data.primary_view_id;
      if (typeof data10 === "string") {
        if (func2(data10) < 1) {
          const err14 = { instancePath: instancePath + "/primary_view_id", schemaPath: "#/properties/primary_view_id/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
      } else {
        const err15 = { instancePath: instancePath + "/primary_view_id", schemaPath: "#/properties/primary_view_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err15];
        } else {
          vErrors.push(err15);
        }
        errors++;
      }
    }
  } else {
    const err16 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err16];
    } else {
      vErrors.push(err16);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs1 = errors;
  const _errs2 = errors;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    let missing0;
    if (data.type === void 0 && (missing0 = "type")) {
      const err0 = {};
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  }
  var valid0 = _errs2 === errors;
  if (valid0) {
    const err1 = { instancePath, schemaPath: "#/not", keyword: "not", params: {}, message: "must NOT be valid" };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.geometry !== void 0) {
      if (!validate24(data.geometry, { instancePath: instancePath + "/geometry", parentData: data, parentDataProperty: "geometry", rootData })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.default !== void 0) {
      if (!validate19(data.default, { instancePath: instancePath + "/default", parentData: data, parentDataProperty: "default", rootData })) {
        vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
        errors = vErrors.length;
      }
    }
    if (data.viewports !== void 0) {
      let data2 = data.viewports;
      if (Array.isArray(data2)) {
        const len0 = data2.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate27(data2[i0], { instancePath: instancePath + "/viewports/" + i0, parentData: data2, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err2 = { instancePath: instancePath + "/viewports", schemaPath: "#/properties/viewports/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    if (data.unresolved !== void 0) {
      let data4 = data.unresolved;
      if (!(typeof data4 == "number" && (!(data4 % 1) && !isNaN(data4)))) {
        const err3 = { instancePath: instancePath + "/unresolved", schemaPath: "#/properties/unresolved/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
      if (typeof data4 == "number") {
        if (data4 < 0 || isNaN(data4)) {
          const err4 = { instancePath: instancePath + "/unresolved", schemaPath: "#/properties/unresolved/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err4];
          } else {
            vErrors.push(err4);
          }
          errors++;
        }
      }
    }
    if (data.sheet_number !== void 0) {
      if (typeof data.sheet_number !== "string") {
        const err5 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/properties/sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
  } else {
    const err6 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  }
  validate23.errors = vErrors;
  return errors === 0;
}
function validate18(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (!validate19(data, { instancePath, parentData, parentDataProperty, rootData })) {
    vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (!validate23(data, { instancePath, parentData, parentDataProperty, rootData })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
  }
  if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate18.errors = vErrors;
  return errors === 0;
}
function validate17(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.pages === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "pages" }, message: "must have required property 'pages'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err2 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
      } else {
        const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.pages !== void 0) {
      let data1 = data.pages;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        for (const key0 in data1) {
          if (!validate18(data1[key0], { instancePath: instancePath + "/pages/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: data1, parentDataProperty: key0, rootData })) {
            vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err4 = { instancePath: instancePath + "/pages", schemaPath: "#/properties/pages/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data3 = data.meta;
      if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
        if (data3.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data3.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data3.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data3.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data3.project_id !== void 0) {
          if (typeof data3.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data3.document_id !== void 0) {
          if (typeof data3.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data3.exported_at !== void 0) {
          if (typeof data3.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data3.producer !== void 0) {
          if (typeof data3.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data3.authority !== void 0) {
          if (typeof data3.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
  } else {
    const err15 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
  }
  validate17.errors = vErrors;
  return errors === 0;
}
var LevelsDocument = validate34;
function validate35(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.id === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.name === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "name" }, message: "must have required property 'name'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.elevation === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "elevation" }, message: "must have required property 'elevation'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.id !== void 0) {
      if (typeof data.id !== "string") {
        const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.name !== void 0) {
      if (typeof data.name !== "string") {
        const err4 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.elevation !== void 0) {
      let data2 = data.elevation;
      if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
        if (data2.value === void 0) {
          const err5 = { instancePath: instancePath + "/elevation", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data2.unit === void 0) {
          const err6 = { instancePath: instancePath + "/elevation", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data2.value !== void 0) {
          if (!(typeof data2.value == "number")) {
            const err7 = { instancePath: instancePath + "/elevation/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data2.unit !== void 0) {
          if (typeof data2.unit !== "string") {
            const err8 = { instancePath: instancePath + "/elevation/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
      } else {
        const err9 = { instancePath: instancePath + "/elevation", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
  } else {
    const err10 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate35.errors = vErrors;
  return errors === 0;
}
function validate34(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.levels === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "levels" }, message: "must have required property 'levels'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err2 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
      } else {
        const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.levels !== void 0) {
      let data1 = data.levels;
      if (Array.isArray(data1)) {
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate35(data1[i0], { instancePath: instancePath + "/levels/" + i0, parentData: data1, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err4 = { instancePath: instancePath + "/levels", schemaPath: "#/properties/levels/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data3 = data.meta;
      if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
        if (data3.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data3.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data3.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data3.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data3.project_id !== void 0) {
          if (typeof data3.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data3.document_id !== void 0) {
          if (typeof data3.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data3.exported_at !== void 0) {
          if (typeof data3.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data3.producer !== void 0) {
          if (typeof data3.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data3.authority !== void 0) {
          if (typeof data3.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
  } else {
    const err15 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
  }
  validate34.errors = vErrors;
  return errors === 0;
}
var TitleblockDocument = validate37;
var schema62 = { "type": ["string", "null"] };
var schema68 = { "type": ["number", "null"] };
function validate40(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.date !== void 0) {
      let data0 = data.date;
      if (typeof data0 !== "string" && data0 !== null) {
        const err0 = { instancePath: instancePath + "/date", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.description !== void 0) {
      let data1 = data.description;
      if (typeof data1 !== "string" && data1 !== null) {
        const err1 = { instancePath: instancePath + "/description", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
  } else {
    const err2 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate40.errors = vErrors;
  return errors === 0;
}
function validate39(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.project_name !== void 0) {
      let data0 = data.project_name;
      if (typeof data0 !== "string" && data0 !== null) {
        const err0 = { instancePath: instancePath + "/project_name", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.project_address !== void 0) {
      let data1 = data.project_address;
      if (typeof data1 !== "string" && data1 !== null) {
        const err1 = { instancePath: instancePath + "/project_address", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    if (data.sheet_title !== void 0) {
      let data2 = data.sheet_title;
      if (typeof data2 !== "string" && data2 !== null) {
        const err2 = { instancePath: instancePath + "/sheet_title", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    if (data.sheet_number !== void 0) {
      let data3 = data.sheet_number;
      if (typeof data3 !== "string" && data3 !== null) {
        const err3 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.scale !== void 0) {
      let data4 = data.scale;
      if (typeof data4 !== "string" && data4 !== null) {
        const err4 = { instancePath: instancePath + "/scale", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.date !== void 0) {
      let data5 = data.date;
      if (typeof data5 !== "string" && data5 !== null) {
        const err5 = { instancePath: instancePath + "/date", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.north_deg !== void 0) {
      let data6 = data.north_deg;
      if (!(typeof data6 == "number") && data6 !== null) {
        const err6 = { instancePath: instancePath + "/north_deg", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.firm !== void 0) {
      let data7 = data.firm;
      if (typeof data7 !== "string" && data7 !== null) {
        const err7 = { instancePath: instancePath + "/firm", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.drawn_by !== void 0) {
      let data8 = data.drawn_by;
      if (typeof data8 !== "string" && data8 !== null) {
        const err8 = { instancePath: instancePath + "/drawn_by", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.revisions !== void 0) {
      let data9 = data.revisions;
      if (Array.isArray(data9)) {
        const len0 = data9.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate40(data9[i0], { instancePath: instancePath + "/revisions/" + i0, parentData: data9, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err9 = { instancePath: instancePath + "/revisions", schemaPath: "#/properties/revisions/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
  } else {
    const err10 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate39.errors = vErrors;
  return errors === 0;
}
var schema81 = { "type": ["string", "number", "null"] };
function validate44(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.front !== void 0) {
      let data0 = data.front;
      if (typeof data0 !== "string" && !(typeof data0 == "number") && data0 !== null) {
        const err0 = { instancePath: instancePath + "/front", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.side !== void 0) {
      let data1 = data.side;
      if (typeof data1 !== "string" && !(typeof data1 == "number") && data1 !== null) {
        const err1 = { instancePath: instancePath + "/side", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    if (data.rear !== void 0) {
      let data2 = data.rear;
      if (typeof data2 !== "string" && !(typeof data2 == "number") && data2 !== null) {
        const err2 = { instancePath: instancePath + "/rear", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
  } else {
    const err3 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate44.errors = vErrors;
  return errors === 0;
}
function validate43(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.district !== void 0) {
      let data0 = data.district;
      if (typeof data0 !== "string" && data0 !== null) {
        const err0 = { instancePath: instancePath + "/district", schemaPath: "#/definitions/NullableString/type", keyword: "type", params: { type: schema62.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.lot_area_sf !== void 0) {
      let data1 = data.lot_area_sf;
      if (!(typeof data1 == "number") && data1 !== null) {
        const err1 = { instancePath: instancePath + "/lot_area_sf", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    if (data.far_allowed !== void 0) {
      let data2 = data.far_allowed;
      if (!(typeof data2 == "number") && data2 !== null) {
        const err2 = { instancePath: instancePath + "/far_allowed", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    if (data.far_proposed !== void 0) {
      let data3 = data.far_proposed;
      if (!(typeof data3 == "number") && data3 !== null) {
        const err3 = { instancePath: instancePath + "/far_proposed", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.height_allowed_ft !== void 0) {
      let data4 = data.height_allowed_ft;
      if (!(typeof data4 == "number") && data4 !== null) {
        const err4 = { instancePath: instancePath + "/height_allowed_ft", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.height_proposed_ft !== void 0) {
      let data5 = data.height_proposed_ft;
      if (!(typeof data5 == "number") && data5 !== null) {
        const err5 = { instancePath: instancePath + "/height_proposed_ft", schemaPath: "#/definitions/NullableNumber/type", keyword: "type", params: { type: schema68.type }, message: "must be number,null" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.coverage_allowed !== void 0) {
      let data6 = data.coverage_allowed;
      if (typeof data6 !== "string" && !(typeof data6 == "number") && data6 !== null) {
        const err6 = { instancePath: instancePath + "/coverage_allowed", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.coverage_proposed !== void 0) {
      let data7 = data.coverage_proposed;
      if (typeof data7 !== "string" && !(typeof data7 == "number") && data7 !== null) {
        const err7 = { instancePath: instancePath + "/coverage_proposed", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.setbacks !== void 0) {
      if (!validate44(data.setbacks, { instancePath: instancePath + "/setbacks", parentData: data, parentDataProperty: "setbacks", rootData })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.parking_required !== void 0) {
      let data9 = data.parking_required;
      if (typeof data9 !== "string" && !(typeof data9 == "number") && data9 !== null) {
        const err8 = { instancePath: instancePath + "/parking_required", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.uses !== void 0) {
      let data10 = data.uses;
      if (Array.isArray(data10)) {
        const len0 = data10.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (typeof data10[i0] !== "string") {
            const err9 = { instancePath: instancePath + "/uses/" + i0, schemaPath: "#/properties/uses/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
      } else {
        const err10 = { instancePath: instancePath + "/uses", schemaPath: "#/properties/uses/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
  } else {
    const err11 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err11];
    } else {
      vErrors.push(err11);
    }
    errors++;
  }
  validate43.errors = vErrors;
  return errors === 0;
}
function validate47(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.label === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "label" }, message: "must have required property 'label'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.unit === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.label !== void 0) {
      if (typeof data.label !== "string") {
        const err2 = { instancePath: instancePath + "/label", schemaPath: "#/properties/label/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    if (data.value !== void 0) {
      let data1 = data.value;
      if (typeof data1 !== "string" && !(typeof data1 == "number") && data1 !== null) {
        const err3 = { instancePath: instancePath + "/value", schemaPath: "#/definitions/StringNumberOrNull/type", keyword: "type", params: { type: schema81.type }, message: "must be string,number,null" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.unit !== void 0) {
      if (typeof data.unit !== "string") {
        const err4 = { instancePath: instancePath + "/unit", schemaPath: "#/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
  } else {
    const err5 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
  }
  validate47.errors = vErrors;
  return errors === 0;
}
function validate38(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.page === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.page !== void 0) {
      let data0 = data.page;
      if (!(typeof data0 == "number" && (!(data0 % 1) && !isNaN(data0)))) {
        const err1 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      if (typeof data0 == "number") {
        if (data0 < 1 || isNaN(data0)) {
          const err2 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
      }
    }
    if (data.sheet_number !== void 0) {
      if (typeof data.sheet_number !== "string") {
        const err3 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/properties/sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.sheet_name !== void 0) {
      if (typeof data.sheet_name !== "string") {
        const err4 = { instancePath: instancePath + "/sheet_name", schemaPath: "#/properties/sheet_name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.project_name !== void 0) {
      if (typeof data.project_name !== "string") {
        const err5 = { instancePath: instancePath + "/project_name", schemaPath: "#/properties/project_name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.project_number !== void 0) {
      if (typeof data.project_number !== "string") {
        const err6 = { instancePath: instancePath + "/project_number", schemaPath: "#/properties/project_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.date !== void 0) {
      if (typeof data.date !== "string") {
        const err7 = { instancePath: instancePath + "/date", schemaPath: "#/properties/date/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.scale !== void 0) {
      if (typeof data.scale !== "string") {
        const err8 = { instancePath: instancePath + "/scale", schemaPath: "#/properties/scale/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.drawn_by !== void 0) {
      if (typeof data.drawn_by !== "string") {
        const err9 = { instancePath: instancePath + "/drawn_by", schemaPath: "#/properties/drawn_by/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.checked_by !== void 0) {
      if (typeof data.checked_by !== "string") {
        const err10 = { instancePath: instancePath + "/checked_by", schemaPath: "#/properties/checked_by/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.revision !== void 0) {
      if (typeof data.revision !== "string") {
        const err11 = { instancePath: instancePath + "/revision", schemaPath: "#/properties/revision/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.titleblock !== void 0) {
      if (!validate39(data.titleblock, { instancePath: instancePath + "/titleblock", parentData: data, parentDataProperty: "titleblock", rootData })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.zoning_data_block !== void 0) {
      if (!validate43(data.zoning_data_block, { instancePath: instancePath + "/zoning_data_block", parentData: data, parentDataProperty: "zoning_data_block", rootData })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.area_tabulation !== void 0) {
      let data12 = data.area_tabulation;
      if (Array.isArray(data12)) {
        const len0 = data12.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate47(data12[i0], { instancePath: instancePath + "/area_tabulation/" + i0, parentData: data12, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err12 = { instancePath: instancePath + "/area_tabulation", schemaPath: "#/properties/area_tabulation/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.legend !== void 0) {
      let data14 = data.legend;
      if (Array.isArray(data14)) {
        const len1 = data14.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data15 = data14[i1];
          const _errs31 = errors;
          let valid6 = false;
          const _errs32 = errors;
          if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
            if (data15.symbol === void 0) {
              const err13 = { instancePath: instancePath + "/legend/" + i1, schemaPath: "#/definitions/SheetLegendEntry/anyOf/0/required", keyword: "required", params: { missingProperty: "symbol" }, message: "must have required property 'symbol'" };
              if (vErrors === null) {
                vErrors = [err13];
              } else {
                vErrors.push(err13);
              }
              errors++;
            }
          }
          var _valid0 = _errs32 === errors;
          valid6 = valid6 || _valid0;
          if (!valid6) {
            const _errs33 = errors;
            if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
              if (data15.line_type === void 0) {
                const err14 = { instancePath: instancePath + "/legend/" + i1, schemaPath: "#/definitions/SheetLegendEntry/anyOf/1/required", keyword: "required", params: { missingProperty: "line_type" }, message: "must have required property 'line_type'" };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
            }
            var _valid0 = _errs33 === errors;
            valid6 = valid6 || _valid0;
          }
          if (!valid6) {
            const err15 = { instancePath: instancePath + "/legend/" + i1, schemaPath: "#/definitions/SheetLegendEntry/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          } else {
            errors = _errs31;
            if (vErrors !== null) {
              if (_errs31) {
                vErrors.length = _errs31;
              } else {
                vErrors = null;
              }
            }
          }
          if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
            if (data15.meaning === void 0) {
              const err16 = { instancePath: instancePath + "/legend/" + i1, schemaPath: "#/definitions/SheetLegendEntry/required", keyword: "required", params: { missingProperty: "meaning" }, message: "must have required property 'meaning'" };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
            if (data15.symbol !== void 0) {
              if (typeof data15.symbol !== "string") {
                const err17 = { instancePath: instancePath + "/legend/" + i1 + "/symbol", schemaPath: "#/definitions/SheetLegendEntry/properties/symbol/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err17];
                } else {
                  vErrors.push(err17);
                }
                errors++;
              }
            }
            if (data15.line_type !== void 0) {
              if (typeof data15.line_type !== "string") {
                const err18 = { instancePath: instancePath + "/legend/" + i1 + "/line_type", schemaPath: "#/definitions/SheetLegendEntry/properties/line_type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err18];
                } else {
                  vErrors.push(err18);
                }
                errors++;
              }
            }
            if (data15.meaning !== void 0) {
              if (typeof data15.meaning !== "string") {
                const err19 = { instancePath: instancePath + "/legend/" + i1 + "/meaning", schemaPath: "#/definitions/SheetLegendEntry/properties/meaning/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err19];
                } else {
                  vErrors.push(err19);
                }
                errors++;
              }
            }
          } else {
            const err20 = { instancePath: instancePath + "/legend/" + i1, schemaPath: "#/definitions/SheetLegendEntry/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
      } else {
        const err21 = { instancePath: instancePath + "/legend", schemaPath: "#/properties/legend/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err21];
        } else {
          vErrors.push(err21);
        }
        errors++;
      }
    }
    if (data.notes !== void 0) {
      let data19 = data.notes;
      if (Array.isArray(data19)) {
        const len2 = data19.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (typeof data19[i2] !== "string") {
            const err22 = { instancePath: instancePath + "/notes/" + i2, schemaPath: "#/properties/notes/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
      } else {
        const err23 = { instancePath: instancePath + "/notes", schemaPath: "#/properties/notes/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err23];
        } else {
          vErrors.push(err23);
        }
        errors++;
      }
    }
  } else {
    const err24 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err24];
    } else {
      vErrors.push(err24);
    }
    errors++;
  }
  validate38.errors = vErrors;
  return errors === 0;
}
function validate37(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.sheets === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "sheets" }, message: "must have required property 'sheets'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err2 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
      } else {
        const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.sheets !== void 0) {
      let data1 = data.sheets;
      if (Array.isArray(data1)) {
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate38(data1[i0], { instancePath: instancePath + "/sheets/" + i0, parentData: data1, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err4 = { instancePath: instancePath + "/sheets", schemaPath: "#/properties/sheets/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data3 = data.meta;
      if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
        if (data3.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data3.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data3.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data3.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data3.project_id !== void 0) {
          if (typeof data3.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data3.document_id !== void 0) {
          if (typeof data3.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data3.exported_at !== void 0) {
          if (typeof data3.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data3.producer !== void 0) {
          if (typeof data3.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data3.authority !== void 0) {
          if (typeof data3.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
  } else {
    const err15 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
  }
  validate37.errors = vErrors;
  return errors === 0;
}
var AnnotationsDocument = validate50;
var schema95 = { "type": "object", "required": ["id", "page", "type", "author", "created_at"], "properties": { "id": { "type": "string" }, "page": { "type": "integer", "minimum": 1 }, "type": { "$ref": "#/definitions/AnnotationType" }, "points": { "type": "array", "items": { "$ref": "#/definitions/Point2D" }, "description": "Vertices for polygon, polyline, arrow, callout." }, "bbox": { "$ref": "#/definitions/BBox" }, "label": { "type": "string" }, "author": { "$ref": "#/definitions/AnnotationAuthor" }, "created_at": { "type": "string", "description": "ISO 8601 datetime." }, "element_ids": { "type": "array", "items": { "type": "string" }, "description": "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation." }, "label_ref": { "type": ["string", "null"], "description": "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred." }, "group_id": { "type": "string", "description": "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)." }, "layer_id": { "type": "string", "description": "Explicit markup-layer membership referencing a MarkupLayer.id; baking maps this to the annotation's /OC entry." }, "style": { "$ref": "#/definitions/AnnotationStyle" }, "measurement": { "type": "object", "properties": { "area": { "$ref": "#/definitions/Quantity" }, "perimeter": { "$ref": "#/definitions/Quantity" }, "length": { "$ref": "#/definitions/Quantity" } } }, "rev": { "type": "integer", "minimum": 1, "description": "Monotonic per-markup revision; every mutation increments it by exactly 1. Absent on pre-v1.11 documents (treat as 1)." }, "status": { "$ref": "#/definitions/ReviewStatus" }, "status_history": { "type": "array", "items": { "$ref": "#/definitions/StatusHistoryEntry" }, "description": "Append-only audit trail of status transitions (the ISO 32000 reply-chain flattened)." }, "in_reply_to": { "type": "string", "description": "Id of the annotation this one replies to (e.g. a drafter's proposal replying to a human markup)." }, "delta": { "$ref": "#/definitions/MarkupDelta" } } };
var schema96 = { "type": "string", "description": "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).", "enum": ["polygon", "polyline", "rectangle", "circle", "text", "arrow", "callout", "cloud", "stamp", "highlight", "freehand", "count", "dimension", "tag", "detail", "other"] };
var schema99 = { "type": "object", "required": ["id", "display", "type"], "properties": { "id": { "type": "string" }, "display": { "type": "string" }, "type": { "type": "string", "enum": ["human", "agent"] } } };
var schema104 = { "type": "string", "description": "Markup review status. Legal transitions are defined by packages/core/src/markups/reviewStatus.ts (open -> grounded -> proposed -> accepted -> applying -> resolved -> restored -> applying (reapply); proposed -> rejected; any step may go to needs-human).", "enum": ["open", "grounded", "proposed", "accepted", "rejected", "applying", "resolved", "restored", "needs-human"] };
function validate52(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.status === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "status" }, message: "must have required property 'status'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.by === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "by" }, message: "must have required property 'by'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.at === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "at" }, message: "must have required property 'at'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.status !== void 0) {
      let data0 = data.status;
      if (typeof data0 !== "string") {
        const err3 = { instancePath: instancePath + "/status", schemaPath: "#/definitions/ReviewStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
      if (!(data0 === "open" || data0 === "grounded" || data0 === "proposed" || data0 === "accepted" || data0 === "rejected" || data0 === "applying" || data0 === "resolved" || data0 === "restored" || data0 === "needs-human")) {
        const err4 = { instancePath: instancePath + "/status", schemaPath: "#/definitions/ReviewStatus/enum", keyword: "enum", params: { allowedValues: schema104.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.by !== void 0) {
      let data1 = data.by;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        if (data1.id === void 0) {
          const err5 = { instancePath: instancePath + "/by", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data1.display === void 0) {
          const err6 = { instancePath: instancePath + "/by", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "display" }, message: "must have required property 'display'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data1.type === void 0) {
          const err7 = { instancePath: instancePath + "/by", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "type" }, message: "must have required property 'type'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data1.id !== void 0) {
          if (typeof data1.id !== "string") {
            const err8 = { instancePath: instancePath + "/by/id", schemaPath: "#/definitions/AnnotationAuthor/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
        if (data1.display !== void 0) {
          if (typeof data1.display !== "string") {
            const err9 = { instancePath: instancePath + "/by/display", schemaPath: "#/definitions/AnnotationAuthor/properties/display/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data1.type !== void 0) {
          let data4 = data1.type;
          if (typeof data4 !== "string") {
            const err10 = { instancePath: instancePath + "/by/type", schemaPath: "#/definitions/AnnotationAuthor/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
          if (!(data4 === "human" || data4 === "agent")) {
            const err11 = { instancePath: instancePath + "/by/type", schemaPath: "#/definitions/AnnotationAuthor/properties/type/enum", keyword: "enum", params: { allowedValues: schema99.properties.type.enum }, message: "must be equal to one of the allowed values" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
      } else {
        const err12 = { instancePath: instancePath + "/by", schemaPath: "#/definitions/AnnotationAuthor/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.at !== void 0) {
      if (typeof data.at !== "string") {
        const err13 = { instancePath: instancePath + "/at", schemaPath: "#/properties/at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
  } else {
    const err14 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
  }
  validate52.errors = vErrors;
  return errors === 0;
}
function validate51(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.id === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.page === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.type === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "type" }, message: "must have required property 'type'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.author === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "author" }, message: "must have required property 'author'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.created_at === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "created_at" }, message: "must have required property 'created_at'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.id !== void 0) {
      if (typeof data.id !== "string") {
        const err5 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.page !== void 0) {
      let data1 = data.page;
      if (!(typeof data1 == "number" && (!(data1 % 1) && !isNaN(data1)))) {
        const err6 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
      if (typeof data1 == "number") {
        if (data1 < 1 || isNaN(data1)) {
          const err7 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
      }
    }
    if (data.type !== void 0) {
      let data2 = data.type;
      if (typeof data2 !== "string") {
        const err8 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/AnnotationType/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
      if (!(data2 === "polygon" || data2 === "polyline" || data2 === "rectangle" || data2 === "circle" || data2 === "text" || data2 === "arrow" || data2 === "callout" || data2 === "cloud" || data2 === "stamp" || data2 === "highlight" || data2 === "freehand" || data2 === "count" || data2 === "dimension" || data2 === "tag" || data2 === "detail" || data2 === "other")) {
        const err9 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/AnnotationType/enum", keyword: "enum", params: { allowedValues: schema96.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.points !== void 0) {
      let data3 = data.points;
      if (Array.isArray(data3)) {
        const len0 = data3.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data4 = data3[i0];
          if (Array.isArray(data4)) {
            if (data4.length > 2) {
              const err10 = { instancePath: instancePath + "/points/" + i0, schemaPath: "#/definitions/Point2D/maxItems", keyword: "maxItems", params: { limit: 2 }, message: "must NOT have more than 2 items" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            }
            if (data4.length < 2) {
              const err11 = { instancePath: instancePath + "/points/" + i0, schemaPath: "#/definitions/Point2D/minItems", keyword: "minItems", params: { limit: 2 }, message: "must NOT have fewer than 2 items" };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
            const len1 = data4.length;
            for (let i1 = 0; i1 < len1; i1++) {
              if (!(typeof data4[i1] == "number")) {
                const err12 = { instancePath: instancePath + "/points/" + i0 + "/" + i1, schemaPath: "#/definitions/Point2D/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
            }
          } else {
            const err13 = { instancePath: instancePath + "/points/" + i0, schemaPath: "#/definitions/Point2D/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/points", schemaPath: "#/properties/points/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.bbox !== void 0) {
      let data6 = data.bbox;
      if (Array.isArray(data6)) {
        if (data6.length > 4) {
          const err15 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err15];
          } else {
            vErrors.push(err15);
          }
          errors++;
        }
        if (data6.length < 4) {
          const err16 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err16];
          } else {
            vErrors.push(err16);
          }
          errors++;
        }
        const len2 = data6.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (!(typeof data6[i2] == "number")) {
            const err17 = { instancePath: instancePath + "/bbox/" + i2, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err17];
            } else {
              vErrors.push(err17);
            }
            errors++;
          }
        }
      } else {
        const err18 = { instancePath: instancePath + "/bbox", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err18];
        } else {
          vErrors.push(err18);
        }
        errors++;
      }
    }
    if (data.label !== void 0) {
      if (typeof data.label !== "string") {
        const err19 = { instancePath: instancePath + "/label", schemaPath: "#/properties/label/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.author !== void 0) {
      let data9 = data.author;
      if (data9 && typeof data9 == "object" && !Array.isArray(data9)) {
        if (data9.id === void 0) {
          const err20 = { instancePath: instancePath + "/author", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
          if (vErrors === null) {
            vErrors = [err20];
          } else {
            vErrors.push(err20);
          }
          errors++;
        }
        if (data9.display === void 0) {
          const err21 = { instancePath: instancePath + "/author", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "display" }, message: "must have required property 'display'" };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
        }
        if (data9.type === void 0) {
          const err22 = { instancePath: instancePath + "/author", schemaPath: "#/definitions/AnnotationAuthor/required", keyword: "required", params: { missingProperty: "type" }, message: "must have required property 'type'" };
          if (vErrors === null) {
            vErrors = [err22];
          } else {
            vErrors.push(err22);
          }
          errors++;
        }
        if (data9.id !== void 0) {
          if (typeof data9.id !== "string") {
            const err23 = { instancePath: instancePath + "/author/id", schemaPath: "#/definitions/AnnotationAuthor/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err23];
            } else {
              vErrors.push(err23);
            }
            errors++;
          }
        }
        if (data9.display !== void 0) {
          if (typeof data9.display !== "string") {
            const err24 = { instancePath: instancePath + "/author/display", schemaPath: "#/definitions/AnnotationAuthor/properties/display/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err24];
            } else {
              vErrors.push(err24);
            }
            errors++;
          }
        }
        if (data9.type !== void 0) {
          let data12 = data9.type;
          if (typeof data12 !== "string") {
            const err25 = { instancePath: instancePath + "/author/type", schemaPath: "#/definitions/AnnotationAuthor/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
          if (!(data12 === "human" || data12 === "agent")) {
            const err26 = { instancePath: instancePath + "/author/type", schemaPath: "#/definitions/AnnotationAuthor/properties/type/enum", keyword: "enum", params: { allowedValues: schema99.properties.type.enum }, message: "must be equal to one of the allowed values" };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          }
        }
      } else {
        const err27 = { instancePath: instancePath + "/author", schemaPath: "#/definitions/AnnotationAuthor/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err27];
        } else {
          vErrors.push(err27);
        }
        errors++;
      }
    }
    if (data.created_at !== void 0) {
      if (typeof data.created_at !== "string") {
        const err28 = { instancePath: instancePath + "/created_at", schemaPath: "#/properties/created_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err28];
        } else {
          vErrors.push(err28);
        }
        errors++;
      }
    }
    if (data.element_ids !== void 0) {
      let data14 = data.element_ids;
      if (Array.isArray(data14)) {
        const len3 = data14.length;
        for (let i3 = 0; i3 < len3; i3++) {
          if (typeof data14[i3] !== "string") {
            const err29 = { instancePath: instancePath + "/element_ids/" + i3, schemaPath: "#/properties/element_ids/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err29];
            } else {
              vErrors.push(err29);
            }
            errors++;
          }
        }
      } else {
        const err30 = { instancePath: instancePath + "/element_ids", schemaPath: "#/properties/element_ids/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
    }
    if (data.label_ref !== void 0) {
      let data16 = data.label_ref;
      if (typeof data16 !== "string" && data16 !== null) {
        const err31 = { instancePath: instancePath + "/label_ref", schemaPath: "#/properties/label_ref/type", keyword: "type", params: { type: schema95.properties.label_ref.type }, message: "must be string,null" };
        if (vErrors === null) {
          vErrors = [err31];
        } else {
          vErrors.push(err31);
        }
        errors++;
      }
    }
    if (data.group_id !== void 0) {
      if (typeof data.group_id !== "string") {
        const err32 = { instancePath: instancePath + "/group_id", schemaPath: "#/properties/group_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err32];
        } else {
          vErrors.push(err32);
        }
        errors++;
      }
    }
    if (data.layer_id !== void 0) {
      if (typeof data.layer_id !== "string") {
        const err33 = { instancePath: instancePath + "/layer_id", schemaPath: "#/properties/layer_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err33];
        } else {
          vErrors.push(err33);
        }
        errors++;
      }
    }
    if (data.style !== void 0) {
      let data19 = data.style;
      if (data19 && typeof data19 == "object" && !Array.isArray(data19)) {
        if (data19.color !== void 0) {
          if (typeof data19.color !== "string") {
            const err34 = { instancePath: instancePath + "/style/color", schemaPath: "#/definitions/AnnotationStyle/properties/color/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err34];
            } else {
              vErrors.push(err34);
            }
            errors++;
          }
        }
        if (data19.fill_color !== void 0) {
          if (typeof data19.fill_color !== "string") {
            const err35 = { instancePath: instancePath + "/style/fill_color", schemaPath: "#/definitions/AnnotationStyle/properties/fill_color/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err35];
            } else {
              vErrors.push(err35);
            }
            errors++;
          }
        }
        if (data19.line_width !== void 0) {
          if (!(typeof data19.line_width == "number")) {
            const err36 = { instancePath: instancePath + "/style/line_width", schemaPath: "#/definitions/AnnotationStyle/properties/line_width/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err36];
            } else {
              vErrors.push(err36);
            }
            errors++;
          }
        }
        if (data19.opacity !== void 0) {
          if (!(typeof data19.opacity == "number")) {
            const err37 = { instancePath: instancePath + "/style/opacity", schemaPath: "#/definitions/AnnotationStyle/properties/opacity/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err37];
            } else {
              vErrors.push(err37);
            }
            errors++;
          }
        }
      } else {
        const err38 = { instancePath: instancePath + "/style", schemaPath: "#/definitions/AnnotationStyle/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err38];
        } else {
          vErrors.push(err38);
        }
        errors++;
      }
    }
    if (data.measurement !== void 0) {
      let data24 = data.measurement;
      if (data24 && typeof data24 == "object" && !Array.isArray(data24)) {
        if (data24.area !== void 0) {
          let data25 = data24.area;
          if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
            if (data25.value === void 0) {
              const err39 = { instancePath: instancePath + "/measurement/area", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err39];
              } else {
                vErrors.push(err39);
              }
              errors++;
            }
            if (data25.unit === void 0) {
              const err40 = { instancePath: instancePath + "/measurement/area", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err40];
              } else {
                vErrors.push(err40);
              }
              errors++;
            }
            if (data25.value !== void 0) {
              if (!(typeof data25.value == "number")) {
                const err41 = { instancePath: instancePath + "/measurement/area/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err41];
                } else {
                  vErrors.push(err41);
                }
                errors++;
              }
            }
            if (data25.unit !== void 0) {
              if (typeof data25.unit !== "string") {
                const err42 = { instancePath: instancePath + "/measurement/area/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err42];
                } else {
                  vErrors.push(err42);
                }
                errors++;
              }
            }
          } else {
            const err43 = { instancePath: instancePath + "/measurement/area", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err43];
            } else {
              vErrors.push(err43);
            }
            errors++;
          }
        }
        if (data24.perimeter !== void 0) {
          let data28 = data24.perimeter;
          if (data28 && typeof data28 == "object" && !Array.isArray(data28)) {
            if (data28.value === void 0) {
              const err44 = { instancePath: instancePath + "/measurement/perimeter", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err44];
              } else {
                vErrors.push(err44);
              }
              errors++;
            }
            if (data28.unit === void 0) {
              const err45 = { instancePath: instancePath + "/measurement/perimeter", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err45];
              } else {
                vErrors.push(err45);
              }
              errors++;
            }
            if (data28.value !== void 0) {
              if (!(typeof data28.value == "number")) {
                const err46 = { instancePath: instancePath + "/measurement/perimeter/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err46];
                } else {
                  vErrors.push(err46);
                }
                errors++;
              }
            }
            if (data28.unit !== void 0) {
              if (typeof data28.unit !== "string") {
                const err47 = { instancePath: instancePath + "/measurement/perimeter/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err47];
                } else {
                  vErrors.push(err47);
                }
                errors++;
              }
            }
          } else {
            const err48 = { instancePath: instancePath + "/measurement/perimeter", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err48];
            } else {
              vErrors.push(err48);
            }
            errors++;
          }
        }
        if (data24.length !== void 0) {
          let data31 = data24.length;
          if (data31 && typeof data31 == "object" && !Array.isArray(data31)) {
            if (data31.value === void 0) {
              const err49 = { instancePath: instancePath + "/measurement/length", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err49];
              } else {
                vErrors.push(err49);
              }
              errors++;
            }
            if (data31.unit === void 0) {
              const err50 = { instancePath: instancePath + "/measurement/length", schemaPath: "#/definitions/Quantity/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
              if (vErrors === null) {
                vErrors = [err50];
              } else {
                vErrors.push(err50);
              }
              errors++;
            }
            if (data31.value !== void 0) {
              if (!(typeof data31.value == "number")) {
                const err51 = { instancePath: instancePath + "/measurement/length/value", schemaPath: "#/definitions/Quantity/properties/value/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err51];
                } else {
                  vErrors.push(err51);
                }
                errors++;
              }
            }
            if (data31.unit !== void 0) {
              if (typeof data31.unit !== "string") {
                const err52 = { instancePath: instancePath + "/measurement/length/unit", schemaPath: "#/definitions/Quantity/properties/unit/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err52];
                } else {
                  vErrors.push(err52);
                }
                errors++;
              }
            }
          } else {
            const err53 = { instancePath: instancePath + "/measurement/length", schemaPath: "#/definitions/Quantity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err53];
            } else {
              vErrors.push(err53);
            }
            errors++;
          }
        }
      } else {
        const err54 = { instancePath: instancePath + "/measurement", schemaPath: "#/properties/measurement/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err54];
        } else {
          vErrors.push(err54);
        }
        errors++;
      }
    }
    if (data.rev !== void 0) {
      let data34 = data.rev;
      if (!(typeof data34 == "number" && (!(data34 % 1) && !isNaN(data34)))) {
        const err55 = { instancePath: instancePath + "/rev", schemaPath: "#/properties/rev/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err55];
        } else {
          vErrors.push(err55);
        }
        errors++;
      }
      if (typeof data34 == "number") {
        if (data34 < 1 || isNaN(data34)) {
          const err56 = { instancePath: instancePath + "/rev", schemaPath: "#/properties/rev/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err56];
          } else {
            vErrors.push(err56);
          }
          errors++;
        }
      }
    }
    if (data.status !== void 0) {
      let data35 = data.status;
      if (typeof data35 !== "string") {
        const err57 = { instancePath: instancePath + "/status", schemaPath: "#/definitions/ReviewStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err57];
        } else {
          vErrors.push(err57);
        }
        errors++;
      }
      if (!(data35 === "open" || data35 === "grounded" || data35 === "proposed" || data35 === "accepted" || data35 === "rejected" || data35 === "applying" || data35 === "resolved" || data35 === "restored" || data35 === "needs-human")) {
        const err58 = { instancePath: instancePath + "/status", schemaPath: "#/definitions/ReviewStatus/enum", keyword: "enum", params: { allowedValues: schema104.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err58];
        } else {
          vErrors.push(err58);
        }
        errors++;
      }
    }
    if (data.status_history !== void 0) {
      let data36 = data.status_history;
      if (Array.isArray(data36)) {
        const len4 = data36.length;
        for (let i4 = 0; i4 < len4; i4++) {
          if (!validate52(data36[i4], { instancePath: instancePath + "/status_history/" + i4, parentData: data36, parentDataProperty: i4, rootData })) {
            vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err59 = { instancePath: instancePath + "/status_history", schemaPath: "#/properties/status_history/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err59];
        } else {
          vErrors.push(err59);
        }
        errors++;
      }
    }
    if (data.in_reply_to !== void 0) {
      if (typeof data.in_reply_to !== "string") {
        const err60 = { instancePath: instancePath + "/in_reply_to", schemaPath: "#/properties/in_reply_to/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err60];
        } else {
          vErrors.push(err60);
        }
        errors++;
      }
    }
    if (data.delta !== void 0) {
      let data39 = data.delta;
      if (data39 && typeof data39 == "object" && !Array.isArray(data39)) {
        if (data39.driver === void 0) {
          const err61 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/required", keyword: "required", params: { missingProperty: "driver" }, message: "must have required property 'driver'" };
          if (vErrors === null) {
            vErrors = [err61];
          } else {
            vErrors.push(err61);
          }
          errors++;
        }
        if (data39.verb === void 0) {
          const err62 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/required", keyword: "required", params: { missingProperty: "verb" }, message: "must have required property 'verb'" };
          if (vErrors === null) {
            vErrors = [err62];
          } else {
            vErrors.push(err62);
          }
          errors++;
        }
        if (data39.args === void 0) {
          const err63 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/required", keyword: "required", params: { missingProperty: "args" }, message: "must have required property 'args'" };
          if (vErrors === null) {
            vErrors = [err63];
          } else {
            vErrors.push(err63);
          }
          errors++;
        }
        if (data39.base_rev === void 0) {
          const err64 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/required", keyword: "required", params: { missingProperty: "base_rev" }, message: "must have required property 'base_rev'" };
          if (vErrors === null) {
            vErrors = [err64];
          } else {
            vErrors.push(err64);
          }
          errors++;
        }
        if (data39.summary === void 0) {
          const err65 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/required", keyword: "required", params: { missingProperty: "summary" }, message: "must have required property 'summary'" };
          if (vErrors === null) {
            vErrors = [err65];
          } else {
            vErrors.push(err65);
          }
          errors++;
        }
        if (data39.driver !== void 0) {
          if (typeof data39.driver !== "string") {
            const err66 = { instancePath: instancePath + "/delta/driver", schemaPath: "#/definitions/MarkupDelta/properties/driver/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err66];
            } else {
              vErrors.push(err66);
            }
            errors++;
          }
        }
        if (data39.verb !== void 0) {
          if (typeof data39.verb !== "string") {
            const err67 = { instancePath: instancePath + "/delta/verb", schemaPath: "#/definitions/MarkupDelta/properties/verb/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err67];
            } else {
              vErrors.push(err67);
            }
            errors++;
          }
        }
        if (data39.args !== void 0) {
          let data42 = data39.args;
          if (!(data42 && typeof data42 == "object" && !Array.isArray(data42))) {
            const err68 = { instancePath: instancePath + "/delta/args", schemaPath: "#/definitions/MarkupDelta/properties/args/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err68];
            } else {
              vErrors.push(err68);
            }
            errors++;
          }
        }
        if (data39.preimage !== void 0) {
          let data43 = data39.preimage;
          if (!(data43 && typeof data43 == "object" && !Array.isArray(data43))) {
            const err69 = { instancePath: instancePath + "/delta/preimage", schemaPath: "#/definitions/MarkupDelta/properties/preimage/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err69];
            } else {
              vErrors.push(err69);
            }
            errors++;
          }
        }
        if (data39.base_rev !== void 0) {
          let data44 = data39.base_rev;
          if (!(typeof data44 == "number" && (!(data44 % 1) && !isNaN(data44)))) {
            const err70 = { instancePath: instancePath + "/delta/base_rev", schemaPath: "#/definitions/MarkupDelta/properties/base_rev/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
            if (vErrors === null) {
              vErrors = [err70];
            } else {
              vErrors.push(err70);
            }
            errors++;
          }
          if (typeof data44 == "number") {
            if (data44 < 1 || isNaN(data44)) {
              const err71 = { instancePath: instancePath + "/delta/base_rev", schemaPath: "#/definitions/MarkupDelta/properties/base_rev/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
              if (vErrors === null) {
                vErrors = [err71];
              } else {
                vErrors.push(err71);
              }
              errors++;
            }
          }
        }
        if (data39.base_package_hash !== void 0) {
          if (typeof data39.base_package_hash !== "string") {
            const err72 = { instancePath: instancePath + "/delta/base_package_hash", schemaPath: "#/definitions/MarkupDelta/properties/base_package_hash/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err72];
            } else {
              vErrors.push(err72);
            }
            errors++;
          }
        }
        if (data39.summary !== void 0) {
          if (typeof data39.summary !== "string") {
            const err73 = { instancePath: instancePath + "/delta/summary", schemaPath: "#/definitions/MarkupDelta/properties/summary/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err73];
            } else {
              vErrors.push(err73);
            }
            errors++;
          }
        }
      } else {
        const err74 = { instancePath: instancePath + "/delta", schemaPath: "#/definitions/MarkupDelta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err74];
        } else {
          vErrors.push(err74);
        }
        errors++;
      }
    }
  } else {
    const err75 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err75];
    } else {
      vErrors.push(err75);
    }
    errors++;
  }
  validate51.errors = vErrors;
  return errors === 0;
}
function validate50(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.requires === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "requires" }, message: "must have required property 'requires'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.coordinate_space === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "coordinate_space" }, message: "must have required property 'coordinate_space'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.annotations === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "annotations" }, message: "must have required property 'annotations'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err4 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err4];
          } else {
            vErrors.push(err4);
          }
          errors++;
        }
      } else {
        const err5 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.requires !== void 0) {
      let data1 = data.requires;
      if (Array.isArray(data1)) {
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (typeof data1[i0] !== "string") {
            const err6 = { instancePath: instancePath + "/requires/" + i0, schemaPath: "#/properties/requires/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        const _errs8 = errors;
        const len1 = data1.length;
        for (let i1 = 0; i1 < len1; i1++) {
          const _errs9 = errors;
          if ("elements.json" !== data1[i1]) {
            const err7 = { instancePath: instancePath + "/requires/" + i1, schemaPath: "#/properties/requires/contains/const", keyword: "const", params: { allowedValue: "elements.json" }, message: "must be equal to constant" };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
          var valid4 = _errs9 === errors;
          if (valid4) {
            break;
          }
        }
        if (!valid4) {
          const err8 = { instancePath: instancePath + "/requires", schemaPath: "#/properties/requires/contains", keyword: "contains", params: { minContains: 1 }, message: "must contain at least 1 valid item(s)" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        } else {
          errors = _errs8;
          if (vErrors !== null) {
            if (_errs8) {
              vErrors.length = _errs8;
            } else {
              vErrors = null;
            }
          }
        }
      } else {
        const err9 = { instancePath: instancePath + "/requires", schemaPath: "#/properties/requires/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.coordinate_space !== void 0) {
      if (typeof data.coordinate_space !== "string") {
        const err10 = { instancePath: instancePath + "/coordinate_space", schemaPath: "#/properties/coordinate_space/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.layers !== void 0) {
      let data5 = data.layers;
      if (Array.isArray(data5)) {
        const len2 = data5.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data6 = data5[i2];
          if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
            if (data6.id === void 0) {
              const err11 = { instancePath: instancePath + "/layers/" + i2, schemaPath: "#/definitions/MarkupLayer/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
            if (data6.name === void 0) {
              const err12 = { instancePath: instancePath + "/layers/" + i2, schemaPath: "#/definitions/MarkupLayer/required", keyword: "required", params: { missingProperty: "name" }, message: "must have required property 'name'" };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
            }
            if (data6.id !== void 0) {
              if (typeof data6.id !== "string") {
                const err13 = { instancePath: instancePath + "/layers/" + i2 + "/id", schemaPath: "#/definitions/MarkupLayer/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err13];
                } else {
                  vErrors.push(err13);
                }
                errors++;
              }
            }
            if (data6.name !== void 0) {
              if (typeof data6.name !== "string") {
                const err14 = { instancePath: instancePath + "/layers/" + i2 + "/name", schemaPath: "#/definitions/MarkupLayer/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
            }
            if (data6.default_visible !== void 0) {
              if (typeof data6.default_visible !== "boolean") {
                const err15 = { instancePath: instancePath + "/layers/" + i2 + "/default_visible", schemaPath: "#/definitions/MarkupLayer/properties/default_visible/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                if (vErrors === null) {
                  vErrors = [err15];
                } else {
                  vErrors.push(err15);
                }
                errors++;
              }
            }
            if (data6.locked !== void 0) {
              if (typeof data6.locked !== "boolean") {
                const err16 = { instancePath: instancePath + "/layers/" + i2 + "/locked", schemaPath: "#/definitions/MarkupLayer/properties/locked/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
                }
                errors++;
              }
            }
          } else {
            const err17 = { instancePath: instancePath + "/layers/" + i2, schemaPath: "#/definitions/MarkupLayer/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err17];
            } else {
              vErrors.push(err17);
            }
            errors++;
          }
        }
      } else {
        const err18 = { instancePath: instancePath + "/layers", schemaPath: "#/properties/layers/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err18];
        } else {
          vErrors.push(err18);
        }
        errors++;
      }
    }
    if (data.annotations !== void 0) {
      let data11 = data.annotations;
      if (Array.isArray(data11)) {
        const len3 = data11.length;
        for (let i3 = 0; i3 < len3; i3++) {
          if (!validate51(data11[i3], { instancePath: instancePath + "/annotations/" + i3, parentData: data11, parentDataProperty: i3, rootData })) {
            vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err19 = { instancePath: instancePath + "/annotations", schemaPath: "#/properties/annotations/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data13 = data.meta;
      if (data13 && typeof data13 == "object" && !Array.isArray(data13)) {
        if (data13.project_id === void 0) {
          const err20 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err20];
          } else {
            vErrors.push(err20);
          }
          errors++;
        }
        if (data13.document_id === void 0) {
          const err21 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
        }
        if (data13.exported_at === void 0) {
          const err22 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err22];
          } else {
            vErrors.push(err22);
          }
          errors++;
        }
        if (data13.producer === void 0) {
          const err23 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err23];
          } else {
            vErrors.push(err23);
          }
          errors++;
        }
        if (data13.project_id !== void 0) {
          if (typeof data13.project_id !== "string") {
            const err24 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err24];
            } else {
              vErrors.push(err24);
            }
            errors++;
          }
        }
        if (data13.document_id !== void 0) {
          if (typeof data13.document_id !== "string") {
            const err25 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
        }
        if (data13.exported_at !== void 0) {
          if (typeof data13.exported_at !== "string") {
            const err26 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          }
        }
        if (data13.producer !== void 0) {
          if (typeof data13.producer !== "string") {
            const err27 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err27];
            } else {
              vErrors.push(err27);
            }
            errors++;
          }
        }
        if (data13.authority !== void 0) {
          if (typeof data13.authority !== "string") {
            const err28 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err28];
            } else {
              vErrors.push(err28);
            }
            errors++;
          }
        }
      } else {
        const err29 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err29];
        } else {
          vErrors.push(err29);
        }
        errors++;
      }
    }
  } else {
    const err30 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err30];
    } else {
      vErrors.push(err30);
    }
    errors++;
  }
  validate50.errors = vErrors;
  return errors === 0;
}
var Model3dDocument = validate55;
var schema113 = { "type": "object", "required": ["glb_ref", "page", "anchor_rect", "camera", "model_center_offset", "unit"], "properties": { "glb_ref": { "type": "string", "description": 'Filename of the embedded glb attachment, e.g. "model.glb".' }, "page": { "type": "integer", "minimum": 1, "description": "1-indexed PDF page the 3D view sits on." }, "anchor_rect": { "$ref": "#/definitions/BBox", "description": "Sheet region in PDF user-space points where the flat poster sits and the live model activates." }, "camera": { "$ref": "#/definitions/Model3dCamera" }, "model_center_offset": { "type": "array", "description": "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.", "items": { "type": "number" }, "minItems": 3, "maxItems": 3 }, "unit": { "const": "m", "description": "Linear unit for camera and model_center_offset." }, "compression": { "type": "string", "enum": ["none", "draco"], "default": "none" } } };
var schema115 = { "type": "object", "description": "Camera framing for a live glTF 3D view, in meters and glTF Y-up. Supports orthographic and perspective projections (mirrors glTF 2.0 camera schema).", "required": ["projection", "eye", "target", "up"], "properties": { "projection": { "type": "string", "enum": ["orthographic", "perspective"] }, "eye": { "type": "array", "description": "Camera position in world space, meters, glTF Y-up.", "items": { "type": "number" }, "minItems": 3, "maxItems": 3 }, "target": { "type": "array", "description": "Point the camera looks at, meters, glTF Y-up.", "items": { "type": "number" }, "minItems": 3, "maxItems": 3 }, "up": { "type": "array", "description": "Camera up vector (unit), glTF Y-up.", "items": { "type": "number" }, "minItems": 3, "maxItems": 3 }, "ortho_half_extents": { "type": "array", "description": "[half-width, half-height] of the orthographic frustum, in meters. Required when projection is orthographic.", "items": { "type": "number" }, "minItems": 2, "maxItems": 2 }, "perspective": { "type": "object", "description": "Perspective projection parameters, mirrors glTF camera.perspective. Required when projection is perspective.", "required": ["yfov"], "properties": { "yfov": { "type": "number", "description": "Vertical field of view in radians.", "exclusiveMinimum": 0 }, "aspectRatio": { "type": "number", "description": "Aspect ratio (width / height).", "exclusiveMinimum": 0 }, "znear": { "type": "number", "description": "Near clipping plane distance in meters.", "exclusiveMinimum": 0 }, "zfar": { "type": "number", "description": "Far clipping plane distance in meters.", "exclusiveMinimum": 0 } } } }, "allOf": [{ "if": { "properties": { "projection": { "const": "orthographic" } }, "required": ["projection"] }, "then": { "required": ["ortho_half_extents"] } }, { "if": { "properties": { "projection": { "const": "perspective" } }, "required": ["projection"] }, "then": { "required": ["perspective"] } }] };
function validate56(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.glb_ref === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "glb_ref" }, message: "must have required property 'glb_ref'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.page === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.anchor_rect === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "anchor_rect" }, message: "must have required property 'anchor_rect'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.camera === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "camera" }, message: "must have required property 'camera'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.model_center_offset === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "model_center_offset" }, message: "must have required property 'model_center_offset'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.unit === void 0) {
      const err5 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "unit" }, message: "must have required property 'unit'" };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.glb_ref !== void 0) {
      if (typeof data.glb_ref !== "string") {
        const err6 = { instancePath: instancePath + "/glb_ref", schemaPath: "#/properties/glb_ref/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.page !== void 0) {
      let data1 = data.page;
      if (!(typeof data1 == "number" && (!(data1 % 1) && !isNaN(data1)))) {
        const err7 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
      if (typeof data1 == "number") {
        if (data1 < 1 || isNaN(data1)) {
          const err8 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
      }
    }
    if (data.anchor_rect !== void 0) {
      let data2 = data.anchor_rect;
      if (Array.isArray(data2)) {
        if (data2.length > 4) {
          const err9 = { instancePath: instancePath + "/anchor_rect", schemaPath: "#/definitions/BBox/maxItems", keyword: "maxItems", params: { limit: 4 }, message: "must NOT have more than 4 items" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
        if (data2.length < 4) {
          const err10 = { instancePath: instancePath + "/anchor_rect", schemaPath: "#/definitions/BBox/minItems", keyword: "minItems", params: { limit: 4 }, message: "must NOT have fewer than 4 items" };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        }
        const len0 = data2.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!(typeof data2[i0] == "number")) {
            const err11 = { instancePath: instancePath + "/anchor_rect/" + i0, schemaPath: "#/definitions/BBox/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
      } else {
        const err12 = { instancePath: instancePath + "/anchor_rect", schemaPath: "#/definitions/BBox/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.camera !== void 0) {
      let data4 = data.camera;
      const _errs14 = errors;
      let valid6 = true;
      const _errs15 = errors;
      if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
        let missing0;
        if (data4.projection === void 0 && (missing0 = "projection")) {
          const err13 = {};
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        } else {
          if (data4.projection !== void 0) {
            if ("orthographic" !== data4.projection) {
              const err14 = {};
              if (vErrors === null) {
                vErrors = [err14];
              } else {
                vErrors.push(err14);
              }
              errors++;
            }
          }
        }
      }
      var _valid0 = _errs15 === errors;
      errors = _errs14;
      if (vErrors !== null) {
        if (_errs14) {
          vErrors.length = _errs14;
        } else {
          vErrors = null;
        }
      }
      if (_valid0) {
        const _errs17 = errors;
        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
          if (data4.ortho_half_extents === void 0) {
            const err15 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/allOf/0/then/required", keyword: "required", params: { missingProperty: "ortho_half_extents" }, message: "must have required property 'ortho_half_extents'" };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
        var _valid0 = _errs17 === errors;
        valid6 = _valid0;
      }
      if (!valid6) {
        const err16 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/allOf/0/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
      const _errs19 = errors;
      let valid8 = true;
      const _errs20 = errors;
      if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
        let missing1;
        if (data4.projection === void 0 && (missing1 = "projection")) {
          const err17 = {};
          if (vErrors === null) {
            vErrors = [err17];
          } else {
            vErrors.push(err17);
          }
          errors++;
        } else {
          if (data4.projection !== void 0) {
            if ("perspective" !== data4.projection) {
              const err18 = {};
              if (vErrors === null) {
                vErrors = [err18];
              } else {
                vErrors.push(err18);
              }
              errors++;
            }
          }
        }
      }
      var _valid1 = _errs20 === errors;
      errors = _errs19;
      if (vErrors !== null) {
        if (_errs19) {
          vErrors.length = _errs19;
        } else {
          vErrors = null;
        }
      }
      if (_valid1) {
        const _errs22 = errors;
        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
          if (data4.perspective === void 0) {
            const err19 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/allOf/1/then/required", keyword: "required", params: { missingProperty: "perspective" }, message: "must have required property 'perspective'" };
            if (vErrors === null) {
              vErrors = [err19];
            } else {
              vErrors.push(err19);
            }
            errors++;
          }
        }
        var _valid1 = _errs22 === errors;
        valid8 = _valid1;
      }
      if (!valid8) {
        const err20 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/allOf/1/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
        if (vErrors === null) {
          vErrors = [err20];
        } else {
          vErrors.push(err20);
        }
        errors++;
      }
      if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
        if (data4.projection === void 0) {
          const err21 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/required", keyword: "required", params: { missingProperty: "projection" }, message: "must have required property 'projection'" };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
        }
        if (data4.eye === void 0) {
          const err22 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/required", keyword: "required", params: { missingProperty: "eye" }, message: "must have required property 'eye'" };
          if (vErrors === null) {
            vErrors = [err22];
          } else {
            vErrors.push(err22);
          }
          errors++;
        }
        if (data4.target === void 0) {
          const err23 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/required", keyword: "required", params: { missingProperty: "target" }, message: "must have required property 'target'" };
          if (vErrors === null) {
            vErrors = [err23];
          } else {
            vErrors.push(err23);
          }
          errors++;
        }
        if (data4.up === void 0) {
          const err24 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/required", keyword: "required", params: { missingProperty: "up" }, message: "must have required property 'up'" };
          if (vErrors === null) {
            vErrors = [err24];
          } else {
            vErrors.push(err24);
          }
          errors++;
        }
        if (data4.projection !== void 0) {
          let data7 = data4.projection;
          if (typeof data7 !== "string") {
            const err25 = { instancePath: instancePath + "/camera/projection", schemaPath: "#/definitions/Model3dCamera/properties/projection/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
          if (!(data7 === "orthographic" || data7 === "perspective")) {
            const err26 = { instancePath: instancePath + "/camera/projection", schemaPath: "#/definitions/Model3dCamera/properties/projection/enum", keyword: "enum", params: { allowedValues: schema115.properties.projection.enum }, message: "must be equal to one of the allowed values" };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          }
        }
        if (data4.eye !== void 0) {
          let data8 = data4.eye;
          if (Array.isArray(data8)) {
            if (data8.length > 3) {
              const err27 = { instancePath: instancePath + "/camera/eye", schemaPath: "#/definitions/Model3dCamera/properties/eye/maxItems", keyword: "maxItems", params: { limit: 3 }, message: "must NOT have more than 3 items" };
              if (vErrors === null) {
                vErrors = [err27];
              } else {
                vErrors.push(err27);
              }
              errors++;
            }
            if (data8.length < 3) {
              const err28 = { instancePath: instancePath + "/camera/eye", schemaPath: "#/definitions/Model3dCamera/properties/eye/minItems", keyword: "minItems", params: { limit: 3 }, message: "must NOT have fewer than 3 items" };
              if (vErrors === null) {
                vErrors = [err28];
              } else {
                vErrors.push(err28);
              }
              errors++;
            }
            const len1 = data8.length;
            for (let i1 = 0; i1 < len1; i1++) {
              if (!(typeof data8[i1] == "number")) {
                const err29 = { instancePath: instancePath + "/camera/eye/" + i1, schemaPath: "#/definitions/Model3dCamera/properties/eye/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err29];
                } else {
                  vErrors.push(err29);
                }
                errors++;
              }
            }
          } else {
            const err30 = { instancePath: instancePath + "/camera/eye", schemaPath: "#/definitions/Model3dCamera/properties/eye/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err30];
            } else {
              vErrors.push(err30);
            }
            errors++;
          }
        }
        if (data4.target !== void 0) {
          let data10 = data4.target;
          if (Array.isArray(data10)) {
            if (data10.length > 3) {
              const err31 = { instancePath: instancePath + "/camera/target", schemaPath: "#/definitions/Model3dCamera/properties/target/maxItems", keyword: "maxItems", params: { limit: 3 }, message: "must NOT have more than 3 items" };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            }
            if (data10.length < 3) {
              const err32 = { instancePath: instancePath + "/camera/target", schemaPath: "#/definitions/Model3dCamera/properties/target/minItems", keyword: "minItems", params: { limit: 3 }, message: "must NOT have fewer than 3 items" };
              if (vErrors === null) {
                vErrors = [err32];
              } else {
                vErrors.push(err32);
              }
              errors++;
            }
            const len2 = data10.length;
            for (let i2 = 0; i2 < len2; i2++) {
              if (!(typeof data10[i2] == "number")) {
                const err33 = { instancePath: instancePath + "/camera/target/" + i2, schemaPath: "#/definitions/Model3dCamera/properties/target/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err33];
                } else {
                  vErrors.push(err33);
                }
                errors++;
              }
            }
          } else {
            const err34 = { instancePath: instancePath + "/camera/target", schemaPath: "#/definitions/Model3dCamera/properties/target/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err34];
            } else {
              vErrors.push(err34);
            }
            errors++;
          }
        }
        if (data4.up !== void 0) {
          let data12 = data4.up;
          if (Array.isArray(data12)) {
            if (data12.length > 3) {
              const err35 = { instancePath: instancePath + "/camera/up", schemaPath: "#/definitions/Model3dCamera/properties/up/maxItems", keyword: "maxItems", params: { limit: 3 }, message: "must NOT have more than 3 items" };
              if (vErrors === null) {
                vErrors = [err35];
              } else {
                vErrors.push(err35);
              }
              errors++;
            }
            if (data12.length < 3) {
              const err36 = { instancePath: instancePath + "/camera/up", schemaPath: "#/definitions/Model3dCamera/properties/up/minItems", keyword: "minItems", params: { limit: 3 }, message: "must NOT have fewer than 3 items" };
              if (vErrors === null) {
                vErrors = [err36];
              } else {
                vErrors.push(err36);
              }
              errors++;
            }
            const len3 = data12.length;
            for (let i3 = 0; i3 < len3; i3++) {
              if (!(typeof data12[i3] == "number")) {
                const err37 = { instancePath: instancePath + "/camera/up/" + i3, schemaPath: "#/definitions/Model3dCamera/properties/up/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err37];
                } else {
                  vErrors.push(err37);
                }
                errors++;
              }
            }
          } else {
            const err38 = { instancePath: instancePath + "/camera/up", schemaPath: "#/definitions/Model3dCamera/properties/up/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err38];
            } else {
              vErrors.push(err38);
            }
            errors++;
          }
        }
        if (data4.ortho_half_extents !== void 0) {
          let data14 = data4.ortho_half_extents;
          if (Array.isArray(data14)) {
            if (data14.length > 2) {
              const err39 = { instancePath: instancePath + "/camera/ortho_half_extents", schemaPath: "#/definitions/Model3dCamera/properties/ortho_half_extents/maxItems", keyword: "maxItems", params: { limit: 2 }, message: "must NOT have more than 2 items" };
              if (vErrors === null) {
                vErrors = [err39];
              } else {
                vErrors.push(err39);
              }
              errors++;
            }
            if (data14.length < 2) {
              const err40 = { instancePath: instancePath + "/camera/ortho_half_extents", schemaPath: "#/definitions/Model3dCamera/properties/ortho_half_extents/minItems", keyword: "minItems", params: { limit: 2 }, message: "must NOT have fewer than 2 items" };
              if (vErrors === null) {
                vErrors = [err40];
              } else {
                vErrors.push(err40);
              }
              errors++;
            }
            const len4 = data14.length;
            for (let i4 = 0; i4 < len4; i4++) {
              if (!(typeof data14[i4] == "number")) {
                const err41 = { instancePath: instancePath + "/camera/ortho_half_extents/" + i4, schemaPath: "#/definitions/Model3dCamera/properties/ortho_half_extents/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err41];
                } else {
                  vErrors.push(err41);
                }
                errors++;
              }
            }
          } else {
            const err42 = { instancePath: instancePath + "/camera/ortho_half_extents", schemaPath: "#/definitions/Model3dCamera/properties/ortho_half_extents/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err42];
            } else {
              vErrors.push(err42);
            }
            errors++;
          }
        }
        if (data4.perspective !== void 0) {
          let data16 = data4.perspective;
          if (data16 && typeof data16 == "object" && !Array.isArray(data16)) {
            if (data16.yfov === void 0) {
              const err43 = { instancePath: instancePath + "/camera/perspective", schemaPath: "#/definitions/Model3dCamera/properties/perspective/required", keyword: "required", params: { missingProperty: "yfov" }, message: "must have required property 'yfov'" };
              if (vErrors === null) {
                vErrors = [err43];
              } else {
                vErrors.push(err43);
              }
              errors++;
            }
            if (data16.yfov !== void 0) {
              let data17 = data16.yfov;
              if (typeof data17 == "number") {
                if (data17 <= 0 || isNaN(data17)) {
                  const err44 = { instancePath: instancePath + "/camera/perspective/yfov", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/yfov/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 0 }, message: "must be > 0" };
                  if (vErrors === null) {
                    vErrors = [err44];
                  } else {
                    vErrors.push(err44);
                  }
                  errors++;
                }
              } else {
                const err45 = { instancePath: instancePath + "/camera/perspective/yfov", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/yfov/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err45];
                } else {
                  vErrors.push(err45);
                }
                errors++;
              }
            }
            if (data16.aspectRatio !== void 0) {
              let data18 = data16.aspectRatio;
              if (typeof data18 == "number") {
                if (data18 <= 0 || isNaN(data18)) {
                  const err46 = { instancePath: instancePath + "/camera/perspective/aspectRatio", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/aspectRatio/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 0 }, message: "must be > 0" };
                  if (vErrors === null) {
                    vErrors = [err46];
                  } else {
                    vErrors.push(err46);
                  }
                  errors++;
                }
              } else {
                const err47 = { instancePath: instancePath + "/camera/perspective/aspectRatio", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/aspectRatio/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err47];
                } else {
                  vErrors.push(err47);
                }
                errors++;
              }
            }
            if (data16.znear !== void 0) {
              let data19 = data16.znear;
              if (typeof data19 == "number") {
                if (data19 <= 0 || isNaN(data19)) {
                  const err48 = { instancePath: instancePath + "/camera/perspective/znear", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/znear/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 0 }, message: "must be > 0" };
                  if (vErrors === null) {
                    vErrors = [err48];
                  } else {
                    vErrors.push(err48);
                  }
                  errors++;
                }
              } else {
                const err49 = { instancePath: instancePath + "/camera/perspective/znear", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/znear/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err49];
                } else {
                  vErrors.push(err49);
                }
                errors++;
              }
            }
            if (data16.zfar !== void 0) {
              let data20 = data16.zfar;
              if (typeof data20 == "number") {
                if (data20 <= 0 || isNaN(data20)) {
                  const err50 = { instancePath: instancePath + "/camera/perspective/zfar", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/zfar/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 0 }, message: "must be > 0" };
                  if (vErrors === null) {
                    vErrors = [err50];
                  } else {
                    vErrors.push(err50);
                  }
                  errors++;
                }
              } else {
                const err51 = { instancePath: instancePath + "/camera/perspective/zfar", schemaPath: "#/definitions/Model3dCamera/properties/perspective/properties/zfar/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                if (vErrors === null) {
                  vErrors = [err51];
                } else {
                  vErrors.push(err51);
                }
                errors++;
              }
            }
          } else {
            const err52 = { instancePath: instancePath + "/camera/perspective", schemaPath: "#/definitions/Model3dCamera/properties/perspective/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err52];
            } else {
              vErrors.push(err52);
            }
            errors++;
          }
        }
      } else {
        const err53 = { instancePath: instancePath + "/camera", schemaPath: "#/definitions/Model3dCamera/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err53];
        } else {
          vErrors.push(err53);
        }
        errors++;
      }
    }
    if (data.model_center_offset !== void 0) {
      let data21 = data.model_center_offset;
      if (Array.isArray(data21)) {
        if (data21.length > 3) {
          const err54 = { instancePath: instancePath + "/model_center_offset", schemaPath: "#/properties/model_center_offset/maxItems", keyword: "maxItems", params: { limit: 3 }, message: "must NOT have more than 3 items" };
          if (vErrors === null) {
            vErrors = [err54];
          } else {
            vErrors.push(err54);
          }
          errors++;
        }
        if (data21.length < 3) {
          const err55 = { instancePath: instancePath + "/model_center_offset", schemaPath: "#/properties/model_center_offset/minItems", keyword: "minItems", params: { limit: 3 }, message: "must NOT have fewer than 3 items" };
          if (vErrors === null) {
            vErrors = [err55];
          } else {
            vErrors.push(err55);
          }
          errors++;
        }
        const len5 = data21.length;
        for (let i5 = 0; i5 < len5; i5++) {
          if (!(typeof data21[i5] == "number")) {
            const err56 = { instancePath: instancePath + "/model_center_offset/" + i5, schemaPath: "#/properties/model_center_offset/items/type", keyword: "type", params: { type: "number" }, message: "must be number" };
            if (vErrors === null) {
              vErrors = [err56];
            } else {
              vErrors.push(err56);
            }
            errors++;
          }
        }
      } else {
        const err57 = { instancePath: instancePath + "/model_center_offset", schemaPath: "#/properties/model_center_offset/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err57];
        } else {
          vErrors.push(err57);
        }
        errors++;
      }
    }
    if (data.unit !== void 0) {
      if ("m" !== data.unit) {
        const err58 = { instancePath: instancePath + "/unit", schemaPath: "#/properties/unit/const", keyword: "const", params: { allowedValue: "m" }, message: "must be equal to constant" };
        if (vErrors === null) {
          vErrors = [err58];
        } else {
          vErrors.push(err58);
        }
        errors++;
      }
    }
    if (data.compression !== void 0) {
      let data24 = data.compression;
      if (typeof data24 !== "string") {
        const err59 = { instancePath: instancePath + "/compression", schemaPath: "#/properties/compression/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err59];
        } else {
          vErrors.push(err59);
        }
        errors++;
      }
      if (!(data24 === "none" || data24 === "draco")) {
        const err60 = { instancePath: instancePath + "/compression", schemaPath: "#/properties/compression/enum", keyword: "enum", params: { allowedValues: schema113.properties.compression.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err60];
        } else {
          vErrors.push(err60);
        }
        errors++;
      }
    }
  } else {
    const err61 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err61];
    } else {
      vErrors.push(err61);
    }
    errors++;
  }
  validate56.errors = vErrors;
  return errors === 0;
}
function validate55(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.meta === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "meta" }, message: "must have required property 'meta'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.models === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "models" }, message: "must have required property 'models'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      } else {
        const err4 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data1 = data.meta;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        if (data1.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data1.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data1.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data1.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data1.project_id !== void 0) {
          if (typeof data1.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data1.document_id !== void 0) {
          if (typeof data1.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data1.exported_at !== void 0) {
          if (typeof data1.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data1.producer !== void 0) {
          if (typeof data1.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data1.authority !== void 0) {
          if (typeof data1.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.models !== void 0) {
      let data7 = data.models;
      if (Array.isArray(data7)) {
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate56(data7[i0], { instancePath: instancePath + "/models/" + i0, parentData: data7, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err15 = { instancePath: instancePath + "/models", schemaPath: "#/properties/models/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err15];
        } else {
          vErrors.push(err15);
        }
        errors++;
      }
    }
  } else {
    const err16 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err16];
    } else {
      vErrors.push(err16);
    }
    errors++;
  }
  validate55.errors = vErrors;
  return errors === 0;
}
var SchedulesDocument = validate58;
var schema124 = { "type": "string", "description": "Row classification for a BimSchedule rows[] entry. 'data' rows are actual element rows; 'header' rows are column-heading rows at the top; 'group' rows are group-band separators; 'total' rows are group or grand total lines. Consumers MUST use row_types or data_row_count to identify element rows -- never assume all rows[] entries are data.", "enum": ["data", "header", "group", "total"] };
function validate59(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.id === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "id" }, message: "must have required property 'id'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.name === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "name" }, message: "must have required property 'name'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.category_hint === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "category_hint" }, message: "must have required property 'category_hint'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.sheet_number === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "sheet_number" }, message: "must have required property 'sheet_number'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.page === void 0) {
      const err4 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.itemized === void 0) {
      const err5 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "itemized" }, message: "must have required property 'itemized'" };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.fields === void 0) {
      const err6 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "fields" }, message: "must have required property 'fields'" };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
    if (data.filters === void 0) {
      const err7 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "filters" }, message: "must have required property 'filters'" };
      if (vErrors === null) {
        vErrors = [err7];
      } else {
        vErrors.push(err7);
      }
      errors++;
    }
    if (data.sort_group === void 0) {
      const err8 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "sort_group" }, message: "must have required property 'sort_group'" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
    if (data.rows === void 0) {
      const err9 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "rows" }, message: "must have required property 'rows'" };
      if (vErrors === null) {
        vErrors = [err9];
      } else {
        vErrors.push(err9);
      }
      errors++;
    }
    if (data.member_element_ids === void 0) {
      const err10 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "member_element_ids" }, message: "must have required property 'member_element_ids'" };
      if (vErrors === null) {
        vErrors = [err10];
      } else {
        vErrors.push(err10);
      }
      errors++;
    }
    if (data.id !== void 0) {
      if (typeof data.id !== "string") {
        const err11 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.name !== void 0) {
      if (typeof data.name !== "string") {
        const err12 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    if (data.category !== void 0) {
      let data2 = data.category;
      if (typeof data2 !== "string") {
        const err13 = { instancePath: instancePath + "/category", schemaPath: "#/definitions/ElementClass/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
      if (!(data2 === "wall" || data2 === "curtain-wall" || data2 === "slab" || data2 === "floor" || data2 === "column" || data2 === "beam" || data2 === "brace" || data2 === "footing" || data2 === "roof" || data2 === "door" || data2 === "window" || data2 === "curtain-panel" || data2 === "curtain-mullion" || data2 === "ceiling" || data2 === "room" || data2 === "stair" || data2 === "ramp" || data2 === "furniture" || data2 === "casework" || data2 === "equipment" || data2 === "parcel" || data2 === "zoning-envelope" || data2 === "mass" || data2 === "other")) {
        const err14 = { instancePath: instancePath + "/category", schemaPath: "#/definitions/ElementClass/enum", keyword: "enum", params: { allowedValues: schema18.enum }, message: "must be equal to one of the allowed values" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.category_hint !== void 0) {
      if (typeof data.category_hint !== "string") {
        const err15 = { instancePath: instancePath + "/category_hint", schemaPath: "#/properties/category_hint/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err15];
        } else {
          vErrors.push(err15);
        }
        errors++;
      }
    }
    if (data.sheet_number !== void 0) {
      if (typeof data.sheet_number !== "string") {
        const err16 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/properties/sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    if (data.page !== void 0) {
      let data5 = data.page;
      if (!(typeof data5 == "number" && (!(data5 % 1) && !isNaN(data5)))) {
        const err17 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
      if (typeof data5 == "number") {
        if (data5 < 1 || isNaN(data5)) {
          const err18 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err18];
          } else {
            vErrors.push(err18);
          }
          errors++;
        }
      }
    }
    if (data.itemized !== void 0) {
      if (typeof data.itemized !== "boolean") {
        const err19 = { instancePath: instancePath + "/itemized", schemaPath: "#/properties/itemized/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.fields !== void 0) {
      let data7 = data.fields;
      if (Array.isArray(data7)) {
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data8 = data7[i0];
          if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
            if (data8.heading === void 0) {
              const err20 = { instancePath: instancePath + "/fields/" + i0, schemaPath: "#/definitions/BimScheduleField/required", keyword: "required", params: { missingProperty: "heading" }, message: "must have required property 'heading'" };
              if (vErrors === null) {
                vErrors = [err20];
              } else {
                vErrors.push(err20);
              }
              errors++;
            }
            if (data8.heading !== void 0) {
              if (typeof data8.heading !== "string") {
                const err21 = { instancePath: instancePath + "/fields/" + i0 + "/heading", schemaPath: "#/definitions/BimScheduleField/properties/heading/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err21];
                } else {
                  vErrors.push(err21);
                }
                errors++;
              }
            }
            if (data8.parameter !== void 0) {
              if (typeof data8.parameter !== "string") {
                const err22 = { instancePath: instancePath + "/fields/" + i0 + "/parameter", schemaPath: "#/definitions/BimScheduleField/properties/parameter/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
          } else {
            const err23 = { instancePath: instancePath + "/fields/" + i0, schemaPath: "#/definitions/BimScheduleField/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err23];
            } else {
              vErrors.push(err23);
            }
            errors++;
          }
        }
      } else {
        const err24 = { instancePath: instancePath + "/fields", schemaPath: "#/properties/fields/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err24];
        } else {
          vErrors.push(err24);
        }
        errors++;
      }
    }
    if (data.filters !== void 0) {
      let data11 = data.filters;
      if (Array.isArray(data11)) {
        const len1 = data11.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data12 = data11[i1];
          if (data12 && typeof data12 == "object" && !Array.isArray(data12)) {
            if (data12.field === void 0) {
              const err25 = { instancePath: instancePath + "/filters/" + i1, schemaPath: "#/definitions/BimScheduleFilter/required", keyword: "required", params: { missingProperty: "field" }, message: "must have required property 'field'" };
              if (vErrors === null) {
                vErrors = [err25];
              } else {
                vErrors.push(err25);
              }
              errors++;
            }
            if (data12.operator === void 0) {
              const err26 = { instancePath: instancePath + "/filters/" + i1, schemaPath: "#/definitions/BimScheduleFilter/required", keyword: "required", params: { missingProperty: "operator" }, message: "must have required property 'operator'" };
              if (vErrors === null) {
                vErrors = [err26];
              } else {
                vErrors.push(err26);
              }
              errors++;
            }
            if (data12.value === void 0) {
              const err27 = { instancePath: instancePath + "/filters/" + i1, schemaPath: "#/definitions/BimScheduleFilter/required", keyword: "required", params: { missingProperty: "value" }, message: "must have required property 'value'" };
              if (vErrors === null) {
                vErrors = [err27];
              } else {
                vErrors.push(err27);
              }
              errors++;
            }
            if (data12.field !== void 0) {
              if (typeof data12.field !== "string") {
                const err28 = { instancePath: instancePath + "/filters/" + i1 + "/field", schemaPath: "#/definitions/BimScheduleFilter/properties/field/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err28];
                } else {
                  vErrors.push(err28);
                }
                errors++;
              }
            }
            if (data12.operator !== void 0) {
              if (typeof data12.operator !== "string") {
                const err29 = { instancePath: instancePath + "/filters/" + i1 + "/operator", schemaPath: "#/definitions/BimScheduleFilter/properties/operator/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err29];
                } else {
                  vErrors.push(err29);
                }
                errors++;
              }
            }
            if (data12.value !== void 0) {
              if (typeof data12.value !== "string") {
                const err30 = { instancePath: instancePath + "/filters/" + i1 + "/value", schemaPath: "#/definitions/BimScheduleFilter/properties/value/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err30];
                } else {
                  vErrors.push(err30);
                }
                errors++;
              }
            }
          } else {
            const err31 = { instancePath: instancePath + "/filters/" + i1, schemaPath: "#/definitions/BimScheduleFilter/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err31];
            } else {
              vErrors.push(err31);
            }
            errors++;
          }
        }
      } else {
        const err32 = { instancePath: instancePath + "/filters", schemaPath: "#/properties/filters/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err32];
        } else {
          vErrors.push(err32);
        }
        errors++;
      }
    }
    if (data.sort_group !== void 0) {
      let data16 = data.sort_group;
      if (Array.isArray(data16)) {
        const len2 = data16.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data17 = data16[i2];
          if (data17 && typeof data17 == "object" && !Array.isArray(data17)) {
            if (data17.field === void 0) {
              const err33 = { instancePath: instancePath + "/sort_group/" + i2, schemaPath: "#/definitions/BimScheduleSortGroup/required", keyword: "required", params: { missingProperty: "field" }, message: "must have required property 'field'" };
              if (vErrors === null) {
                vErrors = [err33];
              } else {
                vErrors.push(err33);
              }
              errors++;
            }
            if (data17.ascending === void 0) {
              const err34 = { instancePath: instancePath + "/sort_group/" + i2, schemaPath: "#/definitions/BimScheduleSortGroup/required", keyword: "required", params: { missingProperty: "ascending" }, message: "must have required property 'ascending'" };
              if (vErrors === null) {
                vErrors = [err34];
              } else {
                vErrors.push(err34);
              }
              errors++;
            }
            if (data17.field !== void 0) {
              if (typeof data17.field !== "string") {
                const err35 = { instancePath: instancePath + "/sort_group/" + i2 + "/field", schemaPath: "#/definitions/BimScheduleSortGroup/properties/field/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err35];
                } else {
                  vErrors.push(err35);
                }
                errors++;
              }
            }
            if (data17.ascending !== void 0) {
              if (typeof data17.ascending !== "boolean") {
                const err36 = { instancePath: instancePath + "/sort_group/" + i2 + "/ascending", schemaPath: "#/definitions/BimScheduleSortGroup/properties/ascending/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                if (vErrors === null) {
                  vErrors = [err36];
                } else {
                  vErrors.push(err36);
                }
                errors++;
              }
            }
          } else {
            const err37 = { instancePath: instancePath + "/sort_group/" + i2, schemaPath: "#/definitions/BimScheduleSortGroup/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
              vErrors = [err37];
            } else {
              vErrors.push(err37);
            }
            errors++;
          }
        }
      } else {
        const err38 = { instancePath: instancePath + "/sort_group", schemaPath: "#/properties/sort_group/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err38];
        } else {
          vErrors.push(err38);
        }
        errors++;
      }
    }
    if (data.rows !== void 0) {
      let data20 = data.rows;
      if (Array.isArray(data20)) {
        const len3 = data20.length;
        for (let i3 = 0; i3 < len3; i3++) {
          let data21 = data20[i3];
          if (Array.isArray(data21)) {
            const len4 = data21.length;
            for (let i4 = 0; i4 < len4; i4++) {
              if (typeof data21[i4] !== "string") {
                const err39 = { instancePath: instancePath + "/rows/" + i3 + "/" + i4, schemaPath: "#/properties/rows/items/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err39];
                } else {
                  vErrors.push(err39);
                }
                errors++;
              }
            }
          } else {
            const err40 = { instancePath: instancePath + "/rows/" + i3, schemaPath: "#/properties/rows/items/type", keyword: "type", params: { type: "array" }, message: "must be array" };
            if (vErrors === null) {
              vErrors = [err40];
            } else {
              vErrors.push(err40);
            }
            errors++;
          }
        }
      } else {
        const err41 = { instancePath: instancePath + "/rows", schemaPath: "#/properties/rows/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err41];
        } else {
          vErrors.push(err41);
        }
        errors++;
      }
    }
    if (data.row_types !== void 0) {
      let data23 = data.row_types;
      if (Array.isArray(data23)) {
        const len5 = data23.length;
        for (let i5 = 0; i5 < len5; i5++) {
          let data24 = data23[i5];
          if (typeof data24 !== "string") {
            const err42 = { instancePath: instancePath + "/row_types/" + i5, schemaPath: "#/definitions/ScheduleRowType/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err42];
            } else {
              vErrors.push(err42);
            }
            errors++;
          }
          if (!(data24 === "data" || data24 === "header" || data24 === "group" || data24 === "total")) {
            const err43 = { instancePath: instancePath + "/row_types/" + i5, schemaPath: "#/definitions/ScheduleRowType/enum", keyword: "enum", params: { allowedValues: schema124.enum }, message: "must be equal to one of the allowed values" };
            if (vErrors === null) {
              vErrors = [err43];
            } else {
              vErrors.push(err43);
            }
            errors++;
          }
        }
      } else {
        const err44 = { instancePath: instancePath + "/row_types", schemaPath: "#/properties/row_types/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err44];
        } else {
          vErrors.push(err44);
        }
        errors++;
      }
    }
    if (data.data_row_count !== void 0) {
      let data25 = data.data_row_count;
      if (!(typeof data25 == "number" && (!(data25 % 1) && !isNaN(data25)))) {
        const err45 = { instancePath: instancePath + "/data_row_count", schemaPath: "#/properties/data_row_count/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err45];
        } else {
          vErrors.push(err45);
        }
        errors++;
      }
      if (typeof data25 == "number") {
        if (data25 < 0 || isNaN(data25)) {
          const err46 = { instancePath: instancePath + "/data_row_count", schemaPath: "#/properties/data_row_count/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err46];
          } else {
            vErrors.push(err46);
          }
          errors++;
        }
      }
    }
    if (data.header_row_count !== void 0) {
      let data26 = data.header_row_count;
      if (!(typeof data26 == "number" && (!(data26 % 1) && !isNaN(data26)))) {
        const err47 = { instancePath: instancePath + "/header_row_count", schemaPath: "#/properties/header_row_count/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err47];
        } else {
          vErrors.push(err47);
        }
        errors++;
      }
      if (typeof data26 == "number") {
        if (data26 < 0 || isNaN(data26)) {
          const err48 = { instancePath: instancePath + "/header_row_count", schemaPath: "#/properties/header_row_count/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err48];
          } else {
            vErrors.push(err48);
          }
          errors++;
        }
      }
    }
    if (data.excluded_element_count !== void 0) {
      let data27 = data.excluded_element_count;
      if (!(typeof data27 == "number" && (!(data27 % 1) && !isNaN(data27)))) {
        const err49 = { instancePath: instancePath + "/excluded_element_count", schemaPath: "#/properties/excluded_element_count/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err49];
        } else {
          vErrors.push(err49);
        }
        errors++;
      }
      if (typeof data27 == "number") {
        if (data27 < 0 || isNaN(data27)) {
          const err50 = { instancePath: instancePath + "/excluded_element_count", schemaPath: "#/properties/excluded_element_count/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
          if (vErrors === null) {
            vErrors = [err50];
          } else {
            vErrors.push(err50);
          }
          errors++;
        }
      }
    }
    if (data.excluded_element_ids !== void 0) {
      let data28 = data.excluded_element_ids;
      if (Array.isArray(data28)) {
        const len6 = data28.length;
        for (let i6 = 0; i6 < len6; i6++) {
          if (typeof data28[i6] !== "string") {
            const err51 = { instancePath: instancePath + "/excluded_element_ids/" + i6, schemaPath: "#/properties/excluded_element_ids/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err51];
            } else {
              vErrors.push(err51);
            }
            errors++;
          }
        }
      } else {
        const err52 = { instancePath: instancePath + "/excluded_element_ids", schemaPath: "#/properties/excluded_element_ids/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err52];
        } else {
          vErrors.push(err52);
        }
        errors++;
      }
    }
    if (data.member_element_ids !== void 0) {
      let data30 = data.member_element_ids;
      if (Array.isArray(data30)) {
        const len7 = data30.length;
        for (let i7 = 0; i7 < len7; i7++) {
          if (typeof data30[i7] !== "string") {
            const err53 = { instancePath: instancePath + "/member_element_ids/" + i7, schemaPath: "#/properties/member_element_ids/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err53];
            } else {
              vErrors.push(err53);
            }
            errors++;
          }
        }
      } else {
        const err54 = { instancePath: instancePath + "/member_element_ids", schemaPath: "#/properties/member_element_ids/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err54];
        } else {
          vErrors.push(err54);
        }
        errors++;
      }
    }
  } else {
    const err55 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err55];
    } else {
      vErrors.push(err55);
    }
    errors++;
  }
  validate59.errors = vErrors;
  return errors === 0;
}
function validate58(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.meta === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "meta" }, message: "must have required property 'meta'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.schedules === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "schedules" }, message: "must have required property 'schedules'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      } else {
        const err4 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data1 = data.meta;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        if (data1.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data1.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data1.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data1.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data1.project_id !== void 0) {
          if (typeof data1.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data1.document_id !== void 0) {
          if (typeof data1.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data1.exported_at !== void 0) {
          if (typeof data1.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data1.producer !== void 0) {
          if (typeof data1.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data1.authority !== void 0) {
          if (typeof data1.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.schedules !== void 0) {
      let data7 = data.schedules;
      if (Array.isArray(data7)) {
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate59(data7[i0], { instancePath: instancePath + "/schedules/" + i0, parentData: data7, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err15 = { instancePath: instancePath + "/schedules", schemaPath: "#/properties/schedules/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err15];
        } else {
          vErrors.push(err15);
        }
        errors++;
      }
    }
  } else {
    const err16 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err16];
    } else {
      vErrors.push(err16);
    }
    errors++;
  }
  validate58.errors = vErrors;
  return errors === 0;
}
var PagesDocument = validate61;
var pattern10 = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$", "u");
function validate62(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.page === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page" }, message: "must have required property 'page'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.page_id === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "page_id" }, message: "must have required property 'page_id'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.native_key === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "native_key" }, message: "must have required property 'native_key'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.source === void 0) {
      const err3 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "source" }, message: "must have required property 'source'" };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.page !== void 0) {
      let data0 = data.page;
      if (!(typeof data0 == "number" && (!(data0 % 1) && !isNaN(data0)))) {
        const err4 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/type", keyword: "type", params: { type: "integer" }, message: "must be integer" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      if (typeof data0 == "number") {
        if (data0 < 1 || isNaN(data0)) {
          const err5 = { instancePath: instancePath + "/page", schemaPath: "#/properties/page/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
      }
    }
    if (data.page_id !== void 0) {
      let data1 = data.page_id;
      if (typeof data1 === "string") {
        if (func2(data1) < 3) {
          const err6 = { instancePath: instancePath + "/page_id", schemaPath: "#/properties/page_id/minLength", keyword: "minLength", params: { limit: 3 }, message: "must NOT have fewer than 3 characters" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
      } else {
        const err7 = { instancePath: instancePath + "/page_id", schemaPath: "#/properties/page_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.native_key !== void 0) {
      let data2 = data.native_key;
      if (typeof data2 === "string") {
        if (func2(data2) < 1) {
          const err8 = { instancePath: instancePath + "/native_key", schemaPath: "#/properties/native_key/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
      } else {
        const err9 = { instancePath: instancePath + "/native_key", schemaPath: "#/properties/native_key/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.sheet_number !== void 0) {
      if (typeof data.sheet_number !== "string") {
        const err10 = { instancePath: instancePath + "/sheet_number", schemaPath: "#/properties/sheet_number/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    if (data.label !== void 0) {
      if (typeof data.label !== "string") {
        const err11 = { instancePath: instancePath + "/label", schemaPath: "#/properties/label/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
      }
    }
    if (data.source !== void 0) {
      let data5 = data.source;
      if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
        if (data5.driver === void 0) {
          const err12 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/PageSource/required", keyword: "required", params: { missingProperty: "driver" }, message: "must have required property 'driver'" };
          if (vErrors === null) {
            vErrors = [err12];
          } else {
            vErrors.push(err12);
          }
          errors++;
        }
        if (data5.document_id === void 0) {
          const err13 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/PageSource/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        }
        if (data5.producer === void 0) {
          const err14 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/PageSource/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
        if (data5.exported_at === void 0) {
          const err15 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/PageSource/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err15];
          } else {
            vErrors.push(err15);
          }
          errors++;
        }
        if (data5.driver !== void 0) {
          let data6 = data5.driver;
          if (typeof data6 === "string") {
            if (func2(data6) < 1) {
              const err16 = { instancePath: instancePath + "/source/driver", schemaPath: "#/definitions/PageSource/properties/driver/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = { instancePath: instancePath + "/source/driver", schemaPath: "#/definitions/PageSource/properties/driver/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err17];
            } else {
              vErrors.push(err17);
            }
            errors++;
          }
        }
        if (data5.document_id !== void 0) {
          let data7 = data5.document_id;
          if (typeof data7 === "string") {
            if (func2(data7) < 1) {
              const err18 = { instancePath: instancePath + "/source/document_id", schemaPath: "#/definitions/PageSource/properties/document_id/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" };
              if (vErrors === null) {
                vErrors = [err18];
              } else {
                vErrors.push(err18);
              }
              errors++;
            }
          } else {
            const err19 = { instancePath: instancePath + "/source/document_id", schemaPath: "#/definitions/PageSource/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err19];
            } else {
              vErrors.push(err19);
            }
            errors++;
          }
        }
        if (data5.producer !== void 0) {
          if (typeof data5.producer !== "string") {
            const err20 = { instancePath: instancePath + "/source/producer", schemaPath: "#/definitions/PageSource/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
        if (data5.exported_at !== void 0) {
          let data9 = data5.exported_at;
          if (typeof data9 === "string") {
            if (!pattern10.test(data9)) {
              const err21 = { instancePath: instancePath + "/source/exported_at", schemaPath: "#/definitions/PageSource/properties/exported_at/pattern", keyword: "pattern", params: { pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$" }, message: 'must match pattern "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$"' };
              if (vErrors === null) {
                vErrors = [err21];
              } else {
                vErrors.push(err21);
              }
              errors++;
            }
          } else {
            const err22 = { instancePath: instancePath + "/source/exported_at", schemaPath: "#/definitions/PageSource/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
        if (data5.revision !== void 0) {
          if (typeof data5.revision !== "string") {
            const err23 = { instancePath: instancePath + "/source/revision", schemaPath: "#/definitions/PageSource/properties/revision/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err23];
            } else {
              vErrors.push(err23);
            }
            errors++;
          }
        }
        if (data5.format !== void 0) {
          if (typeof data5.format !== "string") {
            const err24 = { instancePath: instancePath + "/source/format", schemaPath: "#/definitions/PageSource/properties/format/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err24];
            } else {
              vErrors.push(err24);
            }
            errors++;
          }
        }
      } else {
        const err25 = { instancePath: instancePath + "/source", schemaPath: "#/definitions/PageSource/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err25];
        } else {
          vErrors.push(err25);
        }
        errors++;
      }
    }
    if (data.geometry !== void 0) {
      if (!validate24(data.geometry, { instancePath: instancePath + "/geometry", parentData: data, parentDataProperty: "geometry", rootData })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err26 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err26];
    } else {
      vErrors.push(err26);
    }
    errors++;
  }
  validate62.errors = vErrors;
  return errors === 0;
}
function validate61(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["bim-pdf"] === void 0) {
      const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "bim-pdf" }, message: "must have required property 'bim-pdf'" };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.meta === void 0) {
      const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "meta" }, message: "must have required property 'meta'" };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.pages === void 0) {
      const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "pages" }, message: "must have required property 'pages'" };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data["bim-pdf"] !== void 0) {
      let data0 = data["bim-pdf"];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err3 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]+$" }, message: 'must match pattern "^[0-9]+\\.[0-9]+$"' };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      } else {
        const err4 = { instancePath: instancePath + "/bim-pdf", schemaPath: "#/definitions/FormatVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.meta !== void 0) {
      let data1 = data.meta;
      if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
        if (data1.project_id === void 0) {
          const err5 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "project_id" }, message: "must have required property 'project_id'" };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        if (data1.document_id === void 0) {
          const err6 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "document_id" }, message: "must have required property 'document_id'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        if (data1.exported_at === void 0) {
          const err7 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "exported_at" }, message: "must have required property 'exported_at'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        if (data1.producer === void 0) {
          const err8 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/required", keyword: "required", params: { missingProperty: "producer" }, message: "must have required property 'producer'" };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        if (data1.project_id !== void 0) {
          if (typeof data1.project_id !== "string") {
            const err9 = { instancePath: instancePath + "/meta/project_id", schemaPath: "#/definitions/BimPdfMeta/properties/project_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data1.document_id !== void 0) {
          if (typeof data1.document_id !== "string") {
            const err10 = { instancePath: instancePath + "/meta/document_id", schemaPath: "#/definitions/BimPdfMeta/properties/document_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data1.exported_at !== void 0) {
          if (typeof data1.exported_at !== "string") {
            const err11 = { instancePath: instancePath + "/meta/exported_at", schemaPath: "#/definitions/BimPdfMeta/properties/exported_at/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data1.producer !== void 0) {
          if (typeof data1.producer !== "string") {
            const err12 = { instancePath: instancePath + "/meta/producer", schemaPath: "#/definitions/BimPdfMeta/properties/producer/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        if (data1.authority !== void 0) {
          if (typeof data1.authority !== "string") {
            const err13 = { instancePath: instancePath + "/meta/authority", schemaPath: "#/definitions/BimPdfMeta/properties/authority/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
              vErrors = [err13];
            } else {
              vErrors.push(err13);
            }
            errors++;
          }
        }
      } else {
        const err14 = { instancePath: instancePath + "/meta", schemaPath: "#/definitions/BimPdfMeta/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    if (data.pages !== void 0) {
      let data7 = data.pages;
      if (Array.isArray(data7)) {
        if (data7.length < 1) {
          const err15 = { instancePath: instancePath + "/pages", schemaPath: "#/properties/pages/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
          if (vErrors === null) {
            vErrors = [err15];
          } else {
            vErrors.push(err15);
          }
          errors++;
        }
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate62(data7[i0], { instancePath: instancePath + "/pages/" + i0, parentData: data7, parentDataProperty: i0, rootData })) {
            vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err16 = { instancePath: instancePath + "/pages", schemaPath: "#/properties/pages/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
  } else {
    const err17 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" };
    if (vErrors === null) {
      vErrors = [err17];
    } else {
      vErrors.push(err17);
    }
    errors++;
  }
  validate61.errors = vErrors;
  return errors === 0;
}
var bim_pdf_1_0_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.0.schema.json",
  title: "bim-pdf sidecar format v1.0",
  description: "Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced.",
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: ["value", "unit"],
      properties: {
        value: { type: "number" },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: { type: "number" },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: { type: "number" },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry v1.0: 20 named classes plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: ["bim-pdf", "meta", "source", "class_registry", "elements"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        meta: { $ref: "#/definitions/BimPdfMeta" },
        source: { $ref: "#/definitions/BimPdfSource" },
        class_registry: { $ref: "#/definitions/FormatVersion" },
        elements: {
          type: "array",
          items: { $ref: "#/definitions/BimElement" }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: ["project_id", "document_id", "exported_at", "producer"],
      properties: {
        project_id: { type: "string" },
        document_id: { type: "string" },
        exported_at: { type: "string", description: "ISO 8601 datetime." },
        producer: { type: "string" }
      }
    },
    BimPdfSource: {
      type: "object",
      required: ["format", "id_strategy"],
      properties: {
        format: { type: "string", description: "Native source format, e.g. 'revit', 'ifc'." },
        version: { type: "string" },
        id_strategy: { type: "string" },
        id_stability_notes: { type: "string" }
      }
    },
    BimElement: {
      type: "object",
      required: ["id", "class"],
      properties: {
        id: { type: "string", description: "Stable across re-exports of the same model version." },
        class: { $ref: "#/definitions/ElementClass" },
        class_hint: {
          type: ["string", "null"],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: { type: "string" },
        level: { type: "string" },
        level_id: { type: "string", description: "UUID v5 referencing an entry in levels.json." },
        quantities: {
          type: "object",
          properties: {
            area: { $ref: "#/definitions/Quantity" },
            volume: { $ref: "#/definitions/Quantity" },
            length: { $ref: "#/definitions/Quantity" },
            width: { $ref: "#/definitions/Quantity" },
            height: { $ref: "#/definitions/Quantity" },
            perimeter: { $ref: "#/definitions/Quantity" },
            count: { $ref: "#/definitions/Quantity" },
            weight: { $ref: "#/definitions/Quantity" }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: { properties: { class: { const: "other" } } },
          then: { required: ["class_hint"] }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: ["bim-pdf", "requires", "coordinate_space", "marks"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        requires: {
          type: "array",
          items: { type: "string" },
          contains: { const: "elements.json" }
        },
        coordinate_space: { type: "string" },
        marks: {
          type: "array",
          items: { $ref: "#/definitions/Mark" }
        }
      }
    },
    Mark: {
      type: "object",
      required: ["element_id", "page", "bbox"],
      properties: {
        element_id: { type: "string" },
        page: { type: "integer", minimum: 1, description: "1-indexed page number." },
        bbox: { $ref: "#/definitions/BBox" },
        view_type: { type: "string", description: "plan | elevation | section | detail | schedule | 3d | (open string)." }
      }
    },
    ScalesDocument: {
      type: "object",
      required: ["bim-pdf", "pages"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: { $ref: "#/definitions/PageScaleEntry" }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        { $ref: "#/definitions/PageScale" },
        { $ref: "#/definitions/PageScaleSet" }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: { required: ["type"] },
      properties: {
        default: { $ref: "#/definitions/PageScale" },
        viewports: {
          type: "array",
          items: { $ref: "#/definitions/ScaleViewport" }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: ["rect", "scale"],
      properties: {
        rect: { $ref: "#/definitions/BBox" },
        scale: { $ref: "#/definitions/PageScale" },
        name: { type: "string" },
        view_id: { type: "string" }
      }
    },
    PageScale: {
      oneOf: [
        { $ref: "#/definitions/RatioScale" },
        { $ref: "#/definitions/CalibrationScale" }
      ]
    },
    RatioScale: {
      type: "object",
      required: ["type", "ratio", "unit"],
      properties: {
        type: { const: "ratio" },
        ratio: { type: "number", description: "Denominator of the scale ratio; 100 means 1:100." },
        unit: { type: "string" }
      }
    },
    CalibrationScale: {
      type: "object",
      required: ["type", "p1", "p2", "real_distance"],
      properties: {
        type: { const: "calibration" },
        p1: { $ref: "#/definitions/Point2D" },
        p2: { $ref: "#/definitions/Point2D" },
        real_distance: { $ref: "#/definitions/Quantity" }
      }
    },
    LevelsDocument: {
      type: "object",
      required: ["bim-pdf", "levels"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        levels: {
          type: "array",
          items: { $ref: "#/definitions/BimLevel" }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: ["id", "name", "elevation"],
      properties: {
        id: { type: "string", description: "UUID v5; must match element.level_id references." },
        name: { type: "string" },
        elevation: { $ref: "#/definitions/Quantity" }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: ["bim-pdf", "sheets"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        sheets: {
          type: "array",
          items: { $ref: "#/definitions/TitleBlockSheet" }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: ["page"],
      properties: {
        page: { type: "integer", minimum: 1, description: "1-indexed page number." },
        sheet_number: { type: "string" },
        sheet_name: { type: "string" },
        project_name: { type: "string" },
        project_number: { type: "string" },
        date: { type: "string" },
        scale: { type: "string" },
        drawn_by: { type: "string" },
        checked_by: { type: "string" },
        revision: { type: "string" }
      }
    },
    AnnotationsDocument: {
      type: "object",
      required: ["bim-pdf", "requires", "coordinate_space", "annotations"],
      properties: {
        "bim-pdf": { $ref: "#/definitions/FormatVersion" },
        requires: {
          type: "array",
          items: { type: "string" },
          contains: { const: "elements.json" }
        },
        coordinate_space: { type: "string" },
        annotations: {
          type: "array",
          items: { $ref: "#/definitions/Annotation" }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: ["id", "display", "type"],
      properties: {
        id: { type: "string" },
        display: { type: "string" },
        type: { type: "string", enum: ["human", "agent"] }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: { type: "string" },
        fill_color: { type: "string" },
        line_width: { type: "number" },
        opacity: { type: "number" }
      }
    },
    Annotation: {
      type: "object",
      required: ["id", "page", "type", "author", "created_at"],
      properties: {
        id: { type: "string" },
        page: { type: "integer", minimum: 1 },
        type: { $ref: "#/definitions/AnnotationType" },
        points: {
          type: "array",
          items: { $ref: "#/definitions/Point2D" },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: { $ref: "#/definitions/BBox" },
        label: { type: "string" },
        author: { $ref: "#/definitions/AnnotationAuthor" },
        created_at: { type: "string", description: "ISO 8601 datetime." },
        element_ids: {
          type: "array",
          items: { type: "string" },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: ["string", "null"],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        style: { $ref: "#/definitions/AnnotationStyle" },
        measurement: {
          type: "object",
          properties: {
            area: { $ref: "#/definitions/Quantity" },
            perimeter: { $ref: "#/definitions/Quantity" },
            length: { $ref: "#/definitions/Quantity" }
          }
        }
      }
    }
  }
};
var bim_pdf_1_1_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.1.schema.json",
  title: "bim-pdf sidecar format v1.1",
  description: 'Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.1 is additive over v1.0: per-page geometry snapshots (PageGeometry), per-viewport model transforms (pdf_from_model), and mark outline/depth/visibility. All sidecar geometry is in NATIVE PDF user space (origin as the page boxes declare it -- NOT re-based to (0,0), commonly negative); see DESIGN.md "Coordinate Spaces & Units".',
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        }
      }
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        }
      }
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    }
  }
};
var bim_pdf_1_2_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.2.schema.json",
  title: "bim-pdf sidecar format v1.2",
  description: 'Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.2 is additive over v1.1: the optional model3d.json sidecar joins the existing per-page geometry snapshots (PageGeometry), per-viewport model transforms (pdf_from_model), and mark outline/depth/visibility additions. All sidecar geometry is in NATIVE PDF user space (origin as the page boxes declare it -- NOT re-based to (0,0), commonly negative); see DESIGN.md "Coordinate Spaces & Units".',
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        },
        titleblock: {
          $ref: "#/definitions/SheetTitleblock"
        },
        zoning_data_block: {
          $ref: "#/definitions/ZoningDataBlock"
        },
        area_tabulation: {
          type: "array",
          items: {
            $ref: "#/definitions/AreaTabulationEntry"
          }
        },
        legend: {
          type: "array",
          items: {
            $ref: "#/definitions/SheetLegendEntry"
          }
        },
        notes: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    SheetTitleblock: {
      type: "object",
      properties: {
        project_name: {
          $ref: "#/definitions/NullableString"
        },
        project_address: {
          $ref: "#/definitions/NullableString"
        },
        sheet_title: {
          $ref: "#/definitions/NullableString"
        },
        sheet_number: {
          $ref: "#/definitions/NullableString"
        },
        scale: {
          $ref: "#/definitions/NullableString"
        },
        date: {
          $ref: "#/definitions/NullableString"
        },
        north_deg: {
          $ref: "#/definitions/NullableNumber"
        },
        firm: {
          $ref: "#/definitions/NullableString"
        },
        drawn_by: {
          $ref: "#/definitions/NullableString"
        },
        revisions: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleblockRevision"
          }
        }
      }
    },
    TitleblockRevision: {
      type: "object",
      properties: {
        date: {
          $ref: "#/definitions/NullableString"
        },
        description: {
          $ref: "#/definitions/NullableString"
        }
      }
    },
    ZoningDataBlock: {
      type: "object",
      properties: {
        district: {
          $ref: "#/definitions/NullableString"
        },
        lot_area_sf: {
          $ref: "#/definitions/NullableNumber"
        },
        far_allowed: {
          $ref: "#/definitions/NullableNumber"
        },
        far_proposed: {
          $ref: "#/definitions/NullableNumber"
        },
        height_allowed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        height_proposed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        coverage_allowed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        coverage_proposed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        setbacks: {
          $ref: "#/definitions/ZoningSetbacks"
        },
        parking_required: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        uses: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    ZoningSetbacks: {
      type: "object",
      properties: {
        front: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        side: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        rear: {
          $ref: "#/definitions/StringNumberOrNull"
        }
      }
    },
    AreaTabulationEntry: {
      type: "object",
      required: [
        "label",
        "unit"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        unit: {
          type: "string"
        }
      }
    },
    SheetLegendEntry: {
      type: "object",
      required: [
        "meaning"
      ],
      properties: {
        symbol: {
          type: "string"
        },
        line_type: {
          type: "string"
        },
        meaning: {
          type: "string"
        }
      },
      anyOf: [
        {
          required: [
            "symbol"
          ]
        },
        {
          required: [
            "line_type"
          ]
        }
      ]
    },
    NullableString: {
      type: [
        "string",
        "null"
      ]
    },
    NullableNumber: {
      type: [
        "number",
        "null"
      ]
    },
    StringNumberOrNull: {
      type: [
        "string",
        "number",
        "null"
      ]
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        }
      }
    },
    Model3dDocument: {
      type: "object",
      description: "Optional live 3D model placements for embedded glb attachments. Element-to-mesh links stay inside the glb via glTF node.extras.element_id; this sidecar only describes where each model activates on the sheet and how to frame its camera.",
      required: [
        "bim-pdf",
        "meta",
        "models"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        models: {
          type: "array",
          items: {
            $ref: "#/definitions/Model3dEntry"
          }
        }
      }
    },
    Model3dEntry: {
      type: "object",
      required: [
        "glb_ref",
        "page",
        "anchor_rect",
        "camera",
        "model_center_offset",
        "unit"
      ],
      properties: {
        glb_ref: {
          type: "string",
          description: 'Filename of the embedded glb attachment, e.g. "model.glb".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed PDF page the 3D view sits on."
        },
        anchor_rect: {
          $ref: "#/definitions/BBox",
          description: "Sheet region in PDF user-space points where the flat poster sits and the live model activates."
        },
        camera: {
          $ref: "#/definitions/Model3dCamera"
        },
        model_center_offset: {
          type: "array",
          description: "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        unit: {
          const: "m",
          description: "Linear unit for camera and model_center_offset."
        },
        compression: {
          type: "string",
          enum: [
            "none",
            "draco"
          ],
          default: "none"
        }
      }
    },
    Model3dCamera: {
      type: "object",
      description: "Orthographic camera in meters, expressed in the glTF Y-up frame, so a viewer can frame the live model the same way as the flat poster.",
      required: [
        "projection",
        "eye",
        "target",
        "up",
        "ortho_half_extents"
      ],
      properties: {
        projection: {
          const: "orthographic"
        },
        eye: {
          type: "array",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        target: {
          type: "array",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        up: {
          type: "array",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        ortho_half_extents: {
          type: "array",
          description: "[half-width, half-height] of the orthographic frustum, in meters.",
          items: {
            type: "number"
          },
          minItems: 2,
          maxItems: 2
        }
      }
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    }
  }
};
var bim_pdf_1_3_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.3.schema.json",
  title: "bim-pdf sidecar format v1.3",
  description: 'Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.3 is additive over v1.2: Model3dCamera becomes a glTF-aligned discriminated union supporting both orthographic and perspective projections. All sidecar geometry is in NATIVE PDF user space (origin as the page boxes declare it -- NOT re-based to (0,0), commonly negative); see DESIGN.md "Coordinate Spaces & Units".',
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        },
        titleblock: {
          $ref: "#/definitions/SheetTitleblock"
        },
        zoning_data_block: {
          $ref: "#/definitions/ZoningDataBlock"
        },
        area_tabulation: {
          type: "array",
          items: {
            $ref: "#/definitions/AreaTabulationEntry"
          }
        },
        legend: {
          type: "array",
          items: {
            $ref: "#/definitions/SheetLegendEntry"
          }
        },
        notes: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    SheetTitleblock: {
      type: "object",
      properties: {
        project_name: {
          $ref: "#/definitions/NullableString"
        },
        project_address: {
          $ref: "#/definitions/NullableString"
        },
        sheet_title: {
          $ref: "#/definitions/NullableString"
        },
        sheet_number: {
          $ref: "#/definitions/NullableString"
        },
        scale: {
          $ref: "#/definitions/NullableString"
        },
        date: {
          $ref: "#/definitions/NullableString"
        },
        north_deg: {
          $ref: "#/definitions/NullableNumber"
        },
        firm: {
          $ref: "#/definitions/NullableString"
        },
        drawn_by: {
          $ref: "#/definitions/NullableString"
        },
        revisions: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleblockRevision"
          }
        }
      }
    },
    TitleblockRevision: {
      type: "object",
      properties: {
        date: {
          $ref: "#/definitions/NullableString"
        },
        description: {
          $ref: "#/definitions/NullableString"
        }
      }
    },
    ZoningDataBlock: {
      type: "object",
      properties: {
        district: {
          $ref: "#/definitions/NullableString"
        },
        lot_area_sf: {
          $ref: "#/definitions/NullableNumber"
        },
        far_allowed: {
          $ref: "#/definitions/NullableNumber"
        },
        far_proposed: {
          $ref: "#/definitions/NullableNumber"
        },
        height_allowed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        height_proposed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        coverage_allowed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        coverage_proposed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        setbacks: {
          $ref: "#/definitions/ZoningSetbacks"
        },
        parking_required: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        uses: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    ZoningSetbacks: {
      type: "object",
      properties: {
        front: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        side: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        rear: {
          $ref: "#/definitions/StringNumberOrNull"
        }
      }
    },
    AreaTabulationEntry: {
      type: "object",
      required: [
        "label",
        "unit"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        unit: {
          type: "string"
        }
      }
    },
    SheetLegendEntry: {
      type: "object",
      required: [
        "meaning"
      ],
      properties: {
        symbol: {
          type: "string"
        },
        line_type: {
          type: "string"
        },
        meaning: {
          type: "string"
        }
      },
      anyOf: [
        {
          required: [
            "symbol"
          ]
        },
        {
          required: [
            "line_type"
          ]
        }
      ]
    },
    NullableString: {
      type: [
        "string",
        "null"
      ]
    },
    NullableNumber: {
      type: [
        "number",
        "null"
      ]
    },
    StringNumberOrNull: {
      type: [
        "string",
        "number",
        "null"
      ]
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        }
      }
    },
    Model3dDocument: {
      type: "object",
      description: "Optional live 3D model placements for embedded glb attachments. Element-to-mesh links stay inside the glb via glTF node.extras.element_id; this sidecar only describes where each model activates on the sheet and how to frame its camera.",
      required: [
        "bim-pdf",
        "meta",
        "models"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        models: {
          type: "array",
          items: {
            $ref: "#/definitions/Model3dEntry"
          }
        }
      }
    },
    Model3dEntry: {
      type: "object",
      required: [
        "glb_ref",
        "page",
        "anchor_rect",
        "camera",
        "model_center_offset",
        "unit"
      ],
      properties: {
        glb_ref: {
          type: "string",
          description: 'Filename of the embedded glb attachment, e.g. "model.glb".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed PDF page the 3D view sits on."
        },
        anchor_rect: {
          $ref: "#/definitions/BBox",
          description: "Sheet region in PDF user-space points where the flat poster sits and the live model activates."
        },
        camera: {
          $ref: "#/definitions/Model3dCamera"
        },
        model_center_offset: {
          type: "array",
          description: "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        unit: {
          const: "m",
          description: "Linear unit for camera and model_center_offset."
        },
        compression: {
          type: "string",
          enum: [
            "none",
            "draco"
          ],
          default: "none"
        }
      }
    },
    Model3dCamera: {
      type: "object",
      description: "Camera framing for a live glTF 3D view, in meters and glTF Y-up. Supports orthographic and perspective projections (mirrors glTF 2.0 camera schema).",
      required: [
        "projection",
        "eye",
        "target",
        "up"
      ],
      properties: {
        projection: {
          type: "string",
          enum: [
            "orthographic",
            "perspective"
          ]
        },
        eye: {
          type: "array",
          description: "Camera position in world space, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        target: {
          type: "array",
          description: "Point the camera looks at, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        up: {
          type: "array",
          description: "Camera up vector (unit), glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        ortho_half_extents: {
          type: "array",
          description: "[half-width, half-height] of the orthographic frustum, in meters. Required when projection is orthographic.",
          items: {
            type: "number"
          },
          minItems: 2,
          maxItems: 2
        },
        perspective: {
          type: "object",
          description: "Perspective projection parameters, mirrors glTF camera.perspective. Required when projection is perspective.",
          required: [
            "yfov"
          ],
          properties: {
            yfov: {
              type: "number",
              description: "Vertical field of view in radians.",
              exclusiveMinimum: 0
            },
            aspectRatio: {
              type: "number",
              description: "Aspect ratio (width / height).",
              exclusiveMinimum: 0
            },
            znear: {
              type: "number",
              description: "Near clipping plane distance in meters.",
              exclusiveMinimum: 0
            },
            zfar: {
              type: "number",
              description: "Far clipping plane distance in meters.",
              exclusiveMinimum: 0
            }
          }
        }
      },
      allOf: [
        {
          if: {
            properties: {
              projection: {
                const: "orthographic"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "ortho_half_extents"
            ]
          }
        },
        {
          if: {
            properties: {
              projection: {
                const: "perspective"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "perspective"
            ]
          }
        }
      ]
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    }
  }
};
var bim_pdf_1_4_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.4.schema.json",
  title: "bim-pdf sidecar format v1.4",
  description: 'Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.4 is additive over v1.3: AnnotationsDocument may carry a markup-layer registry, and Annotation may declare explicit layer membership for baking to PDF OCGs. All sidecar geometry is in NATIVE PDF user space (origin as the page boxes declare it -- NOT re-based to (0,0), commonly negative); see DESIGN.md "Coordinate Spaces & Units".',
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        },
        titleblock: {
          $ref: "#/definitions/SheetTitleblock"
        },
        zoning_data_block: {
          $ref: "#/definitions/ZoningDataBlock"
        },
        area_tabulation: {
          type: "array",
          items: {
            $ref: "#/definitions/AreaTabulationEntry"
          }
        },
        legend: {
          type: "array",
          items: {
            $ref: "#/definitions/SheetLegendEntry"
          }
        },
        notes: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    SheetTitleblock: {
      type: "object",
      properties: {
        project_name: {
          $ref: "#/definitions/NullableString"
        },
        project_address: {
          $ref: "#/definitions/NullableString"
        },
        sheet_title: {
          $ref: "#/definitions/NullableString"
        },
        sheet_number: {
          $ref: "#/definitions/NullableString"
        },
        scale: {
          $ref: "#/definitions/NullableString"
        },
        date: {
          $ref: "#/definitions/NullableString"
        },
        north_deg: {
          $ref: "#/definitions/NullableNumber"
        },
        firm: {
          $ref: "#/definitions/NullableString"
        },
        drawn_by: {
          $ref: "#/definitions/NullableString"
        },
        revisions: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleblockRevision"
          }
        }
      }
    },
    TitleblockRevision: {
      type: "object",
      properties: {
        date: {
          $ref: "#/definitions/NullableString"
        },
        description: {
          $ref: "#/definitions/NullableString"
        }
      }
    },
    ZoningDataBlock: {
      type: "object",
      properties: {
        district: {
          $ref: "#/definitions/NullableString"
        },
        lot_area_sf: {
          $ref: "#/definitions/NullableNumber"
        },
        far_allowed: {
          $ref: "#/definitions/NullableNumber"
        },
        far_proposed: {
          $ref: "#/definitions/NullableNumber"
        },
        height_allowed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        height_proposed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        coverage_allowed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        coverage_proposed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        setbacks: {
          $ref: "#/definitions/ZoningSetbacks"
        },
        parking_required: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        uses: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    ZoningSetbacks: {
      type: "object",
      properties: {
        front: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        side: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        rear: {
          $ref: "#/definitions/StringNumberOrNull"
        }
      }
    },
    AreaTabulationEntry: {
      type: "object",
      required: [
        "label",
        "unit"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        unit: {
          type: "string"
        }
      }
    },
    SheetLegendEntry: {
      type: "object",
      required: [
        "meaning"
      ],
      properties: {
        symbol: {
          type: "string"
        },
        line_type: {
          type: "string"
        },
        meaning: {
          type: "string"
        }
      },
      anyOf: [
        {
          required: [
            "symbol"
          ]
        },
        {
          required: [
            "line_type"
          ]
        }
      ]
    },
    NullableString: {
      type: [
        "string",
        "null"
      ]
    },
    NullableNumber: {
      type: [
        "number",
        "null"
      ]
    },
    StringNumberOrNull: {
      type: [
        "string",
        "number",
        "null"
      ]
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        layers: {
          type: "array",
          items: {
            $ref: "#/definitions/MarkupLayer"
          }
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    MarkupLayer: {
      type: "object",
      required: [
        "id",
        "name"
      ],
      properties: {
        id: {
          type: "string",
          description: "Stable layer id referenced by Annotation.layer_id."
        },
        name: {
          type: "string",
          description: "Display name; must match the baked PDF Optional Content Group /Name."
        },
        default_visible: {
          type: "boolean",
          description: "Initial layer visibility in the baked PDF. Omitted means true."
        },
        locked: {
          type: "boolean",
          description: "When true, the UI should not allow toggling this layer."
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        layer_id: {
          type: "string",
          description: "Explicit markup-layer membership referencing a MarkupLayer.id; baking maps this to the annotation's /OC entry."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        }
      }
    },
    Model3dDocument: {
      type: "object",
      description: "Optional live 3D model placements for embedded glb attachments. Element-to-mesh links stay inside the glb via glTF node.extras.element_id; this sidecar only describes where each model activates on the sheet and how to frame its camera.",
      required: [
        "bim-pdf",
        "meta",
        "models"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        models: {
          type: "array",
          items: {
            $ref: "#/definitions/Model3dEntry"
          }
        }
      }
    },
    Model3dEntry: {
      type: "object",
      required: [
        "glb_ref",
        "page",
        "anchor_rect",
        "camera",
        "model_center_offset",
        "unit"
      ],
      properties: {
        glb_ref: {
          type: "string",
          description: 'Filename of the embedded glb attachment, e.g. "model.glb".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed PDF page the 3D view sits on."
        },
        anchor_rect: {
          $ref: "#/definitions/BBox",
          description: "Sheet region in PDF user-space points where the flat poster sits and the live model activates."
        },
        camera: {
          $ref: "#/definitions/Model3dCamera"
        },
        model_center_offset: {
          type: "array",
          description: "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        unit: {
          const: "m",
          description: "Linear unit for camera and model_center_offset."
        },
        compression: {
          type: "string",
          enum: [
            "none",
            "draco"
          ],
          default: "none"
        }
      }
    },
    Model3dCamera: {
      type: "object",
      description: "Camera framing for a live glTF 3D view, in meters and glTF Y-up. Supports orthographic and perspective projections (mirrors glTF 2.0 camera schema).",
      required: [
        "projection",
        "eye",
        "target",
        "up"
      ],
      properties: {
        projection: {
          type: "string",
          enum: [
            "orthographic",
            "perspective"
          ]
        },
        eye: {
          type: "array",
          description: "Camera position in world space, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        target: {
          type: "array",
          description: "Point the camera looks at, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        up: {
          type: "array",
          description: "Camera up vector (unit), glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        ortho_half_extents: {
          type: "array",
          description: "[half-width, half-height] of the orthographic frustum, in meters. Required when projection is orthographic.",
          items: {
            type: "number"
          },
          minItems: 2,
          maxItems: 2
        },
        perspective: {
          type: "object",
          description: "Perspective projection parameters, mirrors glTF camera.perspective. Required when projection is perspective.",
          required: [
            "yfov"
          ],
          properties: {
            yfov: {
              type: "number",
              description: "Vertical field of view in radians.",
              exclusiveMinimum: 0
            },
            aspectRatio: {
              type: "number",
              description: "Aspect ratio (width / height).",
              exclusiveMinimum: 0
            },
            znear: {
              type: "number",
              description: "Near clipping plane distance in meters.",
              exclusiveMinimum: 0
            },
            zfar: {
              type: "number",
              description: "Far clipping plane distance in meters.",
              exclusiveMinimum: 0
            }
          }
        }
      },
      allOf: [
        {
          if: {
            properties: {
              projection: {
                const: "orthographic"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "ortho_half_extents"
            ]
          }
        },
        {
          if: {
            properties: {
              projection: {
                const: "perspective"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "perspective"
            ]
          }
        }
      ]
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    }
  }
};
var bim_pdf_1_5_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.5.schema.json",
  title: "bim-pdf sidecar format v1.5",
  description: 'Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.5 is additive over v1.4: BimElement may carry scheduled_in_view so consumers can reconcile model counts against printed schedules and views. All sidecar geometry is in NATIVE PDF user space (origin as the page boxes declare it -- NOT re-based to (0,0), commonly negative); see DESIGN.md "Coordinate Spaces & Units".',
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        scheduled_in_view: {
          type: "boolean",
          description: "False when the producer's view or schedule filters exclude this element from the printed document set, so consumers can reconcile model counts against sheet counts."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        },
        titleblock: {
          $ref: "#/definitions/SheetTitleblock"
        },
        zoning_data_block: {
          $ref: "#/definitions/ZoningDataBlock"
        },
        area_tabulation: {
          type: "array",
          items: {
            $ref: "#/definitions/AreaTabulationEntry"
          }
        },
        legend: {
          type: "array",
          items: {
            $ref: "#/definitions/SheetLegendEntry"
          }
        },
        notes: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    SheetTitleblock: {
      type: "object",
      properties: {
        project_name: {
          $ref: "#/definitions/NullableString"
        },
        project_address: {
          $ref: "#/definitions/NullableString"
        },
        sheet_title: {
          $ref: "#/definitions/NullableString"
        },
        sheet_number: {
          $ref: "#/definitions/NullableString"
        },
        scale: {
          $ref: "#/definitions/NullableString"
        },
        date: {
          $ref: "#/definitions/NullableString"
        },
        north_deg: {
          $ref: "#/definitions/NullableNumber"
        },
        firm: {
          $ref: "#/definitions/NullableString"
        },
        drawn_by: {
          $ref: "#/definitions/NullableString"
        },
        revisions: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleblockRevision"
          }
        }
      }
    },
    TitleblockRevision: {
      type: "object",
      properties: {
        date: {
          $ref: "#/definitions/NullableString"
        },
        description: {
          $ref: "#/definitions/NullableString"
        }
      }
    },
    ZoningDataBlock: {
      type: "object",
      properties: {
        district: {
          $ref: "#/definitions/NullableString"
        },
        lot_area_sf: {
          $ref: "#/definitions/NullableNumber"
        },
        far_allowed: {
          $ref: "#/definitions/NullableNumber"
        },
        far_proposed: {
          $ref: "#/definitions/NullableNumber"
        },
        height_allowed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        height_proposed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        coverage_allowed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        coverage_proposed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        setbacks: {
          $ref: "#/definitions/ZoningSetbacks"
        },
        parking_required: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        uses: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    ZoningSetbacks: {
      type: "object",
      properties: {
        front: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        side: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        rear: {
          $ref: "#/definitions/StringNumberOrNull"
        }
      }
    },
    AreaTabulationEntry: {
      type: "object",
      required: [
        "label",
        "unit"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        unit: {
          type: "string"
        }
      }
    },
    SheetLegendEntry: {
      type: "object",
      required: [
        "meaning"
      ],
      properties: {
        symbol: {
          type: "string"
        },
        line_type: {
          type: "string"
        },
        meaning: {
          type: "string"
        }
      },
      anyOf: [
        {
          required: [
            "symbol"
          ]
        },
        {
          required: [
            "line_type"
          ]
        }
      ]
    },
    NullableString: {
      type: [
        "string",
        "null"
      ]
    },
    NullableNumber: {
      type: [
        "number",
        "null"
      ]
    },
    StringNumberOrNull: {
      type: [
        "string",
        "number",
        "null"
      ]
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        layers: {
          type: "array",
          items: {
            $ref: "#/definitions/MarkupLayer"
          }
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    MarkupLayer: {
      type: "object",
      required: [
        "id",
        "name"
      ],
      properties: {
        id: {
          type: "string",
          description: "Stable layer id referenced by Annotation.layer_id."
        },
        name: {
          type: "string",
          description: "Display name; must match the baked PDF Optional Content Group /Name."
        },
        default_visible: {
          type: "boolean",
          description: "Initial layer visibility in the baked PDF. Omitted means true."
        },
        locked: {
          type: "boolean",
          description: "When true, the UI should not allow toggling this layer."
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        layer_id: {
          type: "string",
          description: "Explicit markup-layer membership referencing a MarkupLayer.id; baking maps this to the annotation's /OC entry."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        }
      }
    },
    Model3dDocument: {
      type: "object",
      description: "Optional live 3D model placements for embedded glb attachments. Element-to-mesh links stay inside the glb via glTF node.extras.element_id; this sidecar only describes where each model activates on the sheet and how to frame its camera.",
      required: [
        "bim-pdf",
        "meta",
        "models"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        models: {
          type: "array",
          items: {
            $ref: "#/definitions/Model3dEntry"
          }
        }
      }
    },
    Model3dEntry: {
      type: "object",
      required: [
        "glb_ref",
        "page",
        "anchor_rect",
        "camera",
        "model_center_offset",
        "unit"
      ],
      properties: {
        glb_ref: {
          type: "string",
          description: 'Filename of the embedded glb attachment, e.g. "model.glb".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed PDF page the 3D view sits on."
        },
        anchor_rect: {
          $ref: "#/definitions/BBox",
          description: "Sheet region in PDF user-space points where the flat poster sits and the live model activates."
        },
        camera: {
          $ref: "#/definitions/Model3dCamera"
        },
        model_center_offset: {
          type: "array",
          description: "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        unit: {
          const: "m",
          description: "Linear unit for camera and model_center_offset."
        },
        compression: {
          type: "string",
          enum: [
            "none",
            "draco"
          ],
          default: "none"
        }
      }
    },
    Model3dCamera: {
      type: "object",
      description: "Camera framing for a live glTF 3D view, in meters and glTF Y-up. Supports orthographic and perspective projections (mirrors glTF 2.0 camera schema).",
      required: [
        "projection",
        "eye",
        "target",
        "up"
      ],
      properties: {
        projection: {
          type: "string",
          enum: [
            "orthographic",
            "perspective"
          ]
        },
        eye: {
          type: "array",
          description: "Camera position in world space, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        target: {
          type: "array",
          description: "Point the camera looks at, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        up: {
          type: "array",
          description: "Camera up vector (unit), glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        ortho_half_extents: {
          type: "array",
          description: "[half-width, half-height] of the orthographic frustum, in meters. Required when projection is orthographic.",
          items: {
            type: "number"
          },
          minItems: 2,
          maxItems: 2
        },
        perspective: {
          type: "object",
          description: "Perspective projection parameters, mirrors glTF camera.perspective. Required when projection is perspective.",
          required: [
            "yfov"
          ],
          properties: {
            yfov: {
              type: "number",
              description: "Vertical field of view in radians.",
              exclusiveMinimum: 0
            },
            aspectRatio: {
              type: "number",
              description: "Aspect ratio (width / height).",
              exclusiveMinimum: 0
            },
            znear: {
              type: "number",
              description: "Near clipping plane distance in meters.",
              exclusiveMinimum: 0
            },
            zfar: {
              type: "number",
              description: "Far clipping plane distance in meters.",
              exclusiveMinimum: 0
            }
          }
        }
      },
      allOf: [
        {
          if: {
            properties: {
              projection: {
                const: "orthographic"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "ortho_half_extents"
            ]
          }
        },
        {
          if: {
            properties: {
              projection: {
                const: "perspective"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "perspective"
            ]
          }
        }
      ]
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    }
  }
};
var bim_pdf_1_14_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://bimpdf.com/schema/bim-pdf-1.14.schema.json",
  title: "bim-pdf sidecar format v1.14",
  description: `v1.14 is additive over v1.13 and changes no sidecar shape: it ships with the declaration rules of spec 0002 (XMP label, /Extensions, AFRelationship + /Desc; https://bimpdf.com/spec). Canonical JSON Schema for the bim-pdf sidecar documents embedded in a PDF/A-3 as associated files. Source of truth mirrors packages/core/src/types/*.ts. Schemas are intentionally OPEN (unknown properties allowed) so producers may add namespaced fields without breaking consumers during iteration; required fields and known field types are still enforced. v1.13 is additive over v1.12 (view links): a scales.json viewport gains refs[] -- the section / elevation / callout / detail heads drawn in it, each pointing at its target VIEW by UniqueId (view_id), never at a sheet number -- and primary_view_id (set on a placed dependent view: its parent view); a scales.json page gains unresolved (that page's markers whose target the producer could not resolve); Mark gains vp (an index into the same page's scales viewports). scales.json is thereby the package's view placements. All new fields are optional, so v1.12 documents remain valid and old readers ignore them. v1.12 is additive over v1.11: an optional pages.json page manifest (PagesDocument) gives every page a stable page_id and its own source provenance, so one PDF can combine pages from several source documents (Revit, a spreadsheet, Rhino, ...); BimElement gains an optional document_id that scopes its id to one source document (required by the package validator when pages.json lists more than one source document). Without pages.json a v1.12 package means exactly what v1.11 did. v1.11 was additive over v1.10: annotations.json Annotation gains the markup review-loop fields rev (monotonic integer revision), status (review status enum), status_history (append-only audit trail), in_reply_to (reply-chain parent id) and delta (a replayable, driver-agnostic model-edit proposal). All new fields are optional so v1.10 documents remain valid. All sidecar geometry is in NATIVE PDF user space; see DESIGN.md "Coordinate Spaces & Units".`,
  definitions: {
    FormatVersion: {
      type: "string",
      pattern: "^[0-9]+\\.[0-9]+$",
      description: 'Major.minor format version, e.g. "1.0".'
    },
    Quantity: {
      type: "object",
      required: [
        "value",
        "unit"
      ],
      properties: {
        value: {
          type: "number"
        },
        unit: {
          type: "string",
          description: "SI-ish unit string: m, m2, m3, mm, ft, ft2, ft3, in, etc."
        }
      }
    },
    BBox: {
      type: "array",
      description: "Axis-aligned bbox in PDF points, origin bottom-left, Y-up: [x0, y0, x1, y1].",
      items: {
        type: "number"
      },
      minItems: 4,
      maxItems: 4
    },
    Point2D: {
      type: "array",
      description: "2D point in PDF points: [x, y].",
      items: {
        type: "number"
      },
      minItems: 2,
      maxItems: 2
    },
    ElementClass: {
      type: "string",
      description: "Class registry: 23 named classes plus producer-neutral pre-design classes parcel, zoning-envelope, and mass, plus 'other'. Values outside this set should use 'other' with class_hint.",
      enum: [
        "wall",
        "curtain-wall",
        "slab",
        "floor",
        "column",
        "beam",
        "brace",
        "footing",
        "roof",
        "door",
        "window",
        "curtain-panel",
        "curtain-mullion",
        "ceiling",
        "room",
        "stair",
        "ramp",
        "furniture",
        "casework",
        "equipment",
        "parcel",
        "zoning-envelope",
        "mass",
        "other"
      ]
    },
    ElementsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "source",
        "class_registry",
        "elements"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        source: {
          $ref: "#/definitions/BimPdfSource"
        },
        class_registry: {
          $ref: "#/definitions/FormatVersion"
        },
        elements: {
          type: "array",
          items: {
            $ref: "#/definitions/BimElement"
          }
        }
      }
    },
    BimPdfMeta: {
      type: "object",
      required: [
        "project_id",
        "document_id",
        "exported_at",
        "producer"
      ],
      properties: {
        project_id: {
          type: "string"
        },
        document_id: {
          type: "string"
        },
        exported_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        producer: {
          type: "string"
        },
        authority: {
          type: "string",
          description: "Optional free-text guidance for automated consumers about source authority, e.g. that the printed sheets are contractually authoritative."
        }
      }
    },
    BimPdfSource: {
      type: "object",
      required: [
        "format",
        "id_strategy"
      ],
      properties: {
        format: {
          type: "string",
          description: "Native source format, e.g. 'revit', 'ifc'."
        },
        version: {
          type: "string"
        },
        id_strategy: {
          type: "string"
        },
        id_stability_notes: {
          type: "string"
        }
      }
    },
    BimElement: {
      type: "object",
      required: [
        "id",
        "class"
      ],
      properties: {
        id: {
          type: "string",
          description: 'Stable across re-exports of the same model version. When a producer has no native element id, use a UUID v5 derived deterministically from a stable seed such as parcel_apn + "/" + block_index.'
        },
        class: {
          $ref: "#/definitions/ElementClass"
        },
        document_id: {
          type: "string",
          minLength: 1,
          description: "v1.12: the source document this element belongs to -- a pages.json source.document_id. Element identity is the pair (document_id, id). Optional; when absent the element belongs to the package's single source. REQUIRED (package validator) when pages.json lists more than one distinct source.document_id."
        },
        class_hint: {
          type: [
            "string",
            "null"
          ],
          description: "Producer's native category name. Required when class === 'other'."
        },
        label: {
          type: "string"
        },
        level: {
          type: "string"
        },
        level_id: {
          type: "string",
          description: "UUID v5 referencing an entry in levels.json."
        },
        scheduled_in_view: {
          type: "boolean",
          description: "False when the producer's view or schedule filters exclude this element from the printed document set, so consumers can reconcile model counts against sheet counts."
        },
        quantities: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            volume: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            },
            width: {
              $ref: "#/definitions/Quantity"
            },
            height: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            count: {
              $ref: "#/definitions/Quantity"
            },
            weight: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        properties: {
          type: "object",
          description: "Namespaced property bag: keys prefixed by producer (e.g. 'revit.family')."
        }
      },
      allOf: [
        {
          $comment: "class_hint is required when class is 'other'.",
          if: {
            properties: {
              class: {
                const: "other"
              }
            }
          },
          then: {
            required: [
              "class_hint"
            ]
          }
        }
      ]
    },
    MarksDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "marks"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        marks: {
          type: "array",
          items: {
            $ref: "#/definitions/Mark"
          }
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the export this sidecar came from. Optional; when present it MUST match the meta of the other sidecars in the same package."
        }
      }
    },
    Mark: {
      type: "object",
      required: [
        "element_id",
        "page",
        "bbox"
      ],
      properties: {
        element_id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        view_type: {
          type: "string",
          description: "plan | elevation | section | detail | schedule | 3d | (open string)."
        },
        outline: {
          type: "array",
          description: "Projected outline of the element, SAME coordinate space as bbox. Array of rings; each ring is a closed list of [x, y] points. Absent when the producer could not extract geometry -- consumers fall back to bbox.",
          items: {
            type: "array",
            items: {
              $ref: "#/definitions/Point2D"
            }
          }
        },
        depth: {
          type: "number",
          description: "Distance of the element (centroid) from the view plane along the view direction, producer-defined linear units, SMALLER = nearer. Only the ordering is meaningful (overlap ranking), never measurement."
        },
        visibility: {
          type: "number",
          minimum: 0,
          maximum: 1,
          description: "Hidden-line visibility fraction (0..1): share of the element footprint NOT covered by strictly nearer opaque geometry in its view. 0 = drawn but fully behind other geometry."
        },
        sheet_number: {
          type: "string",
          description: 'Corroborating sheet identity for this mark, e.g. "A601". page remains the operational binding; sheet_number lets a consumer detect and repair page reordering.'
        },
        vp: {
          type: "integer",
          minimum: 0,
          description: "v1.13: index into the same page's scales.json viewports -- the viewport this mark is drawn in."
        }
      }
    },
    ScalesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        pages: {
          type: "object",
          description: "Keys are 1-indexed page numbers as strings.",
          additionalProperties: {
            $ref: "#/definitions/PageScaleEntry"
          }
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the export this sidecar came from. Optional; when present it MUST match the meta of the other sidecars in the same package."
        }
      }
    },
    PageScaleEntry: {
      description: "Either a flat PageScale (v1.0, one scale per page) or a viewport-aware PageScaleSet (v1.1+).",
      oneOf: [
        {
          $ref: "#/definitions/PageScale"
        },
        {
          $ref: "#/definitions/PageScaleSet"
        }
      ]
    },
    PageScaleSet: {
      type: "object",
      description: "Per-page scale info for a multi-viewport sheet. Distinguished from a flat PageScale by the absence of a top-level 'type' discriminant.",
      not: {
        required: [
          "type"
        ]
      },
      properties: {
        geometry: {
          $ref: "#/definitions/PageGeometry"
        },
        default: {
          $ref: "#/definitions/PageScale"
        },
        viewports: {
          type: "array",
          items: {
            $ref: "#/definitions/ScaleViewport"
          }
        },
        unresolved: {
          type: "integer",
          minimum: 0,
          description: "v1.13: view reference markers drawn on THIS page whose target view the producer could not resolve (not written as refs). A missed link is reported, never silent. Per page, not per document: scales.json is page-scoped, so a page slice carries its own count."
        },
        sheet_number: {
          type: "string",
          description: `The sheet this page's scales were measured on, e.g. "A601" -- a CORROBORATING key, not a replacement for the page-number map key. A scale is applied by page ordinal; if pages are reordered after export, that ordinal silently selects the wrong scale and every measurement taken on the page is wrong, with nothing to notice it. This field lets a consumer cross-check the ordinal against titleblock.json and refuse to calibrate when they disagree. Optional: producers with no titleblock (e.g. IFC exports) omit it.`
        }
      }
    },
    ScaleViewport: {
      type: "object",
      required: [
        "rect",
        "scale"
      ],
      properties: {
        rect: {
          $ref: "#/definitions/BBox"
        },
        scale: {
          $ref: "#/definitions/PageScale"
        },
        name: {
          type: "string"
        },
        view_id: {
          type: "string"
        },
        pdf_from_model: {
          $ref: "#/definitions/AffineMatrix2D",
          description: "Affine transform mapping model coordinates (in model_unit) to PDF user-space points for this viewport. When present, consumers MUST prefer it over scale for measurement and pdf<->model round trips."
        },
        model_unit: {
          type: "string",
          description: 'Linear unit of the model coordinates pdf_from_model maps from, e.g. "mm", "m", "ft".'
        },
        refs: {
          type: "array",
          description: "v1.13: the view-reference heads drawn inside this viewport.",
          items: {
            $ref: "#/definitions/ViewRef"
          }
        },
        primary_view_id: {
          type: "string",
          minLength: 1,
          description: "v1.13: set on a placed DEPENDENT view -- its parent (primary) view's view_id. A ref to the parent resolves to its placed dependents."
        }
      }
    },
    PageScale: {
      oneOf: [
        {
          $ref: "#/definitions/RatioScale"
        },
        {
          $ref: "#/definitions/CalibrationScale"
        }
      ]
    },
    RatioScale: {
      type: "object",
      required: [
        "type",
        "ratio",
        "unit"
      ],
      properties: {
        type: {
          const: "ratio"
        },
        ratio: {
          type: "number",
          description: "Denominator of the scale ratio; 100 means 1:100."
        },
        unit: {
          type: "string"
        }
      }
    },
    CalibrationScale: {
      type: "object",
      required: [
        "type",
        "p1",
        "p2",
        "real_distance"
      ],
      properties: {
        type: {
          const: "calibration"
        },
        p1: {
          $ref: "#/definitions/Point2D"
        },
        p2: {
          $ref: "#/definitions/Point2D"
        },
        real_distance: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    LevelsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "levels"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        levels: {
          type: "array",
          items: {
            $ref: "#/definitions/BimLevel"
          }
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the export this sidecar came from. Optional; when present it MUST match the meta of the other sidecars in the same package."
        }
      }
    },
    BimLevel: {
      type: "object",
      required: [
        "id",
        "name",
        "elevation"
      ],
      properties: {
        id: {
          type: "string",
          description: "UUID v5; must match element.level_id references."
        },
        name: {
          type: "string"
        },
        elevation: {
          $ref: "#/definitions/Quantity"
        }
      }
    },
    TitleblockDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "sheets"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        sheets: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleBlockSheet"
          }
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the export this sidecar came from. Optional; when present it MUST match the meta of the other sidecars in the same package."
        }
      }
    },
    TitleBlockSheet: {
      type: "object",
      required: [
        "page"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number."
        },
        sheet_number: {
          type: "string"
        },
        sheet_name: {
          type: "string"
        },
        project_name: {
          type: "string"
        },
        project_number: {
          type: "string"
        },
        date: {
          type: "string"
        },
        scale: {
          type: "string"
        },
        drawn_by: {
          type: "string"
        },
        checked_by: {
          type: "string"
        },
        revision: {
          type: "string"
        },
        titleblock: {
          $ref: "#/definitions/SheetTitleblock"
        },
        zoning_data_block: {
          $ref: "#/definitions/ZoningDataBlock"
        },
        area_tabulation: {
          type: "array",
          items: {
            $ref: "#/definitions/AreaTabulationEntry"
          }
        },
        legend: {
          type: "array",
          items: {
            $ref: "#/definitions/SheetLegendEntry"
          }
        },
        notes: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    SheetTitleblock: {
      type: "object",
      properties: {
        project_name: {
          $ref: "#/definitions/NullableString"
        },
        project_address: {
          $ref: "#/definitions/NullableString"
        },
        sheet_title: {
          $ref: "#/definitions/NullableString"
        },
        sheet_number: {
          $ref: "#/definitions/NullableString"
        },
        scale: {
          $ref: "#/definitions/NullableString"
        },
        date: {
          $ref: "#/definitions/NullableString"
        },
        north_deg: {
          $ref: "#/definitions/NullableNumber"
        },
        firm: {
          $ref: "#/definitions/NullableString"
        },
        drawn_by: {
          $ref: "#/definitions/NullableString"
        },
        revisions: {
          type: "array",
          items: {
            $ref: "#/definitions/TitleblockRevision"
          }
        }
      }
    },
    TitleblockRevision: {
      type: "object",
      properties: {
        date: {
          $ref: "#/definitions/NullableString"
        },
        description: {
          $ref: "#/definitions/NullableString"
        }
      }
    },
    ZoningDataBlock: {
      type: "object",
      properties: {
        district: {
          $ref: "#/definitions/NullableString"
        },
        lot_area_sf: {
          $ref: "#/definitions/NullableNumber"
        },
        far_allowed: {
          $ref: "#/definitions/NullableNumber"
        },
        far_proposed: {
          $ref: "#/definitions/NullableNumber"
        },
        height_allowed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        height_proposed_ft: {
          $ref: "#/definitions/NullableNumber"
        },
        coverage_allowed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        coverage_proposed: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        setbacks: {
          $ref: "#/definitions/ZoningSetbacks"
        },
        parking_required: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        uses: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    ZoningSetbacks: {
      type: "object",
      properties: {
        front: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        side: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        rear: {
          $ref: "#/definitions/StringNumberOrNull"
        }
      }
    },
    AreaTabulationEntry: {
      type: "object",
      required: [
        "label",
        "unit"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          $ref: "#/definitions/StringNumberOrNull"
        },
        unit: {
          type: "string"
        }
      }
    },
    SheetLegendEntry: {
      type: "object",
      required: [
        "meaning"
      ],
      properties: {
        symbol: {
          type: "string"
        },
        line_type: {
          type: "string"
        },
        meaning: {
          type: "string"
        }
      },
      anyOf: [
        {
          required: [
            "symbol"
          ]
        },
        {
          required: [
            "line_type"
          ]
        }
      ]
    },
    NullableString: {
      type: [
        "string",
        "null"
      ]
    },
    NullableNumber: {
      type: [
        "number",
        "null"
      ]
    },
    StringNumberOrNull: {
      type: [
        "string",
        "number",
        "null"
      ]
    },
    AnnotationsDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "requires",
        "coordinate_space",
        "annotations"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        requires: {
          type: "array",
          items: {
            type: "string"
          },
          contains: {
            const: "elements.json"
          }
        },
        coordinate_space: {
          type: "string"
        },
        layers: {
          type: "array",
          items: {
            $ref: "#/definitions/MarkupLayer"
          }
        },
        annotations: {
          type: "array",
          items: {
            $ref: "#/definitions/Annotation"
          }
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the export this sidecar came from. Optional; when present it MUST match the meta of the other sidecars in the same package."
        }
      }
    },
    AnnotationType: {
      type: "string",
      description: "Markup types (human/agent authored) plus producer-extracted types (dimension, tag, detail, other).",
      enum: [
        "polygon",
        "polyline",
        "rectangle",
        "circle",
        "text",
        "arrow",
        "callout",
        "cloud",
        "stamp",
        "highlight",
        "freehand",
        "count",
        "dimension",
        "tag",
        "detail",
        "other"
      ]
    },
    AnnotationAuthor: {
      type: "object",
      required: [
        "id",
        "display",
        "type"
      ],
      properties: {
        id: {
          type: "string"
        },
        display: {
          type: "string"
        },
        type: {
          type: "string",
          enum: [
            "human",
            "agent"
          ]
        }
      }
    },
    AnnotationStyle: {
      type: "object",
      properties: {
        color: {
          type: "string"
        },
        fill_color: {
          type: "string"
        },
        line_width: {
          type: "number"
        },
        opacity: {
          type: "number"
        }
      }
    },
    MarkupLayer: {
      type: "object",
      required: [
        "id",
        "name"
      ],
      properties: {
        id: {
          type: "string",
          description: "Stable layer id referenced by Annotation.layer_id."
        },
        name: {
          type: "string",
          description: "Display name; must match the baked PDF Optional Content Group /Name."
        },
        default_visible: {
          type: "boolean",
          description: "Initial layer visibility in the baked PDF. Omitted means true."
        },
        locked: {
          type: "boolean",
          description: "When true, the UI should not allow toggling this layer."
        }
      }
    },
    Annotation: {
      type: "object",
      required: [
        "id",
        "page",
        "type",
        "author",
        "created_at"
      ],
      properties: {
        id: {
          type: "string"
        },
        page: {
          type: "integer",
          minimum: 1
        },
        type: {
          $ref: "#/definitions/AnnotationType"
        },
        points: {
          type: "array",
          items: {
            $ref: "#/definitions/Point2D"
          },
          description: "Vertices for polygon, polyline, arrow, callout."
        },
        bbox: {
          $ref: "#/definitions/BBox"
        },
        label: {
          type: "string"
        },
        author: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        created_at: {
          type: "string",
          description: "ISO 8601 datetime."
        },
        element_ids: {
          type: "array",
          items: {
            type: "string"
          },
          description: "Element association: links to zero or more elements in elements.json. A single-target markup uses a one-entry array; a region markup (e.g. a revision cloud enclosing several elements) carries many. Absent/empty = freeform annotation."
        },
        label_ref: {
          type: [
            "string",
            "null"
          ],
          description: "Id of a text/callout annotation that labels this graphic markup; absent/null = inline label or proximity-inferred."
        },
        group_id: {
          type: "string",
          description: "Shared id clustering annotations that form one logical markup unit (e.g. a cloud + the callout labeling it)."
        },
        layer_id: {
          type: "string",
          description: "Explicit markup-layer membership referencing a MarkupLayer.id; baking maps this to the annotation's /OC entry."
        },
        style: {
          $ref: "#/definitions/AnnotationStyle"
        },
        measurement: {
          type: "object",
          properties: {
            area: {
              $ref: "#/definitions/Quantity"
            },
            perimeter: {
              $ref: "#/definitions/Quantity"
            },
            length: {
              $ref: "#/definitions/Quantity"
            }
          }
        },
        rev: {
          type: "integer",
          minimum: 1,
          description: "Monotonic per-markup revision; every mutation increments it by exactly 1. Absent on pre-v1.11 documents (treat as 1)."
        },
        status: {
          $ref: "#/definitions/ReviewStatus"
        },
        status_history: {
          type: "array",
          items: {
            $ref: "#/definitions/StatusHistoryEntry"
          },
          description: "Append-only audit trail of status transitions (the ISO 32000 reply-chain flattened)."
        },
        in_reply_to: {
          type: "string",
          description: "Id of the annotation this one replies to (e.g. a drafter's proposal replying to a human markup)."
        },
        delta: {
          $ref: "#/definitions/MarkupDelta"
        }
      }
    },
    Model3dDocument: {
      type: "object",
      description: "Optional live 3D model placements for embedded glb attachments. Element-to-mesh links stay inside the glb via glTF node.extras.element_id; this sidecar only describes where each model activates on the sheet and how to frame its camera.",
      required: [
        "bim-pdf",
        "meta",
        "models"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        models: {
          type: "array",
          items: {
            $ref: "#/definitions/Model3dEntry"
          }
        }
      }
    },
    Model3dEntry: {
      type: "object",
      required: [
        "glb_ref",
        "page",
        "anchor_rect",
        "camera",
        "model_center_offset",
        "unit"
      ],
      properties: {
        glb_ref: {
          type: "string",
          description: 'Filename of the embedded glb attachment, e.g. "model.glb".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed PDF page the 3D view sits on."
        },
        anchor_rect: {
          $ref: "#/definitions/BBox",
          description: "Sheet region in PDF user-space points where the flat poster sits and the live model activates."
        },
        camera: {
          $ref: "#/definitions/Model3dCamera"
        },
        model_center_offset: {
          type: "array",
          description: "Meters subtracted from geometry before float32 cast; viewers add it back to place the camera in the same world frame.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        unit: {
          const: "m",
          description: "Linear unit for camera and model_center_offset."
        },
        compression: {
          type: "string",
          enum: [
            "none",
            "draco"
          ],
          default: "none"
        }
      }
    },
    Model3dCamera: {
      type: "object",
      description: "Camera framing for a live glTF 3D view, in meters and glTF Y-up. Supports orthographic and perspective projections (mirrors glTF 2.0 camera schema).",
      required: [
        "projection",
        "eye",
        "target",
        "up"
      ],
      properties: {
        projection: {
          type: "string",
          enum: [
            "orthographic",
            "perspective"
          ]
        },
        eye: {
          type: "array",
          description: "Camera position in world space, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        target: {
          type: "array",
          description: "Point the camera looks at, meters, glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        up: {
          type: "array",
          description: "Camera up vector (unit), glTF Y-up.",
          items: {
            type: "number"
          },
          minItems: 3,
          maxItems: 3
        },
        ortho_half_extents: {
          type: "array",
          description: "[half-width, half-height] of the orthographic frustum, in meters. Required when projection is orthographic.",
          items: {
            type: "number"
          },
          minItems: 2,
          maxItems: 2
        },
        perspective: {
          type: "object",
          description: "Perspective projection parameters, mirrors glTF camera.perspective. Required when projection is perspective.",
          required: [
            "yfov"
          ],
          properties: {
            yfov: {
              type: "number",
              description: "Vertical field of view in radians.",
              exclusiveMinimum: 0
            },
            aspectRatio: {
              type: "number",
              description: "Aspect ratio (width / height).",
              exclusiveMinimum: 0
            },
            znear: {
              type: "number",
              description: "Near clipping plane distance in meters.",
              exclusiveMinimum: 0
            },
            zfar: {
              type: "number",
              description: "Far clipping plane distance in meters.",
              exclusiveMinimum: 0
            }
          }
        }
      },
      allOf: [
        {
          if: {
            properties: {
              projection: {
                const: "orthographic"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "ortho_half_extents"
            ]
          }
        },
        {
          if: {
            properties: {
              projection: {
                const: "perspective"
              }
            },
            required: [
              "projection"
            ]
          },
          then: {
            required: [
              "perspective"
            ]
          }
        }
      ]
    },
    ScheduleRowType: {
      type: "string",
      description: "Row classification for a BimSchedule rows[] entry. 'data' rows are actual element rows; 'header' rows are column-heading rows at the top; 'group' rows are group-band separators; 'total' rows are group or grand total lines. Consumers MUST use row_types or data_row_count to identify element rows -- never assume all rows[] entries are data.",
      enum: [
        "data",
        "header",
        "group",
        "total"
      ]
    },
    SchedulesDocument: {
      type: "object",
      required: [
        "bim-pdf",
        "meta",
        "schedules"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta"
        },
        schedules: {
          type: "array",
          items: {
            $ref: "#/definitions/BimSchedule"
          }
        }
      }
    },
    BimSchedule: {
      type: "object",
      required: [
        "id",
        "name",
        "category_hint",
        "sheet_number",
        "page",
        "itemized",
        "fields",
        "filters",
        "sort_group",
        "rows",
        "member_element_ids"
      ],
      properties: {
        id: {
          type: "string",
          description: "Producer-stable schedule view id."
        },
        name: {
          type: "string"
        },
        category: {
          $ref: "#/definitions/ElementClass"
        },
        category_hint: {
          type: "string",
          description: "Producer's native schedule category name."
        },
        sheet_number: {
          type: "string",
          description: 'Sheet number where this schedule is printed, e.g. "A601".'
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number in this PDF where the schedule is printed."
        },
        itemized: {
          type: "boolean",
          description: "False when printed rows are grouped aggregates rather than one row per element."
        },
        fields: {
          type: "array",
          items: {
            $ref: "#/definitions/BimScheduleField"
          }
        },
        filters: {
          type: "array",
          items: {
            $ref: "#/definitions/BimScheduleFilter"
          }
        },
        sort_group: {
          type: "array",
          items: {
            $ref: "#/definitions/BimScheduleSortGroup"
          }
        },
        rows: {
          type: "array",
          description: "Printed body cell text, row-major, exactly as rendered. May include non-data rows (group band headers, group totals). Consumers MUST use row_types or data_row_count rather than len(rows) to count actual elements.",
          items: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        row_types: {
          type: "array",
          description: "Parallel classification for each entry in rows[]. MUST be the same length as rows[]. Absent on pre-v1.10 documents. When present, consumers MUST use this instead of assuming all rows[] entries are data rows.",
          items: {
            $ref: "#/definitions/ScheduleRowType"
          }
        },
        data_row_count: {
          type: "integer",
          minimum: 0,
          description: "Count of rows[] entries classified as 'data'. For itemized schedules this equals len(member_element_ids) -- the invariant enforced by validation."
        },
        header_row_count: {
          type: "integer",
          minimum: 0,
          description: "Count of leading column-heading rows in rows[]. Computed by the exporter and included here so consumers can strip headers without parsing row_types."
        },
        excluded_element_count: {
          type: "integer",
          minimum: 0,
          description: "Number of model elements in this schedule's category that the schedule's own filters excluded. When non-zero, data_row_count (== printed count) differs from the model's total element count. This is the field that surfaces the model gap: a consumer seeing data_row_count=132 alongside excluded_element_count=9 knows 141 total elements exist, not 132."
        },
        excluded_element_ids: {
          type: "array",
          description: "Element ids excluded by this schedule's filters. Parallel to excluded_element_count.",
          items: {
            type: "string"
          }
        },
        member_element_ids: {
          type: "array",
          description: "Join keys to elements.json ids; may be empty when membership could not be recovered.",
          items: {
            type: "string"
          }
        }
      }
    },
    BimScheduleField: {
      type: "object",
      required: [
        "heading"
      ],
      properties: {
        heading: {
          type: "string",
          description: "Printed column heading."
        },
        parameter: {
          type: "string",
          description: "Producer parameter name for this column, when known."
        }
      }
    },
    BimScheduleFilter: {
      type: "object",
      required: [
        "field",
        "operator",
        "value"
      ],
      properties: {
        field: {
          type: "string"
        },
        operator: {
          type: "string",
          description: "Producer-native filter enum/string, e.g. Revit ScheduleFilterType names."
        },
        value: {
          type: "string"
        }
      }
    },
    BimScheduleSortGroup: {
      type: "object",
      required: [
        "field",
        "ascending"
      ],
      properties: {
        field: {
          type: "string"
        },
        ascending: {
          type: "boolean"
        }
      }
    },
    AffineMatrix2D: {
      type: "array",
      description: "2D affine transform in PDF matrix convention [a,b,c,d,e,f]: x' = a*x + c*y + e; y' = b*x + d*y + f.",
      items: {
        type: "number"
      },
      minItems: 6,
      maxItems: 6
    },
    PagesDocument: {
      type: "object",
      description: "v1.12 pages.json -- the page manifest. One entry per PDF page, in page order, 1-based and contiguous (1..N), each with a unique stable page_id and its own source provenance. When present, a sidecar record's source is the source of the page it sits on. Invariants JSON Schema cannot express (contiguous pages, unique page_id, page_id = source.document_id + ':' + native_key) are enforced by the core validator.",
      required: [
        "bim-pdf",
        "meta",
        "pages"
      ],
      properties: {
        "bim-pdf": {
          $ref: "#/definitions/FormatVersion"
        },
        meta: {
          $ref: "#/definitions/BimPdfMeta",
          description: "Provenance of the ASSEMBLED package (the tool that combined the pages). Each page's own provenance is its source."
        },
        pages: {
          type: "array",
          minItems: 1,
          items: {
            $ref: "#/definitions/PageEntry"
          }
        }
      }
    },
    PageEntry: {
      type: "object",
      required: [
        "page",
        "page_id",
        "native_key",
        "source"
      ],
      properties: {
        page: {
          type: "integer",
          minimum: 1,
          description: "1-indexed page number (display/ordinal binding; unique and contiguous 1..N across the manifest)."
        },
        page_id: {
          type: "string",
          minLength: 3,
          description: "Stable page identity: source.document_id + ':' + native_key. Unique within the manifest. Survives page reordering and recombination."
        },
        native_key: {
          type: "string",
          minLength: 1,
          description: "The source's own stable key for this page: Revit sheet UniqueId, workbook sheet name, Rhino layout id, else the page label."
        },
        sheet_number: {
          type: "string",
          description: 'Human sheet number, e.g. "A601", when the source has one.'
        },
        label: {
          type: "string",
          description: "Human page label / title."
        },
        source: {
          $ref: "#/definitions/PageSource"
        },
        geometry: {
          $ref: "#/definitions/PageGeometry",
          description: "The page boxes and /Rotate as written in the PDF (same shape as scales.json geometry)."
        }
      }
    },
    PageSource: {
      type: "object",
      description: "Per-page source provenance: which source document (and which export of it) this page was rendered from.",
      required: [
        "driver",
        "document_id",
        "producer",
        "exported_at"
      ],
      properties: {
        driver: {
          type: "string",
          minLength: 1,
          description: "The bim-cli driver that rendered the page, e.g. revit | excel | rhino | code; 'none' for a page with no driver (a plain PDF page)."
        },
        document_id: {
          type: "string",
          minLength: 1,
          description: "Stable id of the source document (e.g. the model GUID / project-info UniqueId, a workbook id) -- NOT derived from a file path. Scopes element ids."
        },
        producer: {
          type: "string",
          description: "Exporter name/version, e.g. BimPdfAddin/0.9.0."
        },
        exported_at: {
          type: "string",
          pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?(Z|[+-][0-9]{2}:[0-9]{2})$",
          description: "RFC 3339 date-time of the export this page came from (a pattern rather than format: date-time, so validators without a format plugin still enforce it)."
        },
        revision: {
          type: "string",
          description: "Source document revision this page was rendered from, when the source has one."
        },
        format: {
          type: "string",
          description: "Native source format, e.g. rvt, xlsx, 3dm."
        }
      }
    },
    PageGeometry: {
      type: "object",
      description: "Per-page PDF geometry snapshot. Mirrors the page boxes as written in the PDF so a consumer can validate sidecar coordinates against the file and detect legacy (pre-v1.1, page-relative) sidecars by its absence. Presence of a geometry block on any page declares the whole package to be native-user-space by contract.",
      required: [
        "media_box"
      ],
      properties: {
        media_box: {
          $ref: "#/definitions/BBox",
          description: "The page /MediaBox: [x0, y0, x1, y1]."
        },
        crop_box: {
          $ref: "#/definitions/BBox",
          description: "The page /CropBox when it differs from /MediaBox."
        },
        rotate: {
          enum: [
            0,
            90,
            180,
            270
          ],
          description: "The page /Rotate value (display-only rotation), degrees clockwise."
        }
      }
    },
    ReviewStatus: {
      type: "string",
      description: "Markup review status. Legal transitions are defined by packages/core/src/markups/reviewStatus.ts (open -> grounded -> proposed -> accepted -> applying -> resolved -> restored -> applying (reapply); proposed -> rejected; any step may go to needs-human).",
      enum: [
        "open",
        "grounded",
        "proposed",
        "accepted",
        "rejected",
        "applying",
        "resolved",
        "restored",
        "needs-human"
      ]
    },
    StatusHistoryEntry: {
      type: "object",
      required: [
        "status",
        "by",
        "at"
      ],
      properties: {
        status: {
          $ref: "#/definitions/ReviewStatus"
        },
        by: {
          $ref: "#/definitions/AnnotationAuthor"
        },
        at: {
          type: "string",
          description: "ISO 8601 datetime of the transition."
        }
      }
    },
    MarkupDelta: {
      type: "object",
      description: "A proposed model edit: a bim-cli request plus the preimage it overwrites, replayable and driver-agnostic. Present only on proposal-stage markups (status proposed or later).",
      required: [
        "driver",
        "verb",
        "args",
        "base_rev",
        "summary"
      ],
      properties: {
        driver: {
          type: "string",
          description: 'bim-cli driver name, e.g. "revit".'
        },
        verb: {
          type: "string",
          description: 'Driver verb to invoke, e.g. "exec".'
        },
        args: {
          type: "object",
          description: "Verb arguments, passed through verbatim."
        },
        preimage: {
          type: "object",
          description: "Pre-edit state of the touched element(s), e.g. {element_id, params}."
        },
        base_rev: {
          type: "integer",
          minimum: 1,
          description: "The markup rev the proposal was computed against."
        },
        base_package_hash: {
          type: "string",
          description: 'Hash of the bim-pdf package the proposal was computed against, e.g. "sha256:...".'
        },
        summary: {
          type: "string",
          description: "One-line human-readable description of the edit."
        }
      }
    },
    ViewRef: {
      type: "object",
      description: `v1.13: one view-reference head drawn inside a scales viewport (a section, elevation, callout or detail marker) and the view it points at. Navigate by view_id only -- resolve it against the scales viewports of the pages in the current set; target_sheet_number / target_detail_number are the PRINTED label, a lookup hint and the "not in this set" message, never a navigation key. Rects are in the page's raw PDF points, the same convention as ScaleViewport.rect.`,
      required: [
        "marker_id",
        "kind",
        "view_id",
        "view_name",
        "heads",
        "bbox"
      ],
      properties: {
        marker_id: {
          type: "string",
          minLength: 1,
          description: "Producer id of the marker element (Revit: the OST_Viewers element). NOT an elements.json id."
        },
        kind: {
          type: "string",
          enum: [
            "section",
            "elevation",
            "callout",
            "detail"
          ]
        },
        view_id: {
          type: "string",
          minLength: 1,
          description: "The TARGET view's stable id (Revit UniqueId) -- the same value as the target viewport's view_id (or, for a parent view placed only through dependents, their primary_view_id)."
        },
        view_name: {
          type: "string"
        },
        target_sheet_number: {
          type: "string",
          description: "The sheet number printed in the head (a hint only)."
        },
        target_detail_number: {
          type: "string",
          description: "The detail number printed in the head (a hint only)."
        },
        heads: {
          type: "array",
          description: "The tappable head symbols, each capped at about 2 x its min side; a callout emits its bubble only, never its boundary. May be empty.",
          items: {
            $ref: "#/definitions/BBox"
          }
        },
        bbox: {
          $ref: "#/definitions/BBox",
          description: "The whole marker (a callout's boundary, a section's cut line)."
        }
      }
    }
  }
};
var CURRENT_FORMAT_VERSION = "1.14";
var SIDECAR_NAMES = [
  "elements.json",
  "marks.json",
  "scales.json",
  "levels.json",
  "titleblock.json",
  "annotations.json",
  "model3d.json",
  "schedules.json",
  "ifc-subset.json",
  // v1.12: optional page manifest (page_id + per-page source). No dependencies;
  // appended last so existing positions do not move.
  "pages.json"
];
var SUPPORTED_FORMAT_MAJORS = [1];
function pageIdOf(documentId, nativeKey) {
  return `${documentId}:${nativeKey}`;
}
function entries(manifest) {
  const pages = manifest?.pages;
  return Array.isArray(pages) ? pages : [];
}
function sourceDocumentIds(manifest) {
  const seen = /* @__PURE__ */ new Set();
  for (const p of entries(manifest)) {
    const id = p?.source?.document_id;
    if (typeof id === "string" && id) seen.add(id);
  }
  return [...seen];
}
var PAGED_ARRAYS = {
  "marks.json": "marks",
  "annotations.json": "annotations",
  "model3d.json": "models",
  "schedules.json": "schedules",
  "titleblock.json": "sheets"
};
function recordPagesOf(name, doc) {
  if (!doc || typeof doc !== "object") return [];
  const out = [];
  if (name === "scales.json") {
    const pages = doc.pages;
    if (pages && typeof pages === "object") {
      for (const key2 of Object.keys(pages)) {
        const page = Number(key2);
        if (Number.isInteger(page)) out.push({ page, where: `scales.json/pages/${key2}` });
      }
    }
    return out;
  }
  const key = PAGED_ARRAYS[name];
  if (!key) return out;
  const arr = doc[key];
  if (!Array.isArray(arr)) return out;
  arr.forEach((rec, i) => {
    const page = rec?.page;
    if (typeof page === "number") out.push({ page, where: `${name}/${key}/${i}` });
  });
  return out;
}
function checkPagesInvariants(doc) {
  const pages = entries(doc);
  const errors = [];
  const seenPage = /* @__PURE__ */ new Set();
  const seenId = /* @__PURE__ */ new Set();
  for (let i = 0; i < pages.length; i++) {
    const p = pages[i];
    if (seenPage.has(p.page)) errors.push(`pages[${i}].page ${p.page} is duplicated`);
    seenPage.add(p.page);
    if (seenId.has(p.page_id)) errors.push(`pages[${i}].page_id "${p.page_id}" is duplicated`);
    seenId.add(p.page_id);
    const expected = pageIdOf(p.source.document_id, p.native_key);
    if (p.page_id !== expected) {
      errors.push(`pages[${i}].page_id "${p.page_id}" must be source.document_id:native_key ("${expected}")`);
    }
  }
  for (let n = 1; n <= pages.length; n++) {
    if (!seenPage.has(n)) {
      errors.push(`pages must be contiguous 1..${pages.length}: page ${n} is missing`);
      break;
    }
  }
  return errors;
}
function checkPackagePages(manifest, docs) {
  const errors = [];
  const pages = new Set(entries(manifest).map((p) => p.page));
  const sources = sourceDocumentIds(manifest);
  const known = new Set(sources);
  for (const [name, doc] of Object.entries(docs)) {
    const orphans = recordPagesOf(name, doc).filter((r) => !pages.has(r.page));
    if (orphans.length > 0) {
      const shown = orphans.slice(0, 5).map((r) => `${r.where} (page ${r.page})`).join(", ");
      const more = orphans.length > 5 ? ` and ${orphans.length - 5} more` : "";
      errors.push(`${name}: ${orphans.length} record(s) on a page pages.json does not list: ${shown}${more}`);
    }
  }
  const elements = docs["elements.json"]?.elements;
  if (Array.isArray(elements)) {
    const unscoped = [];
    const unknownDoc = [];
    for (const el of elements) {
      const id = String(el?.id);
      if (typeof el?.document_id === "string") {
        if (!known.has(el.document_id)) unknownDoc.push(`${id} (${el.document_id})`);
      } else if (sources.length > 1) {
        unscoped.push(id);
      }
    }
    if (unscoped.length > 0) {
      errors.push(
        `elements.json: ${unscoped.length} element(s) lack document_id but pages.json lists ${sources.length} source documents (${sources.join(", ")}): ${fmtIds(unscoped)}`
      );
    }
    if (unknownDoc.length > 0) {
      errors.push(`elements.json: ${unknownDoc.length} element(s) name a document_id pages.json does not list: ${fmtIds(unknownDoc)}`);
    }
  }
  return errors;
}
function fmtIds(ids) {
  return ids.length <= 5 ? ids.join(", ") : `${ids.slice(0, 5).join(", ")} and ${ids.length - 5} more`;
}
function checkFormatVersion(doc) {
  const version = doc?.["bim-pdf"];
  if (typeof version !== "string") {
    return { ok: false, version: null, message: 'missing or non-string "bim-pdf" version field' };
  }
  const m = /^(\d+)\.(\d+)$/.exec(version);
  if (!m) {
    return { ok: false, version, message: `unknown format version ${version} (not MAJOR.MINOR)` };
  }
  const major = Number(m[1]);
  if (!SUPPORTED_FORMAT_MAJORS.includes(major)) {
    return {
      ok: false,
      version,
      message: `unknown format version ${version}: this build supports major ${SUPPORTED_FORMAT_MAJORS.join(", ")} (current ${CURRENT_FORMAT_VERSION}; major mismatch)`
    };
  }
  return { ok: true, version, message: "ok" };
}
var SIDECAR_DEFINITION = {
  "elements.json": "ElementsDocument",
  "marks.json": "MarksDocument",
  "scales.json": "ScalesDocument",
  "levels.json": "LevelsDocument",
  "titleblock.json": "TitleblockDocument",
  "annotations.json": "AnnotationsDocument",
  "model3d.json": "Model3dDocument",
  "schedules.json": "SchedulesDocument",
  "pages.json": "PagesDocument"
  // 'ifc-subset.json' is reserved but not yet schematized.
};
var validators = /* @__PURE__ */ new Map();
for (const [name, def] of Object.entries(SIDECAR_DEFINITION)) {
  const validate = validators_generated_exports[def];
  if (!validate) throw new Error(`schema definition missing: ${def} (run gen:validators)`);
  validators.set(name, validate);
}
function isValidatableSidecar(name) {
  return Object.prototype.hasOwnProperty.call(SIDECAR_DEFINITION, name);
}
function validateSidecar(name, data) {
  const validate = validators.get(name);
  if (!validate) {
    return { valid: true, errors: [], message: `no schema for ${name} (not yet specified)` };
  }
  const valid = validate(data);
  const errors = validate.errors ?? [];
  if (!valid) return { valid, errors, message: formatErrors(name, errors) };
  const invariantErrors = name === "schedules.json" ? checkSchedulesInvariants(data) : name === "pages.json" ? checkPagesInvariants(data) : name === "scales.json" ? [...checkRatioScaleValues(data), ...checkViewRefTargets(data)] : [];
  if (invariantErrors.length > 0) {
    return { valid: false, errors: [], message: invariantErrors.join("; ") };
  }
  return { valid: true, errors: [], message: "ok" };
}
function validatePackage(docs) {
  const sidecars = {};
  const problems = [];
  for (const [name, doc] of Object.entries(docs)) {
    if (doc === void 0 || doc === null || !isValidatableSidecar(name)) continue;
    const r = validateSidecar(name, doc);
    sidecars[name] = r;
    if (!r.valid) problems.push(`${name}: ${r.message}`);
  }
  const packageErrors = [];
  const manifest = docs["pages.json"];
  if (manifest !== void 0 && manifest !== null && sidecars["pages.json"]?.valid) {
    const others = {};
    for (const [name, doc] of Object.entries(docs)) {
      if (name !== "pages.json" && doc !== void 0 && doc !== null) others[name] = doc;
    }
    packageErrors.push(...checkPackagePages(manifest, others));
  }
  if (sidecars["marks.json"]?.valid && sidecars["scales.json"]?.valid) {
    packageErrors.push(...checkMarkViewports(docs["marks.json"], docs["scales.json"]));
  }
  problems.push(...packageErrors);
  return {
    valid: problems.length === 0,
    sidecars,
    packageErrors,
    message: problems.length === 0 ? "ok" : problems.join("; ")
  };
}
function checkSchedulesInvariants(data) {
  const doc = data;
  if (!Array.isArray(doc.schedules)) return [];
  const errors = [];
  for (let i = 0; i < doc.schedules.length; i++) {
    const s = doc.schedules[i];
    const rowCount = Array.isArray(s.rows) ? s.rows.length : 0;
    if (Array.isArray(s.row_types) && s.row_types.length !== rowCount) {
      errors.push(
        `schedules[${i}].row_types.length (${s.row_types.length}) does not match rows.length (${rowCount})`
      );
    }
    if (s.itemized === true && typeof s.data_row_count === "number") {
      const memberCount = Array.isArray(s.member_element_ids) ? s.member_element_ids.length : 0;
      if (s.data_row_count !== memberCount) {
        errors.push(
          `schedules[${i}].data_row_count (${s.data_row_count}) does not match member_element_ids.length (${memberCount}) on an itemized schedule`
        );
      }
    }
  }
  return errors;
}
function isValidRatio(r) {
  return typeof r === "number" && isFinite(r) && r > 0;
}
function checkRatioScaleValues(data) {
  const pages = data.pages;
  if (!pages || typeof pages !== "object") return [];
  const errors = [];
  for (const [page, entry] of Object.entries(pages)) {
    if (entry?.type === "ratio" && !isValidRatio(entry.ratio)) {
      errors.push(`scales.json page ${page}: ratio must be a finite number > 0 (got ${String(entry.ratio)})`);
    }
    if (entry?.default?.type === "ratio" && !isValidRatio(entry.default.ratio)) {
      errors.push(`scales.json page ${page} default: ratio must be a finite number > 0 (got ${String(entry.default.ratio)})`);
    }
    for (let i = 0; i < (entry?.viewports?.length ?? 0); i++) {
      const vp = entry.viewports[i];
      const scale = vp.scale ?? vp;
      if (scale?.type === "ratio" && !isValidRatio(scale.ratio)) {
        errors.push(`scales.json page ${page} viewport[${i}]: ratio must be a finite number > 0 (got ${String(scale.ratio)})`);
      }
    }
  }
  return errors;
}
function checkViewRefTargets(data) {
  const pages = data.pages;
  if (!pages || typeof pages !== "object") return [];
  const targets = /* @__PURE__ */ new Set();
  const placed = /* @__PURE__ */ new Map();
  for (const [page, entry] of Object.entries(pages)) {
    for (const vp of entry?.viewports ?? []) {
      for (const ref of vp.refs ?? []) if (ref.view_id) targets.add(ref.view_id);
      if (vp.view_id) placed.set(vp.view_id, [...placed.get(vp.view_id) ?? [], page]);
    }
  }
  const errors = [];
  for (const id of targets) {
    const on = placed.get(id) ?? [];
    if (on.length > 1) errors.push(`view ${id} is a ref target placed ${on.length} times (pages ${on.join(", ")})`);
  }
  return errors;
}
function checkMarkViewports(marks, scales) {
  const list = marks?.marks;
  const pages = scales?.pages;
  if (!Array.isArray(list) || !pages) return [];
  const errors = [];
  list.forEach((m, i) => {
    if (typeof m.vp !== "number") return;
    const count = pages[String(m.page)]?.viewports?.length ?? 0;
    if (m.vp >= count) errors.push(`marks[${i}].vp ${m.vp} has no viewport on page ${m.page} (${count} in scales.json)`);
  });
  return errors;
}
function assertValidSidecar(name, data) {
  const result = validateSidecar(name, data);
  if (!result.valid) throw new Error(`invalid ${name}: ${result.message}`);
}
function formatErrors(name, errors) {
  const shown = errors.slice(0, 5).map((e) => `${e.instancePath || "/"} ${e.message}`);
  const extra = errors.length > 5 ? ` (+${errors.length - 5} more)` : "";
  return `${shown.join("; ")}${extra}`;
}
var VALIDATABLE_SIDECARS = SIDECAR_NAMES.filter(isValidatableSidecar);

// ../pdfmarkuptool-bimpdf14-s1/packages/core/dist/index.js
var legacy_review_fields_default = {
  $comment: "R6-4 (2026-10-09): the markup review loop v8 is deleted; every project is plain ink unless the request store's gate is on (review-request-contract.json). Markups written before then may still carry the v8 review fields below. They stay READABLE (the SPA's MarkupSchema parses them) and FROZEN: no client creates or changes one, on any project -- firestore.rules (helper legacyInkFields(), generated by apps/pdfmarkuptool/scripts/gen-rules-review-request.mjs), the local server's guard (local/src/opsRules.ts) and the SPA's write path (services/markupFields.ts) all read this list. The other frozen fields are the request contract's clientWrites.inkFields (request_id, the R2 lock dispatch_id + released, trace_id) and clientWrites.inkStateFields (status, status_history: a client create carries at most the fresh state -- status `freshStatus`, an empty history -- and no update changes them). The service (Admin SDK) still writes needs_human_reason when review.ingest / document.upsert parks a markup (review-core-contract.json ingest.markups).",
  freshStatus: "open",
  fields: [
    "request",
    "review",
    "delta",
    "contractVersion",
    "in_reply_to",
    "addresses",
    "sheet_anchor",
    "agent_status",
    "needs_human_reason",
    "proposal_markup_id",
    "proposal_expires_at",
    "apply",
    "resolved_package_hash"
  ]
};
var LEGACY = legacy_review_fields_default;
var LEGACY_REVIEW_FIELDS = LEGACY.fields;
var FRESH_REVIEW_STATUS = LEGACY.freshStatus;
var review_request_contract_default = {
  $comment: "Review REQUEST contract v1 (2026-10-06, wiki spec--review-revamp R5; build record R5-FINAL). The reviewer's unit of work is the REQUEST a Dispatch creates (projects/{p}/requests/{trace_id}); the OP chain (projects/{p}/operations/{op_id}, append-only per op) carries the model state; ONE service (apps/pdfmarkuptool/functions/src/review/requests.ts + requestStore.ts) moves both, and nothing else writes either. Ink is the project's markups (projects/{p}/documents/{d}/markups/{id}) plus `request_id`; owned ink (request_id set, its request not `editing`) takes no client write. Every rule the engine applies is a row below: lookup by verb (+ case) -> the rows whose `from` holds the status of `record` (`request` or `op`; `creates` rows need no request) -> without a case, a caseless row wins over cased ones, else case-required -> the first row listing the actor. Invariant keys: inkLock set|clear (ink request_id written in the same transaction; set refuses `owned`), lease take|renew|clear|drop (take mints a new token; renew and clear CAS on the caller's token -> `lease-lost`; drop removes a lease without a token: a reviewer's Release), takeover (a take from a leased status needs the lease expired or held by the same worker), cas (call fields that must equal the record's current value), createsOp (a new op in the same transaction; `of` from the latestOp entry that matched), latestOp (the request's latest op must match one entry), latestOpNot (its status must not be one of these), notReleased, setsReleased, attemptsBelow / attemptsInc / renderAttemptsInc (limits), alsoRequest (D8: the same verdict moves the request too), keepsStatus, noHistory, noCalls (beats keep no idempotency entry), message (the thread entry type). The reviewer's REPLY (2026-10-07) is `request.post [correction]`: from proposed, needs-you, or a failed apply it sends the request back to the drafter (queued -> proposal n+1). RELEASE is the one way to give ink back: before Accept and after a failed apply (`failed-apply`: nothing was applied) it cancels the request and frees the ink; once a change landed (`accepted`) it hides the ink with the request; after a Restore took the change back out (`restored`, 2026-10-09: a restore applied or rendered, or a failed reapply on top of one -- the model no longer holds the change) it cancels the request and frees the ink like `failed-apply`, so the reviewer's ink comes back free to edit and Send again. `request.reopen` stays in the table (records already `editing` still Send again) but no client offers it. Vendored byte-identical to apps/pdfmarkuptool/functions/src/review/ (requestContract.test.ts), pdf-cli internal/reviewcore/ and the drafter's scripts/worker/ (R5-1 part 2 / R5-2). R6 (2026-10-07, additive, requestVersion unchanged; wiki spec--review-revamp R6): the same records on Firestore -- number.counterDoc (the counter off the project doc), limits.docBytes (refusal too-large), refusal contention (a store transaction that kept aborting; retry with the same op_id), reads worker.poll, and clientWrites (what a client may not write on a gated project, for firestore.rules, the local guard and the SPA alike). 2026-10-08 (additive): `progress` + limits.progress -- the live-steps line, until then hand-typed in the engine, the drafter and pdf-cli. 2026-10-09 (requestVersion unchanged, like the 2026-10-07 Release split; only a reviewer calls request.release): the `restored` Release case, split out of `accepted` -- Release after a successful Restore gave the ink back hidden, throwing the reviewer's intent away (prod tr-mec3fpo4kplia4lhaklf).",
  requestVersion: 1,
  collections: { requests: "requests", operations: "operations", markups: "markups" },
  gate: { field: "reviewCore", value: 2 },
  inkField: "request_id",
  number: {
    $comment: "U2 (2026-10-07): the request's per-project NUMBER, the `#4` a reviewer reads on the canvas badge, the rail row and the toasts. The creating move assigns it in its own transaction: 1 + the project doc's `counter` (the highest number assigned so far; absent = 0), and writes the counter back in that transaction, so two concurrent Dispatches get distinct numbers (the second one's transaction retries). Never reused, never changed by a later verb; a released or cancelled request keeps its number. Optional on a record: requests created before this field render without a number. The counter is service-only (firestore.rules, local/src/opsRules.ts). R6: the counter lives in its own doc, requests/{counterDoc} (field `counter`), not on the project doc -- every request transaction reads the project doc for the gate, so a counter there tied each Dispatch to every other request transaction; a project-doc `counter` from before R6 is read once as the floor. counterDoc is not a request: readers skip any id without the trace prefix.",
    field: "number",
    counter: "requestNumber",
    counterDoc: "_counter"
  },
  clientWrites: {
    $comment: "R6: what a CLIENT may not write on a project with the gate -- one list for the three enforcers: firestore.rules (the helpers apps/pdfmarkuptool/scripts/gen-rules-review-request.mjs generates), the local server's guard (local/src/opsRules.ts) and the SPA's gated write path (services/markupFields.ts strips them). inkFields: never written by a client, create or update -- the ink field only the request service writes (inkField) and the v8 review fields the SPA projects onto ink in memory (the R2 dispatch lock + its released flag, trace_id). inkStateFields: the v8 review state the SPA also projects: an update never touches it, a create carries at most the fresh state every create pipeline writes (the v8 default status, an empty history). refusedWhenGated: the v8 client collections a gated project closes (its reviewer actions go through the request service). On EVERY project: inkField, gate.field and number.counter are service-only, and the requests collection is member-read and service-written.",
    inkFields: ["request_id", "dispatch_id", "released", "trace_id"],
    inkStateFields: ["status", "status_history"],
    refusedWhenGated: ["reviewer_events"]
  },
  ids: {
    $comment: "D2: deterministic ids so a retried call lands on the same record. trace_id = trace.prefix + base32(sha256(projectId + ':' + op_id))[0..length]; a created op = op.prefix + base32(sha256(trace_id + ':' + kind + ':' + n + ':' + seq))[0..length] (n = the accepted proposal, seq = the request's op count before it). base32 = RFC 4648, lowercase alphabet below, no padding. op_id is the CALLER's call id (one per tap / per worker step).",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    length: 20,
    trace: { prefix: "tr-" },
    op: { prefix: "op-" },
    callPattern: "^[A-Za-z0-9_-]{6,64}$"
  },
  actors: {
    admin: { byType: "human" },
    editor: { byType: "human" },
    drafter: { byType: "agent" }
  },
  statuses: {
    request: {
      queued: { initial: true },
      working: { leased: true },
      proposed: {},
      "needs-you": {},
      editing: { inkEditable: true },
      accepted: {},
      cancelled: { terminal: true, inkFree: true }
    },
    op: {
      queued: { initial: true },
      applying: { leased: true },
      applied: {},
      rendered: { terminal: true },
      failed: { terminal: true }
    }
  },
  opKinds: ["apply", "restore", "reapply"],
  stages: ["reading", "drafting", "verifying"],
  progress: {
    $comment: "2026-10-08 (the live-steps line, #481): `field` is the drafter's one-line progress on a working request (\"Step 4 . 0:31 -- Searching the content library\"). Only `verb` (request.beat, holder only) writes it: a string of at most limits.progress, kept by a beat that omits it (the lease thread's beats), dropped with `stage` when the request leaves working. Display only (the rail's state line); nothing reads it as state.",
    field: "progress_text",
    verb: "request.beat"
  },
  scopes: ["selection"],
  messageTypes: ["note", "correction", "reason", "proposal", "decision"],
  proposal: {
    $comment: 'D6: alternatives[0] is the primary request; each alternative carries its own footprint + cursor (required for the drivers below) and its own inverse (no restore_plan -> no Restore). 2026-10-17 (additive, requestVersion unchanged; wiki spec--drafter-photo-survey 3e): an alternative may carry `items` [{key, label, approx?, warning?}] (at most maxItems, keys unique, label and warning at most limits.summary) -- DISPLAY DATA only, the card\'s checklist: nothing reads it at Accept and no op carries it; unticking items posts an ordinary request.post [correction] "Leave out: <labels>". 2026-10-19 (additive, requestVersion unchanged; wiki spec--drafter-product-survey "The card, Accept, Restore", A1, slice S8): an item may carry ONE `image` {asset, w, h} -- its evidence picture (photo crop | product page image | our model); `asset` is a promoted photo\'s reference in the form a markup\'s media item uses (64 lowercase hex = sha256 of the JPEG at projects/{p}/assets/{asset}.jpg; itemImage.assetRe = asset-contract.json assetRe), w and h integer pixels 1..itemImage.maxEdge (= asset-contract.json limits.edge); other keys are dropped. DISPLAY DATA only, like `items`: nothing reads it at Accept and no op carries it; a malformed image is refused bad-args like a malformed item.',
    footprintDrivers: ["revit"],
    maxAlternatives: 4,
    maxItems: 40,
    itemImage: { assetRe: "^[0-9a-f]{64}$", maxEdge: 4096 }
  },
  limits: {
    ink: { min: 1, max: 200 },
    leaseSeconds: 600,
    calls: 50,
    attempts: 2,
    renderAttempts: 3,
    text: 2e3,
    summary: 600,
    progress: 600,
    docBytes: 921600
  },
  refusals: ["unknown-verb", "illegal-transition", "forbidden-actor", "case-required", "stale-version", "bad-args", "bad-message", "not-found", "not-enabled", "owned", "lease-held", "lease-lost", "too-large", "contention"],
  moves: [
    { verb: "request.dispatch", record: "request", from: [], to: "queued", actors: ["admin", "editor"], creates: true, inkLock: "set" },
    { verb: "request.claim", record: "request", from: ["queued"], to: "working", actors: ["drafter"], lease: "take" },
    { verb: "request.claim", case: "reclaim", record: "request", from: ["working"], to: "working", actors: ["drafter"], lease: "take", takeover: true },
    { verb: "request.beat", record: "request", from: ["working"], keepsStatus: true, actors: ["drafter"], lease: "renew", noHistory: true, noCalls: true },
    { verb: "request.propose", record: "request", from: ["working"], to: "proposed", actors: ["drafter"], lease: "clear", proposal: "new", message: "proposal" },
    { verb: "request.needs_you", record: "request", from: ["working"], to: "needs-you", actors: ["drafter"], lease: "clear", error: "required", message: "reason" },
    { verb: "request.accept", record: "request", from: ["proposed"], to: "accepted", actors: ["admin"], cas: ["n", "alt"], createsOp: { kind: "apply" }, message: "decision" },
    { verb: "request.reject", record: "request", from: ["proposed"], to: "queued", actors: ["admin", "editor"], cas: ["n"], message: "decision" },
    { verb: "request.reopen", record: "request", from: ["needs-you"], to: "editing", actors: ["admin", "editor"], message: "decision" },
    { verb: "request.reopen", case: "after-op", record: "request", from: ["accepted"], to: "editing", actors: ["admin", "editor"], notReleased: true, latestOp: [{ kind: "apply", status: "failed" }, { kind: "restore", status: "rendered" }], message: "decision" },
    { verb: "request.send", record: "request", from: ["editing"], to: "queued", actors: ["admin", "editor"], inkLock: "set" },
    { verb: "request.release", record: "request", from: ["queued", "working", "proposed", "needs-you", "editing"], to: "cancelled", actors: ["admin", "editor"], inkLock: "clear", lease: "drop", message: "decision" },
    { verb: "request.release", case: "accepted", record: "request", from: ["accepted"], keepsStatus: true, actors: ["admin", "editor"], notReleased: true, latestOp: [{ kind: "apply", status: "applied" }, { kind: "apply", status: "rendered" }, { kind: "restore", status: "failed" }, { kind: "reapply", status: "applied" }, { kind: "reapply", status: "rendered" }], setsReleased: true, message: "decision" },
    { verb: "request.release", case: "restored", record: "request", from: ["accepted"], to: "cancelled", actors: ["admin", "editor"], notReleased: true, latestOp: [{ kind: "restore", status: "applied" }, { kind: "restore", status: "rendered" }, { kind: "reapply", status: "failed" }], inkLock: "clear", message: "decision" },
    { verb: "request.release", case: "failed-apply", record: "request", from: ["accepted"], to: "cancelled", actors: ["admin", "editor"], notReleased: true, latestOp: [{ kind: "apply", status: "failed" }], inkLock: "clear", message: "decision" },
    { verb: "request.post", case: "note", record: "request", from: ["queued", "working", "proposed", "needs-you", "editing", "accepted"], keepsStatus: true, actors: ["admin", "editor", "drafter"], message: "note", requiresText: true, noHistory: true },
    { verb: "request.post", case: "correction", record: "request", from: ["proposed", "needs-you"], to: "queued", actors: ["admin", "editor"], message: "correction", requiresText: true },
    { verb: "request.post", case: "correction", record: "request", from: ["accepted"], to: "queued", actors: ["admin", "editor"], notReleased: true, latestOp: [{ kind: "apply", status: "failed" }], message: "correction", requiresText: true },
    { verb: "request.post", case: "correction", record: "request", from: ["queued", "working", "editing"], keepsStatus: true, actors: ["admin", "editor"], message: "correction", requiresText: true, noHistory: true },
    { verb: "op.restore", record: "request", from: ["accepted"], keepsStatus: true, actors: ["admin"], latestOp: [{ kind: "apply", status: "rendered", of: "self" }, { kind: "reapply", status: "rendered", of: "self" }, { kind: "restore", status: "failed", of: "of_op" }], createsOp: { kind: "restore", restorable: true } },
    { verb: "op.reapply", record: "request", from: ["accepted"], keepsStatus: true, actors: ["admin"], latestOp: [{ kind: "restore", status: "rendered", of: "self" }, { kind: "reapply", status: "failed", of: "of_op" }], createsOp: { kind: "reapply" } },
    { verb: "op.begin", record: "op", from: ["queued"], to: "applying", actors: ["drafter"], lease: "take", attemptsInc: true },
    { verb: "op.reclaim", record: "op", from: ["applying"], keepsStatus: true, actors: ["drafter"], lease: "take", takeover: true },
    { verb: "op.beat", record: "op", from: ["applying"], keepsStatus: true, actors: ["drafter"], lease: "renew", noHistory: true, noCalls: true },
    { verb: "op.end", case: "applied", record: "op", from: ["applying"], to: "applied", actors: ["drafter"], lease: "clear" },
    { verb: "op.end", case: "failed", record: "op", from: ["applying"], to: "failed", actors: ["drafter"], lease: "clear", error: "required" },
    { verb: "op.end", case: "conflict", record: "op", from: ["applying"], to: "failed", actors: ["drafter"], lease: "clear", error: "required", kinds: ["apply"], alsoRequest: { from: ["accepted"], to: "working", lease: "take", stage: "verifying" } },
    { verb: "op.retry", record: "op", from: ["applying"], to: "queued", actors: ["drafter"], lease: "clear", attemptsBelow: "attempts" },
    { verb: "op.render", record: "op", from: ["applied"], to: "rendered", actors: ["drafter"], requires: ["revision_after"] },
    { verb: "op.render", case: "failed", record: "op", from: ["applied"], keepsStatus: true, actors: ["drafter"], error: "required", renderAttemptsInc: true }
  ],
  reads: {
    $comment: "Read verbs (no transaction writes): any member of the project (owner or an active permission of any role) or the drafter.",
    "requests.list": { filters: ["status"] },
    "request.get": { requires: ["trace_id"] },
    "ops.list": { filters: ["request_id", "status"], requiresOne: ["request_id", "status"] },
    "worker.poll": { $comment: "R6: the worker's one read per tick -> {working, queued, ops: {queued, applied}} (requests by status; request-contract ops only)." }
  },
  cardStates: {
    $comment: "D9: the card a request shows = its status, and once accepted its latest op (ops sorted by seq). First matching row wins. `stage` overrides the request's stage on the card; `error` = show the op's error.user_text; `renderFailed` applies to a latest op in its `status` whose render_attempts reached limits.renderAttempts. `released` hides the card (history only).",
    noRequest: "not-sent",
    released: "hidden",
    byStatus: {
      queued: "drafter",
      working: "drafter",
      proposed: "proposed",
      "needs-you": "needs-you",
      editing: "editing",
      cancelled: "not-sent"
    },
    renderFailed: { status: "applied", card: "needs-you", user_text: "Applied, but the sheet did not refresh" },
    accepted: [
      { status: ["queued", "applying", "applied"], card: "drafter", stage: "applying" },
      { status: ["rendered"], kind: ["apply", "reapply"], card: "done" },
      { status: ["rendered"], kind: ["restore"], card: "restored" },
      { status: ["failed"], kind: ["apply"], card: "needs-you", error: true },
      { status: ["failed"], kind: ["restore"], card: "done", error: true },
      { status: ["failed"], kind: ["reapply"], card: "restored", error: true }
    ],
    acceptedNoOp: { card: "drafter", stage: "applying" }
  }
};
var K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var REQUEST_CONTRACT = review_request_contract_default;
var REQUEST_STATUSES = Object.keys(REQUEST_CONTRACT.statuses.request);
var OP_STATUSES = Object.keys(REQUEST_CONTRACT.statuses.op);
var REQUEST_VERBS = [...new Set(REQUEST_CONTRACT.moves.map((m) => m.verb))];
var REQUEST_INITIAL_STATUS = REQUEST_STATUSES.find((s) => REQUEST_CONTRACT.statuses.request[s].initial);
var OP_INITIAL_STATUS = OP_STATUSES.find((s) => REQUEST_CONTRACT.statuses.op[s].initial);
var REQUEST_EDITING_STATUS = REQUEST_STATUSES.find((s) => REQUEST_CONTRACT.statuses.request[s].inkEditable);
var REQUEST_INK_WRITABLE_STATUSES = REQUEST_STATUSES.filter(
  (s) => REQUEST_CONTRACT.statuses.request[s].inkEditable || REQUEST_CONTRACT.statuses.request[s].inkFree
);
var LS = new RegExp(String.fromCharCode(8232), "g");
var PS = new RegExp(String.fromCharCode(8233), "g");
var CURRENT_FORMAT_VERSION2 = "1.14";
var BIMP = "BIMP";
var SUPPORTED_FORMAT_MAJORS2 = [1];
var BIMPDF_SPEC_URL = "https://bimpdf.com/spec";
var BIMPDF_XMP_NS = "https://bimpdf.com/ns/1/";
var BIMPDF_XMP_PREFIX = "bimpdf";
var PDFBIM_LEGACY_NS = "http://pdfbim.com/ns/1.0/";
var DETECTION_ORDER = [
  "xmp-label",
  "extensions",
  "af-relationship",
  "legacy-xmp",
  "elements-attachment"
];
function readXmpValue(xmp, ns, local) {
  const prefixes = [];
  const decl = /xmlns:([A-Za-z_][\w.-]*)\s*=\s*(["'])(.*?)\2/g;
  for (let m = decl.exec(xmp); m; m = decl.exec(xmp)) if (m[3] === ns) prefixes.push(m[1]);
  for (const p of prefixes) {
    const el = new RegExp(`<${p}:${local}(?:\\s[^>]*)?>([^<]*)</${p}:${local}>`).exec(xmp);
    if (el) return decodeXml(el[1].trim());
    const attr = new RegExp(`\\b${p}:${local}\\s*=\\s*(["'])(.*?)\\1`).exec(xmp);
    if (attr) return decodeXml(attr[2].trim());
  }
  return null;
}
function decodeXml(s) {
  return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
}
function readLegacy(xmp) {
  if (!xmp || !xmp.includes(PDFBIM_LEGACY_NS)) return null;
  const packagingVersion = readXmpValue(xmp, PDFBIM_LEGACY_NS, "version");
  const generator = readXmpValue(xmp, PDFBIM_LEGACY_NS, "generator");
  if (packagingVersion === null && generator === null) return null;
  return { packagingVersion, generator };
}
function detectBimPdf(probe) {
  const xmp = probe.xmp ?? null;
  const legacy = readLegacy(xmp);
  const declared = xmp ? readXmpValue(xmp, BIMPDF_XMP_NS, "formatVersion") : null;
  const elementsVersion = probe.elementsVersion ?? null;
  const base = (rung) => ({
    rung,
    formatVersion: elementsVersion ?? declared,
    declaredVersion: declared,
    conformance: null,
    archival: null,
    legacy,
    versionMismatch: declared !== null && elementsVersion !== null && declared !== elementsVersion
  });
  if (declared !== null) {
    const out = base("xmp-label");
    const conf = xmp ? readXmpValue(xmp, BIMPDF_XMP_NS, "conformance") : null;
    out.conformance = conf === "core" || conf === "drawing" ? conf : null;
    out.archival = xmp ? readXmpValue(xmp, BIMPDF_XMP_NS, "archival") : null;
    return out;
  }
  if (probe.extensionPrefixes?.includes(BIMP)) return base("extensions");
  const attachments = probe.attachments ?? [];
  if (attachments.some((a) => a.afRelationship === `${BIMP}_Elements`)) return base("af-relationship");
  if (legacy) return base("legacy-xmp");
  if (attachments.some((a) => a.name === "elements.json")) return base("elements-attachment");
  return null;
}
var DEFAULT_READING_HINT = "This PDF carries building data as attached JSON files; start with elements.json and README-agent.md.";
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var EXT_SCHEMA_PROPS = [
  ["formatVersion", "Text", "bim-pdf sidecar format version, MAJOR.MINOR."],
  ["conformance", "Text", "Conformance level: core or drawing."],
  ["archival", "Text", "Archival flag: pdfa-3b when the file also passes PDF/A-3b."],
  ["spec", "URI", "URL of the format specification."],
  ["readingHint", "Text", "One sentence telling a reader how to read this file."]
];
function buildPdfaExtensionSchema() {
  const props = EXT_SCHEMA_PROPS.map(
    ([name, type, desc]) => `<rdf:li rdf:parseType="Resource"><pdfaProperty:name>${name}</pdfaProperty:name><pdfaProperty:valueType>${type}</pdfaProperty:valueType><pdfaProperty:category>external</pdfaProperty:category><pdfaProperty:description>${esc(desc)}</pdfaProperty:description></rdf:li>`
  ).join("");
  return `<rdf:Description rdf:about="" xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/" xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#" xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#"><pdfaExtension:schemas><rdf:Bag><rdf:li rdf:parseType="Resource"><pdfaSchema:schema>bim-pdf declaration</pdfaSchema:schema><pdfaSchema:namespaceURI>${BIMPDF_XMP_NS}</pdfaSchema:namespaceURI><pdfaSchema:prefix>${BIMPDF_XMP_PREFIX}</pdfaSchema:prefix><pdfaSchema:property><rdf:Seq>${props}</rdf:Seq></pdfaSchema:property></rdf:li></rdf:Bag></pdfaExtension:schemas></rdf:Description>`;
}
function buildXmpLabel(opts) {
  const v = opts.formatVersion ?? CURRENT_FORMAT_VERSION2;
  const parts = [
    `<${BIMPDF_XMP_PREFIX}:formatVersion>${esc(v)}</${BIMPDF_XMP_PREFIX}:formatVersion>`,
    `<${BIMPDF_XMP_PREFIX}:conformance>${opts.conformance}</${BIMPDF_XMP_PREFIX}:conformance>`
  ];
  if (opts.archival) parts.push(`<${BIMPDF_XMP_PREFIX}:archival>${opts.archival}</${BIMPDF_XMP_PREFIX}:archival>`);
  parts.push(`<${BIMPDF_XMP_PREFIX}:spec>${esc(opts.spec ?? BIMPDF_SPEC_URL)}</${BIMPDF_XMP_PREFIX}:spec>`);
  parts.push(
    `<${BIMPDF_XMP_PREFIX}:readingHint>${esc(opts.readingHint ?? DEFAULT_READING_HINT)}</${BIMPDF_XMP_PREFIX}:readingHint>`
  );
  return `<rdf:Description rdf:about="" xmlns:${BIMPDF_XMP_PREFIX}="${BIMPDF_XMP_NS}">${parts.join("")}</rdf:Description>`;
}
var PACKET_HEAD = '<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>';
var PACKET_TAIL = '<?xpacket end="w"?>';
function buildXmpPacket(opts) {
  return `${PACKET_HEAD}
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">${buildXmpLabel(opts)}${buildPdfaExtensionSchema()}</rdf:RDF></x:xmpmeta>
${PACKET_TAIL}`;
}
function mergeXmpLabel(existing, opts) {
  if (!existing || !/<\/rdf:RDF>/.test(existing)) return buildXmpPacket(opts);
  let xmp = existing;
  xmp = stripDescriptions(xmp, (d) => d.includes(`xmlns:${BIMPDF_XMP_PREFIX}=`) && d.includes(BIMPDF_XMP_NS));
  xmp = stripDescriptions(xmp, (d) => d.includes("<pdfaExtension:schemas>") && d.includes(BIMPDF_XMP_NS));
  return xmp.replace(/<\/rdf:RDF>/, `${buildXmpLabel(opts)}${buildPdfaExtensionSchema()}</rdf:RDF>`);
}
function stripDescriptions(xmp, drop) {
  return xmp.replace(/<rdf:Description\b[\s\S]*?<\/rdf:Description>|<rdf:Description\b[^>]*\/>/g, (d) => drop(d) ? "" : d);
}
function buildExtensionsEntry() {
  return { key: BIMP, baseVersion: "1.7", extensionLevel: 1, url: BIMPDF_SPEC_URL };
}
var CANONICAL_SIDECAR_ROLES = {
  "elements.json": "elements (the anchor)",
  "marks.json": "marks",
  "scales.json": "scales",
  "levels.json": "levels",
  "titleblock.json": "title block",
  "annotations.json": "annotations",
  "model3d.json": "3D views",
  "schedules.json": "schedules",
  "ifc-subset.json": "IFC subset",
  "pages.json": "page manifest",
  "README-agent.md": "reading guide"
};
function mimeOf(name) {
  if (name.endsWith(".json")) return "application/json";
  if (name.endsWith(".glb")) return "model/gltf-binary";
  if (name.endsWith(".md")) return "text/markdown";
  return "application/octet-stream";
}
function afRelationshipFor(name) {
  if (name === "elements.json") return `${BIMP}_Elements`;
  if (name === "README-agent.md" || /^model_.*\.glb$/.test(name)) return "Supplement";
  if (Object.prototype.hasOwnProperty.call(CANONICAL_SIDECAR_ROLES, name)) return "Data";
  return "Supplement";
}
function declareAttachment(name) {
  const role = CANONICAL_SIDECAR_ROLES[name] ?? (/^model_.*\.glb$/.test(name) ? "3D model (glTF)" : "app-private data");
  return {
    name,
    afRelationship: afRelationshipFor(name),
    desc: `bim-pdf ${role}: ${name} (${BIMPDF_SPEC_URL})`,
    subtype: mimeOf(name).replace("/", "#2F")
  };
}
function writeDeclaration(opts) {
  return {
    xmp: mergeXmpLabel(opts.existingXmp, opts),
    extensions: buildExtensionsEntry(),
    attachments: opts.attachmentNames.map(declareAttachment)
  };
}
export {
  BIMP,
  BIMPDF_SPEC_URL,
  BIMPDF_XMP_NS,
  CURRENT_FORMAT_VERSION2 as CURRENT_FORMAT_VERSION,
  DETECTION_ORDER,
  SUPPORTED_FORMAT_MAJORS2 as SUPPORTED_FORMAT_MAJORS,
  VALIDATABLE_SIDECARS,
  afRelationshipFor,
  assertValidSidecar,
  bim_pdf_1_14_schema_default as bimPdfSchema,
  bim_pdf_1_0_schema_default as bimPdfSchemaV10,
  bim_pdf_1_1_schema_default as bimPdfSchemaV11,
  bim_pdf_1_2_schema_default as bimPdfSchemaV12,
  bim_pdf_1_3_schema_default as bimPdfSchemaV13,
  bim_pdf_1_4_schema_default as bimPdfSchemaV14,
  bim_pdf_1_5_schema_default as bimPdfSchemaV15,
  checkFormatVersion,
  checkMarkViewports,
  declareAttachment,
  detectBimPdf,
  isValidatableSidecar,
  validatePackage,
  validateSidecar,
  writeDeclaration
};
