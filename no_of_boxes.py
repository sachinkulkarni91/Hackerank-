def box(arr):
    if len(arr)==0:
        return 0
    pre_val=arr.pop(0)
    arr1=[]
    #print(arr)
    for i in range(len(arr)):
        if arr[i]<pre_val:
            #arr.pop(i)
            arr1.append(i)
            pre_val=arr[i]
       # print(arr1)
    arr1.sort(reverse=True)
   
    for j in arr1:
        arr.pop(j)
    #print(arr)
    return 1+box(arr)
arr=[6,5,5,3,2,2,1]

print(box(arr))        
