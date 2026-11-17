let a = 10;
switch(a){
    case 1:
        console.log("hello")
        break;
    case 10:
        console.log("hie")
        break;
    default:
        console.log("wrong input")
}

b="monday"
switch(b){
    case "monday":
        console.log("classes")
        break;
    case "sunday":
        console.log("no classes")
        break;
        case "friday":
        case "saturday":
            console.log("weekend")
            break;

    default:
        console.log("no match")
}
d = 5
c = "+"
switch(c){
    case "+":
        console.log(a+d)
        break;
    case "-":
        console.log(a-d)
        break;
    case "*":
        console.log(a*d)
        break;
    case "/":
        console.log(a/d)
        break;
    case "%":
        console.log(a%d)
        break;
    default:
        console.log("wrong operator")
}