1.Response 实例是在 fetch() 处理完 promise 之后返回的。
    Response.status  状态码 
    Response.statusText  状态码消息对应
    Response.ok 返回一个布尔值
2.不管是请求还是响应都能够包含 body 对象
    ArrayBuffer
    ArrayBufferView (Uint8Array等)
    Blob/File
    string
    URLSearchParams
    FormData
3.Body 类定义了以下方法（这些方法都被 Request 和Response所实现）以获取 body 内容
    返回一个被解析后的Promise (en-US)对象和数据。
    arrayBuffer()
    blob()
    json()
    text()
    formData()