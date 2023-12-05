// task 1

class Car
{
    #manufacturer;
    #model;
    #year;
    #speed;

    constructor(manufacturer, model, year, speed)
    {
        this.#manufacturer = manufacturer;
        this.#model = model;
        this.#year = year;
        this.#speed = speed;
    }
    showStats() 
    {
        document.write(`Manufacturer: ${this.#manufacturer}<br/>`);
        document.write(`Model: ${this.#model}<br/>`);
        document.write(`Year of realease: ${this.#year}<br/>`);
        document.write(`Average speed: ${this.#speed}<br/>`);
    };
    getTime(distance)
    {
        let time = (distance/this.#speed);
        time += Math.floor(time/4);
        return time.toFixed(2);
    };
}
// let car1 = new Car( "Audi", "A6", 2011, 60);
// car1.showStats();
// let distance = 320;
// document.write(`Time to cover the distance of ${distance} miles = ${car1.getTime(distance)} hours`);



// task 2

class Fraction
{
    #numerator;
    #denominator;

    constructor(numerator, denominator)
    {
        this.#numerator = numerator;
        this.#denominator = denominator;
    }

    Print(element)
    {
        this.Reduce(element)
        document.write(`${element.#numerator}/${element.#denominator}<br>`);
    }

    Reduce(element)
    {
        let gcdNum = element.#numerator;
        let gcdDenom = element.#denominator;

        while (gcdDenom !== 0) 
        {
            const temp = gcdDenom;
            gcdDenom = gcdNum % gcdDenom;
            gcdNum = temp;
        }
        element.#numerator /= gcdNum;
        element.#denominator /= gcdNum;
    }

    Add(userFraction)
    {
        let newNum = (this.#numerator * userFraction.#denominator) + (userFraction.#numerator * this.#denominator);
        let newDenum = this.#denominator * userFraction.#denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }

    Subtract(userFraction)
    {
        let newNum = (this.#numerator * userFraction.#denominator) - (userFraction.#numerator * this.#denominator);
        let newDenum = this.#denominator * userFraction.#denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }

    Multiply(userFraction)
    {
        let newNum = this.#numerator * userFraction.#numerator;
        let newDenum = this.#denominator * userFraction.#denominator;
        let newFraction = new Fraction(newNum, newDenum);
        this.Print(newFraction);
    }

    Divide(userFraction)
    {
        let newNum = this.#numerator * userFraction.#denominator;
        let newDenum = this.#denominator * userFraction.#numerator;
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

class Time
{
    #hours;
    #minutes;
    #seconds;

    constructor(hours, minutes, seconds)
    {
        this.#hours = hours;
        this.#minutes = minutes;
        this.#seconds = seconds;
    }

    IsCorrectInput(param)
    {
        if(param == undefined)
        {
            param = 0;
        }
        return param;
    }

    CorrectTime()
    {
        if(this.#seconds > 59)
        {
            this.#minutes += Math.floor(this.#seconds / 60);
            this.#seconds %= 60;
        }
        if(this.#minutes > 59)
        {
            this.#hours += Math.floor(this.#minutes / 60);
            this.#minutes %= 60;
        }
        if(this.#hours >= 24)
        {
            this.#hours %= 24;
        }
    }
    ShowTime()
    {
        function FormattedTime(param)
        {
            if(param < 10)
            {
                document.write("0" + param);
            }
            else
            {
                document.write(param);
            }
        }

        document.write("Time: ");
        FormattedTime(this.#hours);
        document.write(":");
        FormattedTime(this.#minutes);
        document.write(":");
        FormattedTime(this.#seconds);
        document.write("<br>");
    }

    AddSeconds(u_seconds)
    {
        u_seconds = this.IsCorrectInput(u_seconds);
        this.#seconds += u_seconds;
        this.CorrectTime();
    }
    AddMinutes(u_minutes)
    {
        u_minutes = this.IsCorrectInput(u_minutes);
        this.#minutes += u_minutes;
        this.CorrectTime();
    }
    AddHours(u_hours)
    {
        u_hours = this.IsCorrectInput(u_hours);
        this.#hours += u_hours;
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
