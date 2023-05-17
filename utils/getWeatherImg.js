export const getWeatherImg = (code, isDay) => {
    let src = ''
    switch (code) {
        case 1000:
            src = '/assets/images/sunny.png'
            break;
        case 1003:
            src = isDay == 1 ? '/assets/images/partly-cloudy-day.png' : '/assets/images/partly-cloudy-night.png'
            break
        case 1006:
        case 1009:
        case 1135:
            src = isDay == 1 ? '/assets/images/cloudy-day.png' : '/assets/images/cloudy-night.png'
            break
        case 1030:
            src = '/assets/images/overcast.png'
            break
        case 1072:
        case 1198:
            src = '/assets/images/patchy-freezing-nearby.png'
            break
        case 1087:
        case 1273:
        case 1279:
            src = '/assets/images/thunder-outbreak-nearby.png'
            break
        case 1150:
        case 1153:
        case 1063:
            src = '/assets/images/patchy-light-drizzle.png'
            break
        case 1168:
        case 1069:
        case 1066:
        case 1210:
        case 1213:
            src = '/assets/images/freezing-drizzle.png'
            break
        case 1171:
            src = '/assets/images/heavy-freezing-drizzle.png'
            break
        case 1180:
        case 1240:
            src = '/assets/images/patchy-light-rain.png'
            break
        case 1183:
            src = '/assets/images/light-rain.png'
            break
        case 1186:
        case 1189:
            src = '/assets/images/moderate-rain-at-times.png'
            break;
        case 1192:
        case 1195:
            src = '/assets/images/heavily-rain-at-times.png'
            break;
        case 1201:
            src = '/assets/images/heavily-freezing-rain.png'
            break;
        case 1204:
        case 1249:
        case 1255:
            src = '/assets/images/light-sleet.png'
            break;
        case 1207:
        case 1252:
        case 1258:
            src = '/assets/images/moderate-or-heavily-sleet.png'
            break;
        case 1216:
        case 1219:
            src = '/assets/images/patchy-moderate-snow.png'
            break;
        case 1222:
        case 1225:
            src = '/assets/images/heavy-snow.png'
            break;
        case 1237:
        case 1261:
        case 1264:
            src = '/assets/images/ice-pellets.png'
            break;
        case 1243:
            src = '/assets/images/heavy-rain.png'
            break;
        case 1246:
            src = '/assets/images/torrential-rain-shower.png'
            break;
        case 1276:
        case 1282:
            src = '/assets/images/moderate-thunder.png'
            break
        default:
            src = '/assets/images/default.svg'
            break;
    }
    return src
}