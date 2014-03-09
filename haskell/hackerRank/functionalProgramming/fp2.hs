-- Challenge: Hello World N Times
helloTimes n = putStr . unlines . take n $ repeat "Hello World"

main :: IO ()
main = do
       x <- readLn
       helloTimes x
