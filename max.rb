def max(a,b)
  a > b ? a : b
end
# expect it to return 42 below
result = max(2, 42)
puts "max of 2, 42 is #{result}"

result = max(12, 34)
puts "max of 12, 34 is #{result}"

result = max(-2, -6)
puts "max of -2, -6 is #{result}"

result = max(7, 10)
puts "max of 7, 10 is #{result}"
