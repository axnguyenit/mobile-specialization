"use strict"
// task 1: Cho một chuỗi, đảo ngược từng từ trong câu --> DONE
{
    const reverseString = (str) => {
        str = str.trim().replace(/\s+/g, ' ').split(' ')
        const arr = []
        str.map(e => {
            e = e.split("").reverse().join("")
            arr.push(e)
        });
        return arr.join(" ")
    }
    const str = "P  N V   PNV22B   "
    const reversedString = reverseString(str);
    // console.log(reversedString);
}

// task 2: Viết hàm đệ quy đảo ngược chuỗi. --> DONE
{
    const reverseString = (str, mid = -1, curr = 0) => {
        if (mid === -1) {
            str = str.trim()
            str = str.split("")
            mid = parseInt(str.length / 2)
            return reverseString(str, mid)
        } else {
            if (mid !== curr) {
                let temp = str[curr];
                str[curr] = str[str.length - curr - 1]
                str[str.length - curr - 1] = temp
                reverseString(str, mid, ++curr)
            }
            return str.join("")
        }
    }

    let str = "Nguyen Dinh Kha"
    const reversedString = reverseString(str)
    console.log(reversedString);
}

// task 3: Cho một mảng, đảo ngược các item trong array đó. --> DONE
{
    const arr = ["Kha", "Dieu", "Family"]
    arr.reverse();
    // console.log(arr);
}

// task 4: viết hàm đệ quy đảo ngược một mảng --> DONE
{
    const recursive = (arr, curr = 0) => {
        const mid = parseInt(arr.length / 2)
        if (mid !== curr) {
            let temp = arr[curr];
            arr[curr] = arr[arr.length - curr - 1]
            arr[arr.length - curr - 1] = temp
            recursive(arr, ++curr)
        }
        return arr
    }

    const arr = ["Kha", "Dieu", "Family"]
    const reversedArr = recursive(arr)
        // console.log(reversedArr);
}

// task5: viết hàm đệ quy tính tổng --> ?
{}

// task 6: Viết hàm đệ quy để biết một số là thuộc dãy fibonacci --> DONE
{
    const inFibonacci = (num, n1 = 0, n2 = 1) => {
        const sum = n1 + n2
        if (num === sum) return true
        else if (num < sum) return false
        else return inFibonacci(num, n2, sum)
    }

    const result = inFibonacci(5)
        // console.log(result);
}

// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh --> DONE
{
    class User {
        users = [{ id: 1, name: 'name 1' }, { id: 2, name: 'name 2' }];

        add(user) {
            const isExist = this.users.some(item => item.id === user.id);
            if (isExist) return this.users;
            this.users = [...this.users, user];
            return this.users;
        };

        update(user) {
            const index = this.users.findIndex(t => t.id === user.id);
            this.users[index] = user;
            return this.users;
        };

        remove(id) {
            this.users = this.users.filter(item => item.id !== id);
            return this.users;
        };
    };

    const user = new User();

    // console.log(user.add({ id: 3, name: 'name 3' }));
    // console.log(user.update({ id: 2, name: 'update name 2' }));
    // console.log(user.remove(2));
}