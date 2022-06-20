export const schema1 = {
    "componentName":"MyProForm",
    "id":"node_ocl4m6jgmg2",
    "props":{
        "placeholder":"请在右侧面板添加表单项+",
        "placeholderStyle":{
            "height":"38px",
            "color":"#0088FF",
            "background":"#d8d8d836",
            "border":0,
            "gridArea":"span 4 / span 4"
        },
        "columns":1,
        "labelCol":{
            "fixedSpan":4
        },
        "labelAlign":"top",
        "emptyContent":"添加表单项",
        "status":"editable",
        "style":{
            "marginLeft":"20px",
            "marginRight":"20px"
        }
    },
    "docId":"docl4m6jgmg",
    "hidden":false,
    "title":"",
    "isLocked":false,
    "condition":true,
    "conditionGroup":"",
    "children":[
        {
            "componentName":"ProFormInput",
            "id":"node_ocl4mibacr1",
            "props":{
                "formItemProps":{
                    "primaryKey":"0lxrdZ8o90GOYuUkoI5wJ",
                    "label":"姓名",
                    "size":"medium",
                    "device":"desktop",
                    "fullWidth":true,
                    "columnSpan":1,
                    "required":false
                },
                "placeholder":"请输入",
                "size":"medium",
                "alwaysShowTrigger":true,
                "type":"normal",
                "step":1,
                "precision":0,
                "editable":true
            },
            "hidden":false,
            "title":"",
            "isLocked":false,
            "condition":true,
            "conditionGroup":""
        },
        {
            "componentName":"ProFormNumberInput",
            "id":"node_ocl4mibacr2",
            "props":{
                "formItemProps":{
                    "primaryKey":"YsnIAsv--noNMiZKdPBro",
                    "label":"年龄",
                    "size":"medium",
                    "device":"desktop",
                    "fullWidth":true,
                    "required":false
                },
                "placeholder":"请输入",
                "hasClear":false,
                "showSearch":false,
                "hasArrow":true
            },
            "hidden":false,
            "title":"",
            "isLocked":false,
            "condition":true,
            "conditionGroup":""
        },
        {
            "componentName":"ProFormSelect",
            "id":"node_ocl4mibacr3",
            "props":{
                "formItemProps":{
                    "primaryKey":"Yad3UQ3rx2Hac2a-yq9NS",
                    "label":"性别",
                    "size":"medium",
                    "colSpan":1,
                    "fullWidth":true,
                    "columnSpan":1,
                    "required":false
                },
                "placeholder":"请选择",
                "hasClear":false,
                "showSearch":false,
                "hasArrow":true
            },
            "hidden":false,
            "title":"",
            "isLocked":false,
            "condition":true,
            "conditionGroup":""
        }
    ]
}

export const schema2 = {
    "componentName": "ProForm",
    "id": "node_ocl4mvwef56h",
    "props": {
      "placeholder": "请在右侧面板添加表单项+",
      "placeholderStyle": {
        "height": "38px",
        "color": "#0088FF",
        "background": "#d8d8d836",
        "border": 0,
        "gridArea": "span 4 / span 4"
      },
      "columns": 2,
      "labelCol": {
        "fixedSpan": 4
      },
      "labelAlign": "top",
      "emptyContent": "添加表单项",
      "status": "editable"
    },
    "docId": "docl4mvwef5",
    "title": "",
    "isLocked": false,
    "condition": true,
    "conditionGroup": "",
    "children": [
      {
        "componentName": "ProFormInput",
        "id": "node_ocl4mvwef582",
        "props": {
          "formItemProps": {
            "primaryKey": "x_0XJlTbLNqkEDOx-5DZ-",
            "label": "姓名",
            "size": "medium",
            "device": "desktop",
            "fullWidth": true,
            "required": false
          },
          "placeholder": "请输入",
          "size": "medium"
        },
        "title": "",
        "isLocked": false,
        "condition": true,
        "conditionGroup": ""
      },
      {
        "componentName": "ProFormSelect",
        "id": "node_ocl4mvwef583",
        "props": {
          "formItemProps": {
            "primaryKey": "IP8qbjgH31ZtNktq8VDrQ",
            "label": "性别",
            "size": "medium",
            "device": "desktop",
            "fullWidth": true,
            "required": false
          },
          "placeholder": "请选择",
          "hasClear": false,
          "showSearch": false,
          "dataSource": [
            {
              "title": "Title",
              "label": "男",
              "value": "1"
            },
            {
              "title": "Title",
              "label": "女",
              "value": "0"
            }
          ],
          "mode": "single",
          "hasArrow": true
        },
        "title": "",
        "isLocked": false,
        "condition": true,
        "conditionGroup": ""
      }
    ]
  }