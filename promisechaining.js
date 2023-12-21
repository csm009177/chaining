

const promise = new Promise((resolve, reject) => {
  setTimeout(() => { console.log('첫번째'); 
    const a = "hi"
    resolve(a);  
  }, 3000);
})

.then((a) => {
  return new Promise(resolve => {
    console.log(a)
    setTimeout(() => { console.log('두번째');
      resolve();
    }, 2000);
  });
})

.then(() => {
  return new Promise(resolve => {
    setTimeout(() => { console.log('세번째');
      resolve();
    }, 1000);
  });
})
.catch(error => {
  console.error('에러 발생:', error);
});

