function Days() {
    let count = +prompt('Ведите количество дней (меньше 100):', '');
    if (count >= 100) {
        Days();
    } else {
        if (((100 - count) % 10 == 1) && (100 - count != 11)) alert(`Остался ${100 - count} день!`);
        else if ((100 - count % 10 > 1 || 100 - count % 10 < 4) && (100 - count > 20)) alert(`Осталось ${100 - count} дня!`);
        else alert(`Осталось ${100 - count} дней!`);
    }
}

Days();