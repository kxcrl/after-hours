myLast :: [a] -> a
myLast x = last x

myButLast :: [a] -> a
myButLast x = x !! (length x - 2)

myButLast' :: [t] -> t
myButLast' [x,_] = x
myButLast' (_:xs) = myButLast' xs

elementAt :: [a] -> Int -> a
elementAt list x = list !! (x - 1)
