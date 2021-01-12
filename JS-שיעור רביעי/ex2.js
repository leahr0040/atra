function func(numDay){
    let nameDay
    switch(numDay)
    {
    case 1: nameDay ='ראשון'
    break;
    case 2: nameDay ='שני'
    break;
    case 3: nameDay ='שלישי'
    break;
    case 4: nameDay ='רביעי'
    break;
    case 5: nameDay ='חמישי'
    break;
    case 6: nameDay ='שישי'
    break;
    case 7: nameDay ='שבת'
    break;
    default: nameDay ='יום לא חוקי'
}
return {numDay,nameDay}
}
console.log(func(10))