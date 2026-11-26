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
      // the supply base of Army Group Centre: a class of its own (see "Smolensk, the supply base" below)
      city: "base",
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
    (partisanWarStarts(),
    drawPartisans(),
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
function drawSkiPair(e, t, n, i, colour) {
  (e.save(), (e.strokeStyle = colour || "#211c21"), (e.lineCap = "round"), (e.lineWidth = 1.15 * i));
  for (const o of [28.2, 31.6])
    (e.beginPath(),
      e.moveTo(t + 15.2 * i, n + o * i),
      e.lineTo(t + 6.8 * i, n + o * i),
      e.quadraticCurveTo(t + 4.2 * i, n + o * i, t + 3.8 * i, n + (o - 2.4) * i),
      e.stroke());
  e.restore();
}
// on the crimson counter the skis are drawn in its gold
function drawSkiBadge(e, t, n) {
  drawSkiPair(e, t, n, 1, "#f4cf5c");
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
// A partisan band: a counter of the Red Army in the same look as the armies, crimson and gold, with the gold
// hammer and sickle, the NATO symbol of an infantry unit marked as partisans (п/о, a partisan detachment) and the
// strength of the band
function drawPartisanMarker(e, t, n, i, s) {
  const o = 1.5 * i,
    r = t - o / 2,
    a = n - o / 2,
    gold = "#f4cf5c";
  (e.save(), e.translate(r, a), e.scale(o / 120, o / 120), e.beginPath(), e.roundRect(2, 2, 116, 116, 9));
  const g = e.createLinearGradient(0, 0, 120, 120);
  (g.addColorStop(0, "#bc2228"),
    g.addColorStop(1, "#a8141c"),
    (e.fillStyle = g),
    e.fill(),
    (e.lineWidth = 2.5),
    (e.strokeStyle = "rgba(0,0,0,0.5)"),
    e.stroke(),
    hammerAndSickle(e, 87, 4, 27, gold),
    (e.fillStyle = gold),
    (e.font = "bold 15px 'Bahnschrift Condensed', 'Arial Narrow', Arial, sans-serif"),
    (e.textAlign = "center"),
    (e.textBaseline = "alphabetic"),
    e.fillText("ПАРТИЗАНЫ", 48, 26),
    (e.lineWidth = 3.8),
    (e.strokeStyle = gold),
    e.strokeRect(29, 33, 46, 28),
    e.beginPath(),
    e.moveTo(29, 33),
    e.lineTo(75, 61),
    e.moveTo(75, 33),
    e.lineTo(29, 61),
    e.stroke(),
    e.save(),
    e.translate(88, 47),
    e.rotate(-Math.PI / 2),
    (e.font = "bold 16px 'Bahnschrift SemiBold Condensed', 'Arial Narrow', Arial, sans-serif"),
    (e.textBaseline = "middle"),
    e.fillText("п/о", 0, 0),
    e.restore(),
    s &&
      ((e.font = "bold 40px 'Bahnschrift SemiBold Condensed', 'Arial Narrow', Arial, sans-serif"),
      (e.textAlign = "center"),
      (e.textBaseline = "alphabetic"),
      e.fillText(String(s), 60, 106)),
    e.restore());
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
// ---------------------------------------------------------------- Smolensk, the supply base of Army Group Centre
// The converted standard-gauge railway reached Smolensk on 16 August 1941, and Smolensk was the main forward base
// of Army Group Centre: the trains unloaded there and trucks carried everything on to the front, 250 to 300 km by
// November. For Typhoon the army group laid in depots at Gomel, Roslavl, Smolensk and Vitebsk (K. Reinhardt,
// Die Wende vor Moskau, 1972); to fill them it needed 27 trains a day in September and 29 in October, and got 22
// at the end of September and in October, 20 in November. On the map Smolensk and Roslavl are railheads from the
// start (Gomel and Vitebsk lie off it); the converted line was used as far as Vyazma from 23 October 1941. A German
// unit too far from a railhead cannot recover fatigue; while Smolensk is lost or cut off, no German unit recovers
// and the Germans get no replacements.
const SMOLENSK = { x: 1, y: 4 },
  ROSLAVL = { x: 2, y: 6 },
  VYAZMA = { x: 5, y: 3 },
  VYAZMA_RAILHEAD_TURN = 4,
  RAILHEAD_RANGE = 6,
  RAILHEAD_RANGE_MUD = 4;
// ---------------------------------------------------------------- Moscow, the regulating station of the fronts
// Ten railway lines met in Moscow; most supplies for the Western Front were sent there first and distributed
// from its stations ("in essence Moscow was the regulating station", I. V. Kovalev). The government left for
// Kuibyshev on 15 October 1941 and 498 factories were evacuated, but the front depots stayed in and around
// Moscow, with 57 hospitals in the city. Its defences make it the hardest city to take; if it fell, the Germans
// would find the factories and depots blown up, as the State Defence Committee had ordered. (The evacuation
// trains filled the lines to the east, Gorky and Moscow-Ryazan, and held back the reserves coming from the rear;
// within the front the railways still moved 10 to 12 troop trains a day, Kovalev: no limit on rail movement.)
const MOSCOW = { x: 10, y: 2 },
  MOSCOW_DEPOT_RANGE = 2;
function moscowLost() {
  return "soviet" !== grid.get(MOSCOW).control;
}
// Once the Germans have taken Moscow it is a ruin for good: the Russians blew up the factories, the depots and the
// metro before they gave it up, and the Germans set about what they had planned for the city. Whoever holds it
// afterwards holds an ordinary town: no defences of the capital, no air defence, no stocks, no depots.
function moscowRuined() {
  return !!decisions.moscowFall;
}
// Russian units 1 or 2 hexes from a Russian Moscow in communication: supplied straight from its depots
function moscowDepotsReach(hex, ctx) {
  const m = grid.get(MOSCOW),
    d = m.distance(hex);
  return !moscowRuined() && "soviet" === m.control && d >= 1 && d <= MOSCOW_DEPOT_RANGE && (ctx || supplyContext()).soviet(m);
}
// The battle being fought is against the Russian garrison of Moscow
function moscowGarrison() {
  const d = currentBattle && currentBattle.defendingUnit;
  return !!d && "soviet" === d.army && "moscow" === grid.get(d.position).city && !moscowRuined();
}
// ---------------------------------------------------------------- Air superiority and interdiction
// Turns 1-2: Luftflotte 2 holds the sky (more than 4,000 sorties in the first five days of Typhoon; on 10 October
// 537 sorties against the Western Front breaking out of the Vyazma pocket). Turns 3-4: the German forward
// airfields sink in the mud while the Soviets fly from the permanent airfields around Moscow. Turn 5: rough
// parity, part of Luftflotte 2 leaves for the Mediterranean and the Soviets gather some 1,000 aircraft around
// Moscow. Turns 6-7: the balance tips to the Soviets. Turns 8-9: the Soviet air force holds the sky (about 1,000
// aircraft against some 600; Soviet accounts speak of operational air superiority from 5 December, and the
// retreating German columns jammed on the roads are bombed day and night).
// In the movement phases (rail and panzer movement included) and in its retreats after combat, each unit that
// moves is bombed on a die roll up to the enemy air strength less the cover of the most exposed hex of its march:
// 2 fatigue points at once.
const AIR_STRENGTH = {
    1: { german: 3, soviet: 1 },
    2: { german: 3, soviet: 1 },
    3: { german: 1, soviet: 2 },
    4: { german: 1, soviet: 2 },
    5: { german: 2, soviet: 2 },
    6: { german: 1, soviet: 2 },
    7: { german: 1, soviet: 2 },
    8: { german: 1, soviet: 3 },
    9: { german: 1, soviet: 4 },
  },
  INTERDICTION_FATIGUE = 2;
function airStrength(army) {
  const a = AIR_STRENGTH[currentTurn.turn];
  return a ? a[army] : 0;
}
function airSuperiority() {
  const g = airStrength("german"),
    s = airStrength("soviet");
  return g > s ? "german" : s > g ? "soviet" : null;
}
function moscowAirUmbrella(hex) {
  const m = grid.get(MOSCOW);
  return !moscowRuined() && "soviet" === m.control && m.distance(hex) <= 2;
}
// The cover a unit finds against the enemy aircraft: forests, towns and, for the Russians, the defence lines
// hide it (1); major cities and, for the Russians, the air defence of Moscow within 2 hexes of it (the 6th
// Fighter Corps and the guns) protect it better (2); the Russian garrison of Moscow is out of their reach
function airCover(army, hex) {
  if ("soviet" === army && "moscow" === hex.city && "soviet" === hex.control && !moscowRuined()) return 99;
  let c = 0;
  ("forest" === hex.terrain || (hex.city && "none" !== hex.city) || ("soviet" === army && "fortification" === hex.terrain)) && (c = 1);
  isMajorCity(hex) && (c = 2);
  "soviet" === army && moscowAirUmbrella(hex) && (c = 2);
  return c;
}
function airHitNumber(army, hex) {
  return Math.max(0, airStrength("soviet" === army ? "german" : "soviet") - airCover(army, hex));
}
// A unit that has just marched in a movement phase, or retreated after a battle, faces the enemy aircraft: on a
// die roll up to the enemy air strength less the cover of the most exposed hex of its march, it is bombed and
// gains 2 fatigue at once (an advance after combat is not exposed)
function airInterdiction(unit, route, retreat) {
  const marching = ("movement" === currentTurn.phase || "special movement" === currentTurn.phase) && unit.army === currentTurn.army;
  if (!route.length || !(marching || retreat)) return;
  const u = b4mUnits[b4mUnitsIndex(unit)];
  if (!u || !u.position) return;
  let need = 0;
  for (const p of route) need = Math.max(need, airHitNumber(u.army, grid.get(p)));
  if (need < 1 || Math.floor(6 * Math.random()) + 1 > need) return;
  const by = "soviet" === u.army ? "german" : "soviet";
  // the mark stays on the counter until the end of this phase
  (addFatigue(u, INTERDICTION_FATIGUE),
    (u.bombed = { turn: currentTurn.turn, army: currentTurn.army, phase: currentTurn.phase, by: by }),
    playAirAttack(by),
    announceAirAttack(by, u, retreat),
    scheduleStatusRefresh());
}
let airSoundUntil = 0;
// The sound of the air attack: the dive of the Ju 87 or the Il-2 flying over (one at a time)
function playAirAttack(by) {
  const ctx = audioReady();
  if (!ctx || !ctx.recordings || ctx.currentTime < airSoundUntil) return;
  const b = ctx.recordings["german" === by ? "stuka" : "shturmovik"];
  if (!b) return;
  airSoundUntil = ctx.currentTime + 4;
  if ("german" === by) return void playPass(ctx, b, ctx.currentTime + 0.05, Math.min(b.duration - 0.1, 7), 1, { offset: 0, fadeIn: 0.15, fadeOut: 1.5 });
  // the shturmovik flies over at low level: it comes, roars overhead and goes, its pitch falling as it passes
  const src = ctx.createBufferSource(),
    g = ctx.createGain(),
    t0 = ctx.currentTime + 0.05,
    len = Math.min(b.duration - 0.6, 6.5);
  ((src.buffer = b),
    src.playbackRate.setValueAtTime(1.1, t0),
    src.playbackRate.setValueAtTime(1.1, t0 + 0.45 * len),
    src.playbackRate.linearRampToValueAtTime(0.88, t0 + 0.6 * len),
    g.gain.setValueAtTime(0.04, t0),
    g.gain.exponentialRampToValueAtTime(1.3, t0 + 0.5 * len),
    g.gain.exponentialRampToValueAtTime(0.03, t0 + len),
    g.gain.linearRampToValueAtTime(0, t0 + len + 0.05),
    src.connect(g).connect(audioOut),
    src.start(t0, 0.1),
    src.stop(t0 + len + 0.1));
}
// Each air attack is announced as it happens: which unit was bombed, and what it cost it
function announceAirAttack(by, u, retreat) {
  const name = unitName(u);
  showEventBanner(
    '<small class="banner_kicker">' +
      ("german" === by ? "Воздух!" : "Tiefflieger!") +
      '</small><img src="img/' +
      by +
      '_marker.png" />' +
      ("german" === by
        ? L("Luftwaffe attack: the " + name + " is bombed " + (retreat ? "in its retreat" : "on the move"), "德国空军空袭：" + name + (retreat ? "在撤退中" : "在运动中") + "被炸")
        : L("Soviet air attack: the " + name + " is bombed " + (retreat ? "in its retreat" : "on the move"), "苏联空军空袭：" + name + (retreat ? "在撤退中" : "在运动中") + "被炸")) +
      "<span>" +
      L("+" + INTERDICTION_FATIGUE + " fatigue.", "+" + INTERDICTION_FATIGUE + " 疲劳。") +
      "</span>",
    5e3,
  );
}
// The mark of a unit bombed in this phase: a burst with the falling bomb, and the marking of the
// aircraft that dropped it (the black cross of the Luftwaffe or the red star of the Soviet air force)
function drawBombedIcon(c, x, y, by) {
  (c.save(), c.translate(x, y), c.beginPath());
  for (let k = 0; k < 16; k++) {
    const a = (k * Math.PI) / 8 - Math.PI / 2,
      r = k % 2 ? 6 : 11;
    c.lineTo(r * Math.cos(a), r * Math.sin(a));
  }
  (c.closePath(), (c.fillStyle = "#f2a516"), c.fill(), (c.lineWidth = 1.5), (c.strokeStyle = "#3a0a0c"), c.stroke(), c.beginPath());
  for (let k = 0; k < 16; k++) {
    const a = (k * Math.PI) / 8 - Math.PI / 2 + 0.2,
      r = k % 2 ? 3 : 6.5;
    c.lineTo(r * Math.cos(a), r * Math.sin(a));
  }
  (c.closePath(),
    (c.fillStyle = "#d8261c"),
    c.fill(),
    // the bomb, falling into the burst
    c.save(),
    c.translate(8, -10),
    c.rotate(0.6),
    (c.fillStyle = "#161010"),
    c.beginPath(),
    c.ellipse(0, 1.5, 2.6, 4.8, 0, 0, 2 * Math.PI),
    c.fill(),
    c.fillRect(-2.6, -5.5, 5.2, 2),
    c.restore(),
    // the marking of the aircraft (on the right: the left half lies under the counter)
    c.translate(9, 9));
  "german" === by
    ? ((c.fillStyle = "#ffffff"), c.fillRect(-4.5, -1.8, 9, 3.6), c.fillRect(-1.8, -4.5, 3.6, 9), (c.fillStyle = "#161010"), c.fillRect(-3.5, -0.9, 7, 1.8), c.fillRect(-0.9, -3.5, 1.8, 7))
    : (piStar(c, 0, 0, 4.6), (c.fillStyle = "#d8261c"), c.fill(), (c.lineWidth = 0.8), (c.strokeStyle = "#ffffff"), c.stroke());
  c.restore();
}
function refreshAirInfo() {
  const e = document.getElementById("turn_info_air");
  if (!e || !currentTurn || !currentTurn.turn) return;
  const who = airSuperiority() || "contested",
    g = airStrength("german"),
    s = airStrength("soviet");
  ((e.className = "air_" + who),
    (e.innerText =
      ("german" === who
        ? L("Air: German superiority", "制空权：德军")
        : "soviet" === who
          ? L("Air: Soviet superiority", "制空权：苏军")
          : L("Air: contested", "制空权：双方争夺")) + L(" (" + g + " to " + s + ")", "（" + g + " 对 " + s + "）")),
    (e.title = L(
      "Air strength: Luftwaffe " + g + ", Soviet air force " + s + ". In the movement phases (rail and panzer movement included) and in its retreats after combat, each unit that moves is bombed on a die roll up to the enemy strength less the cover of the most exposed hex of its march, and gains 2 fatigue at once. Cover: forest, town and, for the Russians, a defence line 1; major city and, for the Russians, within 2 hexes of Moscow 2; the Russian garrison of Moscow is never bombed. Once Moscow has fallen it is an ordinary town, without air defence.",
      "空中力量：德国空军 " + g + "，苏联空军 " + s + "。在移动阶段（包括铁路机动和装甲部队特别移动）以及战斗后的撤退中，每支移动的部队按它这次行军中最暴露的一格计算：掷骰点数不超过“敌方空中力量减对空防护”就被炸，当场 +2 疲劳。对空防护：森林、城镇、苏军在防线上为 1；大城市、苏军在莫斯科 2 格内为 2；莫斯科城里的苏军不会被炸。莫斯科一旦陷落就只算普通城镇，没有防空。",
    )));
}
// Moscow, Tula and Smolensk: the cities that defend as major cities (Moscow only until it has fallen)
function isMajorCity(h) {
  return !!h && ("major" === h.city || ("moscow" === h.city && !moscowRuined()) || "base" === h.city);
}
function railheadRange() {
  return 3 === currentTurn.turn || 4 === currentTurn.turn ? RAILHEAD_RANGE_MUD : RAILHEAD_RANGE;
}
function smolenskBaseLost(ctx) {
  const h = grid.get(SMOLENSK);
  return "german" !== h.control || !(ctx || supplyContext()).german(h);
}
// The railheads in use: Smolensk; Roslavl, the depot behind the southern half of the front; and Vyazma from turn 4;
// Roslavl and Vyazma while they are German-held and in communication
function germanRailheads(ctx) {
  ctx = ctx || supplyContext();
  const heads = [],
    r = grid.get(ROSLAVL),
    v = grid.get(VYAZMA);
  (smolenskBaseLost(ctx) || heads.push(grid.get(SMOLENSK)),
    "german" === r.control && ctx.german(r) && heads.push(r),
    currentTurn.turn >= VYAZMA_RAILHEAD_TURN && "german" === v.control && ctx.german(v) && heads.push(v));
  return heads;
}
function railheadDistance(hex, heads) {
  let d = 99;
  for (const h of heads) d = Math.min(d, h.distance(hex));
  return d;
}
function unitSupplyStatus(e, t) {
  if (!e || !e.position) return null;
  t = t || supplyContext();
  const n = grid.get(e.position),
    i = "soviet" === e.army ? "the red-bordered east map edge" : "the west map edge";
  if (t[e.army](n) && "german" === e.army) {
    // in communication, but out of reach of the truck columns from the railhead
    const d = railheadDistance(n, germanRailheads(t));
    if (smolenskBaseLost(t))
      return {
        ok: !0,
        stretched: !0,
        text: L(
          "In communication, but Smolensk, the supply base, is lost or cut off: no recovery",
          "在交通线上，但补给基地斯摩棱斯克失守或被切断：不能恢复疲劳",
        ),
      };
    if (d > railheadRange())
      return {
        ok: !0,
        stretched: !0,
        text: L(
          "In communication, but " + d + " hexes from the nearest railhead (at most " + railheadRange() + "): the truck columns cannot keep up, no recovery",
          "在交通线上，但离最近的铁路卸载站 " + d + " 格（最多 " + railheadRange() + " 格）：汽车运输跟不上，不能恢复疲劳",
        ),
      };
  }
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
// While a counter is on its way, the marks drawn with it (fatigue bar, men, the bomb, the supply frame) follow it
// hex by hex: the hex it is shown in, by unit id, until it stops
const unitDisplayPos = {};
function shownHex(u) {
  return grid.get(unitDisplayPos[u.id] || u.position);
}
function refreshStatusMarkers() {
  statusRefreshTimer = null;
  const e = document.getElementById("status_markers"),
    t = document.getElementById("supply_view_count");
  if (!e || !e.width) return;
  const n = e.getContext("2d");
  if ((n.clearRect(0, 0, e.width, e.height), t && (t.innerText = ""), supplyView)) {
    const e = { german: 0, soviet: 0 },
      i = supplyContext();
    let stretched = 0;
    for (const t of b4mUnits) {
      if (!t.position) continue;
      const o = unitSupplyStatus(t, i);
      if (!o || (o.ok && !o.stretched)) continue;
      if (o.ok) {
        // out of reach of the railhead: a gold dashed frame
        const r = shownHex(t),
          a = r.center().add(r.toPoint());
        (stretched++,
          n.save(),
          n.setLineDash([4, 4]),
          (n.lineWidth = 3),
          (n.strokeStyle = "#f2c230"),
          strokeRoundRect(n, a.x - 36, a.y - 36, 72, 72, 9),
          n.restore());
        continue;
      }
      e[t.army]++;
      const r = shownHex(t),
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
        ruin = "10,2" === e && moscowRuined(),
        a = !ruin && cityStocks[e] && cityStocks[e].owner === o.control ? cityStocks[e].value : 0,
        l = ruin ? L("Ruins · no stocks", "废墟 · 无储备") : L("Stocks ", "储备 ") + a + "/" + CITY_STOCK_CAP[e];
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
    // the supply base and the railheads
    const heads = germanRailheads(i),
      lost = smolenskBaseLost(i);
    for (const [pos, label] of [
      [SMOLENSK, lost ? L("Supply base lost", "补给基地已失") : L("Supply base · railhead", "补给基地 · 铁路卸载站")],
      [ROSLAVL, L("Depot · railhead", "补给仓库 · 铁路卸载站")],
      [VYAZMA, L("Railhead", "铁路卸载站")],
      [MOSCOW, L("Regulating station", "调配站")],
    ]) {
      const h = grid.get(pos);
      if (((pos === VYAZMA || pos === ROSLAVL) && heads.indexOf(h) < 0) || (pos === MOSCOW && (moscowLost() || moscowRuined()))) continue;
      const r = h.center().add(h.toPoint());
      (n.save(), (n.font = "bold 11px Arial, sans-serif"), (n.textAlign = "center"), (n.textBaseline = "middle"));
      const s = n.measureText(label).width + 10;
      ((n.fillStyle = "rgba(0, 0, 0, 0.7)"),
        n.fillRect(r.x - s / 2, r.y + 36, s, 14),
        (n.fillStyle = pos === SMOLENSK && lost ? "#ff8a80" : "#f2c230"),
        n.fillText(label, r.x, r.y + 43),
        n.restore());
    }
    // (the units out of reach of the railhead are framed on the map; the bar keeps its short count)
    t && (t.innerText = L(": " + e.german + " German, " + e.soviet + " Russian cut off", "：" + e.german + " 支德军、" + e.soviet + " 支苏军被切断"));
  }
  // Fatigue: a three-segment bar under the counter, one segment per level (only for tired units)
  if (fatigueView)
    for (const e of b4mUnits) {
      const t = fatigueLevel(e),
        p = Math.min(FATIGUE.max, e.fatigue || 0);
      // (a unit on its way has no position until it stops: it is drawn where it is shown)
      if (!(e.position || unitDisplayPos[e.id]) || p < 1) continue;
      const i = shownHex(e),
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
      if (!(e.position || unitDisplayPos[e.id])) continue;
      const t = shownHex(e),
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
  // Units bombed from the air in this phase (the mark goes when the phase ends)
  for (const e of b4mUnits)
    if ((e.position || unitDisplayPos[e.id]) && e.bombed && e.bombed.turn === currentTurn.turn && e.bombed.army === currentTurn.army && e.bombed.phase === currentTurn.phase) {
      const t = shownHex(e),
        i = t.center().add(t.toPoint());
      // (the status canvas lies under the counters: the mark sits just right of the counter)
      drawBombedIcon(n, i.x + 39, i.y - 18, e.bombed.by);
    }
}
// when the phase changes, the marks of the phase that ended are cleared
let statusPhaseKey = "";
setInterval(function () {
  const k = currentTurn.turn + "/" + currentTurn.army + "/" + currentTurn.phase,
    c = document.getElementById("status_markers");
  k !== statusPhaseKey && ((statusPhaseKey = k), c && c.width && refreshStatusMarkers());
}, 500);
function scheduleStatusRefresh() {
  (clearTimeout(lossesTimer),
    (lossesTimer = setTimeout(refreshLossesDisplay, 300)),
    clearTimeout(statusRefreshTimer),
    (statusRefreshTimer = setTimeout(refreshStatusMarkers, 400)));
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
    // in a town of its side; in Moscow, Tula and Smolensk, with their barracks, hospitals and depots
    city: 1,
    majorCity: 2,
    // Moscow, with its depots and 57 hospitals; and the units supplied straight from its depots
    moscow: 3,
    moscowDepots: 1,
    // every Russian unit, each turn while Moscow is in German hands
    moscowLost: 1,
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
  "soviet" === e && tulaCheck(!0);
  "german" === e && (crusadeCheck(), pocketsCheck());
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
  // German units out of reach of the trucks from the railhead, and all of them while Smolensk is lost, do not recover
  const heads = "german" === e ? germanRailheads(t) : null,
    baseLost = "german" === e && smolenskBaseLost(t);
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
      l = o ? cityStock(i, e) : null,
      // in winter, a German unit without winter clothing out in the open cannot rest the cold away: no rest and no
      // rear recovery outside the towns (in a town the houses give shelter, and it recovers as usual)
      freezing = "german" === e && (!i.city || "none" === i.city) && germanWinterFatigue(i) > 0;
    let r = 0;
    (o &&
      (l && l.value > 0
        ? // a besieged garrison lives on the city's stocks: fatigue builds slowly while they last
          ((r += FATIGUE.siegeCutOff + (c ? FATIGUE.siegeRinged : 0)), (l.value = Math.max(0, l.value - (c ? 2 : 1))))
        : (r += FATIGUE.cutOff + (c ? FATIGUE.ringed : 0))),
      s && (r += FATIGUE.railCut),
      "german" === e && (r += germanWinterFatigue(i)),
      // while Moscow is in German hands the whole Red Army wears down, until it is retaken
      "soviet" === e && moscowLost() && (r += FATIGUE.moscowLost),
      o ||
        s ||
        n.raided === currentTurn.turn ||
        ("german" === e && (baseLost || railheadDistance(i, heads) > railheadRange())) ||
        (n.fought || freezing || (r -= (n.moved ? FATIGUE.idle : FATIGUE.rest) + (inTheRear(i, e) ? FATIGUE.rear : 0)),
        "none" !== i.city &&
          i.control === e &&
          // the Germans in Moscow find the factories and depots blown up: no city recovery
          !("moscow" === i.city && "german" === e) &&
          (r -= "moscow" === i.city && !moscowRuined() ? FATIGUE.moscow : isMajorCity(i) ? FATIGUE.majorCity : FATIGUE.city),
        "soviet" === e && moscowDepotsReach(i, t) && (r -= FATIGUE.moscowDepots)),
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
  // the Russian garrison of Moscow does not retreat: a DR has no effect
  else if ("DR" === t && moscowGarrison())
    ((t = "NE"), (n += L("The garrison of Moscow holds its ground: the DR has no effect. ", "莫斯科守军寸步不退：DR 无效。")));
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
// Defending, tired and exhausted troops still hold their positions; a broken unit falls apart (half)
function fatigueFactor(e) {
  return [1, 1, 1, 0.5][fatigueLevel(e)];
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
          "Weakened by fatigue: an exhausted unit (level 2) attacks at half its strength, a broken one (level 3) defends at half of it; tired and exhausted units still defend at full strength. The odds are worked out with this reduced strength. An exhausted attacker also loses a step on a DE or DRL result, a broken unit cannot attack, and a broken defender turns a DR into a DRL.",
          "因疲劳而削弱：疲惫（2 级）的部队进攻时只有一半兵力，崩溃（3 级）的部队防守时只有一半兵力；疲劳和疲惫的部队防守时仍是满兵力。兵力比按削弱后的兵力计算。疲惫的进攻部队在 DE 或 DRL 结果时还要损失 1 级，崩溃的部队不能进攻，崩溃的防守部队遇到 DR 时变成 DRL。",
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
// the terrain of a battle, drawn as the hex looks on the map in use (its style and season)
function terrainMarkerSrc(n) {
  return ["forest", "fortification", "river", "major"].indexOf(n) > -1
    ? "img/markers/" + mapArtStyle() + "_" + mapArtSeason() + "_" + n + ".png"
    : "img/" + n + "_marker.png";
}
function modifiersHtml(e) {
  let t = "";
  for (const n of e.modifiers) "fatigue" !== n && (t += '<img src="' + terrainMarkerSrc(n) + '" /> ');
  return (
    e.partisanBonus &&
      (t += '<span class="modifier_badge partisan" title="Partisans guide the attack">Partisans +1</span> '),
    e.moscowDefence &&
      (t +=
        '<span class="modifier_badge moscow" title="' +
        L(
          "The defences of the capital: the defence lines on its approaches and in the city, barricades, the workers' battalions and the state of siege of 19 October 1941. An attack on the Russian garrison of Moscow loses a second odds column, and the garrison never retreats.",
          "首都的防御：城郊和城内的防线、街垒、工人营，以及 1941 年 10 月 19 日宣布的戒严。进攻莫斯科的苏军守军时兵力比再左移 1 栏，而且守军决不后退。",
        ) +
        '">' +
        L("Moscow \u22121", "莫斯科 \u22121") +
        "</span> "),
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
          "经过激烈战斗，红军把德国法西斯侵略者赶出了" + n + "。下回合 +1 级补充兵员 · 解放者的疲劳减轻。",
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
  // the fall of Moscow is announced on the whole screen, once
  "moscow" === hex.city && "soviet" === from && "german" === to && !decisions.moscowFall &&
    ((decisions.moscowFall = currentTurn.turn), setTimeout(showMoscowFall, 900));
  // the Red Army retakes Moscow, once
  "moscow" === hex.city && "german" === from && "soviet" === to && decisions.moscowFall && !decisions.moscowRetaken &&
    ((decisions.moscowRetaken = currentTurn.turn), setTimeout(showMoscowRetaken, 900));
  // a German depot falls to the Red Army, once each
  const depot = "german" === from && "soviet" === to ? depotAt(hex) : null;
  depot &&
    !decisions["depot_" + depot.id] &&
    ((decisions["depot_" + depot.id] = currentTurn.turn),
    setTimeout(function () {
      showDepotTaken(depot);
    }, 900));
  // the first Soviet town taken by the Germans (Moscow has its own dispatch)
  "soviet" === from && "german" === to && "moscow" !== hex.city && townOccupied(hex);
}
// ---------------------------------------------------------------- The fall of Moscow
// Both sides had their orders ready: the State Defence Committee had ordered
// on 15 October that the factories, depots and the metro be blown up if the enemy reached the gates of the city,
// and the German high command had laid down on 12 October that no capitulation of Moscow would be accepted.
// The event shows the dispatch of the side you play (both, one after the other, for two players at one screen).
const MOSCOW_FALL_DATES = ["", "2 October", "10 October", "17 October", "1 November", "16 November", "23 November", "1 December", "5 December", "15 December"];
function moscowFallRules(side) {
  return "german" === side
    ? [
        "Moscow counts 5 victory points for the side that holds it at the end.",
        "While the city is in German hands, [[every Soviet unit gains " + FATIGUE.moscowLost + " fatigue]] at the start of each Soviet turn.",
        "The city is a ruin for good, [[an ordinary town]] for whoever holds it: no defences of the capital, no air defence, no stocks, no depots.",
        "The factories and depots were blown up: [[German units in Moscow recover no fatigue]] from the city.",
      ]
    : [
        "Moscow counts 5 victory points for the side that holds it at the end: [[take it back]].",
        "Until you retake it, [[every unit of yours gains " + FATIGUE.moscowLost + " fatigue]] at the start of each of your turns.",
        "Even retaken, the city stays a ruin, [[an ordinary town]]: no defences of the capital, no air defence, no stocks, no depots.",
        "The Germans in Moscow defend an ordinary town and recover no fatigue from the city.",
      ];
}
function moscowFallRulesZh(side) {
  return "german" === side
    ? [
        "莫斯科在终局时为控制方计 5 胜利点。",
        "莫斯科在德军手中期间，[[苏军全军每回合 +" + FATIGUE.moscowLost + " 疲劳]]（在苏军回合开始时）。",
        "城市永久成为废墟，不管谁占着都[[只算普通城镇]]：没有首都的防御，没有防空，没有储备，没有仓库。",
        "工厂和仓库已被炸毁：[[城中的德军不能靠城市恢复疲劳]]。",
      ]
    : [
        "莫斯科在终局时为控制方计 5 胜利点：[[一定要夺回来]]。",
        "夺回之前，[[你的每支部队每回合 +" + FATIGUE.moscowLost + " 疲劳]]（在你的回合开始时）。",
        "即使夺回，城市也已是废墟，[[只算普通城镇]]：没有首都的防御，没有防空，没有储备，没有仓库。",
        "城中的德军只能按普通城镇防守，也不能靠城市恢复疲劳。",
      ];
}
function moscowFallEvent(side) {
  const turn = currentTurn.turn,
    date = MOSCOW_FALL_DATES[turn] + " 1941",
    dateZh = TURN_DATES_ZH[turn];
  return "soviet" === side
    ? {
        id: "moscowFall",
        army: "soviet",
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        kind: "order",
        office: "Государственный Комитет Обороны",
        officeEn: "State Defence Committee, Moscow",
        stamp: "Совершенно секретно",
        slogan: { original: "Наше дело правое. Враг будет разбит. Победа будет за нами!", en: "Our cause is just. The enemy will be beaten. Victory will be ours!", zh: "我们的事业是正义的。敌人必将被击溃。胜利必将属于我们！" },
        photo: { src: "img/splash_kremlin_1941.jpg", caption: "Searchlights and tracer over the Kremlin, 1941", captionZh: "1941 年，克里姆林宫上空的探照灯和曳光弹" },
        place: "Moscow",
        date: date,
        title: "The enemy is in Moscow",
        text: [
          "German troops have broken into [[the capital of the Soviet state]]. The garrison fought street by street; as the enemy reached the gates of the city the sappers of the NKVD carried out the order of the State Defence Committee and [[blew up the factories, the depots and the machinery of the metro]].",
          "Behind the German divisions come the executioners. What the Hitlerites decided in July is being done to Moscow: [[no capitulation is accepted]], the city is sealed off, and whoever tries to leave it is shot at. The capital is to be [[razed to the ground]] so that its people need not be fed through the winter: gallows go up on the squares, the SS commandos hunt down Communists, Soviet officials and Jews, and the bombers and the guns are levelling the city street by street.",
          "The Government and the People's Commissariat of Defence work from Kuibyshev. The front stands east of the city. [[Not a step back]] from the new line: the capital must be taken back. [[Смерть немецким оккупантам!]] (Death to the German occupiers!)",
        ],
        quotes: [
          {
            original: "Непоколебимо решение фюрера сравнять Москву и Ленинград с землей, чтобы полностью избавиться от населения городов, которое в противном случае мы потом будем вынуждены кормить в течение зимы. Задачу уничтожения этих городов должна выполнить авиация.",
            translation: "The Führer's decision to raze Moscow and Leningrad to the ground is unshakeable, so as to be rid entirely of the population of these cities, which we would otherwise have to feed through the winter. The task of destroying these cities is to be carried out by the air force.",
            source: "F. Halder, war diary, 8 July 1941 (quoted by A. M. Samsonov, «Крах фашистской агрессии 1939–1945», 1980, ch. 4)",
          },
          {
            original: "Всякий, кто попытается оставить город и пройти через наши позиции, должен быть обстрелян и отогнан обратно.",
            translation: "Anyone who tries to leave the city and pass through our positions is to be fired upon and driven back.",
            source: "Directive of the OKH to Army Group Centre on the capture of Moscow and the treatment of its population, 12 October 1941 (quoted by A. M. Samsonov, ch. 7)",
          },
          {
            original: "Повсеместно появились виселицы. Овраги, противотанковые рвы и ямы заполнялись трупами замученных в гестаповских застенках, повешенных и расстрелянных.",
            translation: "Gallows appeared everywhere. Ravines, anti-tank ditches and pits filled with the bodies of those tortured in the Gestapo cells, hanged and shot.",
            source: "«История второй мировой войны 1939–1945», vol. 4, on the occupied Soviet lands in 1941 (quoted by A. M. Samsonov, ch. 4)",
          },
          {
            original: "В случае появления войск противника у ворот Москвы поручить НКВД — т. Берия и т. Щербакову произвести взрыв предприятий, складов и учреждений, которые нельзя будет эвакуировать, а также все электрооборудование метро (исключая водопровод и канализацию).",
            translation: "Should enemy troops appear at the gates of Moscow, the NKVD (comrades Beria and Shcherbakov) is charged with blowing up the factories, depots and institutions that cannot be evacuated, and all the electrical equipment of the metro (except the water supply and the sewers).",
            source: "Resolution No. 801 of the State Defence Committee «On the evacuation of the capital of the USSR, Moscow», 15 October 1941, point 4",
          },
        ],
        options: [{ id: "fight", label: "Отстоять Родину! Fight on", order: "Hold the line east of the capital and take it back.", effects: moscowFallRules("soviet") }],
        history: "The occupiers set about what they decided in July. The city is sealed off, and whoever tries to cross the lines is shot. Gallows stand on the squares of Moscow with placards on the hanged; the SS commandos go from house to house with their lists of Communists, Komsomol members and Jews, and shoot them in the courtyards and at the edge of the city. There is no bread: the occupiers take the last stocks for their army, and [[hunger spreads through the cellars]]. Museums and libraries are looted, and what cannot be carried off is burned; under the bombs and shells the city burns [[district by district]]. But the capital has not bowed its head: in the ruins the destroyer battalions and the partisans fight on, and east of the city the Red Army gathers to [[take it back]].",
        zh: {
          officeEn: "苏联国防委员会，莫斯科",
          place: "莫斯科",
          date: dateZh,
          title: "敌人进了莫斯科",
          text: [
            "德军突入了[[苏维埃国家的首都]]。守军逐街抵抗；敌人一到城门口，内务部的工兵就执行了国防委员会的命令，[[炸毁了工厂、仓库和地铁的电气设备]]。",
            "跟在德军师团后面进城的是刽子手。希特勒分子七月间定下的事，正在莫斯科一件件变成现实：[[不接受投降]]，城市被封死，谁想出城就向谁开枪。首都要被[[夷为平地]]，好让他们冬天不必养活城里的人：广场上竖起了绞架，党卫队特别行动队搜捕共产党员、苏维埃工作人员和犹太人，轰炸机和大炮一条街一条街地把城市夷平。",
            "政府和国防人民委员部在古比雪夫办公。战线就在城东。新防线上[[一步也不许后退]]：首都一定要夺回来。[[Смерть немецким оккупантам！]]（德国占领者必亡！）",
          ],
          quotes: [
            {
              translation: "元首把莫斯科和列宁格勒夷为平地的决心不可动摇，为的是彻底摆脱这两座城市的居民，否则我们以后就不得不在整个冬天养活他们。毁灭这两座城市的任务由空军完成。",
              source: "哈尔德《战时日记》，1941 年 7 月 8 日（引自 А. М. 萨姆索诺夫《法西斯侵略的破产（1939—1945）》，1980 年，第 4 章）",
            },
            {
              translation: "任何企图离开城市、穿过我军阵地的人，都要开枪射击，把他们赶回去。",
              source: "德国陆军总司令部关于攻占莫斯科和处置其居民给中央集团军群的指示，1941 年 10 月 12 日（引自萨姆索诺夫，第 7 章）",
            },
            {
              translation: "到处竖起了绞架。山沟、防坦克壕和土坑里填满了在盖世太保刑讯室里被折磨死、被绞死、被枪杀的人的尸体。",
              source: "《第二次世界大战史（1939—1945）》第 4 卷，记 1941 年被占领的苏联国土（引自萨姆索诺夫，第 4 章）",
            },
            {
              translation: "如敌军出现在莫斯科城下，责成内务人民委员部——贝利亚同志和谢尔巴科夫同志——炸毁无法疏散的工厂、仓库和机关，以及地铁的全部电气设备（供水和下水道除外）。",
              source: "苏联国防委员会第 801 号决定《关于疏散苏联首都莫斯科》第 4 条，1941 年 10 月 15 日",
            },
          ],
          options: { fight: { label: "Отстоять Родину！保卫祖国", order: "守住首都以东的战线，把首都夺回来。", effects: moscowFallRulesZh("soviet") } },
          history: "占领者开始执行他们七月间定下的计划。城市被封死，谁想穿过战线就被枪杀。莫斯科的广场上竖起了绞架，被绞死的人胸前挂着牌子；党卫队特别行动队拿着名单挨家挨户搜捕共产党员、共青团员和犹太人，在院子里、在城郊把他们枪杀。城里没有面包：占领者把最后的存粮拉去供给自己的军队，[[饥饿在地下室里蔓延]]。博物馆和图书馆遭到洗劫，搬不走的就烧掉；在炸弹和炮弹下，城市[[一个街区接一个街区地燃烧]]。但首都没有低头：歼击营和游击队在废墟里继续战斗，红军正在城东集结，要[[把首都夺回来]]。",
        },
      }
    : {
        id: "moscowFall",
        army: "german",
        musicSrc: "audio/russlandlied.webm",
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        kind: "order",
        office: "Oberkommando des Heeres",
        officeEn: "German Army High Command",
        stamp: "Geheime Kommandosache",
        place: "Moskau",
        date: date,
        title: "Moscow is taken",
        text: [
          "The leading divisions of Army Group Centre have fought their way into Moscow. The city has not surrendered: [[the Russians blew up the factories, the depots and the metro]] before they gave it up, and the garrison fought on in the streets.",
          "The orders for the city are carried out. [[No capitulation is accepted]]; the city is sealed off, and whoever tries to cross the lines is driven back by fire. Moscow is to be [[levelled to the ground]] so that its people need not be fed through the winter: the Luftwaffe and the heavy artillery go to work. Behind the troops [[the Vorkommando Moskau of Einsatzgruppe B]] enters the city, to seize the files of the NKVD and the Party and to round up commissars, Communist officials and Jews.",
          "The Red Army holds a new front east of the city. The troops are worn out and the winter is coming: [[the campaign is not over]].",
        ],
        quotes: [
          {
            original: "Фюрер вновь решил, что капитуляция Москвы не должна быть принята, даже если она будет предложена противником. […] Всякий, кто попытается оставить город и пройти через наши позиции, должен быть обстрелян и отогнан обратно.",
            translation: "The Führer has decided once again that a capitulation of Moscow is not to be accepted, even if the enemy offers it. […] Anyone who tries to leave the city and pass through our positions is to be fired upon and driven back.",
            source: "Directive of the OKH to Army Group Centre on the capture of Moscow and the treatment of its population, 12 October 1941 (Russian text quoted by A. M. Samsonov, «Крах фашистской агрессии 1939–1945», 1980, ch. 7)",
          },
          {
            original: "Непоколебимо решение фюрера сравнять Москву и Ленинград с землей, чтобы полностью избавиться от населения городов, которое в противном случае мы потом будем вынуждены кормить в течение зимы.",
            translation: "The Führer's decision to raze Moscow and Leningrad to the ground is unshakeable, so as to be rid entirely of the population of these cities, which we would otherwise have to feed through the winter.",
            source: "F. Halder, Chief of the Army General Staff, war diary, 8 July 1941 (Russian text quoted by A. M. Samsonov, ch. 4)",
          },
          {
            original: "Die Bevölkerung dieser Gebiete, insbesondere die Bevölkerung der Städte, wird größter Hungersnot entgegensehen müssen. […] Viele 10 Millionen von Menschen werden in diesem Gebiet überflüssig und werden sterben oder nach Sibirien auswandern müssen.",
            translation: "The population of these areas, in particular the urban population, will have to face the most serious famine. […] Many tens of millions of people in this area will become superfluous and will die or have to emigrate to Siberia.",
            source: "Economic Policy Guidelines of the Economic Staff East, Agricultural Group, 23 May 1941 (Nuremberg document EC-126): the forest zone of Russia, with Moscow and Leningrad, is to be cut off from the grain of the south",
          },
          {
            original: "Heute ist nun der Beginn der letzten großen Entscheidungsschlacht dieses Jahres.",
            translation: "Today, then, is the beginning of the last great decisive battle of this year.",
            source: "Hitler, order of the day to the soldiers of the Eastern Front, 2 October 1941",
          },
        ],
        options: [{ id: "advance", label: "Weiter nach Osten! Press on", order: "Occupy the city and keep the front moving east.", effects: moscowFallRules("german") }],
        history: "The orders are carried out. The city is sealed off; columns of civilians trying to get out are [[driven back by machine-gun fire]]. The Vorkommando Moskau works through the files of the NKVD and the Party and shoots those on its lists; gallows go up on the squares. The stocks of the city go to the troops, and the population is left to [[the famine the planners had counted on]]. The Luftwaffe and the heavy artillery level the city district by district. Meanwhile the Red Army holds a new front to the east, destroyer battalions fight on in the ruins, and the frost sets in: [[the troops in the rubble of Moscow find no shelter]].",
        zh: {
          officeEn: "德国陆军总司令部",
          place: "莫斯科",
          date: dateZh,
          title: "莫斯科已被攻占",
          text: [
            "中央集团军群的先头师已打进莫斯科。这座城市没有投降：俄国人撤出前[[炸毁了工厂、仓库和地铁]]，守军仍在街巷里抵抗。",
            "关于这座城市的命令开始执行：[[不接受投降]]；城市被封锁，任何想穿越战线的人都被火力打回去。莫斯科要被[[夷为平地]]，好让冬天不必养活城里的居民：空军和重炮开始动手。部队后面，[[B 特别行动队的“莫斯科先遣队”]]进城，查抄内务部和党的档案，搜捕政委、共产党干部和犹太人。",
            "红军在城东建立了新的战线。部队已经精疲力竭，冬天就要来了：[[战局还没有结束]]。",
          ],
          quotes: [
            {
              translation: "元首再次决定，即使敌方提出，也不接受莫斯科的投降。[……]任何企图离开城市、穿过我军阵地的人，都要开枪射击，把他们赶回去。",
              source: "德国陆军总司令部关于攻占莫斯科和处置其居民给中央集团军群的指示，1941 年 10 月 12 日（俄译本引自 А. М. 萨姆索诺夫《法西斯侵略的破产（1939—1945）》，1980 年，第 7 章）",
            },
            {
              translation: "元首把莫斯科和列宁格勒夷为平地的决心不可动摇，为的是彻底摆脱这两座城市的居民，否则我们以后就不得不在整个冬天养活他们。",
              source: "陆军总参谋长哈尔德《战时日记》，1941 年 7 月 8 日（俄译本引自萨姆索诺夫，第 4 章）",
            },
            {
              translation: "这些地区的居民，尤其是城市居民，将面临最严重的饥荒。[……]这一地区将有数以千万计的人成为多余，他们将会死去，或者不得不迁往西伯利亚。",
              source: "东方经济参谋部农业组《经济政策方针》，1941 年 5 月 23 日（纽伦堡审判文件 EC-126）：把俄国的森林地带连同莫斯科和列宁格勒，同南方的粮食切断",
            },
            { translation: "今天，今年最后一场伟大的决战就此开始。", source: "希特勒《告东线士兵书》，1941 年 10 月 2 日" },
          ],
          options: { advance: { label: "Weiter nach Osten！继续向东", order: "占领城市，让战线继续东推。", effects: moscowFallRulesZh("german") } },
          history: "命令开始执行。城市被封锁，想出城的平民队伍被[[机枪火力打了回去]]。“莫斯科先遣队”逐份清查内务部和党的档案，按名单枪杀；广场上竖起了绞架。城里的存粮全部拨给部队，居民被留给[[计划者们早已算好的饥荒]]。空军和重炮一个街区接一个街区地把城市夷平。与此同时，红军在城东守着新的战线，苏军歼击营在废墟里继续战斗，严寒降临：[[莫斯科瓦砾堆里的部队找不到栖身之处]]。",
        },
      };
}
function showMoscowFall() {
  const sides = "" === playAIAs ? ["german", "soviet"] : ["soviet" === playAIAs ? "german" : "soviet"],
    step = function (k) {
      k < sides.length &&
        showDispatch(
          moscowFallEvent(sides[k]),
          function () {
            return { outcome: "" };
          },
          function () {
            step(k + 1);
          },
        );
    };
  step(0);
}
// ---------------------------------------------------------------- Turning points: the German depots, Moscow retaken, Tula relieved
// Each is announced once, on the whole screen, to the side(s) at the table: the side that acted first for two
// players at one screen. The effects are applied when the dispatch is shown, and counted under its last section.
const DEPOT_LOSS_FATIGUE = 2,
  MOSCOW_RETAKEN_RELIEF = 2,
  MOSCOW_LOST_FATIGUE = 1,
  TULA = { x: 10, y: 6 },
  DEPOTS = [
    {
      id: "smolensk",
      pos: { x: 1, y: 4 },
      ru: "Smolensk",
      de: "Smolensk",
      zh: "斯摩棱斯克",
      roleEn: "[[the main supply base of the German army group]] before Moscow",
      roleZh: "[[德军集团军群在莫斯科方向的主要补给基地]]",
    },
    { id: "roslavl", pos: { x: 2, y: 6 }, ru: "Roslavl", de: "Roslawl", zh: "罗斯拉夫利", roleEn: "[[the depot]] from which the enemy supplied his southern wing", roleZh: "敌人供应南翼的[[补给仓库]]" },
    { id: "vyazma", pos: { x: 5, y: 3 }, from: VYAZMA_RAILHEAD_TURN, ru: "Vyazma", de: "Wjasma", zh: "维亚济马", roleEn: "[[the railhead]] of the line the enemy had converted to his gauge", roleZh: "敌人改轨铁路的[[卸载站]]" },
  ];
function depotAt(hex) {
  return (
    DEPOTS.find(function (d) {
      return d.pos.x === hex.x && d.pos.y === hex.y && currentTurn.turn >= (d.from || 1);
    }) || null
  );
}
function eventDate() {
  return { en: MOSCOW_FALL_DATES[currentTurn.turn] + " 1941", zh: TURN_DATES_ZH[currentTurn.turn] };
}
function showSideDispatches(build, order, outcome) {
  const sides = ("" === playAIAs ? order : ["soviet" === playAIAs ? "german" : "soviet"]).filter(function (side) {
      return order.indexOf(side) > -1;
    }),
    step = function (k) {
      k < sides.length &&
        showDispatch(
          build(sides[k]),
          function () {
            return { outcome: outcome || "" };
          },
          function () {
            step(k + 1);
          },
        );
    };
  step(0);
}
// -------- a German depot taken by the Red Army
function depotRules(d) {
  return [
    "Captured stocks: the Russians get [[+1 replacement step]] next turn, besides the +1 of the liberation.",
    "Russian units in " + d.ru + " and next to it [[lose 4 fatigue]]: captured food, fuel and warm clothing.",
    "German units that drew on the depot and are now beyond the reach of every railhead [[gain " + DEPOT_LOSS_FATIGUE + " fatigue]] at once, and recover none until a railhead is within " + RAILHEAD_RANGE + " hexes (" + RAILHEAD_RANGE_MUD + " in the mud).",
    "smolensk" === d.id ? "While Smolensk is lost or cut off, [[no German unit recovers fatigue and the Germans get no replacements]]." : "If the Germans retake " + d.ru + ", it is a railhead again.",
  ];
}
function depotRulesZh(d) {
  return [
    "缴获库存：苏军下回合[[+1 级补充兵员]]（解放城市的 +1 另算）。",
    d.zh + "城内和相邻格的苏军[[疲劳 −4]]：缴获了口粮、燃料和冬衣。",
    "靠这个仓库补给、现在离所有铁路卸载站都太远的德军，立即[[疲劳 +" + DEPOT_LOSS_FATIGUE + "]]，在 " + RAILHEAD_RANGE + " 格内（泥泞时 " + RAILHEAD_RANGE_MUD + " 格）重新有铁路卸载站之前不能恢复疲劳。",
    "smolensk" === d.id ? "斯摩棱斯克失守或被切断期间，[[所有德军都不能恢复疲劳，德军也没有补充兵员]]。" : "德军夺回" + d.zh + "后，它重新成为铁路卸载站。",
  ];
}
function depotTakenEffects(d) {
  const h = grid.get(d.pos),
    heads = germanRailheads(),
    range = railheadRange();
  let ru = 0,
    de = 0;
  liberationBonus++;
  for (const u of b4mUnits) {
    if (!u.position) continue;
    const at = grid.get(u.position);
    "soviet" === u.army && h.distance(at) <= 1 && (addFatigue(u, -FATIGUE.perLevel), ru++);
    "german" === u.army && h.distance(at) <= range && railheadDistance(at, heads) > range && (addFatigue(u, DEPOT_LOSS_FATIGUE), de++);
  }
  scheduleStatusRefresh();
  return L(
    "Now: " + ru + " Russian unit" + (1 === ru ? "" : "s") + " −4 fatigue; " + de + " German unit" + (1 === de ? "" : "s") + " +" + DEPOT_LOSS_FATIGUE + " fatigue; +1 Russian replacement step next turn.",
    "现在：" + ru + " 支苏军疲劳 −4；" + de + " 支德军疲劳 +" + DEPOT_LOSS_FATIGUE + "；苏军下回合 +1 级补充兵员。",
  );
}
function depotEvent(d, side) {
  const date = eventDate();
  return "soviet" === side
    ? {
        id: "depot",
        army: "soviet",
        kind: "radio",
        office: "Советское Информбюро",
        officeEn: "Soviet Information Bureau, Moscow radio",
        stamp: "В последний час",
        slogan: { original: "Смерть немецким оккупантам!", en: "Death to the German occupiers!", zh: "德国占领者必亡！" },
        place: "Moscow radio",
        date: date.en,
        title: "The enemy's depots at " + d.ru + " are ours",
        text: [
          "Our troops have taken " + d.ru + ", " + d.roleEn + ". In the warehouses and on the tracks of the station the German-fascist invaders left [[fuel, shells and rations]], and the warm clothes they had taken from the population: they had no time to set them on fire.",
          "The trophies go to the front at once: fuel for our tanks, bread and felt boots for our soldiers. Cut off from " + d.ru + ", the Hitlerite divisions are left [[without shells, fuel or bread]].",
        ],
        options: [{ id: "onward", label: "Вперёд! Onward", order: "Put the captured stocks to use and keep advancing.", effects: depotRules(d) }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "The quartermasters count the trophies while the guns move on. West of " + d.ru + " the German truck columns turn back towards the next railhead, and the divisions that drew on the depot [[go hungry]].",
        zh: {
          officeEn: "苏联情报局，莫斯科广播电台",
          place: "莫斯科广播电台",
          date: date.zh,
          title: "我军夺取了敌人在" + d.zh + "的补给仓库",
          text: [
            "我军攻占了" + d.zh + "，" + d.roleZh + "。德国法西斯侵略者在仓库里和车站的线路上丢下了[[燃料、炮弹和口粮]]，还有从居民那里抢来的冬衣：他们没来得及放火烧掉。",
            "缴获的物资马上送往前线：燃料给我们的坦克，面包和毡靴给我们的战士。失去了" + d.zh + "，希特勒匪帮的各师[[断了炮弹、燃料和口粮]]。",
          ],
          options: { onward: { label: "Вперёд！前进", order: "用好缴获的物资，继续进攻。", effects: depotRulesZh(d) } },
          history: "军需人员清点战利品，大炮已经继续向前。在" + d.zh + "以西，德军的汽车运输纵队掉头开往下一个铁路卸载站，靠这个仓库补给的各师[[开始挨饿]]。",
        },
      }
    : {
        id: "depot",
        army: "german",
        musicSrc: "audio/lili_marleen.webm",
        kind: "order",
        office: "Oberkommando des Heeres",
        officeEn: "German Army High Command, Quartermaster General",
        stamp: "Geheime Kommandosache",
        place: d.de,
        date: date.en,
        title: "The depot at " + d.de + " is lost",
        text: [
          "The Russians have taken " + d.de + ". [[The depot and the railhead are lost]] with everything stored there: what could not be moved in time fell into the enemy's hands.",
          "smolensk" === d.id
            ? "Smolensk was the supply base of the army group: until it is retaken or reconnected, [[no unit can rest and recover, and no replacements arrive]]."
            : "The divisions that drew on " + d.de + " must now be supplied from the next railhead, by truck columns over roads that [[can barely carry them]].",
        ],
        quotes: [
          {
            original: "С каждым днем увеличиваются трудности снабжения, осуществляемого по железным дорогам. Именно трудности снабжения являются главной причиной всех наших бедствий, ибо без горючего наши автомашины не могут передвигаться.",
            translation: "Every day the difficulties of supply by rail grow. It is precisely the difficulties of supply that are [[the main cause of all our troubles]], for without fuel our vehicles cannot move.",
            source: "H. Guderian, letter of 17 November 1941 (Russian edition of his memoirs, «Воспоминания солдата», 1954, ch. 6)",
          },
        ],
        options: [{ id: "bring", label: "Jawohl! Understood", order: "Bring the supplies up from the next railhead.", effects: depotRules(d) }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "The truck columns turn back towards the next railhead and stick in the snow and the mud on the roads west of " + d.de + ". At the front the divisions [[count their last shells]].",
        zh: {
          officeEn: "德国陆军总司令部，军需总监",
          place: d.zh,
          date: date.zh,
          title: d.zh + "的补给仓库失守",
          text: [
            "俄国人攻占了" + d.zh + "。[[仓库和铁路卸载站连同库存全部丢失]]：来不及运走的东西都落到了敌人手里。",
            "smolensk" === d.id
              ? "斯摩棱斯克是集团军群的补给基地：在夺回或重新接通之前，[[部队无法休整恢复，补充兵员也到不了]]。"
              : "靠" + d.zh + "补给的各师，现在只能从下一个铁路卸载站，用汽车运输纵队沿着[[几乎走不动车]]的道路运送。",
          ],
          quotes: [
            {
              translation: "铁路补给的困难一天比一天大。正是补给的困难，才是[[我们一切苦难的主要原因]]，因为没有燃料，我们的车辆就动不了。",
              source: "古德里安 1941 年 11 月 17 日的信（据其回忆录俄译本《一个士兵的回忆》，1954 年，第 6 章）",
            },
          ],
          options: { bring: { label: "Jawohl！遵命", order: "从下一个铁路卸载站把补给运上来。", effects: depotRulesZh(d) } },
          history: "汽车运输纵队掉头开往下一个铁路卸载站，在" + d.zh + "以西的道路上陷进雪和泥里。前线各师开始[[清点最后的炮弹]]。",
        },
      };
}
function showDepotTaken(d) {
  const outcome = depotTakenEffects(d);
  showSideDispatches(
    function (side) {
      return depotEvent(d, side);
    },
    ["soviet", "german"],
    outcome,
  );
}
// -------- Moscow retaken by the Red Army (lost by the Germans)
function moscowRetakenRules() {
  return [
    "Every Russian unit [[loses " + MOSCOW_RETAKEN_RELIEF + " fatigue]] at once: the news runs along the whole front.",
    "Every German unit [[gains " + MOSCOW_LOST_FATIGUE + " fatigue]] at once.",
    "The Red Army no longer wears down each turn; the city stays a ruin, an ordinary town (no defences of the capital, air defence, stocks or depots).",
    "Moscow counts 5 victory points for the Russians again.",
  ];
}
function moscowRetakenRulesZh() {
  return [
    "苏军每支部队立即[[疲劳 −" + MOSCOW_RETAKEN_RELIEF + "]]：消息传遍了整条战线。",
    "德军每支部队立即[[疲劳 +" + MOSCOW_LOST_FATIGUE + "]]。",
    "苏军不再每回合加疲劳；城市仍是废墟，只算普通城镇（没有首都的防御、防空、储备和仓库）。",
    "莫斯科重新为苏军计 5 胜利点。",
  ];
}
function moscowRetakenEffects() {
  let ru = 0,
    de = 0;
  for (const u of b4mUnits)
    u.position && ("soviet" === u.army ? (addFatigue(u, -MOSCOW_RETAKEN_RELIEF), ru++) : (addFatigue(u, MOSCOW_LOST_FATIGUE), de++));
  scheduleStatusRefresh();
  return L(
    "Now: " + ru + " Russian units −" + MOSCOW_RETAKEN_RELIEF + " fatigue; " + de + " German units +" + MOSCOW_LOST_FATIGUE + ".",
    "现在：" + ru + " 支苏军疲劳 −" + MOSCOW_RETAKEN_RELIEF + "；" + de + " 支德军疲劳 +" + MOSCOW_LOST_FATIGUE + "。",
  );
}
function moscowRetakenEvent(side) {
  const date = eventDate();
  return "soviet" === side
    ? {
        id: "moscowRetaken",
        army: "soviet",
        kind: "radio",
        office: "Советское Информбюро",
        officeEn: "Soviet Information Bureau, Moscow radio",
        stamp: "В последний час",
        slogan: { original: "Наше дело правое. Враг будет разбит. Победа будет за нами!", en: "Our cause is just. The enemy will be beaten. Victory will be ours!", zh: "我们的事业是正义的。敌人必将被击溃。胜利必将属于我们！" },
        photo: { src: "img/splash_kremlin_1941.jpg", caption: "Searchlights and tracer over the Kremlin, 1941", captionZh: "1941 年，克里姆林宫上空的探照灯和曳光弹" },
        place: "Moscow",
        date: date.en,
        title: "Moscow is ours again!",
        text: [
          "Our troops have driven the German-fascist invaders out of [[the capital of the Soviet state]]. The red flag flies again over the Kremlin.",
          "The liberators walk through a dead city: [[burned districts]], blown-up bridges, gallows on the squares, the bodies of the shot in the courtyards. Every Soviet man now knows what the Hitlerites had prepared for Moscow, and [[will not forgive them]].",
          "The enemy is falling back to the west, abandoning his equipment. [[Forward, to the west!]]",
        ],
        quotes: [
          {
            original: "Немецкие захватчики хотят иметь истребительную войну с народами СССР. Что же, если немцы хотят иметь истребительную войну, они ее получат […] Никакой пощады немецким оккупантам! Смерть немецким оккупантам!",
            translation: "The German invaders want a war of extermination against the peoples of the USSR. Well, if the Germans want a war of extermination, they shall have it […] [[No mercy for the German occupiers! Death to the German occupiers!]]",
            source: "J. V. Stalin, report at the ceremonial session of the Moscow Soviet, 6 November 1941 (Pravda, 7 November)",
          },
        ],
        options: [{ id: "west", label: "На Запад! Westward", order: "Pursue the enemy without respite.", effects: moscowRetakenRules() }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "The bells are silent and the metro is dark, but Moscow is free. Sappers clear the mines from the streets, the first trains come in from the east, and the divisions of the Western Front march through the ruins [[towards the west]].",
        zh: {
          officeEn: "苏联情报局，莫斯科广播电台",
          place: "莫斯科",
          date: date.zh,
          title: "莫斯科重新回到我们手中！",
          text: [
            "我军把德国法西斯侵略者赶出了[[苏维埃国家的首都]]。克里姆林宫上空重新飘扬着红旗。",
            "解放者走过一座死城：[[被烧毁的街区]]、被炸断的桥梁、广场上的绞架、院子里被枪杀的人的尸体。现在每一个苏联人都知道希特勒分子为莫斯科准备了什么，[[决不饶恕他们]]。",
            "敌人丢下装备向西溃退。[[向西前进！]]",
          ],
          quotes: [
            {
              translation: "德国侵略者想要对苏联各族人民进行歼灭战。好吧，如果德国人想要进行歼灭战，他们就会得到歼灭战……[[决不饶恕德国占领者！消灭德国占领者！]]",
              source: "И. В. 斯大林在莫斯科苏维埃庆祝大会上的报告，1941 年 11 月 6 日（《真理报》11 月 7 日）",
            },
          ],
          options: { west: { label: "На Запад！向西追击", order: "不停地追击敌人。", effects: moscowRetakenRulesZh() } },
          history: "钟声沉默，地铁一片漆黑，但莫斯科自由了。工兵清除街道上的地雷，第一批列车从东面开进来，西方面军各师穿过废墟[[向西开去]]。",
        },
      }
    : {
        id: "moscowRetaken",
        army: "german",
        musicSrc: "audio/lili_marleen.webm",
        kind: "order",
        office: "Oberkommando des Heeres",
        officeEn: "German Army High Command",
        stamp: "Geheime Kommandosache",
        place: "Moskau",
        date: date.en,
        title: "Moscow is lost",
        text: [
          "The Russians have broken into Moscow; the garrison has been [[driven out of the ruins]] with heavy losses, and most of its heavy weapons stayed behind in the snow.",
          "The capital the army group was sent to take is in enemy hands again. The troops are freezing, the trains do not come, and the enemy attacks along the whole front: [[the front must hold where it stands]].",
        ],
        quotes: [
          {
            translation: "The Fuehrer has ordered: Larger evasive movements cannot be made. They will lead to a total loss of heavy weapons and equipment. Commanding generals, commanders, and officers are to intervene in person to compel the troops to [[fanatical resistance]] in their positions without regard to enemy broken through on the flanks or to the rear.",
            source: "Teletype to Army Group Centre, 18 December 1941 (as translated in the US Army official history)",
          },
        ],
        options: [{ id: "hold", label: "Halten! Hold", order: "Hold every position west of the city.", effects: moscowRetakenRules() }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "Columns of exhausted men trudge west along roads choked with snow, past burning villages. Behind them the Russian cavalry and ski troops [[slip through the gaps]] in the front.",
        zh: {
          officeEn: "德国陆军总司令部",
          place: "莫斯科",
          date: date.zh,
          title: "莫斯科失守",
          text: [
            "俄国人打进了莫斯科；守军伤亡惨重，[[被赶出了废墟]]，大部分重武器丢在了雪地里。",
            "集团军群奉命夺取的首都又回到了敌人手里。部队在挨冻，火车不来，敌人在整条战线上进攻：[[战线必须原地守住]]。",
          ],
          quotes: [
            {
              translation: "元首命令：不得进行较大规模的后撤，那将导致重武器和装备的全部损失。各级指挥官和军官要亲自出面，迫使部队在阵地上进行[[狂热的抵抗]]，不管敌人是否已从侧翼或后方突破。",
              source: "1941 年 12 月 18 日发给中央集团军群的电传（据美国陆军官方战史的英译）",
            },
          ],
          options: { hold: { label: "Halten！坚守", order: "守住城西的每一个阵地。", effects: moscowRetakenRulesZh() } },
          history: "精疲力竭的队伍沿着积雪堵塞的道路向西跋涉，经过一座座燃烧的村庄。在他们身后，俄国骑兵和滑雪部队[[从战线的缺口钻了进来]]。",
        },
      };
}
function showMoscowRetaken() {
  const outcome = moscowRetakenEffects();
  showSideDispatches(moscowRetakenEvent, ["soviet", "german"], outcome);
}
// -------- Tula holds out and is relieved: its garrison cut off at the start of a Russian turn, the city later
// reconnected while still Russian (in 1941 the ring was never closed: 5 to 6 km were missing)
function tulaRules() {
  return [
    "The units in Tula [[lose 4 fatigue]]: the siege is over.",
    "Tula's stocks are [[full again]] (" + CITY_STOCK_CAP["10,6"] + ").",
    "The Russians get [[+1 replacement step]] next turn.",
  ];
}
function tulaRulesZh() {
  return ["图拉城内的部队[[疲劳 −4]]：围城结束了。", "图拉的储备[[重新补满]]（" + CITY_STOCK_CAP["10,6"] + " 点）。", "苏军下回合[[+1 级补充兵员]]。"];
}
function tulaCheck(atTurnStart) {
  const h = grid.get(TULA);
  if (!h || "soviet" !== h.control || decisions.tulaRelieved) return;
  if (!isInCommunication(h, "soviet")) {
    const g = lookupUnit(h);
    atTurnStart && g && "soviet" === g.army && !decisions.tulaBesieged && (decisions.tulaBesieged = currentTurn.turn);
    return;
  }
  // the relief is announced during play, when a move reopens the way (not at the start of a turn, where the
  // command decisions are shown)
  !atTurnStart && decisions.tulaBesieged && ((decisions.tulaRelieved = currentTurn.turn), setTimeout(showTulaRelieved, 900));
}
function tulaRelievedEffects() {
  const h = grid.get(TULA),
    g = lookupUnit(h);
  let n = 0;
  (g && "soviet" === g.army && (addFatigue(g, -FATIGUE.perLevel), n++),
    (cityStocks["10,6"] = { owner: "soviet", value: CITY_STOCK_CAP["10,6"] }),
    liberationBonus++,
    scheduleStatusRefresh());
  return L(
    "Now: " + n + " unit" + (1 === n ? "" : "s") + " in Tula −4 fatigue; stocks " + CITY_STOCK_CAP["10,6"] + "/" + CITY_STOCK_CAP["10,6"] + "; +1 Russian replacement step next turn.",
    "现在：图拉城内 " + n + " 支部队疲劳 −4；储备 " + CITY_STOCK_CAP["10,6"] + "/" + CITY_STOCK_CAP["10,6"] + "；苏军下回合 +1 级补充兵员。",
  );
}
function tulaEvent(side) {
  const date = eventDate(),
    samsonov = {
      original: "Фашистам оставалось овладеть узкой полосой территории в 5 — 6 км, но добиться успеха они не смогли. […] Гудериану так и не удалось полностью окружить Тулу, а затем захватить ее.",
      translation: "The fascists had only a narrow strip of ground 5 to 6 km wide left to take, but they could not succeed. […] Guderian never managed to encircle Tula completely, [[let alone take it]].",
      source: "A. M. Samsonov, «Крах фашистской агрессии 1939–1945», 1980, ch. 7",
    },
    samsonovZh = {
      translation: "法西斯只差拿下一条 5 至 6 公里宽的狭长地带，但他们没能成功。[……]古德里安始终没能完全包围图拉，[[更不用说攻占它了]]。",
      source: "А. М. 萨姆索诺夫《法西斯侵略的破产（1939—1945）》，1980 年，第 7 章",
    };
  return "soviet" === side
    ? {
        id: "tulaRelieved",
        army: "soviet",
        kind: "order",
        office: "Тульский городской комитет обороны",
        officeEn: "Tula City Defence Committee",
        stamp: "Совершенно секретно",
        slogan: { original: "Смерть немецким оккупантам!", en: "Death to the German occupiers!", zh: "德国占领者必亡！" },
        place: "Tula",
        date: date.en,
        title: "Tula has held out!",
        text: [
          "For weeks the enemy tried to take Tula: Guderian's tanks struck from the south, then went round the city to the east and the north to [[close the ring]]. The 50th Army, the Tula workers' regiment and the NKVD troops held every street.",
          "Now the ring is broken: [[the road and the railway to Moscow are open again]]. Tula, the city of gunsmiths, has not been taken.",
        ],
        quotes: [samsonov],
        options: [{ id: "stands", label: "Тула выстояла! Tula stands", order: "Rest the garrison and fill the stocks.", effects: tulaRules() }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "Trains come in from Moscow with shells and bread, and the wounded go out. The workshops that repaired guns and tanks all through the siege keep working, and the garrison [[sleeps for the first time in weeks]].",
        zh: {
          officeEn: "图拉市国防委员会",
          place: "图拉",
          date: date.zh,
          title: "图拉守住了！",
          text: [
            "几个星期以来，敌人一直想拿下图拉：古德里安的坦克先从南面进攻，又从东面和北面绕过城市，想[[合上包围圈]]。第 50 集团军、图拉工人团和内务人民委员部部队守住了每一条街。",
            "现在包围圈被打破了：[[通往莫斯科的公路和铁路重新畅通]]。兵工之城图拉没有被攻占。",
          ],
          quotes: [samsonovZh],
          options: { stands: { label: "Тула выстояла！图拉屹立不倒", order: "让守军休整，把储备补满。", effects: tulaRulesZh() } },
          history: "列车从莫斯科运来炮弹和面包，把伤员运出去。整个围城期间一直在修理火炮和坦克的工场继续开工，守军[[几个星期来第一次睡上了觉]]。",
        },
      }
    : {
        id: "tulaRelieved",
        army: "german",
        musicSrc: "audio/lili_marleen.webm",
        kind: "order",
        office: "Panzerarmeeoberkommando 2",
        officeEn: "Second Panzer Army headquarters",
        stamp: "Geheime Kommandosache",
        place: "Tula",
        date: date.en,
        title: "Tula is not taken",
        text: [
          "The ring around Tula could not be closed: the Russians have reopened the road and the railway to Moscow. The garrison will be relieved and resupplied, and the divisions around the city are [[worn out by weeks of attacks]].",
        ],
        quotes: [
          {
            original: "Ввиду невозможности взять Тулу с фронта генерал барон фон Гейер предложил обойти город с востока.",
            translation: "As Tula could not be taken from the front, General Baron von Geyr proposed [[going round the city to the east]].",
            source: "H. Guderian, «Воспоминания солдата» (Russian edition of his memoirs, 1954), ch. 6",
          },
        ],
        options: [{ id: "ok", label: "Jawohl! Understood", order: "Keep the front around Tula.", effects: tulaRules() }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "Trains roll into Tula from Moscow. The divisions of the Second Panzer Army dig into the frozen ground around the city, [[short of fuel and of winter clothing]].",
        zh: {
          officeEn: "第 2 装甲集团军司令部",
          place: "图拉",
          date: date.zh,
          title: "图拉没有拿下",
          text: ["图拉周围的包围圈没能合上：俄国人重新打通了通往莫斯科的公路和铁路。守军会得到换防和补给，而城外各师已经[[被几个星期的进攻拖垮了]]。"],
          quotes: [
            {
              translation: "由于无法从正面攻取图拉，盖尔·冯·施韦彭堡男爵将军建议[[从东面绕过这座城市]]。",
              source: "古德里安《一个士兵的回忆》（俄译本，1954 年），第 6 章",
            },
          ],
          options: { ok: { label: "Jawohl！遵命", order: "守住图拉周围的战线。", effects: tulaRulesZh() } },
          history: "列车从莫斯科开进图拉。第 2 装甲集团军各师在城外冻硬的地面上挖掘工事，[[燃料和冬装都不够]]。",
        },
      };
}
function showTulaRelieved() {
  const outcome = tulaRelievedEffects();
  showSideDispatches(tulaEvent, ["soviet", "german"], outcome);
}
// -------- the partisan war: announced when the first band forms behind the German lines during the game
function partisanWarStarts() {
  decisions.partisanWar ||
    ((decisions.partisanWar = currentTurn.turn),
    setTimeout(function () {
      showSideDispatches(partisanEvent, ["soviet", "german"]);
    }, 900));
}
function partisanEvent(side) {
  const date = eventDate();
  return "soviet" === side
    ? {
        id: "partisanWar",
        army: "soviet",
        kind: "order",
        musicSrc: "audio/partisans_po_dolinam.mp3",
        office: "Московский комитет ВКП(б)",
        officeEn: "Moscow Committee of the VKP(b)",
        stamp: "Совершенно секретно",
        slogan: { original: "Смерть немецким оккупантам!", en: "Death to the German occupiers!", zh: "德国占领者必亡！" },
        place: "Moscow",
        date: date.en,
        title: "The partisan war flares up",
        text: [
          "Behind the German lines the partisans have gone into the forests: Party members, NKVD detachments, men of the destroyer battalions, collective farmers. They blow up bridges and trains, ambush the supply columns and lead our troops round the enemy's flanks.",
          "The occupiers answer with gallows and burned villages, and every gallows sends more men into the forests. [[The ground burns under the occupiers' feet.]]",
        ],
        quotes: [
          {
            original: "В занятых врагом районах нужно создавать партизанские отряды, конные и пешие, создавать диверсионные группы для борьбы с частями вражеской армии, для разжигания партизанской войны всюду и везде…",
            translation: "In the areas occupied by the enemy, partisan detachments, mounted and on foot, must be formed, and sabotage groups created to fight the units of the enemy army, [[to kindle partisan war everywhere]]…",
            source: "J. V. Stalin, radio address of 3 July 1941",
          },
        ],
        options: [{ id: "strike", label: "За Родину! For the Motherland", order: "Strike the enemy in his rear.", effects: [] }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "At night the trains of Army Group Centre go off the rails, the trucks burn on the forest roads, and the German garrisons do not leave their villages after dark. [[Every band ties down troops]] the front needs.",
        zh: {
          officeEn: "联共（布）莫斯科委员会",
          place: "莫斯科",
          date: date.zh,
          title: "游击战争燃遍敌后",
          text: [
            "在德军后方，游击队员们进了森林：党员、内务人民委员部的分队、歼击营的战士、集体农庄庄员。他们炸毁桥梁和火车，伏击补给车队，引导我军绕到敌人的侧翼。",
            "占领者用绞架和烧毁的村庄来回答，而每一座绞架都把更多的人赶进森林。[[占领者脚下的土地在燃烧。]]",
          ],
          quotes: [
            {
              translation: "在敌人占领的地区，必须组织骑兵和步兵游击队，组织破坏小组去同敌军部队作斗争，[[到处燃起游击战争]]……",
              source: "И. В. 斯大林，1941 年 7 月 3 日广播演说",
            },
          ],
          options: { strike: { label: "За Родину！为了祖国", order: "在敌人后方打击敌人。", effects: [] } },
          history: "夜里，中央集团军群的火车一列列出轨，卡车在林间道路上燃烧，德军守备队天黑后不敢走出村子。[[每一支游击队都牵制着]]前线急需的兵力。",
        },
      }
    : {
        id: "partisanWar",
        army: "german",
        musicSrc: "audio/erika.webm",
        kind: "order",
        office: "Befehlshaber des rückwärtigen Heeresgebiets Mitte",
        officeEn: "Commander of the Rear Area of Army Group Centre",
        stamp: "Geheim",
        place: "Smolensk",
        date: date.en,
        title: "Bands in the rear area",
        text: [
          "Partisan bands attack the supply columns and blow up the railways behind the front. The security divisions are far too few for the forests.",
          "Under the order of 16 September 1941, fifty to a hundred hostages are to be shot for every German soldier killed. [[The terror only drives more men into the forests.]]",
        ],
        options: [{ id: "secure", label: "Jawohl! Understood", order: "Secure the railways and the supply roads.", effects: [] }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "Guards are doubled on the bridges and the stations, the columns drive only by day and in convoy, and still [[the trains go off the rails]].",
        zh: {
          officeEn: "中央集团军群后方地区司令",
          place: "斯摩棱斯克",
          date: date.zh,
          title: "后方地区出现“匪帮”",
          text: [
            "游击队袭击补给车队，炸毁前线后方的铁路。保安师的兵力远远不够搜遍这些森林。",
            "按 1941 年 9 月 16 日的命令，每有一名德军士兵被杀，就要处决 50 到 100 名人质。[[恐怖只把更多的人赶进了森林。]]",
          ],
          options: { secure: { label: "Jawohl！遵命", order: "保障铁路和补给道路的安全。", effects: [] } },
          history: "桥梁和车站的岗哨加了一倍，车队只在白天结队行驶，可[[火车还是一列列出轨]]。",
        },
      };
}
// -------- a shock army on the map: announced to the Russian side the first time one appears (the 1st Shock Army, or
// the one the NKVD brigade makes of an army at half strength). The Germans get no word of it: Foreign Armies East
// still held that the Red Army had no reserves left when the counteroffensive began on 5 December.
function shockArmyAppears() {
  decisions.shockArmy ||
    ((decisions.shockArmy = currentTurn.turn),
    setTimeout(function () {
      showSideDispatches(shockArmyEvent, ["soviet"]);
    }, 900));
}
function shockArmyEvent() {
  const date = eventDate();
  return {
        id: "shockArmy",
        army: "soviet",
        kind: "order",
        musicSrc: "audio/artillery_march.webm",
        office: "Ставка Верховного Главнокомандования",
        officeEn: "Headquarters of the Supreme High Command",
        stamp: "Совершенно секретно",
        slogan: { original: "Наше дело правое. Враг будет разбит. Победа будет за нами!", en: "Our cause is just. The enemy will be beaten. Victory will be ours!", zh: "我们的事业是正义的。敌人必将被击溃。胜利必将属于我们！" },
        place: "Moscow",
        date: date.en,
        title: "A shock army goes into the line",
        text: [
          "A shock army has joined the front: an army built not to hold but [[to break the enemy's front]], with more guns, more mortars and more automatic weapons than any other, and the Katyushas of the Guards mortar units.",
          "Its divisions come from the depths of the country, from the Urals and Siberia. Where it strikes, [[the enemy will not stand]].",
        ],
        options: [{ id: "fire", label: "Огонь! Fire", order: "Throw the shock army where the front must be broken.", effects: [] }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "The trains unload at night; by dawn the guns are dug in and camouflaged with snow. The gunners wait for the order, and [[the order will come]].",
        zh: {
          officeEn: "最高统帅部大本营",
          place: "莫斯科",
          date: date.zh,
          title: "突击集团军开上前线",
          text: [
            "一个突击集团军加入了前线：它不是用来坚守的，而是用来[[突破敌人战线]]的，火炮、迫击炮和自动武器比任何集团军都多，还配有近卫火箭炮部队的“喀秋莎”。",
            "它的各师来自祖国的纵深，来自乌拉尔和西伯利亚。它打到哪里，[[敌人就守不住哪里]]。",
          ],
          options: { fire: { label: "Огонь！开火", order: "把突击集团军投到必须突破战线的地方。", effects: [] } },
          history: "列车在夜里卸车；天亮之前，火炮已经挖好阵地，用雪伪装起来。炮手们等着命令，[[命令一定会来]]。",
        },
      };
}
// -------- the "European crusade against Bolshevism": at the start of the German turn 6 (23 November) the French
// Legion of volunteers against Bolshevism (Infantry Regiment 638) comes up to the front west of Moscow, the only
// foreign unit to fight in the battle; the Spanish Blue Division fights on the Volkhov. A German dispatch, once.
function crusadeCheck() {
  6 === currentTurn.turn &&
    !decisions.crusade &&
    ((decisions.crusade = currentTurn.turn),
    setTimeout(function () {
      showSideDispatches(crusadeEvent, ["german"]);
    }, 900));
}
function crusadeEvent() {
  const date = eventDate();
  return {
    id: "crusade",
    army: "german",
    kind: "order",
    musicSrc: "audio/division_azul.webm",
    office: "Oberkommando des Heeres",
    officeEn: "German Army High Command",
    stamp: "Geheime Kommandosache",
    place: "Moskau",
    date: date.en,
    title: "The European crusade",
    text: [
      "Propaganda calls the war in the East [[a European crusade against Bolshevism]]. The French Legion of volunteers against Bolshevism, Infantry Regiment 638 of the Wehrmacht, is coming up to the front west of Moscow under the 7th Infantry Division: the only foreign unit in the battle for the capital. In the north the Spanish Blue Division holds the Volkhov.",
      "Badly equipped, without winter clothing, the volunteers go into the line in the hardest frost of the year, in the snowbound woods west of Moscow, [[at twenty degrees of frost and below]].",
    ],
    options: [{ id: "noted", label: "Zur Kenntnis. Noted", order: "Put the legion into the line.", effects: [] }],
    outcomeTitle: ["What happens next", "接下来发生了什么"],
    history: "The legion attacks in the snow at the beginning of December. Within days it has lost [[a large part of its men to fire and frostbite]], and it is pulled out of the line before the Soviet counter-offensive breaks.",
    zh: {
      officeEn: "德国陆军总司令部",
      place: "莫斯科",
      date: date.zh,
      title: "欧洲十字军",
      text: [
        "宣传把东方的战争叫作[[讨伐布尔什维主义的欧洲十字军]]。法国反布尔什维主义志愿军团，即国防军第 638 步兵团，正在第 7 步兵师指挥下开到莫斯科以西的前线：它是这场首都争夺战里唯一的外国部队。北面，西班牙蓝色师守着沃尔霍夫河。",
        "这些志愿兵装备很差，没有冬装，在一年里最冷的时候开进战线，开进莫斯科以西积雪的森林，[[气温在零下二十度以下]]。",
      ],
      options: { noted: { label: "Zur Kenntnis！已知悉", order: "把军团投入战线。", effects: [] } },
      history: "12 月初，军团在雪地里发起进攻。几天之内，它就因[[战火和冻伤损失了大批人员]]，在苏军反攻打响之前被撤下了战线。",
    },
  };
}
// -------- the first Soviet town the Germans take in a game: the communiqué of the Wehrmacht on a banner, with a song
// of the "Ostland" (the colonisation of the East); the two songs take turns from one game to the next
function townOccupied(hex) {
  if (decisions.townOccupied) return;
  decisions.townOccupied = currentTurn.turn;
  const n = cityNameOf(hex.x + "," + hex.y, "a town", "一座城镇");
  showEventBanner(
    '<small class="banner_kicker">Das Oberkommando der Wehrmacht gibt bekannt</small><img src="img/german_marker.png" />' +
      L("German troops have taken " + n + ".", "德军占领了" + n + "。") +
      "<span>" +
      L(
        "The occupation authorities follow the troops: registration of the inhabitants, requisitions of grain and cattle, forced labour, the hunt for Party members and Jews; notices and gallows go up in the square.",
        "占领当局跟着部队进城：登记居民，征收粮食和牲畜，强征劳工，搜捕党员和犹太人；广场上贴出了告示，竖起了绞架。",
      ) +
      "</span>",
    6e3,
  );
  let k = 0;
  try {
    ((k = +(window.localStorage.getItem("b4mOstlandSong") || 0)), window.localStorage.setItem("b4mOstlandSong", String(1 - k)));
  } catch (e) {}
  playEndingMusic(0 === k ? "audio/ostland_reiten.webm" : "audio/ostland_ritt.webm");
}
// -------- the double battle of Vyazma and Bryansk: in October 1941 seven Soviet armies were cut off before the mud
// (the 19th, 20th, 24th and 32nd at Vyazma, the 3rd, 13th and 50th at Bryansk). If the Red Army has lost as many men
// by the time the mud begins (the start of the German turn 3): seven armies of 40,000, a dispatch for each side, once.
const POCKETS_ARMIES = 7;
function pocketsCheck() {
  3 === currentTurn.turn &&
    !decisions.pockets &&
    currentLosses().soviet >= POCKETS_ARMIES * MEN.soviet &&
    ((decisions.pockets = currentTurn.turn),
    setTimeout(function () {
      showSideDispatches(pocketsEvent, ["german", "soviet"]);
    }, 900));
}
function pocketsEvent(side) {
  const date = eventDate(),
    lost = fmtMen(currentLosses().soviet);
  return "soviet" === side
    ? {
        id: "pockets",
        army: "soviet",
        kind: "order",
        office: "Ставка Верховного Главнокомандования",
        officeEn: "Headquarters of the Supreme High Command",
        stamp: "Совершенно секретно",
        slogan: { original: "Наше дело правое. Враг будет разбит. Победа будет за нами!", en: "Our cause is just. The enemy will be beaten. Victory will be ours!", zh: "我们的事业是正义的。敌人必将被击溃。胜利必将属于我们！" },
        place: "Moscow",
        date: date.en,
        title: "The pockets of Vyazma and Bryansk",
        text: [
          "The German panzer groups have broken through on both flanks and closed the ring behind Vyazma: the 19th, 20th, 24th and 32nd Armies are surrounded west of the city. To the south the 3rd, 13th and 50th Armies of the Bryansk Front are cut off and fight their way east through the forests.",
          "Before the mud the Red Army has lost [[" + lost + " men]], as many as in the autumn of 1941. The surrounded armies fight on and tie down the enemy's divisions: every day they hold is [[a day won for the Mozhaisk line]].",
        ],
        quotes: [
          {
            original: "Благодаря упорству и стойкости, которые проявили наши войска, дравшиеся в окружении в районе Вязьмы, мы выиграли драгоценное время для организации обороны на можайской линии. Кровь и жертвы, понесенные войсками окруженной группировки, оказались не напрасными.",
            translation: "Thanks to the tenacity and steadfastness of our troops fighting in the encirclement around Vyazma, we gained precious time to organise the defence of the Mozhaisk line. The blood and the sacrifices of the encircled troops [[were not in vain]].",
            source: "G. K. Zhukov, memoirs (quoted by A. M. Samsonov, «Крах фашистской агрессии 1939–1945», 1980, ch. 7)",
          },
        ],
        options: [{ id: "hold", label: "Ни шагу назад! Not a step back", order: "Hold the Mozhaisk line while the surrounded armies fight on.", effects: [] }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "The remnants of the surrounded armies break out in small groups through the forests; many stay behind the German lines and [[go over to the partisans]]. Behind them the Mozhaisk line fills with fresh divisions from the reserve and from the Far East.",
        zh: {
          officeEn: "最高统帅部大本营",
          place: "莫斯科",
          date: date.zh,
          title: "维亚济马和布良斯克包围圈",
          text: [
            "德军装甲集群在两翼突破，在维亚济马背后合上了包围圈：第 19、20、24、32 集团军被围在城西。南面，布良斯克方面军的第 3、13、50 集团军被切断，正穿过森林向东突围。",
            "泥泞到来之前，红军已经损失了 [[" + lost + " 人]]，和 1941 年秋天一样多。被围的集团军仍在战斗，拖住敌人的师团：他们多守一天，[[莫扎伊斯克防线就多赢得一天]]。",
          ],
          quotes: [
            {
              translation: "由于在维亚济马地区陷入包围的我军表现出顽强和坚定，我们赢得了组织莫扎伊斯克防线的宝贵时间。被围部队流的血、作出的牺牲[[没有白费]]。",
              source: "Г. К. 朱可夫回忆录（引自 А. М. 萨姆索诺夫《法西斯侵略的破产（1939—1945）》，1980 年，第 7 章）",
            },
          ],
          options: { hold: { label: "Ни шагу назад！一步也不许后退", order: "被围的集团军还在战斗，守住莫扎伊斯克防线。", effects: [] } },
          history: "被围集团军的残部分成小股穿过森林突围；很多人留在德军后方，[[投入了游击队]]。在他们身后，莫扎伊斯克防线上布满了从预备队和远东调来的新锐师。",
        },
      }
    : {
        id: "pockets",
        army: "german",
        kind: "order",
        musicSrc: "audio/russlandlied.webm",
        office: "Oberkommando der Wehrmacht",
        officeEn: "Wehrmacht High Command",
        stamp: "Sondermeldung",
        place: "Führerhauptquartier",
        date: date.en,
        title: "The double battle of Vyazma and Bryansk",
        text: [
          "The armies of Army Group Centre have closed two great pockets: at Vyazma the 3rd and 4th Panzer Groups have met behind four Soviet armies, and at Bryansk the 2nd Panzer Army and the 2nd Army have cut off three more.",
          "Before the mud the Red Army has lost [[" + lost + " men]], as many as in the autumn of 1941. The Reich press chief tells the world that [[the war in the East is decided]].",
        ],
        quotes: [
          {
            original: "Противник перед фронтом группы армий разбит. Остатки отступают, переходя местами в контратаки. Группа армий преследует противника.",
            translation: "The enemy before the front of the army group is beaten. Its remnants are falling back, counter-attacking in places. [[The army group is pursuing the enemy.]]",
            source: "Order of Army Group Centre for the continuation of the operations against Moscow, 14 October 1941 (Russian text quoted by A. M. Samsonov, ch. 7)",
          },
        ],
        options: [{ id: "onward", label: "Weiter nach Moskau! On to Moscow", order: "Clear the pockets and pursue towards Moscow.", effects: [] }],
        outcomeTitle: ["What happens next", "接下来发生了什么"],
        history: "Clearing the pockets takes until 20 October; the Wehrmacht communiqué will report 663,000 prisoners, 1,242 tanks and 5,412 guns. The panzer divisions wait for fuel, and then the rain begins: [[the roads to Moscow turn to mud]].",
        zh: {
          officeEn: "德国国防军最高统帅部",
          place: "元首大本营",
          date: date.zh,
          title: "维亚济马和布良斯克的双重合围战",
          text: [
            "中央集团军群合上了两个大包围圈：在维亚济马，第 3、第 4 装甲集群在四个苏联集团军背后会师；在布良斯克，第 2 装甲集团军和第 2 集团军又切断了三个。",
            "泥泞到来之前，红军已经损失了 [[" + lost + " 人]]，和 1941 年秋天一样多。帝国新闻局长向全世界宣布，[[东方的战争已经决出胜负]]。",
          ],
          quotes: [
            {
              translation: "集团军群当面之敌已被击溃。其残部正在后退，有些地方转入反冲击。[[集团军群正在追击敌人。]]",
              source: "中央集团军群关于继续对莫斯科作战的命令，1941 年 10 月 14 日（俄译本引自萨姆索诺夫，第 7 章）",
            },
          ],
          options: { onward: { label: "Weiter nach Moskau！向莫斯科前进", order: "肃清包围圈，向莫斯科追击。", effects: [] } },
          history: "肃清包围圈一直打到 10 月 20 日；国防军公报将宣布俘虏 663,000 人，坦克 1,242 辆，火炮 5,412 门。装甲师在等燃料，然后雨季来了：[[通往莫斯科的道路变成了烂泥]]。",
        },
      };
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
const CITY_VP = { "10,2": 5, "10,6": 3, "1,4": 3 },
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
  const details =
      L("Victory points at the end of Game Turn " + LAST_TURN + ": ", "第 " + LAST_TURN + " 回合结束时的胜利点：") +
      "<strong>" +
      L("Red Army " + e.soviet + ", Germans " + e.german, "红军 " + e.soviet + "，德军 " + e.german) +
      "</strong>" +
      (null !== t
        ? L(". In 1941 the Red Army held Moscow, Tula and Ryazan at this date (" + t + " points).", "。1941 年的这个时候，红军控制着莫斯科、图拉和梁赞（" + t + " 点）。")
        : L(".", "。")) +
      '<table class="vp_table">' +
      a +
      "</table>";
  return {
    title: o,
    details: details,
    text:
      r +
      "<br /><br />" +
      details +
      '<div class="chronicle_note">' +
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
  if (!hex || !hex.city || "none" === hex.city || "base" === hex.city || "german" !== hex.control || germanUnitsWithin(hex, 1).length > 0) return 0;
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
        "掷骰 " + result.roll + "（需要 " + result.need + " 或更小）：光荣的苏维埃爱国者突袭了毫无防备的敌人，夺取了" + result.name + "！苏军 +1 级补充兵员。",
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
  return CITY_STOCK_CAP[n] && i && i.owner === t && e.control === t && !("10,2" === n && moscowRuined()) ? i : null;
}
function buildCityStocks(e, t) {
  for (const n in CITY_STOCK_CAP) {
    const [i, o] = n.split(",").map(Number),
      r = grid.get({ x: i, y: o });
    if (!r || r.control !== e) continue;
    const a = cityStocks[n] || (cityStocks[n] = { owner: e, value: 0 });
    // the stocks of Moscow went up with the depots: the ruin stockpiles nothing
    if ("10,2" === n && moscowRuined()) {
      ((a.owner = e), (a.value = 0));
      continue;
    }
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
  // a Ju 87 diving, its siren rising to the scream: cut from a 1940 film on Wikimedia Commons ("Ju 87 Stuka attack")
  stuka: "audio/stuka_dive.wav",
  // the AM-38 engine of an Il-2 running at about 2,100 rpm: cut from the 1943 Soviet Air Force research institute
  // film «Эксплоатация самолета ИЛ-2» on Wikimedia Commons
  shturmovik: "audio/il2_engine.wav",
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
// ---------------------------------------------------------------- The map: three sets of art, each with a winter
// The same hexes drawn three ways, from the game's own hex data (the rules are the same on all of them):
//  soviet  - after the topographic maps of the Red Army General Staff, 1937-1941: layer tints and brown
//            contours, the mixed-wood signs, the black-and-white railway, the Soviet lines in red
//  german  - after the Deutsche Heereskarte, Osteuropa 1:300 000, of the Generalstab des Heeres: the German
//            spellings (Wjasma, Moshaisk, Moskau), the Soviet positions in red as the enemy
//  painted - the country as a reconnaissance aircraft saw it
// Against the computer the map is the staff map of the side you play; two players at one screen get the painted
// one. The choice in the Layers bar overrides it. From turn 6, when the snow lies, the winter map comes in.
const MAP_ART_STYLES = ["soviet", "german", "painted"],
  MAP_SNOW_FROM = 6;
let mapArtChoice = "auto";
try {
  mapArtChoice = window.localStorage.getItem("b4mMapArt") || "auto";
} catch (e) {}
function mapArtStyle() {
  if (MAP_ART_STYLES.indexOf(mapArtChoice) > -1) return mapArtChoice;
  return "soviet" === playAIAs ? "german" : "german" === playAIAs ? "soviet" : "painted";
}
function mapArtSeason() {
  return currentTurn && currentTurn.turn >= MAP_SNOW_FROM ? "winter" : "autumn";
}
function applyMapArt() {
  const map = document.getElementById("map");
  if (!map) return;
  const src = "img/map_" + mapArtStyle() + "_" + mapArtSeason() + ".webp";
  map.getAttribute("src") !== src && map.setAttribute("src", src);
  const select = document.getElementById("layer_map");
  select && (select.value = mapArtChoice);
  // the charts take their terrain samples from the map: they are drawn once it has loaded
  map.complete && map.naturalWidth ? drawBoardCharts() : map.addEventListener("load", drawBoardCharts, { once: !0 });
}
// ---------------------------------------------------------------- The reference charts on the board
// The game draws its own charts from its rules (the numbers are the constants of the code above), in the language
// of the interface and in the look of the side you play: a staff table of the Red Army (Russian headings), of the
// German army (German headings), or, for two players at one screen, a neutral table in the manner of a NATO field
// manual. The terrain samples are cut from the map in use, so they look like the hexes on the board.
// They stand to the right of the map in two sheets: terrain and combat; air power, fatigue and the turns.
const CHART_A = { x: 1262, y: 290 },
  CHART_B = { x: 2400, y: 290 },
  CHART_W = 1120,
  BOARD_WIDTH = 3540;
// The map's canvases are drawn at the resolution of the screen, so that the counters and the charts stay sharp on
// high-density displays: the canvas has more pixels than its size on the page, and its drawing is scaled to match.
function screenScale() {
  return Math.max(1, Math.min(3, window.devicePixelRatio || 1));
}
function sizeCanvas(c, w, h) {
  const r = screenScale();
  return ((c.width = Math.round(w * r)), (c.height = Math.round(h * r)), (c.style.width = w + "px"), (c.style.height = h + "px"), c.getContext("2d").setTransform(r, 0, 0, r, 0, 0), c);
}
function chartStyle() {
  return "german" === playAIAs ? "soviet" : "soviet" === playAIAs ? "german" : "nato";
}
const CHART_LOOKS = {
  soviet: {
    paper: "#f3ecd8", ink: "#1d1712", head: "#8e1d16", headInk: "#f6d77a", sub: "#e9dcbc", grid: "rgba(110,50,35,0.45)", alt: "rgba(142,29,22,0.05)",
    font: "'Times New Roman', Georgia, serif", headFont: "'Bahnschrift SemiBold Condensed', 'Arial Narrow', Arial", red: "#b3201a",
    titles: { terrain: "ВЛИЯНИЕ МЕСТНОСТИ", combat: "ТАБЛИЦА РЕЗУЛЬТАТОВ БОЯ", air: "АВИАЦИЯ", fatigue: "УТОМЛЕНИЕ ВОЙСК", turns: "ХОД ОПЕРАЦИИ" },
  },
  german: {
    paper: "#f4f4ef", ink: "#111111", head: "#262626", headInk: "#ffffff", sub: "#dcdcd4", grid: "rgba(0,0,0,0.42)", alt: "rgba(0,0,0,0.04)",
    font: "Arial, 'Helvetica Neue', sans-serif", headFont: "Arial, 'Helvetica Neue', sans-serif", red: "#c3261c",
    titles: { terrain: "Geländeeinfluß", combat: "Kampfergebnistafel", air: "Luftlage", fatigue: "Erschöpfung der Truppe", turns: "Zeittafel" },
  },
  nato: {
    paper: "#eceee6", ink: "#1a1d14", head: "#4b5320", headInk: "#ffffff", sub: "#dde2cc", grid: "rgba(40,46,20,0.42)", alt: "rgba(75,83,32,0.06)",
    font: "Arial, 'Helvetica Neue', sans-serif", headFont: "'Arial Narrow', Arial, sans-serif", red: "#b52a1f",
    titles: { terrain: "TERRAIN EFFECTS", combat: "COMBAT RESULTS", air: "AIR POWER", fatigue: "FATIGUE", turns: "TURN RECORD" },
  },
};
const CHART_SUBTITLES = {
  terrain: ["Terrain effects", "地形效果"],
  combat: ["Combat results", "战斗结果"],
  air: ["Air power and interdiction", "空中力量与遮断"],
  fatigue: ["Fatigue", "疲劳"],
  turns: ["The turns", "回合进程"],
};
function chartFont(look, size, bold, italic) {
  return (italic ? "italic " : "") + (bold ? "bold " : "") + size + "px " + look.font + ", 'Microsoft YaHei', 'PingFang SC', sans-serif";
}
// splits a text into lines that fit a width: Chinese character by character, other text word by word
function chartLines(ctx, text, w) {
  const out = [];
  for (const para of String(text).split("\n")) {
    const tokens = para.match(/[⺀-鿿＀-￯]|[^\s⺀-鿿＀-￯]+\s*|\s+/g) || [""];
    let line = "";
    for (const tk of tokens) {
      // a closing mark never begins a line: it stays at the end of the line before
      if (line && ctx.measureText(line + tk).width > w && !/^[，。；：、）」』！？,.;:)]/.test(tk)) (out.push(line.trimEnd()), (line = tk.trimStart()));
      else line += tk;
    }
    out.push(line.trimEnd());
  }
  return out;
}
function chartText(ctx, look, text, x, y, w, size, opts) {
  opts = opts || {};
  ctx.font = chartFont(look, size, opts.bold, opts.italic);
  ctx.fillStyle = opts.color || look.ink;
  ctx.textBaseline = "top";
  ctx.textAlign = opts.align || "left";
  const lines = chartLines(ctx, text, w),
    lh = Math.round(size * 1.22);
  lines.forEach(function (l, i) {
    ctx.fillText(l, "center" === opts.align ? x + w / 2 : x, y + i * lh);
  });
  return lines.length * lh;
}
function chartHead(ctx, look, x, y, w, key) {
  ctx.fillStyle = look.head;
  ctx.fillRect(x, y, w, 30);
  ctx.font = "bold 17px " + look.headFont + ", 'Microsoft YaHei', sans-serif";
  ctx.fillStyle = look.headInk;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(look.titles[key], x + 10, y + 16);
  const sub = L(CHART_SUBTITLES[key][0], CHART_SUBTITLES[key][1]);
  if (sub.toUpperCase() !== look.titles[key].toUpperCase()) {
    ctx.font = chartFont(look, 13);
    ctx.textAlign = "right";
    ctx.fillText(sub, x + w - 10, y + 16);
  }
  return y + 30;
}
// a table: columns widths, a header row, rows of cells (text, or { text, bold, color, align, draw })
function chartTable(ctx, look, x, y, widths, header, rows, size, minH) {
  const pad = 5;
  let yy = y;
  const rowHeight = function (cells, sz) {
    let h = minH || 0;
    cells.forEach(function (c, i) {
      if (c && c.draw) return void (h = Math.max(h, c.h || 0));
      const t = c && "object" == typeof c ? c.text : c;
      ctx.font = chartFont(look, sz, c && "object" == typeof c && c.bold);
      h = Math.max(h, chartLines(ctx, t, widths[i] - 2 * pad).length * Math.round(sz * 1.22) + 2 * pad);
    });
    return h;
  };
  const drawRow = function (cells, sz, bg) {
    const h = rowHeight(cells, sz);
    let xx = x;
    bg && ((ctx.fillStyle = bg), ctx.fillRect(x, yy, widths.reduce((a, b) => a + b, 0), h));
    cells.forEach(function (c, i) {
      if (c && c.draw) c.draw(xx, yy, widths[i], h);
      else {
        const t = c && "object" == typeof c ? c.text : c;
        const th = chartLines((ctx.font = chartFont(look, sz, c && "object" == typeof c && c.bold), ctx), t, widths[i] - 2 * pad).length * Math.round(sz * 1.22);
        chartText(ctx, look, t, xx + pad, yy + (h - th) / 2, widths[i] - 2 * pad, sz, { bold: c && "object" == typeof c && c.bold, color: c && "object" == typeof c && c.color, align: c && "object" == typeof c && c.align });
      }
      xx += widths[i];
    });
    ctx.strokeStyle = look.grid;
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 0.5, yy + 0.5, widths.reduce((a, b) => a + b, 0) - 1, h);
    xx = x;
    for (let i = 0; i < widths.length - 1; i++) ((xx += widths[i]), ctx.beginPath(), ctx.moveTo(xx + 0.5, yy), ctx.lineTo(xx + 0.5, yy + h), ctx.stroke());
    yy += h;
  };
  header && drawRow(header.map((t) => ({ text: t, bold: !0, align: "center" })), size, look.sub);
  rows.forEach(function (r, i) {
    drawRow(r, size, r.bg || (i % 2 ? look.alt : null));
  });
  return yy;
}
// a hex of the map in use, as a sample of its terrain
function chartHexSample(ctx, x, y, w, hx, hy, marks) {
  const map = document.getElementById("map"),
    h = grid.get([hx, hy]);
  if (!map || !map.naturalWidth || !h) return;
  const c = h.center().add(h.toPoint()),
    k = w / 114.55;
  (ctx.save(), ctx.translate(x, y), ctx.scale(k, k), ctx.beginPath());
  h.corners().forEach(function (p, i) {
    i ? ctx.lineTo(p.x - 57.275, p.y - 50.95) : ctx.moveTo(p.x - 57.275, p.y - 50.95);
  });
  (ctx.closePath(), ctx.save(), ctx.clip(), ctx.drawImage(map, c.x + 6 - 60, c.y - 55, 120, 110, -60, -55, 120, 110));
  if (marks) {
    ctx.beginPath();
    for (let q = 0; q < 10; q++) {
      const a = -Math.PI / 2 + (q * Math.PI) / 5,
        r = q % 2 ? 5 : 12;
      q ? ctx.lineTo(-18 + Math.cos(a) * r, -8 + Math.sin(a) * r) : ctx.moveTo(-18 + Math.cos(a) * r, -8 + Math.sin(a) * r);
    }
    (ctx.closePath(), (ctx.fillStyle = "#d62218"), ctx.fill());
    ((ctx.fillStyle = "#fff"), ctx.fillRect(6, 8, 24, 8), ctx.fillRect(14, 0, 8, 24), (ctx.fillStyle = "#111"), ctx.fillRect(8, 10, 20, 4), ctx.fillRect(16, 2, 4, 20));
  }
  (ctx.restore(), (ctx.lineWidth = 2.4), (ctx.strokeStyle = "rgba(30,26,22,0.8)"), ctx.stroke(), ctx.restore());
}
// Sheet A: the terrain effects and the combat results
function renderChartSheetA(look) {
  const cv = document.createElement("canvas"),
    k = screenScale();
  ((cv.width = CHART_W * k), (cv.height = 1400 * k));
  const ctx = cv.getContext("2d");
  ctx.scale(k, k);
  ((ctx.fillStyle = look.paper), ctx.fillRect(0, 0, cv.width, cv.height));
  const none = L("No effect", "无影响"),
    icon = function (hx, hy, marks) {
      return {
        h: 50,
        draw: function (x, y, w, h) {
          chartHexSample(ctx, x + w / 2, y + h / 2, 48, hx, hy, marks);
        },
      };
    },
    badge = function (text) {
      return {
        h: 40,
        draw: function (x, y, w, h) {
          ((ctx.font = "bold 20px " + look.headFont), (ctx.fillStyle = look.red), (ctx.textAlign = "center"), (ctx.textBaseline = "middle"), ctx.fillText(text, x + w / 2, y + h / 2));
        },
      };
    };
  // terrain
  let y = chartHead(ctx, look, 0, 0, 700, "terrain");
  const rows = [
    [icon(11, 8), { text: L("Open", "开阔地"), bold: !0 }, none, none, "—"],
    [icon(1, 8), { text: L("Forest", "森林"), bold: !0 }, L("Counts as 2 hexes (1 in Russian rail movement)", "算 2 格（苏军铁路机动算 1 格）"), L("1 column left (none against ski troops in winter)", "左移 1 栏（冬季对滑雪部队无效）"), L("Cover 1 from aircraft", "对空防护 1")],
    [icon(7, 9), { text: L("Town", "城镇"), bold: !0 }, none, none, L("Replacements come in here. Recovers " + FATIGUE.city + " fatigue a turn; air cover 1; 1 VP", "补充兵员进入地。每回合恢复 " + FATIGUE.city + " 点疲劳；对空防护 1；1 胜利点")],
    [icon(10, 6), { text: L("Major city (Tula, Smolensk)", "大城市（图拉、斯摩棱斯克）"), bold: !0 }, none, L("1 column left; a full-strength defender takes a step loss instead of a DR", "左移 1 栏；满编守军遇 DR 改为损失 1 级、不撤退"), L("Recovers " + FATIGUE.majorCity + "; air cover 2; 3 VP. Smolensk is the German supply base", "恢复 " + FATIGUE.majorCity + "；对空防护 2；3 胜利点。斯摩棱斯克是德军补给基地")],
    [icon(10, 2), { text: L("Moscow", "莫斯科"), bold: !0 }, none, L("2 columns left against the Soviet garrison; a DR has no effect on it. Once taken: an ordinary town, for both sides", "攻击苏军守军左移 2 栏；DR 对守军无效。一旦被攻占：双方都只按普通城镇算"), L("Garrison safe from aircraft, Soviet cover 2 within 2 hexes. Recovers " + FATIGUE.moscow + "; 5 VP. If the Germans take it, it is a ruin for good (no air defence, stocks or depots), and every Soviet unit gains " + FATIGUE.moscowLost + " fatigue a turn until it is retaken", "守军不受空袭，周围 2 格苏军对空防护 2。恢复 " + FATIGUE.moscow + "；5 胜利点。被德军攻占后永久成为废墟（没有防空、储备和仓库），夺回之前苏军全军每回合 +" + FATIGUE.moscowLost + " 疲劳")],
    [icon(7, 4), { text: L("Defence line", "防线"), bold: !0 }, none, L("1 column left for Soviet defenders only", "仅苏军防守时左移 1 栏"), L("Cover 1 for Soviet units", "苏军对空防护 1")],
    [icon(6, 4), { text: L("River", "河流"), bold: !0 }, none, L("1 column left if all the attackers are across it", "所有进攻部队都隔河时左移 1 栏"), "—"],
    [icon(5, 2), { text: L("Railway", "铁路"), bold: !0 }, L("Russian rail movement phase: any number of units", "苏军铁路机动阶段：支数不限"), none, L("German supply: within " + RAILHEAD_RANGE + " hexes of a railhead (" + RAILHEAD_RANGE_MUD + " in the mud): Smolensk, Roslavl, from turn " + VYAZMA_RAILHEAD_TURN + " Vyazma", "德军补给：距铁路卸载站 " + RAILHEAD_RANGE + " 格内（泥泞时 " + RAILHEAD_RANGE_MUD + " 格）：斯摩棱斯克、罗斯拉夫利，第 " + VYAZMA_RAILHEAD_TURN + " 回合起加维亚济马")],
    [icon(11, 8, !0), { text: L("Star or cross", "红星或十字"), bold: !0 }, none, none, L("Set-up hexes: Russian (star), German (cross)", "初始部署位置：苏军（红星）、德军（十字）")],
    [badge("3–4"), { text: L("Mud", "泥泞"), bold: !0 }, L("1 hex per move outside the rail phase", "铁路机动以外每次只能走 1 格"), L("Panzer attack strength halved", "装甲部队进攻力减半"), L("Game turns 3 and 4", "第 3、4 回合")],
    [badge(WINTER_START + "–" + LAST_TURN), { text: L("Winter", "冬季"), bold: !0 }, L("Ski troops cross forests at no extra cost", "滑雪部队穿越森林不额外消耗移动力"), L("Forests give no shift against ski troops", "森林对滑雪部队不左移"), L("Germans without winter clothing: +" + FATIGUE.winterOutsideCity + " fatigue a turn outside towns, where rest does not offset it, +" + FATIGUE.winterInTown + " in towns, none in major cities", "德军若无冬装：城外每回合 +" + FATIGUE.winterOutsideCity + " 疲劳，且休整不能抵消；城镇里 +" + FATIGUE.winterInTown + "，大城市里不加")],
  ];
  y = chartTable(ctx, look, 0, y, [62, 108, 160, 190, 180], [L("Symbol", "图示"), L("Terrain", "地形"), L("Movement", "移动"), L("Combat", "战斗"), L("Notes", "说明")], rows, 14, 54);
  // combat results
  let yc = chartHead(ctx, look, 715, 0, 405, "combat");
  const CRT = [
      ["DR", "DR", "DR", "DR", "DR", "DRL"],
      ["EX", "DR", "DR", "DR", "DRL", "DRL"],
      ["EX", "EX", "DR", "EX", "DRL", "DE"],
      ["NE", "EX", "EX", "DRL", "DRL", "DE"],
      ["NE", "NE", "EX", "DRL", "DE", "DE"],
      ["AL", "NE", "DRL", "DE", "DE", "DE"],
    ],
    resCell = function (r) {
      return { text: r, bold: "DE" === r || "DRL" === r, color: "EX" === r || "AL" === r ? look.red : look.ink, align: "center" };
    };
  yc = chartTable(ctx, look, 715, yc, [45, 60, 60, 60, 60, 60, 60], [L("Die", "骰点"), "1:1", "2:1", "3:1", "4:1", "5:1", "6:1"], CRT.map((r, i) => [{ text: String(i + 1), bold: !0, align: "center" }].concat(r.map(resCell))), 16, 30);
  yc += 8;
  const legend = [
    ["NE", L("No effect.", "无效果。")],
    ["DR", L("The defender retreats 2 hexes.", "守方后撤 2 格。")],
    ["DRL", L("The defender loses 1 step and retreats 2 hexes.", "守方损失 1 级并后撤 2 格。")],
    ["DE", L("The defender is eliminated.", "守方被歼灭。")],
    ["EX", L("Exchange: the defender loses 1 step, the attacker at least as much strength; then the defender retreats 2 hexes.", "交换：守方损失 1 级，攻方至少损失同等战斗力；然后守方后撤 2 格。")],
    ["AL", L("One attacking unit loses 1 step.", "一支进攻部队损失 1 级。")],
  ];
  for (const [k, t] of legend) {
    ((ctx.font = "bold 15px " + look.font), (ctx.fillStyle = "EX" === k || "AL" === k ? look.red : look.ink), (ctx.textAlign = "left"), (ctx.textBaseline = "top"), ctx.fillText(k, 722, yc));
    yc += Math.max(18, chartText(ctx, look, t, 766, yc, 346, 14)) + 4;
  }
  yc += 6;
  const rules = [
    L("Odds: attack ÷ defence, rounded down, at most 6:1.", "兵力比：进攻力 ÷ 防御力，向下取整，最高 6:1。"),
    L("Each terrain effect moves the odds one column left; partisans guiding a Soviet attack move them one column right.", "每种地形效果左移一栏；游击队为苏军进攻带路时右移一栏。"),
    L("Fatigue: exhausted and broken attackers fight at half strength, a broken defender at half and its DR becomes DRL. When a battle ends in DE or DRL, the most exhausted attacker loses a step.", "疲劳：疲惫和崩溃的进攻部队只发挥一半战斗力，崩溃的守军只剩一半，且 DR 变为 DRL。战斗结果为 DE 或 DRL 时，最疲惫的一支进攻部队损失 1 级。"),
    L("Every battle: +" + FATIGUE.attack + " fatigue to each attacker, +" + FATIGUE.defend + " to the defender (unless NE).", "每次战斗：每支进攻部队 +" + FATIGUE.attack + " 疲劳，守方 +" + FATIGUE.defend + "（NE 除外）。"),
  ];
  for (const t of rules) yc += chartText(ctx, look, "• " + t, 722, yc, 392, 14) + 6;
  const used = Math.max(y, yc) + 10;
  const out = document.createElement("canvas");
  ((out.width = CHART_W * k), (out.height = used * k), out.getContext("2d").drawImage(cv, 0, 0));
  // the tables of the sheet, for the help: terrain, combat results
  out.sections = [
    { x: 0, w: 700, h: y + 6 },
    { x: 715, w: 405, h: yc + 4 },
  ];
  return out;
}
// Sheet B: air power, fatigue and the turns
function renderChartSheetB(look) {
  const cv = document.createElement("canvas"),
    k = screenScale();
  ((cv.width = CHART_W * k), (cv.height = 1400 * k));
  const ctx = cv.getContext("2d");
  ctx.scale(k, k);
  ((ctx.fillStyle = look.paper), ctx.fillRect(0, 0, cv.width, cv.height));
  // air
  let ya = chartHead(ctx, look, 0, 0, 360, "air");
  const rowsA = [];
  for (let t = 1; t <= LAST_TURN; t++) {
    const a = AIR_STRENGTH[t] || { german: 0, soviet: 0 },
      sky = a.german > a.soviet ? L("German", "德军") : a.soviet > a.german ? L("Soviet", "苏军") : L("Contested", "争夺");
    rowsA.push([{ text: String(t), bold: !0, align: "center" }, { text: String(a.german), align: "center" }, { text: String(a.soviet), align: "center" }, { text: sky, align: "center", bold: a.german !== a.soviet }]);
  }
  ya = chartTable(ctx, look, 0, ya, [60, 90, 90, 120], [L("Turn", "回合"), L("German air", "德军空军"), L("Soviet air", "苏军空军"), L("The sky", "制空权")], rowsA, 14, 26);
  ya += 8;
  const airRules = [
    L("A unit that moves in a movement phase (rail and panzer moves too), or retreats after a battle, is bombed on a die roll up to the enemy air strength less its cover. The cover is that of the most exposed hex of its march.", "在移动阶段移动（含铁路和装甲机动）或战后撤退的部队，掷骰点数不超过“敌方空中力量 − 对空防护”即被空袭。对空防护按其行军路线上最暴露的一格计算。"),
    L("Bombed: +" + INTERDICTION_FATIGUE + " fatigue at once.", "被空袭：立即 +" + INTERDICTION_FATIGUE + " 疲劳。"),
    L("Cover 1: forest, town; for the Russians also the defence lines. Cover 2: major city; Russians within 2 hexes of a Soviet Moscow. The Soviet garrison of Moscow cannot be bombed. Once Moscow has fallen it is an ordinary town: cover 1, no air defence around it.", "对空防护 1：森林、城镇；苏军在防线上也算。对空防护 2：大城市；在苏军控制的莫斯科周围 2 格内的苏军。莫斯科的苏军守军不会被空袭。莫斯科一旦陷落就只算普通城镇：对空防护 1，周围不再有防空。"),
    L("An advance after combat is not exposed.", "战后推进不会遭空袭。"),
  ];
  for (const t of airRules) ya += chartText(ctx, look, "• " + t, 6, ya, 350, 14) + 6;
  // fatigue
  let yf = chartHead(ctx, look, 375, 0, 380, "fatigue");
  const P = FATIGUE.perLevel,
    lv = [
      [0 + "–" + (P - 1), L("Fresh", "精力充沛"), L("Full", "全额"), L("Full", "全额")],
      [P + "–" + (2 * P - 1), L("Tired", "疲劳"), L("Full", "全额"), L("Full", "全额")],
      [2 * P + "–" + (3 * P - 1), L("Exhausted", "疲惫"), L("Half", "一半"), L("Full", "全额")],
      [String(FATIGUE.max), L("Broken", "崩溃"), L("Cannot attack", "不能进攻"), L("Half; DR → DRL", "一半；DR → DRL")],
    ];
  yf = chartTable(ctx, look, 375, yf, [70, 100, 105, 105], [L("Points", "点数"), L("State", "状态"), L("Attack", "进攻"), L("Defence", "防御")], lv.map((r) => r.map((t, i) => ({ text: t, align: "center", bold: 1 === i }))), 14, 26);
  yf += 8;
  const gain = [
    L("Gains: battle +" + FATIGUE.attack + " (attacker) / +" + FATIGUE.defend + " (defender); bombed +" + INTERDICTION_FATIGUE + "; cut off from its map edge +" + FATIGUE.cutOff + ", +" + FATIGUE.ringed + " more if ringed (a besieged city's stocks hold it to +" + FATIGUE.siegeCutOff + "); Germans near a cut railway +" + FATIGUE.railCut + "; sweeping partisans +" + SWEEP_FATIGUE_PER_STRENGTH + " per band strength, driving them off +" + DRIVE_OFF_FATIGUE + "; every Soviet unit +" + FATIGUE.moscowLost + " a turn while Moscow is in German hands; Germans whose depot is taken +" + DEPOT_LOSS_FATIGUE + "; every German unit +" + MOSCOW_LOST_FATIGUE + " when the Russians retake Moscow.", "增加：战斗 +" + FATIGUE.attack + "（攻方）/ +" + FATIGUE.defend + "（守方）；被空袭 +" + INTERDICTION_FATIGUE + "；交通线被切断 +" + FATIGUE.cutOff + "，被合围再 +" + FATIGUE.ringed + "（被围城市有储备物资时只 +" + FATIGUE.siegeCutOff + "）；德军靠近被切断的铁路 +" + FATIGUE.railCut + "；清剿游击队每级兵力 +" + SWEEP_FATIGUE_PER_STRENGTH + "，驱散 +" + DRIVE_OFF_FATIGUE + "；莫斯科在德军手中期间，苏军全军每回合 +" + FATIGUE.moscowLost + "；补给仓库被夺，靠它补给的德军 +" + DEPOT_LOSS_FATIGUE + "；莫斯科被苏军夺回，德军全军 +" + MOSCOW_LOST_FATIGUE + "。"),
    L("Recovery each turn, if it did not fight: " + FATIGUE.rest + " at rest, " + FATIGUE.idle + " if it moved; " + FATIGUE.rear + " more in the rear (no enemy within " + FATIGUE.rearDistance + " hexes); in a town of its side " + FATIGUE.city + ", a major city " + FATIGUE.majorCity + ", Moscow " + FATIGUE.moscow + " (a town once it has fallen); Russians supplied from the Moscow depots " + FATIGUE.moscowDepots + " more (none once it has fallen).", "每回合恢复（未参战时）：原地休整 " + FATIGUE.rest + "，移动过 " + FATIGUE.idle + "；在后方（" + FATIGUE.rearDistance + " 格内无敌军）再 " + FATIGUE.rear + "；在己方城镇 " + FATIGUE.city + "，大城市 " + FATIGUE.majorCity + "，莫斯科 " + FATIGUE.moscow + "（陷落后按城镇算）；由莫斯科仓库补给的苏军再 " + FATIGUE.moscowDepots + "（陷落后没有）。"),
    L("No recovery when cut off, raided by partisans, or for Germans beyond railhead range or while Smolensk is lost; in winter, Germans without winter clothing get no rest or rear recovery outside towns. Liberating a town: −" + FATIGUE.liberation + "; taking a German depot: −4 in and next to it; Moscow retaken: −" + MOSCOW_RETAKEN_RELIEF + " for every Soviet unit; Tula relieved: −4 in Tula.", "被切断、遭游击队袭扰时不恢复；德军超出铁路卸载站补给范围或斯摩棱斯克失守时也不恢复；冬季没有冬装的德军在城镇外得不到休整和后方恢复。解放一座城镇：−" + FATIGUE.liberation + "；夺取德军补给仓库：城内和相邻格再 −4；夺回莫斯科：苏军全军 −" + MOSCOW_RETAKEN_RELIEF + "；图拉解围：城内 −4。"),
  ];
  for (const t of gain) yf += chartText(ctx, look, "• " + t, 381, yf, 370, 14) + 6;
  // turns
  let yt = chartHead(ctx, look, 770, 0, 350, "turns");
  const DATES_EN = ["", "2 Oct", "10 Oct", "17 Oct", "1 Nov", "16 Nov", "23 Nov", "1 Dec", "5 Dec", "15 Dec"],
    MUD = L("MUD: 1 hex a move (rail phase apart); panzer attack halved; German supply within " + RAILHEAD_RANGE_MUD + " hexes of a railhead", "泥泞：铁路机动以外每次只走 1 格；装甲部队进攻力减半；德军补给范围缩到铁路卸载站 " + RAILHEAD_RANGE_MUD + " 格内"),
    WINTER = L("WINTER: Germans without winter clothing +" + FATIGUE.winterOutsideCity + " fatigue a turn outside towns (rest does not offset it), +" + FATIGUE.winterInTown + " in towns; ski armies enter a forest for 1 hex, no forest shift against them", "冬季：没有冬装的德军城外每回合疲劳 +" + FATIGUE.winterOutsideCity + "（休整不能抵消），城镇里 +" + FATIGUE.winterInTown + "；滑雪集团军进森林只算 1 格，森林对它不左移"),
    // [weather in a word, what the turn changes in the game]
    TURNS = {
      1: [L("Dry", "干燥"), L("Typhoon begins. German railheads: Smolensk, Roslavl", "“台风”开始。德军铁路卸载站：斯摩棱斯克、罗斯拉夫利")],
      2: [L("First snow", "初雪"), L("Last turn before the mud; the pockets of Vyazma and Bryansk are reckoned when it begins", "泥泞前最后一回合；泥泞开始时检查维亚济马、布良斯克包围圈")],
      3: [L("Mud", "泥泞"), MUD],
      4: [L("Mud", "泥泞"), MUD + L(". 1st Shock Army; Vyazma a railhead", "。突击第 1 集团军到达；维亚济马成为铁路卸载站")],
      5: [L("Frozen ground", "地面冻硬"), L("The mud is over. German decision: winter clothing or ammunition", "泥泞结束。德军决策：冬装还是弹药")],
      6: [L("Snow", "积雪"), L("Winter map only: no change to the rules", "只换冬季地图，规则不变")],
      7: [L("Hard frost", "严寒"), L("Soviet decision: commit the Stavka reserves or keep them", "苏军决策：大本营预备队现在投入还是留给反攻")],
      8: [L("Deep frost", "酷寒深雪"), WINTER + L(". Counter-offensive: Guards cavalry, ski battalions, partisans", "。苏军反攻：近卫骑兵、滑雪营、游击队")],
      9: [L("Deep snow", "深雪"), WINTER + L(". German decision: Hitler's halt order. Last turn", "。德军决策：希特勒的死守令。最后一回合")],
    },
    MUD_BG = "rgba(139, 94, 52, 0.22)",
    WINTER_BG = "rgba(70, 120, 185, 0.2)",
    rowsT = [];
  for (let t = 1; t <= LAST_TURN; t++) {
    const row = [
      { text: String(t), bold: !0, align: "center" },
      (isZh() ? TURN_DATES_ZH[t].replace("1941 年 ", "") : DATES_EN[t]) + "\n" + TURNS[t][0],
      { text: TURNS[t][1], bold: 3 === t || 4 === t || t >= WINTER_START },
    ];
    (3 === t || 4 === t) && (row.bg = MUD_BG);
    t >= WINTER_START && (row.bg = WINTER_BG);
    rowsT.push(row);
  }
  yt = chartTable(ctx, look, 770, yt, [40, 84, 226], [L("Turn", "回合"), L("Date", "日期"), L("What changes in the game", "对游戏的影响")], rowsT, 13, 24);
  yt += 8;
  yt += chartText(ctx, look, "• " + L("Victory points: Moscow 5, Tula 3, Smolensk 3, other towns 1.", "胜利点：莫斯科 5，图拉 3，斯摩棱斯克 3，其他城镇 1。"), 776, yt, 340, 14) + 6;
  const used = Math.max(ya, yf, yt) + 10;
  const out = document.createElement("canvas");
  ((out.width = CHART_W * k), (out.height = used * k), out.getContext("2d").drawImage(cv, 0, 0));
  // the tables of the sheet, for the help: air power, fatigue, the turns
  out.sections = [
    { x: 0, w: 360, h: ya + 4 },
    { x: 375, w: 380, h: yf + 4 },
    { x: 770, w: 350, h: yt + 4 },
  ];
  return out;
}
// the charts on the board, and the same charts in the help
function drawBoardCharts() {
  const map = document.getElementById("map");
  if (!map || !map.naturalWidth) return;
  const look = CHART_LOOKS[chartStyle()],
    a = renderChartSheetA(look),
    b = renderChartSheetB(look);
  if ("undefined" != typeof board && board) {
    board.clearRect(1250, 280, BOARD_WIDTH - 1250, 1139 - 280);
    const k = screenScale();
    board.drawImage(a, CHART_A.x, CHART_A.y, a.width / k, a.height / k);
    board.drawImage(b, CHART_B.x, CHART_B.y, b.width / k, b.height / k);
  }
  const pieces = function (sheet) {
      const k = screenScale();
      return sheet.sections
        .map(function (s) {
          const c = document.createElement("canvas");
          ((c.width = Math.round(s.w * k)), (c.height = Math.round(Math.min(s.h, sheet.height / k) * k)), c.getContext("2d").drawImage(sheet, -s.x * k, 0));
          return '<img src="' + c.toDataURL("image/png") + '" style="width: ' + s.w + 'px" alt="" />';
        })
        .join("");
    },
    ha = pieces(a),
    hb = pieces(b);
  for (const e of document.querySelectorAll(".terrain_chart")) e.innerHTML = ha;
  for (const e of document.querySelectorAll(".crt_chart")) e.innerHTML = hb;
}
window.addEventListener("load", function () {
  const select = document.getElementById("layer_map");
  select &&
    ((select.value = mapArtChoice),
    select.addEventListener("change", function () {
      mapArtChoice = select.value;
      try {
        window.localStorage.setItem("b4mMapArt", mapArtChoice);
      } catch (e) {}
      applyMapArt();
    }));
});
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
// The counter of an NKVD army: the shock symbol (a dot in the middle of the infantry cross), the new strengths
// and a small NKVD tab, in the colours of the counter (crimson and gold, or the lighter back with cream)
function drawNkvdMarks(ctx, x, y, strength) {
  const full = "full" === strength,
    ink = full ? "#f4cf5c" : "#fff3d6";
  (ctx.save(),
    (ctx.fillStyle = ink),
    ctx.beginPath(),
    ctx.arc(x + 26, y + 23.5, 2.4, 0, 2 * Math.PI),
    ctx.fill(),
    (ctx.fillStyle = full ? "#ab1a20" : "#d96b60"),
    ctx.fillRect(x + 7, y + 35, 46, 20),
    (ctx.fillStyle = ink),
    (ctx.font = "bold 20px 'Bahnschrift SemiBold Condensed', 'Arial Narrow', Arial, sans-serif"),
    (ctx.textAlign = "center"),
    (ctx.textBaseline = "alphabetic"),
    ctx.fillText(full ? "10-4" : "5-4", x + 30, y + 53),
    (ctx.textBaseline = "middle"),
    // the NKVD tab stands upright along the left edge, clear of the size mark and the symbol
    ctx.translate(x + 8, y + 24),
    ctx.rotate(-Math.PI / 2),
    (ctx.fillStyle = "#1f3a7a"),
    ctx.fillRect(-11, -4.5, 22, 9),
    (ctx.fillStyle = "#ffffff"),
    (ctx.font = "bold 7px Arial, sans-serif"),
    ctx.fillText("NKVD", 0, 0.3),
    ctx.restore());
}
// Winter fatigue of a German unit at the start of its turn, after the choice made at Orsha
function germanWinterFatigue(hex) {
  return !isWinterTurn() || "clothing" === decisions.trains || isMajorCity(hex)
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
            "In winter (turns 8 and 9), at the start of each German turn: +2 fatigue outside the towns, which rest and the rear do not offset, +1 in a town, none in Moscow, Tula or Smolensk.",
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
    musicSrc: "audio/erika.webm",
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
        effects: [],
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
  // an event with its own music plays it as the dispatch opens
  event.musicSrc && playEndingMusic(event.musicSrc);
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
  // an order that changes nothing in the game has no box of effects
  event.options.every(function (option) {
    return 0 === optionEffects(event, option).length;
  }) && (overlay.querySelector(".dispatch_estimate").style.display = "none");
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
        (event.outcomeTitle ? L(event.outcomeTitle[0], event.outcomeTitle[1]) : L("What happened in 1941", "1941 年实际发生了什么")) +
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
            "由你选一个[[有补给的减员步兵集团军]]：它变成突击集团军，立即为 5-4，补充至满编后为 10-4。",
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
            "本回合苏军 +1 级补充兵员。",
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
      "中央集团军群每天需要 [[26 到 30 列火车]]，而残破的俄国铁路每天只能把 [[8 到 10 列]]送到它的铁路卸载站。",
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
            "冬季（第 8、9 回合）每个德军回合开始时：[[在城镇外 +2 疲劳，休整和后方恢复都不能抵消]]，在城镇里 +1，在莫斯科、图拉或斯摩棱斯克不加。",
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
    history: "弹药、燃料和口粮仍然优先。霜冻来临时，冬衣还堆在铁路卸载站的仓库里：到 12 月中旬，[[发到部队手里的还不到三分之一]]。12 月 20 日，戈培尔号召德国民众为东线士兵捐献皮衣和毛织品。",
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
      commit: { label: "现在投入", order: "把新组建的师投到战线崩溃的地方：首都决不能丢。", effects: ["本回合苏军 [[+2 级补充兵员]]。"] },
      keep: { label: "留给反攻", order: "前线必须用现有的兵力坚持到最后一人。", effects: ["第 8 回合反攻开始时，苏军 [[+2 级补充兵员]]。"] },
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
            "keep" === decisions.reserves ? "你留下的大本营预备队：本回合 +2 级补充兵员。" : "",
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
    options: { press: { label: "За Родину！继续进攻", order: "不停地追击敌人，不给他喘息之机！", effects: [] } },
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
// The hexes a unit can move to: on the German staff map a pale gold wash and, inside the hex, a gold rim on a dark
// one; on the other maps the white wash of the original
function highlightMoveHex(e, t) {
  // the white wash of the original reads well on the Red Army and painted maps; only on the pale German staff map
  // does a hex the unit can reach need the gold rim
  if ("german" !== mapArtStyle()) return void highlightHex(e, t, "rgba(255, 255, 255, 0.35)");
  const i = t.corners().map((p) => p.add(t.toPoint())),
    c = t.center().add(t.toPoint()),
    path = function (k) {
      e.beginPath();
      i.forEach(function (p, n) {
        const x = c.x + (p.x - c.x) * k,
          y = c.y + (p.y - c.y) * k;
        n ? e.lineTo(x, y) : e.moveTo(x, y);
      });
      e.closePath();
    };
  (e.save(),
    path(0.97),
    (e.fillStyle = "rgba(255, 206, 84, 0.22)"),
    e.fill(),
    path(0.86),
    (e.lineJoin = "round"),
    (e.lineWidth = 4.2),
    (e.strokeStyle = "rgba(40, 30, 10, 0.55)"),
    e.stroke(),
    (e.lineWidth = 2.2),
    (e.strokeStyle = "rgba(255, 196, 50, 0.98)"),
    e.stroke(),
    e.restore());
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
        "shock" === b4mUnits[e].type && "setup" !== currentTurn.phase && shockArmyAppears();
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
  tulaCheck(!1);
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
  const s = t.length > 0 ? t[t.length - 1] : null,
    route = t.slice();
  (unitsMoving++, s && pendingDestinations.push(s));
  const mv = b4mUnits[b4mUnitsIndex(e)];
  (mv && (mv.moved = !0), t.length > 0 && soundMove(e));
  // its marks stay with the counter until it stops
  unitDisplayPos[e.id] = { x: e.position.x, y: e.position.y };
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
          airInterdiction(e, route, retreat),
          clearInterval(a),
          delete unitDisplayPos[e.id],
          refreshStatusMarkers(),
          finishUnitMove(s))
        : (clearUnit(board, e, o.x - 40, o.y - 40),
          r && r.id !== e.id && drawUnit(board, r, o.x - 30, o.y - 30),
          (i = t.shift()),
          (r = lookupUnit(Hex(i))),
          (o = Hex(i).center().add(Hex(i).toPoint())),
          (e.position = { x: i.x, y: i.y }),
          (unitDisplayPos[e.id] = { x: i.x, y: i.y }),
          refreshStatusMarkers(),
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
      !isMajorCity(e) || t.push("major"));
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
      // the defences of the capital: an attack on the Russian garrison of Moscow loses a second column
      (battle.moscowDefence = "moscow" === e.city && "soviet" === battle.defendingUnit.army && !moscowRuined() ? 1 : 0),
      (battle.battleOdds = Math.min(6, o - t.length + battle.partisanBonus - battle.moscowDefence)));
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
  (w && (w.innerText = L(WEATHER[currentTurn.turn], WEATHER_ZH[currentTurn.turn]) || ""), drawSeason(), applyMapArt(), refreshAirInfo());
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
        highlightMoveHex(hexHighlights, e);
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
      "img/" + currentTurn.army + "_turn_hd.png"),
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
      if (b4mUnits[b4mUnitsIndex(e)].position && !isMajorCity(t)) {
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
            (isMajorCity(t) ||
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
                isMajorCity(t)
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
              moscowGarrison()
                ? ((d.innerText += L(" But the garrison of Moscow does not retreat.", "但莫斯科守军不撤退。")),
                  (document.querySelector(".table_battle div.next_battle_button").style.display = "inline-block"))
                : findRetreat(advanceAfterCombat)));
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
              moscowGarrison()
                ? ((d.innerText = L("Exchange! The garrison of Moscow does not retreat.", "交换！莫斯科守军不撤退。")), matchLoss())
                : findRetreat(matchLoss)));
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
        (available.push(r[e]), highlightMoveHex(hexHighlights, r[e]));
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
      "img/" + currentTurn.army + "_turn_hd.png"),
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
      "img/" + currentTurn.army + "_turn_hd.png"));
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
          return e.sovietReplacement && !lookupUnit(e) && !isEZOC(e, "soviet") && !(e.city && "none" !== e.city && "german" === e.control);
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
        (partisans.push({ x: e.x, y: e.y, strength: bandStrength, acted: !0 }), partisansLeft--, drawPartisans(), partisanWarStarts());
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
      "img/" + currentTurn.army + "_turn_hd.png"),
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
      : smolenskBaseLost()
        ? 0
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
  "soviet" === currentTurn.army &&
    moscowLost() &&
    (document.getElementById("step_replacement_tip").innerText += L(
      " Moscow is in German hands: until it is retaken, every unit of yours gains " + FATIGUE.moscowLost + " fatigue at the start of each of your turns.",
      "莫斯科在德军手中：夺回之前，你的每支部队在每个己方回合开始时 +" + FATIGUE.moscowLost + " 疲劳。",
    ));
  "german" === currentTurn.army &&
    smolenskBaseLost() &&
    (document.getElementById("step_replacement_tip").innerText += L(
      " Smolensk, the supply base of Army Group Centre, is lost or cut off: no German replacements this turn, and no German unit recovers fatigue.",
      "中央集团军群的补给基地斯摩棱斯克失守或被切断：本回合德军没有补充兵，所有德军都不能恢复疲劳。",
    ));
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
          isEZOC(t, currentTurn.army) ||
          (t.city && "none" !== t.city && t.control && t.control !== currentTurn.army)
            ? t.city &&
              "none" !== t.city &&
              t.control === currentTurn.army &&
              !lookupUnit(t) &&
              (("soviet" === currentTurn.army && "moscow" === t.city && !moscowRuined()) ||
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
          case "base":
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
          case "base":
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
      (("soviet" === currentTurn.army && "moscow" === grid.get(e.position).city && !moscowRuined()) ||
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
          ("soviet" === currentTurn.army && "moscow" === grid.get(e.position).city && !moscowRuined()) ||
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
          // the last eliminated unit is back on the map: the placement hexes go out, and the tip says why
          // (out here, i is the function that finds the next unit to rebuild, not the point of the hex)
          if (r && t > 0 && o.length > 0 && !i()) {
            for (const h of o) clearHex(hexHighlights, Hex(h));
            ((o = []),
              (document.getElementById("step_replacement_tip").innerText += L(
                " All your eliminated units are back on the map, so no new unit can be placed: the remaining steps can only restore a half-strength unit in communication or rest a tired full-strength one (orange).",
                "被消灭的部队已经全部重建，没有新部队可以放了：剩下的补充兵员只能补充有补给的减员部队，或者让疲劳的满编部队（橙色）休整。",
              )));
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
      "img/" + currentTurn.army + "_turn_hd.png"));
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
  // victory points compared with the historical result
  {
    const e = standardResult();
    ((t = e.title), (n = e.text));
  }
  ((document.querySelector("#final_results > div.hud_title").innerHTML = t),
    (document.getElementById("final_results_tip").innerHTML = n + "<br /><br />" + lossesText() + "."));
  // the result on the whole screen, in the paper of the side at the table, with its music
  const plain = String(t).replace(/<[^>]+>/g, "").trim(),
    lossesLine = isZh() ? zhText(lossesText()) + "。" : lossesText() + ".";
  showEnding(standardGrade(), plain, standardResult().details + "<br /><br />" + lossesLine);
}
// ---------------------------------------------------------------- The end of the game, on the whole screen
// The result is announced in the paper of the side at the table (for two players at one screen, the side that
// came out ahead): the Soviet Information Bureau or the communiqué of the Wehrmacht High Command, with its music.
const ENDING_TEXTS = {
  soviet: {
    germanDecisive: [
      ["Moscow is in the hands of the enemy", "莫斯科落入敌手"],
      [
        "The capital has fallen and has not been taken back. Behind the new front east of the city the country is forming new armies: [[the war is not over]], and the Soviet people will take Moscow back.",
        "首都陷落了，也没能夺回来。在城东的新战线后面，全国正在组建新的集团军：[[战争还没有结束]]，苏联人民一定会把莫斯科夺回来。",
      ],
    ],
    germanMajor: [
      ["Hard days for the Motherland", "祖国的艰难日子"],
      [
        "Moscow stands, but the enemy holds far more of our land than in December 1941. [[Not a step back]]: the reserves of the Stavka are gathering for the next blow.",
        "莫斯科屹立不倒，但敌人占着的国土比 1941 年 12 月多得多。[[一步也不许后退]]：大本营预备队正在为下一次打击集结。",
      ],
    ],
    germanWin: [
      ["Moscow stands, and the enemy is still near", "莫斯科屹立，敌人仍在近旁"],
      [
        "The capital has held, but the enemy keeps more towns than he did in December 1941. [[The fight for every town goes on.]]",
        "首都守住了，但敌人占着的城镇比 1941 年 12 月还多。[[为每一座城镇的战斗还在继续。]]",
      ],
    ],
    historical: [
      ["The German plan to take Moscow has failed", "德军夺取莫斯科的计划破产了"],
      [
        "The front stands where it stood in December 1941: Moscow is saved and the German plan to take it has [[failed with a crash]], but the enemy still holds most of the towns.",
        "战线停在 1941 年 12 月的位置：莫斯科得救了，德军夺取莫斯科的计划[[彻底破产]]，但敌人仍占着大部分城镇。",
      ],
    ],
    sovietWin: [
      ["Victory of the Red Army!", "红军的胜利！"],
      [
        "The Red Army has done better than in December 1941: [[more Soviet towns are freed]] from the fascist yoke.",
        "红军打得比 1941 年 12 月还要好：[[更多的苏联城镇摆脱了法西斯的枷锁]]。",
      ],
    ],
    sovietDecisive: [
      ["Decisive victory of the Red Army!", "红军的决定性胜利！"],
      [
        "The German-fascist hordes have been routed far beyond what the Red Army achieved in December 1941. [[The rout that began at Moscow rolls on to the west.]]",
        "德国法西斯匪帮被击溃的程度，远远超过 1941 年 12 月红军的实际战果。[[从莫斯科城下开始的粉碎，正滚滚向西推进。]]",
      ],
    ],
  },
  german: {
    germanDecisive: [
      ["Moscow is taken", "莫斯科已被攻占"],
      [
        "Moscow has been taken and held to the end of the battle. The city lies in ruins and its people are left to the famine; the Red Army holds a new front to the east, and [[the war in the East goes on]].",
        "莫斯科被攻占，并一直守到会战结束。城市成了废墟，居民被丢给饥荒；红军在城东守着新的战线，[[东线的战争还在继续]]。",
      ],
    ],
    germanMajor: [
      ["The front holds far to the east", "战线远远守在东面"],
      [
        "Army Group Centre has held far more ground than it did in 1941. Moscow is not taken, and [[the winter has only begun]].",
        "中央集团军群守住的地方比 1941 年多得多。莫斯科没有拿下，而[[冬天才刚刚开始]]。",
      ],
    ],
    germanWin: [
      ["The front holds", "战线守住了"],
      ["Army Group Centre has held more than it did in 1941, but [[Moscow was not taken]].", "中央集团军群守住的地方比 1941 年多，但[[莫斯科没有拿下]]。"],
    ],
    historical: [
      ["Halted before Moscow", "在莫斯科城下止步"],
      [
        "The offensive on Moscow has failed. The army group has been thrown back, its divisions worn out and frozen; [[Hitler takes over the command of the army himself]].",
        "对莫斯科的攻势失败了。集团军群被击退，各师精疲力竭、冻得半死；[[希特勒亲自接管陆军指挥]]。",
      ],
    ],
    sovietWin: [
      ["Retreat in the central sector", "中路后撤"],
      [
        "In the central sector of the Eastern Front the troops are taking up “shorter lines”, as the communiqués put it: in truth the army group is falling back, and [[more towns are lost than in 1941]].",
        "东线中路的部队正在按公报的说法“缩短战线”：实际上集团军群在后退，[[丢掉的城镇比 1941 年还多]]。",
      ],
    ],
    sovietDecisive: [
      ["The front of Army Group Centre is broken", "中央集团军群的战线被突破"],
      [
        "The Russians have broken through on a wide front; the army group has been routed far beyond what happened in 1941, and [[its heavy weapons lie abandoned in the snow]].",
        "俄国人在宽大正面上突破；集团军群溃败的程度远超 1941 年，[[重武器丢弃在雪地里]]。",
      ],
    ],
  },
};
// the music of the endings: the Red Army's complete victory, its narrow victory, the historical result, its defeat;
// the German victory and defeat (a file that is not there is simply not played)
function endingMusic(paper, grade, won) {
  return "soviet" === paper
    ? "sovietDecisive" === grade
      ? "audio/defenders_hoi4.webm"
      : "sovietWin" === grade
        ? "audio/nightingales.webm"
        : "historical" === grade
          ? "audio/rzhev.webm"
          : "audio/dark_night.webm"
    : won
      ? "audio/ss_feindesland.mp3"
      : "historical" === grade
        ? "audio/lili_marleen.webm"
        : "sovietWin" === grade
          ? "audio/moorsoldaten.webm"
          : "audio/rising_sun_blues.mp3";
}
let endingAudio = null;
// Georgia Turner's field recording of 1937 is much quieter than the others: it is raised through the audio graph,
// with a limiter for the clicks of the disc
const QUIET_RECORDINGS = { rising_sun_blues: 3 };
function playEndingMusic(src) {
  (stopAnthem(), endingAudio && endingAudio.pause());
  if (!soundOn || !src) return;
  endingAudio = new Audio();
  endingAudio.dataset.src = src;
  const quiet = Object.keys(QUIET_RECORDINGS).find(function (k) {
      return src.indexOf(k) > -1;
    }),
    ctx = quiet ? audioReady() : null;
  endingAudio.volume = quiet ? 1 : 0.75;
  if (ctx)
    try {
      const source = ctx.createMediaElementSource(endingAudio),
        gain = ctx.createGain(),
        limiter = ctx.createDynamicsCompressor();
      ((gain.gain.value = QUIET_RECORDINGS[quiet]),
        (limiter.threshold.value = -6),
        (limiter.ratio.value = 12),
        (limiter.attack.value = 0.003),
        (limiter.release.value = 0.2),
        source.connect(gain),
        gain.connect(limiter),
        limiter.connect(ctx.destination));
    } catch (e) {}
  fetch(src)
    .then(function (response) {
      return response.ok ? response.blob() : Promise.reject();
    })
    .then(function (blob) {
      endingAudio.src = URL.createObjectURL(blob);
      const playing = endingAudio.play();
      playing && playing.catch(function () {});
    })
    .catch(function () {});
}
function standardGrade() {
  const e = victoryPoints(),
    t = historicalSovietVP(LAST_TURN),
    i = null === t ? 0 : e.soviet - t;
  return "german" === grid.get({ x: 10, y: 2 }).control
    ? "germanDecisive"
    : i >= 3
      ? "sovietDecisive"
      : i >= 1
        ? "sovietWin"
        : 0 === i
          ? "historical"
          : i >= -2
            ? "germanWin"
            : "germanMajor";
}
function showEnding(grade, resultLabel, details) {
  const paper = "" !== playAIAs ? ("soviet" === playAIAs ? "german" : "soviet") : 0 === grade.indexOf("german") ? "german" : "soviet",
    won = 0 === grade.indexOf(paper) || ("historical" === grade && "soviet" === paper),
    T = ENDING_TEXTS[paper][grade],
    soviet = "soviet" === paper,
    photo = soviet
      ? '<figure class="dispatch_photo"><img src="img/splash_kremlin_1941.jpg" alt="" /><figcaption>' +
        L("Searchlights and tracer over the Kremlin, 1941", "1941 年，克里姆林宫上空的探照灯和曳光弹") +
        "</figcaption></figure>"
      : "";
  let overlay = document.getElementById("decision_overlay");
  overlay || ((overlay = document.createElement("div")), (overlay.id = "decision_overlay"), document.body.appendChild(overlay));
  overlay.innerHTML =
    '<div class="dispatch_screen ' +
    paper +
    (photo ? " with_photo" : "") +
    '">' +
    photo +
    '<div class="dispatch ' +
    paper +
    (soviet ? " radio" : " order") +
    ' ending"><div class="dispatch_inner">' +
    (soviet ? sovietMasthead() : "") +
    '<div class="dispatch_head">' +
    (soviet ? '<div class="soviet_emblem"><span class="se_star">★</span><span class="se_hs">☭</span></div>' : '<img src="img/german_marker.png" />') +
    '<div class="dispatch_office"><div class="office_original">' +
    (soviet ? "Советское Информбюро" : "Oberkommando der Wehrmacht") +
    '</div><div class="office_en">' +
    (soviet ? L("Soviet Information Bureau, Moscow radio", "苏联情报局，莫斯科广播电台") : L("Wehrmacht High Command: the daily communiqué", "德国国防军最高统帅部：每日公报")) +
    '</div></div><div class="dispatch_stamp">' +
    (soviet ? (won ? "В последний час" : "Сообщение") : won ? "Sondermeldung" : "Wehrmachtbericht") +
    '</div></div><table class="dispatch_meta"><tr><th>' +
    L("Date", "日期") +
    "</th><td>" +
    L(MOSCOW_FALL_DATES[LAST_TURN] + " 1941", TURN_DATES_ZH[LAST_TURN]) +
    "</td></tr><tr><th>" +
    L("Result", "结果") +
    "</th><td>" +
    resultLabel +
    '</td></tr></table><div class="dispatch_title">' +
    L(T[0][0], T[0][1]) +
    '</div><div class="dispatch_text"><p>' +
    richText(L(T[1][0], T[1][1])) +
    '</p><div class="ending_details">' +
    details +
    "</div></div>" +
    (soviet
      ? sloganHtml(
          won
            ? { original: "Наше дело правое — победа будет за нами!", en: "Our cause is just: victory will be ours! (J. V. Stalin)", zh: "我们的事业是正义的——胜利必将属于我们！（И. В. 斯大林）" }
            : { original: "Смерть немецким оккупантам!", en: "Death to the German occupiers!", zh: "德国占领者必亡！" },
        )
      : "") +
    '<div class="ending_buttons"><button type="button" class="dispatch_continue ending_new">' +
    L("New game", "新游戏") +
    '</button><button type="button" class="dispatch_continue ending_map">' +
    L("Look at the map", "查看地图") +
    "</button></div></div></div></div>";
  overlay.style.display = "block";
  overlay.querySelector(".ending_new").onclick = function () {
    newGame();
  };
  overlay.querySelector(".ending_map").onclick = function () {
    ((overlay.style.display = "none"), (overlay.innerHTML = ""));
  };
  playEndingMusic(endingMusic(paper, grade, won));
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
    sizeCanvas(canvasBoard, Math.max(window.innerWidth, document.getElementById("map").width, BOARD_WIDTH), document.getElementById("map").height),
    (board = canvasBoard.getContext("2d")),
    (canvasHexHighlights = document.getElementById("hex_highlights")),
    sizeCanvas(canvasHexHighlights, document.getElementById("map").width, document.getElementById("map").height),
    (hexHighlights = canvasHexHighlights.getContext("2d")),
    (canvasCountersHighlights = document.getElementById("counters_highlights")),
    sizeCanvas(canvasCountersHighlights, document.getElementById("map").width, document.getElementById("map").height),
    sizeCanvas(document.getElementById("season_overlay"), document.getElementById("map").width, document.getElementById("map").height),
    sizeCanvas(document.getElementById("partisan_markers"), document.getElementById("map").width, document.getElementById("map").height),
    sizeCanvas(document.getElementById("status_markers"), document.getElementById("map").width, document.getElementById("map").height),
    (countersHighlights = canvasCountersHighlights.getContext("2d")),
    true)
  )
    applyMapArt();
  ((arrows = document.getElementById("arrows_counter")),
    (document.getElementById("help_menu").style.display = "block"),
    b4mSave
      ? continueFromSave()
      : (drawPositionedUnits(), turn1GermanSetupPhase(board, hexHighlights, countersHighlights)));
}
// ---------------------------------------------------------------- Title screen: the autumn of 1941
// Four steps before the battle, each told with the words of the time in the original language (a Sovinformburo
// communiqué, Hitler's order of the day) and in A. M. Samsonov's history «Крах фашистской агрессии 1939–1945»
// (Наука, 1980), with a translation and the source under each. Behind the panel: photographs of 1941 and two
// pieces of the 1942 film «Разгром немецких войск под Москвой» (the defence lines; searchlights and guns over Moscow).
const SAMSONOV_EN = "A. M. Samsonov, «Крах фашистской агрессии 1939–1945» (The Collapse of Fascist Aggression), Moscow: Nauka, 1980, ch. ",
  SAMSONOV_ZH = "А. М. 萨姆索诺夫《法西斯侵略的破产（1939—1945）》，莫斯科：科学出版社，1980 年，第 ",
  SPLASH_CHRONICLE = [
    {
      head: ["I · Kiev · September 1941", "一 · 基辅合围 · 1941 年 9 月"],
      scenes: [{ img: "img/splash_kiev_tachanka_1941.jpg", dur: 8 }, { img: "img/splash_kiev_mortar_1941.jpg", dur: 8 }],
      quotes: [
        {
          orig: "«После многодневных, ожесточенных боев наши войска оставили Киев.»",
          en: "After many days of fierce fighting our troops have abandoned Kiev.",
          zh: "经过多日激烈战斗，我军撤出了基辅。",
          src: ["Sovinformburo, evening communiqué of 21 September 1941", "苏联情报局晚间公报，1941 年 9 月 21 日"],
        },
        {
          orig: "«А когда ей в поддержку были повернуты 2-я полевая армия и 2-я танковая группа, то это более чем на месяц задержало наступление немецко-фашистских войск на Москву.»",
          en: "And when the 2nd Army and the 2nd Panzer Group were turned south to support it, this held up the German-fascist offensive on Moscow for more than a month.",
          zh: "而当第 2 集团军和第 2 装甲集群被调去支援它（南方集团军群）时，德国法西斯军队对莫斯科的进攻因此推迟了一个多月。",
          src: [SAMSONOV_EN + "4", SAMSONOV_ZH + "4 章"],
        },
      ],
    },
    {
      head: ["II · Yelnya · September 1941", "二 · 耶利尼亚反击 · 1941 年 9 月"],
      scenes: [{ img: "img/splash_yelnya_1941.jpg", dur: 8 }, { img: "img/splash_yelnya_women_1941.jpg", dur: 8 }],
      quotes: [
        {
          orig: "«Остатки дивизий противника поспешно отходят в западном направлении. Наши войска заняли город Ельня.»",
          en: "The remnants of the enemy divisions are hastily withdrawing to the west. Our troops have taken the town of Yelnya.",
          zh: "敌各师残部正仓皇向西撤退。我军占领了耶利尼亚城。",
          src: ["Sovinformburo, evening communiqué of 8 September 1941", "苏联情报局晚间公报，1941 年 9 月 8 日"],
        },
        {
          orig: "«В пламени борьбы родились первые гвардейские соединения Красной Армии.»",
          en: "In the flame of battle the first Guards formations of the Red Army were born.",
          zh: "在战斗的烈火中，红军第一批近卫兵团诞生了。",
          src: [SAMSONOV_EN + "4", SAMSONOV_ZH + "4 章"],
        },
      ],
    },
    {
      head: ["III · The defence lines · July–November 1941", "三 · 修筑防线 · 1941 年 7—11 月"],
      scenes: [{ video: "video/splash_lines_1941.webm", dur: 21 }, { img: "img/splash_moats_1941.jpg", dur: 8 }, { img: "img/splash_digging_1941.jpg", dur: 8 }],
      quotes: [
        {
          orig: "«…на строительстве ржевско-вяземской линии обороны ежедневно работало 300 — 400 тыс. человек. <…> За два месяца здесь было отрыто 2250 км противотанковых рвов и эскарпов…»",
          en: "…300 to 400 thousand people worked every day on building the Rzhev–Vyazma defence line. <…> In two months 2,250 km of anti-tank ditches and escarpments were dug here…",
          zh: "……每天有 30 万至 40 万人在修筑勒热夫—维亚济马防线。〈……〉两个月里，这里挖出了 2250 公里反坦克壕和削壁……",
          src: [SAMSONOV_EN + "7", SAMSONOV_ZH + "7 章"],
        },
        {
          orig: "«Трудящиеся Москвы проделали поистине гигантскую работу. Достаточно сказать, что объем выполненных земляных работ был в два раза больше, чем при строительстве Днепрогэса.»",
          en: "The working people of Moscow did truly gigantic work. Suffice it to say that the volume of earth they moved was twice that of the building of the Dnieper hydroelectric station.",
          zh: "莫斯科的劳动者完成了真正巨大的工作。只需指出一点：完成的土方量是修建第聂伯河水电站时的两倍。",
          src: [
            "Col.-Gen. P. A. Artemyev, commander of the Moscow Military District, in «Битва за Москву» (The Battle for Moscow), Moscow, 1966",
            "П. А. 阿尔捷米耶夫上将（时任莫斯科军区司令），文集《莫斯科会战》，莫斯科工人出版社，1966 年",
          ],
        },
      ],
    },
    {
      head: ["IV · Typhoon · 2 October 1941", "四 · “台风”来临 · 1941 年 10 月 2 日"],
      scenes: [{ video: "video/splash_pvo_1941.webm", dur: 20 }, { img: "img/splash_kremlin_1941.jpg", dur: 8 }, { img: "img/splash_moskva_hotel_1941.jpg", dur: 8 }],
      quotes: [
        {
          orig: "„Heute ist nun der Beginn der letzten großen Entscheidungsschlacht dieses Jahres.“",
          en: "Today, then, is the beginning of the last great decisive battle of this year.",
          zh: "今天，今年最后一场伟大的决战就此开始。",
          src: ["Hitler, order of the day to the soldiers of the Eastern Front, 2 October 1941", "希特勒《告东线士兵书》，1941 年 10 月 2 日"],
        },
        {
          orig: "«Главные силы группы армий «Центр» перешли в наступление 2 октября, действуя против Западного и Резервного фронтов. Запланированное врагом наступление на Москву началось.»",
          en: "The main forces of Army Group Centre went over to the offensive on 2 October, against the Western and Reserve Fronts. The offensive on Moscow that the enemy had planned had begun.",
          zh: "10 月 2 日，中央集团军群主力转入进攻，矛头指向西方面军和预备队方面军。敌人计划好的对莫斯科的进攻开始了。",
          src: [SAMSONOV_EN + "7", SAMSONOV_ZH + "7 章"],
        },
      ],
    },
  ];
let splashChapter = 0,
  splashSceneIndex = 0,
  splashSceneTimer = null,
  splashScenes = [];
function splashText(s) {
  return String(s).replace(/[&<>]/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m];
  });
}
function renderSplashChronicle() {
  const box = document.getElementById("splash_chronicle");
  if (!box) return;
  const ch = SPLASH_CHRONICLE[splashChapter];
  let html = '<div class="chron_head">' + splashText(L(ch.head[0], ch.head[1])) + "</div>";
  for (const q of ch.quotes)
    html +=
      '<div class="chron_quote"><div class="chron_orig">' + splashText(q.orig) + '</div><div class="chron_trans">' +
      splashText(L(q.en, q.zh)) + '</div><div class="chron_src">— ' + splashText(L(q.src[0], q.src[1])) + "</div></div>";
  html += '<div class="chron_dots">';
  SPLASH_CHRONICLE.forEach(function (c, k) {
    html += '<span class="chron_dot' + (k === splashChapter ? " on" : "") + '" data-chapter="' + k + '">' + ["I", "II", "III", "IV"][k] + "</span>";
  });
  box.innerHTML = html + "</div>";
  fitSplashChronicle();
}
// a long step on a small screen: make the type smaller until the whole step fits in the panel
function fitSplashChronicle() {
  const box = document.getElementById("splash_chronicle");
  if (!box) return;
  let s = 1;
  box.style.setProperty("--cs", s);
  while (box.scrollHeight > box.clientHeight + 1 && s > 0.62) box.style.setProperty("--cs", (s -= 0.04));
}
window.addEventListener("resize", fitSplashChronicle);
// a film paused while the page was hidden goes on when it is shown again
document.addEventListener("visibilitychange", function () {
  if ("visible" !== document.visibilityState) return;
  for (const s of splashScenes)
    if (s.video && s.el.classList.contains("on") && s.video.paused) {
      const p = s.video.play();
      p && p.catch && p.catch(function () {});
    }
});
function splashGoTo(chapter, scene) {
  if (!document.getElementById("splash_background")) return void clearTimeout(splashSceneTimer);
  clearTimeout(splashSceneTimer);
  const newChapter = chapter !== splashChapter || !document.getElementById("splash_chronicle").innerHTML;
  splashChapter = chapter;
  splashSceneIndex = scene;
  const box = document.getElementById("splash_chronicle");
  if (newChapter) {
    box.classList.add("fade");
    setTimeout(function () {
      renderSplashChronicle();
      box.classList.remove("fade");
    }, box.innerHTML ? 800 : 0);
  }
  const want = SPLASH_CHRONICLE[chapter].scenes[scene];
  let next = null;
  for (const s of splashScenes) {
    const on = s.def === want;
    s.el.classList.toggle("on", on);
    if (on && s.video) {
      try {
        s.video.currentTime = 0;
      } catch (e) {}
      const p = s.video.play();
      p && p.catch && p.catch(function () {});
    } else if (s.video && !on) setTimeout(function () { s.el.classList.contains("on") || s.video.pause(); }, 1700);
    if (on) next = s;
  }
  // the photographs zoom slowly: restart the animation for this showing
  if (next && !next.video) {
    next.el.classList.remove("on");
    void next.el.offsetWidth;
    next.el.classList.add("on");
  }
  // load the film of the following scene in good time
  const following = splashFollowing(chapter, scene);
  const nextDef = SPLASH_CHRONICLE[following[0]].scenes[following[1]];
  for (const s of splashScenes) if (s.def === nextDef && s.video && "auto" !== s.video.preload) (s.video.preload = "auto"), s.video.load();
  splashSceneTimer = setTimeout(function () {
    splashGoTo(following[0], following[1]);
  }, 1e3 * want.dur);
}
function splashFollowing(chapter, scene) {
  return scene + 1 < SPLASH_CHRONICLE[chapter].scenes.length ? [chapter, scene + 1] : [(chapter + 1) % SPLASH_CHRONICLE.length, 0];
}
function startSplashChronicle() {
  const stage = document.getElementById("splash_scenes");
  if (!stage) return;
  for (const ch of SPLASH_CHRONICLE)
    for (const def of ch.scenes) {
      const el = document.createElement("div");
      el.className = "splash_scene " + (def.video ? "film" : "photo");
      let video = null;
      if (def.video) {
        video = document.createElement("video");
        video.muted = true;
        video.setAttribute("muted", "");
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.preload = "none";
        video.src = def.video;
        el.appendChild(video);
      } else el.style.backgroundImage = "url(" + def.img + ")";
      stage.appendChild(el);
      splashScenes.push({ def: def, el: el, video: video });
    }
  document.getElementById("splash_chronicle").addEventListener("click", function (e) {
    const dot = e.target.closest(".chron_dot");
    dot && splashGoTo(+dot.dataset.chapter, 0);
  });
  splashGoTo(0, 0);
}
window.addEventListener("load", function () {
  (startSplashChronicle(),
  setTimeout(function () {
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
    // the tournament rules are gone: forget a choice made in an older version
    window.localStorage.removeItem("b4mTournamentMode"));
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
  "The Battle of Moscow": "莫斯科会战",
  "Play Germany": "扮演德军",
  "Play the Soviet Union": "扮演苏军",
  "against the computer": "对战电脑",
  "Map": "地图",
  "Your side's staff map": "随阵营（己方总参谋部地图）",
  "Red Army General Staff": "苏军总参谋部地图",
  "German General Staff": "德军总参谋部地图",
  "Painted landscape": "写实地景",
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
  ["Show the units cut off from their map edge (key S)", "显示交通线被切断的部队（S 键）"],
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
  [" The attacking unit strength is already reduced so it is eliminated.", "进攻部队已经减员，因此被消灭。"],
  ["The battle has no effect.", "这场战斗没有结果。"],
  ["The defending unit needs to retreat 2 hexes.", "防守部队必须后撤 2 格。"],
  [" But it is in a major city, so it takes a step loss instead and doesn't retreat.", "但它在大城市里，因此改为损失 1 级，不撤退。"],
  [" But Hitler's stand-fast order holds it in the city: it takes a step loss instead and doesn't retreat.", "但希特勒的死守令把它钉在城里：改为损失 1 级，不撤退。"],
  ["The defending unit loses 1 step and is retreated 2 hexes.", "防守部队损失 1 级，并后撤 2 格。"],
  [" But its strength is already reduced so it is eliminated.", "但它已经减员，因此被消灭。"],
  ["The defending unit is eliminated.", "防守部队被消灭。"],
  [" The defending unit strength is already reduced so it is eliminated.", "防守部队已经减员，因此被消灭。"],
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
  ["This turn, Russian attacks on German units within 1 hex of the band gain one odds column.", "本回合苏军进攻该游击队 1 格内的德军部队时，兵力比右移 1 栏。"],
  ["A German-held town within 2 hexes with no German unit in or next to it, if the bands within 2 hexes of it total 3 strength or more: roll a die; up to their total strength (at most 5) the town becomes Russian, otherwise every band taking part loses 1 strength.", "2 格内一座德军控制、城里及相邻格都没有德军的城镇，且该城 2 格内的游击队力量合计 3 点或以上时：掷一个骰子，点数不超过游击队总力量（最多算 5）时城镇变为苏军控制，否则每支参加的游击队损失 1 点力量。"],
  ["Slip through the forests to an empty forest hex within 2 hexes.", "穿过森林，转移到 2 格内的空森林格。"],
  ["+1 strength (at most 3), only with no German unit within 2 hexes.", "+1 力量（最多 3），只有 2 格内没有德军时才行。"],
  [" Click a highlighted hex.", "点击一个高亮的格子。"],
  ["The Stavka reserves are committed! Place the reinforcement units in the eligible area of the map (red-bordered edge).", "大本营预备队投入战斗！把增援部队放到地图上的可放置区域（红边地图边缘）。"],
  ["Place the reinforcement unit in the eligible area of the map.", "把增援部队放到地图上的可放置区域。"],
  ["The enemy places the reinforcement units in the eligible area of the map.", "敌方把增援部队放到地图上的可放置区域。"],
  ["The NKVD brigade joins the line: click a half-strength infantry army in communication (highlighted). It becomes a shock army, 5-4 now and 10-4 once restored.", "NKVD 旅投入防线：点击一个有补给的减员步兵集团军（已高亮）。它变成突击集团军，现在是 5-4，补充至满编后是 10-4。"],
  ["The NKVD brigade joins an army in the line.", "NKVD 旅加入了前线的一个集团军。"],
  ["Ski battalions arrive: select infantry armies in communication to reinforce them (optional). In winter, ski-reinforced armies move through forests at 1 MP per hex and ignore the forest shift when they attack.", "滑雪营到达：选择有补给的步兵集团军进行加强（可选）。冬季里，滑雪加强的集团军穿越森林每格只需 1 点移动力，进攻时森林不再使兵力比左移。"],
  ["The enemy reinforces infantry armies with ski battalions.", "敌方用滑雪营加强了步兵集团军。"],
  ["The NKVD detachments parachute behind the German lines: place them as partisan bands of strength 2 on forest hexes behind the German lines, not next to German units (optional).", "NKVD 分队伞降到德军后方：把它们作为力量 2 的游击队，放到德军后方、不与德军相邻的森林格里（可选）。"],
  ["New partisan bands form behind the German lines: place them on forest hexes behind the German lines, not next to German units (optional).", "新的游击队在德军后方组建：把它们放到德军后方、不与德军相邻的森林格里（可选）。"],
  ["The NKVD detachments parachute behind the German lines.", "NKVD 分队伞降到德军后方。"],
  ["New partisan bands form behind the German lines.", "新的游击队在德军后方组建。"],
  ["Partisan operations behind the German lines.", "游击队在德军后方行动。"],
  ["All the reinforcements have been deployed and the partisans have acted.", "增援已全部部署，游击队也已行动。"],
  ["The enemy has deployed its reinforcements and its partisans have acted.", "敌方已部署增援，它的游击队也已行动。"],
  ["Place new half-strength units in the eligible area of the map or flip a half-strength unit that is currently on the map over to its full-strength side.", "在地图上的可放置区域放下新的减员部队，或者把地图上的减员部队翻回满编面。"],
  ["The enemy places new half-strength units in the eligible area of the map or flips half-strength units that are currently on the map over to their full-strength side.", "敌方在地图上放下新的减员部队，或者把地图上的减员部队翻回满编面。"],
  ["You have finished assigning your replacements.", "你已经分配完补充兵。"],
  ["The enemy has finished assigning replacements.", "敌方已经分配完补充兵。"],
  [" No unit of yours is off the map to be rebuilt now, so a step can only restore a half-strength unit in communication or rest a tired full-strength one.", "现在你没有被消灭、可以重建的部队，所以补充兵员只能补充有补给的减员部队，或者让疲劳的满编部队休整。"],
  [" A step spent on a full-strength unit in communication (orange) clears all its fatigue.", "一级补充兵员用在有补给的满编部队上（橙色），可以清除它的全部疲劳。"],
  ["All units that begin this phase on a rail line may move along it.", "本阶段开始时位于铁路上的所有部队可以沿铁路移动。"],
  ["All armor/panzer units may move.", "所有装甲部队可以移动。"],
  [" Select the ones you choose to move and their destination.", "选择你要移动的部队和它们的目的地。"],
  [" But the enemy has decided not to use this capability during this phase.", "但敌方决定本阶段不使用这个能力。"],
  ["+1 Russian replacement step next turn · the liberators shake off some fatigue", "下回合苏军 +1 级补充兵员 · 解放城市的部队疲劳降一级"],
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
  [/You have <strong>(\d+)<\/strong> replacement steps? left to assign\./g, "你还有 <strong>$1</strong> 级补充兵员可以分配。"],
  [/The enemy has <strong>(\d+)<\/strong> replacement steps? left to assign\./g, "敌方还有 <strong>$1</strong> 级补充兵员可以分配。"],
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
  [/Die roll (\d) \((\d) or less needed\): the partisans rise and take (.+?)! \+1 Russian replacement step\./g, "掷骰 $1（需要 $2 或更小）：游击队起义，夺取了$3！苏军 +1 级补充兵员。"],
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
  [/The Germans get an extra point because they have 12 or more Panzer steps on the map at the end of the game, bringing their total to (<strong>)?(\d+) points(<\/strong>)?\./g, "游戏结束时德军在地图上有 12 级或更多装甲部队，多得 1 分，总分 $1$2 分$3。"],
  [/Although they lost, the Germans get (<strong>)?1 point(<\/strong>)? because they have 12 or more Panzer steps on the map at the end of the game\./g, "虽然输了，但游戏结束时德军在地图上有 12 级或更多装甲部队，得 $11 分$2。"],
  [/The Red Army gets an extra point because the Germans have 7 or fewer Panzer steps on the map at the end of the game, bringing the Red Army's total to (<strong>)?(\d+) points(<\/strong>)?\./g, "游戏结束时德军在地图上的装甲部队不超过 7 级，红军多得 1 分，总分 $1$2 分$3。"],
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
  return !e || /^(SCRIPT|STYLE|CANVAS|TEXTAREA|INPUT)$/.test(e.nodeName) || (e.closest && e.closest("#decision_overlay, .help_zh, #help_body, #help_toc, #splash_chronicle"));
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
  renderSplashChronicle();
  // the charts are written in the language of the interface
  "undefined" != typeof board && board && drawBoardCharts();
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
