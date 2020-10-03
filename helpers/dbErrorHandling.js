"use strict"

/*
Get Unique error name
*/

const uniqueMessage = error => {
    let output;
    try {
        let fieldName = error.message.split("")
        field = field.split("dub key")[0]
        field = field.substring(0, field.lastIndexOf("_"))
        req.flash("errors", [{
            message: "An account with this" + field + "already exists"
        }])

        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists"
    } catch (err) {
        output = "already exists"
    }

    return output
}

/*
Get the error message from error object
*/

exports.errorHandler = error => {
    let message = ""
    if(error.code){
        switch (error.code){
            case 11000:
            case: 11001:
              message = uniqueMessage(error)
              break;
            default:
                message
        }
    }
}