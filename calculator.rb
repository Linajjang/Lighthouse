class Calculator
    
    def initialize(a,b)
        @a = a
        @b = b
    end
    
    def add
        puts @a + @b
    end
  
    def subtract
        puts @a - @b
    end
  
    def multiply
        puts @a * @b    
    end
   
    def divide
        puts @a / @b
    end
end 

addition = Calculator.new(2,4)
subtraction = Calculator.new(2,4)
multiplication = Calculator.new(2,4)
division = Calculator.new(4,2)

addition.add
subtraction.subtract
multiplication.multiply
division.divide
