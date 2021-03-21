
const sleep = async (ms)  => await new Promise(resolve => setTimeout(resolve, ms))


async function main(){
    for(;;){
        let r = Math.random().toString(36).substring(7)
        console.log(`${Date.now()}   ${r}`)
        await sleep(5000)
    }
}

main()