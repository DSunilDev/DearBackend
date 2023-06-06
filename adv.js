function greetUser(greet,name='user')
{
    console.log(greet +name+"Welcome")
}
greetUser('Hi');

greetUser('Hi','Max')

const nos=[3,4,6,7,8,9]

function add(...numbers)
{
    let res=0;
    for(const nos of numbers)
    {
        res+=nos;
    }
    console.log(res);
}
add(1,2,7,8);
add(...nos)


console.log(add)

//Use of Rest Parameters --..At parameter and wholesome data

//Spread--Array type called as ..data in the function parameter~