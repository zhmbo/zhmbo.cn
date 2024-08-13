(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{419:function(e,t,v){"use strict";v.r(t);var _=v(2),p=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("iOS13内容全介绍")]),e._v(" "),t("p",[e._v("​\tWWDC2019发布了iOS13，将随新iPhone发售正式发布。对于移动开发而言，最关心的必定是新系统特性及应对新系统App所需要做的改变。通过本文阅读，旨在帮助开发者对iOS13各个方面有最基础的认识，更具体详细的内容还需要通过实践不停地探索挖掘。全文将会分为四个部分来全方位的了解iOS13所带来的影响，最后以LC项目为例，查看iOS13对项目产生的影响。")]),e._v(" "),t("p",[e._v("iOS13系统特性")]),e._v(" "),t("p",[e._v("Xcode11新功能介绍")]),e._v(" "),t("p",[e._v("iOS13现代化UI")]),e._v(" "),t("p",[e._v("SwiftUI简介")]),e._v(" "),t("p",[e._v("LCApp（iOS13）")]),e._v(" "),t("p",[e._v("全文涉及新特性使用方法可以查看"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fwjssxc%2FiOS13Test%2Ftree%2Fdev_1",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOSTestGithub仓库"),t("OutboundLink")],1),e._v("中更详细的说明。")]),e._v(" "),t("p",[e._v("一、 iOS13系统特性")]),e._v(" "),t("p",[e._v("​\tiOS12更多是为了系统的性能和稳定，而iOS13有大幅度的改动，对于原生App、整体界面、安全性、性能方面都有了极大的提升。本节仅列举对产发产生影响及需要注意的模块，更多更全的iOS13系统新特性可以查看"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.apple.com%2Fcn%2Fnewsroom%2F2019%2F06%2Fapple-previews-ios-13%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple 发布 iOS 13 预览版（中文版）"),t("OutboundLink")],1),e._v("。苹果关于"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.apple.com%2Fios%2Fios-13-preview%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS13的简易说明"),t("OutboundLink")],1),e._v("及"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.apple.com%2Fios%2Fios-13-preview%2Ffeatures%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细说明（英文版）"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("1.1 整体界面")]),e._v(" "),t("p",[e._v("​\t深黑模式。iOS13最明显的特性就是在新版本中引入了深黑模式，系统自带的App都会继承深黑模式。可以在设置中心设置手机的显示模式。在深黑模式下，现有App不会产生变化，但是iOS13SDK提供了相应的接口支持第三方App实现深黑模式。")]),e._v(" "),t("p",[e._v("深黑模式应用:")]),e._v(" "),t("p",[e._v("view.overrideUserInterfaceStyle = .dark")]),e._v(" "),t("p",[e._v("通过设置view的overrideUserInterfaceStyle属性即可。")]),e._v(" "),t("p",[e._v("注意:")]),e._v(" "),t("p",[e._v("设置view的overrideUserInterfaceStyle属性会影响当前view及其子view，如果已经view和子view设置了color则修改overrideUserInterfaceStyle，对已设置的color无效。")]),e._v(" "),t("p",[e._v("应用拓展:")]),e._v(" "),t("p",[e._v("\\1. 在项目中使用深黑模式，如果项目不关闭，则需要对相关页面添加通知（暂时没找到系统设置页修改导致的变化属性），或者在baseViewController设置也可。")]),e._v(" "),t("p",[e._v("\\2. 如果修改了模式杀死App，则可以对scene设置对应的overrideUserInterfaceStyle属性即可。")]),e._v(" "),t("p",[e._v("1.2 定位服务")]),e._v(" "),t("p",[e._v("​\t增加定位服务的权限选择类型。增加只允许一次类型，目的为了保证Wifi、Bluetooth的情况下使用定位不被泄露。因此大多数关于定位服务相关模块需要进行相对应的改变。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-a1fe41c8fc82f1a8?imageMogr2/auto-orient/strip%7CimageView2/2/w/229/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("tips: 在对位置权限进行持久化的模块，需要考虑到这个问题，进行一定的修改。")]),e._v(" "),t("p",[e._v("1.3 登陆方式—Sign In with Apple")]),e._v(" "),t("p",[e._v("​\t可以使用Apple ID进行账号的登陆，而不需要借助第三方登录。让用户可以使用面容 ID 或触控 ID 来轻松进行身份认证，而内置的双重认证则再增添一层安全保障。"),t("strong",[e._v("Apple 不会利用 Sign In with Apple 来分析用户特征或他们在各个 app 中的活动。")])]),e._v(" "),t("p",[e._v("tips:")]),e._v(" "),t("p",[e._v("Sign in with Apple的功能在测试版中还未开放，需要等到九月份。从各方面信息来看Sign in with Apple功能苹果会封装成一个控件，在正式使用中只需要添加进控件即可。具体内容可能会有偏差，等9月再揭晓其神秘面纱。")]),e._v(" "),t("p",[e._v("1.4 快捷指令 （重要）")]),e._v(" "),t("p",[e._v("​\tiOS13系统中新增"),t("strong",[e._v("快速指令")]),e._v("的App，通过在该App中设置一些会话指令，帮助用户通过跟siri对话完成与App的交互。")]),e._v(" "),t("p",[e._v("tips:")]),e._v(" "),t("p",[e._v("该功能的实现，是否需要结合App还需要之后探索。")]),e._v(" "),t("p",[e._v("1.5 性能提升")]),e._v(" "),t("p",[e._v("面容解锁加速30%")]),e._v(" "),t("p",[e._v("App Store采用全新方式封装App，下载空间减少50%，更新所需的空间减少60%，从而极大的加快了启动速度。")]),e._v(" "),t("p",[e._v("实验：")]),e._v(" "),t("p",[e._v("\\1. 乐橙项目在iOS12的AppStore上显示的大小117M，在iOS13的AppStore显示大小为106.7M，包体大小确实缩小了，但是远远没有达到上面描述的程度。需要后续进一步观察。")]),e._v(" "),t("p",[e._v("\\2. 同样是iPhone6s，iOS13下载的乐橙App跟iOS12下载的乐橙App在启动时间上有明显的提升。")]),e._v(" "),t("p",[e._v("二、Xcode11新功能介绍")]),e._v(" "),t("p",[e._v("​\t工欲善其事必先利其器。iOS13发布的同时也会发布最新的Xcode工具，本节将介绍三个利于开发的Xcode新功能。")]),e._v(" "),t("p",[e._v("2.1 Debug工具升级")]),e._v(" "),t("p",[e._v("网络配置和温度环境设置")]),e._v(" "),t("p",[e._v("​\t手机与Mac连接的条件下，可以按照如图所示完成手机的网络环境或温度环境的配置。丰富的条件选择有助于Debug。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-3e1d5357a3dfe321?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200/format/webp",alt:"img"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-620557795f85d3d3?imageMogr2/auto-orient/strip%7CimageView2/2/w/813/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("UI显示可以通过条件控制")]),e._v(" "),t("p",[e._v("需要Xcode11且MacOS10.15以上才会有这个功能，现有条件下暂未完成此模块的测试。")]),e._v(" "),t("p",[e._v("2.2 SPM内置集成")]),e._v(" "),t("p",[e._v("​\tXcode10中可以使用Swift Package Manager配置文件进行配置，Xcode11自带工具模块可以帮助开发者集成各种第三方库，通过流程进行添加暂时无法将第三方库引入，估计和公司网络条件有关。")]),e._v(" "),t("p",[e._v("tips:")]),e._v(" "),t("p",[e._v("集成SPM的目的是为了替换cocoapod，具体的效果及功能实现需要长时间测试。")]),e._v(" "),t("p",[e._v("2.3 版本对比")]),e._v(" "),t("p",[e._v("​\tXcode11基于git的版本管理会在新修改的代码前有光标提示，可以更快更准确查看修改。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-bd7b1ac89d1b174e?imageMogr2/auto-orient/strip%7CimageView2/2/w/1025/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("tips:")]),e._v(" "),t("p",[e._v('上图的"print("git manager \\n")"代码行进行了修改，点击前置亮点。')]),e._v(" "),t("p",[e._v("Show Change: 显示上一版本代码行内容。")]),e._v(" "),t("p",[e._v("Discard Change: 恢复上一版本代码。")]),e._v(" "),t("p",[e._v("对于以git管理的工程，十分友好，LC项目以svn管理所以无法享受该好处。")]),e._v(" "),t("p",[e._v("2.4 其他更多")]),e._v(" "),t("p",[e._v("MiniMap")]),e._v(" "),t("p",[e._v("​\t编写代码过程中，右侧有缩略图，可以通过点击缩略图快速的找到相应代码块。")]),e._v(" "),t("p",[e._v("多屏修改代码")]),e._v(" "),t("p",[e._v("​\t之前代码同时最多只能查看两份代码文件，在Xcode11中可以同时查看多个文件代码，对于使用多屏进行开发效果极佳。")]),e._v(" "),t("p",[e._v("command+函数名")]),e._v(" "),t("p",[e._v("​\t通过command+函数名指令可以对（方法、类）增加添加方法、添加说明文档、重命名等操作。重命名修改了方法，会将对应使用到的地方也全部进行修改。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-fca8af314d11f695?imageMogr2/auto-orient/strip%7CimageView2/2/w/300/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("三、iOS13现代化UI")]),e._v(" "),t("p",[e._v("​\tiOS13在UI方面也做了多处改动以方便开发，本节内容根据"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.apple.com%2Fvideos%2Fplay%2Fwwdc2019%2F224%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS13现代化UI"),t("OutboundLink")],1),e._v("，对其归纳和实践，如果想要更详细的了解iOS13UI设计的问题，建议看视频学习。")]),e._v(" "),t("p",[e._v("3.1 Flexible UI")]),e._v(" "),t("p",[e._v("###### 3.1.1 Launch")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("现阶段关于Launch都是设置Launch Images Source，意味着对于每个机型对于都需要设置各自的2倍图、3倍图，这显然不够灵活。2020年4月份，Apple规定所有应用的Launch都需要使用launch.storyboard，否则将无法过审。\n")])])]),t("p",[e._v("3.1.2 适配（待测）")]),e._v(" "),t("p",[e._v("​\t一旦出现新的屏幕尺寸，App就需要去进行一定的适配，但是基于iOS13SDK的App它会自动提供屏幕的全屏分辨率。")]),e._v(" "),t("p",[e._v("3.2 Bars")]),e._v(" "),t("p",[e._v("​\t增加设置toolbar、navigationbar样式的API。")]),e._v(" "),t("p",[e._v("​\t以NavigationBar为例，下面代码通过将UINavigationBarAppearance 对象赋给navigationBar的standardAppearance即可完成对Navigationbar的样式设置。")]),e._v(" "),t("p",[e._v("设置NavigationBar代码:")]),e._v(" "),t("p",[e._v("private func setBar() {")]),e._v(" "),t("p",[e._v("​    let appearance = UINavigationBarAppearance()")]),e._v(" "),t("p",[e._v("​    appearance.titleTextAttributes = [.foregroundColor: UIColor.red]")]),e._v(" "),t("p",[e._v("​    self.navigationController?.navigationBar.standardAppearance = appearance")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("standardAppearance: 竖屏时导航栏外观。")]),e._v(" "),t("p",[e._v("compactAppearance: 横屏时导航栏外观。")]),e._v(" "),t("p",[e._v("scrollEdgeAppearance: 描述当关联的UIScrollView到达与导航栏邻接的边缘时导航栏的外观。")]),e._v(" "),t("p",[e._v("​\t还可以通过UINavigationBarAppearance对象中的属性设置自定义baritem的外观。新增的bar功能可以极好的管理bar外观。")]),e._v(" "),t("p",[e._v("3.3 Presentation")]),e._v(" "),t("p",[e._v("​\tiOS13UI对VC增加了present效果，默认效果由全屏显示变化为下图所示内容，而默认效果的修改不需要改变之前的代码逻辑。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-04965b40091bfe30?imageMogr2/auto-orient/strip%7CimageView2/2/w/200/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("3.3.1 present样式影响及还原")]),e._v(" "),t("p",[e._v("​\t根据上图可知iOS13的Present默认效果会在原有的VC上弹出一个VC，并且不完全覆盖原有VC。经过测试如上效果的原VC是不会Disappear，一直存在在层级树中，而iOS 系统对于层级树的管理内存消耗是极少的，所以不用担心性能问题。")]),e._v(" "),t("p",[e._v("​\t而如果APP非要使用原有的全屏显示模式只需要设置modalPresentationStyle的样式即可。")]),e._v(" "),t("p",[e._v("let presentVC = PresentPageController()")]),e._v(" "),t("p",[e._v("presentVC.modalPresentationStyle = .fullScreen")]),e._v(" "),t("p",[e._v("self.present(presentVC, animated: true, completion: nil)")]),e._v(" "),t("p",[e._v("3.3.2 UIAdaptivePresentationControllerDelegate")]),e._v(" "),t("p",[e._v("​\t可以通过实现UIAdaptivePresentationControllerDelegate来监听dismiss的各个阶段。对于Present转场动画而言modalPresentationStyle非fullScreen，在添加转场动画后会自动加入交互式转场动画，而fullScreen还是需要开发手动实现交互式转场动画代理。")]),e._v(" "),t("p",[e._v("3.4 Search")]),e._v(" "),t("p",[e._v("​\t将暴露UISearchController中UISearchBar更多接口能够满足UISearchBar的定制化，包括修改textfield的样式、显示或隐藏某些按钮等。")]),e._v(" "),t("p",[e._v("tips:")]),e._v(" "),t("p",[e._v("\\1. UISearchController不能被present。")]),e._v(" "),t("p",[e._v("\\2. beta中UISearchController有些bug，需要Xcode更新在做测试。")]),e._v(" "),t("p",[e._v("3.5 Gesture")]),e._v(" "),t("p",[e._v("TextView的增加UITextIntercation,并且通过UITextInputProcotol将选中的text进行操作。")]),e._v(" "),t("p",[e._v("tables&collections。比如两个手指滑动即可连续选中cell（可选）实现tableview的相关代理即可。")]),e._v(" "),t("p",[e._v("三个手指左划undo，右滑redo。对于绘画比较有用，正常工程中不太需要。（iPad）")]),e._v(" "),t("p",[e._v("四、SwiftUI简介")]),e._v(" "),t("p",[e._v("4.1 实现页面绘制")]),e._v(" "),t("p",[e._v("4.1.1 环境配置")]),e._v(" "),t("p",[e._v("​\t Xcode 11、 iOS 13,如果想要实现PreviewProvider需要将Mac系统升至10.15以上。现阶段使用SwiftUI的环境："),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fdownload.developer.apple.com%2FDeveloper_Tools%2FXcode_11_Beta_3%2FXcode_11_Beta_3.xip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xcode 11 beta3"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fidmsa.apple.com%2FIDMSWebAuth%2Flogin.html%3FappIdKey%3D4b98a8e6a3a3ce265b93c90207c442b53c45a1afa9ff1dc9bde8bb6928078d3b%26path%3D%2F%2Fbetaprogram%2Fredemption%3Flocale%3Dzh-CN%26rv%3D2%26view%3D3%23iosdownload",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS13 beta"),t("OutboundLink")],1),e._v("、MacOs10.14.5（App Store）。")]),e._v(" "),t("p",[e._v("​\t新建Swift项目，勾选Use SwiftUI，即可创建基于SwiftUI的Swift工程。工程目录如下所示:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-a25b15e9abf76eca?imageMogr2/auto-orient/strip%7CimageView2/2/w/274/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("工程目录说明:")]),e._v(" "),t("p",[e._v("\\1. 增加了SceneDelegate.swift。iOS12之前都是用UIApplication来维护App的生命周期，而到了iOS13，是通过UISceneSession维护App的生命周期，详细内容将在第五节中做更详细的说明。")]),e._v(" "),t("p",[e._v("\\2. 增加ContentView.swift文件去除ViewController.swift文件，去掉Controller的概念，都以View实现页面的展示。")]),e._v(" "),t("p",[e._v("4.1.2 通过SwiftUI实现页面")]),e._v(" "),t("p",[e._v("import SwiftUI")]),e._v(" "),t("p",[e._v("struct ContentView : View {")]),e._v(" "),t("p",[e._v("@State private var isPlayer: Bool = false")]),e._v(" "),t("p",[e._v("var body: some View {")]),e._v(" "),t("p",[e._v("​     HStack {")]),e._v(" "),t("p",[e._v("​       VStack {")]),e._v(" "),t("p",[e._v('​         Text("★★★★★")')]),e._v(" "),t("p",[e._v('​         Text("5 stars")')]),e._v(" "),t("p",[e._v("​       }.font(.caption)")]),e._v(" "),t("p",[e._v("​       VStack(alignment: .leading) {")]),e._v(" "),t("p",[e._v("​         HStack {")]),e._v(" "),t("p",[e._v('​           Text("Avocado Toast").font(.title)')]),e._v(" "),t("p",[e._v("​           Spacer()")]),e._v(" "),t("p",[e._v("​           ButtonView(isPlayer: $isPlayer)")]),e._v(" "),t("p",[e._v("​         }")]),e._v(" "),t("p",[e._v('​         Text(isPlayer ? "选中了ButtonView" : "未选中ButtonView")')]),e._v(" "),t("p",[e._v("​           .font(.caption).lineLimit(1)")]),e._v(" "),t("p",[e._v("​       }")]),e._v(" "),t("p",[e._v("​     }")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("struct ButtonView : View {")]),e._v(" "),t("p",[e._v("@Binding var isPlayer: Bool")]),e._v(" "),t("p",[e._v("var body: some View {")]),e._v(" "),t("p",[e._v('​     Button("选中") {')]),e._v(" "),t("p",[e._v("​       self.isPlayer.toggle()")]),e._v(" "),t("p",[e._v("​     }.foregroundColor(isPlayer ? Color.red : Color.blue)")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("显示结果:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-640cd24ee0e58a0f?imageMogr2/auto-orient/strip%7CimageView2/2/w/200/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("代码说明:")]),e._v(" "),t("p",[e._v("\\1. 功能实现。通过点击选中按钮修改label的显示内容。")]),e._v(" "),t("p",[e._v("\\2. 页面显示完全除了之前放在了HostViewController，所有的显示逻辑都是基于View实现的。")]),e._v(" "),t("p",[e._v("上图页面的层级结构")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-d2b63f47393d6f8f?imageMogr2/auto-orient/strip%7CimageView2/2/w/354/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("​\t通过层级结构我们可以很清楚的知道，ContentView的显示。但在代码实现中含有HStack嵌套HStack和VStack的部分，在层级结构中没有显示。只显示了最外层的HStack及其内层的View。")]),e._v(" "),t("p",[e._v("使用说明:")]),e._v(" "),t("p",[e._v("\\1. 使用SwiftUI和UIKit大大减少的代码量。")]),e._v(" "),t("p",[e._v("\\2. 掌握内容。数据传递、变量、属性结构器的定义。")]),e._v(" "),t("p",[e._v("\\2. 缺陷。会造成一定的阅读缺陷。当层级复杂会导致属性设置出问题。")]),e._v(" "),t("p",[e._v("4.2 数据流转")]),e._v(" "),t("p",[e._v("WWDC上官方的说法视图是方法的状态而不是一系列的事件。上面的话比较难懂，下图诠释了用户操作到改变视图状态的全过程。")]),e._v(" "),t("p",[e._v("​\t想要更深入理解关于action改变view的显示可以查看"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fonevcat.com%2F2017%2F07%2Fstate-based-viewcontroller%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("Onevcat关于单数据流VC设计"),t("OutboundLink")],1),e._v("或者笔者关于"),t("a",{attrs:{href:"https://www.jianshu.com/p/d63d2283b3ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("单数据函数流关于VC设计的文档"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("​\t需要完成上述流程，思路就是view绑定数据，所以swiftUI系统了很多种属性结构器来使数据绑定在view上。")]),e._v(" "),t("p",[e._v("属性结构器")]),e._v(" "),t("p",[e._v("**@State。**支持读和写。")]),e._v(" "),t("p",[t("strong",[e._v("@Binding。")]),e._v(" 不需要持有者读和写，是@State的子类。")]),e._v(" "),t("p",[t("strong",[e._v("@objectBinding。")]),e._v(" 使用@objectBinding对model进行定义，会对model的相关性属性进行跟踪。并且在初始化阶段必须传入model。")]),e._v(" "),t("p",[e._v("**@environmentObject。**是对满足BindableObject 协议model的封装，一个environmentObject可以包含多个实现协议的model。")]),e._v(" "),t("p",[e._v("建议：")]),e._v(" "),t("p",[e._v("\\1. 为了方便维护view上尽量少用State修饰符修饰的内容，尽量多用environmentObject。所以对于页面功能的设计提出了更高的要求。")]),e._v(" "),t("p",[e._v("\\2. 关于这部分的学习，本文只是提炼，WWDC视频部分更为详细，因公司网络原因限制，建议在非公司环境下学习。")]),e._v(" "),t("p",[e._v("视频地址: https://developer.apple.com/videos/play/wwdc2019/226 视频+PPT。")]),e._v(" "),t("p",[e._v("五、iOS13新增文件SceneDelegate")]),e._v(" "),t("p",[e._v("​\t基于iOS13SDK新建的应用程序，会发现增加了SceneDelegate.swift文件，之前应用的生命周期通过UIApplication去控制，iOS13之后通过UISceneSession去控制应用的生命周期，因此main函数运行之后的过程会出现差别，本节将详细对比前后版本的差别以明确在iOS13SDK开发APPmain函数执行之后所执行的操作。")]),e._v(" "),t("p",[e._v("5.1 整体流程")]),e._v(" "),t("p",[e._v("​\tAPP启动后Main函数执行之前还是按照之前的流程链接动态库、初始化类等流程。Main函数执行之后")]),e._v(" "),t("p",[e._v("是否否是Main函数AppDelagate是否main.storyboard或设置window无效info.plist是否配置SceneDelegate黑屏SceneDelegatemain.storyboard或设置windowsceneDidBecomeActive显示内容")]),e._v(" "),t("p",[e._v("通过上图可以明确地知道Main函数执行之后App的整理流程，其中有两个部分需要注意.")]),e._v(" "),t("p",[e._v("\\1. 关于是否设置SceneDelegate作为配置写在info.plist文件中，5.2节会对其有更详尽的说明。")]),e._v(" "),t("p",[e._v("\\2. 最终页面到Active状态调用了SceneDelegate中sceneDidBecomeActive的方法，由此可看出通过Scene来管理APP的生命周期而不是UIApplication。")]),e._v(" "),t("p",[e._v("\\3. 在AppDelegate的didFinishLaunchingWithOptions设置window无效，详细内容会在5.3节中说明。")]),e._v(" "),t("p",[e._v("5.2 info.plist")]),e._v(" "),t("p",[e._v("​\t上节提到通过info.plist中的配置去设置启动时具体执行哪一个SceneDelegate，看一下关于Scene的配置相关项。")]),e._v(" "),t("p",[t("key",[e._v("UIApplicationSceneManifest")])],1),e._v(" "),t("p",[e._v("​     "),t("key",[e._v("UIApplicationSupportsMultipleScenes")])],1),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("p",[e._v("​    UISceneConfigurations")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("p",[e._v("​      UIWindowSceneSessionRoleApplication")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("p",[e._v("​          UILaunchStoryboardName")]),e._v(" "),t("p",[e._v("​          LaunchScreen")]),e._v(" "),t("p",[e._v("​          UISceneStoryboardFile")]),e._v(" "),t("p",[e._v("​          Main")]),e._v(" "),t("p",[e._v("​          UISceneConfigurationName")]),e._v(" "),t("p",[e._v("​          Default Configuration")]),e._v(" "),t("p",[e._v("​          UISceneDelegateClassName")]),e._v(" "),t("p",[e._v("​          $(PRODUCT_MODULE_NAME).SceneDelegate")]),e._v(" "),t("p",[e._v("​\t通过"),t("strong",[e._v("UISceneDelegateClassName")]),e._v("的配置项去设置具体的调用的函数名，经过测试将该配置项去除，将会导致调用不到相关内容。")]),e._v(" "),t("p",[e._v("5.3 纯代码UI操作")]),e._v(" "),t("p",[e._v('​\t在info.plist中默认设置了"UISceneStoryboardFile = Main"，以满足通过sb对页面进行布局。对于非sb布局的产品，之前会把相关的代码写在AppDelegate中，现阶段需要将初始化Window的操作放在SceneDelegate中。')]),e._v(" "),t("p",[e._v("代码块:")]),e._v(" "),t("p",[e._v("func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {")]),e._v(" "),t("p",[e._v("​     window = UIWindow(frame: UIScreen.main.bounds)")]),e._v(" "),t("p",[e._v("​     window?.rootViewController = UINavigationController(rootViewController: HomeViewController())")]),e._v(" "),t("p",[e._v("​     window?.makeKeyAndVisible()")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("​\t按照之前初始化window的方法执行发现是黑屏。通过Hierarchy工具查看页面的布局结构如下所示:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/3331858-8b32df0e34318df4?imageMogr2/auto-orient/strip%7CimageView2/2/w/268/format/webp",alt:"img"}})]),e._v(" "),t("p",[e._v("​\t会发现最外层结构是UIWindowScene，回过来看关于UIWindow初始化的方法，会发现增加了")]),e._v(" "),t("p",[e._v("@available(iOS 13.0, *)")]),e._v(" "),t("p",[e._v("public init(windowScene: UIWindowScene)")]),e._v(" "),t("p",[e._v("对window进行初始化，所以需要纯代码绘制UI需要按照如下内容")]),e._v(" "),t("p",[e._v("func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {")]),e._v(" "),t("p",[e._v("​     window = UIWindow(windowScene: scene as! UIWindowScene)")]),e._v(" "),t("p",[e._v("​     window?.rootViewController = UINavigationController(rootViewController: HomeViewController())")]),e._v(" "),t("p",[e._v("​     window?.makeKeyAndVisible()")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("5.4 总结")]),e._v(" "),t("p",[e._v("​\t本节对SceneDelegate相关的进行简单的说明。iOS13中通过UIScene实现了管理APP的生命周期，以UIScene的子类UIWindowScene来管理APP页面的布局结构。如此修改对于管理APP生命周期、页面布局、APP启动的影响还需要更多的关注。")]),e._v(" "),t("p",[e._v("作者：sycasl\n链接：https://www.jianshu.com/p/53b2a26d992c\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);t.default=p.exports}}]);