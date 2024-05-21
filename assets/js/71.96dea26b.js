(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{394:function(t,_,v){"use strict";v.r(_);var a=v(8),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http基本概念"}},[t._v("#")]),t._v(" HTTP基本概念")]),t._v(" "),_("h2",{attrs:{id:"_1-http基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-http基本概念"}},[t._v("#")]),t._v(" 1 HTTP基本概念")]),t._v(" "),_("h3",{attrs:{id:"超文本传输协议解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#超文本传输协议解释"}},[t._v("#")]),t._v(" 超文本传输协议解释")]),t._v(" "),_("p",[t._v("超文本传输协议，HTTP，HyperText Transfer Protocal")]),t._v(" "),_("p",[t._v("三部分：超文本、传输、协议")]),t._v(" "),_("ul",[_("li",[t._v("协议：两者以上参与、行为约定和规范。HTTP 协议是一个用在计算机世界里的协议，它使用计算机能够理解的语言，确立了一种计算机之间交流通信的规范（两个以上参与者），以及相关的各种控制和错误处理方式（行为约定和规范）。")]),t._v(" "),_("li",[t._v("传输：HTTP 协议是"),_("strong",[t._v("双向协议")]),t._v("。浏览器 A 访问百度网站 B，双方使用 HTTP 协议通讯，浏览器把请求数据发送给网站，网站再把一些数据返回给浏览器，最后由浏览器渲染在屏幕上；数据虽然在 A 和 B 之间传输，但是允许中间有中转或接力；")]),t._v(" "),_("li",[t._v("超文本：HTTP 传输的内容；早期的文本指简单的字符，现在的文本指图片、视频、压缩包等；超文本，超越普通的文本，它是文字、图片、视频等的混合体，最关键的是有超链接，能从一个超文本跳转到另外一个超文本；HTML就是最常见的超文本。")])]),t._v(" "),_("p",[_("strong",[t._v("HTTP是一个在计算机世界里专门在【两点】之间【传输】文字、图片、音频、视频等【超文本】数据的【约定和规范】。")])]),t._v(" "),_("h3",{attrs:{id:"http协议通信过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议通信过程"}},[t._v("#")]),t._v(" HTTP协议通信过程")]),t._v(" "),_("p",[t._v("HTTP是应用层协议，它以TCP作为底层协议，默认端口为80，通信过程如下：")]),t._v(" "),_("ol",[_("li",[t._v("服务器在80端口等待客户的请求。")]),t._v(" "),_("li",[t._v("浏览器发起到服务器的 TCP 连接（创建套接字Socket）。")]),t._v(" "),_("li",[t._v("服务器接收来自浏览器的 TCP 连接。")]),t._v(" "),_("li",[t._v("浏览器（HTTP客户端）和Web服务器（HTTP服务器）交换HTTP消息。")]),t._v(" "),_("li",[t._v("关闭 TCP 连接。")])]),t._v(" "),_("h3",{attrs:{id:"http协议特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议特点"}},[t._v("#")]),t._v(" HTTP协议特点")]),t._v(" "),_("ul",[_("li",[t._v("Http 允许传输任意类型的数据。传输类型由 Content-Type 标记。")]),t._v(" "),_("li",[_("strong",[t._v("无状态")]),t._v("。对于客户端每次发送的请求，服务器都认为是一个新的请求，上一次会话和下一次会话之间没有联系。")]),t._v(" "),_("li",[t._v("支持客户端/服务器模式。")]),t._v(" "),_("li",[_("strong",[t._v("明文传输")]),t._v("。")]),t._v(" "),_("li",[t._v("简单灵活、易拓展。")])]),t._v(" "),_("h3",{attrs:{id:"http报文格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http报文格式"}},[t._v("#")]),t._v(" HTTP报文格式")]),t._v(" "),_("p",[_("strong",[t._v("请求：由请求行、请求头、空行、请求体组成：")])]),t._v(" "),_("ul",[_("li",[t._v("请求行：请求方法、访问资源 URL、HTTP 版本。")]),t._v(" "),_("li",[t._v("请求头：格式「属性名：属性值」，服务器根据请求头获取客户端的信息，主要有 cookie、host、connection、accept-language、accept-encoding、user-agent")]),t._v(" "),_("li",[t._v("请求体：用户的请求数据，如账号密码。")])]),t._v(" "),_("p",[_("strong",[t._v("响应：由状态行、响应头、空行、响应体组成：")])]),t._v(" "),_("ul",[_("li",[t._v("状态行：协议版本号，状态码及状态描述")]),t._v(" "),_("li",[t._v("响应头：响应字段，connection、content-type、content-encoding、content-length、set-cookie")]),t._v(" "),_("li",[t._v("响应体：服务器返回给客户端的内容")])]),t._v(" "),_("h2",{attrs:{id:"_2-http属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-http属性"}},[t._v("#")]),t._v(" 2 HTTP属性")]),t._v(" "),_("h3",{attrs:{id:"http常见状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http常见状态码"}},[t._v("#")]),t._v(" HTTP常见状态码")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1xx：提示信息，表示目前是协议处理的中间状态，还需后续的操作。")])]),t._v(" "),_("li",[_("p",[t._v("2xx：成功，报文已被收到并被正确处理；")]),t._v(" "),_("blockquote",[_("p",[t._v("200 OK：表示从客户端发送给服务器的请求被正常处理并返回")]),t._v(" "),_("p",[t._v("204 No Content：成功处理，但在返回的响应报文中不含实体的主体部分（没有资源可以返回）")])])]),t._v(" "),_("li",[_("p",[t._v("3xx：重定向，资源位置发生变动，需要客户端重新发送请求。")]),t._v(" "),_("blockquote",[_("p",[t._v("301 Moved Permanently：永久重定向，表示请求的资源被分配了新的URL，之后应该更改URL。")]),t._v(" "),_("p",[t._v("302 Found：临时性重定向，表现请求的资源分配了新的URL，希望本次使用新的URL。")])])]),t._v(" "),_("li",[_("p",[t._v("4xx：客户端错误，请求报文有误，服务器无法处理。")]),t._v(" "),_("blockquote",[_("p",[t._v("400 Bad Request：表示请求报文中存在语法错误")]),t._v(" "),_("p",[t._v("401 Unauthorized：认证失败，需要通过HTTP认证（用户未登录）")]),t._v(" "),_("p",[t._v("403 Forbidden：服务器拒绝此次访问（访问权限出现问题）")]),t._v(" "),_("p",[t._v("404 Not Found：表示服务器上无法找到请求的资源。")])])]),t._v(" "),_("li",[_("p",[t._v("5xx：服务器错误，服务器在处理请求时内部发生错误。")]),t._v(" "),_("blockquote",[_("p",[t._v("500 Inter Server Error：表示服务器在执行请求时发生了错误，web应用程序存在bug或某些临时的错误。")]),t._v(" "),_("p",[t._v("503 Server Unavailable：表示服务器处于超负载或正在进行停机维护，无法处理请求。")])])])]),t._v(" "),_("h3",{attrs:{id:"http常见字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http常见字段"}},[t._v("#")]),t._v(" HTTP常见字段")]),t._v(" "),_("ul",[_("li",[t._v("Host字段：发生请求时，用来指定服务器的域名；可将请求发往同一台服务器的不同网站。")]),t._v(" "),_("li",[t._v("Content-Length：服务器返回时，本次会用的数据长度。")]),t._v(" "),_("li",[t._v("Connection：常用于服务器使用TCP持久连接，HTTP/1.1版本默认链接都是持久连接，但为兼容老版本HTTP，需要指定Connection字段为Keep-Alive。")]),t._v(" "),_("li",[t._v("Content-Type：服务器回应时，告诉客户端，本次数据是什么格式。"),_("code",[t._v("Content-Type: text/html; charset=utf-8")]),t._v("，表面发送的是网页，编码是UTF-8。")]),t._v(" "),_("li",[t._v("Content-Encoding：服务器返回数据使用的压缩格式")])]),t._v(" "),_("h2",{attrs:{id:"_3-http请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-http请求"}},[t._v("#")]),t._v(" 3 HTTP请求")]),t._v(" "),_("h3",{attrs:{id:"get与post的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get与post的区别"}},[t._v("#")]),t._v(" GET与POST的区别")]),t._v(" "),_("ul",[_("li",[t._v("GET：从服务器获取资源，这个资源可以是静态的文本、页面、图片视频等；打开一篇博客，浏览器会发送GET请求给服务器，服务器就会返回文章的所有文字和资源。")]),t._v(" "),_("li",[t._v("POST：与GET相反，它向指定的资源提交数据，数据就放在报文的body里；比如发布留言，浏览器就会执行POST请求，把留言文字放进报文body里，然后拼接好POST请求头，通过TCP协议发送给浏览器。")])]),t._v(" "),_("h3",{attrs:{id:"get和post方法都是安全和幂等的吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get和post方法都是安全和幂等的吗"}},[t._v("#")]),t._v(" GET和POST方法都是安全和幂等的吗？")]),t._v(" "),_("p",[t._v("安全和幂等概念：")]),t._v(" "),_("ul",[_("li",[t._v("【安全】指请求方法不会【破坏】服务器上的资源。")]),t._v(" "),_("li",[t._v("【幂等】指多次执行相同的操作，结果都是【相同】的。")])]),t._v(" "),_("p",[t._v("那么很明显GET方法就是【安全且幂等】的，因为它是【只读】操作，无论操作多少次，服务器上的数据都是安全的，且每次的结果都是相同的。")]),t._v(" "),_("p",[t._v("POST因为是【新增或提交数据】的操作，会修改服务器上的资源，所以是【不安全】的，多次提交数据就会创建多个资源，所以【不是幂等】的。")]),t._v(" "),_("h2",{attrs:{id:"_4-http版本对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-http版本对比"}},[t._v("#")]),t._v(" 4 HTTP版本对比")]),t._v(" "),_("h3",{attrs:{id:"查看请求的http版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看请求的http版本"}},[t._v("#")]),t._v(" 查看请求的HTTP版本")]),t._v(" "),_("p",[t._v("这里以Google Chrome浏览器为例。")]),t._v(" "),_("ol",[_("li",[t._v("F12打开开发人员界面")]),t._v(" "),_("li",[t._v("点击网络Network")]),t._v(" "),_("li",[t._v("点击某一条请求")]),t._v(" "),_("li",[t._v("查看该条请求响应头Resopnse Header中的信息，并点击View source")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/check-http-version.png",alt:"image-20220714160049262"}})]),t._v(" "),_("p",[t._v("可以看到这里使用的是HTTP/1.1版本。")]),t._v(" "),_("h3",{attrs:{id:"http-1-1优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1优点"}},[t._v("#")]),t._v(" HTTP/1.1优点")]),t._v(" "),_("p",[t._v("HTTP最突出的特点就是：简单、灵活和易于扩展、应用广泛和跨平台。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("简单：报文格式：header + body，头部信息是key-value简单文本，易于理解。")])]),t._v(" "),_("li",[_("p",[t._v("灵活和易于扩展：有各类请求方法、状态码、头字段等每个组成要求都没有固定死，都允许开发人员自定义和扩充；工作在应用层，下层可以随意变化；HTTPS就是在HTTP和TCP层之间增加了SSL/TLS安全传输层。")]),t._v(" "),_("blockquote",[_("p",[t._v("比如，可以在请求头中携带token字段用于验证用户身份。")])])]),t._v(" "),_("li",[_("p",[t._v("应用广泛和跨平台：从台式机浏览器到手机APP，从看新闻到购物、理财、玩游戏。")])])]),t._v(" "),_("h3",{attrs:{id:"http-1-1缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1缺点"}},[t._v("#")]),t._v(" HTTP/1.1缺点")]),t._v(" "),_("p",[t._v("双刃剑：无状态、明文传输；严重缺点：不安全。")]),t._v(" "),_("ul",[_("li",[t._v("无状态好处：不需要额外的资源来记录状态信息，减轻服务器的负担，把更多的CPU和内存用来对外提供服务。")]),t._v(" "),_("li",[t._v("无状态坏处：服务器 没有记忆能力，它在完成有关联性的操作时会非常麻烦。例如：登录、添加购物车、下单、结算、支付，这系列操作都要知道用户的身份才行，但服务器不知道这些请求是有关联的，每次都要问一遍身份信息。解决方案：Cookie")]),t._v(" "),_("li",[t._v("Cookie：通过在请求和响应报文中写入Cookie信息来控制客户端的状态。相当于，在客户端发送第一次请求后，服务器会下发一个装有客服信息的【小帖纸】，后续客户端请求服务器的时候，都会带上【小帖纸】，服务器就能认得了。")]),t._v(" "),_("li",[t._v("明文传输好处：传输过程中的信息，是可方便阅读的，通过F12控制台查看，为调试工作带来极大的方便。")]),t._v(" "),_("li",[t._v("明文传输坏处：HTTP的所有信息都暴露出来，信息的内容很容易被窃取，如果里面包含账号密码信息，很容易被盗号。")]),t._v(" "),_("li",[t._v("不安全：明文，内容被窃听，比如，账号信息泄露；不验证通信方的身份，可能遭遇伪装，比如，访问假的淘宝、钱没了；无法证明报文的完整性，可能被篡改，比如，网页植入垃圾广告。")])]),t._v(" "),_("h3",{attrs:{id:"http-1-1性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1性能"}},[t._v("#")]),t._v(" HTTP/1.1性能")]),t._v(" "),_("p",[t._v("HTTP协议是基于【TCP/IP】，并使用【请求-应答】通信模式，所以性能关键就在这两点。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("长连接")]),t._v("：早期HTTP/1.0性能有一个很大的问题，每一次发请求都要新建一个TCP连接（三次握手），而且进行串行请求，做了无谓的TCP连接建立和断开，增加了通信开销；为了解决上述问题，HTTP/1.1提出长连接通讯方式，也叫持久连接，减少了TCP连接的重复建立和断开造成的开销，减轻服务器端的负载。持久连接的特点：只要任意一端没有提出断开连接，则保持TCP连接状态。")]),t._v(" "),_("blockquote",[_("p",[t._v("可以在请求头Request Header中查看到Connection字段的值为keep-alive")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("管道网络传输")]),t._v("：在用一个TCP连接里面，客户端可以发起多次请求，只要第一个请求发出去，不必等其回来，就可以发第二个请求，减少整体的响应时间。")]),t._v(" "),_("blockquote",[_("p",[t._v("如，客户段请求两个资源，以前做法，发送A请求，等待服务器做出回应，收到后在发送B请求。管道机制规则允许服务器同时发送A请求和B请求。但服务器按照顺序，先回应A请求，再回应B请求。要是前面回应的特别慢，后面就会有许多请求排队等着，称为对头阻塞。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("对头阻塞")]),t._v("：【请求-应答】模式加剧了HTTP的性能问题。因为当顺序发送请求序列中的一个请求，因为某种原因被阻塞时，后面排队的所有请求也被阻塞了，会招致客户端一直请求不到数据。好比上班路上塞车。")])])]),t._v(" "),_("h3",{attrs:{id:"http1-0和http1-1的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1的区别"}},[t._v("#")]),t._v(" HTTP1.0和HTTP1.1的区别")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("长连接")]),t._v("：HTTP1.0默认使用短链接，每次请求都需要建立新的TCP连接，连接不能复用；HTTP1.1支持长连接，允许客户端通过一个连接发送多个请求。")]),t._v(" "),_("li",[_("strong",[t._v("优化带宽")]),t._v("：支持只发送header信息，如果服务器认为客户端有权限请求服务器，则返回100，否则返回401.客户端如果接收到了100，才开始把请求body发送到服务器。")]),t._v(" "),_("li",[_("strong",[t._v("Host头处理")]),t._v("：在请求头中加入Host字段，在HTTP1.0中认为每台服务器都绑定一个唯一的ip地址，因此，请求消息中的url并没有传递主机名。HTTP1.1，虚拟机技术发展迅速，在一台物理服务器上可以存在多个虚拟主机，并且他们共享一个ip地址，所以HTTP1.1增加HOST信息。")]),t._v(" "),_("li",[_("strong",[t._v("断点续传")]),t._v("：HTTP1.0不支持端点续传；HTTP1.1新增range字段，用来指定数据字节位置，支持断点续传。")]),t._v(" "),_("li",[_("strong",[t._v("错误状态响应代码")]),t._v("：HTTP1.1中新增24个错误状态响应码。")])]),t._v(" "),_("h3",{attrs:{id:"http1-1和http2-0区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-1和http2-0区别"}},[t._v("#")]),t._v(" HTTP1.1和HTTP2.0区别")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("二进制分帧层")]),t._v("：HTTP1.x采用纯文本的形式通信，HTTP2.0将信息分割为更小的消息，采用二进制格式编码。")]),t._v(" "),_("li",[_("strong",[t._v("多路复用机制")]),t._v("：解决HTTP1.x队首阻塞问题，同一个TCP连接"),_("strong",[t._v("并发")]),t._v("处理多个请求，请求的数量比1.1大好几个数量级。")]),t._v(" "),_("li",[_("strong",[t._v("header压缩")]),t._v("：HTTP1.1不支持header数据的压缩，HTTP2.0可以对header的数据进行压缩，缩小数据体积，在网络上传输更快。")]),t._v(" "),_("li",[_("strong",[t._v("服务器推送")]),t._v("：服务器可以根据客户端的请求，提前返回多个响应，推送额外的资源给客户端。静态资源可以存储到缓冲中，下次就不需要发送请求了，直接从缓存中获取。")])]),t._v(" "),_("h2",{attrs:{id:"_5-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-https"}},[t._v("#")]),t._v(" 5 HTTPS")]),t._v(" "),_("h3",{attrs:{id:"对称加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),_("p",[t._v("加、解密使用的同一串密钥，常见的对称加密算法：DES，AES 等。")]),t._v(" "),_("h3",{attrs:{id:"非对称加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),_("p",[t._v("加、解密使用不同的密钥，一把作为公开的公钥，另一把作为保密的私钥。公钥加密的信息，只有私钥才能解密。反之，私钥加密的信息，只有公钥才能解密。")]),t._v(" "),_("p",[t._v("常见的非对称加密算法：RSA，ECC 等。")]),t._v(" "),_("blockquote",[_("p",[t._v("RSA 算法：该算法的命名以三位科学家的姓氏缩写组合得来，在计算机网络世界，一直是最广为使用的 “非对称加密算法”。")]),t._v(" "),_("p",[t._v("ECC 是非对称加密里的 “后起之秀”，它基于 “椭圆曲线离散对数” 的数学难题，使用特定的曲线方程和基点生成公钥和私钥，子算法 ECDHE 用于密钥交换，ECDSA 用于数字签名。")])]),t._v(" "),_("h3",{attrs:{id:"混合加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#混合加密"}},[t._v("#")]),t._v(" 混合加密")]),t._v(" "),_("p",[t._v("在对称加密算法中只要持有密钥就可以解密。如果你和网站约定的密钥在传递途中被黑客窃取，那他就可以在之后随意解密收发的数据，通信过程也就没有机密性可言了。")]),t._v(" "),_("p",[t._v("在非对称加密算法中，需要应用到复杂的数学运算，虽然保证了安全，但速度很慢，比对称加密算法差了好几个数量级。")]),t._v(" "),_("p",[t._v("所以，TLS 里使用了 “混合加密” 的方式博采众长：在通信刚开始的时候使用非对称加密算法，解决密钥交换的问题。后续全都使用对称加密进行通信。")]),t._v(" "),_("h3",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),_("p",[t._v("HTTP是明文传输的，很容易被黑客拦截盗取其中的敏感数据。因此有了HTTPS协议，HTTPS可以将数据加密传输，也就是传输的密文，即便被黑客拦截获取也无法破译。")]),t._v(" "),_("p",[t._v("HTTPS协议=HTTP协议+SSL/TLS协议")]),t._v(" "),_("p",[t._v("SSL/TLS协议就是对数据进行加密和解密的。")]),t._v(" "),_("p",[_("strong",[t._v("数据传输使用的是对称加密，密钥的传输使用的非对称加密")]),t._v("，具体的过程涉及第三方机构发布的数字证书。")]),t._v(" "),_("h3",{attrs:{id:"https和http的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https和http的区别"}},[t._v("#")]),t._v(" HTTPS和HTTP的区别")]),t._v(" "),_("ol",[_("li",[t._v("HTTP是超文本传输协议，信息是明文传输。HTTPS则是具有安全性的SSL加密传输协议。")]),t._v(" "),_("li",[t._v("HTTP和HTTPS用的端口不一样，HTTP端口时80，HTTPS是433。")]),t._v(" "),_("li",[t._v("HTTPS协议需要 CA机构申请证书，一般需要费用")]),t._v(" "),_("li",[t._v("HTTP运行在TCP协议之上；HTTPS运行在SSL协议之上，SSL运行在TCP协议之上。")])]),t._v(" "),_("h3",{attrs:{id:"数字证书"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[t._v("#")]),t._v(" 数字证书")]),t._v(" "),_("p",[_("strong",[t._v("为了公钥传输的信赖性问题")]),t._v("，第三方机构应运而生——证书颁发机构（CA，Certificate Authority）。CA默认是受信任的第三方。CA会给各个服务器颁发正式，证书存储在服务器上，并附有CA的电子签名。")]),t._v(" "),_("p",[t._v("当客户端向服务器发送HTTPS请求时，先获取目标服务器的证书，并根据证书上的信息检验证书的合法性，一旦检测到证书非法，就会发生错误。客户端获取了服务器的证书后，由于证书的信任性是由第三方信赖机构认证的，而证书上又包含了服务器的公钥信息，客户端就可以放心的信任证书上的公钥就是目标服务器的公钥。")]),t._v(" "),_("h3",{attrs:{id:"数字签名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),_("p",[t._v("数字签名是防止证书被伪造，第三方信赖机构CA之所以能被信赖，就是靠数字签名技术。CA在给服务器颁发证书时，使用散列+加密的组合技术，在证书上盖个章，以此来提供验伪的功能。")]),t._v(" "),_("p",[_("strong",[t._v("数字签名生成步骤")])]),t._v(" "),_("p",[t._v("CA 知道服务器的公钥，对该公钥采用散列技术生成一个摘要。CA 使用 CA 私钥对该摘要进行加密，并附在证书下方，发送给服务器。")]),t._v(" "),_("p",[_("strong",[t._v("客户端判断证书真实性")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("客户端请求服务器，服务器将该证书发送给客户端。客户端找到第三方机构 CA，获知 CA 的公钥，并用 CA 公钥对证书的签名进行解密，获得了 CA 生成的摘要。")])]),t._v(" "),_("li",[_("p",[t._v("客户端对数字签名的数据（也就是服务器的公钥，服务器的公钥在证书上）做相同的散列处理，得到摘要，并将该摘要与之前从签名中解码出的摘要做对比，如果相同，则身份验证成功；否则验证失败。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/CA-flow.png",alt:"image-20220714162129083"}})]),t._v(" "),_("h3",{attrs:{id:"https数据传输流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https数据传输流程"}},[t._v("#")]),t._v(" HTTPS数据传输流程")]),t._v(" "),_("ol",[_("li",[t._v("证书验证阶段：\n"),_("ol",[_("li",[t._v("浏览器发起HTTPS请求；")]),t._v(" "),_("li",[t._v("服务器返回HTTPS证书；")]),t._v(" "),_("li",[t._v("客户端验证证书是否合法，如果不合法则提示告警。")])])]),t._v(" "),_("li",[t._v("数据传输阶段\n"),_("ol",[_("li",[t._v("当证书验证合法后，在本地生成随机数；")]),t._v(" "),_("li",[t._v("通过公钥对随机数加密，并把加密后的随机数传送到服务端；")]),t._v(" "),_("li",[t._v("服务端通过私钥对随机数进行解密；")]),t._v(" "),_("li",[t._v("服务端通过客户端传入的随机数构造对称加密算法，随机数就是对称加密的密钥。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/https-diagram.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"tls-握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tls-握手"}},[t._v("#")]),t._v(" TLS 握手")]),t._v(" "),_("p",[t._v("TLS 握手则是为了验证身份、交换信息从而生成秘钥，为后续加密通信做准备。")]),t._v(" "),_("p",[t._v("不论客户端和服务端的连接走 HTTP 还是 TLS 协议，所有连接最初都要经过 TCP 三次握手，而 TLS 四次握手是在 TCP 建立连接之后进行的。因此，HTTPS 首次通信需要 7 次握手！")]),t._v(" "),_("p",[t._v("TLS 主要的两种握手方式，分别为：RSA 握手、DH 握手")]),t._v(" "),_("h3",{attrs:{id:"rsa-握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rsa-握手"}},[t._v("#")]),t._v(" RSA 握手")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/handshake-rsa.png",alt:"image-20220927123719547"}})]),t._v(" "),_("ol",[_("li",[t._v("浏览器向服务器发送随机数 client_random，TLS 版本和供筛选的加密套件列表。")]),t._v(" "),_("li",[t._v("服务器接收到，立即返回 server_random，确认好双方都支持的加密套件 以及数字证书 (证书中附带公钥 Public key certificate)。")]),t._v(" "),_("li",[t._v("浏览器接收，先验证数字证书。若通过，接着使用加密套件的密钥协商算法 RSA  算法生成另一个随机数 pre_random，并且用证书里的公钥加密，传给服务器。")]),t._v(" "),_("li",[t._v("服务器用私钥解密这个被加密后的 pre_random，参考 “非对称加密”。")])]),t._v(" "),_("p",[t._v("现在浏览器和服务器都拥有三样相同的凭证：client_random、server_random 和 pre_random。两者都用筛好的加密套件中的加密方法混合这三个随机数，生成最终的密钥。")]),t._v(" "),_("p",[t._v("最后，浏览器和服务器使用相同的密钥进行通信，即使用对称加密。")])])}),[],!1,null,null,null);_.default=r.exports}}]);