(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{370:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"volatile关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile关键字"}},[t._v("#")]),t._v(" Volatile关键字")]),t._v(" "),s("h2",{attrs:{id:"cpu-缓存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-缓存模型"}},[t._v("#")]),t._v(" CPU 缓存模型")]),t._v(" "),s("p",[t._v("CPU Cache 缓存是为了解决 CPU 处理速度和内存处理速度不对等的问题，内存缓存用于解决硬盘访问速度慢的问题，CPU 缓存用于解决内存访问慢的问题。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/CPU-Cache.png",alt:"image-20220303112745947"}}),t._v(" "),s("p",[t._v("CPU Cache工作方式：")]),t._v(" "),s("p",[t._v("先读取一份数据到CPU Cache，当CPU需要用到的时候直接从CPU Cache中读取数据，当运算完成后，再将运算得到的数据写回Main Memory中。但会出现"),s("strong",[t._v("内存缓存不一致")]),t._v("的问题。比如，两个线程同时执行i++操作，两个线程同时从CPU Cache中读取到i=1，两个线程做了1++运算完后再写回Memory后i=2，而正确结果应该是i=3。")]),t._v(" "),s("h2",{attrs:{id:"java-内存模型-jmm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型-jmm"}},[t._v("#")]),t._v(" Java 内存模型 JMM")]),t._v(" "),s("p",[t._v("是一种抽象概念，并不真实存在，它描述的是一组规则或规范。")]),t._v(" "),s("p",[t._v("Java内存模型抽象了线程和主内存之间的关系，比如线程之间共享变量必须存储在主内存中。Java内存模型主要目的是屏蔽系统和硬件差异，避免同一套代码在不同的平台产生不一致。")]),t._v(" "),s("p",[t._v("JMM关于同步的规定：")]),t._v(" "),s("p",[t._v("1 线程解锁前，必须把共享变量的值刷新回主内存。")]),t._v(" "),s("p",[t._v("2 线程加锁前，必须读取主内存的最新值到自己的工作内存。")]),t._v(" "),s("p",[t._v("3 加锁解锁是同一把锁。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://studynote-images.oss-cn-hangzhou.aliyuncs.com/Java-JMM.png",alt:"image-20220817134743867"}}),t._v(" "),s("p",[t._v("线程可以把变量保存在本地内存中，而不是直接在主内存中进行读写。这就可能造成了一个线程在主内存中修改了一个变量的值，而另一个线程还继续使用它在本地内存中的旧值，造成数据的不一致。")]),t._v(" "),s("blockquote",[s("p",[t._v("主内存：所有线程创建的实例对象都存放在主内存中，不管该实例对象是成员变量还是方法中的本地变量。")]),t._v(" "),s("p",[t._v("本地内存：每个线程私有的本地内存来存储共享变量和副本， 并且，每个线程只能访问自己的本地内存，无法访问其他线程的本地内存。本地内存是JMM抽象出来的概念，存储了主内存中的共享变量副本。")])]),t._v(" "),s("h2",{attrs:{id:"缓存一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性"}},[t._v("#")]),t._v(" 缓存一致性")]),t._v(" "),s("p",[t._v("通常称这种被多个线程访问的变量为共享变量。也就是说，一个变量在多个CPU中都存在缓存（一般多线程时才会出现），就可能出现缓存不一致的问题。")]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("ol",[s("li",[t._v("通过在总线上加锁的方式，使只能由一个 CPU 访问该变量的内存，只有等待这段代码执行完之后，CPU 才能从这个变量中读取值。")]),t._v(" "),s("li",[t._v("缓存一致协议，每个缓存中使用共享变量的副本。当 CPU 向内存写入数据时，如果发现操作的变量是共享变量，就会使其他副本中该变量的缓存行置为无效状态，当其他 CPU 需要读取整个变量时，发现自己缓存中该变量的缓存行是无效的，那么就会从内存中重新读取。")])]),t._v(" "),s("h2",{attrs:{id:"并发编程的三个重要特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程的三个重要特性"}},[t._v("#")]),t._v(" 并发编程的三个重要特性")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("原子性")]),t._v("：一组操作，要么全部执行并且不受任何因素的干扰而中断，要么都不执行。synchronized 保证代码片段的原子性。")]),t._v(" "),s("li",[s("strong",[t._v("可见性")]),t._v("：当一个线程对共享变量进行了修改，那么另外的线程都是立即可以看到修改后的最新值。volatile 关键字可以保证共享变量的可见性。")]),t._v(" "),s("li",[s("strong",[t._v("有序性")]),t._v("：代码在执行的过程中的先后顺序，Java 在编译器以及运行期间的优化，代码执行顺序未必就是编写代码时候的顺序。volatile 关键字可以进制指令进行重拍优化。")])]),t._v(" "),s("h2",{attrs:{id:"volatile-关键字的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字的作用"}},[t._v("#")]),t._v(" volatile 关键字的作用")]),t._v(" "),s("p",[t._v("是Java虚拟机提供的"),s("strong",[t._v("轻量级的同步机制")]),t._v("。")]),t._v(" "),s("p",[t._v("保证操作的可见性、有序性（禁止指令重排），但不能保证原子性。")]),t._v(" "),s("p",[t._v("⭐ "),s("strong",[t._v("可见性")]),t._v("：当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他的线程能立刻看到修改的值。")]),t._v(" "),s("blockquote",[s("p",[t._v("程序运行过程中的临时数据都是放在主存（物理内存）中，CPU执行速度很快，从内存中读写数据会大大降低效率。因此，CPU有了高速缓存，在程序运行时，会将运算需要的数据从主存中复制到CPU高速缓存中，CPU执行运算时就可以从高速缓存中读写数据，当程序运算完再存储到主存中。")]),t._v(" "),s("p",[t._v("单线程情况下不会出现任何问题；在多核CPU中，每条线程运行在不同CPU中，有不同的高速缓存，当他们读取公共数据进行操作时，没有及时将数据更新到主存中导致出现缓存一致性问题。")]),t._v(" "),s("p",[t._v("通过Volatile关键字，可以将修改的变量从高速缓存中立即更新到主存中，并且使其他CPU中该变量的缓存行无效，它只能从主存中重新读取。")])]),t._v(" "),s("p",[t._v("⭐ "),s("strong",[t._v("有序性")]),t._v("：程序执行的顺序按照代码先后执行的顺序。")]),t._v(" "),s("blockquote",[s("p",[t._v("指令重排序：一般来说，处理器为了提高程序运行效率，可能会对代码进行优化，它不保证程序中各个语句的执行先后顺序同代码中的顺序一致，但是它会保证程序最终执行结果和代码顺序执行的结果一致。")]),t._v(" "),s("p",[t._v("重排序不会影响单线程，但会影响多线程。")]),t._v(" "),s("p",[t._v("使用Volatile关键字，可以使在前面的代码一定在其前面全部执行完成，在其后面的代码一定都在其后面执行完成。")])]),t._v(" "),s("h2",{attrs:{id:"volatile-关键字可见性测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字可见性测试"}},[t._v("#")]),t._v(" volatile 关键字可见性测试")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" volatileTest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyData")]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" thread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", 修改前: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTO60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", 修改后: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 线程2：main线程，线程t1睡眠3s，保证线程2运行到此处，保证线程2已经读取到myData.numberData的值的时候线程1还没处理完毕。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果线程t1不睡眠3s，那么它很快计算完毕，并修改主内存中的值，没有等到线程2读取myData.numberDatade时，myData.numberData就变成了60。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('": "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyData")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numberData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// volatile int numberData = 0;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTO60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br")])]),s("h2",{attrs:{id:"volatile-关键字的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字的原理"}},[t._v("#")]),t._v(" volatile 关键字的原理")]),t._v(" "),s("p",[t._v("📢 "),s("strong",[t._v("内存屏障")]),t._v("（Memory Barrier）又称内存栅栏")]),t._v(" "),s("p",[t._v("是一个CPU指令，具有两个作用：")]),t._v(" "),s("p",[t._v("1 保证特定操作的顺序执行。由于编译器和处理器都能执行指令重排优化，如果在指令间插入一条 Memory Barrier 则会告诉编译器和处理器，不管什么指令都不能和这条 Memory Barrier 指令重新排序，也就是说"),s("strong",[t._v("通过插入内存屏障禁止在内存屏障前后的指令执行重新排序优化")]),t._v("。")]),t._v(" "),s("p",[t._v("2 保证某些变量的内存可见性。强制刷出各种 CPU 的缓存数据，因此 CPU 上的线程都能读取到这些数据的最新版本。")]),t._v(" "),s("p",[t._v("💻 对 Volatile 变量进行"),s("strong",[t._v("写操作")]),t._v("时：")]),t._v(" "),s("p",[t._v("会在写操作后加入一条 store 屏障指令，将工作内存中的共享变量值刷新回到主内存。")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/Volatile-Store.png",alt:"img"}}),t._v(" "),s("p",[t._v("💻 对 Volatile 变量进行"),s("strong",[t._v("读操作")]),t._v("时：")]),t._v(" "),s("p",[t._v("会在读操作前加入一条 load 屏障指令，从主内存中读取共享变量。")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/Volatile-load.png",alt:"img"}}),t._v(" "),s("h2",{attrs:{id:"synchronized-与-volatile-关键字的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-与-volatile-关键字的区别"}},[t._v("#")]),t._v(" synchronized 与 volatile 关键字的区别")]),t._v(" "),s("p",[t._v("两者是互补的存在。")]),t._v(" "),s("ul",[s("li",[t._v("volatile 是线程同步的轻量级实现，所以 volatile 性能肯定比 synchronized 好，但 volatile 只能用于变量，而 synchronized 关键字可以修饰方法和代码块。")]),t._v(" "),s("li",[t._v("volatile 能保证数据的可见性，但不能保证数据的原子性；synchronized 两者都能保证。")]),t._v(" "),s("li",[t._v("volatile 主要用于解决变量在多线程之间的可见性，而 synchronized 关键字解决的是多线程之间访问资源的同步性。")])]),t._v(" "),s("h2",{attrs:{id:"双重校验锁实现对象单例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双重校验锁实现对象单例"}},[t._v("#")]),t._v(" 双重校验锁实现对象单例")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" singleton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("ul",[s("li",[t._v("Volatile 关键字：禁止指令重排，正常顺序 1：为singleton分配内存、2：初始化singleton、3：将对象引用singleton指向内存地址；重排序的顺序可能为1、3、2，这样就会导致singlton还未初始化时"),s("code",[t._v("singleton!=null")]),t._v("。此时拿着singleton去操作就会导致错误。")]),t._v(" "),s("li",[t._v("第一次校验：校验是否已经创建对象，如果创建了就直接返回，不加锁提高效率。")]),t._v(" "),s("li",[t._v("第二次校验：同步代码块中，判断对象是否已经创建；因为多线程的原因，A、B线程可能会同时运行到"),s("code",[t._v("singleton==null")]),t._v("，之后其中A进入同步代码块，B等待，A在同步代码块中创建完对象后释放锁，B会进入同步代码块，如果此时不进行判断，B将重新创建一个对象。")])]),t._v(" "),s("h2",{attrs:{id:"volatile-能不能保证-i-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-能不能保证-i-安全"}},[t._v("#")]),t._v(" volatile 能不能保证 i++安全")]),t._v(" "),s("p",[t._v("不能，volatile只能保证可见性和有序性，不能保证原子性。")]),t._v(" "),s("p",[t._v("i++ 并不是原子操作，它分为3步执行。1 从工作内存中读取i值；2 进行计算；3 将值赋值给i。用 volatile 修饰虽然保证了从工作内存写入主内存后，其他线程工作内存的可见性。但无法影响其他线程 cpu 已执行的 i++ 步骤。从而导致了使用 volatile 也不是线程安全的。")]),t._v(" "),s("p",[t._v("i++ 操作可以使用 synchronized 锁，或者使用 AtomicInteger。")])])}),[],!1,null,null,null);s.default=e.exports}}]);