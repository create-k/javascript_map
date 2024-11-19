// JavaScript
// console.log('Hello world!');

const map = L.map('map').setView([33.79963009143944, 135.32389089830548], 7);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', { attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>', }).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


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
const circle = L.circle([32.45391555014731, 131.05502981031822], {
    color: 'pink', //円の輪郭線の色
    fillColor: 'lightpink', //円の塗りつぶしの色
    fillOpacity: 0.4, //塗りつぶしの不透明度
    radius: 80000//半径、メートルで指定
}).addTo(map);

circle.bindPopup("旅行に行きたい地域");

// 多角形の表示
const polygon = L.polygon([
    [34.270836, 129.616699],
    [33.358062, 129.79248],
    [35.550105, 140.822754],
    [36.385913, 140.515137]
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
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

L.marker([35.6486192195266, 140.03527894617105], { icon: whiteIcon }).addTo(map).bindPopup('舞台刀剣乱舞七周年感謝祭があったとこ！').openPopup();
L.marker([35.674938119581306, 139.71512099126025], { icon: pinkIcon }).addTo(map).bindPopup('舞台「あいつが上手で下手が僕で」第二弾鑑賞地');
L.marker([34.7086994157172, 135.499059221853], { icon: pinkIcon }).addTo(map).bindPopup('舞台「ゲゲゲの鬼太郎」鑑賞地');
L.marker([34.699596989752905, 135.49408478835701], { icon: whiteIcon }).addTo(map).bindPopup('舞台「マリオネットホテル」鑑賞地');
L.marker([34.678749982093755, 135.49552897868497], { icon: blueIcon }).addTo(map).bindPopup('ミュージカル『テニスの王子様』鑑賞地');
L.marker([34.70438342729872, 135.1951928008716], { icon: pinkIcon }).addTo(map).bindPopup('マッシュルザステージ 鑑賞地');
L.marker([34.24823616220109, 133.00580953889315], { icon: blueIcon }).addTo(map).bindPopup('朗読劇「源平刀剣七夜譚」鑑賞地');
L.marker([33.88580515619773, 130.8754401595263], { icon: whiteIcon }).addTo(map).bindPopup('野田地図「正三角関係」鑑賞地').openPopup();
L.marker([33.59555874942808, 130.4067457910059], { icon: pinkIcon }).addTo(map).bindPopup('舞台「キングダム」鑑賞地');
L.marker([33.59058405135412, 130.41074448751272], { icon: blueIcon }).addTo(map).bindPopup('ミュージカル『テニスの王子様』&舞台『刀剣乱舞』心伝 鑑賞地');
L.marker([35.596663638485445, 139.74399043093754], { icon: pinkIcon }).addTo(map).bindPopup('舞台『川越ボーイズ・シング』鑑賞地');


// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

