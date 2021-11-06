// 扩展功能
Function.prototype.method = function (name, func) {
  this.prototype[name] = func
  return this
}

// 柯里化：将函数与传递给它的参数结合起来，产生一个新函数
Function.method('curry', function () {
  let slice = Array.prototype.slice,
      args = slice.apply(arguments), 
      that = this
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)))
  }
})

