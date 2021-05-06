for (i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        let x = Math.floor(Math.random() * 4)
        switch(x) {
            case 0:
                console.log("...human...why you taking pictures of me?...")
                break
            case 1:
                console.log("meow?")
                break
            case 2:
                console.log("...the catnip made me do it...")
                break
            case 3:
                console.log("...why does the red dot always get away...")
                break
            default:
                break
        }
    } else {
        console.log("Love me, pet me! HSSSSSS!")
    }
}   
