def cat_dog(str):
  cntCat = 0
  cntDog = 0
  for i in range(len(str)-2):
    if str[i] + str[i+1] + str[i+2]== "cat":
      cntCat+=1
    if str[i] + str[i+1] + str[i+2]== "dog":
      cntDog+=1
  return cntCat == cntDog