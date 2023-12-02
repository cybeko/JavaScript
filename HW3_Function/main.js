//task 1

function CheckEquality(num1,num2)
{
    if(num1<num2)
    {
        return -1;
    }
    else if (num1>num2)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

//task 2

function Factorial(num)
{
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return result;
}
//task 3

function ToNumber(n1,n2,n3)
{
    let str = n1.toString() + n2.toString() + n3.toString();
    return parseInt(str);
}

//task 4

function RectangleSquareArea()
{
    if(arguments.length==2)
    {
        return arguments[0] * arguments[1];
    }
    else if(arguments.length==1)
    {
        return arguments[0] * arguments[0];
    }
    else
    {
        return "Wrong input";
    }
}

//task 5

function IsPerfect(num)
{
    let sum=0;
    for(let i=0; i<=num; i++)
    {
        if(num%i==0)
        {
            if(i!=num)
            {
                sum+=i;
            }
        }
    }
    if(num==sum)
    {
        return true;
    }
    else
    {    
        return false;
    }
}

// task 6

function RangePerfect (min, max)
{
    for(let i = min; i<=max; i++)
    {
        if(IsPerfect(i)==true)
        {
            document.write(`[${i}]`);
        }
    }
}

//task 7

function GetTime(hour, minutes = 0, seconds = 0)
{
    if(seconds>59)
    {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
    }
    if(minutes>59)
    {
        hour += Math.floor(minutes / 60);
        minutes %= 60;
    }
    if(hour>=24)
    {
        hour %= 24;
    }
    if(minutes==0)
    {
        minutes = "00";
    }
    if(seconds==0)
    {
        seconds = "00";
    }
    WriteTime(hour, minutes, seconds);
}
function WriteTime(hour, minutes, seconds)
{
    document.write(`Time: ${hour}.${minutes}.${seconds}<br>`);
}
//task 8

function GetSeconds(hour, minutes, seconds)
{
    return (hour * 3600) + (minutes * 60) + seconds;
}

// task 9
function SecondsToTime(num) 
{
    let hour = Math.floor(num / 3600);
    let min = Math.floor((num % 3600) / 60);
    let sec = num % 60;

    WriteTime(hour, min, sec);
}

// task 10

function CompareDate(h1,m1,s1,h2,m2,s2)
{
    document.write(`Time 1: ${h1}.${m1}.${s1}<br>`);
    document.write(`Time 2: ${h2}.${m2}.${s2}<br>`);

    let compared = SecondsToTime(GetSeconds(h1,m1,s1) - GetSeconds(h2,m2,s2));
}

// document.write(CheckEquality(2,5));
// document.write(Factorial(3));
// document.write(ToNumber(6,9,4));
// document.write(RectangleSquareArea(2,3));
// document.write(IsPerfect(10));
// document.write(IsPerfect(28));
// RangePerfect(1,500);
// GetTime(13, 80);
// document.write(GetSeconds(12,13,45));
// SecondsToTime(42020);
// CompareDate(15,20,30,12,15,35)
