function func(fun){
    if(typeof fun!=='function')
    throw new Error('invalid argument!')
    else
    console.log(fun())
}
func(()=>{return 'Hi'})