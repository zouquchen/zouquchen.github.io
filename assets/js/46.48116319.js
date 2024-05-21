(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{369:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[s._v("#")]),s._v(" 线程池")]),s._v(" "),t("h2",{attrs:{id:"使用线程池的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用线程池的好处"}},[s._v("#")]),s._v(" 使用线程池的好处")]),s._v(" "),t("p",[s._v("处理过程中将任务放入队列，如果线程数量超过最大数量，超出数量的线程排队等候。")]),s._v(" "),t("p",[s._v("线程复用，控制最大并发数，管理线程。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("降低资源消耗")]),s._v("，通过重复利用已创建的线程，降低线程创建和销毁造成的消耗。")]),s._v(" "),t("li",[t("strong",[s._v("执行响应速度快")]),s._v("，当任务到达时，任务可以不需要等到线程创建就能立即执行。")]),s._v(" "),t("li",[t("strong",[s._v("提高线程的可管理性")]),s._v("，线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。")])]),s._v(" "),t("h2",{attrs:{id:"executor启动线程的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executor启动线程的好处"}},[s._v("#")]),s._v(" Executor启动线程的好处")]),s._v(" "),t("p",[s._v("通过Executor来启动线程比使用Thread的start方法更好，方便管理、效率高、避免this逃逸问题。")]),s._v(" "),t("blockquote",[t("p",[s._v("this逃逸是指在构造函数返回之前其他线程就持有该对象的引用。调用尚未构造完全的对象的方法可能引发令人疑惑的错误。")])]),s._v(" "),t("p",[s._v("Executor框架不仅包括线程池的管理，还提供线程工厂、队列以及拒绝策略等，Executor框架让并发编程更简单。")]),s._v(" "),t("h2",{attrs:{id:"线程实现类threadpoolexectuor类简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程实现类threadpoolexectuor类简单介绍"}},[s._v("#")]),s._v(" 线程实现类ThreadPoolExectuor类简单介绍")]),s._v(" "),t("p",[s._v("提供四个构造方法，来看看最长的构造方法：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n* 用给定的初始参数创建一个新的ThreadPoolExecutor。\n*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线程池的核心线程数量")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线程池的最大线程数")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当线程数大于核心线程数时，多余的空闲线程存活的最长时间")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//时间单位")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//任务队列，用来储存等待执行任务的队列")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线程工厂，用来创建线程，一般默认即可")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//拒绝策略，当提交的任务过多而不能及时处理时，我们可以定制策略来处理任务")]),s._v("\n                         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("corePoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        maximumPoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        maximumPoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" corePoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        keepAliveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IllegalArgumentException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workQueue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" threadFactory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" handler "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NullPointerException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("corePoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maximumPoolSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("workQueue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keepAliveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toNanos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("threadFactory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handler "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[t("strong",[s._v("七大参数")])]),s._v(" "),t("ul",[t("li",[s._v("corePoolSize：核心线程数量，它的数量决定了添加的任务是开辟新的线程去执行，还是放到workQueue任务队列中。")]),s._v(" "),t("li",[s._v("maximumPoolSize：最大线程数量，这个参数会根据你使用的workQueue任务队列的类型，决定线程池会开辟的最大线程数量。")]),s._v(" "),t("li",[s._v("keepAliveTime：当前线程池中空闲线程数量超过corePoolSize时，多余的线程会多长时间内被销毁。")]),s._v(" "),t("li",[s._v("unit：keepAliveTime的单位")]),s._v(" "),t("li",[s._v("workQueue：任务队列，用来存储等待执行任务的队列；它一般分为直接提交队列、有界任务队列、无界任务队列、优先队列。")]),s._v(" "),t("li",[s._v("threadFactory：线程工厂，用于线程创建，一般默认即可。")]),s._v(" "),t("li",[s._v("handler：拒绝策略；当任务太多来不及处理时，可以定制策略来处理任务。")])]),s._v(" "),t("h2",{attrs:{id:"threadpoolexecutor核心线程数量和最大线程数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadpoolexecutor核心线程数量和最大线程数量"}},[s._v("#")]),s._v(" ThreadPoolExecutor核心线程数量和最大线程数量")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("提交的新任务少于corePoolSize，即使其他工作线程处于空闲状态，也会创建新线程处理。")])]),s._v(" "),t("li",[t("p",[s._v("提交的新任务大于corePoolSize，小于maximumPoolSize，只有当队列已满时才会创建新线程")])]),s._v(" "),t("li",[t("p",[s._v("通过设置corePoolSize和maximumPoolSize相同，可以创建固定大小的线程池。")])]),s._v(" "),t("li",[t("p",[s._v("将maximumPoolSize设置为Integer.MAX_VALUE，可以容纳任意数量的并发数量。")])]),s._v(" "),t("li",[t("p",[s._v("可以使用setCorePoolSize和setMaximumSize进行动态更改。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/ThreadPool-createThread.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"线程池的底层工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池的底层工作原理"}},[s._v("#")]),s._v(" 线程池的底层工作原理")]),s._v(" "),t("p",[s._v("1 提交任务后，如果核心线程数量没有满，则创建新线程来执行任务。")]),s._v(" "),t("p",[s._v("2 提交任务后，如果核心线程数量已满，则将任务放入等待队列。")]),s._v(" "),t("p",[s._v("3 当等待队列已满时，且没有达到最大线程数量，则创建新线程来执行任务。")]),s._v(" "),t("p",[s._v("4 当等待队列已满时，且达到最大线程数量时，新提交任务将被拒绝。")]),s._v(" "),t("p",[s._v("5 当队列中的任务执行完毕时，空闲线程空闲的时间超过keepAliveTime，则关闭空闲线程。（超过核心数量的线程为空闲线程）")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://studynote-images.oss-cn-hangzhou.aliyuncs.com/ThreadPool-createThread2.png",alt:"image-20220817142207943"}}),s._v(" "),t("h2",{attrs:{id:"线程数量的选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程数量的选择"}},[s._v("#")]),s._v(" 线程数量的选择")]),s._v(" "),t("p",[s._v("首先查看CPU核心数量：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("availableProcessors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("📌 "),t("strong",[s._v("CPU密集型")])]),s._v(" "),t("p",[s._v("CPU密集型任务配置尽可能少的线程数量，一般：CPU核数 + 1个线程 的线程池")]),s._v(" "),t("p",[s._v("📌 "),t("strong",[s._v("IO密集型")])]),s._v(" "),t("p",[s._v("由于IO密集型任务线程并不是一直在执行任务，则应配置尽可能多的线程")]),s._v(" "),t("p",[s._v("（1）CPU核数*2")]),s._v(" "),t("p",[s._v("（2）CPU核数 / (1 - 阻塞系数)，阻塞系数在0.8~0.9之间")]),s._v(" "),t("h2",{attrs:{id:"threadpoolexecutor拒绝策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadpoolexecutor拒绝策略"}},[s._v("#")]),s._v(" ThreadPoolExecutor拒绝策略")]),s._v(" "),t("p",[s._v("队列已满且线程池创建的线程数量达到最大线程数时，需要指定拒绝策略来处理线程池超载的情况。")]),s._v(" "),t("ol",[t("li",[s._v("AbortPolicy策略（默认）：直接抛出RejectedExecutionException异常，阻止系统正常运行。")]),s._v(" "),t("li",[s._v("CallerRunsPolicy策略：如果线程池的线程数量达到上限，该策略会把任务队列中的任务放在调用者线程当中运行。")]),s._v(" "),t("li",[s._v("DiscardOldestPolicy策略：抛弃队列中等待最久的任务，然后把当前任务加入队列中尝试再次提交当前任务。")]),s._v(" "),t("li",[s._v("DiscardPolicy策略：直接丢弃任务。")])]),s._v(" "),t("h2",{attrs:{id:"自定义创建线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义创建线程池"}},[s._v("#")]),s._v(" 自定义创建线程池")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" threadPool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingDeque")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defaultThreadFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AbortPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"三种创建线程池的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三种创建线程池的方法"}},[s._v("#")]),s._v(" 三种创建线程池的方法")]),s._v(" "),t("p",[s._v("⭐ "),t("strong",[s._v("newFixedThreadPool")])]),s._v(" "),t("p",[s._v("特点：执行长期的任务，性能好很多")]),s._v(" "),t("p",[s._v("固定线程数的线程池，corePoolSize和maximumPoolSize值相同，keepAliveTIme为0，等待队列为LinkedBlockingQueue")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MILLISECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("⭐ "),t("strong",[s._v("newSingleThreadExecutor")])]),s._v(" "),t("p",[s._v("特点：一个任务一个任务执行的场景")]),s._v(" "),t("p",[s._v("corePoolSize和maximumPoolSize值均为1，其他参数与FixedThreadPool相同。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FinalizableDelegatedExecutorService")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MILLISECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("⭐ "),t("strong",[s._v("newCachedThreadPoolPool")])]),s._v(" "),t("p",[s._v("特点：执行很多短期异步的小程序或者负载较轻的服务器")]),s._v(" "),t("p",[s._v("corePoolSize为0，maximumPoolSize为Integer.MAX_VALUE，KeepAliveTime为60L，使用无容量的SynchronousQueue作为队列。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("案例：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolDemo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一池5个处理线程")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" threadPool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一池1个处理线程")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ExecutorService threadPool = Executors.newFixedThreadPool(5);")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一池N个处理线程")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ExecutorService threadPool = Executors.newCachedThreadPool();")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                threadPool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t 处理业务"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            threadPool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("存在问题：阻塞队列使用LinkedBlockingQueue，允许请求队列长度为Integer.MAX_VALUE，可能会堆积大量的请求，从而导致OOM。")]),s._v(" "),t("h2",{attrs:{id:"阻塞队列blockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列blockingqueue"}},[s._v("#")]),s._v(" 阻塞队列BlockingQueue")]),s._v(" "),t("p",[s._v("支持"),t("strong",[s._v("两个附加操作")]),s._v("的队列，分别为：")]),s._v(" "),t("p",[s._v("当阻塞队列为空时，从队列中"),t("strong",[s._v("获取")]),s._v("元素的操作将被阻塞。")]),s._v(" "),t("p",[s._v("当组设队列为满时，往队列里"),t("strong",[s._v("添加")]),s._v("元素的操作将被阻塞。")]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/Java-BlockingQueue.png",alt:"image-20220817142603078"}}),s._v(" "),t("p",[s._v("试图从空的阻塞队列中获取元素的线程将会被阻塞，直到其他的线程往空的队列插入新的元素。")]),s._v(" "),t("p",[s._v("试图往已满的阻塞队列中添加新的元素的线程将会被阻塞，直到其他的线程从队列中移除一个或多个元素。")]),s._v(" "),t("p",[s._v("具有以下七种实现类：")]),s._v(" "),t("ul",[t("li",[s._v("⭐ArrayBlockingQueue：由数组结构组成的有界阻塞队列，构造时需要指明大小，FIFO。")]),s._v(" "),t("li",[s._v("⭐LinkedBlockingQueue：由链表结构组成的有界阻塞队列（默认大小Integer.MAX_VALUE，有界但等同于无界），可指明大小，也可不指明大小，FIFO。")]),s._v(" "),t("li",[s._v("PriorityBlockingQueue：支持优先级排序的无界阻塞队列，依据对象的自然排序顺序或者构造函数所带的Comaprator决定顺序。")]),s._v(" "),t("li",[s._v("DelayQueue：使用优先级队列实现的延迟无解阻塞队列。")]),s._v(" "),t("li",[s._v("⭐SynchronousQueue：不存储元素的阻塞队列，也即单个元素的队列，对齐的操作必须是放和取交替完成。")]),s._v(" "),t("li",[s._v("LinkedTransferQueue：由链表结构组成的无界阻塞队列")]),s._v(" "),t("li",[s._v("LinkedBlockingDeque：由链表结构组成的双向阻塞队列")])]),s._v(" "),t("p",[s._v("使用阻塞队列，不需要关心什么时候需要阻塞线程，什么时候唤醒线程，因为这一切BlockingQueue都帮我们解决了。在JUC包发布之前，在多线程环境下，每个程序员都必须自己控制这些细节。")]),s._v(" "),t("h2",{attrs:{id:"阻塞队列操作详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列操作详解"}},[s._v("#")]),s._v(" 阻塞队列操作详解")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th",[s._v("Throws exception")]),s._v(" "),t("th",[s._v("Special value")]),s._v(" "),t("th",[s._v("Blocks")]),s._v(" "),t("th",[s._v("Times out")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Insert")]),s._v(" "),t("td",[s._v("add(e)")]),s._v(" "),t("td",[s._v("offer(e)")]),s._v(" "),t("td",[s._v("put(e)")]),s._v(" "),t("td",[s._v("offer(e, time, unit)")])]),s._v(" "),t("tr",[t("td",[s._v("Remove")]),s._v(" "),t("td",[s._v("remove()")]),s._v(" "),t("td",[s._v("poll()")]),s._v(" "),t("td",[s._v("take()")]),s._v(" "),t("td",[s._v("poll(time, unit)")])]),s._v(" "),t("tr",[t("td",[s._v("Examine")]),s._v(" "),t("td",[s._v("element()")]),s._v(" "),t("td",[s._v("peek()")]),s._v(" "),t("td",[s._v("not applicable")]),s._v(" "),t("td",[s._v("not applicable")])])])]),s._v(" "),t("p",[s._v("抛出异常（Throws exception）：")]),s._v(" "),t("ul",[t("li",[s._v("队列满时，再add插入元素会抛出异常"),t("code",[s._v("IllegalStateException: Queue full")])]),s._v(" "),t("li",[s._v("队列空时，再remove溢出元素会抛出异常"),t("code",[s._v("NoSuchElementException")])])]),s._v(" "),t("p",[s._v("特殊值（Special Value）：")]),s._v(" "),t("ul",[t("li",[s._v("插入offer方法，成功true，失败false")]),s._v(" "),t("li",[s._v("移除poll方法，成功返回元素，失败返回null")])]),s._v(" "),t("p",[s._v("阻塞（Blocks）")]),s._v(" "),t("ul",[t("li",[s._v("队列满时，生产者线程put元素，队列会一直阻塞生产线程知道put数据成功。")]),s._v(" "),t("li",[s._v("队列空时，消费者线程take元素，队列会一直阻塞消费者线程知道队列有可用元素。")])]),s._v(" "),t("p",[s._v("超时退出（Times out）")]),s._v(" "),t("ul",[t("li",[s._v("队列满时，添加元素会阻塞线程一定时间，超过时间后生产者线程会退出返回false。")]),s._v(" "),t("li",[s._v("队列空时，获取元素会组设线程一定时间，超过时间后消费者线程会退出返回false。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);