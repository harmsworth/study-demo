type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}

const user: MyReadonly<User> = {
    username: '小明',
    age: 18,
    sex: '男'
}

// user.age = 10 // 无法修改
