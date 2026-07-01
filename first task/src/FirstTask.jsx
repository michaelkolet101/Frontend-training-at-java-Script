//תרגיל 1 
function FirstTask() {  

  const array = [1, 2, 3, 4, 5];

  array.forEach(element => console.log(element)); 

  //תרגיל 2

  const array2 = [11, 12, 13,14, 15];

  array2.forEach(element => console.log(element * 2)); 

  //תרגיל 3

  const names = ['Alice', 'Bob', 'Charlie'];

  names.forEach(name => console.log("hello " + name));


  //תרגיל 4
  const priesesOfProducts = [10, 20, 30, 40, 50];

  priesesOfProducts.forEach(element => console.log("the price of the product is: " + element)); 

  
  //תרגיל 5
  const greads = [80, 90, 70, 85, 95];

  greads.forEach(grade => console.log("the grade is: " + grade)); 

  //תרגיל 6
  
  const numbers = [1, 2, 3, 4, 5];

  let nums = numbers.map(num => num * 2);

  console.log(nums);

return (
    <div>
      <h1>First Task</h1>
    </div>
  );
}

export default FirstTask;   
