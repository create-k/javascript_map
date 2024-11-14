// JavaScript
// console.log('Hello world!');

const map = L.map('map').setView([35.6486192195266, 140.03527894617105], 10);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', { attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>', }).addTo(map);


//アイコン
//const whiteIcon = L.icon({
//   iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',

//    iconSize: [40, 40], // size of the icon
//    shadowSize: [40, 40], // size of the shadow
//    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
//    shadowAnchor: [20, 40],  // the same for the shadow
//   popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
//});

//円の範囲
const circle = L.circle([35.64748204669359, 139.8641020623105], {
    color: 'pink', //円の輪郭線の色
    fillColor: 'lightpink', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 30000//半径、メートルで指定
}).addTo(map);

circle.bindPopup("なんの範囲？");

// 多角形の表示
const polygon = L.polygon([
    [35.739123656851746, 139.72040230476495],
    [35.6071107084597, 139.8804973366613　],
    [35.699969395746294, 140.1100062217809]
  ], {
    color: 'green',
    fillColor: 'lightgreen',
    fillOpacity: 0.3
  }).addTo(map);
  

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([35.6486192195266, 140.03527894617105], { icon: whiteIcon }).addTo(map).bindPopup('舞台刀剣乱舞七周年感謝祭があったとこ！').openPopup();
L.marker([35.674938119581306, 139.71512099126025], { icon: pinkIcon }).addTo(map).bindPopup('舞台「あいつが上手で下手が僕で」第二弾鑑賞地');

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

