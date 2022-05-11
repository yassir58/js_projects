

/// callback functions

function printAll ()
{
    for (let indx=0; indx < arguments.length;indx++)
    {
        console.log (arguments[indx]);
    }
}

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function multiply (arg)
{
    return arg * 2;
}

function say_hi (arg)
{
    console.log ("hello " + arg);
}


function sumNumbers ()
{
    let res = 0;
    for (let num in arguments)
    {
        res += Number(arguments[num]);
    }
    return res;
}


///////////////////////////////

function outer_func ()
{
    let x = 0;
    function inner_func ()
    {
        x++;
        console.log (x);
    }
    return (inner_func);
}

function test_1()
{
    let x_1 = 1;
    function test_2 ()
    {
        let x_2 = 2;
        function test_3 ()
        {
            let x_3 = 3;
            console.log (x_1 + x_2 +  x_3);
        }
        return test_3;
    }
    return test_2;
}

function once (arg, callback)
{
    let counter = 0;
    let cache  = 0;
    function memory_function ()
    {
        if (counter == 0)
        {
            cache = callback (arg);
            counter++;
            return cache;
        }
        else 
        {
            console.log ("this function only run once !");
            return cache;
        }
    }
    return memory_function;
}

function after (num, callback)
{
    let counter = 0;
    function exec ()
    {
        if (counter == num)
        {
            callback ();
        }
        else
        {
            console.log (counter,num);
            counter++;
        }
    }
    return exec ;
}

function delay (callback, time)
{
    function delay_exec (arg1)
    {
        setTimeout (callback , time, arg1);
    }
    return delay_exec;
}

function rollcall (arr)
{
    let counter = 0;
    function exec_rollcall()
    {
        if (counter < arr.length)
        {
            console.log (arr[counter]);
            counter++;
        }
        else
            console.log ("Everyone accounted for !");
        return arr[counter];
    }
    return exec_rollcall;
}


function saveOutput (callback, passwd)
{
    let indx = 0;
    let val_arr = new Array ();

    function sv_exec (re_passwd)
    {
        if (re_passwd == passwd)
            return Object.fromEntries(val_arr);
        else
        {
            val_arr[indx] = new Array (2);
            val_arr[indx][0] = re_passwd;
            val_arr[indx][1] = callback ();
            indx++;
        }

    }
    return sv_exec;
}

function cycleIterator(arr)
{
    let indx = 0;
    let elm = null;
    function cycle_exec()
    {
        let tmp = arr[arr.length - 1];
        
        if (arr[indx] == tmp)
        {
            indx = 0;
            return (tmp);
        }
        else
        {
            elm = arr[indx];
            indx++;
        }
        return elm;
    }
    return cycle_exec;
}

function defineFirstArg (callback, arg)
{
    function df_exec (arg1)
    {
        callback (arg, ...arguments);
    }
    return df_exec;
}

function dateStamp (callback)
{
    let date = new Date ();
    let origin  = new Array ();
    let res = 0;
    function ds_exec ()
    {
        res = callback (...arguments);
        origin[0] = new Array (2);
        date = new Date ();
        origin[0][0] = date.getMilliseconds();
        origin[0][1] = res;

        return Object.fromEntries(origin);
    }
    return ds_exec;
}


function censor ()
{
    let cache = new Array ();
    function censor_exec ()
    {
        let tmp;
        if (arguments.length == 1)
        {
            for (let i in cache)
            {
                cache[i][0] = cache[i][1];
            }
            console.log (cache);
            return arguments[0];
        }
        else if (arguments.length == 2)
        {
            tmp = new Array (2);
            tmp[0] = arguments[0];
            tmp[1] = arguments[1];
            cache.push (tmp);
        }
        console.log (cache);
    }
    return censor_exec;
}


function createSecretHolder (secret)
{
    let secret_obj = new Object();
    let passwd = "xefa@#4412/*/--";

    secret_obj.secret = secret ;
    function secret_exec ()
    {
        secret_obj.get_secret = function (passwd__)
        {
            if (passwd__ == passwd)
                return this.secret;
            return ("Nope");
        }
        secret_obj.set_secret = function (passwd__, new_secret)
        {
            if (passwd__ == passwd)
                secret_obj.secret = new_secret;
            else
                console.log ("you need premission");
        }
        return secret_obj;
    }
    return secret_exec;
}


function callTimes ()
{
    let call_counter = 0;
    function inner_func ()
    {
        console.log ("Doing some really important shit");
        call_counter++;
        return (call_counter);
    }
    return inner_func;
}


function russian_roulette (n)
{
    let counter = 0;
    function rs_rl_exec ()
    {
        if (counter < n)
        {
            counter++;
            return ("click");
        }
        else if (counter == n)
        {
            counter++;
            return ("bang");
        }
        else
        {
            counter++;
            return ("reload to play again");
        }
    }
    return rs_rl_exec;
}

function average()
{
    let avrg_arr = new Array ();
    function avrg_exec ()
    {
        if (arguments.length == 1)
        {
            avrg_arr.push(arguments[0]);
            return (sumNumbers(...avrg_arr));
        }
        else
        {
            if (avrg_arr.length == 0)
                return (0);
            return (sumNumbers(...avrg_arr));
        }
    }
    return avrg_exec;
}

function makeFuncTester (vector)
{
    function funcT_exec(callback)
    {
        for (let i in vector)
        {
            if (callback (vector[i][0]) != vector[i][1])
                return (false);
        }
        return (true);
    }
    return funcT_exec;
}

function makeHistory (limit)
{
    let counter = 0;
    let history = new Array ();

    function history_exec (str)
    {
        let poped;
        
        if (str == undefined)
        {
            console.log ("no parameter given !");
            return (null);
        }
        if (str == "undo")
        {
            if (history.length == 0)
            {
                console.log ("no history found");
                return (null);
            }
            else 
            {
                poped = history.pop ();
                console.log (history);
                counter--
            }
                return (poped.concat(" undone!"));
        }
        if (counter < limit)
        {
            history.push (str);
            console.log (history);
            counter++;
            return (str.concat(" done!"));
        }
        else
        {
             return ("history limit reached !");
        }
    }
    return history_exec;
}


function blackJack (arr)
{
    let PLYR_COUNTER = 0;
    let i = 0;
    let flag = 0;
    let most_r_sum = 0;    
    function DEALER (num_1, num_2)
    {
        function PLAYER ()
        {
            most_r_sum = num_1 + num_2;
            if (flag == 0)
            {
                if (PLYR_COUNTER == 0)
                {
                    PLYR_COUNTER++;
                    return (num_1 + num_2);
                }
                else 
                {
                    if ((most_r_sum + arr[i]) <= 21)
                    {
                        return (most_r_sum + arr[i++]);
                    }
                    else
                    {
                        flag = 1;
                        return "bust";
                    }
                }
            }
            else
            {
                return "you are done !";
            }
        }
        return PLAYER;
    }
    return DEALER;
}

const cache_handler = makeHistory (4);

console.log (cache_handler ("Very often, I find myself using"));
console.log (cache_handler ("hello world"));
console.log (cache_handler ("There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour"));
//console.log (cache_handler ("Accept—then act. Whatever the present moment contains, accept it as if you had chosen it. Always work with it, not against it. Make it your friend and ally, not your enemy. This will miraculously transform your whole life. - Eckart Tolle"));
console.log (cache_handler ("undo"));
console.log (cache_handler ());

const bj_function  = blackJack ([3,8,2,5,9,10,1,11,6,4]);
const DYLR_1 = bj_function(11, 5);
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());
console.log ( DYLR_1());