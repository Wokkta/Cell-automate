cells="----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
cells=cells[:len(cells)//2]*2+'*'+cells[len(cells)//2]*2

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
newCells=""
def iteration1d(cells,newCells):
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
                newCells+=rules[steck]
        print(cells)
        iteration1d(newCells,'')
print(cells)
for i in range(200):
        iteration1d(cells,newCells)
