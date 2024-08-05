// 不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能
// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md

type NUser = Pick<User, 'age' | 'username'>

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

type NUser2 = MyPick<User, 'age' | 'username'>