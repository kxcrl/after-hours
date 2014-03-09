myLast x = last x

myButLast x = x !! (length x - 2)

myButLast' [x,_] = x
myButLast' (_:xs) = myButLast' xs
