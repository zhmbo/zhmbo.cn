(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{469:function(t,e,v){"use strict";v.r(e);var _=v(2),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本书的这一节描述了 Swift 编程语言的形式语法。这里描述的语法是为了帮助您了解该语言的更多细节，而不是让您直接实现一个解析器或编译器。")]),t._v(" "),e("p",[t._v("Swift 语言相对较小，这是由于 Swift 代码中常用的类型、函数以及运算符都已经在 Swift 标准库中定义了。虽然这些类型、函数和运算符并不是 Swift 语言自身的一部分，但是它们被广泛应用于本书的讨论和代码范例中。")]),t._v(" "),e("h2",{attrs:{id:"如何阅读语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何阅读语法"}},[t._v("#")]),t._v(" 如何阅读语法")]),t._v(" "),e("p",[t._v("用来描述 Swift 编程语言形式语法的符号遵循下面几个约定：")]),t._v(" "),e("ul",[e("li",[t._v("箭头（"),e("code",[t._v("→")]),t._v("）用来标记语法产式，可以理解为“可由……构成”。")]),t._v(" "),e("li",[t._v("斜体文字用来表示句法类型，并出现在一个语法产式规则两侧。")]),t._v(" "),e("li",[t._v("标记语言和标点符号由固定宽度的粗体文本表示，只出现在一个语法产式规则的右侧。")]),t._v(" "),e("li",[t._v("可供选择的语法产式由竖线（"),e("code",[t._v("|")]),t._v("）分隔。当可选用的语法产式太多时，为了阅读方便，它们将被拆分为多行语法产式规则。")]),t._v(" "),e("li",[t._v("少数情况下，标准字体文本被用来描述一个语法产生规则的右手侧内容。")]),t._v(" "),e("li",[t._v("可选的句法类型和文本标记用尾标 "),e("code",[t._v("opt")]),t._v(" 来标记。")])]),t._v(" "),e("p",[t._v("举个例子，getter-setter 方法块的语法定义如下：")]),t._v(" "),e("blockquote",[e("p",[t._v("getter-setter 方法块语法")]),t._v(" "),e("p",[e("em",[t._v("getter-setter 方法块")]),t._v(" → { "),e("a",{attrs:{href:""}},[t._v("getter 子句")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("setter 子句")]),t._v("可选 } | { "),e("a",{attrs:{href:""}},[t._v("setter 子句")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("getter 子句")]),t._v(" }")])]),t._v(" "),e("p",[t._v("这个定义表明，一个 getter-setter 方法块可以由一个 getter 分句后跟一个可选的 setter 分句构成，然后用大括号括起来，或者由一个 setter 分句后跟一个 getter 分句构成，然后用大括号括起来。上述的语法产式等价于下面的两个语法产式, ：")]),t._v(" "),e("blockquote",[e("p",[t._v("getter-setter 方法块语法")]),t._v(" "),e("p",[t._v("getter-setter 方法块 → { "),e("a",{attrs:{href:""}},[t._v("getter 子句")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("setter 子句")]),t._v("可选 }")]),t._v(" "),e("p",[t._v("getter-setter 方法块 → { "),e("a",{attrs:{href:""}},[t._v("setter 子句")]),t._v(" "),e("a",{attrs:{href:""}},[t._v("getter 子句")]),t._v(" }")])])])}),[],!1,null,null,null);e.default=r.exports}}]);