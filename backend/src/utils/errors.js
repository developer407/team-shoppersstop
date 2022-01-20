const formatErrors = (errorsArray)=>{
    return errorsArray.map((err)=>{
        return {
            message:err.msg,
            field:err.params
        }
    })
}

module.exports = formatErrors