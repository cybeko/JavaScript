// task 1

function Car(manufacturer, model, year, speed) 
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.speed = speed;

    this.showStats = function() 
    {
        document.write(`Manufacturer: ${this.manufacturer}<br/>`);
        document.write(`Model: ${this.model}<br/>`);
        document.write(`Year of realease: ${this.year}<br/>`);
        document.write(`Average speed: ${this.speed}<br/>`);
    };
    this.getTime = function(distance)
    {
        let time = (distance/this.speed);
        time += Math.floor(time/4);
        return time.toFixed(2);
    };
}
// let car1 = new Car( "Audi", "A6", 2011, 60);
// car1.showStats();
// let distance = 320;
// document.write(`Time to cover the distance of ${distance} miles = ${car1.getTime(distance)} hours`);


// task 2

function Fraction(numerator,denominator )
{
    this.numerator = numerator;
    this.denominator= denominator;

    this.Print = function (element)
    {
        this.Reduce(element)
        document.write(`${element.numerator}/${element.denominator}<br>`);
    }
    this.Reduce = function(element)
    {
        let gcdNum = element.numerator;
        let gcdDenom = element.denominator;

        while (gcdDenom !== 0) 
        {
            const temp = gcdDenom;
            gcdDenom = gcdNum % gcdDenom;
            gcdNum = temp;
        }
        element.numerator/=gcdNum;
        element.denominator/=gcdNum;
    }
    this.Add = function (userFraction)
    {
        let newNum = (this.numerator* userFraction.denominator) + (userFraction.numerator * this.denominator);
        let newDenum = this.denominator * userFraction.denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }
    this.Subtract = function (userFraction)
    {
        let newNum = (this.numerator* userFraction.denominator) - (userFraction.numerator * this.denominator);
        let newDenum = this.denominator * userFraction.denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }
    this.Multiply = function (userFraction)
    {
        let newNum = this.numerator * userFraction.numerator;
        let newDenum = this.denominator * userFraction.denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }
    this.Divide = function (userFraction)
    {
        let newNum = this.numerator * userFraction.denominator;
        let newDenum = this.denominator * userFraction.numerator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }
}

// let fraction1 = new Fraction(2, 2);
// let fraction2 = new Fraction(1, 3);
// fraction1.Add(fraction2);
// fraction1.Subtract(fraction2);
// fraction1.Multiply(fraction2);
// fraction1.Divide(fraction2);

// task 3

function Time(hours, minutes, seconds)
{
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.IsCorrectInput = function(param)
    {
        if(param==undefined)
        {
            param = 0;
        }
        return param;
    }
    this.CorrectTime = function()
    {
        if(this.seconds>59)
        {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds %= 60;
        }
        if(this.minutes>59)
        {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes %= 60;
        }
        if(this.hours>=24)
        {
            this.hours %= 24;
        }
    }
    this.ShowTime = function()
    {
        function FormattedTime(param)
        {
            if(param<10)
            {
                document.write("0" + param);
            }
            else
            {
                document.write(param);
            }
        }
        document.write("Time: ");
        FormattedTime(this.hours);
        document.write(":");
        FormattedTime(this.minutes);
        document.write(":");
        FormattedTime(this.seconds);
        document.write("<br>");
    }
    this.AddSeconds = function(u_seconds)
    {
        u_seconds = this.IsCorrectInput(u_seconds);
        this.seconds+=u_seconds;
        this.CorrectTime();
    }
    this.AddMinutes = function(u_minutes)
    {
        u_minutes = this.IsCorrectInput(u_minutes);
        this.minutes+=u_minutes;
        this.CorrectTime();
    }
    this.AddHours = function(u_hours)
    {
        u_hours = this.IsCorrectInput(u_hours);
        this.hours+=u_hours;
        this.CorrectTime();
    }
}

// let time1 = new Time(15, 34, 59);
// time1.ShowTime();
// time1.AddSeconds(1);
// time1.ShowTime();
// time1.AddMinutes(10);
// time1.ShowTime();
// time1.AddHours(10);
// time1.ShowTime();
