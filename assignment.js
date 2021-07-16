
function kilometerToMeter(kilo) {
    var meter= kilo*1000;
    return meter;
}
var road = kilometerToMeter(5);
console.log(road);





function budgetCalculator(watch,phone,laptop) {
    var total= 0;
    var first= watch*50;
    var second = phone*100;
    var third = laptop*500;
    var total = first+second+third;
    return total
}
var myList= budgetCalculator(5,2,2);
console.log(myList);






function hotelCost(days) {
    var cost = 0;
    if (days <=10) {
        cost = days*100;
    }
    else if (days<=20) {
        var remaining = days-10;
        var second = remaining*80;
        cost= second+1000;
    } else {
        var remaining = days-20;
        var third = remaining*50;
        cost= third+1800;
    }
    return cost;
    }
    var lastVacation = hotelCost(23);
    console.log(lastVacation);

    




    function megaFriend(name) {
        var max= name[0];
        for (let i = 0; i < name.length; i++) {
            const element = name[i];
            if (element.length>max.length) {
                max=element;
            }
        }
        return max;
        }
        var friendsName=['rifa', 'munni', 'sumaiya', 'basore','tamanna'];
        var yourFriend = ['jamal','raju','mohammad', 'sofiq']
        console.log(megaFriend(friendsName));
        console.log(megaFriend(yourFriend));