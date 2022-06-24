import * as skinview3d from "skinview3d";
const element = document.getElementById("canvas");

const viewer = new skinview3d.SkinViewer({
  canvas: element,
  width: 300,
  height: 400,
  skin: "Hacksore.png"
});

// Control objects with your mouse!
const control = skinview3d.createOrbitControls(viewer);
control.enableRotate = true;
control.enableZoom = false;
control.enablePan = false;

console.log(viewer);
