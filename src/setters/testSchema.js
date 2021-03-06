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
  "componentName": "MyProForm",
  "id": "node_ocl4p826p24y",
  "props": {
    "placeholder": "请在右侧面板添加表单项+",
    "placeholderStyle": {
      "height": "38px",
      "color": "#0088FF",
      "background": "#d8d8d836",
      "border": 0,
      "gridArea": "span 4 / span 4"
    },
    "columns": 1,
    "labelCol": {
      "fixedSpan": 4
    },
    "labelAlign": "top",
    "emptyContent": "添加表单项",
    "status": "editable",
    "style": {
      "marginLeft": "20px",
      "marginRight": "20px"
    }
  },
  "docId": "docl4m6jgmg",
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "children": [
    {
      "componentName": "ProFormInput",
      "id": "node_ocl4p826p24z",
      "props": {
        "formItemProps": {
          "primaryKey": "0lxrdZ8o90GOYuUkoI5wJ",
          "label": "姓名",
          "size": "medium",
          "device": "desktop",
          "fullWidth": true,
          "columnSpan": 1,
          "required": false
        },
        "placeholder": "请输入",
        "size": "medium",
        "alwaysShowTrigger": true,
        "type": "normal",
        "step": 1,
        "precision": 0,
        "editable": true
      },
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    },
    {
      "componentName": "ProFormNumberInput",
      "id": "node_ocl4mibacr2",
      "props": {
        "formItemProps": {
          "primaryKey": "YsnIAsv--noNMiZKdPBro",
          "label": "年龄",
          "size": "medium",
          "device": "desktop",
          "fullWidth": true,
          "required": false
        },
        "placeholder": "请输入",
        "hasClear": false,
        "showSearch": false,
        "hasArrow": true
      },
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    },
    {
      "componentName": "ProFormSelect",
      "id": "node_ocl4mibacr3",
      "props": {
        "formItemProps": {
          "primaryKey": "Yad3UQ3rx2Hac2a-yq9NS",
          "label": "性别",
          "size": "medium",
          "colSpan": 1,
          "fullWidth": true,
          "columnSpan": 1,
          "required": false
        },
        "placeholder": "请选择",
        "hasClear": false,
        "showSearch": false,
        "hasArrow": true
      },
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    },
    {
      "componentName": "Button",
      "id": "node_ocl4p826p26v",
      "props": {
        "prefix": "next-",
        "type": "primary",
        "size": "medium",
        "htmlType": "button",
        "component": "button",
        "children": "取消",
        "iconSize": "xxs",
        "ghost": false,
        "loading": false,
        "text": false,
        "warning": false,
        "disabled": false
      },
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}