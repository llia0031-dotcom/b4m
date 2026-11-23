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
  MAX_PARTISANS = 3,
  SPECIAL_ARRIVALS = {
    4: { units: ["s1sh"] },
    8: { units: ["s1gc", "s2gc"], ski: 3, partisans: 2 },
    9: { partisans: 1 },
  };
let partisans = [],
  reinforcementAIToken = null;
function isWinterTurn() {
  return currentTurn.turn >= WINTER_START;
}
function arrivalTurnOf(e) {
  for (const t in SPECIAL_ARRIVALS)
    if ((SPECIAL_ARRIVALS[t].units || []).indexOf(e) > -1) return Number(t);
  return 0;
}
function hasReinforcementStep(e) {
  return !!SPECIAL_ARRIVALS[e] || (e >= WINTER_START && partisans.length > 0);
}
function hasPartisan(e) {
  return (
    !!e &&
    partisans.some(function (t) {
      return t.x === e.x && t.y === e.y;
    })
  );
}
function inPartisanZOC(e) {
  if (!e) return !1;
  if (hasPartisan(e)) return !0;
  for (const t of grid.neighborsOf(e)) if (t && hasPartisan(t)) return !0;
  return !1;
}
// A German unit entering a band's hex sweeps it: the band loses 2 strength and the survivors slip
// away into a forest within 2 hexes that is not next to German units (or are destroyed)
function removePartisanAt(e) {
  if (!e) return;
  const t = partisanAt(e);
  if (!t) return;
  if (((t.strength = (t.strength || 1) - 2), t.strength > 0)) {
    const n = grid.get(e),
      i = b4mGrid
        .map(function (e) {
          return grid.get({ x: e.x, y: e.y });
        })
        .filter(function (e) {
          return (
            "forest" === e.terrain &&
            !lookupUnit(e) &&
            !partisanAt(e) &&
            !isEZOC(e, "soviet") &&
            n.distance(e) <= 2
          );
        })
        .sort(function (e, t) {
          return n.distance(e) - n.distance(t);
        })[0];
    i ? ((t.x = i.x), (t.y = i.y)) : (t.strength = 0);
  }
  ((partisans = partisans.filter(function (e) {
    return (e.strength || 1) > 0;
  })),
    drawPartisans());
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
function drawPartisanMarker(e, t, n, i, s) {
  (e.save(),
    e.beginPath(),
    e.arc(t, n, i, 0, 2 * Math.PI),
    (e.fillStyle = "rgba(47, 74, 42, 0.92)"),
    e.fill(),
    (e.lineWidth = Math.max(2, i / 12)),
    (e.strokeStyle = "#f2e6c0"),
    e.stroke(),
    e.beginPath());
  for (let r = 0; r < 10; r++) {
    const o = r % 2 ? 0.2 * i : 0.48 * i,
      a = -Math.PI / 2 + (r * Math.PI) / 5;
    e.lineTo(t + o * Math.cos(a), n - 0.08 * i + o * Math.sin(a));
  }
  (e.closePath(),
    (e.fillStyle = "#d9232e"),
    e.fill(),
    (e.lineWidth = 1),
    (e.strokeStyle = "#5a0d12"),
    e.stroke(),
    s &&
      ((e.fillStyle = "#ffffff"),
      (e.font = "bold " + Math.round(0.36 * i) + "px Arial, sans-serif"),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      e.fillText(String(s), t, n + 0.68 * i)),
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
    l = "soviet" === e ? "sovietReplacement" : "germanReplacement";
  for (const e of b4mUnits) e.position && r.set(e.position.x + "," + e.position.y, e.army);
  // Partisan hexes and the ring around them (empty when partisans are ignored)
  if (!0 !== t)
    for (const e of partisans) {
      const t = e.x + "," + e.y;
      a.add(t);
      for (const e of o.get(t) || []) a.add(e);
    }
  const s = function (t) {
      return (
        r.get(t) !== n &&
        !o.get(t).some(function (e) {
          return r.get(e) === n;
        }) &&
        !("german" === e && a.has(t))
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
    return "soviet" === e.army && inPartisanZOC(n) && !t.sovietNoPartisans(n)
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
        l = "Stocks " + a + "/" + CITY_STOCK_CAP[e];
      (n.save(),
        (n.font = "bold 11px Arial, sans-serif"),
        (n.textAlign = "center"),
        (n.textBaseline = "middle"));
      const s = n.measureText(l).width + 10;
      ((n.fillStyle = "rgba(0, 0, 0, 0.7)"),
        n.fillRect(r.x - s / 2, r.y - 45, s, 14),
        (n.fillStyle = a > 0 ? "#ffd08a" : "#ff8a80"),
        n.fillText(l, r.x, r.y - 38),
        n.restore());
    }
    t && (t.innerText = ": " + e.german + " German, " + e.soviet + " Russian cut off");
  }
  // Fatigue: a three-segment bar under the counter, one segment per level (only for tired units)
  if (fatigueView)
    for (const e of b4mUnits) {
      const t = fatigueLevel(e);
      if (!e.position || t < 1) continue;
      const i = grid.get(e.position),
        o = i.center().add(i.toPoint()),
        r = ["", "#fac775", "#ef9f27", "#e24b4a"][t];
      for (let e = 0; e < 3; e++) {
        const i = o.x - 29 + 20 * e;
        ((n.fillStyle = e < t ? r : "rgba(0, 0, 0, 0.35)"),
          n.fillRect(i, o.y + 40, 18, 6),
          (n.lineWidth = 1),
          (n.strokeStyle = "#211c21"),
          n.strokeRect(i + 0.5, o.y + 40.5, 17, 5));
      }
    }
}
function scheduleStatusRefresh() {
  (supplyView || fatigueView) &&
    (clearTimeout(statusRefreshTimer), (statusRefreshTimer = setTimeout(refreshStatusMarkers, 400)));
}
function setLayer(e, t) {
  ("supply" === e ? (supplyView = !!t) : (fatigueView = !!t));
  const n = document.getElementById("layer_" + e);
  n && (n.checked = !!t);
  try {
    window.localStorage.setItem("supply" === e ? "b4mLayerSupply" : "b4mLayerFatigue", t ? "1" : "0");
  } catch (e) {}
  refreshStatusMarkers();
}
function setSupplyLayer(e) {
  setLayer("supply", e);
}
function initStatusUI() {
  for (const e of ["supply", "fatigue"]) {
    const t = document.getElementById("layer_" + e);
    if (!t) continue;
    let n = !1;
    try {
      n = "1" === window.localStorage.getItem("supply" === e ? "b4mLayerSupply" : "b4mLayerFatigue");
    } catch (e) {}
    (setLayer(e, n),
      t.addEventListener("change", function () {
        setLayer(e, t.checked);
      }));
  }
  // "S" and "F" switch the supply and fatigue layers on and off
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
    "s" === t ? setLayer("supply", !supplyView) : "f" === t && setLayer("fatigue", !fatigueView);
  });
}
window.addEventListener("load", initStatusUI);
window.addEventListener("load", function () {
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
    winterOutsideCity: 1,
    idle: 1,
    rest: 2,
    city: 1,
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
  const t = parseInt(e.id.replace(/\D/g, ""), 10),
    n = t % 100,
    i = t + (n >= 11 && n <= 13 ? "th" : ["th", "st", "nd", "rd"][t % 10] || "th");
  if ("soviet" === e.army)
    return "shock" === e.type
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
      return (e.strength || 1) > 0;
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
      isWinterTurn() && "german" === e && "none" === i.city && (r += FATIGUE.winterOutsideCity),
      o ||
        s ||
        (n.fought || (r -= n.moved ? FATIGUE.idle : FATIGUE.rest),
        "none" !== i.city && i.control === e && (r -= FATIGUE.city)),
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
function fatigueFactor(e) {
  return [1, 0.75, 0.5, 0.5][fatigueLevel(e)];
}
function fmtStrength(e) {
  return String(Math.round(10 * e) / 10);
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
    e.attackFatigueLoss > 0 &&
      (t +=
        '<span class="modifier_badge" title="Tired attackers fight at part of their strength">Fatigue -' +
        fmtStrength(e.attackFatigueLoss) +
        "</span> "),
    e.defendFatigueLoss > 0 &&
      (t +=
        '<span class="modifier_badge bonus" title="The tired defender fights at part of its strength">Tired defender -' +
        fmtStrength(e.defendFatigueLoss) +
        "</span> "),
    e.partisanBonus &&
      (t += '<span class="modifier_badge partisan" title="Partisans guide the attack">Partisans +1</span> '),
    t
  );
}
function takeLiberationBonus() {
  const e = liberationBonus;
  return ((liberationBonus = 0), e);
}
function showEventBanner(e) {
  let t = document.getElementById("event_banner");
  (t || ((t = document.createElement("div")), (t.id = "event_banner"), document.body.appendChild(t)),
    (t.innerHTML = e),
    (t.style.display = "block"),
    clearTimeout(t.hideTimer),
    (t.hideTimer = setTimeout(function () {
      t.style.display = "none";
    }, 4500)));
}
// A Russian unit enters a German-held city during the Russian turn
function cityLiberated(e, t) {
  const n = CITY_NAMES[e.x + "," + e.y] || "A city";
  (liberationBonus++,
    t && addFatigue(t, -FATIGUE.liberation),
    showEventBanner(
      '<img src="img/soviet_marker.png" />' +
        n +
        " liberated!<span>+1 Russian replacement step next turn · the liberators shake off some fatigue</span>",
    ));
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
  return { soviet: e, german: t };
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
  return CHRONICLE[e] ? '<div class="chronicle_note">' + CHRONICLE[e] + "</div>" : "";
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
    chronicleHtml(currentTurn.turn)
  );
}
// Big events of the turn, announced at the start of the side's turn
function announceTurnEvents() {
  "german" === currentTurn.army &&
    currentTurn.turn === HALT_ORDER_TURN &&
    showEventBanner(
      '<img src="img/german_marker.png" />16 December 1941: Hitler\'s stand-fast order<span>German units defending in a city now hold at all costs: a DR result costs them a step instead of a retreat.</span>',
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
    ? ((o = '<img src="img/german_marker.png" /><span>German Decisive Victory!</span>'),
      (r = "The German Army took Moscow and held it to the end of the game."))
    : i >= 3
      ? ((o = '<img src="img/soviet_marker.png" /><span>Russian Decisive Victory!</span>'),
        (r = "The counteroffensive went far beyond what the Red Army achieved in 1941."))
      : i >= 1
        ? ((o = '<img src="img/soviet_marker.png" /><span>Russian Victory!</span>'),
          (r = "The Red Army did better than in 1941."))
        : 0 === i
          ? ((o = "<span>The Historical Result</span>"),
            (r = "The front stands where it stood in December 1941: Moscow is saved, but the Germans still hold most of the cities."))
          : i >= -2
            ? ((o = '<img src="img/german_marker.png" /><span>German Victory!</span>'),
              (r = "The Wehrmacht held more than it did in 1941."))
            : ((o = '<img src="img/german_marker.png" /><span>German Major Victory!</span>'),
              (r = "The Wehrmacht held far more than it did in 1941."));
  let a = "";
  for (const e of b4mGrid) {
    if (!e.city || "none" === e.city) continue;
    const t = grid.get({ x: e.x, y: e.y });
    a +=
      "<tr><td>" +
      (CITY_NAMES[e.x + "," + e.y] || "City") +
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
      "<br /><br />Victory points at the end of Game Turn " +
      LAST_TURN +
      ": <strong>Russians " +
      e.soviet +
      ", Germans " +
      e.german +
      "</strong>" +
      (null !== t
        ? ". In 1941 the Red Army held Moscow, Tula and Ryazan at this date (" + t + " points)."
        : ".") +
      '<table class="vp_table">' +
      a +
      '</table><div class="chronicle_note">The battle of Moscow destroyed the myth of the Wehrmacht\'s invincibility. Yet, as Marshal Vasilevsky wrote, the general offensive of the winter of 1942 did not completely destroy any of the main German groupings.</div>',
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
    (b4mSave.railCuts = railCuts.slice()),
    (b4mSave.cityStocks = JSON.parse(JSON.stringify(cityStocks))),
    (b4mSave.partisanGuides = partisanGuides.slice()),
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
          (n.control = t.army));
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
function moveUnit(e, t, n) {
  // Copy the route now: a caller may later change the objects it passed (resolveNextBattle reuses
  // initialDefendingUnitPosition), which used to send an advancing unit onto the next defender
  t = t.map(function (e) {
    return { x: e.x, y: e.y };
  });
  const s = t.length > 0 ? t[t.length - 1] : null;
  (unitsMoving++, s && pendingDestinations.push(s));
  const mv = b4mUnits[b4mUnitsIndex(e)];
  mv && (mv.moved = !0);
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
          "german" === e.army && removePartisanAt(e.position),
          clearInterval(a),
          finishUnitMove(s))
        : (clearUnit(board, e, o.x - 40, o.y - 40),
          r && r.id !== e.id && drawUnit(board, r, o.x - 30, o.y - 30),
          (i = t.shift()),
          (r = lookupUnit(Hex(i))),
          (o = Hex(i).center().add(Hex(i).toPoint())),
          (e.position = { x: i.x, y: i.y }),
          drawUnit(board, e, o.x - 30, o.y - 30));
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
  for (let e = 0; e < b4mUnits.length; e++)
    if (b4mUnits[e].position) {
      let t = Hex(b4mUnits[e].position),
        n = t.center().add(t.toPoint());
      drawUnit(board, b4mUnits[e], n.x - 30, n.y - 30);
    }
  drawPartisans();
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
      // a tired unit fights at part of its own strength (3/4 tired, 1/2 exhausted)
      const n = t * fatigueFactor(e);
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
          '<td class="cell_attackers"><img src="img/' +
          battles[e].attackingUnits[0].army +
          '_marker.png" /> ' +
          fmtStrength(battles[e].attackingStrength) +
          "</td>",
        i =
          '<td class="cell_defender"><img src="img/' +
          battles[e].defendingUnit.army +
          '_marker.png" /> ' +
          fmtStrength(defenderStrengthOf(battles[e])) +
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
          '<td class="cell_attackers"><img src="img/' +
          battle.attackingUnits[0].army +
          '_marker.png" /> ' +
          fmtStrength(battle.attackingStrength) +
          "</td>",
        i =
          '<td class="cell_defender"><img src="img/' +
          battle.defendingUnit.army +
          '_marker.png" /> ' +
          fmtStrength(defenderStrengthOf(battle)) +
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
  document.getElementById("turn_info_title").innerText = e;
}
function turn1GermanSetupPhase() {
  ((currentTurn = { turn: 1, army: "german", phase: "setup", subphase: "" }),
    (document.getElementById("turn_info").style.display = "block"),
    (document.getElementById("layer_toolbar").style.display = "block"),
    setTurnInfo(),
    (document.getElementById("step_0_tip").innerText =
      "german" !== playAIAs
        ? "Set up one full-strength German unit on each hex containing a black cross."
        : "The German army sets up one full-strength unit on each hex containing a black cross."),
    (document.getElementById("step_0").style.display = "block"));
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
  initialDefendingUnitPosition = { x: -1, y: -1 };
function handleRetreatSelection(e) {
  let t = grid.get(e);
  if (!t) return;
  let n = singleValidRetreat.filter(function (e) {
    return e.equals(t);
  });
  if (n.length > 0) {
    let e = n[0].from.slice();
    (e.push({ x: n[0].x, y: n[0].y }), moveUnit(currentDefendingUnit, e));
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
        moveUnit(currentDefendingUnit, n),
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
  (e && e.stopPropagation(),
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
      (initialDefendingUnitPosition.y = currentDefendingUnit.position.y));
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
  { id: "raid", label: "Raid", tip: "Ambush the supply columns of a German unit within 2 hexes: it gains as many fatigue points as the band's strength." },
  { id: "sabotage", label: "Sabotage rail", tip: "Cut a rail hex within 1 hex: for two German turns, German units within 2 hexes of the cut get +1 fatigue and cannot recover." },
  { id: "guide", label: "Guide the army", tip: "This turn, Russian attacks on German units within 1 hex of the band gain one odds column." },
  { id: "move", label: "Move", tip: "Slip through the forests to an empty forest hex within 2 hexes." },
  { id: "recruit", label: "Recruit", tip: "Grow by 1 strength (at most 3). Only possible with no German unit within 2 hexes." },
  { id: "wait", label: "Stand by", tip: "Do nothing this turn." },
];
function reinforcementPhase(e) {
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("reinforcementPhase"),
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
  ((partisanGuides = partisanGuides.filter(function (e) {
    return e.turn === currentTurn.turn;
  })),
    currentTurn.turn === WINTER_START &&
      showEventBanner(
        '<img src="img/soviet_marker.png" />5-6 December 1941: the Red Army strikes back<span>The Stavka reserves are committed: Guards cavalry, ski battalions and partisans behind the German lines.</span>',
      ));
  let units = b4mUnits.filter(function (e) {
      return (plan.units || []).indexOf(e.id) > -1 && !e.position;
    }),
    skiLeft = plan.ski || 0,
    partisansLeft = Math.max(0, Math.min(plan.partisans || 0, MAX_PARTISANS - partisans.length)),
    actionChoice = null,
    actionNote = "";
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
    partisanHexes = function () {
      return allHexes().filter(function (e) {
        return (
          "forest" === e.terrain &&
          !lookupUnit(e) &&
          !hasPartisan(e) &&
          !isEZOC(e, "soviet") &&
          !isInCommunication(e, "soviet")
        );
      });
    },
    actingBand = function () {
      return (
        partisans.find(function (e) {
          return !e.acted;
        }) || null
      );
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
        const t = lookupUnit(n);
        (addFatigue(t, e.strength),
          (actionNote = "Partisans ambush the supply columns of the " + unitName(t) + " (+" + e.strength + " fatigue)."));
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
            ? "New partisan bands form behind the German lines: place them on forest hexes cut off from Russian communication and not next to German units (optional)."
            : "New partisan bands form behind the German lines."),
          (count.innerHTML = "New bands left: <strong>" + partisansLeft + "</strong>"),
          drawReinforcementTokens(canvas, "partisans", partisansLeft));
      else if ("actions" === e) {
        const e = actingBand();
        ((canvas.style.display = "none"),
          highlightHex(hexHighlights, grid.get(e), "rgba(255, 215, 0, 0.55)"),
          (t = actionChoice ? actionTargets(e, actionChoice) : []),
          (tip.innerText = isHuman
            ? "Partisan band at " + hexLabel(e) + " (strength " + e.strength + "): choose its action for this turn."
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
      (isHuman ? "units" !== e : "done" === e)
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
        (partisans.push({ x: e.x, y: e.y, strength: 1, acted: !0 }), partisansLeft--, drawPartisans());
      } else {
        if ("actions" !== t || !actionChoice) return;
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
      } else if ("ski" === n)
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
          o = actionTargets(e, "sabotage")[0];
        return (
          n
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
  if ("soviet" === t && inPartisanZOC(n)) return !0;
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
    if (l > 1 && n && (!i || i.army === t) && !isEZOC(e, t) && !("german" === t && inPartisanZOC(e)))
      return !0;
    for (const n of grid.neighborsOf(e)) {
      let i = Hex(n);
      if (i && "off" !== i.terrain) {
        i.credit = e.credit - 1;
        let n = lookupUnit(i);
        (n && n.army === o && (i.credit = -1),
          isEZOC(i, t) && i.credit > -1 && (i.credit = 0),
          // Partisans cut German lines of communication: their hex is impassable, the hexes around it act like an enemy ZOC
          "german" === t &&
            (hasPartisan(i) ? (i.credit = -1) : i.credit > -1 && inPartisanZOC(i) && (i.credit = 0)));
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
  (e && e.stopPropagation(),
    cleanAndSaveBeforeNewPhase("replacementPhase"),
    "german" === currentTurn.army
      ? (currentTurn.army = "soviet")
      : (followingReinforcement ||
          (currentTurn.turn++, setTurnInfo(), (currentTurn.army = "german")),
        (followingReinforcement = !1)),
    (currentTurn.phase = "replacement"),
    (currentTurn.subphase = "standard"),
    processTurnFatigue(currentTurn.army),
    announceTurnEvents(),
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
      ? (3 === currentTurn.turn || 4 === currentTurn.turn ? 4 : 5) + takeLiberationBonus()
      : 1;
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
    (document.getElementById("final_results_tip").innerHTML = n));
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
  liberationBonus = b4mSave.liberationBonus || 0;
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
    drawPositionedUnits(),
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
