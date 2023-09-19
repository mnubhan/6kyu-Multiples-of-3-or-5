def solution(number):
  result=0
  if(number<0):
    result=0
  else:
    result=sum([x for x in range(1,number) if x%3==0 or x%5==0])
  return result
