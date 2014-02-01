#!/bin/usr/ruby 

def findDigitsAxB(a, b)
	
	digits = []
	carry = 0
	
	while ((a * b + carry) > 0)
		digit = (a) % 10
		a = (a) / 10

		if ((digit * b + carry) < 10)
			digits.insert(0, digit * b + carry)
			carry = 0
		else
			digits.insert(0, (digit * b + carry) % 10)
			carry = (digit * b + carry) / 10
		end
		
	end

	return digits

end

puts findDigitsAxB(30, 120)

def factorial_sum
	product = [ 1]
	
	for i in (1..100)
		product = multiply(product, i)
	end
	
	product.inject{|sum, x| sum + x}
	return sum
end