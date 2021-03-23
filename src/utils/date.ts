const day = (num: number) => {
    return num < 10 ? '0' + num : num;
}

const month = (num: number) => {
    switch (num) {
        case 0:
            return 'Janvier';
        case 1:
            return 'Févier';
        case 2:
            return 'Mars';
        case 3:
            return 'Avril';
        case 4:
            return 'Mai';
        case 5:
            return 'Juin';
        case 6:
            return 'Juillet';
        case 7:
            return 'Août';
        case 8:
            return 'Septembre';
        case 9:
            return 'Octobre';
        case 10:
            return 'Novembre';
        case 11:
            return 'Décembre';
    }
}

export const parseDate = (info: any) => {
    let str = ''
    if (info.released) {
        str = info.released;
    } else {
        str = info.updated + '.000Z';
    }
    let date = new Date(str)
    return `${day(date.getDate())} ${month(date.getMonth())} ${date.getUTCFullYear()}`
}
