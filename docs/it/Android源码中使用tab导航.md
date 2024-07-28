# Android源码中使用tab导航
#### 2017/06/22

自己工作的环境一直是在 Android 源码中，最近发现自己负责模块中的 tab 导航，还是使用着 ActionBar 的 tab 导航,感觉这种方式并不是十分之后符合项目的定制需求，所以打算改用 TabLayout+ViewPager 的方式完成tab导航。关于两种导航，网上的资料都很详细，这里不作详细说明。主要说说源码中使用 TabLayout+ViewPager 需要注意的地方。

## ActionBar 和 TabLayout

先了解一下这两种导航的使用，通过网上的教程，应该能掌握其基本的使用。附上相关链接  
ActionBar: [http://blog.csdn.net/guolin\_blog/article/details/18234477](http://blog.csdn.net/guolin_blog/article/details/18234477)  
Tablayout: [http://www.jianshu.com/p/7f79b08f5afa](http://www.jianshu.com/p/7f79b08f5afa)

## Android 源码中使用 TabLayout

在源码中使用 Tablayout 时，代码和自己在Android studio开发时完全一致，但是此时编译可能会报错，（会提示找不到相关的类），这主要是 mk 文件的编写问题，没有将所需要的依赖添加至自己的模块中，所以代码中的 import 会无效。  
解决方法：在 mk 文件中添加如下代码  

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line">LOCAL_RESOURCE_DIR += frameworks/support/v7/appcompat/res  <span class="comment">//v7资源包</span></span><br><span class="line">LOCAL_RESOURCE_DIR += frameworks/support/design/res   <span class="comment">//design资源包</span></span><br><span class="line"></span><br><span class="line">LOCAL_STATIC_JAVA_LIBRARIES += android-support-v7-appcompat</span><br><span class="line">LOCAL_STATIC_JAVA_LIBRARIES += android-support-design</span><br><span class="line">LOCAL_STATIC_JAVA_LIBRARIES += android-support-v4</span><br><span class="line"></span><br><span class="line">LOCAL_AAPT_FLAGS := \</span><br><span class="line">--<span class="attribute">auto</span>-add-overlay \</span><br><span class="line">--extra-packages android<span class="class">.support</span><span class="class">.v7</span><span class="class">.appcompat</span> \</span><br><span class="line">--extra-packages android<span class="class">.support</span><span class="class">.design</span></span><br></pre></td></tr></tbody></table>

要使用design包似乎必须导入v7资源包，同时要将style中的主题换成v7资源包下的主题。

## 使用app包下的fragment

前面使用的 Tablayout+viewpager+fragment 中，导入的是 v4.fragment,如果需要使用 android.app.fragment。那么需要将代码中的 v4.app.FragmentPagerAdapter 换成 v13.app.FragmentPagerAdapter。这两个 FragmentPagerAdapter 的使用方法一致，只是一个是 v4.fragment，一个是 android.app.fragment。具体使用前边的链接已经给出。使用v13包下的资源时，同时需要在 mk 文件中添加 ***LOCAL\_STATIC\_JAVA\_LIBRARIES += android-support-v13***