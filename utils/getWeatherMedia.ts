export const getWeatherImg = (code: number, isDay: number) => {
  let src = "";
  switch (code) {
    case 1000:
      src = "/assets/images/sunny.png";
      break;
    case 1003:
      src =
        isDay == 1
          ? "/assets/images/partly-cloudy-day.png"
          : "/assets/images/partly-cloudy-night.png";
      break;
    case 1006:
    case 1009:
    case 1135:
      src =
        isDay == 1
          ? "/assets/images/cloudy-day.png"
          : "/assets/images/cloudy-night.png";
      break;
    case 1030:
      src = "/assets/images/overcast.png";
      break;
    case 1072:
    case 1198:
      src = "/assets/images/patchy-freezing-nearby.png";
      break;
    case 1087:
    case 1273:
    case 1279:
      src = "/assets/images/thunder-outbreak-nearby.png";
      break;
    case 1150:
    case 1153:
    case 1063:
      src = "/assets/images/patchy-light-drizzle.png";
      break;
    case 1168:
    case 1069:
    case 1066:
    case 1210:
    case 1213:
      src = "/assets/images/freezing-drizzle.png";
      break;
    case 1171:
      src = "/assets/images/heavy-freezing-drizzle.png";
      break;
    case 1180:
    case 1240:
      src = "/assets/images/patchy-light-rain.png";
      break;
    case 1183:
      src = "/assets/images/light-rain.png";
      break;
    case 1186:
    case 1189:
      src = "/assets/images/moderate-rain-at-times.png";
      break;
    case 1192:
    case 1195:
      src = "/assets/images/heavily-rain-at-times.png";
      break;
    case 1201:
      src = "/assets/images/heavily-freezing-rain.png";
      break;
    case 1204:
    case 1249:
    case 1255:
      src = "/assets/images/light-sleet.png";
      break;
    case 1207:
    case 1252:
    case 1258:
      src = "/assets/images/moderate-or-heavily-sleet.png";
      break;
    case 1216:
    case 1219:
      src = "/assets/images/patchy-moderate-snow.png";
      break;
    case 1222:
    case 1225:
      src = "/assets/images/heavy-snow.png";
      break;
    case 1237:
    case 1261:
    case 1264:
      src = "/assets/images/ice-pellets.png";
      break;
    case 1243:
      src = "/assets/images/heavy-rain.png";
      break;
    case 1246:
      src = "/assets/images/torrential-rain-shower.png";
      break;
    case 1276:
    case 1282:
      src = "/assets/images/moderate-thunder.png";
      break;
    default:
      src = "/assets/images/default.svg";
      break;
  }
  return src;
};

export const getWeatherVideo = (code: number, isDay: number) => {
  let src = "";
  switch (code) {
    case 1000:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/sunlight-grass(1080p).mp4?alt=media&token=e867bfd7-3d2c-4586-b215-0effa4d6e75a";
      break;
    case 1003:
    case 1006:
    case 1009:
    case 1135:
      src =
        isDay == 1
          ? "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/cloudy2.mp4?alt=media&token=e29fa897-cc09-4b2f-8803-baecd6b78fbe"
          : "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/night-sky.mp4?alt=media&token=ade77714-d333-44b7-8a23-ed146dea97a9";
      break;
    case 1030:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/mist.mp4?alt=media&token=8dc7e5ef-4542-4e45-9def-c8c434dfce5e";
      break;
    case 1072:
    case 1198:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/soap_bubble_-_7105%20(1080p).mp4?alt=media&token=63ca3097-22d1-4b32-a7d2-201bcc9fa69c";
      break;
    case 1087:
    case 1273:
    case 1279:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/thunder.mp4?alt=media&token=c226b769-1549-4211-b06d-31b437457982";
      break;
    case 1150:
    case 1153:
    case 1063:
      src =
        isDay == 1
          ? "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/rain-drizzle.mp4?alt=media&token=4c18a0bf-6d44-4bad-a1ba-f3e53547b06e"
          : "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/night-rain.mp4?alt=media&token=3b667357-0350-4681-a37d-0746c7b9c1e5";
      break;
    case 1168:
    case 1069:
    case 1066:
    case 1210:
    case 1213:
    case 1171:
      // src = "/assets/images/freezing-drizzle.png";
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/rain-drizzle.mp4?alt=media&token=4c18a0bf-6d44-4bad-a1ba-f3e53547b06e";
      break;
    case 1183:
    case 1180:
    case 1240:
    case 1186:
    case 1189:
      src =
        isDay == 1
          ? "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/leaves_-_74233%20(1080p).mp4?alt=media&token=12122b72-6b34-4cdf-9e1d-b99407834404"
          : "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/night-rain.mp4?alt=media&token=3b667357-0350-4681-a37d-0746c7b9c1e5";
      break;
    case 1192:
    case 1195:
    case 1201:
    case 1243:
    case 1246:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/heavy_rain.mp4?alt=media&token=451d9432-4440-4529-97b8-ad08d4135625";
      break;
    case 1204:
    case 1249:
    case 1255:
      // light-sleet
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/snow_-_63973%20(1440p).mp4?alt=media&token=31320c56-01c1-425b-a234-16094600bef1";
      break;
    case 1207:
    case 1252:
    case 1258:
      // src = "/assets/images/moderate-or-heavily-sleet.png";
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/snow_-_63973%20(1440p).mp4?alt=media&token=31320c56-01c1-425b-a234-16094600bef1";
      break;
    case 1216:
    case 1219:
      // src = "/assets/images/patchy-moderate-snow.png";
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/snow_-_63973%20(1440p).mp4?alt=media&token=31320c56-01c1-425b-a234-16094600bef1";
      break;
    case 1222:
    case 1225:
      // src = "/assets/images/heavy-snow.png";
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/snow_-_63973%20(1440p).mp4?alt=media&token=31320c56-01c1-425b-a234-16094600bef1";
      break;
    case 1237:
    case 1261:
    case 1264:
      src = "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/hail_-_11579%20(720p).mp4?alt=media&token=8620831d-bb36-483a-b1c4-cd00870b7d16";
      break;
    case 1276:
    case 1282:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/thunder.mp4?alt=media&token=c226b769-1549-4211-b06d-31b437457982";
      break;
    default:
      src =
        "https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/sunlight-grass(1080p).mp4?alt=media&token=e867bfd7-3d2c-4586-b215-0effa4d6e75a";
      break;
  }
  return src;
};

export const getWeatherVideoPlaceHolder = (code: number, isDay: number) => {
  let src = "";
  switch (code) {
    case 1000:
      src =
        "/assets/images/sunny.jpg";
      break;
    case 1003:
    case 1006:
    case 1009:
    case 1135:
      src =
        isDay == 1
          ? "/assets/images/cloudy.jpg"
          : "/assets/images/night-sky.jpg";
      break;
    case 1030:
      src =
        "/assets/images/mist.jpg";
      break;
    case 1072:
    case 1198:
      src =
        "/assets/images/soap.jpg";
      break;
    case 1087:
    case 1273:
    case 1279:
      src =
        "/assets/images/thunder.jpg";
      break;
    case 1150:
    case 1153:
    case 1063:
      src =
        isDay == 1
          ? "/assets/images/rain-drizzle.jpg"
          : "/assets/images/night-rain.jpg";
      break;
    case 1168:
    case 1069:
    case 1066:
    case 1210:
    case 1213:
    case 1171:
      // src = "/assets/images/freezing-drizzle.png";
      src =
        "/assets/images/rain-drizzle.jpg";
      break;
    case 1183:
    case 1180:
    case 1240:
    case 1186:
    case 1189:
      src =
        isDay == 1
          ? "/assets/images/leaves.jpg"
          : "/assets/images/night-rain.jpg";
      break;
    case 1192:
    case 1195:
    case 1201:
    case 1243:
    case 1246:
      src =
        "/assets/images/heavy_rain.jpg";
      break;
    case 1204:
    case 1249:
    case 1255:
      // light-sleet
      src =
        "/assets/images/snow.jpg";
      break;
    case 1207:
    case 1252:
    case 1258:
      // src = "/assets/images/moderate-or-heavily-sleet.png";
      src =
        "/assets/images/snow.jpg";
      break;
    case 1216:
    case 1219:
      // src = "/assets/images/patchy-moderate-snow.png";
      src =
        "/assets/images/snow.jpg";
      break;
    case 1222:
    case 1225:
      // src = "/assets/images/heavy-snow.png";
      src =
        "/assets/images/snow.jpg";
      break;
    case 1237:
    case 1261:
    case 1264:
      src = "/assets/images/hail.jpg";
      break;
    case 1276:
    case 1282:
      src =
        "/assets/images/thunder.jpg";
      break;
    default:
      src =
        "/assets/images/sunny.jpg";
      break;
  }
  return src;
};
