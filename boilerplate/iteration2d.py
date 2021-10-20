from copy import deepcopy
cells= [
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1]
]
cellsCopy=deepcopy(cells)
''' ЭТО ТОРОВАЯ ВЕРСИЯ, ГДЕ МАТРИЦА ШАРООБРАЗНАЯ\\ТОРОВАЯ,
ДЛЯ CELLS[1][0] У МАТРИЦЫ
cells= [
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1]
]
БУДЕТ 7 СОСЕДЕЙ
'''
def showCells():
  print('\n')
  for i in cells:
    print(i)
def find_neighbours_summ(arr,i,j):
  if i-1<0:previousI=len(arr)-1

  else:previousI=i-1

  if j-1<0:previousJ=len(arr[i])-1

  else:previousJ=j-1

  if i+1>len(arr)-1:nextI=0

  else:nextI=i+1

  if j+1>len(arr[i])-1:nextJ=0

  else:nextJ=j+1
  summ =\
    cells[previousI][previousJ] +\
    cells[previousI][j] +\
    cells[previousI][nextJ] +\
    cells[i][previousJ] +\
    cells[i][nextJ] +\
    cells[nextI][previousJ] +\
    cells[nextI][j] +\
    cells[nextI][nextJ]
  return summ
rules={
  1:0,
  0:0,
  3:1
}
def iteration2d(arr):
  showCells()
  for i in range(len(arr)):
    for j in range(len(arr[i])):
      neigbr=find_neighbours_summ(arr,i,j)
      if neigbr in rules:
        cellsCopy[i][j]=rules[neigbr]
  cells=deepcopy(cellsCopy)
  showCells()
iteration2d(cells)
iteration2d(cells)