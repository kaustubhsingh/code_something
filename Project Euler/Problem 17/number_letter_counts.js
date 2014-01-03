#!/usr/bin/env node

word_map = { 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six",
			 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten" , 11 : "eleven", 12 : "twelve",
			13 : "thirteen", 14 : "fourteen", 15 : "fiften", 16 : "sixteen", 17 : "seventeen",
			18 : "eighteen", 19 :"nineteen", 20 : "twenty", 30 : "thirty", 40 : "forty", 50 : "fifty",
			60 : "sixty", 70 : "seventy", 80 : "eighty", 90 : "ninety", 100 : "hundred", 1000 :"thousand" };

// console.log(word_map);

function extract_digits(n)
{
	var digits = [];
	
	while (n > 0)
	{
		digits.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	
	console.log("function name is %s()", arguments.callee.name);
	return digits;
}

console.log(extract_digits(324));

function number_to_words(n)
{
	var number_str = "";
	
	var num_digits = n.length;
	
	if (num_digits == 4)
	{
			if (n != 1000)
			{
				console.log("Found a 4 digit input other than 1000 in %s", arguments.callee.name);
				console.log("1000 is the only 4 digit number that is currently supported");
				return;
			}
			else
				return "One thousand";
	}
	else if (num_digits <= 3)
	{
		if (num_digits == 3)
		{
			number_str += word_map[n[0]] + " hundred ";
			if (n[1] !=  0 || n[2] != 0)
				number_str += "and ";
				
			n.shift();
		}
		
		if (n.length == 2)
		{
			if (n[0] != 0)
			{
				if (n[0] == 1)
				{
					switch (n[1])
					{
						case 0:
							number_str += word_map[10]; break;

						case 1: 
							number_str += word_map[11]; break;
							
						case 2: 
							number_str += word_map[12]; break;
							
						case 3: 
							number_str += word_map[13]; break;
							
						case 4: 
							number_str += word_map[14]; break;
							
						case 5: 
							number_str += word_map[15]; break;
							
						case 6: 
							number_str += word_map[16]; break;
							
						case 7: 
							number_str += word_map[17]; break;
							
						case 8: 
							number_str += word_map[18]; break;
							
						case 9: 
							number_str += word_map[19]; break;							
					}
					return number_str + " ";
				}
				
				if (n[0] >= 2)
				{
					number_str += word_map[(n[0] * 10)] + " ";
					n.shift();
				}
			}	
			else
			{
				n.shift();
			}
		}
		
		if (n.length == 1)
		{
			if (n[0] != 0)
				number_str += word_map[n[0]];
		}
		return number_str;
	}
	else
	{
		console.log("input to %s() not supported", arguments.callee.name);
		return number_str;
	}
	
}

console.log(number_to_words([4, 5, 1]));
