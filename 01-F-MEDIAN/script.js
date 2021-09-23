const findMedian = function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var med1 = -1, med2 = -1;
 

    for (count = 0; count <= n; count++)
    {
        
        if (ar1[i] <= ar2[j])
        {
            med1 = med2; 
            med2 = ar1[i];
            i++;
        }
        else
        {
            med1 = med2;
            med2 = ar2[j];
            j++;
        }
    }
 
    return (med1 + med2)/2;
}
 
var ar1 = [1, 3, 5, 7, 9];
var ar2 = [2, 4, 6, 8, 10];  // [1,2,3,4,5,6,7,8,9,10] 5+6/2 = 5.5
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ findMedian(ar1, ar2, n1));
else
    console.log("array is not equal in size");

const arr1 = document.getElementById('array1')
arr1.innerText = '[' + ar1 + ']'

const arr2 = document.getElementById('array2')
arr2.innerText = '[' + ar2 + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = findMedian(ar1, ar2, n1)