cells="---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
cells=cells[:len(cells)//2]+'*'+cells[len(cells)//2:]

rules= {
  "***": "-",
  "**-": "*",
  "*-*": "*",
  "-**": "*",
  "---": "-",
  "-*-": "*",
  "--*": "*",
  "*--": "*"
}
windowCells=[[i] for i in range(200)]
print(windowCells[0])
newCells=""
def iteration1d(cells,newCells,q):
	for i in range(len(cells)):
		current=cells[i]
		left=''
		right=''
		if i==0:
			left=cells[-1]
			right=cells[i+1]
		elif i==len(cells)-1:
			right=cells[0]
			left=cells[i-1]
		else:
			right=cells[i+1]
			left=cells[i-1]
		steck=left+current+right
		#print(steck)
		newCells+=rules[steck]
	windowCells[q]=(list(cells))
print(cells)
for i in range(200):
	iteration1d(cells,newCells,i)

print(*windowCells)