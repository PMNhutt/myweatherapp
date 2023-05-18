export const getAQIImg = (index: number) => {
    let src = ''
    switch (index) {
        case 1:
            src = '/assets/images/Good.png'
            break;
        case 2:
            src = '/assets/images/Moderate.png'
            break;
        case 3:
            src = '/assets/images/Unhealthy-for-sensitive-group.png'
            break;
        case 4:
            src = '/assets/images/Unhealthy.png'
            break;
        case 5:
            src = '/assets/images/Very-unhealthy.png'
            break;
        case 6:
            src = '/assets/images/Hazardous.png'
            break;
        default:
            break;
    }
    return src
}

export const getAQIText = (index: number) => {
    let text = ''
    switch (index) {
        case 1:
            text = 'Tốt'
            break;
        case 2:
            text = 'Trung bình'
            break;
        case 3:
            text = 'Không tốt cho nhóm nhạy cảm'
            break;
        case 4:
            text = 'Có hại'
            break;
        case 5:
            text = 'Cực kỳ có hại'
            break;
        case 6:
            text = 'Nguy hiểm'
            break;
        default:
            break;
    }
    return text
}

export const getAQIColorClass = (index: number) => {
    let className = ''
    switch (index) {
        case 1:
            className = 'text-lime-300'
            break;
        case 2:
            className = 'text-amber-400'
            break;
        case 3:
            className = 'text-orange-500'
            break;
        case 4:
            className = 'text-red-500'
            break;
        case 5:
            className = 'text-purple-500'
            break;
        case 6:
            className = 'text-amber-700'
            break;
        default:
            break;
    }
    return className
}
