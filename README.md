# Task testdemo -> https://firebasetask.000webhostapp.com/index.html
Validation ->
{
  "rules": {
    ".read": false, 
    ".write": false,

      "autoDB": {
        ".read": true, 
    		".write": true,
          "brand": {
            ".validate": "newData.isString() && (newData.val().length > 0 &&newData.val().length <= 50)"
          },
          "cc": {
            ".validate": "newData.isNumber() && newData.val() >= 100 && newData.val() <= 5000"
          },
          "year": {
            ".validate": "newData.isNumber() && newData.val() >= 1972 && newData.val() <= 2022"
          },
          "length": {
            ".validate": "newData.isNumber() && newData.val() >= 2500 && newData.val() <= 6000"
          },
          "width": {
            ".validate": "newData.isNumber() && newData.val() >= 1200 && newData.val() <= 2200"
          },
          "weight": {
            ".validate": "newData.isNumber() && newData.val() >= 600 && newData.val() <= 3000"
      }
    }
  }
}
