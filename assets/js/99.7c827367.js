(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{423:function(t,_,v){"use strict";v.r(_);var e=v(8),s=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mysql-执行计划-explain"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-执行计划-explain"}},[t._v("#")]),t._v(" MySQL 执行计划 EXPLAIN")]),t._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[t._v("使用 EXPLAIN 命令来查看某查询语句的执行计划，如：")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" name "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Student "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("可以查看到执行结果：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("id")]),t._v(" "),_("th",[t._v("select_type")]),t._v(" "),_("th",[t._v("table")]),t._v(" "),_("th",[t._v("partitions")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("possible_keys")]),t._v(" "),_("th",[t._v("key")]),t._v(" "),_("th",[t._v("key_len")]),t._v(" "),_("th",[t._v("ref")]),t._v(" "),_("th",[t._v("rows")]),t._v(" "),_("th",[t._v("filtered")]),t._v(" "),_("th",[t._v("Extra")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("SIMPLE")]),t._v(" "),_("td",[t._v("lecture")]),t._v(" "),_("td",[t._v("(NULL)")]),t._v(" "),_("td",[t._v("const")]),t._v(" "),_("td",[t._v("PRIMARY")]),t._v(" "),_("td",[t._v("PRIMARY")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("const")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("100.00")]),t._v(" "),_("td",[t._v("(NULL)")])])])]),t._v(" "),_("p",[t._v("下面解释一下这些参数的含义：")]),t._v(" "),_("ul",[_("li",[t._v("id：查询序列号，几个查询语句就有几行。id 越前优先级越高，越先执行")]),t._v(" "),_("li",[t._v("select_type：查询中每个 SELECT 子句的类型\n"),_("ul",[_("li",[t._v("SIMPLE：简单 SELECT 查询，未使用 UNION 和子查询")]),t._v(" "),_("li",[t._v("PRIMARY：查询包含任何复杂的子部分则被标记为 PRIMARY，PRIMARY 为最外层查询，最后执行")]),t._v(" "),_("li",[t._v("SUBQUERY：在 SELECT 或 WHERE 中包含的子查询")]),t._v(" "),_("li",[t._v("UNION：第 2 个 SELECT 在 UNION 只会，则被标记为 UNION")]),t._v(" "),_("li",[t._v("DEPENDENT UNION：含有 UNION 查询的第二个或最后一个表，依赖外部的查询")])])]),t._v(" "),_("li",[t._v("table：此处查询访问的表")]),t._v(" "),_("li",[t._v("partitions：该参数用于记录使用的分区信息，NULL 表示该表是不是分区表")]),t._v(" "),_("li",[t._v("type：连接类型，优化 sql 的重要字段，是判断 sql 性能和优化程度重要指标\n"),_("ul",[_("li",[t._v("执行效率 system > const > eq_ref > ref > range > index > ALL")]),t._v(" "),_("li",[t._v("system：是 const 的一种特例，只有一行满足条件。例如：只有一条数据的系统表")]),t._v(" "),_("li",[t._v("const：主键索引或者唯一索引，只能查到一条数据的 SQL")]),t._v(" "),_("li",[t._v("eq_ref：通常出现在多表的 join 查询，表示对于前表的每一个结果,，都只能匹配到后表的一行结果。一般是唯一性索引的查询（UNIQUE 或 PRIMARY KEY）。")]),t._v(" "),_("li",[t._v("system，const，eq_ref，都是可遇而不可求的，基本上很难优化到这个状态")]),t._v(" "),_("li",[t._v("ref：查询用到了非唯一性索引，或者关联操作只使用了索引的最左前缀")]),t._v(" "),_("li",[t._v("range：索引范围扫描，如果 where 后面是 between and 或 <或 > 或 >= 或 <=或 in 这些，type 类型就为 range")]),t._v(" "),_("li",[t._v("index：Full Index Scan，查询全部索引中的数据（比不走索引要快）")]),t._v(" "),_("li",[t._v("all：Full Table Scan，如果没有索引或者没有用到索引，type 就是 ALL。代表全表扫描。")])])]),t._v(" "),_("li",[t._v("possible keys：可能会走的索引")]),t._v(" "),_("li",[t._v("key：真正走的索引")]),t._v(" "),_("li",[t._v("key_len：索引长度，估计值，可能用于联合索引走了几个索引的判断，较长的索引长度可能会导致较慢的查询性能。")]),t._v(" "),_("li",[t._v("ref：命中索引的字段名，等值查询会是 const")]),t._v(" "),_("li",[t._v("rows：读取的数据量，越少越优")]),t._v(" "),_("li",[t._v("filterd：是百分比参数，估计值，命中字段占总行数比例，越高越好")]),t._v(" "),_("li",[t._v("extra：其他信息，比如是否排序，是否覆盖索引等待")])]),t._v(" "),_("h2",{attrs:{id:"简单案例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单案例"}},[t._v("#")]),t._v(" 简单案例")]),t._v(" "),_("p",[t._v("假设 corpID 类型为 varchar(20)，charset：utf8mb4，并且建立索引执行以下命令：")]),t._v(" "),_("div",{staticClass:"language-SQL line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" platform_company_info "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CorpID"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1297689")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n或\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" corpName "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" platform_company_info "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CorpID"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1297689")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("执行结果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("id")]),t._v(" "),_("th",[t._v("select_type")]),t._v(" "),_("th",[t._v("table")]),t._v(" "),_("th",[t._v("partitions")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("possible_keys")]),t._v(" "),_("th",[t._v("key")]),t._v(" "),_("th",[t._v("key_len")]),t._v(" "),_("th",[t._v("ref")]),t._v(" "),_("th",[t._v("rows")]),t._v(" "),_("th",[t._v("filtered")]),t._v(" "),_("th",[t._v("Extra")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("SIMPLE")]),t._v(" "),_("td",[t._v("xxxxxxx")]),t._v(" "),_("td",[t._v("(NULL)")]),t._v(" "),_("td",[t._v("ALL")]),t._v(" "),_("td",[t._v("ix_xx")]),t._v(" "),_("td",[t._v("(null)")]),t._v(" "),_("td",[t._v("(null)")]),t._v(" "),_("td",[t._v("(null)")]),t._v(" "),_("td",[t._v("9000")]),t._v(" "),_("td",[t._v("10")]),t._v(" "),_("td",[t._v("Using where")])])])]),t._v(" "),_("ul",[_("li",[t._v("select_type：简单 SELECT 查询，未使用 UNION 和子查询")]),t._v(" "),_("li",[t._v("type：ALL 全表扫描")]),t._v(" "),_("li",[t._v("possible_keys：可能会走的索引，但是没有走")]),t._v(" "),_("li",[t._v("rows：读取的数据量，读取了9000条，全表都读取了")]),t._v(" "),_("li",[t._v("filtered：命中比例，应该远小于1，不准确")])]),t._v(" "),_("div",{staticClass:"language-SQL line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" platform_company_info "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CorpID"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1297689'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n或\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" corpName "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" platform_company_info "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CorpID"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1297689'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("执行结果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("id")]),t._v(" "),_("th",[t._v("select_type")]),t._v(" "),_("th",[t._v("table")]),t._v(" "),_("th",[t._v("partitions")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("possible_keys")]),t._v(" "),_("th",[t._v("key")]),t._v(" "),_("th",[t._v("key_len")]),t._v(" "),_("th",[t._v("ref")]),t._v(" "),_("th",[t._v("rows")]),t._v(" "),_("th",[t._v("filtered")]),t._v(" "),_("th",[t._v("Extra")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("SIMPLE")]),t._v(" "),_("td",[t._v("xxxxxxx")]),t._v(" "),_("td",[t._v("(NULL)")]),t._v(" "),_("td",[t._v("ref")]),t._v(" "),_("td",[t._v("ix_xx")]),t._v(" "),_("td",[t._v("ix_xx")]),t._v(" "),_("td",[t._v("82")]),t._v(" "),_("td",[t._v("const")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td",[t._v("(NULL)")])])])]),t._v(" "),_("ul",[_("li",[t._v("type：ref，查询用到了非唯一性索引")]),t._v(" "),_("li",[t._v("possible_keys：可能会走的索引，与真实走的相同")]),t._v(" "),_("li",[t._v("key：真正走的索引 ix_xx")]),t._v(" "),_("li",[t._v("key_len：索引的长度，估计值，82个字节，估计索引长度应该为：20 * 4 + 1 = 81，utf8mb4中一个字符占4个字节，一个字节用于存储字段长度。")]),t._v(" "),_("li",[t._v("ref：命中索引的字段名，等职查询是 const")]),t._v(" "),_("li",[t._v("rows：命中行数，1行")]),t._v(" "),_("li",[t._v("filtered：命中比例，100%")])]),t._v(" "),_("blockquote",[_("p",[t._v("GBK编码：1个字符占用2个字节")]),t._v(" "),_("p",[t._v("UTF8编码：1个字符占用3个字节")]),t._v(" "),_("p",[t._v("UTF8MB4编码：1个字符占用4个字节")])]),t._v(" "),_("div",{staticClass:"language-SQL line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" platform_company_info "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" CorpID"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1297689'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("执行结果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("id")]),t._v(" "),_("th",[t._v("select_type")]),t._v(" "),_("th",[t._v("table")]),t._v(" "),_("th",[t._v("partitions")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("possible_keys")]),t._v(" "),_("th",[t._v("key")]),t._v(" "),_("th",[t._v("key_len")]),t._v(" "),_("th",[t._v("ref")]),t._v(" "),_("th",[t._v("rows")]),t._v(" "),_("th",[t._v("filtered")]),t._v(" "),_("th",[t._v("Extra")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("SIMPLE")]),t._v(" "),_("td",[t._v("xxxxxxx")]),t._v(" "),_("td",[t._v("(NULL)")]),t._v(" "),_("td",[t._v("range")]),t._v(" "),_("td",[t._v("ix_xx")]),t._v(" "),_("td",[t._v("ix_xx")]),t._v(" "),_("td",[t._v("82")]),t._v(" "),_("td",[t._v("const")]),t._v(" "),_("td",[t._v("555")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td",[t._v("Using index condition")])])])]),t._v(" "),_("p",[t._v("type：range 索引范围扫描")])])}),[],!1,null,null,null);_.default=s.exports}}]);