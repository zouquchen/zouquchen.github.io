(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{440:function(s,a,t){"use strict";t.r(a);var e=t(8),_=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis集群-redis集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis集群-redis集群"}},[s._v("#")]),s._v(" Redis集群 — Redis集群")]),s._v(" "),a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[s._v("#")]),s._v(" 1. 介绍")]),s._v(" "),a("p",[s._v("Redis 集群主要针对海量数据 + 高并发 + 高可用的场景。")]),s._v(" "),a("p",[s._v("参考："),a("a",{attrs:{href:"https://blog.csdn.net/xueguchen/article/details/109847085",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 集群原理"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("redis 集群是一个由"),a("strong",[s._v("多个主从节点群组")]),s._v("成的分布式服务器群，它具有复制、高可用和分片特性。Redis 集群不需要 sentinel 哨兵也能完成节点移除和故障转移的功能。需要将每个节点设置成集群模式，这种集群模式没有中心节点，可水平扩展，据官方文档称可以线性扩展到上万个节点（官方推荐不超过1000个节点）。redis集群的性能和高可用性均优于之前版本的哨兵模式，且集群配置非常简单。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/Redis-cluster1.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_2-辨析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-辨析"}},[s._v("#")]),s._v(" 2. 辨析")]),s._v(" "),a("h3",{attrs:{id:"_2-1-redis-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-redis-主从复制"}},[s._v("#")]),s._v(" 2.1 Redis 主从复制")]),s._v(" "),a("p",[s._v("是高可用Redis的基础，哨兵和集群都是在主从复制基础上实现高可用的。主从复制主要实现了数据的多机备份，以及对于读操作的负载均衡和简单的故障恢复。缺陷：故障恢复无法自动化；写操作无法负载均衡；存储能力受到单机的限制。")]),s._v(" "),a("p",[s._v("主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(Master)，后者称为从节点(Slave)；数据的复制是单向的，只能由主节点到从节点。")]),s._v(" "),a("p",[s._v("作用：")]),s._v(" "),a("ul",[a("li",[s._v("数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。")]),s._v(" "),a("li",[s._v("故障恢复：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。")]),s._v(" "),a("li",[s._v("负载均衡：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务，分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。")]),s._v(" "),a("li",[s._v("高可用基石：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础。")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-redis-哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-redis-哨兵"}},[s._v("#")]),s._v(" 2.2 Redis 哨兵")]),s._v(" "),a("p",[s._v("在主从复制的基础上，哨兵实现了自动化的故障恢复。缺陷：写操作无法负载均衡；存储能力受到单机的限制；哨兵无法对从节点进行自动故障转移，在读写分离场景下，从节点故障会导致读服务不可用，需要对从节点做额外的监控、切换操作。")]),s._v(" "),a("h3",{attrs:{id:"_2-3-redis-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-redis-集群"}},[s._v("#")]),s._v(" 2.3 Redis 集群")]),s._v(" "),a("p",[s._v("通过集群，Redis解决了写操作无法负载均衡，以及存储能力受到单机限制的问题，实现了较为完善的高可用方案。")]),s._v(" "),a("h2",{attrs:{id:"_3-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-原理"}},[s._v("#")]),s._v(" 3. 原理")]),s._v(" "),a("p",[s._v("Redis Cluster 将所有数据划分为 16384 个 slots(槽位)，每个节点负责其中一部分槽位。槽位的信息存储于每个节点中。")]),s._v(" "),a("p",[s._v("当 Redis Cluster 的客户端来连接集群时，它也会得到一份集群的槽位配置信息并将其缓存在客户端本地。这样当客户端要查找某个 key 时，可以直接定位到目标节点。同时因为槽位的信息可能会存在客户端与服务器不一致的情况，还需要纠正机制来实现槽位信息的校验调整。")]),s._v(" "),a("h3",{attrs:{id:"_3-1-槽位定位算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-槽位定位算法"}},[s._v("#")]),s._v(" 3.1 槽位定位算法")]),s._v(" "),a("p",[s._v("Cluster 默认会对 key 值使用 crc16 算法进行 hash 得到一个整数值，然后用这个整数值对 16384 进行取模来得到具体槽位。")]),s._v(" "),a("p",[a("code",[s._v("HASH_SLOT = CRC16(key) mod 16384")])]),s._v(" "),a("h3",{attrs:{id:"_3-2-跳转重定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-跳转重定位"}},[s._v("#")]),s._v(" 3.2 跳转重定位")]),s._v(" "),a("p",[s._v("当客户端向一个错误的节点发出了指令，该节点会发现指令的 key 所在的槽位并不归自己管理，这时它会向客户端发送一个特殊的跳转指令携带目标操作的节点地址，告诉客户端去连这个节点去获取数据。客户端收到指令后除了跳转到正确的节点上去操作，还会同步更新纠正本地的槽位映射表缓存，后续所有 key 将使用新的槽位映射表。")]),s._v(" "),a("h3",{attrs:{id:"_3-3-选举原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-选举原理"}},[s._v("#")]),s._v(" 3.3 选举原理")]),s._v(" "),a("p",[s._v("当 slave 发现自己的 master 变为 FAIL 状态时，便尝试进行 Failover，来成为新的master。由于挂掉的 master 可能会有多个slave，从而存在多个slave竞争成为master节点的过程：")]),s._v(" "),a("ol",[a("li",[s._v("slave 发现自己的 master 变为 FAIL")]),s._v(" "),a("li",[s._v("将自己记录的集群 currentEpoch 加 1，并广播 FAILOVER_AUTH_REQUEST 信息")]),s._v(" "),a("li",[s._v("其他节点收到该信息，只有 master 响应，判断请求者的合法性，并发送 FAILOVER_AUTH_ACK，对每一个 epoch 只发送一次 ack")]),s._v(" "),a("li",[s._v("尝试 failover 的 slave 收集 master 返回的 FAILOVER_AUTH_ACK")]),s._v(" "),a("li",[s._v("slave 收到超过半数 master 的 ack 后变成新 Master")]),s._v(" "),a("li",[s._v("slave 广播 Pong 消息通知其他集群节点")])]),s._v(" "),a("p",[s._v("注意：从节点并不是在主节点一进入 FAIL 状态就马上尝试发起选举，而是有一定延迟，一定的延迟确保我们等待 FAIL 状态在集群中传播，slave 如果立即尝试选举，其它 masters 或许尚未意识到 FAIL 状态，可能会拒绝投票")]),s._v(" "),a("p",[s._v("延迟计算公式："),a("code",[s._v("DELAY = 500ms + random(0 ~ 500ms) + SLAVE_RANK * 1000ms")])]),s._v(" "),a("p",[s._v("SLAVE_RANK 表示此 slave 已经从 master 复制数据的总量的 rank。Rank 越小代表已复制的数据越新。这种方 式下，持有最新数据的 slave 将会首先发起选举（理论上）")]),s._v(" "),a("h3",{attrs:{id:"_3-4-分布式寻找算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-分布式寻找算法"}},[s._v("#")]),s._v(" 3.4 分布式寻找算法")]),s._v(" "),a("h4",{attrs:{id:"_3-4-1-hash-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-hash-算法"}},[s._v("#")]),s._v(" 3.4.1 hash 算法")]),s._v(" "),a("p",[s._v("来了一个 key，首先计算 hash 值，然后对节点数取模。然后打在不同的 master 节点上。一旦某一个 master 节点宕机，所有请求过来，都会基于最新的剩余 master 节点数去取模，尝试去取数据。这会导致"),a("strong",[s._v("大部分的请求过来，全部无法拿到有效的缓存")]),s._v("，导致大量的请求涌入数据库。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/hash.png",alt:"hash"}})]),s._v(" "),a("h4",{attrs:{id:"_3-4-2-一致性哈希算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-一致性哈希算法"}},[s._v("#")]),s._v(" 3.4.2 一致性哈希算法")]),s._v(" "),a("p",[s._v("一致性 hash 算法将整个 hash 值空间组织成一个虚拟的圆环，整个空间按顺时针方向组织，将各个 master 节点（使用服务器的 ip 或主机名）进行 hash。这样就能确定每个节点在其哈希环上的位置。")]),s._v(" "),a("p",[s._v("来了一个 key，首先计算 hash 值，并确定此数据在环上的位置，从此位置沿环"),a("strong",[s._v("顺时针“行走”")]),s._v("，遇到的第一个 master 节点就是 key 所在位置。")]),s._v(" "),a("p",[s._v("在一致性哈希算法中，如果一个节点挂了，受影响的数据仅仅是此节点到环空间前一个节点（沿着逆时针方向行走遇到的第一个节点）之间的数据，其它不受影响。增加一个节点也同理。")]),s._v(" "),a("p",[s._v("但是，一致性哈希算法在节点太少时，容易因为节点分布不均匀而造成"),a("strong",[s._v("缓存热点")]),s._v("的问题。为了解决这种热点问题，一致性 hash 算法引入了虚拟节点机制，即对每一个节点计算多个 hash，每个计算结果位置都放置一个虚拟节点。这样就实现了数据的均匀分布，负载均衡。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/consistent-hash-algorithm.png",alt:"image-20221114153303988"}})]),s._v(" "),a("h4",{attrs:{id:"_3-4-3-redis-cluster-的-hash-slot-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-redis-cluster-的-hash-slot-算法"}},[s._v("#")]),s._v(" 3.4.3 Redis cluster 的 hash slot 算法")]),s._v(" "),a("p",[s._v("Redis cluster 有固定的 "),a("code",[s._v("16384")]),s._v(" 个 hash slot，对每个 "),a("code",[s._v("key")]),s._v(" 计算 "),a("code",[s._v("CRC16")]),s._v(" 值，然后对 "),a("code",[s._v("16384")]),s._v(" 取模，可以获取 key 对应的 hash slot。")]),s._v(" "),a("p",[s._v("Redis cluster 中每个 master 都会持有部分 slot，比如有 3 个 master，那么可能每个 master 持有 5000 多个 hash slot。hash slot 让 node 的增加和移除很简单，增加一个 master，就将其他 master 的 hash slot 移动部分过去，减少一个 master，就将它的 hash slot 移动到其他 master 上去。移动 hash slot 的成本是非常低的。客户端的 api，可以对指定的数据，让他们走同一个 hash slot，通过 "),a("code",[s._v("hash tag")]),s._v(" 来实现。")]),s._v(" "),a("p",[s._v("任何一台机器宕机，另外两个节点，不影响的。因为 key 找的是 hash slot，不是机器。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs2022/hash-slot.png",alt:"image-20221114153352384"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);