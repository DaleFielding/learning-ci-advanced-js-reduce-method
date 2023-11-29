  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // the 0 is used as the initial value, otherwise the reduce method will take the first value of the array as the initial value.

console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'newPerson',
    profession: 'newProfession',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((arr, curr) => arr + curr.yrsExperience, 0); // It would not work without the 0 in this example
console.log(totalExperience);


// Grouping by a property, and totaling it too
  // Initially 'acc' is an empty object and 'curr' is the first team member in the array
let experienceByProfession = teamMembers.reduce((acc, curr) => { 
  if (!acc[curr.profession]) {
    acc[curr.profession] = curr.yrsExperience; // Any new profession will be added to the accumulator and its value will be set to the TMs experience
  } else {
    acc[curr.profession] += curr.yrsExperience // The current TMs experience will be added to the already existing value
  }
  return acc;
}, {})

console.log(experienceByProfession);