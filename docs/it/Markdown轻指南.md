# Markdown轻指南
#### 2016/09/25

之前就有接触Markdown,但一直不怎么用，主要是自己不怎么写博客。入职者两个月来，一直在用Markdown写日报，渐渐熟练了，就决定写一篇关于Markdown基本操作的文章。—*这玩意真的挺好用的*

### 标题

Markdown提供了六级标题，可以显示六种不同大小的标题，对于定义为标题的文字，在文字前添加#即可。添加的数量不同，标题级别不同。*注意空格*  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="preprocessor"># 一级标题</span></span><br><span class="line"><span class="preprocessor">## 二级标题</span></span><br><span class="line"><span class="preprocessor">### 三级标题</span></span><br><span class="line">......</span><br></pre></td></tr></tbody></table>

效果如下：

# 一级标题

## 二级标题

### 三级标题

* * *

### 粗体与斜体

从最早接触的office，到其他编辑器，粗体和斜体都是最常见的功能。所以Markdown肯定是支持的。使用粗体在文本的两端添加两个*，斜体则在文本的两端添加一个*  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">*</span><span class="keyword">*</span>很粗的<span class="keyword">*</span><span class="keyword">*</span></span><br></pre></td></tr></tbody></table>

**很粗的**  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">*</span>不直的<span class="keyword">*</span></span><br></pre></td></tr></tbody></table>

*不直的*

### 列表

列表分为有序列表和无序列表，有序列表以1.、2.、3.之类的数字开头，无序列表则以*或-开头，*注意空格\*  
有序列表：  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="bullet">1. </span>1</span><br><span class="line"><span class="bullet">2. </span>2</span><br><span class="line"><span class="bullet">3. </span>3</span><br></pre></td></tr></tbody></table>

1.  一
2.  二
3.  三

无序列表：  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="bullet">- </span>1</span><br><span class="line"><span class="bullet">* </span>2</span><br><span class="line"><span class="bullet">* </span>3</span><br></pre></td></tr></tbody></table>

+   1
+   2
+   3
    
    ### 引用
    
    如果我们需要借用他们的句子，便可以使用引用这个格式，引用的格式为，在引用的文本前加入>符号。*注意空格*
    
    <table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="blockquote">&gt; 这是引用效果</span></span><br></pre></td></tr></tbody></table>
    

> 这是引用效果

### 图片与链接

Markdown是支持插入图片和链接的，这样就大大的增强了内容的丰富性，也提升的用户的体验效果。Markdown中插入图片和链接都是采用URL地址的方式。因此，要想添加本地图片，比较复杂。  
插入图片:  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">![<span class="link_label">image</span>](<span class="link_url">http://7xjjaw.com1.z0.glb.clouddn.com/hexo/Summaryword-cloud-coding-vector-1695410.jpg</span>)</span><br></pre></td></tr></tbody></table>

()的内容就是图片的地址链接。目前\[\]中的文字似乎不添加也是可以的  
![image](http://7xjjaw.com1.z0.glb.clouddn.com/hexo/Summaryword-cloud-coding-vector-1695410.jpg)  
链接：  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">[<span class="link_label">豆瓣</span>](<span class="link_url">http://www.douban.com/</span>)</span><br></pre></td></tr></tbody></table>

[豆瓣](http://www.douban.com/)。是不是和插入图片的方法很像，\[\]中的文字就是链接的显示名称，可自己定义，()中就是链接的实际地址。  
自动链接：  
Markdown还有一种自动链接的方式，使用<>包含住URL地址即可。  
代码格式：  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">&lt;<span class="string">http:</span><span class="comment">//www.douban.com/&gt;</span></span><br></pre></td></tr></tbody></table>

显示效果:  
[http://www.douban.com/](http://www.douban.com/)

### 代码框

文中的代码都是以代码框的方式显示。代码框就是使用两行的

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```
我是代码框，框内可使用TAB键缩进的。http://www.douban.com/</span><br></pre></td></tr></tbody></table>

```auto
也可以将文字缩进4个空格，就会显示为代码框的形式
```

### 表格

表格的内容较多，而且不同编辑器似乎不太一样，但基本一致，如不成功可上网查询。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">header <span class="number">1</span> <span class="string">| header 2</span></span><br><span class="line">--- <span class="string">| ---</span></span><br><span class="line">row <span class="number">1</span> col <span class="number">1</span> <span class="string">| row 1 col 2</span></span><br><span class="line">row <span class="number">2</span> col <span class="number">1</span> <span class="string">| row 2 col 2</span></span><br></pre></td></tr></tbody></table>

效果如下：  
header 1 | header 2  
—-|—-  
row 1 col 1 | row 1 col 2  
row 2 col 1 | row 2 col 2

### 分割线

有时可能会用到，分割的形式就是单独一行输入三个\*或三个-  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">---</span></span><br></pre></td></tr></tbody></table>

* * *

上面有条线  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">*</span><span class="keyword">*</span><span class="keyword">*</span></span><br></pre></td></tr></tbody></table>

* * *

上面有条线

### 删除线

通过在文本前后添加 ~~ 表示删除线。  
这个一件已经完成的事情

### 换行和分段

刚使用时，肯定会遇到这个问题。Markdown中使用两个空格键+一个回车键进行换行，连续两个回车，即可形成分段，是不是很简单。这里就不做演示了。

### 特殊符号显示

看到这，你会发现很多符号都有自己的含义。但如果有时只想显示这个符号时，怎么办呢。Markdown使用的是\\来帮助你。  
代码格式：  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="string">\`</span></span><br></pre></td></tr></tbody></table>

显示效果  
\`  
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br></pre></td><td class="code"><pre><span class="line"><span class="string">\</span>   反斜线</span><br><span class="line">`   反引号</span><br><span class="line"><span class="string">\*</span>   星号</span><br><span class="line">_   底线</span><br><span class="line">{}  花括号</span><br><span class="line">[]  方括号</span><br><span class="line">()  括弧</span><br><span class="line"><span class="string">\#</span>   井字号</span><br><span class="line"><span class="string">\+</span>   加号</span><br><span class="line"><span class="string">\-</span>   减号</span><br><span class="line">.   英文句点</span><br><span class="line">!   惊叹号</span><br></pre></td></tr></tbody></table>

#### 相关文章链接

+   [Markdown——入门指南](http://www.jianshu.com/p/1e402922ee32/)
+   [献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER#)
+   [Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/#autolink)