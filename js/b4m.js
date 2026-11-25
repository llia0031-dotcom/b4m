// ---------------------------------------------------------------- Language
// The game can be played in English or in Chinese: the switch is in the Layers bar
let lang = "en";
try {
  lang = "zh" === window.localStorage.getItem("b4mLang") ? "zh" : "en";
} catch (e) {}
function isZh() {
  return "zh" === lang;
}
function L(en, zh) {
  return isZh() && void 0 !== zh ? zh : en;
}
const originalUnitSize = 120,
  displayUnitSize = 60,
  extendHexProperties = { size: { width: 114.55, height: 101.9 }, orientation: "flat", offset: 1 },
  templateCustomProperties = {
    terrain: "off",
    city: "none",
    river: [],
    rail: [],
    germanStart: !1,
    control: null,
  },
  Hex = Honeycomb.extendHex({ ...extendHexProperties, ...templateCustomProperties }),
  Grid = Honeycomb.defineGrid(Hex),
  grid = Grid.rectangle({ width: 14, height: 11, start: [0, 0], direction: 1 }),
  b4mGrid = [
    { x: 0, y: 0, terrain: "open", germanReplacement: !0 },
    { x: 0, y: 1, terrain: "open", rail: ["NW", "NE"], germanReplacement: !0 },
    { x: 0, y: 2, terrain: "open", germanStart: !0, germanReplacement: !0 },
    { x: 0, y: 3, terrain: "open", germanStart: !0, germanReplacement: !0 },
    { x: 0, y: 4, terrain: "open", river: ["S", "SE"], rail: ["NW", "NE"], germanReplacement: !0 },
    { x: 0, y: 5, terrain: "open", river: ["N"], germanStart: !0, germanReplacement: !0 },
    { x: 0, y: 6, terrain: "open", germanReplacement: !0 },
    { x: 0, y: 7, terrain: "open", germanReplacement: !0 },
    { x: 0, y: 8, terrain: "forest", germanReplacement: !0 },
    { x: 0, y: 9, terrain: "open", rail: ["SW", "NE"], germanReplacement: !0 },
    { x: 0, y: 10, terrain: "open", germanReplacement: !0 },
    { x: 1, y: 1, terrain: "forest", rail: ["SW", "SE"], germanStart: !0 },
    { x: 1, y: 2, terrain: "forest", germanStart: !0 },
    { x: 1, y: 3, terrain: "forest", germanStart: !0 },
    {
      x: 1,
      y: 4,
      terrain: "open",
      city: "normal",
      river: ["S"],
      rail: ["SW", "S", "SE"],
      germanStart: !0,
      control: "german",
    },
    { x: 1, y: 5, terrain: "open", river: ["NW", "N", "NE"], rail: ["N", "SE"], germanStart: !0 },
    { x: 1, y: 6, terrain: "open", germanStart: !0 },
    { x: 1, y: 7, terrain: "forest" },
    { x: 1, y: 8, terrain: "forest" },
    { x: 1, y: 9, terrain: "forest", rail: ["SW", "SE"], germanStart: !0 },
    { x: 1, y: 10, terrain: "forest", germanStart: !0 },
    { x: 2, y: 0, terrain: "forest" },
    { x: 2, y: 1, terrain: "open", rail: ["NW", "NE"] },
    { x: 2, y: 2, terrain: "open" },
    { x: 2, y: 3, terrain: "open" },
    { x: 2, y: 4, terrain: "open", river: ["SW", "S", "SE"], rail: ["NW", "NE"], germanStart: !0 },
    { x: 2, y: 5, terrain: "open", river: ["N"], rail: ["NW", "S"], germanStart: !0 },
    {
      x: 2,
      y: 6,
      terrain: "open",
      city: "normal",
      rail: ["N", "SE"],
      germanStart: !0,
      control: "german",
    },
    { x: 2, y: 7, terrain: "forest" },
    { x: 2, y: 8, terrain: "forest", germanStart: !0 },
    { x: 2, y: 9, terrain: "open", rail: ["NW", "NE"], germanStart: !0 },
    { x: 2, y: 10, terrain: "forest" },
    { x: 3, y: 1, terrain: "forest", rail: ["SW", "SE"] },
    { x: 3, y: 2, terrain: "open" },
    { x: 3, y: 3, terrain: "open", river: ["SE"] },
    { x: 3, y: 4, terrain: "open", river: ["S", "SE", "NE"], rail: ["SW", "NE"], germanStart: !0 },
    { x: 3, y: 5, terrain: "forest", river: ["NW", "N"] },
    { x: 3, y: 6, terrain: "open", germanStart: !0 },
    { x: 3, y: 7, terrain: "open", rail: ["NW", "SE"], germanStart: !0 },
    { x: 3, y: 8, terrain: "forest", germanStart: !0 },
    { x: 3, y: 9, terrain: "forest", rail: ["SW", "NE"], germanStart: !0 },
    { x: 3, y: 10, terrain: "open", germanStart: !0 },
    { x: 4, y: 0, terrain: "fortification" },
    { x: 4, y: 1, terrain: "fortification", rail: ["NW", "NE"] },
    { x: 4, y: 2, terrain: "fortification", river: ["S", "SE"] },
    { x: 4, y: 3, terrain: "fortification", river: ["SW", "NW", "N", "SE"], rail: ["SW", "NE"] },
    { x: 4, y: 4, terrain: "fortification", river: ["S", "SE", "NE", "NW"] },
    { x: 4, y: 5, terrain: "fortification", river: ["N"] },
    { x: 4, y: 6, terrain: "fortification" },
    { x: 4, y: 7, terrain: "open", rail: ["NW", "S"] },
    {
      x: 4,
      y: 8,
      terrain: "open",
      city: "normal",
      rail: ["N", "SW", "S", "SE", "NE"],
      control: "soviet",
    },
    { x: 4, y: 9, terrain: "forest", rail: ["N", "S"] },
    { x: 4, y: 10, terrain: "forest", rail: ["N", "S"] },
    { x: 5, y: 1, terrain: "open", city: "nornal", rail: ["SW", "S", "SE"], control: "soviet" },
    { x: 5, y: 2, terrain: "open", rail: ["N", "S"] },
    {
      x: 5,
      y: 3,
      terrain: "open",
      city: "normal",
      river: ["NW", "S"],
      rail: ["SW", "N", "SE"],
      control: "soviet",
    },
    { x: 5, y: 4, terrain: "forest", river: ["SW", "NW", "N", "NE", "SE"] },
    { x: 5, y: 5, terrain: "open", river: ["NW", "NE"] },
    { x: 5, y: 6, terrain: "open" },
    { x: 5, y: 7, terrain: "open" },
    { x: 5, y: 8, terrain: "open", rail: ["SW", "NE"] },
    { x: 5, y: 9, terrain: "open", rail: ["NW", "SE"] },
    { x: 5, y: 10, terrain: "open" },
    { x: 6, y: 0, terrain: "forest" },
    { x: 6, y: 1, terrain: "forest", rail: ["NW", "SE"] },
    { x: 6, y: 2, terrain: "forest" },
    { x: 6, y: 3, terrain: "forest", river: ["SW"], rail: ["NW", "NE"] },
    { x: 6, y: 4, terrain: "open", river: ["NW", "SW", "S"] },
    { x: 6, y: 5, terrain: "open", river: ["N", "NE"] },
    { x: 6, y: 6, terrain: "open", rail: ["S", "NE"] },
    { x: 6, y: 7, terrain: "forest", rail: ["SW", "N"] },
    { x: 6, y: 8, terrain: "open" },
    { x: 6, y: 9, terrain: "open", rail: ["NW", "NE"] },
    { x: 6, y: 10, terrain: "open" },
    { x: 7, y: 1, terrain: "fortification" },
    { x: 7, y: 2, terrain: "fortification", rail: ["NW", "NE"] },
    { x: 7, y: 3, terrain: "fortification", city: "normal", rail: ["SW", "NE"], control: "soviet" },
    { x: 7, y: 4, terrain: "fortification" },
    {
      x: 7,
      y: 5,
      terrain: "fortification",
      city: "normal",
      river: ["SW", "S"],
      rail: ["S", "NE"],
      control: "soviet",
    },
    { x: 7, y: 6, terrain: "forest", river: ["N", "NE", "SE"], rail: ["N", "SW"] },
    { x: 7, y: 7, terrain: "open", river: ["NE", "SE"] },
    { x: 7, y: 8, terrain: "open", river: ["NE"] },
    { x: 7, y: 9, terrain: "open", city: "normal", rail: ["SW", "NE"], control: "soviet" },
    { x: 7, y: 10, terrain: "open" },
    { x: 8, y: 0, terrain: "forest", rail: ["NW", "SE"] },
    { x: 8, y: 1, terrain: "forest", rail: ["SW", "SE"] },
    { x: 8, y: 2, terrain: "open", rail: ["SW", "SE"] },
    { x: 8, y: 3, terrain: "open", river: ["S"], rail: ["S", "NE"] },
    { x: 8, y: 4, terrain: "forest", river: ["N", "NE"], rail: ["SW", "N"] },
    { x: 8, y: 5, terrain: "forest", river: ["SW", "S", "SE"] },
    { x: 8, y: 6, terrain: "open", river: ["SW", "NW", "N"] },
    { x: 8, y: 7, terrain: "open", river: ["S", "SW", "NW"] },
    { x: 8, y: 8, terrain: "open", river: ["N", "NE", "SE"], rail: ["SW", "NE"] },
    { x: 8, y: 9, terrain: "open", river: ["NE", "SE"] },
    { x: 8, y: 10, terrain: "open", river: ["NE"] },
    { x: 9, y: 1, terrain: "fortification", river: ["NE", "SE"], rail: ["NW", "S"] },
    { x: 9, y: 2, terrain: "fortification", river: ["NE", "SE"], rail: ["NW", "N", "SE"] },
    { x: 9, y: 3, terrain: "fortification", river: ["NE"], rail: ["NW", "SW", "NE"] },
    { x: 9, y: 4, terrain: "fortification", river: ["SW", "S"] },
    { x: 9, y: 5, terrain: "open", river: ["N", "NE", "SE", "S"] },
    { x: 9, y: 6, terrain: "open", river: ["NW", "N"] },
    { x: 9, y: 7, terrain: "open" },
    { x: 9, y: 8, terrain: "open", river: ["SW"], rail: ["SW", "NE"] },
    { x: 9, y: 9, terrain: "open", river: ["NW", "SW"] },
    { x: 9, y: 10, terrain: "open", river: ["NW", "SW"], sovietReplacement: !0 },
    { x: 10, y: 0, terrain: "open", river: ["SW"], sovietReplacement: !0 },
    { x: 10, y: 1, terrain: "fortification", river: ["SW", "NW"], rail: ["S", "NE"] },
    {
      x: 10,
      y: 2,
      terrain: "open",
      city: "moscow",
      river: ["S", "SW", "NW"],
      rail: ["N", "NE", "SE", "S", "SW", "NW"],
      control: "soviet",
    },
    { x: 10, y: 3, terrain: "fortification", river: ["N", "NE"], rail: ["S", "N"] },
    { x: 10, y: 4, terrain: "fortification", river: ["SW", "S", "SE"], rail: ["S", "N"] },
    { x: 10, y: 5, terrain: "fortification", river: ["NW", "N"], rail: ["S", "N"] },
    { x: 10, y: 6, terrain: "fortification", city: "major", rail: ["S", "N"], control: "soviet" },
    { x: 10, y: 7, terrain: "open", rail: ["N", "SW"] },
    { x: 10, y: 8, terrain: "open" },
    { x: 10, y: 9, terrain: "open" },
    { x: 10, y: 10, terrain: "open", sovietReplacement: !0 },
    { x: 11, y: 1, terrain: "forest", rail: ["SW", "SE", "NE"], sovietReplacement: !0 },
    { x: 11, y: 2, terrain: "open", rail: ["SW", "SE"] },
    { x: 11, y: 3, terrain: "fortification", river: ["SW", "S"], rail: ["NW", "S", "SE"] },
    { x: 11, y: 4, terrain: "open", river: ["S", "SE", "NE", "N"], rail: ["N", "SE"] },
    { x: 11, y: 5, terrain: "open", river: ["N", "NW"] },
    { x: 11, y: 6, terrain: "open" },
    { x: 11, y: 7, terrain: "open" },
    { x: 11, y: 8, terrain: "open" },
    { x: 11, y: 9, terrain: "open" },
    { x: 11, y: 10, terrain: "open", sovietReplacement: !0 },
    { x: 12, y: 0, terrain: "open", rail: ["SW", "NE"], sovietReplacement: !0 },
    { x: 12, y: 1, terrain: "open", rail: ["NW", "NE"] },
    { x: 12, y: 2, terrain: "forest", rail: ["NW", "NE"] },
    { x: 12, y: 3, terrain: "open", river: ["S", "SW"], rail: ["NW", "NE"] },
    { x: 12, y: 4, terrain: "open", river: ["NW", "N", "NE"], rail: ["NW", "SE"] },
    { x: 12, y: 5, terrain: "open" },
    { x: 12, y: 6, terrain: "open" },
    { x: 12, y: 7, terrain: "open" },
    { x: 12, y: 8, terrain: "open" },
    { x: 12, y: 9, terrain: "open" },
    { x: 12, y: 10, terrain: "open", sovietReplacement: !0 },
    { x: 13, y: 1, terrain: "open", rail: ["SW", "SE"], sovietReplacement: !0 },
    { x: 13, y: 2, terrain: "open", rail: ["SW", "SE"], sovietReplacement: !0 },
    { x: 13, y: 3, terrain: "open", rail: ["SW", "SE"], sovietReplacement: !0 },
    { x: 13, y: 4, terrain: "forest", river: ["SW", "S"], sovietReplacement: !0 },
    {
      x: 13,
      y: 5,
      terrain: "open",
      city: "normal",
      river: ["N"],
      rail: ["NW", "S"],
      sovietReplacement: !0,
      control: "soviet",
    },
    { x: 13, y: 6, terrain: "open", rail: ["N", "SE"], sovietReplacement: !0 },
    { x: 13, y: 7, terrain: "open", sovietReplacement: !0 },
    { x: 13, y: 8, terrain: "open", sovietReplacement: !0 },
    { x: 13, y: 9, terrain: "open", sovietReplacement: !0 },
    { x: 13, y: 10, terrain: "open", sovietReplacement: !0 },
  ];
for (var i = 0; i < b4mGrid.length; i++)
  grid.set([b4mGrid[i].x, b4mGrid[i].y], Hex({ ...templateCustomProperties, ...b4mGrid[i] }));
let b4mUnits = [
  {
    id: "s1sh",
    pos: 0,
    army: "soviet",
    type: "shock",
    size: "XXXX",
    combatFull: 10,
    combatReduced: 5,
    movement: 4,
    strength: "full",
  },
  {
    id: "s3",
    pos: 1,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 2, y: 0 },
  },
  {
    id: "s5",
    pos: 2,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 2, y: 1 },
  },
  {
    id: "s10",
    pos: 3,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 2, y: 2 },
  },
  {
    id: "s13",
    pos: 4,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 2, y: 3 },
  },
  {
    id: "s16",
    pos: 5,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 2 },
  },
  {
    id: "s19",
    pos: 6,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 3, y: 5 },
  },
  {
    id: "s20",
    pos: 7,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 5 },
  },
  {
    id: "s24",
    pos: 8,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 6 },
  },
  {
    id: "s29",
    pos: 9,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 7 },
  },
  {
    id: "s30",
    pos: 10,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 5, y: 8 },
  },
  {
    id: "s32",
    pos: 11,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 8 },
  },
  {
    id: "s33",
    pos: 12,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 9 },
  },
  {
    id: "s40",
    pos: 13,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 4, y: 10 },
  },
  {
    id: "s43",
    pos: 14,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
    position: { x: 7, y: 3 },
  },
  {
    id: "s49",
    pos: 15,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
  },
  {
    id: "s50",
    pos: 16,
    army: "soviet",
    type: "infantry",
    size: "XXXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "reduced",
  },
  {
    id: "g24",
    pos: 0,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: "full",
  },
  {
    id: "g41",
    pos: 1,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: "full",
  },
  {
    id: "g57",
    pos: 2,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 12,
    combatReduced: 6,
    movement: 6,
    strength: "full",
  },
  {
    id: "g46",
    pos: 3,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 10,
    combatReduced: 5,
    movement: 6,
    strength: "full",
  },
  {
    id: "g47",
    pos: 4,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 9,
    combatReduced: 4,
    movement: 6,
    strength: "full",
  },
  {
    id: "g56",
    pos: 5,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 9,
    combatReduced: 4,
    movement: 6,
    strength: "full",
  },
  {
    id: "g40",
    pos: 6,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 6,
    strength: "full",
  },
  {
    id: "g48",
    pos: 7,
    army: "german",
    type: "tank",
    size: "XXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 6,
    strength: "full",
  },
  {
    id: "g23",
    pos: 8,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "full",
  },
  {
    id: "g35",
    pos: 9,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 8,
    combatReduced: 4,
    movement: 4,
    strength: "full",
  },
  {
    id: "g7",
    pos: 10,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g8",
    pos: 11,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g9",
    pos: 12,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 7,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g5",
    pos: 13,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g13",
    pos: 14,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g20",
    pos: 15,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g27",
    pos: 16,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g53",
    pos: 17,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 4,
    strength: "full",
  },
  {
    id: "g6",
    pos: 18,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 5,
    combatReduced: 2,
    movement: 4,
    strength: "full",
  },
  {
    id: "g12",
    pos: 19,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 5,
    combatReduced: 2,
    movement: 4,
    strength: "full",
  },
  {
    id: "g34",
    pos: 20,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 4,
    combatReduced: 2,
    movement: 4,
    strength: "full",
  },
  {
    id: "g42",
    pos: 21,
    army: "german",
    type: "infantry",
    size: "XXX",
    combatFull: 4,
    combatReduced: 2,
    movement: 4,
    strength: "full",
  },
  // Winter counteroffensive: Stavka reserves committed on turn 8
  {
    id: "s1gc",
    pos: 0,
    sheet: "soviets_cavalry",
    army: "soviet",
    type: "cavalry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 6,
    strength: "full",
  },
  {
    id: "s2gc",
    pos: 1,
    sheet: "soviets_cavalry",
    army: "soviet",
    type: "cavalry",
    size: "XXX",
    combatFull: 6,
    combatReduced: 3,
    movement: 6,
    strength: "full",
  },
];
const b4mDefaultUnits = JSON.parse(JSON.stringify(b4mUnits));

// ---------------------------------------------------------------- Winter counteroffensive
const LAST_TURN = 9,
  WINTER_START = 8,
  MAX_PARTISANS = 6,
  SPECIAL_ARRIVALS = {
    // turn 3: the NKVD brigade (a command decision)
    3: {},
    4: { units: ["s1sh"] },
    8: { units: ["s1gc", "s2gc"], ski: 3, partisans: 2 },
    9: { partisans: 1 },
  };
let partisans = [],
  partisanTowns = [],
  reinforcementAIToken = null;
function isWinterTurn() {
  return currentTurn.turn >= WINTER_START;
}
function arrivalTurnOf(e) {
  for (const t in SPECIAL_ARRIVALS)
    if ((SPECIAL_ARRIVALS[t].units || []).indexOf(e) > -1) return Number(t);
  return 0;
}
// Soviet party-history collections of the 1960s record detachments fighting behind the German lines since
// the summer of 1941, among them the Klintsy detachment west of Bryansk (fighting since 20 August) and the
// «Alexei» detachment on the border of the Smolensk and Kalinin regions. Others were left behind in advance
// and went into the forests when their town fell: in Bryansk the city detachment of I. Kravtsov (150 men in
// five groups, with its bases chosen in the forests beforehand), in Rzhev, Vyazma and the Mozhaisk district.
const INITIAL_PARTISANS = [
    { x: 0, y: 8, strength: 2 },
    { x: 0, y: 0, strength: 2 },
  ],
  STAY_BEHIND = {
    "4,8": { strength: 2, en: "The Bryansk city detachment of I. Kravtsov, 150 men in five groups", zh: "克拉夫佐夫的布良斯克市游击队，150 人，分 5 个组" },
    "5,1": { strength: 1, en: "The Rzhev detachment, into the Opekalovskaya forest", zh: "勒热夫游击队，进入奥佩卡洛夫斯卡亚林地" },
    "5,3": { strength: 1, en: "The Vyazma district detachment, formed from the destroyer battalion", zh: "由歼击营改编的维亚济马区游击队" },
    "7,3": { strength: 1, en: "The Mozhaisk district detachment", zh: "莫扎伊斯克区游击队" },
  };
let stayBehindPending = [],
  stayBehindDone = [];
// A town of the list falls: its group will go into the forests (if the Red Army retakes the town first, it stays)
function stayBehindTownChanged(hex, to) {
  const key = hex.x + "," + hex.y,
    k = stayBehindPending.indexOf(key);
  if (!STAY_BEHIND[key]) return;
  "german" === to
    ? stayBehindDone.indexOf(key) < 0 && k < 0 && stayBehindPending.push(key)
    : k > -1 && stayBehindPending.splice(k, 1);
}
// The nearest empty forest hex within 2 hexes of the town, not next to German units
function stayBehindHex(key) {
  const c = key.split(","),
    town = grid.get({ x: +c[0], y: +c[1] });
  return (
    b4mGrid
      .map(function (e) {
        return grid.get({ x: e.x, y: e.y });
      })
      .filter(function (e) {
        return "forest" === e.terrain && !lookupUnit(e) && !partisanAt(e) && !isEZOC(e, "soviet") && town.distance(e) <= 2;
      })
      .sort(function (e, t) {
        return town.distance(e) - town.distance(t);
      })[0] || null
  );
}
// At the start of the Russian reinforcement step the groups of the fallen towns go into the forests; they act
// from the next turn. A group with no free forest near its town waits for one.
function raiseStayBehind() {
  const notes = [];
  for (const key of stayBehindPending.slice()) {
    if (partisans.length >= MAX_PARTISANS) break;
    const h = stayBehindHex(key);
    if (!h) continue;
    const g = STAY_BEHIND[key];
    (partisans.push({ x: h.x, y: h.y, strength: g.strength, acted: !0 }),
      stayBehindPending.splice(stayBehindPending.indexOf(key), 1),
      stayBehindDone.push(key),
      notes.push(L(g.en, g.zh)));
  }
  notes.length &&
    (drawPartisans(),
    showEventBanner(
      '<small class="banner_kicker">Все, как один, на защиту Отчизны!</small><img src="img/soviet_marker.png" />' +
        L("The stay-behind groups go into the forests", "留守的游击队进入森林") +
        "<span>" +
        notes.join(L("; ", "；")) +
        L(". They act from the next turn.", "。它们从下回合起行动。") +
        "</span>",
      8e3,
    ));
  return notes;
}
function hasReinforcementStep(e) {
  return !!SPECIAL_ARRIVALS[e] || partisans.length > 0 || stayBehindPending.length > 0;
}
function hasPartisan(e) {
  return (
    !!e &&
    partisans.some(function (t) {
      return t.x === e.x && t.y === e.y;
    })
  );
}
function nearPartisans(e) {
  if (!e) return !1;
  if (hasPartisan(e)) return !0;
  for (const t of grid.neighborsOf(e)) if (t && hasPartisan(t)) return !0;
  return !1;
}
// A pair of skis drawn left of the unit symbol, in the counter's own line style (k: scale, 1 = 60 px counter)
function drawSkiPair(e, t, n, i) {
  (e.save(), (e.strokeStyle = "#211c21"), (e.lineCap = "round"), (e.lineWidth = 1.15 * i));
  for (const o of [28.2, 31.6])
    (e.beginPath(),
      e.moveTo(t + 15.2 * i, n + o * i),
      e.lineTo(t + 6.8 * i, n + o * i),
      e.quadraticCurveTo(t + 4.2 * i, n + o * i, t + 3.8 * i, n + (o - 2.4) * i),
      e.stroke());
  e.restore();
}
function drawSkiBadge(e, t, n) {
  drawSkiPair(e, t, n, 1);
}
// A partisan band. The badge has the colours of the flag of the USSR, red with the gold hammer and sickle.
// On it a partisan kneels and aims his rifle, bayonet fixed, after the photograph of the partisans of the
// Borovsk district by V. Zunin (Moscow region, 1941), in the fur cap with ear flaps and the red star, and boots.
function piPoly(e, p) {
  e.moveTo(p[0][0], p[0][1]);
  for (let n = 1; n < p.length; n++) e.lineTo(p[n][0], p[n][1]);
  e.closePath();
}
function piBody(e) {
  (e.beginPath(),
    e.ellipse(46, 29, 8.3, 9, -0.35, 0, 2 * Math.PI),
    piPoly(e, [[50, 24], [55.5, 27.5], [54.5, 29.5], [56, 31], [53.5, 35], [50, 36]]),
    piPoly(e, [[38, 25], [52, 31], [60, 42], [58, 56], [44, 64], [30, 62], [22, 50], [26, 35]]),
    piPoly(e, [[50, 36], [70, 38], [72, 43], [52, 46]]),
    piPoly(e, [[44, 44], [56, 46], [58, 52], [46, 54]]),
    piPoly(e, [[40, 58], [60, 64], [64, 70], [62, 74], [50, 74], [38, 68]]),
    piPoly(e, [[28, 58], [40, 64], [36, 82], [33, 84], [28, 82], [26, 80]]));
}
// the boots: the front one upright, toe forward; the back one lying on its instep, toe pointing back
function piBoots(e) {
  (e.beginPath(),
    piPoly(e, [[49.5, 71.5], [62.5, 71.5], [60.5, 84], [63.5, 86.5], [65, 89], [65, 91.5], [48.5, 91.5], [48.5, 87.5], [50.5, 84]]),
    piPoly(e, [[35.5, 85], [34, 80], [22, 80.5], [15, 82.5], [9, 85], [5.5, 88], [6, 91.5], [35, 91.5]]));
}
function piCuffs(e) {
  (e.beginPath(), e.moveTo(49.8, 74.3), e.lineTo(62.2, 74.3), e.moveTo(31.2, 80.3), e.lineTo(32, 91));
}
// the cap: the cloth crown, the fur of the turned-up flaps and the ear flap hanging down
function piCrown(e) {
  (e.beginPath(), e.roundRect(37.5, 8.5, 18, 7, 3));
}
function piFur(e) {
  (e.beginPath(), e.roundRect(33, 12.5, 27.5, 12.5, 4.5), e.roundRect(34.5, 21, 8.5, 15, 4));
}
function piStar(e, cx, cy, R) {
  e.beginPath();
  for (let k = 0; k < 10; k++) {
    const a = -Math.PI / 2 + (k * Math.PI) / 5,
      q = k % 2 ? 0.42 * R : R;
    e.lineTo(cx + q * Math.cos(a), cy + q * Math.sin(a));
  }
  e.closePath();
}
function piSeg(e, w, a, b, c, d) {
  ((e.lineWidth = w), e.beginPath(), e.moveTo(a, b), e.lineTo(c, d), e.stroke());
}
function piRifle(e, k) {
  (piSeg(e, 3.6 + k, 40, 47, 90, 28), piSeg(e, 1.8 + 0.6 * k, 90, 28, 98, 25), piSeg(e, 5.5 + k, 37, 48.5, 50, 43.5));
}
// The hammer and sickle of the Soviet flag, drawn in a box of size s at (x, y)
function hammerAndSickle(e, x, y, s, col) {
  const d = Math.PI / 180;
  (e.save(),
    e.translate(x, y),
    e.scale(s / 100, s / 100),
    (e.fillStyle = col),
    (e.strokeStyle = col),
    e.beginPath(),
    e.arc(52, 48, 30, 135 * d, -125 * d, !0),
    e.arc(49, 45, 23, -125 * d, 135 * d, !1),
    e.closePath(),
    e.fill(),
    (e.lineCap = "round"),
    piSeg(e, 9, 17, 83, 30, 70),
    (e.lineCap = "butt"),
    piSeg(e, 8, 34, 34, 80, 80),
    e.translate(32, 32),
    e.rotate(-Math.PI / 4),
    e.fillRect(-17, -7, 34, 13),
    e.restore());
}
function drawPartisanMarker(e, t, n, i, s) {
  const o = 1.6 * i,
    r = t - o / 2,
    a = n - o / 2;
  (e.save(),
    e.translate(r, a),
    e.scale(o / 100, o / 100),
    // the badge: the red of the Soviet flag with the gold hammer and sickle
    e.beginPath(),
    e.roundRect(2, 2, 96, 96, 10),
    (e.fillStyle = "#c8102e"),
    e.fill(),
    (e.lineWidth = 4),
    (e.strokeStyle = "#3a0a0c"),
    e.stroke(),
    hammerAndSickle(e, 5, 6, 24, "#f2c230"),
    // the partisan in black: the outline first, then the fill, so that only the outer edge shows
    (e.lineCap = "round"),
    (e.lineJoin = "round"),
    (e.strokeStyle = "#161010"));
  for (const f of [piBody, piBoots, piCrown, piFur]) (f(e), (e.lineWidth = 4.4), e.stroke());
  (piRifle(e, 2.8),
    piBody(e),
    (e.fillStyle = "#161010"),
    e.fill(),
    piBoots(e),
    e.fill(),
    piCuffs(e),
    (e.strokeStyle = "#5a4e48"),
    (e.lineWidth = 1.3),
    e.stroke(),
    (e.strokeStyle = "#161010"),
    piRifle(e, 0),
    piCrown(e),
    e.fill(),
    piFur(e),
    (e.fillStyle = "#5a4e48"),
    e.fill(),
    (e.strokeStyle = "#3a322e"));
  for (const x of [37, 41, 45, 49]) piSeg(e, 0.9, x, 14.5, x - 1.5, 23);
  (piStar(e, 56.5, 18.5, 4.2),
    (e.fillStyle = "#ff2a35"),
    e.fill(),
    (e.strokeStyle = "#7a0008"),
    (e.lineWidth = 0.8),
    e.stroke());
  s &&
    ((e.fillStyle = "#f2c230"),
    e.fillRect(68, 66, 26, 28),
    (e.strokeStyle = "#3a0a0c"),
    (e.lineWidth = 2),
    e.strokeRect(68, 66, 26, 28),
    (e.fillStyle = "#3a0a0c"),
    (e.font = "bold 24px Arial, sans-serif"),
    (e.textAlign = "center"),
    (e.textBaseline = "middle"),
    e.fillText(String(s), 81, 81));
  e.restore();
}
function drawPartisans() {
  const e = document.getElementById("partisan_markers");
  if (!e || !e.width) return;
  const t = e.getContext("2d");
  t.clearRect(0, 0, e.width, e.height);
  for (const n of partisans) {
    const i = grid.get(n);
    if (!i) continue;
    const o = i.center().add(i.toPoint());
    drawPartisanMarker(t, o.x, o.y, 40, n.strength || 1);
  }
  // Railways blown up by the partisans: a red cross on the right of the hex
  for (const n of railCuts) {
    const i = grid.get(n);
    if (!i) continue;
    const o = i.center().add(i.toPoint());
    (t.save(),
      (t.lineCap = "round"),
      t.beginPath(),
      t.moveTo(o.x + 33, o.y - 7),
      t.lineTo(o.x + 47, o.y + 7),
      t.moveTo(o.x + 47, o.y - 7),
      t.lineTo(o.x + 33, o.y + 7),
      (t.strokeStyle = "#ffffff"),
      (t.lineWidth = 6),
      t.stroke(),
      (t.strokeStyle = "#d9232e"),
      (t.lineWidth = 3.5),
      t.stroke(),
      t.restore());
  }
  // Towns taken by a partisan rising, while the Russians hold them: a small red flag
  for (const n of partisanTowns) {
    const i = grid.get(n);
    if (!i || "soviet" !== i.control) continue;
    const o = i.center().add(i.toPoint());
    (t.save(),
      (t.strokeStyle = "#2b2418"),
      (t.lineWidth = 2.5),
      t.beginPath(),
      t.moveTo(o.x - 30, o.y + 26),
      t.lineTo(o.x - 30, o.y - 2),
      t.stroke(),
      (t.fillStyle = "#d9232e"),
      (t.strokeStyle = "#5a0d12"),
      (t.lineWidth = 1),
      t.beginPath(),
      t.moveTo(o.x - 29, o.y - 2),
      t.lineTo(o.x - 12, o.y + 4),
      t.lineTo(o.x - 29, o.y + 10),
      t.closePath(),
      t.fill(),
      t.stroke(),
      t.restore());
  }
  scheduleStatusRefresh();
}
function drawReinforcementTokens(e, t, n) {
  ((e.width = Math.max(300, 70 * n)), (e.height = 80), (e.style.display = "block"));
  const i = e.getContext("2d");
  i.clearRect(0, 0, e.width, e.height);
  for (let o = 0; o < n; o++)
    "ski" === t
      ? (i.drawImage(document.getElementById("soviets"), 120, 0, 120, 120, 65 * o + 10, 10, 60, 60),
        drawSkiBadge(i, 65 * o + 10, 10))
      : drawPartisanMarker(i, 65 * o + 40, 40, 30, 1);
}
// ---------------------------------------------------------------- Unit status display (supply markers, unit card, supply view)
let supplyView = !1,
  fatigueView = !1,
  menView = !1,
  statusRefreshTimer = null;
// Same rule as isInCommunication, computed for the whole map at once: a single search outward from the map edge
// gives, for every hex, the shortest open path to the edge; a unit is in communication if a neighbouring hex
// reaches the edge within its step budget (the budget isInCommunication starts with).
let commTopology = null;
// The hex layout never changes, so the neighbour lists are built once
function getCommTopology() {
  if (commTopology) return commTopology;
  const e = new Map(),
    t = new Map();
  for (const t of b4mGrid) {
    const n = grid.get({ x: t.x, y: t.y });
    n && "off" !== n.terrain && e.set(t.x + "," + t.y, n);
  }
  for (const [n, i] of e)
    t.set(
      n,
      grid
        .neighborsOf(i)
        .filter(function (e) {
          return e && "off" !== e.terrain;
        })
        .map(function (e) {
          return e.x + "," + e.y;
        }),
    );
  return (commTopology = { hexes: e, neighbors: t });
}
function communicationMap(e, t) {
  const n = "german" === e ? "soviet" : "german",
    { hexes: i, neighbors: o } = getCommTopology(),
    r = new Map(),
    a = new Set(),
    ph = new Set(),
    l = "soviet" === e ? "sovietReplacement" : "germanReplacement";
  for (const e of b4mUnits) e.position && r.set(e.position.x + "," + e.position.y, e.army);
  // Partisan hexes (ph) and, with the ring around them, the hexes where they supply the Red Army (a);
  // both are empty when partisans are ignored. A band has no zone of control: German lines of
  // communication are cut only by the band's own hex.
  if (!0 !== t)
    for (const e of partisans) {
      const t = e.x + "," + e.y;
      (a.add(t), ph.add(t));
      for (const e of o.get(t) || []) a.add(e);
    }
  const s = function (t) {
      return (
        r.get(t) !== n &&
        !o.get(t).some(function (e) {
          return r.get(e) === n;
        }) &&
        !("german" === e && ph.has(t))
      );
    },
    c = new Map(),
    d = [];
  for (const [e, t] of i) t[l] && s(e) && (c.set(e, 0), d.push(e));
  for (; d.length > 0; ) {
    const e = d.shift(),
      t = c.get(e);
    for (const n of o.get(e)) c.has(n) || !s(n) || (c.set(n, t + 1), d.push(n));
  }
  return function (t) {
    if (t[l]) return !0;
    const n = t.x + "," + t.y;
    if ("soviet" === e && a.has(n)) return !0;
    const i = "soviet" === e ? 10 * (13 - t.x) : 10 * t.x;
    return (o.get(n) || []).some(function (e) {
      return c.has(e) && 1 + c.get(e) <= i;
    });
  };
}
function supplyContext() {
  let e = null,
    t = null;
  return {
    soviet: communicationMap("soviet"),
    german: communicationMap("german"),
    sovietNoPartisans: function (t) {
      return (e = e || communicationMap("soviet", !0))(t);
    },
    germanNoPartisans: function (e) {
      return (t = t || communicationMap("german", !0))(e);
    },
  };
}
// Supply status of a unit on the map, based on the "in communication" rule
// Supply status of a unit on the map, based on the "in communication" rule
function unitSupplyStatus(e, t) {
  if (!e || !e.position) return null;
  t = t || supplyContext();
  const n = grid.get(e.position),
    i = "soviet" === e.army ? "the red-bordered east map edge" : "the west map edge";
  if (t[e.army](n))
    return "soviet" === e.army && nearPartisans(n) && !t.sovietNoPartisans(n)
      ? { ok: !0, text: "Supplied by the partisans" }
      : { ok: !0, text: "In communication with " + i };
  const o = cityStock(n, e.army),
    r = isFullyRinged(n, e.army);
  return o && o.value > 0
    ? {
        ok: !1,
        siege: !0,
        ringed: r,
        text: "Besieged: living on the city's stocks (" + o.value + "/" + CITY_STOCK_CAP[n.x + "," + n.y] + ")",
      }
    : {
        ok: !1,
        ringed: r,
        text:
          "Cut off from " +
          i +
          (r ? ", completely surrounded" : "") +
          ("german" === e.army && t.germanNoPartisans(n) ? " (partisans block the way)" : ""),
        effect: "While cut off it cannot be restored to full strength.",
      };
}
function strokeRoundRect(e, t, n, i, o, r) {
  (e.beginPath(),
    e.moveTo(t + r, n),
    e.lineTo(t + i - r, n),
    e.arcTo(t + i, n, t + i, n + r, r),
    e.lineTo(t + i, n + o - r),
    e.arcTo(t + i, n + o, t + i - r, n + o, r),
    e.lineTo(t + r, n + o),
    e.arcTo(t, n + o, t, n + o - r, r),
    e.lineTo(t, n + r),
    e.arcTo(t, n, t + r, n, r),
    e.closePath(),
    e.stroke());
}
// Status layers: a status is drawn only while its box in the layer bar is ticked; several can be ticked together
function refreshStatusMarkers() {
  statusRefreshTimer = null;
  const e = document.getElementById("status_markers"),
    t = document.getElementById("supply_view_count");
  if (!e || !e.width) return;
  const n = e.getContext("2d");
  if ((n.clearRect(0, 0, e.width, e.height), t && (t.innerText = ""), supplyView)) {
    const e = { german: 0, soviet: 0 },
      i = supplyContext();
    for (const t of b4mUnits) {
      if (!t.position) continue;
      const o = unitSupplyStatus(t, i);
      if (!o || o.ok) continue;
      e[t.army]++;
      const r = grid.get(t.position),
        a = r.center().add(r.toPoint());
      (highlightHex(n, r, o.siege ? "rgba(239, 159, 39, 0.3)" : "rgba(226, 75, 74, 0.35)"),
        n.save(),
        n.setLineDash(o.ringed && !o.siege ? [] : [7, 4]),
        (n.lineWidth = o.ringed && !o.siege ? 4 : 3),
        (n.strokeStyle = o.siege ? "#ef9f27" : "#e24b4a"),
        strokeRoundRect(n, a.x - 36, a.y - 36, 72, 72, 9),
        n.restore());
    }
    // stocks of the major cities
    for (const e in CITY_STOCK_CAP) {
      const [t, i] = e.split(",").map(Number),
        o = grid.get({ x: t, y: i }),
        r = o.center().add(o.toPoint()),
        a = cityStocks[e] && cityStocks[e].owner === o.control ? cityStocks[e].value : 0,
        l = L("Stocks ", "储备 ") + a + "/" + CITY_STOCK_CAP[e];
      (n.save(),
        (n.font = "bold 11px Arial, sans-serif"),
        (n.textAlign = "center"),
        (n.textBaseline = "middle"));
      const s = n.measureText(l).width + 10;
      ((n.fillStyle = "rgba(0, 0, 0, 0.7)"),
        n.fillRect(r.x - s / 2, r.y - 56, s, 14),
        (n.fillStyle = a > 0 ? "#ffd08a" : "#ff8a80"),
        n.fillText(l, r.x, r.y - 49),
        n.restore());
    }
    t && (t.innerText = ": " + e.german + " German, " + e.soviet + " Russian cut off");
  }
  // Fatigue: a three-segment bar under the counter, one segment per level (only for tired units)
  if (fatigueView)
    for (const e of b4mUnits) {
      const t = fatigueLevel(e),
        p = Math.min(FATIGUE.max, e.fatigue || 0);
      if (!e.position || p < 1) continue;
      const i = grid.get(e.position),
        o = i.center().add(i.toPoint()),
        r = ["#fac775", "#fac775", "#ef9f27", "#e24b4a"][t];
      // one box per level; the points towards the next level fill the next box part of the way
      for (let e = 0; e < 3; e++) {
        const i = o.x - 29 + 20 * e,
          s = Math.max(0, Math.min(1, (p - FATIGUE.perLevel * e) / FATIGUE.perLevel));
        ((n.fillStyle = "rgba(0, 0, 0, 0.35)"),
          n.fillRect(i, o.y + 40, 18, 6),
          s > 0 && ((n.fillStyle = s >= 1 ? r : "rgba(250, 199, 117, 0.85)"), n.fillRect(i, o.y + 40, 18 * s, 6)),
          (n.lineWidth = 1),
          (n.strokeStyle = "#211c21"),
          n.strokeRect(i + 0.5, o.y + 40.5, 17, 5));
      }
    }
  // Manpower: the estimated number of men of each unit, above its counter
  if (menView)
    for (const e of b4mUnits) {
      if (!e.position) continue;
      const t = grid.get(e.position),
        i = t.center().add(t.toPoint()),
        o = "\u2248" + fmtMen(currentMen(e));
      (n.save(), (n.font = "bold 10px Arial, sans-serif"), (n.textAlign = "center"), (n.textBaseline = "middle"));
      const r = n.measureText(o).width + 8;
      ((n.fillStyle = "rgba(0, 0, 0, 0.72)"),
        n.fillRect(i.x - r / 2, i.y - 42, r, 12),
        (n.fillStyle = "#ffffff"),
        n.fillText(o, i.x, i.y - 36),
        n.restore());
    }
}
function scheduleStatusRefresh() {
  (clearTimeout(lossesTimer),
    (lossesTimer = setTimeout(refreshLossesDisplay, 300)),
    (supplyView || fatigueView || menView) &&
      (clearTimeout(statusRefreshTimer), (statusRefreshTimer = setTimeout(refreshStatusMarkers, 400))));
}
const LAYER_KEYS = { supply: "b4mLayerSupply", fatigue: "b4mLayerFatigue", men: "b4mLayerMen" };
function setLayer(e, t) {
  ("supply" === e ? (supplyView = !!t) : "fatigue" === e ? (fatigueView = !!t) : (menView = !!t));
  const n = document.getElementById("layer_" + e);
  n && (n.checked = !!t);
  try {
    window.localStorage.setItem(LAYER_KEYS[e], t ? "1" : "0");
  } catch (e) {}
  refreshStatusMarkers();
}
function setSound(e) {
  soundOn = !!e;
  const t = document.getElementById("layer_sound");
  t && (t.checked = soundOn);
  try {
    window.localStorage.setItem("b4mSound", soundOn ? "1" : "0");
  } catch (e) {}
  soundOn ? audioReady() : (audioCtx && audioCtx.suspend(), stopAnthem());
}
function setSupplyLayer(e) {
  setLayer("supply", e);
}
function initStatusUI() {
  for (const e of ["supply", "fatigue", "men"]) {
    const t = document.getElementById("layer_" + e);
    if (!t) continue;
    let n = !1;
    try {
      n = "1" === window.localStorage.getItem(LAYER_KEYS[e]);
    } catch (e) {}
    (setLayer(e, n),
      t.addEventListener("change", function () {
        setLayer(e, t.checked);
      }));
  }
  const e = document.getElementById("layer_sound");
  if (e) {
    let t = !0;
    try {
      t = "0" !== window.localStorage.getItem("b4mSound");
    } catch (e) {}
    ((soundOn = t),
      (e.checked = t),
      e.addEventListener("change", function () {
        setSound(e.checked);
      }));
  }
  // Keys: S supply, F fatigue, P manpower, M sound on/off
  document.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey ||
      e.metaKey ||
      e.altKey ||
      e.target.isContentEditable ||
      /^(textarea|select)$/i.test(e.target.tagName) ||
      (/^input$/i.test(e.target.tagName) && !/^(checkbox|radio|button|submit|reset|range)$/i.test(e.target.type))
    )
      return;
    const t = e.key.toLowerCase();
    "s" === t
      ? setLayer("supply", !supplyView)
      : "f" === t
        ? setLayer("fatigue", !fatigueView)
        : "p" === t
          ? setLayer("men", !menView)
          : "m" === t && setSound(!soundOn);
  });
}
window.addEventListener("load", initStatusUI);
window.addEventListener("load", function () {
  const d = document.getElementById("help_decisions_list");
  d &&
    (d.innerHTML =
      "<ul>" +
      HISTORY_EVENTS.map(function (e) {
        return (
          "<li><strong>Turn " +
          e.turn +
          ", " +
          ("german" === e.army ? "German" : "Russian") +
          "</strong>: " +
          e.title +
          " (" +
          (e.to || e.officeEn) +
          ", " +
          e.date +
          ")</li>"
        );
      }).join("") +
      "</ul>");
  const e = document.getElementById("help_chronicle_list");
  e &&
    (e.innerHTML = Object.keys(CHRONICLE)
      .map(function (e) {
        return "<p><strong>Turn " + e + "</strong>: " + CHRONICLE[e] + "</p>";
      })
      .join(""));
});
// ---------------------------------------------------------------- Fatigue and liberated cities
// Fatigue is counted in points; every FATIGUE.perLevel points is one level:
// 0 fresh, 1 tired, 2 exhausted, 3 broken. A turn is one to two weeks: a unit attacking every turn is
// tired after 4 turns and exhausted after 8, like the Typhoon divisions by December. All the numbers are here.
const FATIGUE = {
    perLevel: 4,
    max: 12,
    attack: 1,
    defend: 1,
    cutOff: 3,
    ringed: 2,
    siegeCutOff: 1,
    siegeRinged: 1,
    railCut: 1,
    winterOutsideCity: 2,
    winterInTown: 1,
    idle: 1,
    rest: 2,
    // recovering in the rear, out of reach of the enemy (no enemy unit within rearDistance hexes)
    rear: 1,
    rearDistance: 3,
    // in a town of its side; in Moscow and Tula, with their barracks, hospitals and depots
    city: 1,
    majorCity: 2,
    liberation: 4,
  },
  CITY_NAMES = {
    "1,4": "Smolensk",
    "2,6": "Roslavl",
    "4,8": "Bryansk",
    "5,1": "Rzhev",
    "5,3": "Vyazma",
    "7,3": "Mozhaisk",
    "7,5": "Kaluga",
    "7,9": "Orel",
    "10,2": "Moscow",
    "10,6": "Tula",
    "13,5": "Ryazan",
  };
let liberationBonus = 0;
function fatigueLevel(e) {
  return e ? Math.min(3, Math.floor((e.fatigue || 0) / FATIGUE.perLevel)) : 0;
}
function addFatigue(e, t) {
  const n = e && b4mUnits[b4mUnitsIndex(e)];
  n && (n.fatigue = Math.max(0, Math.min(FATIGUE.max, (n.fatigue || 0) + t)));
}
function markFought(e) {
  const t = e && b4mUnits[b4mUnitsIndex(e)];
  t && (t.fought = !0);
}
function unitName(e) {
  if (isZh()) return unitNameZh(e);
  const t = parseInt(e.id.replace(/\D/g, ""), 10),
    n = t % 100,
    i = t + (n >= 11 && n <= 13 ? "th" : ["th", "st", "nd", "rd"][t % 10] || "th");
  if ("soviet" === e.army)
    return e.nkvd
      ? i + " Army (NKVD)"
      : "shock" === e.type
      ? i + " Shock Army"
      : "cavalry" === e.type
        ? i + " Guards Cavalry Corps"
        : i + " Army";
  let o = "",
    r = t;
  for (const [e, t] of [
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ])
    for (; r >= e; ) ((o += t), (r -= e));
  return o + ("tank" === e.type ? " Panzer Corps" : " Corps");
}
// In the rear: no enemy unit within 3 hexes (and, for the Germans, no partisan band within 2)
function inTheRear(hex, army) {
  return !(
    b4mUnits.some(function (u) {
      return u.army !== army && u.position && hex.distance(Hex(u.position)) <= FATIGUE.rearDistance;
    }) ||
    ("german" === army &&
      partisans.some(function (b) {
        return hex.distance(Hex(b)) <= 2;
      }))
  );
}
// Start of a side's turn: supply, winter and rest change the fatigue of its units
// (the "fought" and "moved" marks cover the side's previous turn and the enemy turn that followed)
function processTurnFatigue(e) {
  const t = supplyContext();
  // At the start of the German turn: old rail cuts are repaired, and security sweeps wear down
  // the partisan bands that are next to German units
  "german" === e &&
    ((railCuts = railCuts.filter(function (e) {
      return e.until >= currentTurn.turn;
    })),
    partisans.forEach(function (e) {
      isEZOC(grid.get(e), "soviet") && (e.strength = (e.strength || 1) - 1);
    }),
    (partisans = partisans.filter(function (e) {
      return null == e.strength || e.strength > 0;
    })),
    drawPartisans());
  buildCityStocks(e, t);
  for (const n of b4mUnits) {
    if (n.army !== e) continue;
    // a unit off the map (eliminated) starts afresh when it comes back
    if (!n.position) {
      ((n.fought = !1), (n.moved = !1));
      continue;
    }
    const i = grid.get(n.position),
      o = !t[e](i),
      s = "german" === e && railCutNear(i, 2),
      c = o && isFullyRinged(i, e),
      l = o ? cityStock(i, e) : null;
    let r = 0;
    (o &&
      (l && l.value > 0
        ? // a besieged garrison lives on the city's stocks: fatigue builds slowly while they last
          ((r += FATIGUE.siegeCutOff + (c ? FATIGUE.siegeRinged : 0)), (l.value = Math.max(0, l.value - (c ? 2 : 1))))
        : (r += FATIGUE.cutOff + (c ? FATIGUE.ringed : 0))),
      s && (r += FATIGUE.railCut),
      "german" === e && (r += germanWinterFatigue(i)),
      o ||
        s ||
        n.raided === currentTurn.turn ||
        (n.fought || (r -= (n.moved ? FATIGUE.idle : FATIGUE.rest) + (inTheRear(i, e) ? FATIGUE.rear : 0)),
        "none" !== i.city &&
          i.control === e &&
          (r -= "major" === i.city || "moscow" === i.city ? FATIGUE.majorCity : FATIGUE.city)),
      (n.fatigue = Math.max(0, Math.min(FATIGUE.max, (n.fatigue || 0) + r))),
      (n.fought = !1),
      (n.moved = !1));
  }
  scheduleStatusRefresh();
}
// Fatigue in a battle, just before its result is applied. Returns the result to apply
// (a broken defender turns DR into DRL) and a note for the battle log.
function applyBattleFatigue(e) {
  let t = e,
    n = "";
  if ("DR" === t && 3 === fatigueLevel(b4mUnits[b4mUnitsIndex(currentBattle.defendingUnit)]))
    ((t = "DRL"), (n += "The defender is broken by fatigue: its retreat costs it a step. "));
  if ("DE" === t || "DRL" === t) {
    const e = currentBattle.attackingUnits
      .map(function (e) {
        return b4mUnits[b4mUnitsIndex(e)];
      })
      .filter(function (e) {
        return e && e.position && fatigueLevel(e) >= 2;
      })
      .sort(function (e, t) {
        return (
          fatigueLevel(t) - fatigueLevel(e) ||
          ("full" === t.strength ? t.combatFull : t.combatReduced) -
            ("full" === e.strength ? e.combatFull : e.combatReduced)
        );
      })[0];
    if (e) {
      const t = grid.get(e.position),
        i = t.center().add(t.toPoint()),
        o = lookupUnit(t);
      ("full" === e.strength
        ? ((e.strength = "reduced"),
          (o.strength = "reduced"),
          clearUnit(board, o, i.x - 40, i.y - 40),
          drawUnit(board, o, i.x - 30, i.y - 30),
          (n += "Exhausted attackers pay for the victory: the " + unitName(e) + " loses 1 step. "))
        : (clearUnit(board, o, i.x - 40, i.y - 40),
          (n += "Exhausted attackers pay for the victory: the " + unitName(e) + " is eliminated. ")),
        currentBattle.attackingUnits.forEach(function (t) {
          t.id === e.id && (t.strength = e.strength);
        }));
    }
  }
  for (const e of currentBattle.attackingUnits) (addFatigue(e, FATIGUE.attack), markFought(e));
  return (
    markFought(currentBattle.defendingUnit),
    "NE" !== t && addFatigue(currentBattle.defendingUnit, FATIGUE.defend),
    scheduleStatusRefresh(),
    { result: t, note: n }
  );
}
function attackFatigueFactor(e) {
  return [1, 1, 0.5, 0.5][fatigueLevel(e)];
}
// Defending, tired and exhausted troops still hold their positions; a broken unit falls apart (2/5)
function fatigueFactor(e) {
  return [1, 1, 1, 0.4][fatigueLevel(e)];
}
function fmtStrength(e) {
  return String(Math.round(10 * e) / 10);
}
// A side's strength in the battle table: when fatigue weakens it, its full strength is struck through
// and the strength it really fights with follows in orange (the tooltip explains why)
function strengthHtml(army, strength, lost) {
  return (
    '<img src="img/' +
    army +
    '_marker.png" /> ' +
    (lost > 0
      ? '<s class="strength_before">' +
        fmtStrength(strength + lost) +
        '</s> <span class="tired_strength" title="' +
        L(
          "Weakened by fatigue: an exhausted unit (level 2) attacks at half its strength, a broken one (level 3) defends at 2/5 of it; tired and exhausted units still defend at full strength. The odds are worked out with this reduced strength. An exhausted attacker also loses a step on a DE or DRL result, a broken unit cannot attack, and a broken defender turns a DR into a DRL.",
          "因疲劳而削弱：疲惫（2 级）的部队进攻时只有一半兵力，崩溃（3 级）的部队防守时只有 2/5 兵力；疲劳和疲惫的部队防守时仍是满兵力。战斗比例按削弱后的兵力计算。疲惫的进攻部队在 DE 或 DRL 结果时还要损失 1 级，崩溃的部队不能进攻，崩溃的防守部队遇到 DR 时变成 DRL。",
        ) +
        '">' +
        fmtStrength(strength) +
        "</span>"
      : fmtStrength(strength))
  );
}
function defenderStrengthOf(e) {
  return void 0 !== e.defendingStrength
    ? e.defendingStrength
    : "full" === e.defendingUnit.strength
      ? e.defendingUnit.combatFull
      : e.defendingUnit.combatReduced;
}
function modifiersHtml(e) {
  let t = "";
  for (const n of e.modifiers) "fatigue" !== n && (t += '<img src="img/' + n + '_marker.png" /> ');
  return (
    e.partisanBonus &&
      (t += '<span class="modifier_badge partisan" title="Partisans guide the attack">Partisans +1</span> '),
    t
  );
}
function takeLiberationBonus() {
  const e = liberationBonus;
  return ((liberationBonus = 0), e);
}
function showEventBanner(e, ms) {
  let t = document.getElementById("event_banner");
  (t ||
    ((t = document.createElement("div")),
    (t.id = "event_banner"),
    (t.onclick = function () {
      t.style.display = "none";
    }),
    document.body.appendChild(t)),
    (t.innerHTML = e),
    (t.style.display = "block"),
    clearTimeout(t.hideTimer),
    (t.hideTimer = setTimeout(function () {
      t.style.display = "none";
    }, ms || 4500)));
}
// A Russian unit enters a German-held city during the Russian turn
function cityLiberated(e, t) {
  const n = cityNameOf(e.x + "," + e.y, "A city", "一座城市");
  (liberationBonus++,
    t && addFatigue(t, -FATIGUE.liberation),
    showEventBanner(
      '<small class="banner_kicker">В последний час</small><img src="img/soviet_marker.png" />' +
        L("Our troops have liberated " + n + "!", "我军解放了" + n + "！") +
        "<span>" +
        L(
          "After fierce fighting the Red Army has driven the German-fascist invaders out of " + n + ". +1 replacement step next turn · the liberators shake off some fatigue.",
          "经过激烈战斗，红军把德国法西斯侵略者赶出了" + n + "。下回合 +1 个补充兵步数 · 解放者的疲劳减轻。",
        ) +
        "</span>",
      6e3,
    ));
}
// ---------------------------------------------------------------- Cities changing hands
// While above 0, a city changing hands is not reported (a unit retreating through it, a redraw of the map)
let cityChangeQuiet = 0;
function cityChangedHands(hex, from, to) {
  if (cityChangeQuiet || !from || !to || from === to) return;
  stayBehindTownChanged(hex, to);
}
// A German unit entering a band's hex sweeps it. The German commander chooses: a full sweep combs the
// forest until the band is destroyed, at a heavy cost in fatigue (4 points for each strength point of
// the band); driving it off costs only 2 points, but the band merely loses 1 strength and the survivors
// slip away into a forest within 2 hexes that is not next to German units (with no refuge, they scatter)
const SWEEP_FATIGUE_PER_STRENGTH = 4,
  DRIVE_OFF_FATIGUE = 2;
function partisanRefuge(band) {
  const n = grid.get(band);
  return (
    b4mGrid
      .map(function (e) {
        return grid.get({ x: e.x, y: e.y });
      })
      .filter(function (e) {
        return "forest" === e.terrain && !lookupUnit(e) && !partisanAt(e) && !isEZOC(e, "soviet") && n.distance(e) <= 2;
      })
      .sort(function (e, t) {
        return n.distance(e) - n.distance(t);
      })[0] || null
  );
}
function fatigueLevelName(points) {
  const k = fatigueLevel({ fatigue: points });
  return L(["fresh", "tired", "exhausted", "broken"][k], ["精力充沛", "疲劳", "疲惫", "崩溃"][k]);
}
function sweepFatigue(unit, band, mode) {
  const u = b4mUnits[b4mUnitsIndex(unit)],
    f = (u && u.fatigue) || 0;
  return Math.min(FATIGUE.max, f + ("wipe" === mode ? SWEEP_FATIGUE_PER_STRENGTH * (band.strength || 1) : DRIVE_OFF_FATIGUE));
}
// Carries out the sweep; returns what happened, for the banner
function sweepPartisans(unit, mode) {
  const band = unit.position && partisanAt(unit.position);
  if (!band) return "";
  const u = b4mUnits[b4mUnitsIndex(unit)],
    before = (u && u.fatigue) || 0,
    s = band.strength || 1,
    after = sweepFatigue(unit, band, mode);
  u && (u.fatigue = after);
  let note;
  if ("wipe" === mode)
    ((band.strength = 0),
      (note = L(
        "The " + unitName(unit) + " combs the forest and destroys the band. Fatigue " + before + " → " + after + " (" + fatigueLevelName(after) + ").",
        unitName(unit) + "搜遍森林，消灭了这支游击队。疲劳 " + before + " → " + after + "（" + fatigueLevelName(after) + "）。",
      )));
  else {
    band.strength = s - 1;
    const refuge = band.strength > 0 ? partisanRefuge(band) : null;
    refuge ? ((band.x = refuge.x), (band.y = refuge.y)) : (band.strength = 0);
    note =
      L("The " + unitName(unit) + " drives the band off: ", unitName(unit) + "驱散了游击队：") +
      (refuge
        ? L(
            "it loses 1 strength (now " + band.strength + ") and slips away into the forest.",
            "游击队损失 1 点力量（剩 " + band.strength + " 点），逃进了森林。",
          )
        : s > 1
          ? L("with nowhere to hide, it scatters.", "游击队无处藏身，被打散了。")
          : L("the band, already weak, scatters.", "本已弱小的游击队被打散了。")) +
      L(" Fatigue " + before + " → " + after + ".", "疲劳 " + before + " → " + after + "。");
  }
  ((partisans = partisans.filter(function (e) {
    return null == e.strength || e.strength > 0;
  })),
    drawPartisans(),
    scheduleStatusRefresh());
  return note;
}
function sweepBanner(note) {
  showEventBanner('<img src="img/german_marker.png" />' + L("Anti-partisan sweep", "清剿游击队") + "<span>" + note + "</span>", 6e3);
}
// The German commander chooses how to deal with the band; the computer, and units retreating or
// advancing after combat, drive it off unless a full sweep would leave the unit no worse than tired
function partisanSweep(unit) {
  const band = unit && unit.position && partisanAt(unit.position);
  if (!band) return;
  const human = "" === playAIAs || "german" !== playAIAs;
  if (!human || "movement" !== currentTurn.phase || "german" !== currentTurn.army)
    return void sweepBanner(sweepPartisans(unit, fatigueLevel({ fatigue: sweepFatigue(unit, band, "wipe") }) <= 1 ? "wipe" : "drive"));
  showSweepChoice(unit, band);
}
function showSweepChoice(unit, band) {
  const u = b4mUnits[b4mUnitsIndex(unit)],
    f = (u && u.fatigue) || 0,
    s = band.strength || 1,
    wipe = sweepFatigue(unit, band, "wipe"),
    drive = sweepFatigue(unit, band, "drive"),
    refuge = s > 1 ? partisanRefuge(band) : null,
    box = document.createElement("div");
  ((box.id = "sweep_choice"),
    (box.innerHTML =
      '<div class="sweep_box"><div class="sweep_head"><img src="img/german_marker.png" /><span>' +
      L("Anti-partisan sweep", "清剿游击队") +
      '</span></div><div class="sweep_text">' +
      L(
        "The " + unitName(unit) + " runs into a partisan band of strength " + s + " in the forest. Its fatigue now: " + f + " (" + fatigueLevelName(f) + ").",
        unitName(unit) + "在森林里撞上一支力量为 " + s + " 的游击队。它现在的疲劳：" + f + "（" + fatigueLevelName(f) + "）。",
      ) +
      '</div><div class="sweep_options"><button data-mode="wipe"><span class="sweep_label">' +
      L("Full sweep", "全面清剿") +
      "</span><small>" +
      L("The band is destroyed.", "消灭这支游击队。") +
      "<br />" +
      L(
        "Fatigue +" + (wipe - f) + ": " + f + " → " + wipe + " (" + fatigueLevelName(wipe) + ").",
        "疲劳 +" + (wipe - f) + "：" + f + " → " + wipe + "（" + fatigueLevelName(wipe) + "）。",
      ) +
      '</small></button><button data-mode="drive"><span class="sweep_label">' +
      L("Drive them off", "驱散") +
      "</span><small>" +
      (refuge
        ? L(
            "The band loses 1 strength (" + s + " → " + (s - 1) + ") and slips away into the forest.",
            "游击队损失 1 点力量（" + s + " → " + (s - 1) + "），逃进附近的森林。",
          )
        : s > 1
          ? L("The band has nowhere to hide: it scatters.", "游击队附近无处藏身：会被打散。")
          : L("The band, strength 1, scatters.", "游击队只有 1 点力量：会被打散。")) +
      "<br />" +
      L(
        "Fatigue +" + (drive - f) + ": " + f + " → " + drive + " (" + fatigueLevelName(drive) + ").",
        "疲劳 +" + (drive - f) + "：" + f + " → " + drive + "（" + fatigueLevelName(drive) + "）。",
      ) +
      "</small></button></div></div>"),
    // the choice is made here: clicks do not reach the map
    box.addEventListener("click", function (e) {
      e.stopPropagation();
      const b = e.target.closest && e.target.closest("[data-mode]");
      b && (box.remove(), sweepBanner(sweepPartisans(unit, b.dataset.mode)));
    }),
    document.body.appendChild(box));
}
// ---------------------------------------------------------------- Victory points, stand-fast order and chronicle
const CITY_VP = { "10,2": 5, "10,6": 3 },
  // Hitler's stand-fast order of 16 December 1941 applies from this turn
  HALT_ORDER_TURN = 9,
  // Cities the Red Army held when each turn of the game ended, historically
  // (turn 9 ends before Kaluga is retaken on 30 December 1941 and Mozhaisk on 20 January 1942)
  HISTORICAL_SOVIET_CITIES = { 9: ["10,2", "10,6", "13,5"] },
  CHRONICLE = {
    1: '2 October 1941. Operation Typhoon opens. Hitler\'s order of the day: "Today begins the last great, decisive battle of this year."',
    2: '3 October: in a radio speech Hitler claims that the enemy "is already broken and will never recover his strength". 7 October: a directive of the German high command orders that a capitulation of Moscow is not to be accepted, even if offered.',
    3: "Mid-October. The autumn mud slows every movement. Soviet historians stress that it hampered both armies alike and did not decide the battle.",
    4: "Early November. The German advance stalls in the mud before the Mozhaisk defence line; on 7 November the Red Army parades on Red Square.",
    5: "15-16 November. The Germans resume their offensive against Moscow, from the north-west and from the south.",
    6: "Late November. The German spearheads close in on Moscow while the Stavka gathers its reserves behind the front.",
    7: "Early December. The German offensive culminates at the gates of Moscow; its divisions are exhausted and short of supplies.",
    8: "5-6 December. The Red Army strikes back. Rokossovsky: deep snow and hard frost made it hard to manoeuvre off the roads, and the retreating Germans burned every village. Troops marched only by night, at -28 to -35 °C.",
    9: '16 December. Hitler\'s stand-fast order: Army Group Centre must not retreat significantly, and officers are to make the troops defend their positions "with fanatical stubbornness". The retreating units leave a desert behind them: Istra burned, the New Jerusalem Monastery blown up, the Borodino museum burned.',
  };
function cityVP(e) {
  return CITY_VP[e.x + "," + e.y] || 1;
}
function victoryPoints() {
  let e = 0,
    t = 0;
  for (const n of b4mGrid) {
    if (!n.city || "none" === n.city) continue;
    const i = grid.get({ x: n.x, y: n.y });
    "soviet" === i.control ? (e += cityVP(i)) : (t += cityVP(i));
  }
  // Hitler sacks the generals who chose an elastic defence
  return ("elastic" === decisions.haltOrder && e++, { soviet: e, german: t });
}
function historicalSovietVP(e) {
  const t = HISTORICAL_SOVIET_CITIES[e];
  return t
    ? t.reduce(function (e, t) {
        return e + (CITY_VP[t] || 1);
      }, 0)
    : null;
}
function chronicleHtml(e) {
  return CHRONICLE[e] ? '<div class="chronicle_note">' + L(CHRONICLE[e], CHRONICLE_ZH[e]) + "</div>" : "";
}
// Extra lines of the turn report (click on the turn bar)
function turnReportExtra() {
  const e = victoryPoints(),
    t = historicalSovietVP(LAST_TURN);
  return (
    '<div style="text-align: left;">- Victory points: <img src="img/soviet_marker.png"></img> ' +
    e.soviet +
    ' <img src="img/german_marker.png"></img> ' +
    e.german +
    (null !== t ? " (historically the Red Army held " + t + " at the end of the game)" : "") +
    "</div>" +
    '<div style="text-align: left;">- ' +
    lossesText() +
    "</div>" +
    decisionsHtml() +
    chronicleHtml(currentTurn.turn)
  );
}
// End of the game (standard rules): victory points compared with what happened in 1941
function standardResult() {
  const e = victoryPoints(),
    t = historicalSovietVP(LAST_TURN),
    n = grid.get({ x: 10, y: 2 }),
    i = null === t ? 0 : e.soviet - t;
  let o, r;
  "german" === n.control
    ? ((o = '<img src="img/german_marker.png" /><span>' + L("German Decisive Victory!", "德军决定性胜利！") + "</span>"),
      (r = L("The German Army took Moscow and held it to the end of the game.", "德军攻占莫斯科，并一直守到游戏结束。")))
    : i >= 3
      ? ((o = '<img src="img/soviet_marker.png" /><span>' + L("Decisive Victory of the Red Army!", "红军的决定性胜利！") + "</span>"),
        (r = L(
          "The German-fascist hordes have been routed far beyond what the Red Army achieved in December 1941. The rout that began at Moscow rolls on to the west.",
          "德国法西斯匪帮被击溃的程度，远远超过 1941 年 12 月红军的实际战果。从莫斯科城下开始的粉碎，正滚滚向西推进。",
        )))
      : i >= 1
        ? ((o = '<img src="img/soviet_marker.png" /><span>' + L("Victory of the Red Army!", "红军的胜利！") + "</span>"),
          (r = L(
            "The Red Army has done better than in December 1941: more Soviet towns are freed from the fascist yoke.",
            "红军打得比 1941 年 12 月还要好：更多的苏联城镇摆脱了法西斯的枷锁。",
          )))
        : 0 === i
          ? ((o = "<span>" + L("The Historical Result", "历史结果") + "</span>"),
            (r = L(
              "The front stands where it stood in December 1941: Moscow is saved and the German plan to take it has failed with a crash, but the enemy still holds most of the towns.",
              "战线停在 1941 年 12 月的位置：莫斯科得救了，德军夺取莫斯科的计划彻底破产，但敌人仍占着大部分城镇。",
            )))
          : i >= -2
            ? ((o = '<img src="img/german_marker.png" /><span>' + L("German Victory!", "德军胜利！") + "</span>"),
              (r = L("The Wehrmacht held more than it did in 1941.", "国防军守住的地方比 1941 年还多。")))
            : ((o = '<img src="img/german_marker.png" /><span>' + L("German Major Victory!", "德军重大胜利！") + "</span>"),
              (r = L("The Wehrmacht held far more than it did in 1941.", "国防军守住的地方比 1941 年多得多。")));
  let a = "";
  for (const e of b4mGrid) {
    if (!e.city || "none" === e.city) continue;
    const t = grid.get({ x: e.x, y: e.y });
    a +=
      "<tr><td>" +
      cityNameOf(e.x + "," + e.y, "City", "城市") +
      '</td><td><img src="img/' +
      ("soviet" === t.control ? "soviet" : "german") +
      '_marker.png" /></td><td>' +
      cityVP(t) +
      "</td></tr>";
  }
  return {
    title: o,
    text:
      r +
      "<br /><br />" +
      L("Victory points at the end of Game Turn " + LAST_TURN + ": ", "第 " + LAST_TURN + " 回合结束时的胜利点：") +
      "<strong>" +
      L("Red Army " + e.soviet + ", Germans " + e.german, "红军 " + e.soviet + "，德军 " + e.german) +
      "</strong>" +
      (null !== t
        ? L(". In 1941 the Red Army held Moscow, Tula and Ryazan at this date (" + t + " points).", "。1941 年的这个时候，红军控制着莫斯科、图拉和梁赞（" + t + " 点）。")
        : L(".", "。")) +
      '<table class="vp_table">' +
      a +
      '</table><div class="chronicle_note">' +
      L(
        "The battle of Moscow destroyed the myth of the invincibility of the Hitlerite army. Yet, as Marshal Vasilevsky wrote, the general offensive of the winter of 1942 did not completely destroy any of the main German groupings.",
        "莫斯科会战打破了希特勒军队不可战胜的神话。但正如华西列夫斯基元帅所写，1942 年冬季的总攻没有彻底歼灭德军的任何一个主要集团。",
      ) +
      "</div>" +
      // when Moscow stands: the masthead slogan of the newspapers of 13 December 1941
      (i >= 0 && "german" !== n.control
        ? sloganHtml({ original: "Наше дело правое — победа будет за нами!", en: "Our cause is just: victory will be ours! (J. V. Stalin)", zh: "我们的事业是正义的——胜利必将属于我们！（И. В. 斯大林）" })
        : ""),
  };
}
// ---------------------------------------------------------------- Partisan operations
const PARTISAN_MAX_STRENGTH = 3;
let railCuts = [],
  partisanGuides = [];
function partisanAt(e) {
  return (
    partisans.find(function (t) {
      return t.x === e.x && t.y === e.y;
    }) || null
  );
}
function germanUnitsWithin(e, t) {
  return b4mUnits.filter(function (n) {
    return "german" === n.army && n.position && e.distance(Hex(n.position)) <= t;
  });
}
function railCutNear(e, t) {
  return railCuts.some(function (n) {
    return e.distance(Hex(n)) <= t;
  });
}
// ---------------------------------------------------------------- Partisan risings
// The bands within 2 hexes of a German-held town with no German unit in or next to it can rise and take it
const PARTISAN_RISING_STRENGTH = 3;
function risingBands(hex) {
  return partisans.filter(function (band) {
    return hex.distance(grid.get(band)) <= 2;
  });
}
// Total strength of the bands that can rise in this town (0 if they cannot)
function risingStrength(hex) {
  if (!hex || !hex.city || "none" === hex.city || "german" !== hex.control || germanUnitsWithin(hex, 1).length > 0) return 0;
  const strength = risingBands(hex).reduce(function (sum, band) {
    return sum + (band.strength || 1);
  }, 0);
  return strength >= PARTISAN_RISING_STRENGTH ? strength : 0;
}
// A die roll up to the bands' total strength (at most 5) takes the town; otherwise every band loses 1 strength
function partisanRising(hex) {
  const need = Math.min(5, risingStrength(hex)),
    roll = Math.floor(6 * Math.random()) + 1,
    success = roll <= need,
    name = cityNameOf(hex.x + "," + hex.y, "the town", "这座城镇");
  for (const band of risingBands(hex)) ((band.acted = !0), success || (band.strength = (band.strength || 1) - 1));
  (success && (cityChangedHands(hex, hex.control, "soviet"), (hex.control = "soviet"), liberationBonus++, partisanTowns.push({ x: hex.x, y: hex.y })),
    (partisans = partisans.filter(function (band) {
      return band.strength > 0;
    })),
    drawPartisans(),
    scheduleStatusRefresh());
  return { success: success, roll: roll, need: need, name: name };
}
function announceRising(result) {
  const note = result.success
    ? L(
        "Die roll " + result.roll + " (" + result.need + " or less needed): the glorious Soviet patriots fall upon the unsuspecting enemy and take " + result.name + "! +1 Russian replacement step.",
        "掷骰 " + result.roll + "（需要 " + result.need + " 或更小）：光荣的苏维埃爱国者突袭了毫无防备的敌人，夺取了" + result.name + "！苏军 +1 个补充兵步数。",
      )
    : L(
        "Die roll " + result.roll + " (" + result.need + " or less needed): the fascist punitive troops crush the rising in " + result.name + "; every band taking part loses 1 strength.",
        "掷骰 " + result.roll + "（需要 " + result.need + " 或更小）：法西斯讨伐队镇压了" + result.name + "的起义，参加起义的每支游击队损失 1 点力量。",
      );
  showEventBanner(
    '<img class="banner_photo" src="img/partisans_borovsk_1941.jpg" /><small class="banner_kicker">Кровь за кровь, смерть за смерть!</small><img src="img/' +
      result.roll +
      '.png" />' +
      (result.success
        ? L("The partisans have taken " + result.name + "!", "游击队夺取了" + result.name + "！")
        : L("The rising in " + result.name + " is crushed", result.name + "的起义被镇压")) +
      "<span>" +
      note +
      "</span>",
    8000,
  );
  return note;
}
// ---------------------------------------------------------------- Encirclement and city stocks
// Major cities stockpile supplies for their garrison: a stock point is added at the start of the
// owner's turn while the city is in communication and no enemy unit is within 2 hexes (time and
// distance from the front). A city that changes hands loses its stocks.
const CITY_STOCK_CAP = { "10,2": 4, "10,6": 3 };
let cityStocks = { "10,2": { owner: "soviet", value: 4 }, "10,6": { owner: "soviet", value: 3 } };
// Every hex around the unit is an enemy unit or in an enemy ZOC: it cannot break out even one hex
function isFullyRinged(e, t) {
  const n = "german" === t ? "soviet" : "german";
  return grid
    .neighborsOf(e)
    .filter(function (e) {
      return e && "off" !== e.terrain;
    })
    .every(function (e) {
      const i = lookupUnit(e);
      return (i && i.army === n) || isEZOC(e, t);
    });
}
// The stocks a unit of army t can draw on in hex e (null if none)
function cityStock(e, t) {
  const n = e.x + "," + e.y,
    i = cityStocks[n];
  return CITY_STOCK_CAP[n] && i && i.owner === t && e.control === t ? i : null;
}
function buildCityStocks(e, t) {
  for (const n in CITY_STOCK_CAP) {
    const [i, o] = n.split(",").map(Number),
      r = grid.get({ x: i, y: o });
    if (!r || r.control !== e) continue;
    const a = cityStocks[n] || (cityStocks[n] = { owner: e, value: 0 });
    (a.owner !== e && ((a.owner = e), (a.value = 0)),
      t[e](r) &&
        !b4mUnits.some(function (t) {
          return t.army !== e && t.position && r.distance(Hex(t.position)) <= 2;
        }) &&
        (a.value = Math.min(CITY_STOCK_CAP[n], a.value + 1)));
  }
}
// ---------------------------------------------------------------- Sound effects
// Synthesised with the Web Audio API (no recordings): oscillators, filtered noise and envelopes.
let soundOn = !0,
  audioCtx = null,
  audioOut = null,
  noiseBuf = null,
  lastMoveSound = 0;
function audioReady() {
  if (!soundOn) return null;
  try {
    if (!audioCtx) {
      const e = window.AudioContext || window.webkitAudioContext;
      if (!e) return null;
      audioCtx = new e();
      const t = audioCtx.createDynamicsCompressor();
      ((audioOut = audioCtx.createGain()),
        (audioOut.gain.value = 0.6),
        audioOut.connect(t),
        t.connect(audioCtx.destination),
        (noiseBuf = audioCtx.createBuffer(1, 2 * audioCtx.sampleRate, audioCtx.sampleRate)));
      const n = noiseBuf.getChannelData(0);
      for (let e = 0; e < n.length; e++) n[e] = 2 * Math.random() - 1;
    }
    return ("suspended" === audioCtx.state && audioCtx.resume(), loadRecordings(audioCtx), audioCtx);
  } catch (e) {
    return null;
  }
}
// Browsers only allow sound after a click or a tap: wake the audio up on each one
document.addEventListener(
  "pointerdown",
  function () {
    soundOn && audioReady();
  },
  !0,
);
function sNoise(e, t, n) {
  const i = e.createBufferSource();
  return ((i.buffer = noiseBuf), i.start(t, 1.5 * Math.random()), i.stop(t + n), i);
}
function sEnv(e, t, n, i, o) {
  (e.gain.setValueAtTime(1e-4, t),
    e.gain.exponentialRampToValueAtTime(i, t + n),
    e.gain.exponentialRampToValueAtTime(1e-4, t + n + o));
}
function sFilter(e, t, n, i) {
  const o = e.createBiquadFilter();
  return ((o.type = t), (o.frequency.value = n), (o.Q.value = i || 0.7), o);
}
// One gun firing: a low thump, the blast (noise closing down), an optional sharp crack, and an echo
function sGun(e, t, n) {
  const i = e.createOscillator(),
    o = e.createGain();
  ((i.type = "sine"),
    i.frequency.setValueAtTime(n.f0, t),
    i.frequency.exponentialRampToValueAtTime(n.f1, t + 0.35),
    sEnv(o, t, 0.004, n.gain, 0.5),
    i.connect(o).connect(audioOut),
    i.start(t),
    i.stop(t + 0.9));
  const r = sNoise(e, t, n.dur + 0.2),
    a = sFilter(e, "lowpass", n.cut0, 0.8),
    l = e.createGain();
  (a.frequency.setValueAtTime(n.cut0, t),
    a.frequency.exponentialRampToValueAtTime(n.cut1, t + n.dur),
    sEnv(l, t, 0.003, 0.9 * n.gain, n.dur),
    r.connect(a).connect(l).connect(audioOut));
  const s = e.createDelay(1),
    c = e.createGain();
  if (((s.delayTime.value = 0.28), (c.gain.value = 0.25), l.connect(s).connect(c).connect(audioOut), n.crack)) {
    const i = sNoise(e, t, 0.08),
      o = sFilter(e, "highpass", 1800),
      r = e.createGain();
    (sEnv(r, t, 0.001, 0.7 * n.gain, 0.06), i.connect(o).connect(r).connect(audioOut));
  }
}
// German attack: a battery of 15 cm sFH 18 heavy howitzers, deep blasts and a long rumble
function soundGermanArtillery() {
  const e = audioReady();
  if (!e) return;
  const t = e.currentTime + 0.05;
  for (let n = 0; n < 4; n++)
    sGun(e, t + 0.5 * n + 0.08 * Math.random(), { f0: 85, f1: 32, cut0: 1400, cut1: 120, dur: 1.9, crack: !1, gain: 0.9 });
}
// Russian attack: 76 mm divisional guns ("Ratsch-Bumm": the crack of the shell comes first), sharp and quick
function soundSovietGuns() {
  const e = audioReady();
  if (!e) return;
  const t = e.currentTime + 0.05;
  for (let n = 0; n < 5; n++)
    sGun(e, t + 0.28 * n + 0.05 * Math.random(), { f0: 170, f1: 60, cut0: 3800, cut1: 260, dur: 0.85, crack: !0, gain: 0.75 });
}
// Shock army attack: a BM-13 "Katyusha" salvo, howling rockets one after another, then a ripple of explosions
function soundKatyusha() {
  const e = audioReady();
  if (!e) return;
  const t = e.currentTime + 0.05;
  for (let n = 0; n < 10; n++) {
    const i = t + 0.17 * n + 0.04 * Math.random(),
      o = sNoise(e, i, 1.3),
      r = sFilter(e, "bandpass", 700, 3),
      a = e.createGain();
    (r.frequency.setValueAtTime(600, i),
      r.frequency.exponentialRampToValueAtTime(2600, i + 1.1),
      sEnv(a, i, 0.04, 1.6, 1.1),
      o.connect(r).connect(a).connect(audioOut));
    const l = e.createOscillator(),
      s = e.createGain();
    ((l.type = "sawtooth"),
      l.frequency.setValueAtTime(260, i),
      l.frequency.exponentialRampToValueAtTime(900, i + 1.1),
      sEnv(s, i, 0.05, 0.12, 1),
      l.connect(sFilter(e, "lowpass", 1800)).connect(s).connect(audioOut),
      l.start(i),
      l.stop(i + 1.3));
  }
  for (let n = 0; n < 9; n++)
    sGun(e, t + 2.1 + 0.14 * n + 0.06 * Math.random(), { f0: 110, f1: 40, cut0: 2200, cut1: 150, dur: 1.1, crack: !1, gain: 0.55 });
}
// Winter assault: a crowd of voices shouting "U-raaa!" (sawtooth voices through two vowel formants, u -> r -> a)
function soundUra() {
  const e = audioReady();
  if (!e) return;
  const t = e.currentTime + 0.05,
    n = sFilter(e, "lowpass", 3800),
    i = e.createGain();
  ((i.gain.value = 3.2), n.connect(i).connect(audioOut));
  for (let o = 0; o < 16; o++) {
    const r = t + 0.35 * Math.random(),
      a = 105 + 85 * Math.random(),
      l = 1.7 + 0.4 * Math.random(),
      s = e.createOscillator(),
      c = e.createOscillator(),
      d = e.createGain(),
      u = e.createGain();
    ((s.type = "sawtooth"),
      s.frequency.setValueAtTime(a, r),
      s.frequency.linearRampToValueAtTime(1.18 * a, r + 0.5),
      s.frequency.linearRampToValueAtTime(1.12 * a, r + l),
      (c.frequency.value = 5 + 2 * Math.random()),
      (d.gain.value = 3 + 3 * Math.random()),
      c.connect(d).connect(s.frequency),
      u.gain.setValueAtTime(1e-4, r),
      u.gain.exponentialRampToValueAtTime(0.12, r + 0.08),
      u.gain.linearRampToValueAtTime(0.12, r + 0.22),
      u.gain.linearRampToValueAtTime(0.04, r + 0.26),
      u.gain.linearRampToValueAtTime(0.12, r + 0.3),
      u.gain.linearRampToValueAtTime(0.05, r + 0.33),
      u.gain.linearRampToValueAtTime(0.13, r + 0.38),
      u.gain.setValueAtTime(0.13, r + l - 0.35),
      u.gain.exponentialRampToValueAtTime(1e-4, r + l),
      s.connect(u));
    for (const [h, f, p] of [
      [320, 760, 6],
      [800, 1150, 7],
    ]) {
      const m = sFilter(e, "bandpass", h, p);
      (m.frequency.setValueAtTime(h, r),
        m.frequency.setValueAtTime(h, r + 0.22),
        m.frequency.linearRampToValueAtTime(f, r + 0.38),
        u.connect(m).connect(n));
    }
    (c.start(r), s.start(r), c.stop(r + l + 0.05), s.stop(r + l + 0.05));
  }
  const o = sNoise(e, t, 2.2),
    r = sFilter(e, "bandpass", 1200, 1),
    a = e.createGain();
  (sEnv(a, t, 0.1, 0.08, 1.9), o.connect(r).connect(a).connect(n));
}
// A panzer column on the move (Panzer III and IV): the Maybach petrol V12, firing six times a turn of
// the crankshaft with small differences between cylinders, revving up and changing gear; the steel
// track links clattering over the sprocket and the road wheels, the heavy slap of the track, the
// squeal of the idlers and the rumble of the hull. The column comes closer, passes and goes away.
let rollingUntil = 0;
// ---------------------------------------------------------------- Recorded tanks
// A real tank, cut from a film on Wikimedia Commons: the original Maybach V12 of Tiger 131 at Bovington,
// starting and then running hard. Only parts with no human voice in them are used.
const RECORDINGS = {
  run: "audio/panzer_tiger_run.wav",
  tigerStart: "audio/panzer_tiger_start.wav",
};
let panzerEnginesTurn = 0;
// Loaded once per audio context, as soon as the sound is woken up by a click
function loadRecordings(ctx) {
  if (!ctx || ctx.recordings) return;
  ctx.recordings = {};
  for (const name in RECORDINGS)
    fetch(RECORDINGS[name])
      .then(function (response) {
        return response.ok ? response.arrayBuffer() : Promise.reject();
      })
      .then(function (data) {
        return ctx.decodeAudioData(data);
      })
      .then(function (buffer) {
        ctx.recordings[name] = buffer;
      })
      .catch(function () {});
}
// Part of a recording played as a column passing by: it swells, holds and fades away
function playPass(ctx, buffer, t0, length, level, options) {
  const source = ctx.createBufferSource(),
    gain = ctx.createGain(),
    tone = ctx.createBiquadFilter(),
    rate = options.rate || 1,
    span = Math.min(length * rate, buffer.duration - 0.05),
    offset = void 0 !== options.offset ? options.offset : Math.random() * Math.max(0, buffer.duration - span);
  ((source.buffer = buffer),
    (source.playbackRate.value = rate),
    (tone.type = "lowpass"),
    (tone.frequency.value = options.muffle || 16e3),
    gain.gain.setValueAtTime(0.06 * level, t0),
    gain.gain.exponentialRampToValueAtTime(level, t0 + options.fadeIn),
    gain.gain.setValueAtTime(level, t0 + Math.max(options.fadeIn, length - options.fadeOut)),
    gain.gain.exponentialRampToValueAtTime(0.03 * level, t0 + length),
    gain.gain.linearRampToValueAtTime(0, t0 + length + 0.05),
    source.connect(tone).connect(gain).connect(audioOut),
    source.start(t0, offset, span));
}
// German panzers: the Maybach engine of Tiger 131; the first column to move in a turn starts its engines first
function soundPanzer(ctx, t0, winter, mud) {
  if (ctx.currentTime < rollingUntil) return;
  loadRecordings(ctx);
  const recordings = ctx.recordings;
  if (!recordings.run) return soundPanzerSynth(ctx, t0, winter, mud);
  let start = t0;
  (recordings.tigerStart &&
    panzerEnginesTurn !== currentTurn.turn &&
    ((panzerEnginesTurn = currentTurn.turn),
    playPass(ctx, recordings.tigerStart, t0, 3.6, 0.8, { offset: 0, fadeIn: 0.05, fadeOut: 1.2 }),
    (start = t0 + 1.4)),
    playPass(ctx, recordings.run, start, 3.4, 1.1, {
      fadeIn: 0.7,
      fadeOut: 1.1,
      rate: mud ? 0.88 : 1,
      // deep mud and snow swallow the clatter of the tracks
      muffle: winter ? 3500 : mud ? 2500 : 16e3,
    }),
    (rollingUntil = start + 3));
}
// The engine as one turn of the crankshaft: strong firing orders (6, 12, 18...), weaker orders in
// between (uneven cylinders), falling off above about 1.5 kHz. Built once per audio context.
function engineWave(ctx) {
  if (ctx.engineWave) return ctx.engineWave;
  const n = 64,
    real = new Float32Array(n),
    imag = new Float32Array(n);
  let seed = 11;
  const next = function () {
    return ((seed = (seed * 16807) % 2147483647), seed / 2147483647);
  };
  for (let k = 1; k < n; k++) {
    const amp = (k % 6 === 0 ? 1 : k % 3 === 0 ? 0.35 : 0.16 + 0.1 * next()) / (1 + Math.pow(k / 20, 2)),
      phase = 2 * Math.PI * next();
    ((real[k] = amp * Math.cos(phase)), (imag[k] = amp * Math.sin(phase)));
  }
  return (ctx.engineWave = ctx.createPeriodicWave(real, imag));
}
// One metallic hit: a short burst of noise and a few inharmonic rings, as of steel on steel
function addPing(x, sr, start, amp, freqs, decay) {
  const i0 = Math.floor(start * sr),
    len = Math.min(Math.floor(5 * decay * sr), x.length - i0),
    fall = Math.exp(-1 / (decay * sr)),
    clickFall = Math.exp(-1 / (0.0012 * sr)),
    rings = freqs.map(function (f, j) {
      return { c: Math.cos((2 * Math.PI * f) / sr), s: Math.sin((2 * Math.PI * f) / sr), re: 1, im: 0, w: 1 / (j + 1.5) };
    });
  let env = amp,
    click = 1;
  for (let k = 0; k < len; k++) {
    let s = click > 0.01 ? (2 * Math.random() - 1) * click : 0;
    for (const r of rings) {
      const re = r.re * r.c - r.im * r.s;
      ((r.im = r.re * r.s + r.im * r.c), (r.re = re), (s += r.im * r.w));
    }
    ((x[i0 + k] += env * s), (env *= fall), (click *= clickFall));
  }
}
// The tracks, written sample by sample: link clicks speeding up as the column gets under way, the slap
// of the track every few links, two or three squeals of the idlers (more in the frost)
function trackBuffer(ctx, duration, winter, mud) {
  const sr = ctx.sampleRate,
    buf = ctx.createBuffer(1, Math.floor(duration * sr), sr),
    x = buf.getChannelData(0);
  let t = 0.04,
    link = 0;
  for (; t < duration - 0.05; link++) {
    const speed = Math.min(1, t / 0.9),
      rate = (mud ? 11 : 16) + (mud ? 5 : 9) * speed;
    (addPing(x, sr, t, (0.1 + 0.16 * Math.random()) * (0.55 + 0.45 * speed), [2100 + 500 * Math.random(), 3400 + 600 * Math.random(), 5200 + 800 * Math.random()], 0.004 + 0.004 * Math.random()),
      link % 5 === 0 &&
        addPing(x, sr, t + 0.004, 0.34 * (0.6 + 0.4 * speed), [650 + 250 * Math.random(), 1150 + 250 * Math.random(), 1900], mud ? 0.012 : 0.02),
      (t += (1 / rate) * (0.8 + 0.4 * Math.random())));
  }
  for (let q = 0; q < (winter ? 3 : 2); q++) {
    const start = 0.5 + Math.random() * (duration - 1.3),
      length = 0.2 + 0.3 * Math.random(),
      f0 = 1600 + 1000 * Math.random(),
      i0 = Math.floor(start * sr);
    let phase = 0;
    for (let k = 0; k < length * sr && i0 + k < x.length; k++) {
      const tt = k / sr,
        f = f0 * (1 + 0.025 * Math.sin(2 * Math.PI * 9 * tt) + 0.06 * (tt / length));
      phase += (2 * Math.PI * f) / sr;
      x[i0 + k] += 0.05 * Math.pow(Math.sin((Math.PI * tt) / length), 2) * (Math.sin(phase) + 0.35 * Math.sin(2 * phase));
    }
  }
  return buf;
}
function soundPanzerSynth(ctx, t0, winter, mud) {
  if (ctx.currentTime < rollingUntil) return;
  const duration = 3;
  rollingUntil = t0 + duration - 0.5;
  // distance: the sound swells as the column comes closer, the high notes open up, then it goes away
  const out = ctx.createGain(),
    near = function (filter, far, close) {
      (filter.frequency.setValueAtTime(far, t0),
        filter.frequency.linearRampToValueAtTime(close, t0 + 1.1),
        filter.frequency.setValueAtTime(close, t0 + 1.7),
        filter.frequency.linearRampToValueAtTime(far, t0 + duration));
    };
  (out.gain.setValueAtTime(0.08, t0),
    out.gain.exponentialRampToValueAtTime(1, t0 + 0.9),
    out.gain.setValueAtTime(1, t0 + 1.6),
    out.gain.exponentialRampToValueAtTime(0.06, t0 + duration - 0.15),
    out.gain.linearRampToValueAtTime(0, t0 + duration),
    out.connect(audioOut));
  const engineTone = sFilter(ctx, "lowpass", 600, 0.6),
    body = sFilter(ctx, "peaking", 140, 1.2);
  ((body.gain.value = 6), near(engineTone, 450, 1500), engineTone.connect(body).connect(out));
  // two engines a little apart in revs, so that they beat against each other
  for (const [rpm, level] of [
    [1800, 1],
    [1950, 0.65],
  ]) {
    const turn = (rpm / 60) * (mud ? 1.12 : 1),
      engine = ctx.createOscillator(),
      wobble = ctx.createOscillator(),
      wobbleDepth = ctx.createGain(),
      gain = ctx.createGain();
    (engine.setPeriodicWave(engineWave(ctx)),
      engine.frequency.setValueAtTime(0.7 * turn, t0),
      engine.frequency.linearRampToValueAtTime(turn, t0 + 0.8),
      engine.frequency.setValueAtTime(turn, t0 + 1.35),
      // a change of gear: the revs drop, then climb again
      engine.frequency.linearRampToValueAtTime(0.74 * turn, t0 + 1.5),
      engine.frequency.linearRampToValueAtTime(0.97 * turn, t0 + 2.3),
      (wobble.frequency.value = 5 + 2 * Math.random()),
      (wobbleDepth.gain.value = 0.012 * turn),
      wobble.connect(wobbleDepth).connect(engine.frequency),
      (gain.gain.value = 0.3 * level),
      engine.connect(gain).connect(engineTone),
      engine.start(t0),
      wobble.start(t0),
      engine.stop(t0 + duration),
      wobble.stop(t0 + duration));
    // the exhaust: noise beating at the engine's own rhythm
    const exhaust = sNoise(ctx, t0, duration),
      exhaustBand = sFilter(ctx, "bandpass", 380, 0.9),
      pulse = ctx.createGain(),
      pulseDepth = ctx.createGain();
    ((exhaust.loop = !0),
      (pulseDepth.gain.value = 0.5),
      engine.connect(pulseDepth).connect(pulse.gain),
      exhaust.connect(exhaustBand).connect(pulse),
      (pulse.gain.value = 0.45 * level),
      pulse.connect(engineTone));
  }
  // the hull and the ground: a deep uneven rumble
  const rumble = sNoise(ctx, t0, duration),
    rumbleTone = sFilter(ctx, "lowpass", 85, 0.7),
    rumbleGain = ctx.createGain();
  ((rumble.loop = !0), (rumbleGain.gain.value = 2.2), rumble.connect(rumbleTone).connect(rumbleGain).connect(out));
  // the tracks
  const tracks = ctx.createBufferSource(),
    tracksLow = sFilter(ctx, "highpass", 250, 0.7),
    tracksTone = sFilter(ctx, "lowpass", 3e3, 0.7),
    tracksGain = ctx.createGain();
  const season = winter ? "winter" : mud ? "mud" : "dry";
  ctx.trackBuffers || (ctx.trackBuffers = {});
  const pool = ctx.trackBuffers[season] || (ctx.trackBuffers[season] = []);
  pool.length < 3 && pool.push(trackBuffer(ctx, duration + 0.3, winter, mud));
  ((tracks.buffer = pool[Math.floor(Math.random() * pool.length)]),
    (tracks.playbackRate.value = 0.94 + 0.12 * Math.random()),
    near(tracksTone, winter ? 1800 : 2600, winter ? 5e3 : 7500),
    (tracksGain.gain.value = 1.4),
    tracks.connect(tracksLow).connect(tracksTone).connect(tracksGain).connect(out),
    tracks.start(t0));
}
// Snow under the boots. A footstep on packed snow is a roll from heel to toe of about a third of a
// second, in which the snow breaks in hundreds of tiny cracks (written here grain by grain, denser when
// the weight comes down), over the soft thud of the boot. A few variants are written once per audio
// context and played a little faster or slower, so that no two steps sound the same.
function snowStepBuffer(ctx) {
  const sr = ctx.sampleRate,
    length = 0.4,
    n = Math.floor(length * sr),
    buf = ctx.createBuffer(1, n, sr),
    x = buf.getChannelData(0),
    // the weight on the snow: the heel strikes, the sole rolls, the toe pushes off
    weight = function (t) {
      return t < 0.012
        ? t / 0.012
        : t < 0.08
          ? 1 - (0.4 * (t - 0.012)) / 0.068
          : t < 0.2
            ? 0.6 + 0.15 * Math.sin(((t - 0.08) / 0.12) * Math.PI)
            : Math.max(0, 0.6 * (1 - (t - 0.2) / 0.16));
    };
  // the cracks: a random rain of grains, each a tiny burst of noise of 0.5 to 3 ms
  for (let t = 0; t < 0.36; ) {
    const w = weight(t);
    if ((t += -Math.log(1 - Math.random()) / (250 + 2600 * w)) >= 0.36) break;
    const amp = w * Math.pow(Math.random(), 2.2),
      i0 = Math.floor(t * sr),
      d = Math.floor((5e-4 + 0.0025 * Math.random()) * sr);
    for (let k = 0; k < d && i0 + k < n; k++) x[i0 + k] += amp * (2 * Math.random() - 1) * (1 - k / d);
  }
  // soften it: no rumble under 350 Hz and no hiss over 3.5 kHz (one-pole filters, twice on the top)
  const hp = Math.exp((-2 * Math.PI * 350) / sr),
    lp = 1 - Math.exp((-2 * Math.PI * 3500) / sr);
  let y = 0,
    xp = 0,
    l1 = 0,
    l2 = 0;
  for (let k = 0; k < n; k++) {
    ((y = hp * (y + x[k] - xp)), (xp = x[k]), (l1 += lp * (y - l1)), (l2 += lp * (l1 - l2)), (x[k] = l2));
  }
  // the boot coming down: a short, deep and muffled thud
  const thud = 1 - Math.exp((-2 * Math.PI * 140) / sr);
  let a = 0,
    b = 0;
  for (let k = 0; k < Math.floor(0.12 * sr); k++) {
    const t = k / sr,
      v = (2 * Math.random() - 1) * Math.exp(-t / 0.035) * Math.min(1, t / 0.004);
    ((a += thud * (v - a)), (b += thud * (a - b)), (x[k] += 6 * b));
  }
  return buf;
}
function soundSnowMarch(ctx, t0) {
  ctx.snowSteps ||
    (ctx.snowSteps = [0, 1, 2, 3].map(function () {
      return snowStepBuffer(ctx);
    }));
  // deep snow: a slower pace, about 95 a minute, the column still in step
  for (let n = 0; n < 6; n++) {
    const start = t0 + 0.63 * n,
      loud = n % 2 ? 0.75 : 1;
    for (let e = 0; e < 3; e++) {
      const step = ctx.createBufferSource(),
        gain = ctx.createGain();
      ((step.buffer = ctx.snowSteps[(n + e) % ctx.snowSteps.length]),
        (step.playbackRate.value = 0.9 + 0.2 * Math.random()),
        (gain.gain.value = (0 === e ? 1 : 0.55) * loud * SNOW_STEP_LEVEL),
        step.connect(gain).connect(audioOut),
        step.start(start + 0.014 * e + 0.008 * Math.random()));
    }
  }
}
const SNOW_STEP_LEVEL = 0.6;
// Movement: marching boots (crunching snow in winter), tank engines and tracks, or galloping hooves
let marchingUntil = 0;
function soundMove(e) {
  const t = audioReady();
  if (!t) return;
  const n = performance.now();
  if (n - lastMoveSound < 250) return;
  lastMoveSound = n;
  const i = t.currentTime + 0.05,
    o = isWinterTurn();
  if ("tank" === e.type) soundPanzer(t, i, o, 3 === currentTurn.turn || 4 === currentTurn.turn);
  else if ("cavalry" === e.type)
    for (let e = 0; e < 4; e++)
      for (const n of [0, 0.09, 0.19]) {
        const r = i + 0.42 * e + n,
          a = sNoise(t, r, 0.05),
          l = sFilter(t, "bandpass", o ? 500 : 1100, 1.5),
          s = t.createGain();
        (sEnv(s, r, 0.002, o ? 1.2 : 1.8, 0.05), a.connect(l).connect(s).connect(audioOut));
      }
  else {
    // Infantry marching in step: the boots of the column land together, left-right at about 115 paces
    // a minute (a spread of a few hundredths of a second would turn each pace into a gallop). A new
    // column does not start while one is still marching, so that the paces never overlap.
    if (t.currentTime < marchingUntil) return;
    // in winter the column trudges through the snow
    if (o) return ((marchingUntil = i + 0.63 * 6), void soundSnowMarch(t, i));
    marchingUntil = i + 0.52 * 6;
    for (let n = 0; n < 6; n++) {
      const r = i + 0.52 * n,
        loud = n % 2 ? 0.7 : 1;
      for (let e = 0; e < 3; e++) {
        const s = r + 0.008 * e + 0.004 * Math.random(),
          // the heel: a dull thump
          a = sNoise(t, s, 0.12),
          l = sFilter(t, "lowpass", 340, 0.8),
          g = t.createGain(),
          // the sole: grit on the road
          c = sNoise(t, s + 0.01, 0.07),
          f = sFilter(t, "bandpass", 2300, 0.9),
          h = t.createGain();
        (sEnv(g, s, 0.004, 2.2 * loud, 0.1),
          a.connect(l).connect(g).connect(audioOut),
          sEnv(h, s + 0.01, 0.004, 0.3 * loud, 0.06),
          c.connect(f).connect(h).connect(audioOut));
      }
    }
  }
}
// The artillery of the attacking side opens each battle; in winter the Russian infantry charges with a "Ura!"
function soundBattle(e) {
  if (!e || !e.attackingUnits || !e.attackingUnits.length) return;
  if ("german" === e.attackingUnits[0].army) return void soundGermanArtillery();
  (e.attackingUnits.some(function (e) {
    return "shock" === e.type;
  })
    ? soundKatyusha()
    : soundSovietGuns(),
    isWinterTurn() && setTimeout(soundUra, 900));
}
// ---------------------------------------------------------------- Manpower and losses
// Rule 1.0: a German corps is about 25,000 soldiers, a Russian army about 40,000. The 1st Shock Army is
// larger, a Guards cavalry corps smaller. A unit has two steps: each step lost is half of its men.
const MEN = { german: 25e3, soviet: 4e4, shock: 5e4, cavalry: 15e3 };
let casualties = { german: 0, soviet: 0 },
  // the casualties when the current phase began: the battle table shows only what was lost since
  phaseLossStart = { german: 0, soviet: 0 },
  battleSnapshot = null,
  lossesTimer = null;
function unitMen(e) {
  return "soviet" === e.army
    ? "shock" === e.type
      ? MEN.shock
      : "cavalry" === e.type
        ? MEN.cavalry
        : MEN.soviet
    : MEN.german;
}
function unitSteps(e) {
  return e && e.position ? ("full" === e.strength ? 2 : 1) : 0;
}
function currentMen(e) {
  return (unitSteps(e) * unitMen(e)) / 2;
}
function snapshotBattle(e) {
  return e.attackingUnits
    .concat([e.defendingUnit])
    .map(function (e) {
      const t = b4mUnits[b4mUnitsIndex(e)];
      return t ? { id: t.id, steps: unitSteps(t) } : null;
    })
    .filter(Boolean);
}
function battleLossesSince(e) {
  const t = { german: 0, soviet: 0 };
  if (e)
    for (const n of e) {
      const i = b4mUnits[b4mUnitsIndex(n)];
      i && (t[i.army] += (Math.max(0, n.steps - unitSteps(i)) * unitMen(i)) / 2);
    }
  return t;
}
function finalizeBattleLosses() {
  if (!battleSnapshot) return;
  const e = battleLossesSince(battleSnapshot);
  ((casualties.german += e.german), (casualties.soviet += e.soviet), (battleSnapshot = null), refreshLossesDisplay());
}
function currentLosses() {
  const e = battleLossesSince(battleSnapshot);
  return { german: casualties.german + e.german, soviet: casualties.soviet + e.soviet };
}
function fmtMen(e) {
  return Math.round(e).toLocaleString("en-US");
}
function lossesText() {
  const e = currentLosses();
  return (
    "Losses: German " +
    fmtMen(e.german) +
    ", Russian " +
    fmtMen(e.soviet) +
    (e.german > 0 && e.soviet > 0
      ? " · ratio German : Russian = 1 : " + (e.soviet / e.german).toFixed(1)
      : "")
  );
}
function refreshLossesDisplay() {
  const e = document.getElementById("combat_losses");
  if (!e) return;
  const t = currentLosses(),
    n = t.german - phaseLossStart.german,
    i = t.soviet - phaseLossStart.soviet;
  e.innerText = n + i > 0 ? "Lost in these battles: German " + fmtMen(n) + ", Russian " + fmtMen(i) : "";
}
// ---------------------------------------------------------------- Weather and seasons
// Typical weather around Moscow at the date of each turn in 1941
const WEATHER = {
  1: "Cool and dry, around +5 °C",
  2: "First snow on 7 October, around 0 °C",
  3: "Rain and deep mud (rasputitsa), around +3 °C",
  4: "Mud and frosty nights, around 0 °C",
  5: "The ground freezes hard, around -8 °C",
  6: "Snow and frost, around -10 °C",
  7: "Hard frost, around -15 °C",
  8: "Severe frost and deep snow, -25 to -35 °C",
  9: "Deep snow, around -20 °C",
};
// The map turns muddy on the mud turns
function drawSeason() {
  const canvas = document.getElementById("season_overlay");
  if (!canvas || !canvas.width) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (3 === currentTurn.turn || 4 === currentTurn.turn) {
    ctx.fillStyle = "rgba(110, 80, 40, 0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
// ---------------------------------------------------------------- Command decisions
// At key moments of 1941 the player stands in for the Stavka, the General Staff or the OKH and settles
// what the units on the map cannot: rail capacity, special forces, a parade, the strategic reserves,
// Hitler's orders. A decision comes as a dispatch before the side's turn starts; pointing at an order
// shows its effect on the game, and the computer takes the historical choice.
let decisions = {};
function addFatigueToArmy(army, points) {
  for (const unit of b4mUnits) unit.army === army && unit.position && addFatigue(unit, points);
}
function unitsOf(army) {
  return b4mUnits.filter(function (unit) {
    return unit.army === army && unit.position;
  });
}
function namesOf(units) {
  return units.map(unitName).join(", ");
}
// Half-strength Russian infantry armies in communication can take in the NKVD brigade
function nkvdCandidates() {
  const ctx = supplyContext();
  return unitsOf("soviet").filter(function (unit) {
    return "infantry" === unit.type && "reduced" === unit.strength && ctx.soviet(grid.get(unit.position));
  });
}
function nkvdDone() {
  return b4mUnits.some(function (unit) {
    return unit.nkvd;
  });
}
// With the NKVD brigade an army becomes a shock army: 10-4, or 5-4 at half strength
function convertToShockArmy(unit) {
  ((unit.type = "shock"), (unit.combatFull = 10), (unit.combatReduced = 5), (unit.nkvd = !0));
}
// The counter of an NKVD army: the shock symbol (a black dot), the new strengths and a small NKVD tab
function drawNkvdMarks(ctx, x, y, strength) {
  const full = "full" === strength;
  (ctx.save(),
    (ctx.fillStyle = "#211c21"),
    ctx.beginPath(),
    ctx.arc(x + 29, y + 24.5, 3.6, 0, 2 * Math.PI),
    ctx.fill(),
    (ctx.fillStyle = full ? "rgb(231, 69, 82)" : "rgb(247, 162, 156)"),
    ctx.fillRect(x + 6, y + 36, 48, 15),
    (ctx.fillStyle = "#211c21"),
    (ctx.font = "bold " + (full ? 15 : 16) + "px Arial, sans-serif"),
    (ctx.textAlign = "center"),
    (ctx.textBaseline = "middle"),
    ctx.fillText(full ? "10-4" : "5-4", x + 30, y + 44),
    (ctx.fillStyle = "#1f3a7a"),
    ctx.fillRect(x + 4, y + 4, 22, 9),
    (ctx.fillStyle = "#ffffff"),
    (ctx.font = "bold 7px Arial, sans-serif"),
    ctx.fillText("NKVD", x + 15, y + 8.8),
    ctx.restore());
}
// Winter fatigue of a German unit at the start of its turn, after the choice made at Orsha
function germanWinterFatigue(hex) {
  return !isWinterTurn() || "clothing" === decisions.trains || "moscow" === hex.city || "major" === hex.city
    ? 0
    : "none" === hex.city
      ? FATIGUE.winterOutsideCity
      : FATIGUE.winterInTown;
}
// ---------------------------------------------------------------- Music
// The March of the Defenders of Moscow (B. Mokrousov and A. Surkov, 1941), for the counteroffensive.
// The whole file is fetched once, so that it plays from the offline cache too.
let anthem = null;
function playAnthem() {
  if (!soundOn || (anthem && anthem.src && !anthem.paused)) return;
  anthem || ((anthem = new Audio()), (anthem.volume = 0.7));
  const start = function () {
    anthem.currentTime = 0;
    const playing = anthem.play();
    playing && playing.catch(function () {});
  };
  anthem.src
    ? start()
    : fetch("audio/moscow_defenders.mp3")
        .then(function (response) {
          return response.ok ? response.blob() : Promise.reject();
        })
        .then(function (blob) {
          ((anthem.src = URL.createObjectURL(blob)), start());
        })
        .catch(function () {});
}
function stopAnthem() {
  anthem && anthem.pause();
}
// ---------------------------------------------------------------- The dispatches
const HISTORY_EVENTS = [
  {
    id: "nkvd",
    turn: 3,
    army: "soviet",
    photo: {
      src: "img/partisans_borovsk_1941.jpg",
      caption: "Partisans of the Borovsk district on reconnaissance. Photograph by V. Zunin, Moscow region, November-December 1941.",
      captionZh: "博罗夫斯克区游击队在侦察。V. 兹宁摄，莫斯科州，1941 年 11 月至 12 月。",
    },
    office: "Народный комиссариат внутренних дел СССР",
    officeEn: "People's Commissariat for Internal Affairs of the USSR (NKVD)",
    stamp: "Совершенно секретно",
    slogan: {
      "original": "Все, как один, на защиту Отчизны!",
      "en": "All as one to the defence of the Fatherland!",
      "zh": "全体一致，保卫祖国！"
    },
    to: "P. A. Sudoplatov, head of the Special Group of the NKVD",
    place: "Moscow, Lubyanka",
    date: "17 October 1941",
    title: "The special-purpose brigade of the NKVD",
    text: [
      "Comrade Sudoplatov! The German-fascist hordes are tearing towards our red capital. On the night of 14 to 15 October the enemy threw masses of tanks and motorised infantry against our units and [[broke through our defences]] on the Western direction. Our troops are offering him heroic resistance, but in one sector they were forced to fall back.",
      "The Independent Motorised Rifle Brigade of Special Purpose of the NKVD (OMSBON), athletes, Chekists and Communists of the fraternal parties raised this summer at the Dynamo stadium, has been trained to fight [[behind the enemy lines]]. Comrade Stalin has called for partisan war to be kindled everywhere in the occupied regions. But the front before Moscow needs every bayonet.",
      "Throw the brigade's picked men into the line, or [[drop its detachments into the forests]] in the enemy's rear?"
    ],
    quotes: [
      {
        "original": "Над Москвой нависла угроза. Но за Москву будем драться упорно, ожесточенно, до последней капли крови.",
        "translation": "A threat hangs over Moscow. But we will fight for Moscow stubbornly, fiercely, [[to the last drop of blood]].",
        "source": "A. S. Shcherbakov, secretary of the Moscow Committee of the VKP(b), radio address to the working people of Moscow, 17 October 1941"
      },
      {
        "original": "В занятых врагом районах нужно создавать партизанские отряды, конные и пешие, создавать диверсионные группы для борьбы с частями вражеской армии, для разжигания партизанской войны всюду и везде…",
        "translation": "In the areas occupied by the enemy, partisan detachments, mounted and on foot, must be formed, and sabotage groups created to fight the units of the enemy army, [[to kindle partisan war everywhere]]…",
        "source": "J. V. Stalin, radio address of 3 July 1941"
      }
    ],
    options: [
      {
        id: "infantry",
        label: "Send it into the line as infantry",
        order: "Every Chekist into the line: the red capital must be held.",
        available: function () {
          return nkvdCandidates().length > 0;
        },
        effects: function () {
          const candidates = nkvdCandidates();
          return [
            "You choose a Russian infantry army at half strength that is in communication: it becomes a shock army, 5-4 at once and 10-4 once a replacement step restores it.",
            candidates.length ? "Armies that can take it now: " + namesOf(candidates) + "." : "",
          ];
        },
      },
      {
        id: "drop",
        label: "Drop it behind the German lines",
        order: "Parachute the detachments into the forests: make conditions intolerable for the enemy at every step.",
        effects: function () {
          return [
            "2 partisan bands of strength 2 form now on forest hexes behind the German lines (you place them). They act from your next turn.",
            "German lines of communication cannot pass through a band's hex (a band has no zone of control).",
            "Partisan bands on the map now: " + partisans.length + " (at most " + MAX_PARTISANS + ").",
          ];
        },
      },
    ],
    ai: function () {
      return nkvdCandidates().length ? "infantry" : "drop";
    },
    history: "Both, in fact. In October and November 1941 the fighters of the brigade mined the key objects of the capital and held sectors of its defences, while [[its detachments went behind the enemy lines]] to wage partisan war.",
    historyQuote: {
      "original": "Государственный Комитет Обороны призывает всех трудящихся столицы соблюдать порядок и спокойствие и оказывать Красной Армии, обороняющей Москву, всяческое содействие.",
      "translation": "The State Defence Committee calls on all the working people of the capital to keep order and calm and to give the Red Army defending Moscow [[every assistance]].",
      "source": "Decree of the State Defence Committee on the state of siege in Moscow, 19 October 1941, signed by its chairman J. Stalin"
    },
  },
  {
    id: "parade",
    turn: 4,
    army: "soviet",
    office: "Государственный Комитет Обороны",
    officeEn: "State Defence Committee",
    stamp: "Совершенно секретно",
    slogan: {
      "original": "Отстоим родную Москву!",
      "en": "We will defend our native Moscow!",
      "zh": "保卫我们亲爱的莫斯科！"
    },
    to: "The members of the State Defence Committee",
    place: "Moscow, the Kremlin",
    date: "6 November 1941",
    title: "The 24th anniversary of October: a parade on Red Square?",
    text: [
      "On 7 November the peoples of the Soviet Union celebrate the [[24th anniversary of the Great October Socialist Revolution]]. Comrade Stalin proposes to hold the traditional parade on Red Square with the front [[less than 100 km away]]: the units will march past the Mausoleum of V. I. Lenin and [[straight on to the front]].",
      "Tonight the ceremonial session of the Moscow Soviet meets deep underground, in the Mayakovskaya station of the metro. The fascist aircraft can reach Moscow in minutes: only low clouds and snow will keep them on the ground."
    ],
    quotes: [
      {
        "original": "Немецкие захватчики хотят иметь истребительную войну с народами СССР. Что же, если немцы хотят иметь истребительную войну, они ее получат […] Никакой пощады немецким оккупантам! Смерть немецким оккупантам!",
        "translation": "The German invaders want a war of extermination against the peoples of the USSR. Well, if the Germans want a war of extermination, they shall have it […] [[No mercy for the German occupiers! Death to the German occupiers!]]",
        "source": "J. V. Stalin, report at the ceremonial session of the Moscow Soviet, 6 November 1941 (Pravda, 7 November)"
      }
    ],
    options: [
      {
        id: "hold",
        label: "Hold the parade",
        order: "From Red Square straight to the front, under the banner of Lenin.",
        effects: function () {
          const moscow = grid.get({ x: 10, y: 2 }),
            near = unitsOf("soviet").filter(function (unit) {
              return Hex(unit.position).distance(moscow) <= 1;
            });
          return [
            "Russian units in and next to Moscow lose 4 fatigue points, one level (" +
              (near.length ? near.length + " now: " + namesOf(near) : "none there now") +
              ").",
            "+1 Russian replacement step this turn.",
            "Risk: on a die roll of 1 the Luftwaffe bombs Red Square and a full-strength unit in Moscow loses a step.",
          ];
        },
        apply: function () {
          const moscow = grid.get({ x: 10, y: 2 });
          for (const unit of b4mUnits)
            "soviet" === unit.army && unit.position && Hex(unit.position).distance(moscow) <= 1 && addFatigue(unit, -FATIGUE.perLevel);
          liberationBonus++;
          if (1 === Math.floor(6 * Math.random()) + 1) {
            const target = lookupUnit(moscow),
              unit = target && "soviet" === target.army ? b4mUnits[b4mUnitsIndex(target)] : null;
            // a full-strength garrison loses a step; a reduced one is only shaken
            unit && "full" === unit.strength
              ? ((unit.strength = "reduced"), (casualties.soviet += unitMen(unit) / 2))
              : unit && addFatigue(unit, FATIGUE.perLevel);
            return L("This time the die rolled a 1: the Luftwaffe bombs the parade.", "这次掷出了 1：德国空军轰炸了阅兵。");
          }
          return L("Snow keeps the Luftwaffe on the ground: the troops march straight to the front.", "大雪让德国空军无法起飞：部队直接开赴前线。");
        },
      },
      { id: "cancel", label: "Cancel the parade", order: "Take no risk with the garrison.", effects: ["No effect."] },
    ],
    ai: "hold",
    history: "The parade was held on 7 November in a [[snowstorm]] that kept the fascist aircraft on the ground. The units marched past the Mausoleum and straight on to the front, and the newsreel of the parade, shown across the whole country, told the Soviet people that [[Moscow stands]].",
    historyQuote: {
      "original": "На вас смотрит весь мир как на силу, способную уничтожить грабительские полчища немецких захватчиков. … Под знаменем Ленина – вперед, к победе!",
      "translation": "The whole world looks upon you as the force capable of destroying the plundering hordes of the German invaders. … [[Under the banner of Lenin, forward to victory!]]",
      "source": "J. V. Stalin, speech at the parade on Red Square, 7 November 1941 (Pravda, 8 November)"
    },
  },
  {
    id: "trains",
    turn: 5,
    army: "german",
    office: "Oberkommando des Heeres",
    officeEn: "High Command of the Army, Quartermaster General",
    stamp: "Geheime Kommandosache",
    to: "Colonel General F. Halder, Chief of the General Staff of the Army",
    from: "General E. Wagner, Quartermaster General",
    place: "Orsha, conference of the chiefs of staff",
    date: "13 November 1941",
    title: "Winter clothing or ammunition?",
    text: [
      "Army Group Centre needs some [[26 to 30 trains a day]]. The worn-out Russian railways bring [[8 to 10 a day]] up to its railheads.",
      "The winter clothing of the army group, sweaters, gloves, caps, socks and woollen underwear for nearly two million men, would fill [[some 20 trains]], two days of everything that reaches the front. It lies in the depots in Poland. Every train of clothing is [[a train less of shells, fuel and replacements]] for the offensive that must take Moscow before the winter.",
    ],
    quotes: [
      {
        original: "...daß dieser Gegner bereits gebrochen ist und sich nie mehr erheben wird!",
        translation: "...this enemy is already broken and will never rise again!",
        source: "Hitler, speech at the Berlin Sportpalast, 3 October 1941",
      },
    ],
    options: [
      {
        id: "ammo",
        label: "Ammunition and fuel first",
        order: "The clothing waits in the depots until Moscow is taken.",
        effects: function () {
          const german = unitsOf("german"),
            outside = german.filter(function (unit) {
              return "none" === grid.get(unit.position).city;
            });
          return [
            "No change now: German replacements as usual.",
            "In winter (turns 8 and 9), at the start of each German turn: +2 fatigue outside the towns, +1 in a town, none in Moscow or Tula.",
            "German units outside the towns now: " + outside.length + " of " + german.length + ".",
          ];
        },
      },
      {
        id: "clothing",
        label: "Winter clothing first",
        order: "Twenty trains of clothing go east ahead of the shells.",
        effects: [
          "German units gain no winter fatigue, like the Red Army.",
          "The trains are lost to the replacements: no German replacement step on turns 6 and 7 (2 of the 4 still to come after this turn).",
        ],
      },
    ],
    ai: "ammo",
    history:
      "Ammunition, fuel and rations kept the priority. When the frost came the winter clothing was still in the depots at the railheads: by mid-December [[not a third of it had been issued to the troops]]. On 20 December Goebbels appealed to the German people to give their furs and woollens for the soldiers in the East.",
    historyQuote: {
      translation: "Movement of ammunition, gasoline, and rations had to receive [[an iron priority]].",
      source: "The US Army official history (E. F. Ziemke, Moscow to Stalingrad), from the German records",
    },
  },
  {
    id: "reserves",
    turn: 7,
    army: "soviet",
    office: "Ставка Верховного Главнокомандования",
    officeEn: "Stavka of the Supreme High Command",
    stamp: "Совершенно секретно",
    slogan: {
      "original": "Усилить отпор врагу, задержать его, выпустить из него кровь!",
      "en": "Stiffen the resistance to the enemy, hold him, bleed him white!",
      "zh": "加强对敌人的抵抗，挡住他，让他流尽鲜血！"
    },
    to: "Marshal B. M. Shaposhnikov, Chief of the General Staff",
    place: "Moscow, the General Staff",
    date: "1 December 1941",
    title: "The Stavka reserves",
    text: [
      "Comrade Shaposhnikov! Regardless of his enormous losses, the enemy keeps throwing new forces at Moscow. His pincers stand at Krasnaya Polyana, [[some 30 km from the Kremlin]], and before Tula. The heroic defenders of the capital are bleeding the Hitlerite hordes white.",
      "Behind the front the new armies of the Stavka reserve have assembled in secret, the 10th south-east of Moscow and the 20th to the north. Feed them into the battle now, where the line is breaking, or [[hold them back]] for the blow that will rout the enemy?"
    ],
    quotes: [
      {
        "original": "Обстановка чрезвычайно напряжена и трудна для нас, но мы можем — и должны — выдержать это напряжение, мы можем — и должны — преодолеть эти трудности.",
        "translation": "The situation is extremely tense and hard for us, but [[we can, and must, withstand this strain]]; we can, and must, overcome these difficulties.",
        "source": "Krasnaya Zvezda, editorial «The rout of the enemy must begin at Moscow», 27 November 1941"
      },
      {
        "original": "– Вы уверены, что мы удержим Москву? Я спрашиваю это с болью в душе. Говорите честно, как коммунист.\n– Москву удержим.",
        "translation": "\"Are you sure that we will hold Moscow? I ask this with pain in my heart. Speak honestly, as a Communist.\" \"[[We will hold Moscow.]]\"",
        "source": "J. V. Stalin and G. K. Zhukov on the telephone, November 1941, as Zhukov recalled it in 1966"
      }
    ],
    options: [
      {
        id: "commit",
        label: "Commit them now",
        order: "Throw the new divisions in where the line is breaking: the capital must not fall.",
        effects: ["+2 Russian replacement steps this turn."],
      },
      {
        id: "keep",
        label: "Keep them for the counteroffensive",
        order: "The front must hold with what it has, to the last man.",
        effects: ["+2 Russian replacement steps on turn 8, when the counteroffensive begins."],
      },
    ],
    ai: "keep",
    history: "The Stavka of the Supreme High Command gave the fronts only what was needed to stop the enemy pincers, and [[kept its new armies for the decisive blow]] of 5 and 6 December.",
    historyQuote: {
      original: "Нам важно было выстоять до подхода резервов.",
      translation: "What mattered to us was [[to hold out until the reserves arrived]].",
      source: "G. K. Zhukov, 1966",
    },
  },
  {
    id: "counteroffensive",
    turn: 8,
    army: "soviet",
    music: !0,
    office: "Ставка Верховного Главнокомандования",
    officeEn: "Stavka of the Supreme High Command, to the Western Front",
    stamp: "Совершенно секретно",
    slogan: {
      "original": "Смерть немецким оккупантам!",
      "en": "Death to the German occupiers!",
      "zh": "消灭德国占领者！"
    },
    to: "The armies of the Kalinin, Western and South-Western Fronts",
    place: "Perkhushkovo, headquarters of the Western Front",
    date: "5 and 6 December 1941",
    title: "The counteroffensive",
    text: [
      "The second general offensive of the Hitlerite hordes on Moscow [[has spent itself]]. Guderian's panzers are stuck before Tula and Kashira; in the north the enemy stands at Krasnaya Polyana and on the Moscow-Volga canal, 25 to 30 km from the Kremlin. The frost has fallen to [[-25 and -35 °C]], and the German-fascist divisions, exhausted and short of fuel, dig in where they stopped.",
      "Behind our front the reserves of the Stavka have reached their start lines, moving only by night and without fires. At dawn the whole front from Kalinin to Yelets [[goes over to the counteroffensive]]. Comrades! The hour of reckoning has come: [[the rout of the enemy begins at Moscow]]."
    ],
    quotes: [
      {
        "original": "Многомиллионный советский народ и его Красная армия закончат войну только полным разгромом врага. Этот разгром врага должен начаться под Москвой.",
        "translation": "The many-millioned Soviet people and its Red Army will end the war only with the complete rout of the enemy. [[That rout must begin at Moscow.]]",
        "source": "Krasnaya Zvezda, slogan of the issue of 27 November 1941"
      },
      {
        "original": "Наше дело правое. Враг будет разбит. Победа будет за нами.",
        "translation": "Our cause is just. The enemy will be beaten. [[Victory will be ours.]]",
        "source": "V. M. Molotov, radio address of 22 June 1941"
      }
    ],
    options: [
      {
        id: "attack",
        label: "Вперёд! Attack",
        order: "The counteroffensive begins: forward, to the rout of the enemy!",
        effects: function () {
          const plan = SPECIAL_ARRIVALS[WINTER_START];
          return [
            "Arriving this turn: the 1st and 2nd Guards Cavalry Corps (6-6), " +
              plan.ski +
              " ski battalions and " +
              plan.partisans +
              " partisan bands.",
            "Winter: Russian ski armies cross forests at 1 MP; " +
              ("clothing" === decisions.trains
                ? "the Germans got their winter clothing."
                : "German units without winter clothing tire fast outside the towns."),
            "keep" === decisions.reserves ? "The Stavka reserves you kept back: +2 replacement steps this turn." : "",
          ];
        },
      },
    ],
    ai: "attack",
    history: "The Kalinin Front attacked on 5 December, the Western Front on 6 December. [[Within ten days]] the Red Army freed Yakhroma, Istra, Solnechnogorsk and Klin, and on 16 December the troops of the Kalinin Front captured the city of Kalinin.",
    historyQuote: {
      "original": "6 декабря 1941 г. войска нашего Западного фронта, измотав противника в предшествующих боях, перешли в контрнаступление против его ударных фланговых группировок. В результате начатого наступления обе эти группировки разбиты и поспешно отходят, бросая технику, вооружение и неся огромные потери.",
      "translation": "On 6 December 1941 the troops of our Western Front, having worn the enemy down in the preceding battles, went over to the counteroffensive against his flank strike groups. As a result [[both these groups have been smashed]] and are hastily withdrawing, abandoning their equipment and arms and suffering enormous losses.",
      "source": "Soviet Information Bureau, «In the last hour», 12 December 1941"
    },
  },
  {
    id: "haltOrder",
    turn: 9,
    army: "german",
    office: "Oberkommando des Heeres",
    officeEn: "High Command of the Army, teletype to Army Group Centre",
    stamp: "Geheime Kommandosache",
    to: "Field Marshal F. von Bock, Army Group Centre",
    place: "Führer Headquarters, East Prussia",
    date: "16 to 18 December 1941",
    title: "Hitler's stand-fast order",
    text: [
      "Army Group Centre is reeling back in the snow. Guderian and Hoepner want to pull back to shorter lines before their divisions are cut off. Hitler fears a rout like Napoleon's in 1812 and [[forbids any retreat]].",
    ],
    quotes: [
      {
        translation:
          "The Fuehrer has ordered: Larger evasive movements cannot be made. They will lead to a total loss of heavy weapons and equipment. Commanding generals, commanders, and officers are to intervene in person to compel the troops to [[fanatical resistance]] in their positions without regard to enemy broken through on the flanks or to the rear.",
        source: "Teletype to Army Group Centre, 18 December 1941 (as translated in the US Army official history)",
      },
    ],
    options: [
      {
        id: "obey",
        label: "Obey: hold every position",
        order: "Every man fights where he stands.",
        effects: function () {
          const held = unitsOf("german").filter(function (unit) {
            return "full" === unit.strength && "none" !== grid.get(unit.position).city;
          });
          return [
            "German units at full strength defending in any city turn a DR result into a step loss and do not retreat.",
            "German units at full strength in a city now: " + held.length + ".",
          ];
        },
      },
      {
        id: "elastic",
        label: "Pull back, as Guderian urges",
        order: "Shorten the line before the divisions are cut off.",
        effects: function () {
          const vp = victoryPoints().soviet;
          return [
            "No stand-fast rule: German units retreat as usual.",
            "Every German unit loses 2 fatigue points now (" + unitsOf("german").length + " units).",
            "Hitler sacks the generals: +1 Russian victory point (" + vp + " to " + (vp + 1) + ").",
          ];
        },
        apply: function () {
          addFatigueToArmy("german", -2);
        },
      },
    ],
    ai: "obey",
    history:
      "Hitler imposed the order. Bock went on sick leave, Brauchitsch was dismissed and [[Hitler took over the command of the army himself]]; Guderian was relieved on 26 December, and Hoepner in January for withdrawing without leave.",
  },
  {
    id: "radio",
    turn: 9,
    army: "soviet",
    kind: "radio",
    music: !0,
    office: "Советское Информбюро",
    officeEn: "Soviet Information Bureau, Moscow radio",
    stamp: "В эфире",
    slogan: {
      "original": "Честь и слава доблестным защитникам Москвы!",
      "en": "Honour and glory to the valiant defenders of Moscow!",
      "zh": "光荣归于英勇的莫斯科保卫者！"
    },
    place: "Moscow radio",
    date: "13 December 1941",
    title: "Attention, this is Moscow speaking!",
    text: [
      "Attention, this is Moscow speaking! At the microphone Yuri Levitan reads a special bulletin, «In the last hour». For the first time since 22 June the radio announces [[a great defeat of the German-fascist troops]]: the boastful plan to encircle and take Moscow has failed with a crash, the enemy's flank groups are smashed and falling back, abandoning their equipment, and town after town is freed.",
      "In the factories, in the dugouts and in the partisan forests, [[the whole Soviet people is listening]]."
    ],
    quotes: [
      {
        "original": "В последний час. Провал немецкого плана окружения и взятия Москвы. Поражение немецких войск на подступах Москвы.\n…Теперь уже несомненно, что этот хвастливый план окружения и взятия Москвы провалился с треском.",
        "translation": "In the last hour. The failure of the German plan to encircle and take Moscow. The defeat of the German troops on the approaches to Moscow. … It is now beyond doubt that this boastful plan to encircle and take Moscow [[has failed with a crash]].",
        "source": "Bulletin of the Soviet Information Bureau, issued on 12 December and printed on 13 December 1941"
      }
    ],
    options: [
      {
        id: "press",
        label: "За Родину! Press on",
        order: "Pursue the enemy relentlessly, give him no respite!",
        effects: ["No change to the rules: the offensive goes on."],
      },
    ],
    ai: "press",
    history: "The bulletin was printed in all the newspapers with the portraits of the commanders of the Western Front. It announced [[the first great victory of the Red Army]] in the Patriotic War.",
    historyQuote: {
      "original": "Немецкий план окружения и взятия Москвы провалился с треском. Немецкие войска понесли поражение на подступах к Москве. Не было еще за все время Отечественной войны вести, радостней для нас, не было вести и значительней.",
      "translation": "The German plan to encircle and take Moscow has failed with a crash. The German troops have suffered defeat on the approaches to Moscow. [[In the whole course of the Patriotic War there has been no news more joyful for us]], and none more significant.",
      "source": "Krasnaya Zvezda, editorial «Our victory in the battles for Moscow», 13 December 1941"
    },
  },
];
function textOf(value) {
  return "function" == typeof value ? value() : value;
}
// The text of a dispatch in the current language: its Chinese twin when there is one
function ev(event, field) {
  return isZh() && event.zh && void 0 !== event.zh[field] ? event.zh[field] : event[field];
}
function optionText(event, option, field) {
  const twin = isZh() && event.zh && event.zh.options && event.zh.options[option.id];
  return twin && void 0 !== twin[field] ? twin[field] : option[field];
}
function optionEffects(event, option) {
  return (textOf(optionText(event, option, "effects")) || []).filter(Boolean);
}
function optionAvailable(option) {
  return !option.available || option.available();
}
// Key words and sentences are marked [[like this]]: underlined in red pencil, as on a staff document
function richText(text) {
  return String(text).replace(/\[\[(.+?)\]\]/g, '<span class="key">$1</span>');
}
function plainText(text) {
  return String(text).replace(/\[\[|\]\]/g, "");
}
// A quotation keeps its original words; the translation and the source follow the language
function eventQuotes(event, field) {
  const quotes = [].concat(event[field] || []),
    twins = isZh() && event.zh ? [].concat(event.zh[field] || []) : [];
  return quotes.map(function (quote, k) {
    const twin = twins[k] || {};
    return {
      original: quote.original,
      translation: twin.translation || quote.translation,
      source: twin.source || quote.source,
    };
  });
}
function applyDecision(event, optionId, deferred) {
  const option = event.options.find(function (o) {
    return o.id === optionId;
  });
  decisions[event.id] = optionId;
  // a decision taken before a Replacement Phase takes effect after the fatigue of the turn start
  if (deferred && option.apply) return ((decisions._pending = event.id), { option: option, outcome: "" });
  const outcome = option.apply ? option.apply() : "";
  (drawPositionedUnits(), scheduleStatusRefresh());
  return { option: option, outcome: "string" == typeof outcome ? outcome : "" };
}
function runPendingDecision() {
  const id = decisions._pending;
  if (!id) return;
  delete decisions._pending;
  const event = HISTORY_EVENTS.find(function (e) {
      return e.id === id;
    }),
    option =
      event &&
      event.options.find(function (o) {
        return o.id === decisions[id];
      });
  (option && option.apply && option.apply(), drawPositionedUnits(), scheduleStatusRefresh());
}
// The computer's decision is announced in a banner
function showDecisionResult(event, result) {
  showEventBanner(
    '<img src="img/' +
      event.army +
      '_marker.png" />' +
      (event.options.length > 1
        ? L("Enemy decision: ", "敌方决定：") + optionText(event, result.option, "label")
        : ev(event, "title")) +
      "<span>" +
      (result.outcome ? result.outcome + " " : "") +
      L("In 1941: ", "1941 年：") +
      plainText(ev(event, "history")) +
      "</span>",
    15000,
  );
}
function quoteHtml(quote) {
  return (
    '<blockquote class="dispatch_quote">' +
    (quote.original ? '<div class="quote_original">' + quote.original.replace(/\n/g, "<br />") + "</div>" : "") +
    (quote.translation ? '<div class="quote_translation">' + richText(quote.translation) + "</div>" : "") +
    '<div class="quote_source">' +
    quote.source +
    "</div></blockquote>"
  );
}
// The Soviet documents carry the masthead of every Soviet newspaper and the hammer and sickle, and end on
// a wartime slogan of the newspapers of 1941
function sovietMasthead() {
  return (
    '<div class="soviet_masthead"><span class="mh_emblem">\u262d</span><span class="mh_text">Пролетарии всех стран, соединяйтесь!</span><span class="mh_emblem">\u262d</span></div><div class="mh_translation">' +
    L("Workers of all countries, unite!", "全世界无产者，联合起来！") +
    "</div>"
  );
}
function sloganHtml(slogan) {
  return slogan
    ? '<div class="soviet_slogan"><div class="slogan_original">' +
        slogan.original +
        '</div><div class="slogan_translation">' +
        L(slogan.en, slogan.zh) +
        "</div></div>"
    : "";
}
// The dispatch takes the whole screen: the historical photograph on one side when there is one, the
// document on the other; orders as buttons, their effect shown when pointed at (first tap on a touch
// screen), then what was actually done in 1941
function showDispatch(event, decide, next) {
  let overlay = document.getElementById("decision_overlay");
  overlay ||
    ((overlay = document.createElement("div")), (overlay.id = "decision_overlay"), document.body.appendChild(overlay));
  const meta = [
      [L("To", "收文"), ev(event, "to")],
      [L("From", "发文"), ev(event, "from")],
      [L("Place", "地点"), ev(event, "place")],
      [L("Date", "日期"), ev(event, "date")],
    ]
      .filter(function (row) {
        return row[1];
      })
      .map(function (row) {
        return "<tr><th>" + row[0] + "</th><td>" + row[1] + "</td></tr>";
      })
      .join(""),
    photo = event.photo
      ? '<figure class="dispatch_photo"><img src="' +
        event.photo.src +
        '" alt="" /><figcaption>' +
        L(event.photo.caption, event.photo.captionZh) +
        "</figcaption></figure>"
      : "";
  overlay.innerHTML =
    '<div class="dispatch_screen ' +
    event.army +
    (photo ? " with_photo" : "") +
    '">' +
    photo +
    '<div class="dispatch ' +
    event.army +
    " " +
    (event.kind || "order") +
    '"><div class="dispatch_inner">' +
    ("soviet" === event.army ? sovietMasthead() : "") +
    '<div class="dispatch_head">' +
    ("soviet" === event.army
      ? '<div class="soviet_emblem"><span class="se_star">\u2605</span><span class="se_hs">\u262d</span></div>'
      : '<img src="img/' + event.army + '_marker.png" />') +
    '<div class="dispatch_office"><div class="office_original">' +
    event.office +
    '</div><div class="office_en">' +
    ev(event, "officeEn") +
    "</div></div>" +
    (event.stamp ? '<div class="dispatch_stamp">' + event.stamp + "</div>" : "") +
    '</div><table class="dispatch_meta">' +
    meta +
    '</table><div class="dispatch_title">' +
    ev(event, "title") +
    '</div><div class="dispatch_text">' +
    ev(event, "text")
      .map(function (p) {
        return "<p>" + richText(p) + "</p>";
      })
      .join("") +
    "</div>" +
    eventQuotes(event, "quotes").map(quoteHtml).join("") +
    '<div class="dispatch_orders_title">' +
    (event.options.length > 1 ? L("Your orders", "你的命令") : L("Your order", "你的命令")) +
    '</div><div class="dispatch_orders"></div><div class="dispatch_estimate"><div class="estimate_title">' +
    L("Effect on the game", "对游戏的影响") +
    '</div><ul><li class="estimate_hint">' +
    L("Point at an order to see what it does.", "把鼠标放在命令上，查看它对游戏的影响。") +
    '</li></ul></div><div class="dispatch_outcome"></div>' +
    ("soviet" === event.army ? sloganHtml(event.slogan) : "") +
    "</div></div></div>";
  const card = overlay.querySelector(".dispatch"),
    orders = overlay.querySelector(".dispatch_orders"),
    estimate = overlay.querySelector(".dispatch_estimate ul");
  let pointerType = "mouse",
    armed = null;
  const show = function (option, button) {
      for (const other of orders.children) other.classList.toggle("focused", other === button);
      estimate.innerHTML =
        optionEffects(event, option)
          .map(function (line) {
            return "<li>" + richText(line) + "</li>";
          })
          .join("") +
        (optionAvailable(option) ? "" : '<li class="estimate_warn">' + L("Not possible now.", "现在无法执行。") + "</li>") +
        (button === armed ? '<li class="estimate_hint">' + L("Tap the order again to give it.", "再点一次即下达这道命令。") + "</li>" : "");
    },
    giveOrder = function (option, button) {
      const result = decide(option.id);
      for (const other of Array.from(orders.children)) other !== button && other.remove();
      ((button.disabled = !0),
        button.classList.add("given"),
        button.insertAdjacentHTML(
          "beforeend",
          '<span class="order_stamp">' + ("german" === event.army ? "Genehmigt" : "radio" === event.kind ? "Передано" : "Утверждаю") + "</span>",
        ),
        (overlay.querySelector(".dispatch_estimate").style.display = "none"));
      const outcome = overlay.querySelector(".dispatch_outcome");
      ((outcome.innerHTML =
        '<div class="outcome_title">' +
        L("What happened in 1941", "1941 年实际发生了什么") +
        "</div>" +
        (result.outcome ? '<p class="outcome_now">' + result.outcome + "</p>" : "") +
        "<p>" +
        richText(ev(event, "history")) +
        "</p>" +
        eventQuotes(event, "historyQuote").map(quoteHtml).join("") +
        '<button type="button" class="dispatch_continue">' +
        L("Continue", "继续") +
        "</button>"),
        (outcome.style.display = "block"),
        (outcome.querySelector(".dispatch_continue").onclick = function (e) {
          (e.stopPropagation(), (overlay.style.display = "none"), (overlay.innerHTML = ""), next());
        }),
        outcome.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    };
  for (const option of event.options) {
    const button = document.createElement("button"),
      ok = optionAvailable(option);
    ((button.type = "button"),
      (button.className = "dispatch_option" + (ok ? "" : " unavailable")),
      (button.innerHTML =
        '<span class="option_label">' +
        optionText(event, option, "label") +
        '</span><span class="option_order">' +
        optionText(event, option, "order") +
        "</span>"),
      button.addEventListener("pointerdown", function (e) {
        pointerType = e.pointerType || "mouse";
      }),
      button.addEventListener("mouseenter", function () {
        show(option, button);
      }),
      button.addEventListener("focus", function () {
        show(option, button);
      }),
      button.addEventListener("click", function (e) {
        if ((e.stopPropagation(), !ok)) return void show(option, button);
        // on a touch screen the first tap shows the effect and the second gives the order
        if ("touch" === pointerType && armed !== button)
          return ((armed = button), button.classList.add("armed"), void show(option, button));
        giveOrder(option, button);
      }),
      orders.appendChild(button));
  }
  (1 === event.options.length && show(event.options[0], orders.firstChild),
    (overlay.onclick = function (e) {
      e.stopPropagation();
    }),
    (overlay.style.display = "block"),
    (card.scrollTop = 0));
}
// The Chinese text of the dispatches (the original Russian and German quotations are kept as they are)
const DISPATCH_ZH = {
  nkvd: {
    officeEn: "苏联内务人民委员部（NKVD）",
    to: "NKVD 特别组组长 P. A. 苏多普拉托夫",
    place: "莫斯科，卢比扬卡",
    date: "1941 年 10 月 17 日",
    title: "内务人民委员部特种旅",
    text: [
      "苏多普拉托夫同志！德国法西斯匪帮正向我们的红色首都扑来。10 月 14 日夜至 15 日，敌人以大批坦克和摩托化步兵攻击我军部队，在西方向[[突破了我军防线]]。我军正给敌人以英勇抵抗，但在一个地段被迫后撤。",
      "内务人民委员部独立特种摩托化步兵旅（OMSBON）由运动员、契卡工作人员和各兄弟党的共产党员组成，今年夏天在迪纳摩体育场组建，受训的任务是[[在敌人后方作战]]。斯大林同志号召在敌占区到处燃起游击战争。但莫斯科前方的战线需要每一把刺刀。",
      "是把这个旅的精兵投入防线，还是把它的分队[[空投到敌人后方的森林里]]？"
    ],
    quotes: [
      {
        "translation": "莫斯科面临着威胁。但我们将为莫斯科顽强地、殊死地战斗，[[直到流尽最后一滴血]]。",
        "source": "A. S. 谢尔巴科夫（联共（布）莫斯科委员会书记）对莫斯科劳动人民的广播讲话，1941 年 10 月 17 日"
      },
      {
        "translation": "在敌人占领的地区，必须组织骑兵和步兵游击队，组织破坏小组去同敌军部队作斗争，[[到处燃起游击战争]]……",
        "source": "И. В. 斯大林，1941 年 7 月 3 日广播演说"
      }
    ],
    options: {
      infantry: {
        label: "作为步兵投入防线",
        order: "每一个契卡战士都上防线：红色首都必须守住。",
        effects: function () {
          const candidates = nkvdCandidates();
          return [
            "由你选一个[[有补给的半血步兵集团军]]：它变成突击集团军，立即为 5-4，补满后为 10-4。",
            candidates.length ? "现在可以接收的集团军：" + namesOf(candidates) + "。" : "",
          ];
        },
      },
      drop: {
        label: "空投到德军后方",
        order: "把各分队伞降到森林里：让敌人处处陷入不堪忍受的境地。",
        effects: function () {
          return [
            "立即在德军后方的森林格里组建 [[2 支力量为 2 的游击队]]（由你放置），从你的下一回合起行动。",
            "德军的补给线不能穿过游击队所在的格子（游击队没有控制区）。",
            "地图上现有游击队：" + partisans.length + " 支（最多 " + MAX_PARTISANS + " 支）。",
          ];
        },
      },
    },
    history: "两样都做了。1941 年 10 月至 11 月，旅的战士们在首都的要害目标埋设炸药，防守城市防线的一些地段，同时[[派出分队深入敌后]]开展游击战争。",
    historyQuote: {
      "translation": "国防委员会号召首都全体劳动人民遵守秩序、保持镇静，[[全力协助]]保卫莫斯科的红军。",
      "source": "国防委员会关于莫斯科戒严的决定，1941 年 10 月 19 日，国防委员会主席 И. 斯大林签署"
    },
  },
  parade: {
    officeEn: "国防委员会",
    to: "国防委员会全体委员",
    place: "莫斯科，克里姆林宫",
    date: "1941 年 11 月 6 日",
    title: "十月革命 24 周年：在红场阅兵？",
    text: [
      "11 月 7 日，苏联各族人民庆祝[[伟大十月社会主义革命 24 周年]]。斯大林同志提议照常在红场举行阅兵，而前线离这里[[不到 100 公里]]：部队将走过列宁墓，[[直接开赴前线]]。",
      "今晚，莫斯科苏维埃庆祝大会在地下深处的马雅可夫斯基地铁站举行。法西斯飞机几分钟就能飞到莫斯科上空，只有低云和大雪能让它们飞不起来。"
    ],
    quotes: [
      {
        "translation": "德国侵略者想要对苏联各族人民进行歼灭战。好吧，如果德国人想要进行歼灭战，他们就会得到歼灭战……[[决不饶恕德国占领者！消灭德国占领者！]]",
        "source": "И. В. 斯大林在莫斯科苏维埃庆祝大会上的报告，1941 年 11 月 6 日（《真理报》11 月 7 日）"
      }
    ],
    options: {
      hold: {
        label: "举行阅兵",
        order: "在列宁的旗帜下，从红场直接开赴前线。",
        effects: function () {
          const moscow = grid.get({ x: 10, y: 2 }),
            near = unitsOf("soviet").filter(function (unit) {
              return Hex(unit.position).distance(moscow) <= 1;
            });
          return [
            "莫斯科及其相邻格的苏军[[疲劳减 4 点，即降一级]]（" + (near.length ? "现有 " + near.length + " 支：" + namesOf(near) : "现在那里没有部队") + "）。",
            "本回合苏军 +1 个补充兵步数。",
            "风险：掷骰掷出 1，德国空军轰炸红场，莫斯科城内的满编部队损失一级。",
          ];
        },
      },
      cancel: { label: "取消阅兵", order: "不拿卫戍部队冒险。", effects: ["没有效果。"] },
    },
    history: "11 月 7 日的阅兵在[[暴风雪]]中照常举行，法西斯飞机没能起飞。部队走过列宁墓，直接开赴前线；阅兵的新闻纪录片在全国放映，告诉苏联人民：[[莫斯科屹立不倒]]。",
    historyQuote: {
      "translation": "全世界都把你们看作能够消灭德国侵略者强盗匪帮的力量。……[[在列宁的旗帜下，前进，夺取胜利！]]",
      "source": "И. В. 斯大林在红场阅兵式上的讲话，1941 年 11 月 7 日（《真理报》11 月 8 日）"
    },
  },
  trains: {
    officeEn: "陆军总司令部，军需总监",
    to: "陆军总参谋长 F. 哈尔德大将",
    from: "军需总监 E. 瓦格纳上将",
    place: "奥尔沙，各集团军群参谋长会议",
    date: "1941 年 11 月 13 日",
    title: "冬装还是弹药？",
    text: [
      "中央集团军群每天需要 [[26 到 30 列火车]]，而残破的俄国铁路每天只能把 [[8 到 10 列]]送到它的铁路终点站。",
      "全集团军群近两百万人的冬衣——毛衣、手套、帽子、袜子和羊毛内衣——要装满[[约 20 列火车]]，相当于前线两天的全部到货。它们还堆在波兰的仓库里。每多运一列冬衣，就[[少运一列炮弹、燃料和补充兵]]，而这次攻势必须在冬天之前拿下莫斯科。",
    ],
    quotes: [{ translation: "……这个敌人[[已经被打垮]]，再也站不起来了！", source: "希特勒在柏林体育宫的演讲，1941 年 10 月 3 日" }],
    options: {
      ammo: {
        label: "弹药和燃料优先",
        order: "冬衣先留在仓库，等拿下莫斯科再说。",
        effects: function () {
          const german = unitsOf("german"),
            outside = german.filter(function (unit) {
              return "none" === grid.get(unit.position).city;
            });
          return [
            "现在没有变化：德军补充兵照常。",
            "冬季（第 8、9 回合）每个德军回合开始时：[[在城镇外 +2 疲劳]]，在城镇里 +1，在莫斯科或图拉不加。",
            "现在在城镇外的德军：" + outside.length + " / " + german.length + " 支。",
          ];
        },
      },
      clothing: {
        label: "冬装优先",
        order: "二十列冬衣赶在炮弹前面运往东线。",
        effects: [
          "德军[[不再有冬季疲劳]]，和红军一样。",
          "这些火车挤占了补充兵的运力：[[第 6、7 回合德军没有补充兵]]（本回合之后剩下的 4 次里少 2 次）。",
        ],
      },
    },
    history: "弹药、燃料和口粮仍然优先。霜冻来临时，冬衣还堆在铁路终点站的仓库里：到 12 月中旬，[[发到部队手里的还不到三分之一]]。12 月 20 日，戈培尔号召德国民众为东线士兵捐献皮衣和毛织品。",
    historyQuote: { translation: "弹药、汽油和口粮的运输[[必须享有绝对优先]]。", source: "美国陆军官方战史（E. F. 齐姆克《从莫斯科到斯大林格勒》），据德方档案" },
  },
  reserves: {
    officeEn: "最高统帅部大本营",
    to: "总参谋长 B. M. 沙波什尼科夫元帅",
    place: "莫斯科，总参谋部",
    date: "1941 年 12 月 1 日",
    title: "大本营预备队",
    text: [
      "沙波什尼科夫同志！敌人不顾惨重损失，继续向莫斯科投入新的兵力。它的钳形攻势已推进到克拉斯纳亚波利亚纳，[[离克里姆林宫只有约 30 公里]]，南面已到图拉城下。首都的英勇保卫者们正在让希特勒匪帮流尽鲜血。",
      "在前线后方，大本营预备队的新集团军已经秘密集结：第 10 集团军在莫斯科东南，第 20 集团军在北面。是现在就把它们投入战线崩溃的地方，还是[[留着]]给敌人以歼灭性的打击？"
    ],
    quotes: [
      {
        "translation": "形势对我们来说极其紧张、极其困难，但是我们能够而且必须[[经受住这种紧张]]，我们能够而且必须克服这些困难。",
        "source": "《红星报》社论《对敌人的粉碎必须从莫斯科城下开始》，1941 年 11 月 27 日"
      },
      {
        "translation": "“您有把握守住莫斯科吗？我是怀着痛苦的心情问您的。请您像一个共产党员那样诚实地回答。”“[[莫斯科我们守得住。]]”",
        "source": "1941 年 11 月 И. В. 斯大林与 G. K. 朱可夫的电话，据朱可夫 1966 年的回忆"
      }
    ],
    options: {
      commit: { label: "现在投入", order: "把新组建的师投到战线崩溃的地方：首都决不能丢。", effects: ["本回合苏军 [[+2 个补充兵步数]]。"] },
      keep: { label: "留给反攻", order: "前线必须用现有的兵力坚持到最后一人。", effects: ["第 8 回合反攻开始时，苏军 [[+2 个补充兵步数]]。"] },
    },
    history: "最高统帅部大本营只给各方面军补充了挡住敌人钳形攻势所必需的兵力，把新组建的集团军[[留给了 12 月 5 日和 6 日的决定性打击]]。",
    historyQuote: { translation: "对我们来说，重要的是[[坚持到预备队赶到]]。", source: "G. K. 朱可夫，1966 年" },
  },
  counteroffensive: {
    officeEn: "最高统帅部大本营致西方面军",
    to: "加里宁方面军、西方面军和西南方面军各集团军",
    place: "佩尔胡什科沃，西方面军司令部",
    date: "1941 年 12 月 5 日和 6 日",
    title: "反攻",
    text: [
      "希特勒匪帮对莫斯科的第二次总攻[[已经耗尽]]。古德里安的坦克被挡在图拉和卡希拉城下；北面的敌人停在克拉斯纳亚波利亚纳和莫斯科—伏尔加运河一线，离克里姆林宫 25 到 30 公里。气温已降到[[零下 25 到 35 度]]，筋疲力尽、缺少燃料的德国法西斯各师就地挖壕。",
      "在我们的战线后方，大本营预备队已经进入出发阵地，只在夜间行军，不生火。拂晓时分，从加里宁到叶列茨的整条战线[[转入反攻]]。同志们！清算的时刻到了：[[对敌人的粉碎就从莫斯科城下开始]]。"
    ],
    quotes: [
      {
        "translation": "千百万苏联人民和他们的红军只有彻底粉碎敌人，才会结束这场战争。[[对敌人的粉碎必须从莫斯科城下开始。]]",
        "source": "《红星报》，1941 年 11 月 27 日当期标语"
      },
      {
        "translation": "我们的事业是正义的。敌人必将被粉碎。[[胜利必将属于我们。]]",
        "source": "V. M. 莫洛托夫，1941 年 6 月 22 日广播讲话"
      }
    ],
    options: {
      attack: {
        label: "Вперёд！进攻",
        order: "反攻开始：前进，粉碎敌人！",
        effects: function () {
          const plan = SPECIAL_ARRIVALS[WINTER_START];
          return [
            "本回合到达：[[近卫骑兵第 1、第 2 军（6-6）]]、" + plan.ski + " 个滑雪营和 " + plan.partisans + " 支游击队。",
            "冬季：苏军滑雪集团军穿越森林只需 1 点移动力；" +
              ("clothing" === decisions.trains ? "德军已经拿到冬装。" : "没有冬装的德军在城镇外很快就会疲劳。"),
            "keep" === decisions.reserves ? "你留下的大本营预备队：本回合 +2 个补充兵步数。" : "",
          ];
        },
      },
    },
    history: "加里宁方面军 12 月 5 日发起进攻，西方面军 12 月 6 日跟进。[[十天之内]]，红军解放了亚赫罗马、伊斯特拉、索尔涅奇诺戈尔斯克和克林；12 月 16 日，加里宁方面军部队攻克加里宁城。",
    historyQuote: {
      "translation": "1941 年 12 月 6 日，我西方面军部队在此前的战斗中消耗了敌人之后，向敌人的两翼突击集团转入反攻。反攻的结果，[[这两个集团都被击溃]]，正丢下技术装备和武器仓皇后撤，伤亡惨重。",
      "source": "苏联情报局《最后一小时》公报，1941 年 12 月 12 日"
    },
  },
  haltOrder: {
    officeEn: "陆军总司令部，致中央集团军群电传",
    to: "中央集团军群司令 F. 冯·博克元帅",
    place: "东普鲁士，元首大本营",
    date: "1941 年 12 月 16 日至 18 日",
    title: "希特勒的死守令",
    text: [
      "中央集团军群在雪地里节节后退。古德里安和霍普纳想在部队被切断之前撤到较短的防线上。希特勒担心重演 1812 年拿破仑的溃败，[[禁止任何撤退]]。",
    ],
    quotes: [
      {
        translation:
          "元首命令：不得进行较大规模的后撤，那将导致重武器和装备的全部损失。各级指挥官和军官要亲自出面，迫使部队在阵地上进行[[狂热的抵抗]]，不管敌人是否已从侧翼或后方突破。",
        source: "1941 年 12 月 18 日发给中央集团军群的电传（据美国陆军官方战史的英译）",
      },
    ],
    options: {
      obey: {
        label: "服从：坚守每一个阵地",
        order: "每个人都在原地战斗。",
        effects: function () {
          const held = unitsOf("german").filter(function (unit) {
            return "full" === unit.strength && "none" !== grid.get(unit.position).city;
          });
          return ["满编德军在任何城市防守时，[[DR 结果改为损失一级、不撤退]]。", "现在城市里的满编德军：" + held.length + " 支。"];
        },
      },
      elastic: {
        label: "按古德里安的建议后撤",
        order: "在各师被切断之前缩短防线。",
        effects: function () {
          const vp = victoryPoints().soviet;
          return [
            "没有死守令：德军照常撤退。",
            "每支德军现在[[减 2 点疲劳]]（共 " + unitsOf("german").length + " 支）。",
            "希特勒撤换将领：[[苏军 +1 胜利点]]（" + vp + " → " + (vp + 1) + "）。",
          ];
        },
      },
    },
    history: "希特勒强行下达了这道命令。博克请了病假，布劳希奇被解职，[[希特勒亲自接管陆军指挥]]；古德里安 12 月 26 日被撤职，霍普纳在 1 月因擅自撤退被撤职。",
  },
  radio: {
    officeEn: "苏联情报局，莫斯科广播电台",
    place: "莫斯科广播电台",
    date: "1941 年 12 月 13 日",
    title: "注意，这里是莫斯科！",
    text: [
      "注意，这里是莫斯科！列维坦在话筒前宣读一份特别公报《最后一小时》。自 6 月 22 日以来，电台第一次宣布[[德国法西斯军队遭到大败]]：敌人包围和夺取莫斯科的狂妄计划已经彻底破产，它的两翼集团被击溃，丢下装备后撤，城镇一个接一个获得解放。",
      "在工厂里，在掩蔽部里，在游击队的森林里，[[全体苏联人民都在收听]]。"
    ],
    quotes: [
      {
        "translation": "最后一小时。德军包围和夺取莫斯科的计划破产。德军在莫斯科近郊遭到失败。……现在已经毫无疑问，这个狂妄的包围和夺取莫斯科的计划[[已经彻底破产]]。",
        "source": "苏联情报局公报，1941 年 12 月 12 日发布，13 日见报"
      }
    ],
    options: { press: { label: "За Родину！继续进攻", order: "不停地追击敌人，不给他喘息之机！", effects: ["规则没有变化：攻势继续。"] } },
    history: "这份公报配上西方面军将领们的照片，刊登在各家报纸上。它宣告了红军在卫国战争中的[[第一次伟大胜利]]。",
    historyQuote: {
      "translation": "德军包围和夺取莫斯科的计划彻底破产了。德军在莫斯科近郊遭到了失败。[[在整个卫国战争中，还没有比这更令我们欢欣的消息]]，也没有比这更重大的消息。",
      "source": "《红星报》社论《我们在莫斯科城下战斗中的胜利》，1941 年 12 月 13 日"
    },
  },
};
for (const event of HISTORY_EVENTS) event.zh = DISPATCH_ZH[event.id];
// Called at the start of replacementPhase and reinforcementPhase: true if the phase must wait for a decision
function gateHistoryEvent(phase, turn, army, deferred) {
  const event = HISTORY_EVENTS.find(function (e) {
    return e.turn === turn && e.army === army && !decisions[e.id];
  });
  if (!event) return !1;
  event.music && playAnthem();
  if (!("" === playAIAs || playAIAs !== army))
    return (showDecisionResult(event, applyDecision(event, textOf(event.ai), deferred)), !1);
  showDispatch(
    event,
    function (optionId) {
      return applyDecision(event, optionId, deferred);
    },
    phase,
  );
  return !0;
}
// Replacement steps added or taken away by the decisions
function decisionReplacements(turn, army) {
  let steps = 0;
  return (
    "soviet" === army
      ? (7 === turn && "commit" === decisions.reserves && (steps += 2),
        8 === turn && "keep" === decisions.reserves && (steps += 2))
      : (6 === turn || 7 === turn) && "clothing" === decisions.trains && (steps -= 1),
    steps
  );
}
function decisionsHtml() {
  const taken = HISTORY_EVENTS.filter(function (e) {
    return decisions[e.id] && e.options.length > 1;
  });
  return taken.length
    ? '<div style="text-align: left;">- ' +
        L("Command decisions: ", "指挥决策：") +
        taken
          .map(function (e) {
            return (
              ev(e, "title") +
              " \u2014 " +
              optionText(
                e,
                e.options.find(function (o) {
                  return o.id === decisions[e.id];
                }),
                "label",
              )
            );
          })
          .join(L("; ", "；")) +
        "</div>"
    : "";
}
function b4mUnitsIndex(e) {
  for (let t = 0; t < b4mUnits.length; t++) if (e.id === b4mUnits[t].id) return t;
  return -1;
}
let b4mSave = null,
  tournamentMode = !1,
  playAIAs = "";
const toNeighborsDirections = ["SE", "S", "SW", "NW", "N", "NE"],
  fromNeighborsDirections = ["NW", "N", "NE", "SE", "S", "SW"];
let canvasBoard,
  board,
  canvasHexHighlights,
  hexHighlights,
  canvasCountersHighlights,
  countersHighlights,
  arrows,
  handleStep0Click,
  handleRedeploymentClick,
  handleCombatAnnounceClick,
  handleMovementClick,
  handleReinforcementClick,
  handleReplacementClick,
  handleSpecialMovementClick;
function cleanAndSaveBeforeNewPhase(e) {
  (finalizeBattleLosses(),
    (phaseLossStart = { german: casualties.german, soviet: casualties.soviet }),
    refreshLossesDisplay());
  (e &&
    ((b4mSave = {}),
    (b4mSave.units = b4mUnits),
    (b4mSave.cities = []),
    grid.forEach(function (e) {
      e &&
        e.city &&
        "none" !== e.city &&
        b4mSave.cities.push({ position: { x: e.x, y: e.y }, control: e.control });
    }),
    (b4mSave.battles = battles.slice()),
    (b4mSave.current_turn = {}),
    (b4mSave.current_turn.turn = currentTurn.turn),
    (b4mSave.current_turn.army = currentTurn.army),
    (b4mSave.current_turn.phase = currentTurn.phase),
    (b4mSave.current_turn.subphase = currentTurn.subphase),
    (b4mSave.followingReinforcement = followingReinforcement),
    (b4mSave.function_name = e),
    (b4mSave.play_ai_as = playAIAs),
    (b4mSave.partisans = partisans.slice()),
    (b4mSave.liberationBonus = liberationBonus),
    (b4mSave.decisions = JSON.parse(JSON.stringify(decisions))),
    (b4mSave.casualties = { german: casualties.german, soviet: casualties.soviet }),
    (b4mSave.railCuts = railCuts.slice()),
    (b4mSave.cityStocks = JSON.parse(JSON.stringify(cityStocks))),
    (b4mSave.partisanGuides = partisanGuides.slice()),
    (b4mSave.partisanTowns = partisanTowns.slice()),
    (b4mSave.stayBehindPending = stayBehindPending.slice()),
    (b4mSave.stayBehindDone = stayBehindDone.slice()),
    window.localStorage.setItem("b4mSave", JSON.stringify(b4mSave))),
    hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height),
    countersHighlights.clearRect(
      0,
      0,
      canvasCountersHighlights.width,
      canvasCountersHighlights.height,
    ),
    (document.getElementById("canvas_step_reinforcement").style.display = "none"),
    (document.getElementById("step_0").style.display = "none"),
    (document.getElementById("step_redeployment_tournament").style.display = "none"),
    (document.getElementById("step_combat").style.display = "none"),
    (document.getElementById("next_step_combat").style.display = "none"),
    (document.getElementById("step_movement").style.display = "none"),
    (document.getElementById("next_step_movement").style.display = "none"),
    (document.getElementById("step_replacement").style.display = "none"),
    (document.getElementById("undo_replacement").style.display = "none"),
    (document.getElementById("next_step_replacement").style.display = "none"),
    (document.getElementById("step_special_movement").style.display = "none"),
    (document.getElementById("next_step_special_movement").style.display = "none"),
    (document.getElementById("skip_to_movement").checked = !1),
    (document.getElementById("skip_to_resolution").checked = !1),
    (document.getElementById("skip_to_other_player").checked = !1),
    (document.getElementById("skip_to_special_movement").checked = !1),
    (document.getElementById("skip_to_combat").checked = !1),
    (document.getElementById("skip_to_combat_after_redeployment").checked = !1),
    document.removeEventListener("click", handleStep0Click),
    document.removeEventListener("click", handleRedeploymentClick),
    document.removeEventListener("click", handleCombatAnnounceClick),
    document.removeEventListener("click", handleMovementClick),
    document.removeEventListener("click", handleReinforcementClick),
    document.removeEventListener("click", handleReplacementClick),
    document.removeEventListener("click", handleSpecialMovementClick));
}
function indexOfHex(e, t) {
  for (let n = 0; n < t.length; n++) if (e.equals(t[n])) return n;
  return -1;
}
function highlightHex(e, t, n) {
  const i = t.corners().map((e) => e.add(t.toPoint()));
  (e.beginPath(), (e.lineWidth = 0.1), e.moveTo(i[0].x, i[0].y));
  for (let t = 1; t < i.length; t++) e.lineTo(i[t].x, i[t].y);
  (e.lineTo(i[0].x, i[0].y),
    (e.fillStyle = n || "rgba(255, 165, 0, 0.3)"),
    e.closePath(),
    e.fill(),
    e.stroke());
}
function clearHex(e, t) {
  ((e.globalCompositeOperation = "destination-out"),
    highlightHex(e, t, "black"),
    (e.globalCompositeOperation = "source-over"));
}
function drawUnit(e, t, n, i) {
  if (t.position)
    for (let e = 0; e < b4mUnits.length; e++)
      if (t.id === b4mUnits[e].id) {
        b4mUnits[e].position = { x: t.position.x, y: t.position.y };
        let n = grid.get(t.position);
        n &&
          n.city &&
          "none" !== n.city &&
          ("german" === n.control &&
            "soviet" === t.army &&
            "soviet" === currentTurn.army &&
            cityLiberated(n, b4mUnits[e]),
          cityChangedHands(n, n.control, t.army),
          (n.control = t.army),
          "german" === t.army && partisanTowns.length > 0 && drawPartisans());
        break;
      }
  const o = t.sheet
      ? document.getElementById(t.sheet)
      : "soviet" === t.army
        ? document.getElementById("soviets")
        : document.getElementById("germans"),
    r = "full" === t.strength ? 0 : 120;
  (e.drawImage(o, 120 * t.pos, r, 120, 120, n, i, 60, 60),
    t.ski && drawSkiBadge(e, n, i),
    t.nkvd && drawNkvdMarks(e, n, i, t.strength),
    scheduleStatusRefresh());
}
function clearUnit(e, t, n, i) {
  for (let e = 0; e < b4mUnits.length; e++)
    if (t.id === b4mUnits[e].id) {
      b4mUnits[e].position = null;
      break;
    }
  (e.clearRect(n, i, 80, 80), scheduleStatusRefresh());
}
// Units being animated, and the hexes they are heading to
let unitsMoving = 0,
  pendingDestinations = [],
  queuedProgressClick = null;
function isPendingDestination(e) {
  return pendingDestinations.some(function (t) {
    return t.x === e.x && t.y === e.y;
  });
}
function finishUnitMove(e) {
  ((unitsMoving = Math.max(0, unitsMoving - 1)),
    e &&
      (pendingDestinations = pendingDestinations.filter(function (t) {
        return t !== e;
      })));
  if (0 === unitsMoving && queuedProgressClick) {
    const e = queuedProgressClick;
    ((queuedProgressClick = null), e.click());
  }
}
// A button that moves the game on (next battle, next phase, undo) waits until every unit has stopped moving:
// clicked too early, it is held and clicked again as soon as the last unit arrives
document.addEventListener(
  "click",
  function (e) {
    if (0 === unitsMoving || !e.target || !e.target.closest) return;
    const t = e.target.closest(".next, .next_battle_button");
    t && (e.preventDefault(), e.stopImmediatePropagation(), (queuedProgressClick = t));
  },
  !0,
);
// A unit retreating through a city does not take it: only the hex where the retreat ends counts
function keepCityControl(e, t) {
  const n = grid.get(e),
    i = n && n.control;
  (cityChangeQuiet++, t(), cityChangeQuiet--, n && n.city && "none" !== n.city && (n.control = i));
}
function moveUnit(e, t, n, retreat) {
  // Copy the route now: a caller may later change the objects it passed (resolveNextBattle reuses
  // initialDefendingUnitPosition), which used to send an advancing unit onto the next defender
  t = t.map(function (e) {
    return { x: e.x, y: e.y };
  });
  const s = t.length > 0 ? t[t.length - 1] : null;
  (unitsMoving++, s && pendingDestinations.push(s));
  const mv = b4mUnits[b4mUnitsIndex(e)];
  (mv && (mv.moved = !0), t.length > 0 && soundMove(e));
  let i = { x: e.position.x, y: e.position.y },
    o = Hex(i).center().add(Hex(i).toPoint()),
    r = null;
  setTimeout(function () {
    let a = setInterval(function () {
      0 === t.length
        ? (n &&
            countersHighlights.drawImage(
              document.getElementById("check_counter"),
              o.x - 40,
              o.y - 40,
              80,
              80,
            ),
          "german" === e.army && partisanSweep(e),
          clearInterval(a),
          finishUnitMove(s))
        : (clearUnit(board, e, o.x - 40, o.y - 40),
          r && r.id !== e.id && drawUnit(board, r, o.x - 30, o.y - 30),
          (i = t.shift()),
          (r = lookupUnit(Hex(i))),
          (o = Hex(i).center().add(Hex(i).toPoint())),
          (e.position = { x: i.x, y: i.y }),
          retreat && t.length > 0
            ? keepCityControl(i, function () {
                drawUnit(board, e, o.x - 30, o.y - 30);
              })
            : drawUnit(board, e, o.x - 30, o.y - 30));
    }, 300);
  }, 100);
}
function lookupUnit(e) {
  if (e)
    for (const t of b4mUnits)
      if (t.position && e.equals(t.position)) {
        let e = {
          id: t.id,
          pos: t.pos,
          army: t.army,
          type: t.type,
          size: t.size,
          combatFull: t.combatFull,
          combatReduced: t.combatReduced,
          movement: t.movement,
          strength: t.strength,
          sheet: t.sheet,
          ski: t.ski,
          fatigue: t.fatigue,
          nkvd: t.nkvd,
        };
        return (t.position && (e.position = { x: t.position.x, y: t.position.y }), e);
      }
  return null;
}
function isEZOC(e, t) {
  const n = "soviet" === t ? "german" : "soviet";
  for (const t of grid.neighborsOf(e))
    if (((neighborUnit = lookupUnit(t)), neighborUnit && neighborUnit.army === n)) return !0;
  return !1;
}
function drawPositionedUnits() {
  (hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height),
    countersHighlights.clearRect(
      0,
      0,
      canvasCountersHighlights.width,
      canvasCountersHighlights.height,
    ),
    board.clearRect(0, 0, canvasBoard.width > 1250 ? 1250 : canvasBoard.width, canvasBoard.height));
  cityChangeQuiet++;
  for (let e = 0; e < b4mUnits.length; e++)
    if (b4mUnits[e].position) {
      let t = Hex(b4mUnits[e].position),
        n = t.center().add(t.toPoint());
      drawUnit(board, b4mUnits[e], n.x - 30, n.y - 30);
    }
  (cityChangeQuiet--, drawPartisans());
}
function drawAvailableUnits(e, t) {
  if (t && t.length > 0) {
    let n = 70 * t.length;
    ((e.width = n > 300 ? n : 300), (e.height = 80));
    let i = e.getContext("2d");
    for (let e = 0; e < t.length; e++)
      for (let n = 0; n < b4mUnits.length; n++)
        if (t[e].id === b4mUnits[n].id) {
          drawUnit(i, b4mUnits[n], 65 * e + 10, 10);
          break;
        }
    const o = document.getElementById("frame");
    i.drawImage(o, 0, 0, 128, 128, 8, 8, 64, 64);
  } else {
    ((e.width = 300), (e.height = 80), e.getContext("2d").clearRect(0, 0, e.width, e.height));
  }
}
function computeBattleOdds() {
  if (battle) {
    let e = grid.get(battle.defendingUnit.position),
      t = [];
    ((("fortification" === e.terrain && "soviet" === battle.defendingUnit.army) ||
      ("forest" === e.terrain &&
        !(
          isWinterTurn() &&
          battle.attackingUnits.some(function (e) {
            return e.ski;
          })
        ))) &&
      t.push(e.terrain),
      !e.city || ("major" !== e.city && "moscow" !== e.city) || t.push("major"));
    let n = !0;
    for (const t of battle.attackingUnits)
      if (-1 === e.river.indexOf(t.attackFrom)) {
        n = !1;
        break;
      }
    n && t.push("river");
    let i = 0,
      f = 0;
    for (const e of battle.attackingUnits) {
      let t = "full" === e.strength ? e.combatFull : e.combatReduced;
      (3 !== currentTurn.turn && 4 !== currentTurn.turn) || "tank" !== e.type || (t /= 2);
      // attacking, a merely tired unit still fights at full strength; exhausted and broken ones at half
      const n = t * attackFatigueFactor(e);
      ((f += t - n), (i += n));
    }
    const s =
        "full" === battle.defendingUnit.strength
          ? battle.defendingUnit.combatFull
          : battle.defendingUnit.combatReduced,
      d = s * fatigueFactor(battle.defendingUnit);
    // partisans guiding the Red Army around the defender give one column
    battle.partisanBonus =
      battle.attackingUnits.length > 0 &&
      "soviet" === battle.attackingUnits[0].army &&
      partisanGuides.some(function (e) {
        return e.turn === currentTurn.turn && Hex(e).distance(Hex(battle.defendingUnit.position)) <= 1;
      })
        ? 1
        : 0;
    let o = Math.floor(i / d);
    (o > 6 && (o = 6),
      (battle.attackingStrength = i),
      (battle.defendingStrength = d),
      (battle.attackFatigueLoss = f),
      (battle.defendFatigueLoss = s - d),
      (battle.modifiers = t),
      (battle.battleOdds = Math.min(6, o - t.length + battle.partisanBonus)));
  }
}
function refreshBattles() {
  (hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height),
    countersHighlights.clearRect(
      0,
      0,
      canvasCountersHighlights.width,
      canvasCountersHighlights.height,
    ));
  const e = battles.slice();
  battle && (computeBattleOdds(), e.push(battle));
  for (const t of e) {
    let e = grid.get(t.defendingUnit.position);
    highlightHex(hexHighlights, e);
    let n = grid.neighborsOf(e),
      i = e.corners();
    for (let o = 0; o < n.length; o++) {
      let r = lookupUnit(n[o]);
      if (
        r &&
        r.army !== t.defendingUnit.army &&
        t.attackingUnits.filter((e) => e.id === r.id).length > 0
      ) {
        highlightHex(hexHighlights, n[o]);
        let t = i[o],
          r = o < 5 ? i[o + 1] : i[0];
        countersHighlights.drawImage(
          arrows,
          o * arrows.height,
          0,
          arrows.height,
          arrows.height,
          e.toPoint().x + (t.x + r.x) / 2 - arrows.height / 4,
          e.toPoint().y + (t.y + r.y) / 2 - arrows.height / 4,
          arrows.height / 2,
          arrows.height / 2,
        );
      }
    }
  }
  updateDashboardCombat();
}
function updateDashboardCombat() {
  if (
    ((document.getElementById("dashboard_combat").innerHTML = ""), battles.length > 0 || battle)
  ) {
    ("" === playAIAs || playAIAs !== currentTurn.army
      ? (document.getElementById("step_combat_tip").innerText =
          "Upon choosing a defending unit, all compatible attacking units are selected. Adjust the ones taking part in this battle by clicking on them. Then, add each battle to the stack.")
      : (document.getElementById("step_combat_tip").innerText =
          "The enemy is announcing the battles of this turn..."),
      (document.getElementById("skip_combat").style.display = "none"),
      (document.getElementById("skip_to_movement").checked = !1),
      (document.getElementById("skip_announce").style.display = "none"),
      (document.getElementById("next_step_combat").style.display = "none"),
      (document.getElementById("skip_to_resolution").checked = !1),
      (document.getElementById("next_step_resolve_battles").style.display = "none"),
      (document.getElementById("dashboard_combat").innerHTML =
        '<table class="table_battle"></table>'));
    for (let e = 0; e < battles.length; e++) {
      let t = document.createElement("tr");
      t.setAttribute("id", "row" + new Date().getTime() + "_" + e);
      const n =
          '<td class="cell_attackers">' +
          strengthHtml(battles[e].attackingUnits[0].army, battles[e].attackingStrength, battles[e].attackFatigueLoss) +
          "</td>",
        i =
          '<td class="cell_defender">' +
          strengthHtml(battles[e].defendingUnit.army, defenderStrengthOf(battles[e]), battles[e].defendFatigueLoss) +
          "</td>";
      let o = '<td class="cell_modifiers">';
      o += modifiersHtml(battles[e]);
      ((o += "</td>"),
        (t.innerHTML = n + i + o + '<td class="cell_odds">' + battles[e].battleOdds + ":1</td>"));
      let r = document.createElement("td");
      if (
        (r.setAttribute("class", "cell_action"), "" === playAIAs || playAIAs !== currentTurn.army)
      ) {
        let t = document.createElement("i");
        (t.setAttribute("id", new Date().getTime() + "_" + e),
          t.setAttribute("class", "fa fa-minus-circle"),
          t.setAttribute("style", "font-size: 1.4em;"),
          t.setAttribute("aria-hidden", "true"),
          t.addEventListener("click", function (e) {
            e.stopPropagation();
            const t = parseInt(RegExp("[0-9]+_([0-9]+)", "g").exec(this.id)[1]);
            (battles.splice(t, 1), refreshBattles());
          }),
          r.appendChild(t));
      }
      (t.appendChild(r),
        t.addEventListener("click", function (e) {
          if ("announce" !== currentTurn.subphase) return;
          e.stopPropagation();
          const t = "rgba(0, 0, 255, 0.25)",
            n = parseInt(RegExp("row[0-9]+_([0-9]+)", "g").exec(this.id)[1]);
          (refreshBattles(),
            "" !== playAIAs &&
              playAIAs === currentTurn.army &&
              ((document.getElementById("step_combat_tip").innerText =
                "The enemy has announced all the battles for this turn. Click below to highlight each battle or proceed to the resolution."),
              (document.getElementById("step_combat_tip").style.display = "block"),
              (document.getElementById("next_step_resolve_battles").style.display = "block")),
            (document.querySelector(
              ".table_battle > tr:nth-child(" + (n + 1) + ")",
            ).style.backgroundColor = t));
          for (const e of battles[n].attackingUnits)
            highlightHex(hexHighlights, grid.get(e.position), t);
          const i = grid.get(battles[n].defendingUnit.position);
          (highlightHex(hexHighlights, i, t),
            window.scrollTo(
              i.toPoint().x - window.innerWidth / 2,
              i.toPoint().y - window.innerHeight / 2,
            ));
        }),
        document.getElementById("dashboard_combat").firstChild.appendChild(t));
    }
    if (battle) {
      let e = document.createElement("table");
      (e.setAttribute("class", "table_battle"),
        e.setAttribute("style", "background-color: rgba(255, 255, 255, 0.2)"));
      let t = document.createElement("tr");
      const n =
          '<td class="cell_attackers">' +
          strengthHtml(battle.attackingUnits[0].army, battle.attackingStrength, battle.attackFatigueLoss) +
          "</td>",
        i =
          '<td class="cell_defender">' +
          strengthHtml(battle.defendingUnit.army, defenderStrengthOf(battle), battle.defendFatigueLoss) +
          "</td>";
      let o = '<td class="cell_modifiers">';
      o += modifiersHtml(battle);
      ((o += "</td>"),
        (t.innerHTML = n + i + o + '<td class="cell_odds">' + battle.battleOdds + ":1</td>"));
      let r = document.createElement("td");
      if (
        (r.setAttribute("class", "cell_action"), "" === playAIAs || playAIAs !== currentTurn.army)
      ) {
        let e = document.createElement("i");
        (e.setAttribute("id", "add_battle_button"),
          e.setAttribute("class", "fa fa-plus-circle"),
          e.setAttribute("style", "font-size: 1.4em;"),
          e.setAttribute("aria-hidden", "true"),
          r.appendChild(e),
          r.addEventListener("click", function (e) {
            (e.stopPropagation(),
              battle.battleOdds > 0 && (battles.push(battle), (battle = null), refreshBattles()));
          }));
      }
      (t.appendChild(r),
        e.appendChild(t),
        document.getElementById("dashboard_combat").appendChild(e));
    } else
      ("" !== playAIAs && playAIAs === currentTurn.army) ||
        ((document.getElementById("skip_announce").style.display = "block"),
        (document.getElementById("skip_to_resolution").onclick = function () {
          ((document.getElementById("next_step_resolve_battles").style.display = this.checked
            ? "block"
            : "none"),
            (document.getElementById("next_step_resolve_battles").onclick = combatResolvePhase));
        }));
  } else
    ((document.getElementById("step_combat").style.display = "block"),
      (document.getElementById("step_combat_tip").innerText =
        "Announce all the battles of this turn by selecting each set of defending and attacking units (or skip combat and go to the movement phase)."),
      (document.getElementById("step_combat_tip").style.display = "block"),
      (document.getElementById("skip_combat").style.display = "block"),
      (document.getElementById("skip_announce").style.display = "none"),
      (document.getElementById("skip_to_resolution").checked = !1),
      (document.getElementById("next_step_resolve_battles").style.display = "none"));
}
let currentTurn = { turn: 0, army: "german", phase: "", subphase: "" };
function setTurnInfo() {
  let e = "";
  switch (currentTurn.turn) {
    case 1:
      e = "October 2nd, 1941 - Turn 1/" + LAST_TURN;
      break;
    case 2:
      e = "October 10th, 1941 - Turn 2/" + LAST_TURN;
      break;
    case 3:
      e = "October 17th, 1941 - Turn 3/" + LAST_TURN + " (Mud)";
      break;
    case 4:
      e = "November 1st, 1941 - Turn 4/" + LAST_TURN + " (Mud)";
      break;
    case 5:
      e = "November 16th, 1941 - Turn 5/" + LAST_TURN;
      break;
    case 6:
      e = "November 23rd, 1941 - Turn 6/" + LAST_TURN;
      break;
    case 7:
      e = "December 1st, 1941 - Turn 7/" + LAST_TURN;
      break;
    case 8:
      e = "December 5th, 1941 - Turn 8/" + LAST_TURN + " (Winter)";
      break;
    case 9:
      e = "December 15th, 1941 - Turn 9/" + LAST_TURN + " (Winter)";
      break;
    default:
      console.log("ERROR - Invalid turn: ", currentTurn);
  }
  document.getElementById("turn_info_title").innerText = L(e, turnTitleZh(currentTurn.turn));
  const w = document.getElementById("turn_info_weather");
  (w && (w.innerText = L(WEATHER[currentTurn.turn], WEATHER_ZH[currentTurn.turn]) || ""), drawSeason());
}
function turn1GermanSetupPhase() {
  // the detachments fighting behind the German lines since the summer
  partisans = INITIAL_PARTISANS.map(function (b) {
    return { x: b.x, y: b.y, strength: b.strength, acted: !1 };
  });
  ((currentTurn = { turn: 1, army: "german", phase: "setup", subphase: "" }),
    (document.getElementById("turn_info").style.display = "block"),
    (document.getElementById("layer_toolbar").style.display = "block"),
    setTurnInfo(),
    (document.getElementById("step_0_tip").innerText =
      "german" !== playAIAs
        ? "Set up one full-strength German unit on each hex containing a black cross."
        : "The German army sets up one full-strength unit on each hex containing a black cross."),
    (document.getElementById("step_0").style.display = "block"),
    drawPartisans());
  let e = document.getElementById("canvas_step_0"),
    t = b4mUnits.filter(function (e) {
      return "german" === e.army;
    });
  (drawAvailableUnits(e, t),
    (handleStep0 = function (n) {
      let i = grid.get(n);
      if (i && i.germanStart) {
        let n = i.center().add(i.toPoint()),
          o = lookupUnit(i);
        if (o)
          (clearUnit(board, o, n.x - 40, n.y - 40),
            countersHighlights.clearRect(n.x - 40, n.y - 40, 80, 80),
            t.unshift(o),
            drawAvailableUnits(e, t));
        else {
          let o = t.shift();
          ((o.position = { x: i.x, y: i.y }),
            drawUnit(board, o, n.x - 30, n.y - 30),
            countersHighlights.drawImage(
              document.getElementById("delete_counter"),
              n.x - 40,
              n.y - 40,
              80,
              80,
            ),
            drawAvailableUnits(e, t));
        }
      }
      0 === t.length
        ? tournamentMode
          ? ((document.getElementById("next_step_0_tournament").style.display = "block"),
            (document.getElementById("next_step_0_tournament_button").onclick = redeploymentPhase))
          : ((document.getElementById("next_step_0").style.display = "block"),
            (document.getElementById("next_step_0_button").onclick = combatAnnouncePhase))
        : ((document.getElementById("next_step_0").style.display = "none"),
          (document.getElementById("next_step_0_tournament").style.display = "none"));
    }),
    (handleStep0Click = function (e) {
      if ("counters_highlights" === e.target.id) {
        const t = Grid.pointToHex(e.offsetX, e.offsetY);
        handleStep0(t);
      }
    }));
  if ("german" !== playAIAs) document.addEventListener("click", handleStep0Click);
  else {
    const e = [
      [
        { x: 3, y: 6 },
        { x: 3, y: 7 },
        { x: 3, y: 8 },
        { x: 3, y: 4 },
        { x: 2, y: 4 },
        { x: 2, y: 5 },
        { x: 1, y: 4 },
        { x: 1, y: 3 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 3, y: 9 },
        { x: 3, y: 10 },
        { x: 2, y: 6 },
        { x: 1, y: 5 },
        { x: 1, y: 6 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 2, y: 8 },
        { x: 2, y: 9 },
        { x: 0, y: 5 },
        { x: 1, y: 9 },
        { x: 1, y: 10 },
      ],
      [
        { x: 3, y: 8 },
        { x: 3, y: 7 },
        { x: 3, y: 6 },
        { x: 2, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 4 },
        { x: 1, y: 4 },
        { x: 1, y: 3 },
        { x: 1, y: 2 },
        { x: 1, y: 1 },
        { x: 3, y: 10 },
        { x: 3, y: 9 },
        { x: 2, y: 9 },
        { x: 2, y: 8 },
        { x: 2, y: 6 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 0, y: 5 },
        { x: 0, y: 3 },
        { x: 0, y: 2 },
        { x: 1, y: 9 },
        { x: 1, y: 10 },
      ],
      [
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 2, y: 4 },
        { x: 3, y: 4 },
        { x: 3, y: 6 },
        { x: 3, y: 7 },
        { x: 3, y: 8 },
        { x: 3, y: 9 },
        { x: 3, y: 10 },
        { x: 2, y: 9 },
        { x: 2, y: 8 },
        { x: 2, y: 6 },
        { x: 2, y: 5 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 5 },
        { x: 1, y: 9 },
        { x: 1, y: 10 },
      ],
      [
        { x: 3, y: 6 },
        { x: 3, y: 9 },
        { x: 3, y: 10 },
        { x: 3, y: 4 },
        { x: 2, y: 4 },
        { x: 1, y: 1 },
        { x: 3, y: 7 },
        { x: 3, y: 8 },
        { x: 1, y: 3 },
        { x: 1, y: 2 },
        { x: 1, y: 4 },
        { x: 2, y: 5 },
        { x: 2, y: 8 },
        { x: 2, y: 9 },
        { x: 2, y: 6 },
        { x: 1, y: 6 },
        { x: 1, y: 5 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 5 },
        { x: 1, y: 9 },
        { x: 1, y: 10 },
      ],
    ][Math.floor(4 * Math.random())];
    for (let t = 0; t < e.length; t++)
      setTimeout(
        function () {
          (window.scrollTo(0, grid.get(e[t]).toPoint().y - window.innerHeight / 2),
            handleStep0(e[t]));
        },
        1e3 * (t + 1),
      );
  }
}
let hexSelectedForRedeployment = null;
function redeploymentPhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("redeploymentPhase"),
    (currentTurn.army = "soviet"),
    (currentTurn.phase = "redeployment"),
    (currentTurn.subphase = ""),
    (document.getElementById("step_redeployment_tournament").style.display = "block"),
    (document.getElementById("next_step_redeployment_tournament").style.display = "none"),
    "" === playAIAs || playAIAs !== currentTurn.army
      ? ((document.getElementById("step_redeployment_tournament_tip").innerText =
          'Redeploy some, none or all three Russian "reserve" armies  located in the highlighted hexes.'),
        (document.getElementById("skip_redeployment_tournament").style.display = "block"),
        (document.getElementById("undo_redeployment_tournament").style.display = "inline-block"))
      : ((document.getElementById("step_redeployment_tournament_tip").innerText = ""),
        (document.getElementById("skip_redeployment_tournament").style.display = "none"),
        (document.getElementById("undo_redeployment_tournament").style.display = "none")),
    (document.getElementById("skip_to_combat_after_redeployment").onclick = function () {
      ((document.getElementById("next_step_redeployment_tournament").style.display = this.checked
        ? "block"
        : "none"),
        (document.getElementById("next_step_redeployment_tournament").onclick =
          combatAnnouncePhase),
        (document.getElementById("undo_redeployment_tournament").style.display = this.checked
          ? "none"
          : "inline-block"));
    }),
    (hexSelectedForRedeployment = null));
  const t = [
      { x: 4, y: 2 },
      { x: 5, y: 8 },
      { x: 7, y: 3 },
    ],
    n = function () {
      t.forEach(function (e) {
        const t = lookupUnit(Hex(e));
        t &&
          "soviet" === t.army &&
          t.position.x === e.x &&
          t.position.y === e.y &&
          highlightHex(hexHighlights, Hex(e));
      });
    };
  n();
  const i = function (e) {
      "off" === e.terrain ||
        lookupUnit(e) ||
        highlightHex(hexHighlights, e, "rgba(255, 255, 255, 0.35)");
    },
    o = function (e) {
      const o = Hex(grid.get(e)),
        r = lookupUnit(o);
      if (hexSelectedForRedeployment) {
        if (
          !lookupUnit(o) &&
          "off" !== o.terrain &&
          ((3 === o.x && (1 === o.y || 2 === o.y)) ||
            (4 === o.x && (0 === o.y || 1 === o.y || 2 === o.y)) ||
            o.x >= 5)
        ) {
          hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
          const e = hexSelectedForRedeployment.center().add(hexSelectedForRedeployment.toPoint());
          let t = lookupUnit(hexSelectedForRedeployment);
          ((t.position.x = o.x), (t.position.y = o.y), clearUnit(board, t, e.x - 40, e.y - 40));
          const i = o.center().add(o.toPoint());
          (drawUnit(board, t, i.x - 30, i.y - 30),
            countersHighlights.drawImage(
              document.getElementById("check_counter"),
              i.x - 40,
              i.y - 40,
              80,
              80,
            ),
            (hexSelectedForRedeployment = null),
            n());
        }
      } else if (
        (hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height),
        n(),
        o &&
          r &&
          "soviet" === r.army &&
          t.filter(function (e) {
            return r.position.x === e.x && r.position.y === e.y;
          }).length > 0)
      ) {
        ((hexSelectedForRedeployment = o),
          i(grid.get({ x: 3, y: 1 })),
          i(grid.get({ x: 3, y: 2 })),
          i(grid.get({ x: 4, y: 0 })),
          i(grid.get({ x: 4, y: 1 })),
          i(grid.get({ x: 4, y: 2 })));
        for (let e = 5; e < 14; e++) for (let t = 0; t < 11; t++) i(grid.get({ x: e, y: t }));
      }
    };
  handleRedeploymentClick = function (e) {
    const t = Grid.pointToHex(e.offsetX, e.offsetY);
    o(t);
  };
  if ("" === playAIAs || playAIAs !== currentTurn.army)
    document.addEventListener("click", handleRedeploymentClick);
  else {
    hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
    const e = [
      [],
      [
        [
          { x: 4, y: 2 },
          { x: 5, y: 3 },
        ],
        [
          { x: 7, y: 3 },
          { x: 8, y: 4 },
        ],
        [
          { x: 5, y: 8 },
          { x: 6, y: 7 },
        ],
      ],
      [
        [
          { x: 7, y: 3 },
          { x: 7, y: 4 },
        ],
      ],
      [
        [
          { x: 7, y: 3 },
          { x: 7, y: 5 },
        ],
        [
          { x: 5, y: 8 },
          { x: 7, y: 9 },
        ],
      ],
    ][Math.floor(4 * Math.random())];
    if (e.length > 0) {
      document.getElementById("step_redeployment_tournament_tip").innerText =
        "The enemy has decided to redeploy " +
        e.length +
        " unit" +
        (e.length > 1 ? "s" : "") +
        " for this turn.";
      for (let t = 0; t < e.length; t++)
        setTimeout(
          function () {
            (window.scrollTo(
              grid.get(e[t][0]).toPoint().x - window.innerWidth / 2,
              grid.get(e[t][0]).toPoint().y - window.innerHeight / 2,
            ),
              o(e[t][0]),
              o(e[t][1]),
              t === e.length - 1 &&
                ((document.getElementById("next_step_redeployment_tournament").style.display =
                  "block"),
                (document.getElementById("next_step_redeployment_tournament").onclick =
                  combatAnnouncePhase)));
          },
          2e3 * (t + 1),
        );
    } else
      ((document.getElementById("step_redeployment_tournament_tip").innerText =
        "The enemy has decided to not redeploy any unit for this turn."),
        (document.getElementById("next_step_redeployment_tournament").style.display = "block"),
        (document.getElementById("next_step_redeployment_tournament").onclick =
          combatAnnouncePhase));
  }
}
let battles = [],
  battle = null,
  battleResult = "",
  currentBattle = null;
function combatAnnouncePhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("combatAnnouncePhase"),
    tournamentMode &&
      "soviet" === currentTurn.army &&
      "redeployment" === currentTurn.phase &&
      (currentTurn.army = "german"),
    (currentTurn.phase = "combat"),
    (currentTurn.subphase = "announce"),
    (document.querySelector("#step_combat > div.hud_title > img").src =
      "img/" + currentTurn.army + "_turn.png"),
    (document.getElementById("step_combat").style.display = "block"),
    "" === playAIAs || playAIAs !== currentTurn.army
      ? ((document.getElementById("step_combat_tip").innerText =
          "Announce all the battles of this turn by selecting each set of defending and attacking units (or skip combat and go to the movement phase)."),
        (document.getElementById("skip_combat").style.display = "block"),
        (document.getElementById("skip_to_movement").onclick = function () {
          ((document.getElementById("next_step_combat").style.display = this.checked
            ? "block"
            : "none"),
            (document.getElementById("next_step_combat").onclick = movementPhase));
        }))
      : ((document.getElementById("step_combat_tip").innerText =
          "The enemy is announcing the battles of this turn..."),
        (document.getElementById("skip_combat").style.display = "none")),
    (document.getElementById("step_combat_tip").style.display = "block"));
  const t = function (e, t) {
      for (const n of t) for (const t of n.attackingUnits) if (e.id === t.id) return !0;
      return !1;
    },
    n = function (e) {
      const n = "german" === currentTurn.army ? "soviet" : "german";
      let i = grid.get(e);
      if (!i) return;
      let o = lookupUnit(i),
        r = grid.neighborsOf(i);
      if (
        o &&
        o.army === n &&
        !(function (e, t) {
          for (const n of t) if (e.id === n.defendingUnit.id) return !0;
          return !1;
        })(o, battles)
      ) {
        if (!battle || battle.defendingUnit.id !== o.id) {
          battle = null;
          let e = [];
          for (let i = 0; i < r.length; i++) {
            let o = lookupUnit(r[i]);
            o &&
              o.army !== n &&
              !t(o, battles) &&
              fatigueLevel(o) < 3 &&
              ((o.attackFrom = toNeighborsDirections[i]), e.push(o));
          }
          (e.length > 0 && (battle = { attackingUnits: e, defendingUnit: o }), refreshBattles());
        }
      } else {
        if (o && o.army !== n && battle && !t(o, battles) && fatigueLevel(o) < 3)
          if (battle.attackingUnits.filter((e) => e.id === o.id).length > 0)
            ((battle.attackingUnits = battle.attackingUnits.filter((e) => e.id !== o.id)),
              0 === battle.attackingUnits.length && (battle = null));
          else {
            let e = !1;
            for (let t = 0; t < r.length; t++) {
              let n = lookupUnit(r[t]);
              if (n && n.id === battle.defendingUnit.id) {
                ((o.attackFrom = fromNeighborsDirections[t]), (e = !0));
                break;
              }
            }
            e ? battle.attackingUnits.push(o) : (battle = null);
          }
        else battle = null;
        refreshBattles();
      }
    };
  handleCombatAnnounceClick = function (e) {
    if ("counters_highlights" === e.target.id) {
      const t = Grid.pointToHex(e.offsetX, e.offsetY);
      n(t);
    }
  };
  const i = function () {
    const e = "german" === currentTurn.army ? "soviet" : "german";
    let n = [];
    const i = function (i) {
      const o = grid.neighborsOf(Hex(i.position));
      battle = null;
      let r = [];
      for (let i = 0; i < o.length; i++) {
        let a = lookupUnit(o[i]);
        a && a.army !== e && !t(a, n) && fatigueLevel(a) < 3 && ((a.attackFrom = toNeighborsDirections[i]), r.push(a));
      }
      (r.length > 0 &&
        ((battle = { attackingUnits: r, defendingUnit: i }),
        computeBattleOdds(),
        ((((10 === i.position.x && 2 === i.position.y) ||
          (10 === i.position.x && 6 === i.position.y)) &&
          battle.battleOdds >= 1) ||
          (Hex(i.position).distance(Hex({ x: 10, y: 2 })) <= 2 &&
            battle.battleOdds >= 1 &&
            r.length > 1) ||
          battle.battleOdds >= 2) &&
          n.push(battle)),
        (battle = null));
    };
    let o = [
      { x: 10, y: 2 },
      { x: 10, y: 1 },
      { x: 11, y: 2 },
      { x: 11, y: 3 },
      { x: 10, y: 3 },
      { x: 9, y: 3 },
      { x: 9, y: 2 },
      { x: 13, y: 5 },
      { x: 10, y: 6 },
      { x: 4, y: 5 },
      { x: 4, y: 6 },
      { x: 4, y: 7 },
    ];
    for (const t of o) {
      let n = lookupUnit(Hex(t));
      n && n.army === e && n.position && n.position.x >= 4 && i(n);
    }
    for (const t of b4mUnits
      .filter(function (t) {
        return (
          t.army === e &&
          t.position &&
          t.position.x >= 2 &&
          !(function (e, t) {
            for (const n of o) if (n.x === e && n.y === t) return !0;
            return !1;
          })(t.position.x, t.position.y)
        );
      })
      .sort(function (e, t) {
        return t.position.y - e.position.y;
      }))
      i(t);
    return n.map(function (e) {
      return { x: e.defendingUnit.position.x, y: e.defendingUnit.position.y };
    });
  };
  if ("" === playAIAs || playAIAs !== currentTurn.army)
    document.addEventListener("click", handleCombatAnnounceClick);
  else {
    const e = i();
    if (0 === e.length)
      ((document.getElementById("step_combat_tip").innerText =
        "The enemy doesn't announce any battle for this turn and goes straight to the movement phase."),
        (document.getElementById("next_step_combat").style.display = "block"),
        (document.getElementById("next_step_combat").onclick = movementPhase));
    else
      for (let t = 0; t < e.length; t++)
        setTimeout(
          function () {
            (window.scrollTo(
              grid.get(e[t]).toPoint().x - window.innerWidth / 2,
              grid.get(e[t]).toPoint().y - window.innerHeight / 2,
            ),
              n(e[t]),
              battles.push(battle),
              (battle = null),
              refreshBattles(),
              t === e.length - 1 &&
                ((document.getElementById("step_combat_tip").innerText =
                  "The enemy has announced all the battles for this turn. Click below to highlight each battle or proceed to the resolution."),
                (document.getElementById("next_step_resolve_battles").style.display = "block"),
                (document.getElementById("next_step_resolve_battles").onclick =
                  combatResolvePhase)));
          },
          1500 * (t + 1),
        );
  }
}
let validRetreat = [],
  singleValidRetreat = [],
  currentDefendingUnit = null,
  initialDefendingUnitPosition = { x: -1, y: -1 },
  // the battle whose defender is retreating (its hex is being vacated)
  defenderRetreating = null;
// German control of a Russian city lasts only while the Germans hold it: once a Russian attack has
// eliminated or driven out the German garrison, the city is Russian again at once, even if no Russian
// unit advances into it, and the Germans can no longer bring replacements into it. The Germans, as the
// occupiers, still have to enter a city to take it.
function takeVacatedCity() {
  const e = grid.get(initialDefendingUnitPosition),
    t = currentBattle.attackingUnits.length > 0 ? currentBattle.attackingUnits[0].army : null;
  if (!e || "soviet" !== t || !e.city || "none" === e.city || "german" !== e.control) return;
  const n = b4mUnits[b4mUnitsIndex(currentBattle.defendingUnit)];
  if (n && n.position && n.position.x === e.x && n.position.y === e.y && defenderRetreating !== currentBattle) return;
  (cityChangedHands(e, e.control, "soviet"), (e.control = "soviet"), cityLiberated(e, null));
}
function handleRetreatSelection(e) {
  let t = grid.get(e);
  if (!t) return;
  let n = singleValidRetreat.filter(function (e) {
    return e.equals(t);
  });
  if (n.length > 0) {
    let e = n[0].from.slice();
    (e.push({ x: n[0].x, y: n[0].y }), (defenderRetreating = currentBattle), moveUnit(currentDefendingUnit, e, void 0, !0));
    for (const e of singleValidRetreat) {
      for (const t of e.from)
        (clearHex(hexHighlights, Hex(t)),
          battles.filter(function (e) {
            return Hex(t).equals(e.defendingUnit.position);
          }).length > 0 && highlightHex(hexHighlights, Hex(t)));
      clearHex(hexHighlights, e);
    }
    (clearHex(hexHighlights, Hex(currentDefendingUnit.position)),
      document.removeEventListener("click", handleRetreatSelectionClick),
      "EX" === battleResult ? matchLoss() : advanceAfterCombat());
  }
}
function handleRetreatSelectionClick(e) {
  handleRetreatSelection(Grid.pointToHex(e.offsetX, e.offsetY));
}
function findRetreat(e) {
  const t = grid.get(currentDefendingUnit.position);
  let n = t.center().add(t.toPoint()),
    i = document.querySelector(".table_battle div.battle_result");
  validRetreat = [];
  let o = "soviet" === currentDefendingUnit.army ? "german" : "soviet",
    r = grid.neighborsOf(t).filter(function (e) {
      return e && "off" !== e.terrain && (!lookupUnit(e) || lookupUnit(e).army !== o);
    });
  for (const e of r) {
    let n = Hex(e);
    (isEZOC(n, currentDefendingUnit.army) ? (n.cost = 1) : (n.cost = 0), identifyRetreat(t, n, 1));
  }
  validRetreat.sort(function (e, t) {
    return e.cost - t.cost || e.dist - t.dist;
  });
  const a = "reduced" === currentDefendingUnit.strength ? 0 : 1;
  if (validRetreat.length > 0 && validRetreat[0].cost <= a) {
    validRetreat[0].cost > 0 &&
      ((currentDefendingUnit.strength = "reduced"),
      (b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = "reduced"),
      clearUnit(board, currentDefendingUnit, n.x - 40, n.y - 40),
      drawUnit(board, currentDefendingUnit, n.x - 30, n.y - 30),
      (i.innerText += " It loses 1 step as it must retreat through an EZOC."));
    let o = validRetreat.filter(function (e) {
      return validRetreat[0].cost === e.cost && validRetreat[0].dist === e.dist;
    });
    if (((singleValidRetreat = []), o.length > 1)) {
      for (const e of o) {
        let n = !1;
        for (const t of singleValidRetreat)
          if (t.x === e.x && t.y === e.y) {
            n = !0;
            break;
          }
        if (!n) {
          singleValidRetreat.push(e);
          let n = Hex(e).center().add(Hex(e).toPoint());
          (hexHighlights.setLineDash([10, 10]),
            (hexHighlights.strokeStyle = "rgba(0, 0, 255, 0.3)"),
            (hexHighlights.lineWidth = 7),
            hexHighlights.beginPath());
          const i = t.center().add(t.toPoint());
          let o;
          hexHighlights.moveTo(i.x, i.y);
          for (const t of e.from)
            ((o = Hex(t).center().add(Hex(t).toPoint())), hexHighlights.lineTo(o.x, o.y));
          (hexHighlights.lineTo(n.x, n.y),
            hexHighlights.stroke(),
            hexHighlights.beginPath(),
            (hexHighlights.lineWidth = 4),
            hexHighlights.setLineDash([]));
          const r = 20,
            a = n.x - o.x,
            l = n.y - o.y,
            s = Math.atan2(l, a);
          (hexHighlights.moveTo(n.x, n.y),
            hexHighlights.lineTo(
              n.x - r * Math.cos(s - Math.PI / 6),
              n.y - r * Math.sin(s - Math.PI / 6),
            ),
            hexHighlights.moveTo(n.x, n.y),
            hexHighlights.lineTo(
              n.x - r * Math.cos(s + Math.PI / 6),
              n.y - r * Math.sin(s + Math.PI / 6),
            ),
            hexHighlights.stroke());
        }
      }
      "" === playAIAs || playAIAs !== currentTurn.army
        ? ((document.querySelector(".table_battle div.battle_result_action").innerHTML =
            "<strong>Select a valid destination</strong> for the retreat..."),
          document.addEventListener("click", handleRetreatSelectionClick))
        : handleRetreatSelection({ x: o[0].x, y: o[0].y });
    } else {
      let n = validRetreat[0].from.slice();
      (n.push({ x: validRetreat[0].x, y: validRetreat[0].y }),
        (defenderRetreating = currentBattle),
        moveUnit(currentDefendingUnit, n, void 0, !0),
        clearHex(hexHighlights, t),
        e());
    }
  } else
    ((i.innerText += " But there is no valid retreat so it is eliminated."),
      clearUnit(board, currentDefendingUnit, n.x - 40, n.y - 40),
      clearHex(hexHighlights, t),
      e());
}
function identifyRetreat(e, t, n) {
  const i = "soviet" === lookupUnit(e).army ? "german" : "soviet";
  let o = grid.neighborsOf(t).filter(function (t) {
    return (
      t && "off" !== t.terrain && (!lookupUnit(t) || lookupUnit(t).army !== i) && t.distance(e) > n
    );
  });
  for (const i of o) {
    let o = Hex(i);
    ((o.dist = o.distance(e)),
      (o.from = []),
      t.from && t.from.length > 0 && (o.from = t.from.slice()),
      o.from.push({ x: t.x, y: t.y }),
      o.dist === n + 1 &&
        (isEZOC(o, lookupUnit(e).army) ? (o.cost = t.cost + 1) : (o.cost = t.cost),
        o.cost < 2 &&
          (lookupUnit(o) || isEZOC(o, lookupUnit(e).army)
            ? identifyRetreat(e, o, n + 1)
            : validRetreat.push(o))));
  }
}
function handleAdvanceAfterCombat(e) {
  let t = grid.get(e);
  if (!t) return;
  let n = currentBattle.attackingUnits.filter(function (e) {
    return Hex(e.position).equals(t);
  });
  n.length > 0 &&
    b4mUnits[b4mUnitsIndex(n[0])].position &&
    (moveUnit(n[0], [initialDefendingUnitPosition]),
    document.removeEventListener("click", handleAdvanceAfterCombatClick));
}
function handleAdvanceAfterCombatClick(e) {
  handleAdvanceAfterCombat(Grid.pointToHex(e.offsetX, e.offsetY));
}
function advanceAfterCombat() {
  takeVacatedCity();
  if ("" === playAIAs || playAIAs !== currentTurn.army)
    ((document.querySelector(".table_battle div.battle_result_action").innerHTML =
      "<strong>Use the option to advance</strong> into the vacated hex by clicking on the attacking unit, <strong>or continue without</strong>..."),
      document.addEventListener("click", handleAdvanceAfterCombatClick));
  else if (
    "none" !== grid.get(currentBattle.defendingUnit.position).city ||
    Hex(currentBattle.defendingUnit.position).distance(Hex({ x: 10, y: 2 })) <= 1 ||
    currentBattle.defendingUnit.position.x <= 8
  )
    for (const e of currentBattle.attackingUnits.sort(function (e, t) {
      const n = "full" === e.strength ? e.combatFull : e.combatReduced,
        i = "full" === t.strength ? t.combatFull : t.combatReduced;
      return (currentBattle.defendingUnit.position.x <= 8 && e.position.x - t.position.x) || i - n;
    })) {
      const t = grid.get(e.position);
      if (b4mUnits[b4mUnitsIndex(e)].position && "moscow" !== t.city && "major" !== t.city) {
        handleAdvanceAfterCombat(e.position);
        break;
      }
    }
  document.querySelector(".table_battle div.next_battle_button").style.display = "inline-block";
}
function handleMatchLoss(e) {
  let t = grid.get(e);
  if (!t) return;
  let n = -1;
  for (let e = 0; e < currentBattle.attackingUnits.length; e++)
    if (
      Hex(currentBattle.attackingUnits[e].position).equals(t) &&
      !currentBattle.attackingUnits[e].matchedLoss
    ) {
      n = e;
      break;
    }
  if (n > -1) {
    let e = 0,
      t = document.querySelector(".table_battle div.battle_result"),
      i = document.querySelector(".table_battle div.battle_result_action"),
      o = Hex(currentBattle.attackingUnits[n].position)
        .center()
        .add(Hex(currentBattle.attackingUnits[n].position).toPoint());
    (clearUnit(board, currentBattle.attackingUnits[n], o.x - 40, o.y - 40),
      "reduced" === currentBattle.attackingUnits[n].strength
        ? ((e = currentBattle.attackingUnits[n].combatReduced),
          (t.innerText += " The selected attacking unit is eliminated during the exchange."))
        : currentBattle.attackingUnits[n].combatFull -
              currentBattle.attackingUnits[n].combatReduced <
            matchLossValue - totalMatchedLoss
          ? ((e = currentBattle.attackingUnits[n].combatFull),
            (t.innerText += " The selected attacking unit is eliminated during the exchange."))
          : ((e =
              currentBattle.attackingUnits[n].combatFull -
              currentBattle.attackingUnits[n].combatReduced),
            (currentBattle.attackingUnits[n].strength = "reduced"),
            (b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[n])].strength = "reduced"),
            drawUnit(board, currentBattle.attackingUnits[n], o.x - 30, o.y - 30),
            (t.innerText += " The selected attacking unit loses 1 step during the exchange.")),
      (currentBattle.attackingUnits[n].matchedLoss = e),
      (totalMatchedLoss = 0));
    for (const e of currentBattle.attackingUnits)
      e.matchedLoss && (totalMatchedLoss += e.matchedLoss);
    if (totalMatchedLoss >= matchLossValue)
      ((matchLossValue = 0),
        (totalMatchedLoss = 0),
        advanceAfterCombat(),
        document.removeEventListener("click", handleMatchLossClick));
    else {
      let e = matchLossValue - totalMatchedLoss > 1 ? "s" : "";
      i.innerHTML +=
        " with " + (matchLossValue - totalMatchedLoss) + " more point" + e + " to lose...";
    }
  }
}
function handleMatchLossClick(e) {
  handleMatchLoss(Grid.pointToHex(e.offsetX, e.offsetY));
}
let matchLossValue = 0,
  totalMatchedLoss = 0;
function matchLoss() {
  if (
    ((matchLossValue = currentDefendingUnit.combatFull - currentDefendingUnit.combatReduced),
    "reduced" === currentDefendingUnit.strength &&
      (matchLossValue = currentDefendingUnit.combatReduced),
    1 === currentBattle.attackingUnits.length)
  ) {
    let e = document.querySelector(".table_battle div.battle_result"),
      t = Hex(currentBattle.attackingUnits[0].position)
        .center()
        .add(Hex(currentBattle.attackingUnits[0].position).toPoint());
    (clearUnit(board, currentBattle.attackingUnits[0], t.x - 40, t.y - 40),
      "reduced" === currentBattle.attackingUnits[0].strength ||
      currentBattle.attackingUnits[0].combatFull - currentBattle.attackingUnits[0].combatReduced <
        matchLossValue
        ? ((e.innerText += " The attacking unit is eliminated during the exchange."),
          (document.querySelector(".table_battle div.next_battle_button").style.display =
            "inline-block"))
        : ((currentBattle.attackingUnits[0].strength = "reduced"),
          (b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[0])].strength = "reduced"),
          drawUnit(board, currentBattle.attackingUnits[0], t.x - 30, t.y - 30),
          (e.innerText += " The attacking unit loses 1 step during the exchange."),
          advanceAfterCombat()));
  } else if ("" === playAIAs || playAIAs !== currentTurn.army)
    ((document.querySelector(".table_battle div.battle_result_action").innerHTML =
      "<strong>Select the attacking unit(s) to match the defending unit's loss</strong> (at least " +
      matchLossValue +
      " strength points)..."),
      document.addEventListener("click", handleMatchLossClick));
  else {
    let e = currentBattle.attackingUnits.sort(function (e, t) {
        return (
          ("full" === e.strength ? e.combatFull : e.combatReduced) -
          ("full" === t.strength ? t.combatFull : t.combatReduced)
        );
      }),
      t = [];
    for (const n of e)
      if (
        (10 === n.position.x && 2 === n.position.y) ||
        (10 === n.position.x && 6 === n.position.y) ||
        (13 === n.position.x && 5 === n.position.y)
      )
        t.push(n);
      else if ((handleMatchLoss(n.position), 0 === matchLossValue)) break;
    0 !== matchLossValue && handleMatchLoss(t[0].position);
  }
}
function handleAttackingUnitLoss(e) {
  let t = grid.get(e);
  if (!t) return;
  let n = currentBattle.attackingUnits.filter(function (e) {
    return Hex(e.position).equals(t);
  });
  if (n.length > 0) {
    let e = document.querySelector(".table_battle div.battle_result"),
      t = Hex(n[0].position).center().add(Hex(n[0].position).toPoint());
    (clearUnit(board, n[0], t.x - 40, t.y - 40),
      "reduced" === n[0].strength
        ? (e.innerText += " The attacking unit strength is already reduced so it is eliminated.")
        : ((n[0].strength = "reduced"),
          (b4mUnits[b4mUnitsIndex(n[0])].strength = "reduced"),
          drawUnit(board, n[0], t.x - 30, t.y - 30)),
      (document.querySelector(".table_battle div.next_battle_button").style.display =
        "inline-block"),
      document.removeEventListener("click", handleAttackingUnitLossClick));
  }
}
function handleAttackingUnitLossClick(e) {
  handleAttackingUnitLoss(Grid.pointToHex(e.offsetX, e.offsetY));
}
function resolveNextBattle(e) {
  (finalizeBattleLosses(),
    e && e.stopPropagation(),
    document.removeEventListener("click", handleAdvanceAfterCombatClick),
    document.removeEventListener("click", handleAttackingUnitLossClick),
    document.removeEventListener("click", handleMatchLossClick),
    document.removeEventListener("click", handleRetreatSelectionClick),
    refreshBattles(),
    (document.getElementById("step_combat").style.display = "block"),
    (document.getElementById("skip_announce").style.display = "none"),
    (document.getElementById("skip_to_resolution").checked = !1),
    (document.getElementById("next_step_resolve_battles").style.display = "none"));
  const t = document.querySelectorAll(".table_battle > tr i");
  for (let e of t) e.parentNode.removeChild(e);
  const n = document.querySelectorAll(".table_battle > tr");
  if (n.length > 0) {
    currentBattle = battles.shift();
    const e = "rgba(0, 0, 255, 0.25)";
    n[0].style.backgroundColor = e;
    for (const t of currentBattle.attackingUnits)
      highlightHex(hexHighlights, grid.get(t.position), e);
    ((currentDefendingUnit = currentBattle.defendingUnit),
      (initialDefendingUnitPosition.x = currentDefendingUnit.position.x),
      (initialDefendingUnitPosition.y = currentDefendingUnit.position.y),
      (battleSnapshot = snapshotBattle(currentBattle)));
    const t = grid.get(currentDefendingUnit.position);
    highlightHex(hexHighlights, t, e);
    let i = t.center().add(t.toPoint());
    window.scrollTo(t.toPoint().x - window.innerWidth / 2, t.toPoint().y - window.innerHeight / 2);
    const o = Math.floor(6 * Math.random()) + 1;
    let r = document.createElement("tr");
    ((r.innerHTML =
      '<td colspan="5" style="padding-bottom: 20px;"><img class="die_roll" src="img/' +
      o +
      '.png" /><table class="table_battle_odds"><tr><td>1:1</td><td>2:1</td><td>3:1</td><td>4:1</td><td>5:1</td><td>6:1</td></tr><tr><td>DR</td><td>DR</td><td>DR</td><td>DR</td><td>DR</td><td>DRL</td></tr><tr><td>EX</td><td>DR</td><td>DR</td><td>DR</td><td>DRL</td><td>DRL</td></tr><tr><td>EX</td><td>EX</td><td>DR</td><td>EX</td><td>DRL</td><td>DE</td></tr><tr><td>NE</td><td>EX</td><td>EX</td><td>DRL</td><td>DRL</td><td>DE</td></tr><tr><td>NE</td><td>NE</td><td>EX</td><td>DRL</td><td>DE</td><td>DE</td></tr><tr><td>AL</td><td>NE</td><td>DRL</td><td>DE</td><td>DE</td><td>DE</td></tr></table><div class="battle_result"></div><div class="battle_result_action"></div><div class="next_battle_button" style="display:none;" onclick="resolveNextBattle(event);">Next <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></td>'),
      n.length > 1
        ? document.querySelector(".table_battle").insertBefore(r, n[1])
        : document.querySelector(".table_battle").appendChild(r));
    let a = document.querySelectorAll(
      ".table_battle_odds td:nth-child(" + currentBattle.battleOdds + ")",
    );
    const l = "solid thin lightgray";
    for (let e of a) ((e.style.borderLeft = l), (e.style.borderRight = l));
    ((document.querySelector(
      ".table_battle_odds tr:nth-child(1) td:nth-child(" + currentBattle.battleOdds + ")",
    ).style.borderTop = l),
      (document.querySelector(
        ".table_battle_odds tr:last-child td:nth-child(" + currentBattle.battleOdds + ")",
      ).style.borderBottom = l),
      (document.querySelector(".table_battle_odds tr:nth-child(" + (o + 1) + ")").style.border = l),
      (document.querySelector(
        ".table_battle_odds tr:nth-child(" +
          (o + 1) +
          ") td:nth-child(" +
          currentBattle.battleOdds +
          ")",
      ).style.fontWeight = "bold"));
    let s = t.toPoint(),
      c = document.createElement("div");
    (c.setAttribute("class", "explosion"),
      (c.style.display = "block"),
      (c.style.top = s.y - 10 + "px"),
      (c.style.left = s.x - 10 + "px"),
      document.body.appendChild(c),
      (battleResult = document.querySelector(
        ".table_battle_odds tr:nth-child(" +
          (o + 1) +
          ") td:nth-child(" +
          currentBattle.battleOdds +
          ")",
      ).innerText));
    soundBattle(currentBattle);
    const fatigueOutcome = applyBattleFatigue(battleResult);
    battleResult = fatigueOutcome.result;
    let d = document.querySelector(".table_battle div.battle_result");
    fatigueOutcome.note &&
      d.insertAdjacentHTML("afterend", '<div class="battle_fatigue_note">' + fatigueOutcome.note + "</div>");
    switch (battleResult) {
      case "NE":
        ((d.innerText = "The battle has no effect."),
          (document.querySelector(".table_battle div.next_battle_button").style.display =
            "inline-block"));
        break;
      case "DR":
        ((d.innerText = "The defending unit needs to retreat 2 hexes."),
          !(
            "full" === currentDefendingUnit.strength &&
            ("moscow" === t.city ||
              "major" === t.city ||
              (currentTurn.turn >= HALT_ORDER_TURN &&
                "elastic" !== decisions.haltOrder &&
                "german" === currentDefendingUnit.army &&
                t.city &&
                "none" !== t.city))
          )
            ? findRetreat(advanceAfterCombat)
            : ((currentDefendingUnit.strength = "reduced"),
              (b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = "reduced"),
              clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
              drawUnit(board, currentDefendingUnit, i.x - 30, i.y - 30),
              (d.innerText +=
                "moscow" === t.city || "major" === t.city
                  ? " But it is in a major city, so it takes a step loss instead and doesn't retreat."
                  : " But Hitler's stand-fast order holds it in the city: it takes a step loss instead and doesn't retreat."),
              (document.querySelector(".table_battle div.next_battle_button").style.display =
                "inline-block")));
        break;
      case "DRL":
        ((d.innerText = "The defending unit loses 1 step and is retreated 2 hexes."),
          "reduced" === currentDefendingUnit.strength
            ? ((d.innerText += " But its strength is already reduced so it is eliminated."),
              clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
              clearHex(hexHighlights, t),
              advanceAfterCombat())
            : ((currentDefendingUnit.strength = "reduced"),
              (b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = "reduced"),
              clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
              drawUnit(board, currentDefendingUnit, i.x - 30, i.y - 30),
              findRetreat(advanceAfterCombat)));
        break;
      case "DE":
        ((d.innerText = "The defending unit is eliminated."),
          clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
          clearHex(hexHighlights, t),
          advanceAfterCombat());
        break;
      case "EX":
        ((d.innerText = "Exchange!"),
          "reduced" === currentDefendingUnit.strength
            ? ((d.innerText +=
                " The defending unit strength is already reduced so it is eliminated."),
              clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
              clearHex(hexHighlights, t),
              matchLoss())
            : ((currentDefendingUnit.strength = "reduced"),
              (b4mUnits[b4mUnitsIndex(currentDefendingUnit)].strength = "reduced"),
              clearUnit(board, currentDefendingUnit, i.x - 40, i.y - 40),
              drawUnit(board, currentDefendingUnit, i.x - 30, i.y - 30),
              findRetreat(matchLoss)));
        break;
      case "AL":
        if (
          ((d.innerText = "One attacking unit needs to lose 1 step."),
          1 === currentBattle.attackingUnits.length)
        ) {
          let e = Hex(currentBattle.attackingUnits[0].position)
            .center()
            .add(Hex(currentBattle.attackingUnits[0].position).toPoint());
          (clearUnit(board, currentBattle.attackingUnits[0], e.x - 40, e.y - 40),
            "reduced" === currentBattle.attackingUnits[0].strength
              ? (d.innerText +=
                  " The attacking unit strength is already reduced so it is eliminated.")
              : ((currentBattle.attackingUnits[0].strength = "reduced"),
                (b4mUnits[b4mUnitsIndex(currentBattle.attackingUnits[0])].strength = "reduced"),
                drawUnit(board, currentBattle.attackingUnits[0], e.x - 30, e.y - 30)),
            (document.querySelector(".table_battle div.next_battle_button").style.display =
              "inline-block"));
        } else if ("" === playAIAs || playAIAs !== currentTurn.army)
          ((document.querySelector(".table_battle div.battle_result_action").innerHTML =
            "<strong>Select the attacking unit</strong> to be impacted..."),
            document.addEventListener("click", handleAttackingUnitLossClick));
        else {
          handleAttackingUnitLoss(
            currentBattle.attackingUnits.sort(function (e, t) {
              return (
                ("full" === e.strength ? e.combatFull : e.combatReduced) -
                ("full" === t.strength ? t.combatFull : t.combatReduced)
              );
            })[0].position,
          );
        }
        break;
      default:
        console.log("ERROR - Invalid battle result: " + battleResult);
    }
  } else {
    ((document.getElementById("step_combat_tip").innerText = "All battles have been resolved."),
      (document.getElementById("skip_combat").style.display = "none"),
      (document.getElementById("next_step_combat").style.display = "block"),
      (document.getElementById("next_step_combat").onclick = movementPhase));
    for (const e of document.querySelectorAll("div.explosion")) document.body.removeChild(e);
  }
}
function combatResolvePhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("combatResolvePhase"),
    (currentTurn.phase = "combat"),
    (currentTurn.subphase = "resolve"),
    (battle = null),
    (document.getElementById("step_combat_tip").style.display = "none"),
    resolveNextBattle(e));
}
function getValidNormalDestinations(e, t, n, i = !0) {
  let o = Hex(e);
  const r = "german" === t ? "soviet" : "german",
    mover = lookupUnit(grid.get(e)),
    isCavalry = !!mover && "cavalry" === mover.type,
    skiInWinter = !!mover && !!mover.ski && isWinterTurn();
  ((o.credit = 3 === currentTurn.turn || 4 === currentTurn.turn ? 1 : n),
    (o.path = []),
    (o.ezocUsed = !1));
  let a = [o],
    l = [o],
    s = [],
    c = 0;
  for (; a.length > 0; ) {
    let e = a.shift();
    (c++, c > 1 && s.push(e));
    for (const n of grid.neighborsOf(e)) {
      let o = Hex(n);
      if (o && "off" !== o.terrain) {
        ((o.credit = e.credit - 1),
          (o.ezocUsed = e.ezocUsed),
          "forest" === o.terrain &&
            3 !== currentTurn.turn &&
            4 !== currentTurn.turn &&
            !skiInWinter &&
            (o.credit > 0 ? o.credit-- : i && (o.credit = -1)));
        let n = lookupUnit(o);
        (n && n.army === r && (o.credit = -1),
          // Cavalry may keep moving after entering its first enemy ZOC hex, but stops at the second one
          isEZOC(o, t) && o.credit > -1 && (isCavalry && !e.ezocUsed ? (o.ezocUsed = !0) : (o.credit = 0)),
          // German units must stop when they enter a partisan hex (which clears the partisans)
          "german" === t && o.credit > 0 && hasPartisan(o) && (o.credit = 0));
        let s = indexOfHex(o, l);
        s < 0
          ? o.credit > -1 &&
            (l.push(o), (o.path = e.path.slice()), o.path.push({ x: e.x, y: e.y }), a.push(o))
          : (o.credit > l[s].credit || (o.credit === l[s].credit && l[s].ezocUsed && !o.ezocUsed)) &&
            ((l[s].credit = o.credit),
            (l[s].ezocUsed = o.ezocUsed),
            (o.path = e.path.slice()),
            o.path.push({ x: e.x, y: e.y }),
            // keep the recorded route in step with the better state, so units animate along the route actually used
            (l[s].path = o.path),
            a.push(o));
      }
    }
  }
  return s;
}
let hexSelected = null,
  available = [],
  hasMoved = [];
function handleMovement(e, t) {
  let n = Hex(grid.get(e)),
    i = lookupUnit(n);
  if (hexSelected) {
    let e = null;
    for (let t = 0; t < available.length; t++)
      if (n.equals(available[t])) {
        e = Hex(available[t]);
        break;
      }
    if (e) {
      let t = e.path.slice(1);
      t.push({ x: e.x, y: e.y });
      let n = lookupUnit(hexSelected);
      (moveUnit(n, t, !0), hasMoved.push(n));
    }
    ((hexSelected = null),
      (available = []),
      hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height));
  } else {
    let e = !1;
    for (const t of hasMoved) n && i && t.id === i.id && (e = !0);
    if (!n || !i || i.army !== currentTurn.army || e)
      return (
        (hexSelected = null),
        (available = []),
        void hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height)
      );
    hexSelected = Hex(n);
    const o = i.movement;
    let r = t(n, currentTurn.army, o);
    for (let e = 0; e < r.length; e++) {
      let t = lookupUnit(grid.get(r[e]));
      (t && t.army === currentTurn.army) ||
        isPendingDestination(r[e]) ||
        (available.push(r[e]), highlightHex(hexHighlights, r[e], "rgba(255, 255, 255, 0.35)"));
    }
  }
}
function aiSelectMovesToFocus(e, t, n, i) {
  let o = grid
    .hexesInRange(e, t)
    .filter(function (e) {
      return e && "off" !== e.terrain;
    })
    .map(function (t) {
      return [t, lookupUnit(t), t.distance(e)];
    })
    .sort(function (e, t) {
      let n = e[1] ? 1 : 0,
        i = t[1] ? 1 : 0;
      return "soviet" === currentTurn.army
        ? e[2] - t[2] || n - i || e[0].x - t[0].x || t[0].y - e[0].y
        : e[2] - t[2] || n - i || t[0].x - e[0].x || e[0].y - t[0].y;
    });
  for (const [r, a] of o.entries()) {
    if (a[1] && a[1].army !== currentTurn.army) continue;
    if (
      n.filter(function (e) {
        return a[0].x === e[1].x && a[0].y === e[1].y;
      }).length > 0
    )
      continue;
    let r = "soviet" === currentTurn.army ? 4 : 6;
    a[0] && "forest" === a[0].terrain && r--;
    let l = getValidNormalDestinations(a[0], currentTurn.army, r, !1);
    if ("soviet" === currentTurn.army && a[0].rail.length > 0) {
      let e = getValidRailDestinations(a[0], "soviet", 4),
        t = l.slice();
      for (const n of e)
        0 ===
          t.filter(function (e) {
            return n.x === e.x && n.y === e.y;
          }).length && l.push(n);
    }
    let s = l
      .filter(function (t) {
        const n = lookupUnit(t);
        return (
          !!(
            n &&
            n.position &&
            n.army === currentTurn.army &&
            ("soviet" === n.army || n.movement >= r - t.credit || 1 === t.distance(a[0])) &&
            t.distance(e) > a[2] &&
            (e.equals(Hex({ x: 10, y: 2 })) ||
              Hex(n.position).distance(Hex({ x: 10, y: 2 })) >
                ("german" === currentTurn.army ? 2 : 1)) &&
            (e.equals(Hex({ x: 13, y: 5 })) ||
              Hex(n.position).distance(Hex({ x: 13, y: 5 })) > 1) &&
            (e.equals(Hex({ x: 10, y: 6 })) || Hex(n.position).distance(Hex({ x: 10, y: 6 })) > 1)
          ) &&
          (!i || i === n.type)
        );
      })
      .map(function (e) {
        return lookupUnit(e);
      })
      .sort(function (e, t) {
        const n = "full" === e.strength ? e.combatFull : e.combatReduced;
        return ("full" === t.strength ? t.combatFull : t.combatReduced) - n;
      });
    if (a[1]) {
      if (a[1].army === currentTurn.army && (!i || i === a[1].type)) {
        let i = s.filter(function (e) {
            return (
              "full" === e.strength &&
              0 ===
                n.filter(function (t) {
                  return e.position.x === t[0].x && e.position.y === t[0].y;
                }).length
            );
          }),
          r = getValidNormalDestinations(a[0], currentTurn.army, a[1].movement);
        if ("soviet" === currentTurn.army && a[0].rail.length > 0) {
          let e = getValidRailDestinations(a[0], "soviet", 4),
            t = r.slice();
          for (const n of e)
            0 ===
              t.filter(function (e) {
                return n.x === e.x && n.y === e.y;
              }).length && r.push(n);
        }
        let l = r
          .filter(function (i) {
            return (
              !lookupUnit(i) &&
              i.distance(e) > t &&
              0 ===
                n.filter(function (e) {
                  return i.x === e[1].x && i.y === e[1].y;
                }).length
            );
          })
          .sort(function (t, n) {
            return t.distance(e) - n.distance(e) || n.x - t.x;
          });
        if (
          i.length > 0 &&
          l.length > 0 &&
          ("reduced" === a[1].strength ||
            ("full" === a[1].strength && i[0].combatFull > a[1].combatFull))
        ) {
          (n.push([
            { x: a[0].x, y: a[0].y },
            { x: l[0].x, y: l[0].y },
          ]),
            n.push([i[0].position, { x: a[0].x, y: a[0].y }]));
          for (let e = 0; e < o.length; e++)
            if (o[e][0].x === i[0].position.x && o[e][0].y === i[0].position.y) {
              o[e][1] = null;
              break;
            }
        }
      }
    } else {
      let t = !1;
      for (const e of s)
        if (
          0 ===
          n.filter(function (t) {
            return e.position.x === t[0].x && e.position.y === t[0].y;
          }).length
        ) {
          (n.push([e.position, { x: a[0].x, y: a[0].y }]), (t = !0));
          for (let t = 0; t < o.length; t++)
            if (o[t][0].x === e.position.x && o[t][0].y === e.position.y) {
              o[t][1] = null;
              break;
            }
          break;
        }
      if (!t && a[2] > 0)
        for (const r of grid.neighborsOf(a[0]).filter(function (t) {
          return t && t.distance(e) === a[2];
        })) {
          let e = lookupUnit(r);
          if (
            e &&
            e.position &&
            e.army === currentTurn.army &&
            (!i || i === e.type) &&
            0 ===
              n.filter(function (t) {
                return e.position.x === t[0].x && e.position.y === t[0].y;
              }).length
          ) {
            (n.push([e.position, { x: a[0].x, y: a[0].y }]), (t = !0));
            for (let t = 0; t < o.length; t++)
              if (o[t][0].x === e.position.x && o[t][0].y === e.position.y) {
                o[t][1] = null;
                break;
              }
            break;
          }
        }
      if (
        !t &&
        1 === a[2] &&
        o[0][1] &&
        o[0][1].army === currentTurn.army &&
        0 ===
          n.filter(function (e) {
            return o[0][1].position.x === e[0].x && o[0][1].position.y === e[0].y;
          }).length
      ) {
        let r = grid
          .neighborsOf(e)
          .map(function (e) {
            return lookupUnit(e);
          })
          .filter(function (e) {
            return (
              e &&
              e.army === currentTurn.army &&
              (!i || i === e.type) &&
              0 ===
                n.filter(function (t) {
                  return e.position.x === t[0].x && e.position.y === t[0].y;
                }).length
            );
          })
          .sort(function (e, t) {
            const n = "full" === e.strength ? e.combatFull : e.combatReduced;
            return ("full" === t.strength ? t.combatFull : t.combatReduced) - n;
          });
        if (r.length > 0) {
          (n.push([o[0][1].position, { x: a[0].x, y: a[0].y }]),
            n.push([r[0].position, o[0][1].position]));
          for (let e = 1; e < o.length; e++)
            if (o[e][0].x === r[0].position.x && o[e][0].y === r[0].position.y) {
              o[e][1] = null;
              break;
            }
          t = !0;
        }
      }
    }
  }
}
function movementPhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("movementPhase"),
    (currentTurn.phase = "movement"),
    (currentTurn.subphase = ""),
    (document.querySelector("#step_movement > div.hud_title > img").src =
      "img/" + currentTurn.army + "_turn.png"),
    (document.getElementById("step_movement").style.display = "block"),
    "" === playAIAs || playAIAs !== currentTurn.army
      ? ((document.getElementById("step_movement_tip").innerText =
          "Select all the units you choose to move and their destination in order to conclude the turn."),
        (document.getElementById("skip_movement").style.display = "block"),
        (document.getElementById("undo_movement").style.display = "inline-block"),
        LAST_TURN === currentTurn.turn && "soviet" === currentTurn.army
          ? ((document.getElementById("next_step_movement").style.display = "none"),
            (document.getElementById("skip_to_other_player").onclick = function () {
              ((document.getElementById("next_step_final").style.display = this.checked
                ? "block"
                : "none"),
                (document.getElementById("next_step_final").onclick = finalResults));
            }))
          : ((document.getElementById("next_step_final").style.display = "none"),
            (document.getElementById("skip_to_other_player").onclick = function () {
              ((document.getElementById("next_step_movement").style.display = this.checked
                ? "block"
                : "none"),
                hasReinforcementStep(currentTurn.turn) && "german" === currentTurn.army
                  ? (document.getElementById("next_step_movement").onclick = reinforcementPhase)
                  : (document.getElementById("next_step_movement").onclick = replacementPhase),
                (document.getElementById("undo_movement").style.display = this.checked
                  ? "none"
                  : "inline-block"));
            })))
      : ((document.getElementById("step_movement_tip").innerText = ""),
        (document.getElementById("skip_movement").style.display = "none"),
        (document.getElementById("undo_movement").style.display = "none")),
    (hexSelected = null),
    (available = []),
    (hasMoved = []),
    (handleMovementClick = function (e) {
      handleMovement(Grid.pointToHex(e.offsetX, e.offsetY), getValidNormalDestinations);
    }));
  "" === playAIAs || playAIAs !== currentTurn.army
    ? document.addEventListener("click", handleMovementClick)
    : ((document.getElementById("step_movement_tip").innerHTML =
        '<i class="fa fa-spinner fa-spin" style="font-size: 2.5em; margin-left: 12px;"></i>'),
      setTimeout(function () {
        const e = (function () {
          let e = [];
          if ("soviet" === currentTurn.army) {
            aiSelectMovesToFocus(Hex({ x: 10, y: 2 }), 1, e);
            const t = Hex({ x: 10, y: 6 }),
              n = lookupUnit(t);
            ((!n ||
              "soviet" === n.army ||
              ("german" === n.army &&
                ("full" === n.strength ? n.combatFull : n.combatReduced) <= 8)) &&
              aiSelectMovesToFocus(t, 1, e),
              aiSelectMovesToFocus(Hex({ x: 13, y: 5 }), 1, e),
              aiSelectMovesToFocus(Hex({ x: 10, y: 0 }), 0, e),
              aiSelectMovesToFocus(Hex({ x: 12, y: 3 }), 0, e),
              aiSelectMovesToFocus(Hex({ x: 12, y: 2 }), 0, e),
              aiSelectMovesToFocus(Hex({ x: 13, y: 3 }), 0, e));
          } else {
            let t = Hex({ x: 10, y: 2 }),
              n = lookupUnit(t);
            currentTurn.turn > 1 &&
              aiSelectMovesToFocus(
                t,
                n && "german" === n.army ? 1 : 2,
                e,
                currentTurn.turn < 5 ? "tank" : null,
              );
            let i = Hex({ x: 10, y: 6 }),
              o = lookupUnit(i),
              r = Hex({ x: 13, y: 5 });
            currentTurn.turn > 1 &&
              (aiSelectMovesToFocus(r, 1, e),
              (o && "german" === o.army) || aiSelectMovesToFocus(i, 1, e));
            for (const n of b4mUnits
              .filter(function (t) {
                return (
                  t.army === currentTurn.army &&
                  t.position &&
                  t.position.x < 8 &&
                  "tank" === t.type &&
                  0 ===
                    e.filter(function (e) {
                      return t.position.x === e[0].x && t.position.y === e[0].y;
                    }).length
                );
              })
              .sort(function (e, t) {
                return t.position.x - e.position.x;
              })) {
              const i = grid.get(n.position);
              let o = getValidNormalDestinations(i, currentTurn.army, n.movement)
                .filter(function (t) {
                  return (
                    t.x > i.x &&
                    (!lookupUnit(t) ||
                      (lookupUnit(t) &&
                        e.filter(function (e) {
                          return t.x === e[0].x && t.y === e[0].y;
                        }).length > 0)) &&
                    0 ===
                      e.filter(function (e) {
                        return t.x === e[1].x && t.y === e[1].y;
                      }).length
                  );
                })
                .sort(function (e, i) {
                  return currentTurn.turn <= 3
                    ? e.distance(t) - i.distance(t) ||
                        i.x - e.x ||
                        (n.position.y > 4 ? e.y - i.y : i.y - e.y)
                    : i.x - e.x || (n.position.y > 4 ? e.y - i.y : i.y - e.y);
                });
              o.length > 0 && e.push([n.position, { x: o[0].x, y: o[0].y }]);
            }
            for (const t of b4mUnits
              .filter(function (e) {
                return (
                  "soviet" === e.army &&
                  e.position &&
                  (e.position.x < 9 || (e.position.x >= 9 && e.position.y >= 6))
                );
              })
              .sort(function (e, t) {
                return t.position.x - e.position.x;
              }))
              aiSelectMovesToFocus(Hex({ x: t.position.x, y: t.position.y }), 1, e);
            (currentTurn.turn > 4 &&
              grid.forEach(function (t) {
                t &&
                  t.x < 9 &&
                  t.city &&
                  "soviet" === t.control &&
                  aiSelectMovesToFocus(Hex({ x: t.x, y: t.y }), 0, e);
              }),
              currentTurn.turn > 4 &&
                (aiSelectMovesToFocus(Hex({ x: 9, y: 10 }), 0, e),
                aiSelectMovesToFocus(Hex({ x: 12, y: 9 }), 0, e)));
          }
          for (const t of b4mUnits
            .filter(function (t) {
              return (
                t.army === currentTurn.army &&
                t.position &&
                t.position.x < 9 &&
                0 ===
                  e.filter(function (e) {
                    return t.position.x === e[0].x && t.position.y === e[0].y;
                  }).length
              );
            })
            .sort(function (e, t) {
              return t.position.x - e.position.x;
            })) {
            const n = grid.get(t.position);
            let i = getValidNormalDestinations(n, currentTurn.army, t.movement)
              .filter(function (t) {
                return (
                  t.x > n.x &&
                  t.x <= 10 &&
                  (!lookupUnit(t) ||
                    (lookupUnit(t) &&
                      e.filter(function (e) {
                        return t.x === e[0].x && t.y === e[0].y;
                      }).length > 0)) &&
                  0 ===
                    e.filter(function (e) {
                      return t.x === e[1].x && t.y === e[1].y;
                    }).length
                );
              })
              .sort(function (e, n) {
                return n.x - e.x || (t.position.y > 4 ? e.y - n.y : n.y - e.y);
              });
            i.length > 0 && e.push([t.position, { x: i[0].x, y: i[0].y }]);
          }
          return e;
        })();
        if (0 === e.length)
          document.getElementById("step_movement_tip").innerText =
            "The enemy has chosen to complete the turn without moving any unit.";
        else {
          document.getElementById("step_movement_tip").innerText =
            "The enemy has selected units to move in order to complete this turn.";
          for (let t = 0; t < e.length; t++)
            setTimeout(
              function () {
                (window.scrollTo(
                  grid.get(e[t][0]).toPoint().x - window.innerWidth / 2,
                  grid.get(e[t][0]).toPoint().y - window.innerHeight / 2,
                ),
                  handleMovement(e[t][0], getValidNormalDestinations),
                  handleMovement(e[t][1], getValidNormalDestinations));
              },
              2100 * (t + 1),
            );
        }
        setTimeout(function () {
          LAST_TURN === currentTurn.turn && "soviet" === currentTurn.army
            ? ((document.getElementById("next_step_movement").style.display = "none"),
              (document.getElementById("next_step_final").style.display = "block"),
              (document.getElementById("next_step_final").onclick = finalResults))
            : ((document.getElementById("next_step_final").style.display = "none"),
              (document.getElementById("next_step_movement").style.display = "block"),
              hasReinforcementStep(currentTurn.turn) && "german" === currentTurn.army
                ? (document.getElementById("next_step_movement").onclick = reinforcementPhase)
                : (document.getElementById("next_step_movement").onclick = replacementPhase));
        }, 2150 * e.length);
      }, 100));
}
let followingReinforcement = !1;
// Russian reinforcements, new partisan bands and partisan operations (one action per band and turn)
const PARTISAN_ACTIONS = [
  { id: "raid", label: "Raid", tip: "Ambush the supply columns of a German unit within 2 hexes: it gains 2 fatigue points for each strength point of the band, and cannot recover any fatigue at the start of the next German turn." },
  { id: "sabotage", label: "Sabotage rail", tip: "Cut the German supply line: blow up the railway in a hex within 1 hex. Only the Russians move by rail in this game, but the German armies lived on the railways for their ammunition, fuel and food. For the next two German turns, German units within 2 hexes of the cut gain +1 fatigue at the start of their turn and cannot recover." },
  { id: "guide", label: "Guide the army", tip: "This turn, Russian attacks on German units within 1 hex of the band gain one odds column." },
  { id: "seize", label: "Rise in a town", tip: "A German-held town within 2 hexes with no German unit in or next to it, if the bands within 2 hexes of it total 3 strength or more: roll a die; up to their total strength (at most 5) the town becomes Russian, otherwise every band taking part loses 1 strength." },
  { id: "move", label: "Move", tip: "Slip through the forests to an empty forest hex within 2 hexes." },
  { id: "recruit", label: "Recruit", tip: "+1 strength (at most 3), only with no German unit within 2 hexes." },
];
function reinforcementPhase(e) {
  e && e.stopPropagation();
  if (gateHistoryEvent(reinforcementPhase, currentTurn.turn, "soviet")) return;
  (cleanAndSaveBeforeNewPhase("reinforcementPhase"),
    (currentTurn.army = "soviet"),
    (currentTurn.phase = "replacement"),
    (currentTurn.subphase = "reinforcement"),
    (document.getElementById("step_replacement_count").innerHTML = ""),
    (document.getElementById("skip_replacement").style.display = "none"),
    (document.getElementById("undo_replacement").style.display = "none"),
    (document.getElementById("next_step_replacement").style.display = "none"),
    (document.getElementById("next_step_reinforcement").style.display = "none"),
    (document.getElementById("step_replacement").style.display = "block"),
    (document.querySelector("#step_replacement > div.hud_title > img").src =
      "img/" + currentTurn.army + "_turn.png"));
  const isHuman = "" === playAIAs || playAIAs !== currentTurn.army,
    plan = SPECIAL_ARRIVALS[currentTurn.turn] || {},
    canvas = document.getElementById("canvas_step_reinforcement"),
    tip = document.getElementById("step_replacement_tip"),
    count = document.getElementById("step_replacement_count"),
    nextButton = document.getElementById("next_step_reinforcement");
  isHuman && (document.getElementById("undo_replacement").style.display = "inline-block");
  // Every band may act once in each Russian turn; the help of the guides lasts for this turn only
  for (const e of partisans) ((e.strength = e.strength || 1), (e.acted = !1));
  partisanGuides = partisanGuides.filter(function (e) {
    return e.turn === currentTurn.turn;
  });
  raiseStayBehind();
  let units = b4mUnits.filter(function (e) {
      return (plan.units || []).indexOf(e.id) > -1 && !e.position;
    }),
    skiLeft = plan.ski || 0,
    // the NKVD brigade dropped behind the lines forms 2 bands of strength 2
    nkvdDrop = 3 === currentTurn.turn && "drop" === decisions.nkvd,
    partisansLeft = Math.max(0, Math.min((plan.partisans || 0) + (nkvdDrop ? 2 : 0), MAX_PARTISANS - partisans.length)),
    bandStrength = nkvdDrop ? 2 : 1,
    actionChoice = null,
    actionNote = "",
    selectedBand = null;
  const allHexes = function () {
      return b4mGrid.map(function (e) {
        return grid.get({ x: e.x, y: e.y });
      });
    },
    unitHexes = function () {
      return allHexes()
        .filter(function (e) {
          return e.sovietReplacement && !lookupUnit(e) && !isEZOC(e, "soviet");
        })
        .sort(function (e, t) {
          return (t.rail ? t.rail.length : 0) - (e.rail ? e.rail.length : 0) || e.y - t.y;
        });
    },
    skiCandidates = function () {
      return b4mUnits.filter(function (e) {
        return (
          "soviet" === e.army &&
          "infantry" === e.type &&
          e.position &&
          !e.ski &&
          isInCommunication(grid.get(e.position), "soviet")
        );
      });
    },
    // behind the German lines: cut off from Russian communication, or farther from Moscow than the German front
    partisanHexes = function () {
      const moscow = grid.get({ x: 10, y: 2 }),
        front = Math.min.apply(
          null,
          germanPositions().map(function (e) {
            return e.distance(moscow);
          }),
        );
      return allHexes().filter(function (e) {
        return (
          "forest" === e.terrain &&
          !lookupUnit(e) &&
          !hasPartisan(e) &&
          !isEZOC(e, "soviet") &&
          (e.distance(moscow) > front + 1 || !isInCommunication(e, "soviet"))
        );
      });
    },
    // the band giving orders: the one clicked on the map, else the first one that has not acted
    actingBand = function () {
      return selectedBand && !selectedBand.acted && partisans.indexOf(selectedBand) > -1
        ? selectedBand
        : partisans.find(function (e) {
            return !e.acted;
          }) || null;
    },
    nkvdStage = function () {
      return 3 === currentTurn.turn && "infantry" === decisions.nkvd && !nkvdDone() && nkvdCandidates().length > 0;
    },
    canRecruit = function (e) {
      return e.strength < PARTISAN_MAX_STRENGTH && 0 === germanUnitsWithin(grid.get(e), 2).length;
    },
    // Hexes an action of the band can target (empty list: the action needs no target, or is not possible)
    actionTargets = function (e, t) {
      const n = grid.get(e);
      return "raid" === t
        ? germanUnitsWithin(n, 2).map(function (e) {
            return grid.get(e.position);
          })
        : "sabotage" === t
          ? allHexes().filter(function (e) {
              const t = lookupUnit(e);
              return (
                e.rail &&
                e.rail.length > 0 &&
                n.distance(e) <= 1 &&
                !(t && "german" === t.army) &&
                !railCuts.some(function (t) {
                  return t.x === e.x && t.y === e.y;
                })
              );
            })
          : "move" === t
            ? allHexes().filter(function (e) {
                return (
                  "forest" === e.terrain &&
                  !lookupUnit(e) &&
                  !partisanAt(e) &&
                  n.distance(e) >= 1 &&
                  n.distance(e) <= 2
                );
              })
            : "seize" === t
              ? allHexes().filter(function (e) {
                  return n.distance(e) <= 2 && risingStrength(e) > 0;
                })
              : [];
    },
    actionPossible = function (e, t) {
      return "recruit" === t
        ? canRecruit(e)
        : "guide" === t || "wait" === t || actionTargets(e, t).length > 0;
    },
    stage = function () {
      return units.length > 0 && unitHexes().length > 0
        ? "units"
        : nkvdStage()
          ? "nkvd"
          : skiLeft > 0 && skiCandidates().length > 0
          ? "ski"
          : partisansLeft > 0 && partisanHexes().length > 0
            ? "partisans"
            : actingBand()
              ? "actions"
              : "done";
    },
    germanPositions = function () {
      return b4mUnits
        .filter(function (e) {
          return "german" === e.army && e.position;
        })
        .map(function (e) {
          return Hex(e.position);
        });
    },
    distanceToGermans = function (e) {
      let t = 99;
      for (const n of germanPositions()) t = Math.min(t, e.distance(n));
      return t;
    },
    hexLabel = function (e) {
      return String(e.x + 1).padStart(2, "0") + String(e.y + 1).padStart(2, "0");
    },
    doAction = function (e, t, n) {
      if ("raid" === t) {
        const t = lookupUnit(n),
          i = b4mUnits[b4mUnitsIndex(t)],
          o = i.fatigue || 0;
        (addFatigue(t, 2 * e.strength),
          // the supply columns are lost: no rest at the start of the next German turn
          (i.raided = currentTurn.turn + 1),
          (actionNote =
            "Partisans ambush the supply columns of the " +
            unitName(t) +
            ": fatigue " +
            o +
            " \u2192 " +
            (i.fatigue || 0) +
            " (" +
            ["fresh", "tired", "exhausted", "broken"][fatigueLevel(i)] +
            "), and it cannot rest next turn."));
      } else
        "sabotage" === t
          ? (railCuts.push({ x: n.x, y: n.y, until: currentTurn.turn + 2 }),
            (actionNote = "Partisans blow up the railway at " + hexLabel(n) + "."))
          : "guide" === t
            ? (partisanGuides.push({ x: e.x, y: e.y, turn: currentTurn.turn }),
              (actionNote = "Partisans will guide the Red Army around " + hexLabel(e) + " this turn."))
            : "move" === t
              ? ((e.x = n.x), (e.y = n.y), (actionNote = "A partisan band moves to " + hexLabel(n) + "."))
              : "recruit" === t
                ? ((e.strength = Math.min(PARTISAN_MAX_STRENGTH, e.strength + 1)),
                  (actionNote = "A partisan band grows to strength " + e.strength + "."))
                : "seize" === t
                  ? (actionNote = announceRising(partisanRising(n)))
                  : (actionNote = "");
      ((e.acted = !0), (actionChoice = null), drawPartisans(), scheduleStatusRefresh(), refresh());
    },
    actionButtons = function (e) {
      count.innerHTML = "";
      const t = document.createElement("div");
      t.className = "partisan_actions";
      for (const n of PARTISAN_ACTIONS) {
        const i = document.createElement("span"),
          o = actionPossible(e, n.id);
        ((i.className = "partisan_action" + (o ? "" : " disabled") + (actionChoice === n.id ? " chosen" : "")),
          (i.innerText = n.label),
          (i.title = n.tip),
          o &&
            (i.onclick = function (t) {
              (t.stopPropagation(),
                "guide" === n.id || "recruit" === n.id || "wait" === n.id
                  ? doAction(e, n.id, null)
                  : ((actionChoice = n.id), refresh()));
            }),
          t.appendChild(i));
      }
      count.appendChild(t);
      const n = document.createElement("div");
      ((n.className = "partisan_hint"),
        (n.innerText = actionChoice
          ? PARTISAN_ACTIONS.find(function (e) {
              return e.id === actionChoice;
            }).tip + " Click a highlighted hex."
          : actionNote),
        count.appendChild(n));
    },
    refresh = function () {
      hexHighlights.clearRect(0, 0, canvasHexHighlights.width, canvasHexHighlights.height);
      const e = stage();
      let t = [];
      if ("units" === e)
        ((t = unitHexes()),
          (tip.innerText = isHuman
            ? isWinterTurn()
              ? "The Stavka reserves are committed! Place the reinforcement units in the eligible area of the map (red-bordered edge)."
              : "Place the reinforcement unit in the eligible area of the map."
            : "The enemy places the reinforcement units in the eligible area of the map."),
          (count.innerHTML = ""),
          drawAvailableUnits(canvas, units),
          (canvas.style.display = "block"));
      else if ("nkvd" === e)
        ((t = nkvdCandidates().map(function (e) {
          return grid.get(e.position);
        })),
          (canvas.style.display = "none"),
          (tip.innerText = isHuman
            ? "The NKVD brigade joins the line: click a half-strength infantry army in communication (highlighted). It becomes a shock army, 5-4 now and 10-4 once restored."
            : "The NKVD brigade joins an army in the line."),
          (count.innerHTML = ""));
      else if ("ski" === e)
        ((t = skiCandidates().map(function (e) {
          return grid.get(e.position);
        })),
          (tip.innerText = isHuman
            ? "Ski battalions arrive: select infantry armies in communication to reinforce them (optional). In winter, ski-reinforced armies move through forests at 1 MP per hex and ignore the forest shift when they attack."
            : "The enemy reinforces infantry armies with ski battalions."),
          (count.innerHTML = "Ski battalions left: <strong>" + skiLeft + "</strong>"),
          drawReinforcementTokens(canvas, "ski", skiLeft));
      else if ("partisans" === e)
        ((t = partisanHexes()),
          (tip.innerText = isHuman
            ? (nkvdDrop
                ? "The NKVD detachments parachute behind the German lines: place them as partisan bands of strength 2"
                : "New partisan bands form behind the German lines: place them") +
              " on forest hexes behind the German lines, not next to German units (optional)."
            : nkvdDrop
              ? "The NKVD detachments parachute behind the German lines."
              : "New partisan bands form behind the German lines."),
          (count.innerHTML = "New bands left: <strong>" + partisansLeft + "</strong>"),
          drawReinforcementTokens(canvas, "partisans", partisansLeft));
      else if ("actions" === e) {
        const e = actingBand();
        ((canvas.style.display = "none"),
          highlightHex(hexHighlights, grid.get(e), "rgba(255, 215, 0, 0.55)"),
          partisans.forEach(function (t) {
            t.acted || t === e || highlightHex(hexHighlights, grid.get(t), "rgba(255, 215, 0, 0.22)");
          }),
          (t = actionChoice ? actionTargets(e, actionChoice) : []),
          (tip.innerText = isHuman
            ? "Partisan band at " + hexLabel(e) + " (strength " + e.strength + "): choose its action for this turn. Click another band to give it its orders first; click Next when you are done."
            : "Partisan operations behind the German lines."),
          isHuman ? actionButtons(e) : (count.innerText = actionNote));
      } else
        ((tip.innerText = isHuman
          ? "All the reinforcements have been deployed and the partisans have acted."
          : "The enemy has deployed its reinforcements and its partisans have acted."),
          (count.innerText = actionNote),
          (canvas.style.display = "none"));
      for (const n of t) highlightHex(hexHighlights, n);
      // The arriving units must be placed; everything else is optional for a human player
      (isHuman ? "units" !== e && "nkvd" !== e : "done" === e)
        ? ((followingReinforcement = !0),
          (nextButton.style.display = "block"),
          (nextButton.onclick = replacementPhase))
        : (nextButton.style.display = "none");
    },
    act = function (e) {
      if (!e) return;
      const t = stage(),
        n = e.center().add(e.toPoint());
      if ("units" === t) {
        if (
          !unitHexes().some(function (t) {
            return t.equals(e);
          })
        )
          return;
        const i = units.shift();
        ((i.position = { x: e.x, y: e.y }), drawUnit(board, i, n.x - 30, n.y - 30));
      } else if ("nkvd" === t) {
        const t = lookupUnit(e);
        if (
          !t ||
          !nkvdCandidates().some(function (e) {
            return e.id === t.id;
          })
        )
          return;
        const i = b4mUnits[b4mUnitsIndex(t)];
        (convertToShockArmy(i),
          drawUnit(board, i, n.x - 30, n.y - 30),
          (actionNote = "The NKVD brigade joins the " + unitName(i) + "."));
      } else if ("ski" === t) {
        const t = lookupUnit(e);
        if (
          !t ||
          !skiCandidates().some(function (e) {
            return e.id === t.id;
          })
        )
          return;
        const i = b4mUnits[b4mUnitsIndex(t)];
        ((i.ski = !0), skiLeft--, drawUnit(board, i, n.x - 30, n.y - 30));
      } else if ("partisans" === t) {
        if (
          !partisanHexes().some(function (t) {
            return t.equals(e);
          })
        )
          return;
        // a new band organises itself: it acts from the next turn on
        (partisans.push({ x: e.x, y: e.y, strength: bandStrength, acted: !0 }), partisansLeft--, drawPartisans());
      } else {
        if ("actions" !== t) return;
        // clicking another band gives it the orders
        const band = partisanAt(e);
        if (band && !band.acted && band !== actingBand())
          return ((selectedBand = band), (actionChoice = null), void refresh());
        if (!actionChoice) return;
        const n = actingBand();
        if (
          !actionTargets(n, actionChoice).some(function (t) {
            return t.equals(e);
          })
        )
          return;
        return void doAction(n, actionChoice, e);
      }
      refresh();
    };
  if (
    ((handleReinforcementClick = function (e) {
      "counters_highlights" === e.target.id && act(grid.get(Grid.pointToHex(e.offsetX, e.offsetY)));
    }),
    refresh(),
    isHuman)
  )
    document.addEventListener("click", handleReinforcementClick);
  else {
    const e = {};
    reinforcementAIToken = e;
    const t = function () {
      if (reinforcementAIToken !== e || "reinforcement" !== currentTurn.subphase) return;
      const n = stage();
      let i = null;
      if ("units" === n) {
        const e = unitHexes();
        i = isWinterTurn()
          ? e.sort(function (e, t) {
              return distanceToGermans(e) - distanceToGermans(t);
            })[0]
          : e[0];
      } else if ("nkvd" === n)
        i = nkvdCandidates()
          .map(function (e) {
            return grid.get(e.position);
          })
          .sort(function (e, t) {
            return distanceToGermans(e) - distanceToGermans(t);
          })[0];
      else if ("ski" === n)
        i = skiCandidates()
          .map(function (e) {
            return grid.get(e.position);
          })
          .sort(function (e, t) {
            return distanceToGermans(e) - distanceToGermans(t);
          })[0];
      else if ("partisans" === n) {
        const e = function (e) {
          return germanPositions().filter(function (t) {
            return e.distance(t) <= 3;
          }).length;
        };
        i = partisanHexes().sort(function (t, n) {
          return e(n) - e(t);
        })[0];
      } else if ("actions" === n) {
        // the computer raids the strongest German unit in reach, else cuts a railway, else recruits
        const e = actingBand(),
          n = actionTargets(e, "raid")
            .map(function (e) {
              return lookupUnit(e);
            })
            .sort(function (e, t) {
              return (
                ("full" === t.strength ? t.combatFull : t.combatReduced) -
                ("full" === e.strength ? e.combatFull : e.combatReduced)
              );
            })[0],
          o = actionTargets(e, "sabotage")[0],
          s = actionTargets(e, "seize")[0];
        return (
          s
            ? doAction(e, "seize", s)
            : n
            ? doAction(e, "raid", grid.get(n.position))
            : o
              ? doAction(e, "sabotage", o)
              : doAction(e, canRecruit(e) ? "recruit" : "wait", null),
          void setTimeout(t, 1500)
        );
      }
      i &&
        (window.scrollTo(
          i.toPoint().x - window.innerWidth / 2,
          i.toPoint().y - window.innerHeight / 2,
        ),
        act(i),
        setTimeout(t, 1500));
    };
    setTimeout(t, 1500);
  }
}
const isInCommunication = function (e, t) {
  let n = Hex(grid.get(e));
  if ("soviet" === t ? n.sovietReplacement : n.germanReplacement) return !0;
  // Russian units in or next to a partisan hex are supplied by the partisans
  if ("soviet" === t && nearPartisans(n)) return !0;
  const i = "soviet" === t ? 10 * (13 - n.x) : 10 * n.x,
    o = "german" === t ? "soviet" : "german";
  ((n.credit = i), (n.path = []));
  let r = [n],
    a = [n],
    l = 0;
  for (; r.length > 0; ) {
    let e = r.shift();
    l++;
    const n = "soviet" === t ? e.sovietReplacement : e.germanReplacement,
      i = lookupUnit(e);
    if (l > 1 && n && (!i || i.army === t) && !isEZOC(e, t) && !("german" === t && hasPartisan(e)))
      return !0;
    for (const n of grid.neighborsOf(e)) {
      let i = Hex(n);
      if (i && "off" !== i.terrain) {
        i.credit = e.credit - 1;
        let n = lookupUnit(i);
        (n && n.army === o && (i.credit = -1),
          isEZOC(i, t) && i.credit > -1 && (i.credit = 0),
          // Partisans cut German lines of communication through their own hex only: a band has no zone of control
          "german" === t && hasPartisan(i) && (i.credit = -1));
        let l = indexOfHex(i, a);
        l < 0
          ? i.credit > -1 &&
            (a.push(i), (i.path = e.path.slice()), i.path.push({ x: e.x, y: e.y }), r.push(i))
          : i.credit > a[l].credit &&
            ((a[l].credit = i.credit),
            (i.path = e.path.slice()),
            i.path.push({ x: e.x, y: e.y }),
            r.push(i));
      }
    }
  }
  return !1;
};
function replacementPhase(e) {
  e && e.stopPropagation();
  // the side and turn that are about to start
  const nextArmy = "german" === currentTurn.army || followingReinforcement ? "soviet" : "german",
    nextTurn = "german" === currentTurn.army || followingReinforcement ? currentTurn.turn : currentTurn.turn + 1;
  if (gateHistoryEvent(replacementPhase, nextTurn, nextArmy, !0)) return;
  (cleanAndSaveBeforeNewPhase("replacementPhase"),
    "german" === currentTurn.army
      ? (currentTurn.army = "soviet")
      : (followingReinforcement ||
          (currentTurn.turn++, setTurnInfo(), (currentTurn.army = "german")),
        (followingReinforcement = !1)),
    (currentTurn.phase = "replacement"),
    (currentTurn.subphase = "standard"),
    processTurnFatigue(currentTurn.army),
    runPendingDecision(),
    (document.getElementById("step_replacement").style.display = "block"),
    (document.getElementById("next_step_reinforcement").style.display = "none"),
    (document.querySelector("#step_replacement > div.hud_title > img").src =
      "img/" + currentTurn.army + "_turn.png"),
    "" === playAIAs || playAIAs !== currentTurn.army
      ? ((document.getElementById("step_replacement_tip").innerText =
          "Place new half-strength units in the eligible area of the map or flip a half-strength unit that is currently on the map over to its full-strength side."),
        (document.getElementById("skip_replacement").style.display = "block"),
        (document.getElementById("undo_replacement").style.display = "inline-block"))
      : ((document.getElementById("step_replacement_tip").innerText =
          "The enemy places new half-strength units in the eligible area of the map or flips half-strength units that are currently on the map over to their full-strength side."),
        (document.getElementById("skip_replacement").style.display = "none"),
        (document.getElementById("undo_replacement").style.display = "none")),
    (document.getElementById("skip_to_special_movement").onclick = function () {
      ((document.getElementById("next_step_replacement").style.display = this.checked
        ? "block"
        : "none"),
        (document.getElementById("next_step_replacement").onclick = specialMovementPhase),
        (document.getElementById("undo_replacement").style.display = this.checked
          ? "none"
          : "inline-block"));
    }));
  let t = 0;
  t =
    "soviet" === currentTurn.army
      ? Math.max(
          0,
          (3 === currentTurn.turn || 4 === currentTurn.turn ? 4 : 5) +
            takeLiberationBonus() +
            decisionReplacements(currentTurn.turn, "soviet"),
        )
      : Math.max(0, 1 + decisionReplacements(currentTurn.turn, "german"));
  const n = function () {
    t > 0
      ? "" === playAIAs || playAIAs !== currentTurn.army
        ? (document.getElementById("step_replacement_count").innerHTML =
            "You have <strong>" +
            t +
            "</strong> replacement step" +
            (t > 1 ? "s" : "") +
            " left to assign.")
        : (document.getElementById("step_replacement_count").innerHTML =
            "The enemy has <strong>" +
            t +
            "</strong> replacement step" +
            (t > 1 ? "s" : "") +
            " left to assign.")
      : ("" === playAIAs || playAIAs !== currentTurn.army
          ? (document.getElementById("step_replacement_count").innerHTML =
              "You have finished assigning your replacements.")
          : (document.getElementById("step_replacement_count").innerHTML =
              "The enemy has finished assigning replacements."),
        (document.getElementById("skip_replacement").style.display = "none"),
        (document.getElementById("next_step_replacement").style.display = "block"),
        (document.getElementById("next_step_replacement").onclick = specialMovementPhase));
  };
  n();
  const i = function () {
    let e = b4mUnits
      .filter(function (e) {
        return (
          e.army === currentTurn.army && currentTurn.turn > arrivalTurnOf(e.id) && !e.position
        );
      })
      .sort(function (e, t) {
        return ("infantry" === e.type && "tank" === t.type) || "shock" === t.type
          ? 1
          : ("tank" === e.type && "infantry" === t.type) || "shock" === e.type
            ? -1
            : t.combatFull - e.combatFull;
      });
    return 0 === e.length ? null : ((e[0].strength = "reduced"), (e[0].ski = !1), (e[0].fatigue = 0), e[0]);
  };
  let o = [];
  i() &&
    (o = b4mGrid
      .filter(function (e) {
        let t = grid.get({ x: e.x, y: e.y }),
          n = !1;
        return (
          !("soviet" === currentTurn.army ? t.sovietReplacement : t.germanReplacement) ||
          lookupUnit(t) ||
          isEZOC(t, currentTurn.army)
            ? t.city &&
              "none" !== t.city &&
              t.control === currentTurn.army &&
              !lookupUnit(t) &&
              (("soviet" === currentTurn.army && "moscow" === t.city) ||
                isInCommunication(t, currentTurn.army)) &&
              (highlightHex(hexHighlights, t), (n = !0))
            : (highlightHex(hexHighlights, t), (n = !0)),
          n
        );
      })
      .sort(function (e, t) {
        let n = 0;
        switch (e.city) {
          case "moscow":
            n = 3;
            break;
          case "major":
            n = 2;
            break;
          case "normal":
            n = 1;
        }
        let i = 0;
        switch (t.city) {
          case "moscow":
            i = 3;
            break;
          case "major":
            i = 2;
            break;
          case "normal":
            i = 1;
        }
        return i - n || e.y - t.y;
      }));
  // a step can also rest a full-strength unit in communication: it loses all its fatigue
  const restable = function (e) {
    return (
      e.army === currentTurn.army &&
      "full" === e.strength &&
      e.position &&
      (e.fatigue || 0) > 0 &&
      (("soviet" === currentTurn.army && "moscow" === grid.get(e.position).city) ||
        isInCommunication(Hex(e.position), currentTurn.army))
    );
  };
  for (const e of b4mUnits) restable(e) && highlightHex(hexHighlights, Hex(e.position), "rgba(255, 196, 90, 0.35)");
  ("" === playAIAs || playAIAs !== currentTurn.army) &&
    (document.getElementById("step_replacement_tip").innerText +=
      (0 === o.length
        ? " No unit of yours is off the map to be rebuilt now, so a step can only restore a half-strength unit in communication or rest a tired full-strength one."
        : "") + " A step spent on a full-strength unit in communication (orange) clears all its fatigue.");
  let r = b4mUnits.filter(function (e) {
    return (
      !(
        e.army !== currentTurn.army ||
        "reduced" !== e.strength ||
        !e.position ||
        !(
          ("soviet" === currentTurn.army && "moscow" === grid.get(e.position).city) ||
          isInCommunication(Hex(e.position), currentTurn.army)
        )
      ) && (highlightHex(hexHighlights, Hex(e.position)), !0)
    );
  });
  const a = function (e) {
    if (e && e.x >= 0 && e.y >= 0) {
      const a = Hex(grid.get(e)),
        l = lookupUnit(a);
      if (a && t > 0) {
        let e = -1;
        for (let t = 0; t < o.length; t++)
          if (Hex(o[t]).equals(a)) {
            e = t;
            break;
          }
        if (e > -1) {
          let r = i();
          if (r) {
            clearHex(hexHighlights, a);
            let i = a.center().add(a.toPoint());
            ((r.position = { x: a.x, y: a.y }),
              drawUnit(board, r, i.x - 30, i.y - 30),
              countersHighlights.drawImage(
                document.getElementById("check_counter"),
                i.x - 40,
                i.y - 40,
                80,
                80,
              ),
              o.splice(e, 1),
              t--,
              n());
          }
        } else if (l && l.army === currentTurn.army) {
          let e = -1;
          for (let t = 0; t < r.length; t++)
            if (Hex(r[t].position).equals(a)) {
              e = t;
              break;
            }
          if (e > -1) {
            ((r[e].strength = "full"), (b4mUnits[b4mUnitsIndex(r[e])].fatigue = 0), clearHex(hexHighlights, a));
            let i = a.center().add(a.toPoint());
            (drawUnit(board, r[e], i.x - 30, i.y - 30),
              countersHighlights.drawImage(
                document.getElementById("check_counter"),
                i.x - 40,
                i.y - 40,
                80,
                80,
              ),
              r.splice(e, 1),
              t--,
              n());
          } else {
            const e = b4mUnits[b4mUnitsIndex(l)];
            if (e && restable(e)) {
              ((e.fatigue = 0), clearHex(hexHighlights, a));
              const i = a.center().add(a.toPoint());
              (countersHighlights.drawImage(document.getElementById("check_counter"), i.x - 40, i.y - 40, 80, 80),
                scheduleStatusRefresh(),
                t--,
                n());
            }
          }
        }
      }
    }
  };
  handleReplacementClick = function (e) {
    const t = Grid.pointToHex(e.offsetX, e.offsetY);
    a(t);
  };
  if ("" === playAIAs || playAIAs !== currentTurn.army)
    document.addEventListener("click", handleReplacementClick);
  else {
    const e = (function () {
      let e = [];
      ((isStrategicCityHex = function (e, t) {
        if (
          (10 === e && 2 === t) ||
          (10 === e && 6 === t) ||
          (currentTurn.turn > 1 && 13 === e && 5 === t) ||
          (currentTurn.turn < 4 && 7 === e && 3 === t)
        )
          return !0;
      }),
        (isStrategicMoscowAreaHex = function (e, t) {
          return Hex({ x: e, y: t }).distance(Hex({ x: 10, y: 2 })) < 2;
        }),
        (isStrategicTulaAreaHex = function (e, t) {
          return Hex({ x: e, y: t }).distance(Hex({ x: 10, y: 6 })) < 2;
        }),
        (isStrategicRyazanAreaHex = function (e, t) {
          return Hex({ x: e, y: t }).distance(Hex({ x: 13, y: 5 })) < 2;
        }),
        (isStrategicRailwayHex = function (e, t) {
          return (
            (13 === e && 3 === t) ||
            (13 === e && 2 === t) ||
            (13 === e && 1 === t) ||
            (11 === e && 1 === t) ||
            (11 === e && 3 === t) ||
            (12 === e && 0 === t)
          );
        }),
        "soviet" === currentTurn.army
          ? r.sort(function (e, t) {
              return e.position.x - t.position.x;
            })
          : r.sort(function (e, t) {
              return t.combatFull - e.combatFull || t.position.x - e.position.x;
            }),
        "soviet" === currentTurn.army
          ? o.sort(function (e, t) {
              return e.y - t.y;
            })
          : o.sort(function (e, t) {
              return t.x - e.x;
            }));
      for (const n of r) {
        if (e.length === t) break;
        isStrategicCityHex(n.position.x, n.position.y) &&
          0 ===
            e.filter(function (e) {
              return n.position.x === e.x && n.position.y === e.y;
            }).length &&
          e.push({ x: n.position.x, y: n.position.y });
      }
      for (const n of o) {
        if (e.length === t) break;
        isStrategicCityHex(n.x, n.y) &&
          0 ===
            e.filter(function (e) {
              return n.x === e.x && n.y === e.y;
            }).length &&
          e.push({ x: n.x, y: n.y });
      }
      for (const n of r) {
        if (e.length === t) break;
        isStrategicMoscowAreaHex(n.position.x, n.position.y) &&
          0 ===
            e.filter(function (e) {
              return n.position.x === e.x && n.position.y === e.y;
            }).length &&
          e.push({ x: n.position.x, y: n.position.y });
      }
      for (const n of r) {
        if (e.length === t) break;
        isStrategicTulaAreaHex(n.position.x, n.position.y) &&
          0 ===
            e.filter(function (e) {
              return n.position.x === e.x && n.position.y === e.y;
            }).length &&
          e.push({ x: n.position.x, y: n.position.y });
      }
      for (const n of r) {
        if (e.length === t) break;
        isStrategicRyazanAreaHex(n.position.x, n.position.y) &&
          0 ===
            e.filter(function (e) {
              return n.position.x === e.x && n.position.y === e.y;
            }).length &&
          e.push({ x: n.position.x, y: n.position.y });
      }
      if ("soviet" === currentTurn.army) {
        for (const n of r) {
          if (e.length === t) break;
          isStrategicRailwayHex(n.position.x, n.position.y) &&
            0 ===
              e.filter(function (e) {
                return n.position.x === e.x && n.position.y === e.y;
              }).length &&
            e.push({ x: n.position.x, y: n.position.y });
        }
        for (const n of o) {
          if (e.length === t) break;
          isStrategicRailwayHex(n.x, n.y) &&
            0 ===
              e.filter(function (e) {
                return n.x === e.x && n.y === e.y;
              }).length &&
            e.push({ x: n.x, y: n.y });
        }
      }
      let n = i(),
        a =
          "german" === currentTurn.army &&
          r.length > 0 &&
          "infantry" === r[0].type &&
          n &&
          "tank" === n.type;
      if ("soviet" === currentTurn.turn || !a)
        for (const n of r) {
          if (e.length === t) break;
          0 ===
            e.filter(function (e) {
              return n.position.x === e.x && n.position.y === e.y;
            }).length && e.push({ x: n.position.x, y: n.position.y });
        }
      for (const n of o) {
        if (e.length === t) break;
        0 ===
          e.filter(function (e) {
            return n.x === e.x && n.y === e.y;
          }).length && e.push({ x: n.x, y: n.y });
      }
      return e;
    })();
    if (0 === e.length) ((t = 0), n());
    else
      for (let i = 0; i < e.length; i++)
        setTimeout(
          function () {
            (window.scrollTo(
              grid.get(e[i]).toPoint().x - window.innerWidth / 2,
              grid.get(e[i]).toPoint().y - window.innerHeight / 2,
            ),
              a(e[i]),
              i === e.length - 1 && t > 0 && ((t = 0), n()));
          },
          1e3 * (i + 1),
        );
  }
}
function getValidRailDestinations(e, t, n) {
  let i = Hex(e),
    o = [];
  if (i.rail && i.rail.length > 0) {
    const e = "german" === t ? "soviet" : "german";
    ((i.credit = n), (i.path = []));
    let r = [i],
      a = [i],
      l = 0;
    for (; r.length > 0; ) {
      let n = r.shift();
      (l++, l > 1 && o.push(n));
      let i = grid.neighborsOf(n),
        s = [];
      for (const e of n.rail) s.push(i[toNeighborsDirections.indexOf(e)]);
      for (const i of s) {
        let o = Hex(i);
        if (o && "off" !== o.terrain) {
          o.credit = n.credit - 1;
          let i = lookupUnit(o);
          (i && i.army === e && (o.credit = -1), isEZOC(o, t) && o.credit > -1 && (o.credit = 0));
          let l = indexOfHex(o, a);
          l < 0
            ? o.credit > -1 &&
              (a.push(o), (o.path = n.path.slice()), o.path.push({ x: n.x, y: n.y }), r.push(o))
            : o.credit > a[l].credit &&
              ((a[l].credit = o.credit),
              (o.path = n.path.slice()),
              o.path.push({ x: n.x, y: n.y }),
              r.push(o));
        }
      }
    }
  }
  return o;
}
function getValidPanzerDestinations(e, t, n) {
  const i = lookupUnit(e);
  return i && "german" === i.army && "tank" === i.type ? getValidNormalDestinations(e, t, n) : [];
}
function specialMovementPhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("specialMovementPhase"),
    (currentTurn.phase = "special movement"),
    (currentTurn.subphase = ""),
    (document.getElementById("step_special_movement").style.display = "block"),
    (document.querySelector("#step_special_movement > div.hud_title > img").src =
      "img/" + currentTurn.army + "_turn.png"));
  const t =
    "soviet" === currentTurn.army
      ? "All units that begin this phase on a rail line may move along it."
      : "All armor/panzer units may move.";
  ("" === playAIAs || playAIAs !== currentTurn.army
    ? ((document.getElementById("step_special_movement_tip").innerText =
        t + " Select the ones you choose to move and their destination."),
      (document.getElementById("skip_special_movement").style.display = "block"),
      (document.getElementById("skip_to_combat").onclick = function () {
        ((document.getElementById("next_step_special_movement").style.display = this.checked
          ? "block"
          : "none"),
          (document.getElementById("next_step_special_movement").onclick = combatAnnouncePhase),
          (document.getElementById("undo_special_movement").style.display = this.checked
            ? "none"
            : "inline-block"));
      }),
      (document.getElementById("undo_special_movement").style.display = "inline-block"))
    : ((document.getElementById("step_special_movement_tip").innerText = ""),
      (document.getElementById("skip_special_movement").style.display = "none"),
      (document.getElementById("undo_special_movement").style.display = "none")),
    (hexSelected = null),
    (available = []),
    (hasMoved = []),
    (handleSpecialMovementClick = function (e) {
      const t = Grid.pointToHex(e.offsetX, e.offsetY);
      "soviet" === currentTurn.army
        ? handleMovement(t, getValidRailDestinations)
        : handleMovement(t, getValidPanzerDestinations);
    }));
  "" === playAIAs || playAIAs !== currentTurn.army
    ? document.addEventListener("click", handleSpecialMovementClick)
    : ((document.getElementById("step_special_movement_tip").innerHTML =
        '<i class="fa fa-spinner fa-spin" style="font-size: 2.5em; margin-left: 12px;"></i>'),
      setTimeout(function () {
        const e =
          "soviet" === currentTurn.army
            ? (function () {
                let e = [];
                const t = function (t) {
                    let n = b4mUnits
                        .filter(function (e) {
                          return (
                            "german" === e.army && e.position && Hex(e.position).distance(t) < 2
                          );
                        })
                        .sort(function (e, n) {
                          const i = "full" === e.strength ? e.combatFull : e.combatReduced,
                            o = "full" === n.strength ? n.combatFull : n.combatReduced;
                          return Hex(e.position).distance(t) - Hex(n.position).distance(t) || i - o;
                        }),
                      i = [];
                    for (const o of n) {
                      let n = [],
                        r = [];
                      const a = grid.get(o.position),
                        l = grid.neighborsOf(a);
                      for (const e of l) {
                        if (!e) continue;
                        let a = !1;
                        for (const t of i)
                          if (e.x === t.x && e.y === t.y) {
                            a = !0;
                            break;
                          }
                        if (!a && (i.push(e), e && e.rail.length > 0 && !lookupUnit(e))) {
                          let i = getValidRailDestinations(e, "soviet", 4)
                            .filter(function (e) {
                              let n = lookupUnit(e);
                              return (
                                n &&
                                "soviet" === n.army &&
                                Hex(n.position).distance(t) > Hex(o.position).distance(t) &&
                                Hex(n.position).distance(Hex({ x: 10, y: 2 })) > 1
                              );
                            })
                            .sort(function (e, t) {
                              const n = lookupUnit(e),
                                i = lookupUnit(t),
                                o = "full" === n.strength ? n.combatFull : n.combatReduced;
                              return ("full" === i.strength ? i.combatFull : i.combatReduced) - o;
                            });
                          i.length > 0 && (n.push(e), r.push(i));
                        }
                      }
                      for (let t = 0; t < r.length; t++)
                        for (const i of r[t]) {
                          isInCoords = !1;
                          for (const t of e)
                            if (i.x === t[0].x && i.y === t[0].y) {
                              isInCoords = !0;
                              break;
                            }
                          if (!isInCoords) {
                            e.push([
                              { x: i.x, y: i.y },
                              { x: n[t].x, y: n[t].y },
                            ]);
                            break;
                          }
                        }
                    }
                  },
                  n = function (t, n) {
                    let i = Hex(t),
                      o = lookupUnit(i),
                      r = Hex(n),
                      a = lookupUnit(r);
                    o &&
                      "soviet" === o.army &&
                      0 ===
                        e.filter(function (e) {
                          return i.x === e[0].x && i.y === e[0].y;
                        }).length &&
                      !a &&
                      0 ===
                        e.filter(function (e) {
                          return r.x === e[1].x && r.y === e[1].y;
                        }).length &&
                      e.push([t, n]);
                  };
                (t(Hex({ x: 10, y: 2 })),
                  n({ x: 13, y: 3 }, { x: 12, y: 3 }),
                  n({ x: 12, y: 0 }, { x: 11, y: 1 }),
                  n({ x: 13, y: 1 }, { x: 12, y: 1 }),
                  n({ x: 13, y: 2 }, { x: 12, y: 2 }),
                  t(Hex({ x: 13, y: 5 })),
                  t(Hex({ x: 10, y: 6 })));
                for (const t of b4mUnits
                  .filter(function (t) {
                    return (
                      t.army === currentTurn.army &&
                      t.position &&
                      t.position.x < 9 &&
                      0 ===
                        e.filter(function (e) {
                          return t.position.x === e[0].x && t.position.y === e[0].y;
                        }).length
                    );
                  })
                  .sort(function (e, t) {
                    return t.position.x - e.position.x;
                  })) {
                  const n = grid.get(t.position);
                  let i = getValidRailDestinations(n, currentTurn.army, t.movement)
                    .filter(function (t) {
                      return (
                        t.x > n.x &&
                        t.x <= 10 &&
                        (!lookupUnit(t) ||
                          (lookupUnit(t) &&
                            e.filter(function (e) {
                              return t.x === e[0].x && t.y === e[0].y;
                            }).length > 0)) &&
                        0 ===
                          e.filter(function (e) {
                            return t.x === e[1].x && t.y === e[1].y;
                          }).length
                      );
                    })
                    .sort(function (e, n) {
                      return n.x - e.x || (t.position.y > 4 ? e.y - n.y : n.y - e.y);
                    });
                  i.length > 0 && e.push([t.position, { x: i[0].x, y: i[0].y }]);
                }
                return e;
              })()
            : (function () {
                let e = [],
                  t = Hex({ x: 10, y: 2 }),
                  n = lookupUnit(t);
                (aiSelectMovesToFocus(t, n && "german" === n.army ? 1 : 2, e, "tank"),
                  aiSelectMovesToFocus(Hex({ x: 10, y: 6 }), 1, e, "tank"),
                  aiSelectMovesToFocus(Hex({ x: 13, y: 5 }), 1, e, "tank"));
                for (const t of b4mUnits
                  .filter(function (t) {
                    return (
                      t.army === currentTurn.army &&
                      "tank" === t.type &&
                      t.position &&
                      t.position.x < 9 &&
                      0 ===
                        e.filter(function (e) {
                          return t.position.x === e[0].x && t.position.y === e[0].y;
                        }).length
                    );
                  })
                  .sort(function (e, t) {
                    return t.position.x - e.position.x;
                  })) {
                  const n = grid.get(t.position);
                  let i = getValidNormalDestinations(n, currentTurn.army, t.movement)
                    .filter(function (t) {
                      return (
                        t.x > n.x &&
                        t.x <= 10 &&
                        (!lookupUnit(t) ||
                          (lookupUnit(t) &&
                            e.filter(function (e) {
                              return t.x === e[0].x && t.y === e[0].y;
                            }).length > 0)) &&
                        0 ===
                          e.filter(function (e) {
                            return t.x === e[1].x && t.y === e[1].y;
                          }).length
                      );
                    })
                    .sort(function (e, n) {
                      return n.x - e.x || (t.position.y > 4 ? e.y - n.y : n.y - e.y);
                    });
                  i.length > 0 && e.push([t.position, { x: i[0].x, y: i[0].y }]);
                }
                return e;
              })();
        if (0 === e.length)
          document.getElementById("step_special_movement_tip").innerText =
            t + " But the enemy has decided not to use this capability during this phase.";
        else {
          document.getElementById("step_special_movement_tip").innerText = t;
          for (let t = 0; t < e.length; t++)
            setTimeout(
              function () {
                (window.scrollTo(
                  grid.get(e[t][1]).toPoint().x - window.innerWidth / 2,
                  grid.get(e[t][1]).toPoint().y - window.innerHeight / 2,
                ),
                  handleMovement(
                    e[t][0],
                    "soviet" === currentTurn.army
                      ? getValidRailDestinations
                      : getValidNormalDestinations,
                  ),
                  handleMovement(
                    e[t][1],
                    "soviet" === currentTurn.army
                      ? getValidRailDestinations
                      : getValidNormalDestinations,
                  ));
              },
              2e3 * (t + 1),
            );
        }
        setTimeout(function () {
          ((document.getElementById("next_step_special_movement").style.display = "block"),
            (document.getElementById("next_step_special_movement").onclick = combatAnnouncePhase));
        }, 2050 * e.length);
      }, 100));
}
function finalResults(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("finalResults"),
    (currentTurn.phase = "game over"),
    (currentTurn.subphase = ""),
    (document.getElementById("final_results").style.display = "block"));
  let t = "",
    n = "",
    i = "",
    o = "",
    r = 0;
  for (const e of grid)
    if (e && e.city && "moscow" === e.city) {
      i = e.control;
      break;
    }
  if (tournamentMode) {
    let e = grid.get({ x: 10, y: 6 }).control;
    "german" === i && "german" === e
      ? ((o = "german"),
        (r = 3),
        (t = '<img src="img/german_marker.png" /><span>German Decisive Victory!</span>'),
        (n =
          "The German Army wins <strong>3 points</strong> because it controls Moscow and Tula at the end of Game Turn " + LAST_TURN + "."))
      : "german" === i && "soviet" === e
        ? ((o = "german"),
          (r = 2),
          (t = '<img src="img/german_marker.png" /><span>German Major Victory!</span>'),
          (n =
            "The German Army wins <strong>2 points</strong> because it controls Moscow at the end of Game Turn " + LAST_TURN + ", while the Red Army still controls Tula."))
        : "soviet" !== i || "german" !== e || isInCommunication(grid.get({ x: 10, y: 2 }), "soviet")
          ? "soviet" === i &&
            "german" === e &&
            isInCommunication(grid.get({ x: 10, y: 2 }), "soviet")
            ? ((o = "soviet"),
              (r = 1),
              (t = '<img src="img/soviet_marker.png" /><span>Russian Minor Victory!</span>'),
              (n =
                "The Red Army wins <strong>1 point</strong> because it controls Moscow at the end of Game Turn " + LAST_TURN + ", and the city is in communication, while the German Army controls Tula."))
            : "soviet" !== i ||
                "soviet" !== e ||
                (isInCommunication(grid.get({ x: 10, y: 2 }), "soviet") &&
                  isInCommunication(grid.get({ x: 10, y: 6 }), "soviet"))
              ? "soviet" === i &&
                "soviet" === e &&
                isInCommunication(grid.get({ x: 10, y: 2 }), "soviet") &&
                isInCommunication(grid.get({ x: 10, y: 6 }), "soviet") &&
                ((o = "soviet"),
                (r = 3),
                (t = '<img src="img/soviet_marker.png" /><span>Russian Decisive Victory!</span>'),
                (n =
                  "The Red Army wins <strong>3 points</strong> because it controls Moscow and Tula at the end of Game Turn " + LAST_TURN + ", and both cities are in communication."))
              : ((o = "soviet"),
                (r = 2),
                (t = '<img src="img/soviet_marker.png" /><span>Russian Major Victory!</span>'),
                (n =
                  "The Red Army wins <strong>2 points</strong> because it controls Moscow and Tula at the end of Game Turn " + LAST_TURN + ", but either or both cities are not in communication."))
          : ((o = "german"),
            (r = 1),
            (t = '<img src="img/german_marker.png" /><span>German Minor Victory!</span>'),
            (n =
              "The German Army wins <strong>1 point</strong> because it controls Tula at the end of Game Turn " + LAST_TURN + ", while the Red Army still controls Moscow, but Moscow is not in communication."));
    const a = b4mUnits.reduce(function (e, t) {
      let n = 0;
      return (
        "german" === t.army &&
          "tank" === t.type &&
          t.position &&
          ("full" === t.strength ? (n = 2) : "reduced" === t.strength && (n = 1)),
        e + n
      );
    }, 0);
    a >= 12
      ? (n +=
          "german" === o
            ? "<br />The Germans get an extra point because they have 12 or more Panzer steps on the map at the end of the game, bringing their total to <strong>" +
              (r + 1) +
              " points</strong>."
            : "<br />Although they lost, the Germans get <strong>1 point</strong> because they have 12 or more Panzer steps on the map at the end of the game.")
      : a <= 7 &&
        (n +=
          "soviet" === o
            ? "<br />The Red Army gets an extra point because the Germans have 7 or fewer Panzer steps on the map at the end of the game, bringing the Red Army's total to <strong>" +
              (r + 1) +
              " points</strong>."
            : "<br />Although they lost, the Red Army gets <strong>1 point</strong> because the Germans have 7 or fewer Panzer steps on the map at the end of the game.");
  } else {
    // standard rules: victory points compared with the historical result
    const e = standardResult();
    ((t = e.title), (n = e.text));
  }
  ((document.querySelector("#final_results > div.hud_title").innerHTML = t),
    (document.getElementById("final_results_tip").innerHTML = n + "<br /><br />" + lossesText() + "."));
}
function newGame() {
  (window.localStorage.removeItem("b4mSave"), window.location.reload(!0));
}
function continueGame() {
  ((b4mSave = JSON.parse(window.localStorage.getItem("b4mSave"))), startGame());
}
function startGameVsSovietAI() {
  ((playAIAs = "soviet"), startGame());
}
function startGameVsGermanAI() {
  ((playAIAs = "german"), startGame());
}
function continueFromSave() {
  b4mUnits = b4mSave.units.slice();
  for (const e of b4mDefaultUnits)
    b4mUnits.some(function (t) {
      return t.id === e.id;
    }) || b4mUnits.push(JSON.parse(JSON.stringify(e)));
  partisans = (b4mSave.partisans || []).map(function (e) {
    return { x: e.x, y: e.y, strength: e.strength || 1, acted: !!e.acted };
  });
  ((railCuts = (b4mSave.railCuts || []).slice()), (partisanGuides = (b4mSave.partisanGuides || []).slice()));
  b4mSave.cityStocks && (cityStocks = JSON.parse(JSON.stringify(b4mSave.cityStocks)));
  partisanTowns = (b4mSave.partisanTowns || []).slice();
  stayBehindPending = (b4mSave.stayBehindPending || []).slice();
  stayBehindDone = (b4mSave.stayBehindDone || []).slice();
  liberationBonus = b4mSave.liberationBonus || 0;
  decisions = b4mSave.decisions ? JSON.parse(JSON.stringify(b4mSave.decisions)) : {};
  casualties = b4mSave.casualties ? { german: b4mSave.casualties.german || 0, soviet: b4mSave.casualties.soviet || 0 } : { german: 0, soviet: 0 };
  for (const e of b4mSave.cities) {
    let t = grid.get(e.position);
    t && t.city && "none" !== t.city && (t.control = e.control);
  }
  ((battles = b4mSave.battles.slice()),
    (currentTurn.turn = b4mSave.current_turn.turn),
    (currentTurn.army = b4mSave.current_turn.army),
    (currentTurn.phase = b4mSave.current_turn.phase),
    (currentTurn.subphase = b4mSave.current_turn.subphase),
    (followingReinforcement = b4mSave.followingReinforcement),
    (playAIAs = b4mSave.play_ai_as),
    (document.getElementById("turn_info").style.display = "block"),
    (document.getElementById("layer_toolbar").style.display = "block"),
    setTurnInfo(),
    cityChangeQuiet++,
    drawPositionedUnits(),
    cityChangeQuiet--,
    window[b4mSave.function_name]());
}
function restartPhase() {
  ((b4mSave = JSON.parse(window.localStorage.getItem("b4mSave"))), continueFromSave());
}
let hudOffset = { x: 0, y: 0 };
function setHudOffset(e, t) {
  const n = Array.from(document.querySelectorAll(".hud")).find(
    (e) => e.getClientRects().length > 0,
  );
  if (n) {
    const i = n.getBoundingClientRect(),
      o = i.left - hudOffset.x,
      r = i.top - hudOffset.y,
      a = document.documentElement;
    ((e = Math.max(-o, Math.min(e, a.clientWidth - o - i.width))),
      (t = Math.max(-r, Math.min(t, a.clientHeight - r - 40))));
  }
  hudOffset = { x: e, y: t };
  const i = document.querySelector(".hud_container");
  (i.style.setProperty("--hud-dx", e + "px"), i.style.setProperty("--hud-dy", t + "px"));
}
function initHudDrag() {
  const e = document.querySelector(".hud_container");
  let t = null,
    n = 0;
  (e.addEventListener("pointerdown", function (e) {
    const n = e.target.closest(".hud_title");
    n &&
      e.isPrimary &&
      0 === e.button &&
      (e.preventDefault(),
      n.setPointerCapture(e.pointerId),
      (t = {
        pointerX: e.clientX,
        pointerY: e.clientY,
        offsetX: hudOffset.x,
        offsetY: hudOffset.y,
        moved: !1,
      }));
  }),
    e.addEventListener("pointermove", function (e) {
      if (!t) return;
      const n = e.clientX - t.pointerX,
        i = e.clientY - t.pointerY;
      (!t.moved && Math.abs(n) < 4 && Math.abs(i) < 4) ||
        ((t.moved = !0), setHudOffset(t.offsetX + n, t.offsetY + i));
    }));
  const i = function (e) {
    t &&
      (t.moved ||
        "pointerup" !== e.type ||
        (e.timeStamp - n < 400 ? (setHudOffset(0, 0), (n = 0)) : (n = e.timeStamp)),
      (t = null));
  };
  (e.addEventListener("pointerup", i),
    e.addEventListener("pointercancel", i),
    e.addEventListener("dragstart", function (e) {
      e.target.closest(".hud_title") && e.preventDefault();
    }),
    window.addEventListener("resize", function () {
      setHudOffset(hudOffset.x, hudOffset.y);
    }));
}
function startGame() {
  (document.getElementById("next_solitaire_button").removeEventListener("click", startGame),
    document
      .getElementById("next_human_vs_soviet_button")
      .removeEventListener("click", startGameVsSovietAI),
    document
      .getElementById("next_human_vs_german_button")
      .removeEventListener("click", startGameVsGermanAI),
    document.getElementById("next_continue_button").removeEventListener("click", continueGame),
    document.getElementById("help_menu").addEventListener(
      "click",
      function () {
        document.getElementById("help_content").style.display = "flex";
      },
      !0,
    ),
    document.getElementById("help_close").addEventListener(
      "click",
      function (e) {
        (e.preventDefault(), (document.getElementById("help_content").style.display = "none"));
      },
      !0,
    ),
    initHudDrag(),
    window.innerWidth < 1e3 &&
      ((document.getElementById("help_content").style.width = "100%"),
      (document.getElementById("help_content").style.height = "100%")),
    window.localStorage.getItem("b4mStart") ||
      ((document.getElementById("help_content").style.display = "flex"),
      window.localStorage.setItem("b4mStart", new Date().toISOString())),
    document.getElementById("turn_info").addEventListener("click", function (e) {
      if ((e.stopPropagation(), "block" === document.getElementById("turn_report").style.display)) {
        ((document.getElementById("turn_report").innerHTML = ""),
          (document.getElementById("turn_report").style.display = "none"),
          (document.getElementById("turn_info").style.height = "auto"));
        let e = document.getElementById("cities_highlights");
        (e
          .getContext("2d")
          .clearRect(
            0,
            0,
            document.getElementById("map").width,
            document.getElementById("map").height,
          ),
          document.body.removeChild(e));
      } else {
        document.getElementById("turn_info").style.height = "auto";
        let e = document.createElement("canvas");
        (e.setAttribute("id", "cities_highlights"),
          document.body.appendChild(e),
          (e.width = document.getElementById("map").width),
          (e.height = document.getElementById("map").height));
        let t = e.getContext("2d"),
          n = grid.get({ x: 10, y: 2 }),
          i = n.control;
        highlightHex(t, n, "rgb(0, 0, 0, 0.4)");
        let o = document.getElementById(i + "_marker"),
          r = n.center().add(n.toPoint());
        t.drawImage(o, r.x - 15, r.y - 15, 30, 30);
        let a = 0;
        grid.forEach(function (e) {
          if (e && e.city && "moscow" !== e.city && "german" === e.control) {
            (a++, highlightHex(t, e, "rgb(0, 0, 0, 0.4)"));
            let n = document.getElementById(e.control + "_marker"),
              i = e.center().add(e.toPoint());
            t.drawImage(n, i.x - 15, i.y - 15, 30, 30);
          }
        });
        let l = 0;
        (grid.forEach(function (e) {
          if (e && e.city && "moscow" !== e.city && "soviet" === e.control) {
            (l++, highlightHex(t, e, "rgb(0, 0, 0, 0.4)"));
            let n = document.getElementById(e.control + "_marker"),
              i = e.center().add(e.toPoint());
            t.drawImage(n, i.x - 15, i.y - 15, 30, 30);
          }
        }),
          (document.getElementById("turn_report").innerHTML +=
            '<div style="text-align: left; margin-top: 20px; margin-bottom: 5px;">- Army in control of Moscow: <img src="img/' +
            i +
            '_marker.png"></img><div>'),
          (document.getElementById("turn_report").innerHTML +=
            '<div style="text-align: left;">- Other cities: <img src="img/german_marker.png"></img> ' +
            a +
            '<img src="img/soviet_marker.png"></img> ' +
            l +
            "<div>"),
          (document.getElementById("turn_report").innerHTML += turnReportExtra()),
          (document.getElementById("turn_report").style.display = "block"));
      }
    }),
    (document.body.style.overflow = "visible"));
  let e = document.getElementById("splash_title");
  document.body.removeChild(e);
  let t = document.getElementById("splash_background");
  if (
    (document.body.removeChild(t),
    (canvasBoard = document.getElementById("board")),
    (canvasBoard.width = Math.max(window.innerWidth, document.getElementById("map").width, 2390)),
    (canvasBoard.height = document.getElementById("map").height),
    (board = canvasBoard.getContext("2d")),
    (canvasHexHighlights = document.getElementById("hex_highlights")),
    (canvasHexHighlights.width = document.getElementById("map").width),
    (canvasHexHighlights.height = document.getElementById("map").height),
    (hexHighlights = canvasHexHighlights.getContext("2d")),
    (canvasCountersHighlights = document.getElementById("counters_highlights")),
    (canvasCountersHighlights.width = document.getElementById("map").width),
    (canvasCountersHighlights.height = document.getElementById("map").height),
    (document.getElementById("season_overlay").width = document.getElementById("map").width),
    (document.getElementById("season_overlay").height = document.getElementById("map").height),
    (document.getElementById("partisan_markers").width = document.getElementById("map").width),
    (document.getElementById("partisan_markers").height = document.getElementById("map").height),
    (document.getElementById("status_markers").width = document.getElementById("map").width),
    (document.getElementById("status_markers").height = document.getElementById("map").height),
    (countersHighlights = canvasCountersHighlights.getContext("2d")),
    true)
  ) {
    const e = document.getElementById("help_terrain_img");
    board.drawImage(e, 1290, 530, 693, 600);
  }
  if (true) {
    const e = document.getElementById("help_crt_img");
    (board.drawImage(e, 0, 0, 600, 480, 2e3, 530, 381, 305),
      board.drawImage(e, 601, 0, 534, 480, 2e3, 830, 339, 305));
  }
  ((arrows = document.getElementById("arrows_counter")),
    (document.getElementById("help_menu").style.display = "block"),
    b4mSave
      ? continueFromSave()
      : (drawPositionedUnits(), turn1GermanSetupPhase(board, hexHighlights, countersHighlights)));
}
window.addEventListener("load", function () {
  (setTimeout(function () {
    scrollTo(0, 0);
  }, 100),
    window.localStorage.getItem("b4mSave") &&
      (document.getElementById("next_continue_button").style.display = "inline-block"),
    document.getElementById("next_continue_button").addEventListener("click", continueGame, !0),
    document.getElementById("next_solitaire_button").addEventListener("click", startGame, !0),
    document
      .getElementById("next_human_vs_soviet_button")
      .addEventListener("click", startGameVsSovietAI, !0),
    document
      .getElementById("next_human_vs_german_button")
      .addEventListener("click", startGameVsGermanAI, !0),
    "yes" === window.localStorage.getItem("b4mTournamentMode") &&
      ((document.getElementById("tournament_mode").checked = !0), (tournamentMode = !0)),
    document.getElementById("tournament_mode").addEventListener(
      "click",
      function () {
        (window.localStorage.setItem("b4mTournamentMode", this.checked ? "yes" : "no"),
          (tournamentMode = this.checked));
      },
      !0,
    ));
});
// ---------------------------------------------------------------- Chinese interface
// The game writes its interface in English. In Chinese mode every text it shows is translated as it
// appears on the page (whole labels, then sentences, then sentences with numbers and names), and put back
// in English when the switch goes back. Names, dates, the weather and the chronicle are written in
// Chinese at the source; the dispatches and the help have a Chinese twin of their own.
const CITY_NAMES_ZH = {
  "1,4": "斯摩棱斯克",
  "2,6": "罗斯拉夫尔",
  "4,8": "布良斯克",
  "5,1": "勒热夫",
  "5,3": "维亚济马",
  "7,3": "莫扎伊斯克",
  "7,5": "卡卢加",
  "7,9": "奥廖尔",
  "10,2": "莫斯科",
  "10,6": "图拉",
  "13,5": "梁赞",
};
function cityNameOf(key, fallbackEn, fallbackZh) {
  return L(CITY_NAMES[key] || fallbackEn, CITY_NAMES_ZH[key] || fallbackZh);
}
const WEATHER_ZH = {
  1: "凉爽干燥，约 +5 °C",
  2: "10 月 7 日初雪，约 0 °C",
  3: "雨水和深泥（泥泞季），约 +3 °C",
  4: "泥泞，夜间结霜，约 0 °C",
  5: "地面冻硬，约 -8 °C",
  6: "下雪结冰，约 -10 °C",
  7: "严寒，约 -15 °C",
  8: "酷寒深雪，-25 至 -35 °C",
  9: "深雪，约 -20 °C",
};
const CHRONICLE_ZH = {
  1: "1941 年 10 月 2 日。“台风”行动开始。希特勒的当日命令：“今天，开始了今年最后一场伟大的决战。”",
  2: "10 月 3 日：希特勒在广播讲话中宣称敌人“已经被打垮，再也无法恢复元气”。10 月 7 日：德军最高统帅部的一道指令规定，即使莫斯科提出投降，也不予接受。",
  3: "10 月中旬。秋季的泥泞拖慢了一切行动。苏联历史学家强调，泥泞对双方同样不利，并没有决定这场会战。",
  4: "11 月初。德军在莫扎伊斯克防线前的泥泞中停滞不前；11 月 7 日，红军在红场举行阅兵。",
  5: "11 月 15 日至 16 日。德军从西北和南面恢复对莫斯科的进攻。",
  6: "11 月下旬。德军先头部队逼近莫斯科，大本营则在前线后方集结预备队。",
  7: "12 月初。德军攻势在莫斯科城下达到顶点；各师筋疲力尽，补给短缺。",
  8: "12 月 5 日至 6 日。红军开始反击。罗科索夫斯基回忆：深雪和严寒使部队很难离开道路机动，撤退的德军烧毁了每一个村庄。部队只在夜间行军，气温零下 28 至 35 度。",
  9: "12 月 16 日。希特勒的死守令：中央集团军群不得大规模后撤，军官们要让部队“以狂热的顽强”坚守阵地。撤退的德军身后留下一片废墟：伊斯特拉被烧毁，新耶路撒冷修道院被炸毁，博罗季诺博物馆被焚。",
};
const TURN_DATES_ZH = ["", "1941 年 10 月 2 日", "1941 年 10 月 10 日", "1941 年 10 月 17 日", "1941 年 11 月 1 日", "1941 年 11 月 16 日", "1941 年 11 月 23 日", "1941 年 12 月 1 日", "1941 年 12 月 5 日", "1941 年 12 月 15 日"];
function turnTitleZh(turn) {
  return (
    TURN_DATES_ZH[turn] +
    " · 第 " +
    turn +
    "/" +
    LAST_TURN +
    " 回合" +
    (3 === turn || 4 === turn ? "（泥泞）" : turn >= WINTER_START ? "（冬季）" : "")
  );
}
function unitNameZh(e) {
  const t = parseInt(e.id.replace(/\D/g, ""), 10);
  return "soviet" === e.army
    ? e.nkvd
      ? "第 " + t + " 集团军（NKVD）"
      : "shock" === e.type
        ? "突击第 " + t + " 集团军"
        : "cavalry" === e.type
          ? "近卫骑兵第 " + t + " 军"
          : "第 " + t + " 集团军"
    : "第 " + t + ("tank" === e.type ? " 装甲军" : " 军");
}
// Whole labels: a text that is exactly one of these
const ZH_WORDS = {
  "Battle for Moscow": "莫斯科战役",
  "Continue Game": "继续游戏",
  "Solitaire / Hotseat": "单人 / 双人轮流",
  "Play with": "使用",
  "Tournament Rules": "锦标赛规则",
  Layers: "图层",
  Supply: "补给",
  Fatigue: "疲劳",
  Men: "兵力",
  Sound: "声音",
  "Setting Up": "部署",
  Undo: "撤销",
  Next: "下一场",
  Continue: "继续",
  Close: "关闭",
  "New Game": "新游戏",
  "To Combat Phase": "进入战斗阶段",
  "To Russian Redeployment Phase": "进入苏军重新部署阶段",
  "Redeployment Phase": "重新部署阶段",
  "No more redeployment needed": "不再重新部署",
  "To German Combat Phase": "进入德军战斗阶段",
  "Combat Phase": "战斗阶段",
  "Go straight to movement phase": "直接进入移动阶段",
  "No more battle to announce": "不再宣布战斗",
  "To Battles Resolution": "进入战斗结算",
  "To Movement Phase": "进入移动阶段",
  "Movement Phase": "移动阶段",
  "No more movement required": "不再移动",
  "To Other Player Turn": "进入对方回合",
  "To Final Results": "查看最终结果",
  "Replacement Phase": "补充阶段",
  "No more replacement needed": "不再补充",
  "To Standard Replacement Phase": "进入常规补充阶段",
  "To Special Movement Phase": "进入特殊移动阶段",
  "Special Movement Phase": "特殊移动阶段",
  "No more special movement needed": "不再进行特殊移动",
  Raid: "伏击",
  "Sabotage rail": "破坏铁路",
  "Guide the army": "为大军带路",
  "Rise in a town": "城中起义",
  Move: "转移",
  Recruit: "扩编",
  "Exchange!": "交换！",
  "The Historical Result": "历史结果",
  "German Decisive Victory!": "德军决定性胜利！",
  "Russian Decisive Victory!": "苏军决定性胜利！",
  "Russian Victory!": "苏军胜利！",
  "German Victory!": "德军胜利！",
  "German Major Victory!": "德军重大胜利！",
  "Russian Major Victory!": "苏军重大胜利！",
  "Russian Minor Victory!": "苏军小胜！",
  "German Minor Victory!": "德军小胜！",
  City: "城市",
};
// Sentences, translated wherever they appear (the longest first)
const ZH_PHRASES = [
  ["Show the units cut off from their map edge (key S)", "显示与地图边缘失去联系的部队（S 键）"],
  ["Show unit fatigue (key F)", "显示部队疲劳（F 键）"],
  ["Show the estimated manpower of each unit (key P)", "显示每支部队的估计兵力（P 键）"],
  ["Sound effects on or off (key M)", "开关音效（M 键）"],
  ["Set up one full-strength German unit on each hex containing a black cross.", "在每个画有黑十字的格子里布置一支满编德军部队。"],
  ["The German army sets up one full-strength unit on each hex containing a black cross.", "德军在每个画有黑十字的格子里布置一支满编部队。"],
  ['Redeploy some, none or all three Russian "reserve" armies  located in the highlighted hexes.', "重新部署位于高亮格子里的三个苏军“预备”集团军：可以部署其中一部分、全部，或者都不部署。"],
  ["The enemy has decided to not redeploy any unit for this turn.", "敌方决定本回合不重新部署任何部队。"],
  ["Upon choosing a defending unit, all compatible attacking units are selected. Adjust the ones taking part in this battle by clicking on them. Then, add each battle to the stack.", "选择一个防守部队后，所有能参加进攻的部队都会被选中。点击它们可以调整参加这场战斗的部队，然后把每场战斗加入列表。"],
  ["The enemy is announcing the battles of this turn...", "敌方正在宣布本回合的战斗……"],
  ["The enemy has announced all the battles for this turn. Click below to highlight each battle or proceed to the resolution.", "敌方已宣布本回合的所有战斗。点击下方可以高亮每场战斗，或者进入结算。"],
  ["Announce all the battles of this turn by selecting each set of defending and attacking units (or skip combat and go to the movement phase).", "选择每一组防守和进攻部队，宣布本回合的所有战斗（也可以跳过战斗，直接进入移动阶段）。"],
  ["The enemy doesn't announce any battle for this turn and goes straight to the movement phase.", "敌方本回合不宣布任何战斗，直接进入移动阶段。"],
  [" It loses 1 step as it must retreat through an EZOC.", "它必须穿过敌方控制区撤退，因此损失 1 级。"],
  ["Select a valid destination", "选择一个可以撤退到的格子"],
  [" for the retreat...", "……"],
  [" But there is no valid retreat so it is eliminated.", "但它无路可退，因此被消灭。"],
  ["Use the option to advance", "可以推进"],
  [" into the vacated hex by clicking on the attacking unit, ", "：点击一支进攻部队，让它进入空出来的格子，"],
  ["or continue without", "或者不推进，直接继续"],
  [" The selected attacking unit is eliminated during the exchange.", "选中的进攻部队在交换中被消灭。"],
  [" The selected attacking unit loses 1 step during the exchange.", "选中的进攻部队在交换中损失 1 级。"],
  [" The attacking unit is eliminated during the exchange.", "进攻部队在交换中被消灭。"],
  [" The attacking unit loses 1 step during the exchange.", "进攻部队在交换中损失 1 级。"],
  ["Select the attacking unit(s) to match the defending unit's loss", "选择进攻部队，抵消防守部队的损失"],
  [" The attacking unit strength is already reduced so it is eliminated.", "进攻部队已经是半血，因此被消灭。"],
  ["The battle has no effect.", "这场战斗没有结果。"],
  ["The defending unit needs to retreat 2 hexes.", "防守部队必须后撤 2 格。"],
  [" But it is in a major city, so it takes a step loss instead and doesn't retreat.", "但它在大城市里，因此改为损失 1 级，不撤退。"],
  [" But Hitler's stand-fast order holds it in the city: it takes a step loss instead and doesn't retreat.", "但希特勒的死守令把它钉在城里：改为损失 1 级，不撤退。"],
  ["The defending unit loses 1 step and is retreated 2 hexes.", "防守部队损失 1 级，并后撤 2 格。"],
  [" But its strength is already reduced so it is eliminated.", "但它已经是半血，因此被消灭。"],
  ["The defending unit is eliminated.", "防守部队被消灭。"],
  [" The defending unit strength is already reduced so it is eliminated.", "防守部队已经是半血，因此被消灭。"],
  ["One attacking unit needs to lose 1 step.", "一支进攻部队必须损失 1 级。"],
  ["Select the attacking unit", "选择受影响的进攻部队"],
  [" to be impacted...", "……"],
  ["All battles have been resolved.", "所有战斗都已结算。"],
  ["The defender is broken by fatigue: its retreat costs it a step. ", "防守部队已疲劳崩溃：撤退让它损失 1 级。"],
  ["Select all the units you choose to move and their destination in order to conclude the turn.", "选择你要移动的部队和它们的目的地，以结束本回合。"],
  ["The enemy has chosen to complete the turn without moving any unit.", "敌方选择不移动任何部队，结束本回合。"],
  ["The enemy has selected units to move in order to complete this turn.", "敌方已选好要移动的部队，以结束本回合。"],
  ["Ambush the supply columns of a German unit within 2 hexes: it gains 2 fatigue points for each strength point of the band, and cannot recover any fatigue at the start of the next German turn.", "伏击 2 格内一支德军部队的补给车队：游击队每有 1 点力量，它就增加 2 点疲劳，并且在下一个德军回合开始时不能恢复疲劳。"],
  ["Cut the German supply line: blow up the railway in a hex within 1 hex. Only the Russians move by rail in this game, but the German armies lived on the railways for their ammunition, fuel and food. For the next two German turns, German units within 2 hexes of the cut gain +1 fatigue at the start of their turn and cannot recover.", "切断德军补给线：炸毁 1 格内某个格子的铁路。本游戏中只有苏军能沿铁路移动，但德军靠铁路运送弹药、燃料和口粮。在接下来的两个德军回合里，被炸点 2 格内的德军部队在回合开始时 +1 疲劳，并且不能恢复。"],
  ["This turn, Russian attacks on German units within 1 hex of the band gain one odds column.", "本回合苏军进攻该游击队 1 格内的德军部队时，战斗比例 +1 栏。"],
  ["A German-held town within 2 hexes with no German unit in or next to it, if the bands within 2 hexes of it total 3 strength or more: roll a die; up to their total strength (at most 5) the town becomes Russian, otherwise every band taking part loses 1 strength.", "2 格内一座德军控制、城里及相邻格都没有德军的城镇，且该城 2 格内的游击队力量合计 3 点或以上时：掷一个骰子，点数不超过游击队总力量（最多算 5）时城镇变为苏军控制，否则每支参加的游击队损失 1 点力量。"],
  ["Slip through the forests to an empty forest hex within 2 hexes.", "穿过森林，转移到 2 格内的空森林格。"],
  ["+1 strength (at most 3), only with no German unit within 2 hexes.", "+1 力量（最多 3），只有 2 格内没有德军时才行。"],
  [" Click a highlighted hex.", "点击一个高亮的格子。"],
  ["The Stavka reserves are committed! Place the reinforcement units in the eligible area of the map (red-bordered edge).", "大本营预备队投入战斗！把增援部队放到地图上的可放置区域（红边地图边缘）。"],
  ["Place the reinforcement unit in the eligible area of the map.", "把增援部队放到地图上的可放置区域。"],
  ["The enemy places the reinforcement units in the eligible area of the map.", "敌方把增援部队放到地图上的可放置区域。"],
  ["The NKVD brigade joins the line: click a half-strength infantry army in communication (highlighted). It becomes a shock army, 5-4 now and 10-4 once restored.", "NKVD 旅投入防线：点击一个有补给的半血步兵集团军（已高亮）。它变成突击集团军，现在是 5-4，补满后是 10-4。"],
  ["The NKVD brigade joins an army in the line.", "NKVD 旅加入了前线的一个集团军。"],
  ["Ski battalions arrive: select infantry armies in communication to reinforce them (optional). In winter, ski-reinforced armies move through forests at 1 MP per hex and ignore the forest shift when they attack.", "滑雪营到达：选择有补给的步兵集团军进行加强（可选）。冬季里，滑雪加强的集团军穿越森林每格只需 1 点移动力，进攻时不受森林降栏影响。"],
  ["The enemy reinforces infantry armies with ski battalions.", "敌方用滑雪营加强了步兵集团军。"],
  ["The NKVD detachments parachute behind the German lines: place them as partisan bands of strength 2 on forest hexes behind the German lines, not next to German units (optional).", "NKVD 分队伞降到德军后方：把它们作为力量 2 的游击队，放到德军后方、不与德军相邻的森林格里（可选）。"],
  ["New partisan bands form behind the German lines: place them on forest hexes behind the German lines, not next to German units (optional).", "新的游击队在德军后方组建：把它们放到德军后方、不与德军相邻的森林格里（可选）。"],
  ["The NKVD detachments parachute behind the German lines.", "NKVD 分队伞降到德军后方。"],
  ["New partisan bands form behind the German lines.", "新的游击队在德军后方组建。"],
  ["Partisan operations behind the German lines.", "游击队在德军后方行动。"],
  ["All the reinforcements have been deployed and the partisans have acted.", "增援已全部部署，游击队也已行动。"],
  ["The enemy has deployed its reinforcements and its partisans have acted.", "敌方已部署增援，它的游击队也已行动。"],
  ["Place new half-strength units in the eligible area of the map or flip a half-strength unit that is currently on the map over to its full-strength side.", "在地图上的可放置区域放下新的半血部队，或者把地图上的半血部队翻回满编面。"],
  ["The enemy places new half-strength units in the eligible area of the map or flips half-strength units that are currently on the map over to their full-strength side.", "敌方在地图上放下新的半血部队，或者把地图上的半血部队翻回满编面。"],
  ["You have finished assigning your replacements.", "你已经分配完补充兵。"],
  ["The enemy has finished assigning replacements.", "敌方已经分配完补充兵。"],
  [" No unit of yours is off the map to be rebuilt now, so a step can only restore a half-strength unit in communication or rest a tired full-strength one.", "现在你没有被消灭、可以重建的部队，所以补充兵步数只能补满有补给的半血部队，或者让疲劳的满编部队休整。"],
  [" A step spent on a full-strength unit in communication (orange) clears all its fatigue.", "一个步数用在有补给的满编部队上（橙色），可以清除它的全部疲劳。"],
  ["All units that begin this phase on a rail line may move along it.", "本阶段开始时位于铁路上的所有部队可以沿铁路移动。"],
  ["All armor/panzer units may move.", "所有装甲部队可以移动。"],
  [" Select the ones you choose to move and their destination.", "选择你要移动的部队和它们的目的地。"],
  [" But the enemy has decided not to use this capability during this phase.", "但敌方决定本阶段不使用这个能力。"],
  ["+1 Russian replacement step next turn · the liberators shake off some fatigue", "下回合苏军 +1 个补充兵步数 · 解放城市的部队疲劳降一级"],
  ["The German Army took Moscow and held it to the end of the game.", "德军攻占了莫斯科，并一直守到游戏结束。"],
  ["The counteroffensive went far beyond what the Red Army achieved in 1941.", "这次反攻的战果远远超过了红军在 1941 年的实际成就。"],
  ["The Red Army did better than in 1941.", "红军打得比 1941 年更好。"],
  ["The front stands where it stood in December 1941: Moscow is saved, but the Germans still hold most of the cities.", "战线停在 1941 年 12 月的位置：莫斯科得救了，但德军仍占着大部分城市。"],
  ["The Wehrmacht held more than it did in 1941.", "德国国防军守住的比 1941 年更多。"],
  ["The Wehrmacht held far more than it did in 1941.", "德国国防军守住的远比 1941 年多。"],
  ["The battle of Moscow destroyed the myth of the Wehrmacht's invincibility. Yet, as Marshal Vasilevsky wrote, the general offensive of the winter of 1942 did not completely destroy any of the main German groupings.", "莫斯科会战打破了德国国防军不可战胜的神话。但正如华西列夫斯基元帅所写，1942 年冬季的总攻并没有彻底消灭任何一个德军主要集团。"],
  [", while the Red Army still controls Tula.", "，而红军仍控制着图拉。"],
  [", and the city is in communication, while the German Army controls Tula.", "，且该城在交通线上，而德军控制着图拉。"],
  [", and both cities are in communication.", "，且两城都在交通线上。"],
  [", but either or both cities are not in communication.", "，但其中一座或两座城市不在交通线上。"],
  [", while the Red Army still controls Moscow, but Moscow is not in communication.", "，而红军仍控制着莫斯科，但莫斯科不在交通线上。"],
  ["- Army in control of Moscow: ", "- 控制莫斯科的一方："],
  ["- Other cities: ", "- 其他城市："],
  ["- Victory points: ", "- 胜利点："],
];
// Sentences with numbers and names
const ZH_LEVELS = { fresh: "精力充沛", tired: "疲劳", exhausted: "疲惫", broken: "崩溃" };
const ZH_PATTERNS = [
  [/You have <strong>(\d+)<\/strong> replacement steps? left to assign\./g, "你还有 <strong>$1</strong> 个补充兵步数可以分配。"],
  [/The enemy has <strong>(\d+)<\/strong> replacement steps? left to assign\./g, "敌方还有 <strong>$1</strong> 个补充兵步数可以分配。"],
  [/Ski battalions left: <strong>(\d+)<\/strong>/g, "剩余滑雪营：<strong>$1</strong>"],
  [/New bands left: <strong>(\d+)<\/strong>/g, "剩余可组建的游击队：<strong>$1</strong>"],
  [/ \(at least (\d+) strength points\)\.\.\./g, "（至少 $1 点兵力）……"],
  [/ with (\d+) more points? to lose\.\.\./g, "，还要再损失 $1 点……"],
  [/Partisan band at (\d{4}) \(strength (\d)\): choose its action for this turn\. Click another band to give it its orders first; click Next when you are done\./g, "位于 $1 的游击队（力量 $2）：选择它本回合的行动。也可以先点击另一支游击队给它下令；完成后点下方按钮继续。"],
  [/Partisans ambush the supply columns of the (.+?): fatigue (\d+) → (\d+) \((fresh|tired|exhausted|broken)\), and it cannot rest next turn\./g, function (m, u, a, b, l) { return "游击队伏击了" + u + "的补给车队：疲劳 " + a + " → " + b + "（" + ZH_LEVELS[l] + "），它下回合不能休整。"; }],
  [/Partisans blow up the railway at (\d{4})\./g, "游击队炸毁了 $1 的铁路。"],
  [/Partisans will guide the Red Army around (\d{4}) this turn\./g, "本回合游击队将在 $1 一带为红军带路。"],
  [/A partisan band moves to (\d{4})\./g, "一支游击队转移到 $1。"],
  [/A partisan band grows to strength (\d)\./g, "一支游击队扩编到力量 $1。"],
  [/Die roll (\d) \((\d) or less needed\): the partisans rise and take (.+?)! \+1 Russian replacement step\./g, "掷骰 $1（需要 $2 或更小）：游击队起义，夺取了$3！苏军 +1 个补充兵步数。"],
  [/Die roll (\d) \((\d) or less needed\): the rising in (.+?) is crushed; every band taking part loses 1 strength\./g, "掷骰 $1（需要 $2 或更小）：$3的起义被镇压，每支参加的游击队损失 1 点力量。"],
  [/([^>]+?) taken by the partisans!/g, "$1被游击队夺取！"],
  [/The rising in ([^<]+?) is crushed/g, "$1的起义被镇压"],
  [/([^>]+?) liberated!/g, "$1解放了！"],
  [/The NKVD brigade joins the (.+?)\./g, "NKVD 旅加入了$1。"],
  [/Lost in these battles: German ([\d,]+), Russian ([\d,]+)/g, "本轮战斗损失：德军 $1 人，苏军 $2 人"],
  [/Losses: German ([\d,]+), Russian ([\d,]+)/g, "损失：德军 $1 人，苏军 $2 人"],
  [/ · ratio German : Russian = 1 : ([\d.]+)/g, " · 战损比 德军 : 苏军 = 1 : $1"],
  [/ \(historically the Red Army held (\d+) at the end of the game\)/g, "（1941 年同期红军实际为 $1 点）"],
  [/Victory points at the end of Game Turn (\d+): /g, "第 $1 回合结束时的胜利点："],
  [/Russians (\d+), Germans (\d+)/g, "苏军 $1，德军 $2"],
  [/\. In 1941 the Red Army held Moscow, Tula and Ryazan at this date \((\d+) points\)\./g, "。1941 年同期，红军控制着莫斯科、图拉和梁赞（$1 点）。"],
  [/The enemy has decided to redeploy (.+?) for this turn\./g, "敌方决定本回合重新部署$1。"],
  [/Exhausted attackers pay for the victory: the (.+?) loses 1 step\. /g, "疲惫的进攻部队为胜利付出了代价：$1损失 1 级。"],
  [/ ?([^.>]+?) is eliminated\. /g, "$1被消灭。"],
  [/The German Army wins (<strong>)?(\d) points?(<\/strong>)? because it controls Moscow and Tula at the end of Game Turn (\d+)/g, "德军得 $1$2 分$3，因为它在第 $4 回合结束时控制着莫斯科和图拉"],
  [/The German Army wins (<strong>)?(\d) points?(<\/strong>)? because it controls Moscow at the end of Game Turn (\d+)/g, "德军得 $1$2 分$3，因为它在第 $4 回合结束时控制着莫斯科"],
  [/The German Army wins (<strong>)?(\d) points?(<\/strong>)? because it controls Tula at the end of Game Turn (\d+)/g, "德军得 $1$2 分$3，因为它在第 $4 回合结束时控制着图拉"],
  [/The Red Army wins (<strong>)?(\d) points?(<\/strong>)? because it controls Moscow and Tula at the end of Game Turn (\d+)/g, "红军得 $1$2 分$3，因为它在第 $4 回合结束时控制着莫斯科和图拉"],
  [/The Red Army wins (<strong>)?(\d) points?(<\/strong>)? because it controls Moscow at the end of Game Turn (\d+)/g, "红军得 $1$2 分$3，因为它在第 $4 回合结束时控制着莫斯科"],
  [/The Germans get an extra point because they have 12 or more Panzer steps on the map at the end of the game, bringing their total to (<strong>)?(\d+)/g, "游戏结束时德军在地图上有 12 级或更多装甲部队，多得 1 分，总分 $1$2"],
  [/Although they lost, the Germans get (<strong>)?1 point(<\/strong>)? because they have 12 or more Panzer steps on the map at the end of the game\./g, "虽然输了，但游戏结束时德军在地图上有 12 级或更多装甲部队，得 $11 分$2。"],
  [/The Red Army gets an extra point because the Germans have 7 or fewer Panzer steps on the map at the end of the game, bringing the Red Army's total to (<strong>)?(\d+)/g, "游戏结束时德军在地图上的装甲部队不超过 7 级，红军多得 1 分，总分 $1$2"],
  [/Although they lost, the Red Army gets (<strong>)?1 point(<\/strong>)? because the Germans have 7 or fewer Panzer steps on the map at the end of the game\./g, "虽然输了，但游戏结束时德军在地图上的装甲部队不超过 7 级，红军得 $11 分$2。"],
  [/: (\d+) German, (\d+) Russian cut off/g, "：$1 支德军、$2 支苏军被切断"],
];
const ZH_PHRASE_LIST = ZH_PHRASES.slice().sort(function (a, b) {
  return b[0].length - a[0].length;
});
function zhText(s) {
  const t = s.trim();
  if (!t || !/[A-Za-z]{2}/.test(t)) return s;
  if (Object.prototype.hasOwnProperty.call(ZH_WORDS, t)) return s.replace(t, ZH_WORDS[t]);
  let r = s;
  for (const [a, b] of ZH_PHRASE_LIST) r.indexOf(a) > -1 && (r = r.split(a).join(b));
  for (const [a, b] of ZH_PATTERNS) r = r.replace(a, b);
  return r;
}
// What has been translated, to put the English back when the switch goes back
let zhChanges = [];
const ZH_INLINE = /^(STRONG|B|I|EM|SPAN|IMG|BR|S|SMALL|U)$/;
function zhSkip(e) {
  return !e || /^(SCRIPT|STYLE|CANVAS|TEXTAREA|INPUT)$/.test(e.nodeName) || (e.closest && e.closest("#decision_overlay, .help_zh, #help_body, #help_toc"));
}
function zhTranslate(root) {
  if (!isZh() || !root || zhSkip(root.nodeType === 3 ? root.parentNode : root)) return;
  if (3 === root.nodeType) {
    const t = zhText(root.nodeValue);
    t !== root.nodeValue && (zhChanges.push([root, "text", root.nodeValue, t]), (root.nodeValue = t));
    return;
  }
  if (1 !== root.nodeType) return;
  root.title && /[A-Za-z]{3}/.test(root.title) && ((t) => t !== root.title && (zhChanges.push([root, "title", root.title, t]), (root.title = t)))(zhText(root.title));
  // a short sentence with inline marks (a number in bold, an icon) is translated as a whole
  const kids = Array.from(root.children);
  if (kids.length && kids.length < 8 && root.innerHTML.length < 1500 && kids.every(function (k) { return ZH_INLINE.test(k.nodeName) && !k.children.length && !k.id && !k.onclick; })) {
    const html = root.innerHTML,
      t = zhText(html);
    if (t !== html) return (zhChanges.push([root, "html", html, t]), void (root.innerHTML = t));
  }
  for (const k of Array.from(root.childNodes)) zhTranslate(k);
}
function zhRevert() {
  for (let k = zhChanges.length - 1; k >= 0; k--) {
    const [node, kind, before, after] = zhChanges[k];
    if (!node.isConnected) continue;
    "text" === kind ? node.nodeValue === after && (node.nodeValue = before) : "title" === kind ? node.title === after && (node.title = before) : node.innerHTML === after && (node.innerHTML = before);
  }
  zhChanges = [];
}
const zhObserver = new MutationObserver(function (records) {
  if (!isZh()) return;
  zhChanges.length > 4000 && (zhChanges = zhChanges.filter(function (c) { return c[0].isConnected; }));
  for (const r of records)
    "characterData" === r.type
      ? zhTranslate(r.target)
      : "attributes" === r.type
        ? zhTranslate(r.target)
        : (r.addedNodes.forEach(zhTranslate), r.target.children && r.target.children.length < 8 && zhTranslate(r.target));
});
// The switch: the whole page, the help, the turn bar and the map labels follow it
function applyLanguage() {
  document.documentElement.lang = isZh() ? "zh-CN" : "en";
  const box = document.getElementById("layer_zh");
  box && (box.checked = isZh());
  for (const e of document.querySelectorAll(".help_zh")) e.style.display = isZh() ? "" : "none";
  for (const id of ["help_toc", "help_body"]) {
    const e = document.getElementById(id);
    e && (e.style.display = isZh() ? "none" : "");
  }
  isZh() ? zhTranslate(document.body) : zhRevert();
  currentTurn && currentTurn.turn && document.getElementById("turn_info_title") && setTurnInfo();
  "function" == typeof refreshStatusMarkers && refreshStatusMarkers();
}
function setLanguage(value) {
  lang = value ? "zh" : "en";
  try {
    window.localStorage.setItem("b4mLang", lang);
  } catch (e) {}
  applyLanguage();
}
window.addEventListener("load", function () {
  const box = document.getElementById("layer_zh");
  box &&
    box.addEventListener("change", function () {
      setLanguage(box.checked);
    });
  const close = document.getElementById("help_close_zh");
  close &&
    close.addEventListener("click", function (e) {
      (e.preventDefault(), (document.getElementById("help_content").style.display = "none"));
    });
  // the Chinese lists of the help
  const d = document.getElementById("help_decisions_list_zh");
  d &&
    (d.innerHTML =
      "<ul>" +
      HISTORY_EVENTS.map(function (e) {
        const z = e.zh || {};
        return "<li><strong>第 " + e.turn + " 回合，" + ("german" === e.army ? "德军" : "苏军") + "</strong>：" + (z.title || e.title) + "（" + (z.to || z.officeEn || e.to || e.officeEn) + "，" + (z.date || e.date) + "）</li>";
      }).join("") +
      "</ul>");
  const c = document.getElementById("help_chronicle_list_zh");
  c &&
    (c.innerHTML = Object.keys(CHRONICLE_ZH)
      .map(function (k) {
        return "<p><strong>第 " + k + " 回合</strong>：" + CHRONICLE_ZH[k] + "</p>";
      })
      .join(""));
  zhObserver.observe(document.body, { childList: !0, subtree: !0, characterData: !0, attributes: !0, attributeFilter: ["title"] });
  applyLanguage();
});
