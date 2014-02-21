def complement(x):
  x = x.replace('A','X')
  x = x.replace('T','A')
  x = x.replace('X','T')
  x = x.replace('G','X')
  x = x.replace('C','G')
  x = x.replace('X','C')
  x = x[::-1]
  print x
