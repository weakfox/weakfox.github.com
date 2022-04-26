const $rz = document.querySelector("#rz");
const $rzBtn = document.querySelector("#rz-btn");
const $zr = document.querySelector("#zr");
const $zrBtn = document.querySelector("#zr-btn");

$rzBtn.addEventListener("click", () => {
  const v = $rz.value;

  if (v) window.open(`https://kotobank.jp/jazhword/${encodeURIComponent(v)}`);
});

$zrBtn.addEventListener("click", () => {
  const v = $zr.value;

  if (v) window.open(`https://kotobank.jp/zhjaword/${encodeURIComponent(v)}`);
});
