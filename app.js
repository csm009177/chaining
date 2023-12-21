const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
    console.log("첫번째")
    	resolve("1처리 완료")
    }, 5000)
  .then(	setTimeout(() => {
    console.log("두번째")
    resolve("2처리 완료")
  }, 5000)
  )
  .then(	setTimeout(() => {
    console.log("세번째")
    resolve("3처리 완료")
  }, 5000)  )
});