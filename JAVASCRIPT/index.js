
 let arr = [1, 2, 'rayne', 'coder']

        // for (let index = 0; index < arr.length; index++) {
        //     const element = arr[index];
        //     console.log(arr[index])
        // }

        // for(let ele in arr){
        //     console.log(arr[ele])
        // }   

        //___________________PUSH AND POP

        // arr.push("ABCD");
        // for (let index = 0; index < arr.length; index++) {
        //     const element = arr[index];
        //     console.log(arr[index])
        // }
        // console.log("POP")
        // arr.pop();
        // for (let index = 0; index < arr.length; index++) {
        //     const element = arr[index];
        //     console.log(arr[index])
        // }

        //___________________SHIFT AND UNSHIFT

        // arr.unshift("data")
        // for (let index = 0; index < arr.length; index++) {
        //     const element = arr[index];
        //     console.log(arr[index])
        // }
        // arr.shift()
        // for (let index = 0; index < arr.length; index++) {
        //     const element = arr[index];
        //     console.log(arr[index])
        // }


        //CLASS AND OBJECTs

        let person = {
                name: "ABCD",
                age:13,
                phone: 9999999999
        }
        console.log(person.name)

        function car(name,model,year) {
            this.name=name;
            this.model=model;
            this.year=year;
        }
        var myCar = new car('o','McD',2021);
        console.log(myCar.year)

 //DOM MANIPULATION ???


