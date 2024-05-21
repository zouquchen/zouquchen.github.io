(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{480:function(s,a,n){"use strict";n.r(a);var e=n(8),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos安装nginx"}},[s._v("#")]),s._v(" CentOS安装Nginx")]),s._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("🔷  "),a("strong",[s._v("依赖安装")])]),s._v(" "),a("p",[s._v("安装所需依赖：pcre、openssl、zlib等")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc zlib zlib-devel pre-devel openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("🔷  "),a("strong",[s._v("下载nginx")])]),s._v(" "),a("p",[s._v("可以下载"),a("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装包"),a("OutboundLink")],1),s._v("进行安装，也可以使用wget命令进行安装，这里选择wget命令安装。（版本选择1.12.2）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" https://nginx.org/download/nginx-1.12.2.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("由于我使用管理员权限安装的，此时安装将下载到"),a("code",[s._v("/home/admin")]),s._v("目录下。")]),s._v(" "),a("blockquote",[a("p",[s._v("或者下载到指定路径\n"),a("code",[s._v("wget -c https://nginx.org/download/nginx-1.12.2.tar.gz /download")])])]),s._v(" "),a("p",[s._v("🔷  "),a("strong",[s._v("解压安装nginx")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" nginx-1.12.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.12.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("🔷  "),a("strong",[s._v("编译配置")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("🔷  "),a("strong",[s._v("开放端口")])]),s._v(" "),a("p",[s._v("开放80端口")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("firewall-cmd --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("重启防火墙")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("80端口已开启，nginx默认监听80端口。")]),s._v(" "),a("p",[s._v("🔷  "),a("strong",[s._v("启动nginx")])]),s._v(" "),a("p",[s._v("进入"),a("code",[s._v("cd /usr/local/nginx/sbin")]),s._v("目录下")]),s._v(" "),a("p",[s._v("启动nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看进程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/centos-install-nginx3.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("🔷  "),a("strong",[s._v("远程访问")])]),s._v(" "),a("p",[s._v("在浏览器内输入ip地址\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/centos-install-nginx1.png",alt:"在这里插入图片描述"}}),s._v("\n安装运行完成~")]),s._v(" "),a("h2",{attrs:{id:"配置开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置开机自启"}},[s._v("#")]),s._v(" 配置开机自启")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("/etc/rc.d/rc.local")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/rc.d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行以下命令，使"),a("code",[s._v("/etc/rc.d/rc.loca")]),s._v("l变成可执行文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/rc.d/rc.local\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("添加如下内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/centos-install-nginx2.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("使用 reboot 命令重启后，查看 nginx 是否成功的自启动了")]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("p",[s._v("进入 nginx 目录中 "),a("code",[s._v("cd /usr/local/nginx/sbin")])]),s._v(" "),a("p",[a("code",[s._v("./nginx -v")]),s._v("：查看 nginx 版本号")]),s._v(" "),a("p",[a("code",[s._v("./nginx")]),s._v("：启动 nginx")]),s._v(" "),a("p",[a("code",[s._v("./nginx -s stop")]),s._v("：停止 nginx")]),s._v(" "),a("p",[a("code",[s._v("./nginx -s reload")]),s._v("：重启 nginx")])])}),[],!1,null,null,null);a.default=t.exports}}]);