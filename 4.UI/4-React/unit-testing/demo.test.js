
let fetchData=new Promise((resolve,reject)=>{
  let s1="abc";
  if(s1=="abc"){
    console.log('....waiting');
    setInterval(10000,resolve('peanut butter123'));
    //resolve('peanut butter')
  }else{
    reject('not found')
  }

})
test('the data is peanut butter', () => {
  return fetchData.then(data => {
    expect(data).toBe('peanut butter');
  });
});