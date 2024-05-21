(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{432:function(s,e,a){"use strict";a.r(e);var t=a(8),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis数据结构"}},[s._v("#")]),s._v(" Redis数据结构")]),s._v(" "),e("blockquote",[e("p",[s._v("命令不区分大小写，Key区分大小写")]),s._v(" "),e("p",[s._v("help @数据结构：查看指令")])]),s._v(" "),e("h2",{attrs:{id:"_1-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-string"}},[s._v("#")]),s._v(" 1 String")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：简单动态字符串（SDS），通过key获得value")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("普通命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("设置：set <key> <value>\n获取：get <key>\n批量设置：mset <k1> <v1> <k2> <v2> ...\n批量获取：mget <k1> <k2> ...\n递增数字：INCR <key>\n增加指定的整数：INCRBY <key> <increment>\n递减数字：DECR <key>\n递减指定的整数：DECRBY <key> <increment>\n获取字符串长度：STRLEN key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("分布式命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("setnx <key> <value>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("不存在创建，存在不创建")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set <key> <value> [EX seconds] [PX milliseconds] [NX|XX]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("EX: key在多少秒之后过期")]),s._v(" "),e("p",[s._v("PX: key在多少毫秒之后过期")]),s._v(" "),e("p",[s._v("NX: 当key不存在的时候，才创建key，等效于setnx")]),s._v(" "),e("p",[s._v("XX: 当key存在的时候，覆盖key")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SET k1 v1 NX PX 3000   当key不存在的时候才能创建，过期时间为3000ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：一般常用在需要计数的场景，比如用户的访问次数、热点文章的点赞转发数量等等。或者封锁一个IP地址。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("incr likes:001  统计001的点赞数量\nget likes:001   获取001的点赞数量\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2-hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-hash"}},[s._v("#")]),s._v(" 2 Hash")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：等价于Java的"),e("code",[s._v("Map<String, Map<...>>")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("设置一个字段值：HSET <key> <field> <value>\n获取一个字段值：HGET <key> <field>\n设置多个字段值：HMSET <key> <field> <value> [<field> <value> ...] \n获取多个字段值：HMGET <key> <field> <value> [<field> <value> ...] \n获取所有字段值：hgetall <key>\n获取某个key的属性数量：hlen <key>\n删除某个key：hdel <key>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("系统中对象数据存储，比如用户信息（id，name，age）")])]),s._v(" "),e("li",[e("p",[s._v("购物车")]),s._v(" "),e("ol",[e("li",[s._v("新增商品 hset shopcar:uid1024 334488 1")]),s._v(" "),e("li",[s._v("新增商品 hset shopcar:uid1024 334477 1")]),s._v(" "),e("li",[s._v("增加商品数量 hincrby shopcar:uid1024 334477 1")]),s._v(" "),e("li",[s._v("商品总数 hlen shopcar:uid1024")]),s._v(" "),e("li",[s._v("全部选择 hgetall shopcar:uid1024")])])])]),s._v(" "),e("h2",{attrs:{id:"_3-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-list"}},[s._v("#")]),s._v(" 3 List")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：实现双向链表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("压入：lpush/rpush <key> <value> [<value> ...]\n弹出：lpop/rpop <key>\n显示全部：lrange <key>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：发布与订阅、消息队列、慢查询、实现最新消息的排行。")]),s._v(" "),e("blockquote",[e("p",[s._v("关注公众号A和B，只要他们发布新文章就会压入到我的list中")]),s._v(" "),e("p",[s._v("lpush followaccount:uid1024 公众号A的文章")]),s._v(" "),e("p",[s._v("lpush followaccount:uid1024 公众号B的文章 ...")]),s._v(" "),e("p",[s._v("我显示最近10条公众号消息：lrange followaccount:uid1024 0 10")])]),s._v(" "),e("h2",{attrs:{id:"_4-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-set"}},[s._v("#")]),s._v(" 4 Set")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：类似于Java的HashSet，无序，不重复")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("添加元素：SADD <key> <member> [<member> ...]\n删除元素：SREM <key> <member> [<member> ...]\n获取集合中所有的元素：smembers <key>\n判断元素是否在集合中：sismember <key> <member>\n获取集合中的元素个数：scard <key>\n从集合中随机弹出x个元素，元素不删除：srandmember <key> [数字]\n从集合中随机弹出x个元素，元素被删除：spop <key> [数字]\n集合运算-差集-属于A但不属于B元素构成的集合：SDIFF key [key ...]\n集合运算-交集-属于A也属于B元素构成的集合：SINTER key [key ...]\n集合运算-并集-属于A或者属于B元素构成的集合：SUNION key [key ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：需要存放的数据不能删除以及需要获取多个数据源交集和并集等场景。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("抽奖：抽一个获奖者 spop members 1，抽三个获奖者 spop members 3")])]),s._v(" "),e("li",[e("p",[s._v("好友：微博中每个人的好友存在Set中，可以防止重复")])]),s._v(" "),e("li",[e("p",[s._v("微博好友共同关注：sinter 用户1 用户2")])]),s._v(" "),e("li",[e("p",[s._v("微信朋友圈点赞")]),s._v(" "),e("ol",[e("li",[s._v("新增点赞：sadd pub:msgID 点赞用户ID1 点赞用户ID2 ...")]),s._v(" "),e("li",[s._v("取消点赞：srem pub:msgID 点赞用户ID1")]),s._v(" "),e("li",[s._v("展现所有点赞用户：smembers pub:msgID")]),s._v(" "),e("li",[s._v("点赞数：scard pub:msgID")]),s._v(" "),e("li",[s._v("判断某个朋友是否对楼主点赞：sismember pub:msgID 用户ID")])])]),s._v(" "),e("li",[e("p",[s._v("QQ推荐可能认识的人：先用"),e("code",[s._v("sinter 用户1 用户2")]),s._v("看看共同好友，然后通过"),e("code",[s._v("sdiff 用户1 用户2")]),s._v("找出用户2可能认识的人")])])]),s._v(" "),e("h2",{attrs:{id:"_5-sorted-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-sorted-set"}},[s._v("#")]),s._v(" 5 Sorted Set")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：与set相比，增加了一个权重参数score，使集合中的元素能够按照score进行有序排列，还可通过score的范围来获取元素列表，像Java中HashMap和TreeSet的结合体。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("添加元素：zadd <key> <score1> <member1> [<score2> <member2> ...]\n按照元素分数从小到大的顺序，返回从start到stop之间的所有元素：zrange <key> start stop [WITHSCORES]\n获取元素的分数：zscore <key> <member>\n删除元素：zrem key member [member ...]\n获取指定分数范围的元素：zrangebyscore <key> <min> <max> [WITHSCORES] [LIMIT offset count]\n增加某个元素的分数：zincrby <key> <increment> <member>\n获取集合中元素的数量：zcard <key>\n获得指定分数范围内的元素数量：zcount <key> <min> <max>\n按照排名范围删除元素：zremrangebyranke <key> <start> <stop>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：需要对数据根据某个权重进行排序的场景。比如再直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕信息等信息。")]),s._v(" "),e("p",[s._v("根据销售额对商品排序：")]),s._v(" "),e("ol",[e("li",[s._v("商品编号1001销量是9，商品编号1002销量是15：zadd goods:sellsort 9 1001 15 1002")]),s._v(" "),e("li",[s._v("客户买了2件1001：zincrby goods:sellsort 2 1001")]),s._v(" "),e("li",[s._v("商品销量前10：zrange goods:sellsort 0 10 withscores")])]),s._v(" "),e("h2",{attrs:{id:"_6-bitmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-bitmap"}},[s._v("#")]),s._v(" 6 Bitmap")]),s._v(" "),e("p",[s._v("🔶 "),e("strong",[s._v("介绍")]),s._v("：存储二进制数字，只需要一个bit位来表示某个元素对应的值和状态，key是元素本身。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("setbit <key> <offset> <value>\ngetbit <key> <offset>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("🔶 "),e("strong",[s._v("应用场景")]),s._v("：适合需要保存状态信息并需要进一步对这些信息进行分析的场景。如用户签到、活跃用户、用户行为统计（一周的签到情况，7位就行，通过bitcount sign 命令统计）")]),s._v(" "),e("p",[s._v("https://blog.csdn.net/DrLai/article/details/123767851")]),s._v(" "),e("h2",{attrs:{id:"_7-hyperloglog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-hyperloglog"}},[s._v("#")]),s._v(" 7 HyperLogLog")]),s._v(" "),e("h2",{attrs:{id:"_8-geo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-geo"}},[s._v("#")]),s._v(" 8 GEO")])])}),[],!1,null,null,null);e.default=n.exports}}]);