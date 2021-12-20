"use strict"

const arrays = [{
        id: 1,
        name: "user 1",
        age: 22,
    },
    {
        id: 2,
        name: "user 2",
        age: 21,
    },
    {
        id: 3,
        name: "user 3",
        age: 23,
    },
    {
        id: 4,
        name: "user 4",
        age: 24,
    },
];

// task 1: Add mới 1 user vào đầu mảng --> DONE
{
    const newUser = {
        name: "Kha",
        age: 21
    }

    arrays.unshift(newUser)
    console.log(arrays);
}

// task 2: Add mới 1 user vào cuối mảng --> DONE
{
    const newUser = {
        name: "Kha",
        age: 21
    }

    arrays.push(newUser)
    console.log(arrays);
}

// task 3: add nhiều user vào mảng --> DONE
{
    const newUser1 = {
        name: "Kha",
        age: 21
    }
    const newUser2 = {
        name: "Dieu",
        age: 21
    }

    arrays.push(newUser1, newUser2)
    console.log(arrays);
}

// task 4: xoá 1 user ra khỏi mảng --> DONE
{
    arrays.splice(0, 1)
    console.log(arrays);
}

// task 5: lọc ra các user có age >= 22; --> DONE
{
    const newArr = arrays.filter(item => item.age >= 22)
    console.log(newArr);
}

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string --> DONE
{
    arrays.map(item => {
        item.class = "22B"
    })

    console.log(arrays);
}

// task 7: Tìm ra 1 user có age = 23 --> DONE
{
    const user = arrays.filter(item => item.age === 23)
    console.log(user);
}

// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23 --> DONE
{
    const arr = []
    arrays.forEach(e => {
        if (e.age >= 23)
            arr.push(e)
    });
    console.log(arr);
}

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới. --> DONE
{
    const arrayIds = [1, 3];
    const arr = arrayIds.map(id => {
        return arrays.find(item => item.id === id)
    })

    console.log(arr);
}

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần --> DONE
{
    arrays.sort((a, b) => {
        return a.age - b.age
    })

    console.log(arrays);
}

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase) --> DONE
{
    arrays.map(item => {
        item.class = "pnv22b"
    })

    arrays.map(item => {
        item.class = item.class.toUpperCase();
    })

    console.log(arrays);
}

// task 12: lấy ra phần tử cuối cùng của mảng trên --> DONE
{
    console.log(arrays.pop());
}

// task 13: lấy ra phần tử đầu tiên của mảng trên --> DONE
{
    console.log(arrays.shift());
}

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"] --> DONE
{
    const array1 = ["Gà", "vịt"];
    const array2 = ["vịt", "Chó"];
    const arr = [...new Set([...array1, ...array2])]
    console.log(arr);
}

const person = {
    firstName: "John",
    lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName'] --> DONE
{
    const keys = Object.keys(person)
    console.log(keys);
}

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe'] --> DONE
{
    const values = Object.values(person)
    console.log(values);
}

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}] --> DONE
{
    const arr = [];
    const keys = Object.keys(person)
    const values = Object.values(person)
    keys.map((item, i) => {
        arr.push({
            [item]: values[i]
        })
    })
    console.log(arr);
}

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 }; --> DONE
{
    person.age = 100; // or person["age"] = 100;
    console.log(person);
}

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"} --> DONE
{
    const arrString = ["a", "b", "c"];
    const newObj = {...arrString }
    console.log(newObj);
}

// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false --> ?
{
    const arrBoolean = [true, true, false];
    var result = arrBoolean.some(function(value) {
        return value;
    });
    console.log(result);
}

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter) --> DONE

{
    class Person {
        name = ""
        age = 0
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        set name(name) {
            this.name = name
        }

        set age(age) {
            this.age = age
        }

        get info() {
            return `${this.name} - ${this.age}`;
        }
    }

    let newPer = new Person("John", 21);
    newPer.name = "Petter"
    console.log(newPer.info);
}

// task 22: --> DONE
{
    const newFunction = (user) => {
        // xử lý function này khi truyền params user vào là thông tin của user
        // kết quả return mong đợi là một string => "Hello User - age: 21"
        let info = ``
        const keys = Object.keys(user)
        const values = Object.values(user)
        keys.map((item, i) => {
            info += `${[item]}: ${values[i]}`;
            if (keys[keys.length - 1] !== item) {
                info += ` - `
            }
        })
        return `Hello ${info}`
    };

    let user = newFunction(person)
    console.log(user);
}
// task 23: -- > DONE
{
    let numb1 = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
    console.log(Math.ceil(numb1));

    let numb2 = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
    console.log(Math.floor(numb2));
}

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc' --> DONE
{
    let name = "user";
    let age = 21;
    let className = "classAbc";

    let result = `${Object.keys({ name })[0]}: ${name} - ${Object.keys({ age })[0]}: ${age} - ${Object.keys({ className })[0]}: ${className}`
    console.log(result);
}

// task 25: cho array number bên dưới, tính tổng array: result = 45; --> DONE
{
    const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const result = arrNumber.reduce(reducer)
    console.log(result);
}