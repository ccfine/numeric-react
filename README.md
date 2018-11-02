# Numeric

## 说明

进行数字控制：千位分隔符、整数和小数位数的限制

## 安装

    npm install numeric-react --save
    yarn add numeric-react

## 使用
    
    import Numeric from "numeric-react"  

    <Numeric />

## API

### props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| value | 初始值 | number | null |
| allowDecimalPadding | 允许用0来填充小数，如果设置为"floats"，填充只在有一些小数时才执行 | [bool, "floats"] | true |
| decimalPlaces | 格式化值上显示的小数位数，并将其作为原始值的精度 | number | 2 |
| digitGroupSeparator | 整数部分是否显示千位分隔符 | [",", ""] | "," |
| formatOnPageLoad | 初始化时是否格式化默认值 | bool | true |
| historySize | 在内存中保留多少撤销状态(不建议数字过大) | number | 20 |
| isCancellable | 用户在使用Esc键时是否可以取消对元素值所做的最后一次修改 | bool | true |
| leadingZero | 控制最前面的"0"输入时和失焦时的显示方式 | ["allow", "deny", "keep"] | "deny" |
| maximumValue | 可输入的最大值 | string | "10000000000000" |
| minimumValue | 可输入的最小值 | string | "-10000000000000" |
| modifyValueOnWheel | 元素值是否可以用鼠标滚轮递增/递减，使用鼠标滚轮时可以使用Shift键暂时禁止此功能 | bool | true |
| overrideMinMaxLimits | 覆盖最小值和最大值的限制 | ["ceiling", "floor", "ignore"] | null |
| readOnly | 是否设置为只读初始化时 | bool | false |
| saveValueToSessionStorage | 是否允许将聚焦时的值保存在Session Storage中 | bool | false |
| selectOnFocus | 聚焦时值是否被选中 | bool | false |
| showOnlyNumbersOnFocus | 聚焦时是否显示千位分隔符 | bool | true |
| showPositiveSign | 正数时是否显示"+" | bool | false |
| unformatOnHover | 当按住Alt键将鼠标悬停在元素值上时，元素值是否应该未格式化 | bool | true |
| unformatOnSubmit | 提交时元素值是否应该未格式化 | bool | false |
| wheelOn | 配合modifyValueOnWheel选项，在聚焦或悬停时，元素值可以用鼠标滚轮递增/递减 | ["focus", "hover"] | "focus" |
| wheelStep | 配合modifyValueOnWheel选项，允许定义一个固定的步骤，或基于当前值大小计算的渐进式 | [number, "progressive"] | "progressive" |
| style | 设置输入框样式 | object | null |

### methods

| 方法 | 说明 | 类型 |
|------|------|------|
| onChange | 输入框内容变化时的回调 | function(e, value) |